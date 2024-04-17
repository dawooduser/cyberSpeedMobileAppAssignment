import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, commonStyles } from '../../constants/theme'
import { useSelector } from 'react-redux'
import { CardsSection, Header, VerticalSpace } from '../../components'
import { useAddORRemoveFav } from '../../customHooks'

const Fav = () => {
  const {Listening} = useAddORRemoveFav()
  return (
    <SafeAreaView style={[commonStyles.fillFullScreen, styles.container]}>
      <Header mode={'Fav'} />
      <VerticalSpace />
      <CardsSection data={Listening} scrollEnabled callFrom={"Fav"} />
    </SafeAreaView>
  )
}

export default Fav

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.secondary
  }
})