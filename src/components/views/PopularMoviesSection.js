import {StyleSheet, Text, View} from 'react-native'
import React, {memo, useCallback, useEffect, useState} from 'react'
import {useHttp} from '../../customHooks'
import {useDispatch} from 'react-redux'
import {hide, show} from '../../redux/reducers/spinner'
import {CardsSection, ListeningHeader} from '..'
import {FONTS, commonStyles} from '../../constants/theme'
import {showToastMsg} from '../../helper'

const PopularMoviesSection = () => {
  const {popularMovies} = useHttp()
  const [popularMoviesList, setpopularMoviesList] = useState([])
  useEffect(() => {
    gettingData()
  }, [])
  const gettingData = useCallback(async () => {
    const res = await popularMovies()
    let arr = res?.data?.description || []
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
