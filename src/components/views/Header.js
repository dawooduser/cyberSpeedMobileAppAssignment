import {StyleSheet, Text, View} from 'react-native'
import React, {memo, useCallback} from 'react'
import {COLORS, FONTS, commonStyles} from '../../constants/theme'
import {AntDesign} from '../../constants/icons'
import {
  HeaderBackBtn,
  HorizontalSpace,
  SearchTextQueryHeader,
  SearchViewHeader,
} from '../index'

const Header = ({mode, onSearch, customAddContainerStyle}) => {
  
  const HeaderModeModel = useCallback(() => {
    switch (mode) {
      case 'Home':
        return <HomeMode />
      case 'Search':
        return <SearchMode />
        case 'MovieDetail':
        return <MovieDetailMode />
      default:
        return null
    }
  }, [])
  const HomeMode = useCallback(
    () => (
      <View
        style={[commonStyles.rowDirectionCenter, commonStyles.fillFullScreen]}>
        <View style={[commonStyles.fillFullScreen]}>
          <Text style={[FONTS.h2, styles.title]}>{'Export Movies'}</Text>
        </View>
        <SearchViewHeader />
      </View>
    ),
    [],
  )
  const SearchMode = useCallback(
    () => (
      <View
        style={[commonStyles.rowDirectionCenter, commonStyles.fillFullScreen]}>
        <HeaderBackBtn />
        <HorizontalSpace />
        <SearchTextQueryHeader onSearchCB={onSearch} />
      </View>
    ),
    [],
  )

  const MovieDetailMode = useCallback(
    () => (
      <HeaderBackBtn />
    ),
    [],
  )

  return (
    <View
      style={[
        commonStyles.fullWidth,
        commonStyles.rowDirectionCenter,
        styles.container, customAddContainerStyle,
      ]}>
      <HeaderModeModel />
    </View>
  )
}
Header.defaultProps = {
  mode: 'Home',
  onSearch: text =>
    console.log('SearchMode => SearchTextQueryHeader => ', text),
  customAddContainerStyle: {}
}
export default memo(Header)

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    backgroundColor: COLORS.lightPrimaryColor,
    paddingVertical: 10,
  },
  title: {
    color: COLORS.primary,
    fontFamily: 'Roboto-light',
  },
})
