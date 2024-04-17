import {StyleSheet, Text, View} from 'react-native'
import React, {memo} from 'react'
import { FlashList } from "@shopify/flash-list";
import { MovieCard, VerticalSpace } from '..';
import { commonStyles } from '../../constants/theme';

const CardsSection = ({data, scrollEnabled, callFrom, onEndReachedCB}) => {
  return (
    <View style={[commonStyles.fillFullScreen]}>
      <FlashList
      data={data}
      extraData={{}}
      numColumns={2}
      scrollEnabled={scrollEnabled}
      ItemSeparatorComponent={() =>(<VerticalSpace />)}
      renderItem={({item, index}) => <MovieCard item={item} index={index} callFrom={callFrom} />}
      keyExtractor={(item, index) => index}
      estimatedItemSize={200}
    />
    </View>
  )
}
CardsSection.defaultProps = {
  data: [],
  scrollEnabled: false,
  callFrom: 'Home',
  onEndReachedCB: () => console.log('List reach on end')
}
export default memo(CardsSection)

const styles = StyleSheet.create({})
