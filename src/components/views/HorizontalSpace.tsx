import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'

const HorizontalSpace = ({width}) => {
  return (
    <View style={[styles.container, {width}]} />
  )
}
HorizontalSpace.defaultProps = {
    width: 10
}
export default memo(HorizontalSpace)

const styles = StyleSheet.create({
    container: {}
})