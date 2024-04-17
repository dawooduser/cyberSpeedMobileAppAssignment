import {StyleSheet, Text, View} from 'react-native'
import React, {memo, useCallback, useEffect, useState} from 'react'
import {useHttp} from '../../customHooks'
import {useDispatch} from 'react-redux'
import {hide, show} from '../../redux/reducers/spinner'
import {CardsSection, ListeningHeader} from '..'
import {FONTS, commonStyles} from '../../constants/theme'
import { showToastMsg } from '../../helper'

const TopRatedMoviesSection = () => {
  const dispatch = useDispatch()
  const {topRatedMovies} = useHttp()
  const [topRatedMoviesList, settopRatedMoviesList] = useState([])
  useEffect(() => {
    gettingData()
  }, [])
  const gettingData = useCallback(async () => {
    try {
      dispatch(show())
      const res = await topRatedMovies()
      let arr = res?.data?.results || []
      if (arr.length > 0) arr.length = 6
      settopRatedMoviesList([...arr])
      dispatch(hide())
    } catch (err) {
      dispatch(hide())
      showToastMsg("error", err?.message || "Something went wrong")
    }
  }, [])
  return (
    <View style={[commonStyles.fillFullScreen]}>
      <ListeningHeader val={'Top Rated Movies Section'} />
      <CardsSection data={topRatedMoviesList} />
    </View>
  )
}

export default memo(TopRatedMoviesSection)

const styles = StyleSheet.create({})
