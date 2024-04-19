import { StyleSheet, Text, View } from 'react-native'
import React, { memo, useCallback, useState } from 'react'
import { COLORS, FONTS, commonStyles } from '../../../constants/theme'
import ListeningHeader from '../ListeningHeader'
import { genericRatio } from '../../../helper'
import { AntDesign } from '../../../constants/icons'
import HorizontalSpace from '../HorizontalSpace'
import VerticalSpace from '../VerticalSpace'
import moment from 'moment'
import { useTextDescriptionVisibility } from '../../../customHooks'

const ReviewContainer = ({data}) => {
    const {textShown, lengthMore, toggleNumberOfLines, onTextLayout} = useTextDescriptionVisibility()
  return (
    <View style={[ commonStyles.fullWidth, styles.commonPaddingHorizontal, ]}>
    <ListeningHeader val={'User Reviews'} />
    <View style={[commonStyles.fullWidth, styles.userReviewConntianner]}>
      <View style={[commonStyles.rowDirectionCenter, commonStyles.spaceBetween]}>
      <View style={[styles.userReviewFeatureContainenr, commonStyles.center]}>
          <Text style={[FONTS.body3, commonStyles.colorWhiteText]}>{"FEATURED REVIEW"}</Text>
      </View>
      <View style={[commonStyles.rowDirectionCenter]}>
      <AntDesign
            name={'star'}
            color={COLORS.primary}
            size={genericRatio(15)}
          />
          <HorizontalSpace />
          <Text style={[commonStyles.colorWhiteText, FONTS.body4]}>
           {`${data?.reviewRating.ratingValue}/${data?.reviewRating.bestRating}`}
          </Text>
      </View>
      </View>
      <VerticalSpace />
      <View style={[commonStyles.rowDirection]}>
          <View style={[styles.reviewContainerCircularName, commonStyles.center]}>
              <Text style={[commonStyles.colorWhiteText, FONTS.body2]}>{data?.author?.name[0]}</Text>
          </View>
          <HorizontalSpace />
          <View>
              <Text style={[commonStyles.colorWhiteText, FONTS.body4]}>{data?.author?.name}</Text>
              {data?.dateCreated && 
              <Text style={[commonStyles.colorWhiteText, FONTS.body4]}>{moment(data?.dateCreated).format('LL')}</Text>}
          </View>
      </View>
      <VerticalSpace />
      <Text style={[commonStyles.colorWhiteText, FONTS.body4, commonStyles.textFamily900]}>{data?.name}</Text>
      
      <View>
      <Text
      onTextLayout={onTextLayout}
      numberOfLines={textShown ? undefined : 4}
      style={[commonStyles.colorWhiteText, FONTS.body4, commonStyles.textFamily200]}>{data?.reviewBody}</Text>
      {
            lengthMore ? <Text
            onPress={toggleNumberOfLines}
            style={[commonStyles.colorWhiteText, FONTS.body4, commonStyles.textFamily700]}>{textShown ? 'Read less...' : 'Read more...'}</Text>
            :null
        }
      </View>
      
    </View>
  </View>
  )
}

export default memo(ReviewContainer)

const styles = StyleSheet.create({
    commonPaddingHorizontal: {
        paddingHorizontal: 10,
      },
    userReviewConntianner: {
        backgroundColor: COLORS.lightPrimaryColor,
        paddingHorizontal: 10,
        paddingVertical: 10
      },
      userReviewFeatureContainenr: {
        backgroundColor: COLORS.primary,
        paddingHorizontal: 10,
        borderRadius: 8,
        paddingVertical: 2
      },
      reviewContainerCircularName: {
        height: genericRatio(40),
        width: genericRatio(40),
        backgroundColor: COLORS.primary,
        borderRadius: genericRatio(40),
      },
})