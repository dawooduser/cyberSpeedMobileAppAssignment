import {StyleSheet, Text, View} from 'react-native'
import React, {memo, useCallback, useEffect, useState} from 'react'
import {useHttp} from '../../customHooks'
import {useDispatch, useSelector} from 'react-redux'
import {hide, show} from '../../redux/reducers/spinner'
import {CardsSection, ListeningHeader} from '..'
import {FONTS, commonStyles} from '../../constants/theme'
import {showToastMsg} from '../../helper'

const PopularMoviesSection = () => {
  const {popularMovies} = useHttp()
  const [popularMoviesList, setpopularMoviesList] = useState([])
  const oldDataListOfMovies = useSelector(x => x.searchHistory.results)
  useEffect(() => {
    console.log('useEffect', oldDataListOfMovies.length)
    if (oldDataListOfMovies.length) {
      console.log('yahoo here see', oldDataListOfMovies.length)
      setpopularMoviesList([...oldDataListOfMovies])
      return;
    }
    gettingData()
  }, [])
  const gettingData = useCallback(async () => {
    console.log('gettingData',)
    const res = await popularMovies()
    console.log('get', res)
    let arr = res?.data?.description || []
    console.log({arr})
    if (arr.length > 0 && arr.length > 10) arr.length = 10
    setpopularMoviesList([...arr])
  }, [])
  return (
    <View style={[commonStyles.fillFullScreen]}>
      <ListeningHeader val={'Popular Movies Section'} />
      <CardsSection data={popularMoviesList} />
    </View>
  )
}

export default memo(PopularMoviesSection)

const styles = StyleSheet.create({})
