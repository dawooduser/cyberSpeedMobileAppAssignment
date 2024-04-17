import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { memo } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '../../constants/icons'

const HeaderBackBtn = () => {
    const navigation = useNavigation()
    const CB = () => navigation.pop()
  return (
    <TouchableOpacity style={[styles.container]} onPress={CB}>
      <Ionicons name={'arrow-back'} size={18} color={'white'} />
    </TouchableOpacity>
  )
}

export default memo(HeaderBackBtn)

const styles = StyleSheet.create({
  container: {}
})