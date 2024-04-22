import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import { FONTS, commonStyles } from '../../constants/theme'
import { HorizontalSpace } from '..'

const CardItemRow = ({title, value}) => {
  return (
    <View style={[commonStyles.rowDirectionCenter]}>
          <Text style={[commonStyles.colorWhiteText, FONTS.body4]}>{title}</Text>
          <HorizontalSpace width={2} />
          <Text style={[commonStyles.colorWhiteText, FONTS.body3]}>{value}</Text>
        </View>
  )
}

export default memo(CardItemRow)

const styles = StyleSheet.create({})