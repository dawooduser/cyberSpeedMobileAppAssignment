import {SafeAreaView, StyleSheet, Text, View} from 'react-native'
import React, { memo, useCallback, useMemo, useState } from 'react'
import { CardsSection, Header, VerticalSpace } from '../../components'
import { useHttp } from '../../customHooks'
import { COLORS, commonStyles } from '../../constants/theme'
import { useDispatch } from 'react-redux'
import { hide, show } from '../../redux/reducers/spinner'
import { showToastMsg } from '../../helper'
import { updateResult } from '../../redux/reducers/searchHistory'

const Search = () => {
  const {searchMovies} = useHttp()
  const dispatch = useDispatch()
  const [searchState, setSearchState] = useState({
    data: [], query: ""
  })

  const AboutSearch = useCallback(async (text)=> {
    if (text) {
      const res = await searchMovies(text)
      let arr = res?.data?.description || []
      if (arr.length > 0 && arr.length > 10) arr.length = 10
      setSearchState((prev) => ({...prev, data: [...arr], query: text,}))
      dispatch(updateResult([...arr]))
    }
  }, [searchState])

  const ListData = useMemo(() => searchState.data, [searchState])

  return (
    <SafeAreaView style={[commonStyles.fillFullScreen, styles.container]}>
      <Header mode={'Search'} onSearch={AboutSearch} />
      <VerticalSpace/>
      <CardsSection data={ListData} scrollEnabled searchMode />
    </SafeAreaView>
  )
}

export default memo(Search)

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.secondary
  }
})
