import {StyleSheet, Text, TouchableOpacity} from 'react-native'
import React, {memo, useCallback} from 'react'
import {COLORS, FONTS, commonStyles} from '../../constants/theme'
import { useAddORRemoveFav } from '../../customHooks'

const AddToFavMovieBBtn = ({screenName, item = {}}) => {
  const {addItem, removeItem} = useAddORRemoveFav()
  const CBB = useCallback(() => {
    if (screenName === "Fav") {
      removeItem(item)
      return;
    }
    addItem(item)
  }, [screenName])
  return (
    <TouchableOpacity onPress={CBB}
      style={[commonStyles.fullWidth, commonStyles.center, styles.container]}>
      <Text style={[FONTS.body4, styles.cardTitleMoviename]}>
        {screenName === 'Home' ? 'Add to Favourite' : 'Remove'}
      </Text>
    </TouchableOpacity>
  )
}

export default memo(AddToFavMovieBBtn)

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  cardTitleMoviename: {color: COLORS.primary},
})
