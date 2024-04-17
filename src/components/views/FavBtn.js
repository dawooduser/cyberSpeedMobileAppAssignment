import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { memo } from 'react'
import { COLORS, commonStyles } from '../../constants/theme'
import { AntDesign } from '../../constants/icons'
import { useNavigation } from '@react-navigation/native'
import { screenNavigation } from '../../helper'
import { FavMovieCountBadge } from '..'

const FavBtn = () => {
    const navigation = useNavigation()
    const CB = () => screenNavigation(navigation, "Fav")
  return (
    <TouchableOpacity style={[styles.container]} onPress={CB}>
      <AntDesign name={'heart'} size={18} color={'white'} />
      <FavMovieCountBadge />
    </TouchableOpacity>
  )
}

export default memo(FavBtn)

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.secondary,
        padding: 8, borderRadius: 20
    }
})