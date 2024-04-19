import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, commonStyles } from '../../../constants/theme'

const KeywordItems = ({index, item}) => {
  return (
    <View style={[styles.conntanner, commonStyles.center, {marginLeft: index !== 0 ? 10 : 0}]}>
    <Text style={[FONTS.body4, commonStyles.colorWhiteText]}>{item}</Text>
  </View>
  )
}

export default KeywordItems

const styles = StyleSheet.create({
    conntanner: {
        paddingVertical:5, paddingHorizontal: 10,
        backgroundColor: COLORS.primary,
        borderRadius: 15,
        marginTop: 10
    }
})