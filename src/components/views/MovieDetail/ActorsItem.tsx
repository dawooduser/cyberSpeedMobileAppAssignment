import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, commonStyles } from '../../../constants/theme'

const ActorsItem = ({ data, index }) => {
  return (
    <View style={[styles.conntanner, commonStyles.center, {marginLeft: index !== 0 ? 10 : 0}]}>
      <Text style={[FONTS.body4, commonStyles.colorPrimaryText]}>{data.name}</Text>
    </View>
  )
}

export default ActorsItem

const styles = StyleSheet.create({
    conntanner: {
        paddingVertical:5, paddingHorizontal: 10,
        backgroundColor: COLORS.lightPrimaryColor,
        borderRadius: 15,
        marginTop: 10
    }
})