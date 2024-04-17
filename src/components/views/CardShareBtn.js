import {StyleSheet, Text, TouchableOpacity, Alert} from 'react-native'
import React, {memo} from 'react'
import {COLORS, FONTS, commonStyles} from '../../constants/theme'
import Share from 'react-native-share'
import {showToastMsg} from '../../helper'
import RNFetchBlob from 'rn-fetch-blob'
import {imagePath} from '../../constants/image'
import {useDispatch} from 'react-redux'
import { hide, show } from '../../redux/reducers/spinner'

const CardShareBtn = ({item}) => {
  const dispatch = useDispatch()
  const onShare = async () => {
    const share = base64image => {
      let shareOptions = {
        title: `Movie ${item.title}`,
        url: base64image,
        message: `Please watch this movie here link https://www.themoviedb.org/movie/${
          item.id
        }-${item.title.split(' ').join('-')}`,
        subject: 'item.title',
      }

      Share.open(shareOptions)
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          showToastMsg('info', err?.message || 'Something went wrong')
        })
    }
    dispatch(show())
    return RNFetchBlob.fetch('GET', `${imagePath}${item.poster_path}`)
      .then(resp => {
        dispatch(hide())
        console.log('response : ', resp)
        console.log(resp.data)
        let base64image = resp.data
        share('data:image/png;base64,' + base64image)
      })
      .catch(err => {
        dispatch(hide())
        showToastMsg('info', err?.message || 'Something went wrong')
      })
  }
  return (
    <TouchableOpacity
      onPress={onShare}
      style={[
        commonStyles.fullWidth,
        commonStyles.center,
        styles.container,
        commonStyles.shadow,
      ]}>
      <Text style={[FONTS.body4, commonStyles.colorWhiteText]}>{'Share'}</Text>
    </TouchableOpacity>
  )
}

export default memo(CardShareBtn)

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
  },
})
