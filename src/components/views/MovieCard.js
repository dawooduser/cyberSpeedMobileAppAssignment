import {StyleSheet, Text, View, Image, Touchable, TouchableOpacity} from 'react-native'
import React from 'react'
import {COLORS, FONTS, commonStyles} from '../../constants/theme'
import {genericHeight} from '../../helper'
import {  HorizontalSpace, VerticalSpace} from '..'
import CardItemRow from './CardItemRow'
import FastImage from 'react-native-fast-image'


const MovieCard = ({index, item, callFrom, navigationToScreen}) => {
  return (
    <TouchableOpacity key={index} 
    activeOpacity={1}
    onPress={() => navigationToScreen(item['#IMDB_ID'])}
    style={[commonStyles.fillFullScreen, styles.container]}>
      <FastImage
        source={{uri: item['#IMG_POSTER']}}
        resizeMode={FastImage.resizeMode.stretch}
        style={[commonStyles.fullWidth, {height: genericHeight(180)}]}
      />
      <View style={[commonStyles.fullWidth, styles.cardTextContainer]}>
        <CardItemRow title={'Release:'} value={item['#YEAR']} />
        <CardItemRow title={'IMDB Rank:'} value={item['#RANK']} />
        <View style={[commonStyles.rowDirectionCenter]}>
          <Text style={[commonStyles.colorWhiteText, FONTS.body4]}>{'Title:'}</Text>
          <HorizontalSpace width={2} />
          <Text style={[styles.cardTitleMoviename, FONTS.body3, commonStyles.fillFullScreen ]} numberOfLines={1}>{item['#TITLE']}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default MovieCard

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.lightPrimaryColor,
    margin: 5,
    marginVertical: 0,
  },
  cardTextContainer: {paddingHorizontal: 5, paddingVertical: 5},
  cardTitleMoviename: {color: COLORS.primary, flexWrap: 'wrap'}
})
