import { StyleSheet, Text, SafeAreaView, ImageBackground, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FONTS, SIZES, commonStyles } from '../../constants/theme'
import { GenreItem, Header, HorizontalSpace, VerticalSpace } from '../../components'
import { genericRatio } from '../../helper'
import { AntDesign } from '../../constants/icons'

const MovieDetail = () => {
    const [movieDetailStates, setMovieDetailStates] = useState({
        image: "https://www.ionos.co.uk/digitalguide/fileadmin/DigitalGuide/Teaser/pinterest-oder-instagramm-t.jpg",
        movieName: 'Movie Name', description: "A documentary that follows undercover activists trying to stave off a man-made mass extinction.",
        rating: '8.7', year: '2020',
        genre: [ "Documentary", "Adventure", "News" ],
    })
  return (
    <SafeAreaView style={[commonStyles.fillFullScreen, styles.container]}>
        <ScrollView style={[commonStyles.fillFullScreen]}>
        <ImageBackground style={styles.imageCover} source={{uri: movieDetailStates.image}} resizeMode={"stretch"}>
            <View style={[commonStyles.fillFullScreen,]}>
                <Header mode={"MovieDetail"} customAddContainerStyle={{backgroundColor: 'transparent'}} />
            </View>
        </ImageBackground>
        <View style={[commonStyles.fullWidth, styles.commonPaddingHorizontal, {marginTop: 0}]}>
            <View style={[{backgroundColor: 'red'}]}>
                <View style={[commonStyles.rowDirectionCenter, commonStyles.spaceBetween,]}>
                <Text style={[commonStyles.colorWhiteText, FONTS.h2]}>{movieDetailStates.movieName}</Text>
                <View style={[commonStyles.rowDirectionCenter]}>
                    <AntDesign name={'star'} color={COLORS.primary} size={genericRatio(25)} />
                    <HorizontalSpace />
                    <Text style={[commonStyles.colorWhiteText, FONTS.h1]}>{movieDetailStates.rating}</Text>
                </View>
                </View>
                <Text style={[commonStyles.colorWhiteText, FONTS.body2]}>{movieDetailStates.year}</Text>
                
                <View style={[commonStyles.rowDirectionCenter, commonStyles.wrapContainer]}>
                    {movieDetailStates.genre.map((gen, key) => <GenreItem item={gen} key={key} index={key} />)}
                </View>
                <VerticalSpace />
                <Text style={[FONTS.body3, commonStyles.colorWhiteText]}>{movieDetailStates.description}</Text>
            </View>
        </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default MovieDetail

const styles = StyleSheet.create({
    container: {
      backgroundColor: COLORS.secondary
    },
    imageCover: {
        ...commonStyles.fullWidth,
        height: genericRatio(400)
    },
    commonPaddingHorizontal: {
        paddingHorizontal: 10
    }
  })
  