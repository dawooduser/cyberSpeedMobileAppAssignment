import {FlatList, Linking, StyleSheet, Text, View} from 'react-native'
import React, {memo, useCallback} from 'react'
import { FlashList } from "@shopify/flash-list";
import { MovieCard, VerticalSpace } from '..';
import { COLORS, FONTS, commonStyles } from '../../constants/theme';
import { useNavigation } from '@react-navigation/native';
import { screenNavigation } from '../../helper';

const CardsSection = ({data, scrollEnabled, callFrom, onEndReachedCB, searchMode}) => {
  const navigaiton = useNavigation()
  const screenNavigationToDetail = id => screenNavigation(navigaiton, "MovieDetail", {id})
  const showEmptyListView = useCallback(() => {
    if (data.length != 0) return null;
    if (!searchMode) {
      return (
        <View style={[commonStyles.fullWidth, commonStyles.center, {padding: 10}]}>
          <View style={{padding: 10, backgroundColor: COLORS.lightPrimaryColor}}>
          <Text style={[commonStyles.colorWhiteText, FONTS.body3]}>{"This website has been temporarily rate limited"}</Text>
          <VerticalSpace />
          <Text style={[commonStyles.colorWhiteText, FONTS.body3, commonStyles.textFamily700]}>{"This API Serivce error, API HITS Limited"}</Text>
          <Text style={{color: COLORS.primary}} onPress={() => Linking.openURL('https://search.imdbot.workers.dev/?q=racing&L=en_GB')}>click here to check</Text>
          </View>
        </View>
       )
    } else {
      return (
        <View style={[commonStyles.fullWidth, commonStyles.center, {padding: 10}]}>
          <View style={{padding: 10, backgroundColor: COLORS.lightPrimaryColor}}>
          <Text style={[commonStyles.colorWhiteText, FONTS.body3]}>{"Search Result is zero"}</Text>
          </View>
        </View>
       )
    }
    
  }, [])
  return (
    <View style={[commonStyles.fillFullScreen]}>
      <FlatList
      data={data}
      extraData={{}}
      numColumns={2}
      scrollEnabled={scrollEnabled}
      ItemSeparatorComponent={() =>(<VerticalSpace />)}
      renderItem={({item, index}) => <MovieCard navigationToScreen={screenNavigationToDetail} item={item} index={index} callFrom={callFrom}  />}
      keyExtractor={(item, index) => index}
      ListEmptyComponent={showEmptyListView}
      estimatedItemSize={200}
    />
    </View>
  )
}
CardsSection.defaultProps = {
  searchMode: false,
  data: [],
  scrollEnabled: false,
  callFrom: 'Home',
  onEndReachedCB: () => console.log('List reach on end')
}
export default memo(CardsSection)

const styles = StyleSheet.create({})
