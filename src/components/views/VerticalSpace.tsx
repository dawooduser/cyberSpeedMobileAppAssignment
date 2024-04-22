import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'

const VerticalSpace = ({height = 10}) => {
  return (
    <View style={[styles.container, {height}]} />
  )
}

export default memo(VerticalSpace)

const styles = StyleSheet.create({
    container: {
        height: 10
    }
})