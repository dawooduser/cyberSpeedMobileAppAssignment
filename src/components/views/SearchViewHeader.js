import {StyleSheet, Text, TouchableOpacity} from 'react-native'
import React, {memo} from 'react'
import {COLORS, FONTS, commonStyles} from '../../constants/theme'
import {AntDesign} from '../../constants/icons'
import {HorizontalSpace} from '..'
import { useNavigation } from '@react-navigation/native'
import { screenNavigation } from '../../helper'

const SearchViewHeader = () => {
    const navigation = useNavigation()
    const CB = () => screenNavigation(navigation, "Search")
  return (
    <TouchableOpacity style={[commonStyles.rowDirectionCenter, styles.searchContainer]}
    onPress={CB}
    >
      <AntDesign name={'search1'} color={'white'} size={18} />
      <HorizontalSpace width={5} />
      <Text style={[FONTS.body2, styles.searchTitle]}>{'Search'}</Text>
    </TouchableOpacity>
  )
}

export default memo(SearchViewHeader)

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: COLORS.secondary,
    borderRadius: 20,

    paddingHorizontal: 8,
    paddingVertical: 5,
  },
  searchTitle: {
    color: COLORS.white,
  },
})
