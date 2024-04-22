import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GenreItem from './GenreItem'
import { commonStyles } from '../../../constants/theme'
import ListeningHeader from '../ListeningHeader'
import KeywordItems from './KeywordItems'

const KeywordContainer = ({keywords = []}) => {
  if(keywords.length === 0) return null
  return (
    <View
          style={[
            commonStyles.fullWidth,
            styles.commonPaddingHorizontal,
          ]}>
          <ListeningHeader val={'Keywords'} />
          <View
            style={[
              commonStyles.rowDirectionCenter,
              commonStyles.wrapContainer,
            ]}>
            {keywords && keywords.map((val, index) => (
              <KeywordItems key={index} item={val} index={index} />
            ))}
          </View>
        </View>
  )
}

export default KeywordContainer

const styles = StyleSheet.create({
    commonPaddingHorizontal: {
        paddingHorizontal: 10,
      }
})