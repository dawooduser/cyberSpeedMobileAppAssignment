import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import { FONTS, commonStyles } from '../../constants/theme'

const ListeningHeader = () => {
  return (
    <View style={[styles.container]}>
      <Text style={[FONTS.h2, commonStyles.colorWhiteText]}>{'Popular Movies Section'}</Text>
    </View>
  )
}

export default memo(ListeningHeader)

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10, 
        paddingHorizontal: 5
    }
})