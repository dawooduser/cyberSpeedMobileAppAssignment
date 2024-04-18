import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, commonStyles } from '../../../constants/theme'

const GenreItem = ({item, index}) => {
  return (
    <View style={[styles.conntanner, commonStyles.center, {marginLeft: index !== 0 ? 10 : 0}]}>
      <Text style={[FONTS.body4, commonStyles.colorPrimaryText]}>{item}</Text>
    </View>
  )
}

export default GenreItem

const styles = StyleSheet.create({
    conntanner: {
        paddingVertical:5, paddingHorizontal: 10,
        backgroundColor: COLORS.lightColor,
        borderRadius: 15,
        marginTop: 10
    }
})