import { StyleSheet, Text, View } from 'react-native'
import React, { memo, useMemo } from 'react'
import { COLORS, FONTS, commonStyles } from '../../constants/theme'
import { useSelector } from 'react-redux'
import { useAddORRemoveFav } from '../../customHooks'
import { genericRatio } from '../../helper'

const FavMovieCountBadge = () => {
   const { count } = useAddORRemoveFav()
  return (
    <View style={[commonStyles.center, styles.container]}>
      <Text style={[FONTS.body5, commonStyles.colorWhiteText]}>{count}</Text>
    </View>
  )
}

export default FavMovieCountBadge

const styles = StyleSheet.create({
    container: {
        height: genericRatio(16),
        width: genericRatio(16), 
        backgroundColor: COLORS.primary,
        borderRadius: 100,
        position: 'absolute',
        top: -genericRatio(10),
        right: -genericRatio(5)
    },
})