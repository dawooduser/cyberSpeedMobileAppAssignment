import { StyleSheet, Text, View } from 'react-native'
import React, { memo, useCallback, useState } from 'react'
import { FONTS, commonStyles, COLORS } from '../../../constants/theme'
import { AntDesign } from '../../../constants/icons'
import GenreItem from './GenreItem'
import VerticalSpace from '../VerticalSpace'
import { genericRatio } from '../../../helper'
import HorizontalSpace from '../HorizontalSpace'
import { useTextDescriptionVisibility } from '../../../customHooks'

const MovieHeader = ({data}) => {
    const {textShown, lengthMore, toggleNumberOfLines, onTextLayout} = useTextDescriptionVisibility()
    const [containerLayout, setContainerLayout] = useState(0)
    const layoutHandlerCB = useCallback((event) => {
        const {height} = event.nativeEvent.layout;
        setContainerLayout(height + genericRatio(10))
      }, [])
  return (
    <View
    onLayout={layoutHandlerCB} 
    style={[ commonStyles.fullWidth, styles.commonPaddingHorizontal,
      {marginTop: containerLayout > 0 ? -containerLayout : -genericRatio(200)},
    ]}>
    <View style={[{}]}>
      <View
        style={[  commonStyles.rowDirectionCenter, commonStyles.spaceBetween, {flexWrap: 'wrap'} ]}>
        <Text style={[commonStyles.colorWhiteText, FONTS.h2]}>
          {data?.name}
        </Text>
        <View style={[commonStyles.rowDirectionCenter]}>
          <AntDesign name={'star'} color={COLORS.primary} size={genericRatio(25)} />
          <HorizontalSpace />
          <Text style={[commonStyles.colorWhiteText, FONTS.h1]}>
            {data?.rating}
          </Text>
        </View>
      </View>
      <Text style={[commonStyles.colorWhiteText, FONTS.body2]}>
        {data?.year}
      </Text>

      <View
        style={[
          commonStyles.rowDirectionCenter,
          commonStyles.wrapContainer,
        ]}>
        {data.genre && data.genre.map((gen, key) => (
          <GenreItem item={gen} key={key} index={key} />
        ))}
      </View>
      <VerticalSpace />
      <View>
      <Text onTextLayout={onTextLayout} numberOfLines={textShown ? undefined : 4} style={[FONTS.body3, commonStyles.colorWhiteText]}>
        {data?.description}
      </Text>
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

export default memo(MovieHeader)

const styles = StyleSheet.create({
    commonPaddingHorizontal: {
        paddingHorizontal: 10,
      },
})