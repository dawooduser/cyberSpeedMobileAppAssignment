import {
  StyleSheet,
  Text,
  SafeAreaView,
  ImageBackground,
  View,
  ScrollView,
  ActivityIndicator,
} from 'react-native'
import React, {useCallback, useLayoutEffect, useState} from 'react'
import {COLORS, FONTS, SIZES, commonStyles} from '../../constants/theme'
import {
  ActorsContainer,
  ActorsItem,
  GenreItem,
  Header,
  HorizontalSpace,
  KeywordContainer,
  ListeningHeader,
  MovieHeader,
  ReviewContainer,
  VerticalSpace,
} from '../../components'
import {genericRatio, showToastMsg} from '../../helper'
import {AntDesign} from '../../constants/icons'
import moment from 'moment'
import {useHttp} from '../../customHooks'
import {useDispatch, useSelector} from 'react-redux'
import {moviePlaceHolder} from '../../constants/image'
import {updateMovies} from '../../redux/reducers/MoviesDetail'
import FastImage from 'react-native-fast-image';
import { createImageProgress } from 'react-native-image-progress';
import * as Progress from 'react-native-progress';


const ImageContainer = createImageProgress(FastImage);

const MovieDetail = ({route, navigation}) => {
  const {getMovieDetailByID} = useHttp()
  const dispatch = useDispatch()
  const moviesList = useSelector(x => x.moviesDetail.movies)
  const [movieDetailStates, setMovieDetailStates] = useState({})

  useLayoutEffect(() => {
    (async () => {
      const id = route?.params?.id || 'tt1478839'
      if (moviesList[id]) {
        setMovieDetailStates({...movieDetailStates, ...moviesList[id]})
        return
      }
      const res = await getMovieDetailByID(id)
      const data = res?.data?.short || {}
      const topContain = res?.data?.top || {}
      let year = '-'
      if (data) {
        const {
          image = '',
          name = '',
          description = '',
          rating = '',
          genre = [],
          actor = [],
          review = {},
        } = data
        let keywords = []
        if (topContain) {
          const _keywords = topContain?.keywords?.edges || []
          keywords = _keywords.map(val => val.node.text)
          year = topContain?.releaseYear?.year || '-'
        }
        setMovieDetailStates({
          ...movieDetailStates,
          image,
          name,
          description,
          rating,
          year,
          genre,
          keywords,
          actor,
          review,
        })
        dispatch(
          updateMovies({
            id,
            data: {
              image,
              name,
              description,
              rating,
              year,
              genre,
              keywords,
              actor,
              review,
            },
          }),
        )
      } else {
        navigation.pop()
        showToastMsg('error', 'request timeout',)
      }
    })()
  }, [])
  return (
    <SafeAreaView style={[commonStyles.fillFullScreen, styles.container]}>
      <ScrollView style={[commonStyles.fillFullScreen]}>
        <ImageContainer
          style={styles.imageCover}
          indicator={Progress.Pie}
          source={
            movieDetailStates.image
              ? {uri: movieDetailStates.image, priority: FastImage.priority.high,}
              : moviePlaceHolder
          }
          resizeMode={FastImage.resizeMode.stretch}>
          <View style={[commonStyles.fillFullScreen, {backgroundColor: COLORS.backdrop}]}>
            <Header
              mode={'MovieDetail'}
              customAddContainerStyle={{backgroundColor: 'transparent'}}
            />
          </View>
        </ImageContainer>

        <MovieHeader data={movieDetailStates} />

        <ActorsContainer actor={movieDetailStates?.actor || []} />

        <ReviewContainer data={movieDetailStates.review} />

        <KeywordContainer keywords={movieDetailStates?.keywords || []} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default MovieDetail

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.secondary,
  },

  imageCover: {
    ...commonStyles.fullWidth,
    height: genericRatio(400),
  },
  commonPaddingHorizontal: {
    paddingHorizontal: 10,
  },
})
