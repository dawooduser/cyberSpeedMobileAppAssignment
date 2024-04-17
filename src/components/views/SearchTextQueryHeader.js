import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'
import React, {memo, useCallback, useState} from 'react'
import {COLORS, commonStyles} from '../../constants/theme'
import {AntDesign, Entypo} from '../../constants/icons'
import {HorizontalSpace} from '..'
import { genericRatio } from '../../helper'

let TimeoutInstance = null
const SearchTextQueryHeader = ({onSearchCB}) => {
  const [searchValue, setSearchValue] = useState('')
  const onSearchTrigger = val => {
    if (TimeoutInstance) {
      clearInterval(TimeoutInstance)
    }
    if (val !== '') {
      TimeoutInstance = setTimeout(() => {
        onSearchCB(val)
      }, 800)
    }
    setSearchValue(val)
  }
  const clearText = () => {
    if (TimeoutInstance) {
      clearInterval(TimeoutInstance)
    }
    setSearchValue("")
  }
  return (
    <View
      style={[
        commonStyles.fillFullScreen,
        commonStyles.rowDirectionCenter,
        styles.container,
      ]}>
      <AntDesign name={'search1'} color={'white'} size={25} />
      <HorizontalSpace width={5} />
      <TextInput
        placeholder='Search.....'
        style={[styles.textInputContainer]}
        defaultValue={searchValue}
        onChangeText={onSearchTrigger}
        numberOfLines={1}
        placeholderTextColor={'white'}
      />
      <HorizontalSpace width={5} />
      <TouchableOpacity style={[styles.crossContainer, commonStyles.center]} onPress={clearText}>
        <Entypo name={'cross'} color={'white'} size={10} />
      </TouchableOpacity>
    </View>
  )
}
SearchTextQueryHeader.defaultProps = {
  onSearchCB: (text) => console.log('what your search', text),
}

export default memo(SearchTextQueryHeader)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#202020',
    paddingHorizontal: 10,
  },
  textInputContainer: {
    padding: 0,
    paddingHorizontal: 10,
    flex: 1,
    height: genericRatio(30),
    borderBottomWidth: 0.5,
    borderColor: 'white',
    color: 'white'
    // backgroundColor: 'aqua',
  },
  crossContainer: {
    padding: 5,
    borderRadius: 20,
    backgroundColor: COLORS.primary
  }
})
