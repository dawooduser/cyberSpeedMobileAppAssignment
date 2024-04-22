import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { commonStyles } from '../../../constants/theme'
import ActorsItem from './ActorsItem'
import ListeningHeader from '../ListeningHeader'

const ActorsContainer = ({actor = []}) => {
  return (
    <View
          style={[
            commonStyles.fullWidth,
            styles.commonPaddingHorizontal,
          ]}>
          <ListeningHeader val={'Actors'} />
          <View
            style={[
              commonStyles.rowDirectionCenter,
              commonStyles.wrapContainer,
            ]}>
            {actor.map((val, index) => (
              <ActorsItem key={index} data={val} index={index} />
            ))}
          </View>
        </View>
  )
}

export default ActorsContainer

const styles = StyleSheet.create({
    commonPaddingHorizontal: {
        paddingHorizontal: 10,
      }
})