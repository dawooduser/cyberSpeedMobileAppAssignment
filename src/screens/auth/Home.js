import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native'
import React, {useState} from 'react'
import {COLORS, commonStyles} from '../../constants/theme'
import {Header, PopularMoviesSection, TopRatedMoviesSection} from '../../components'

const Home = () => {
  return (
    <SafeAreaView style={[commonStyles.fillFullScreen, styles.container]}>
      <Header />
      <ScrollView style={[commonStyles.fillFullScreen]}>
        <PopularMoviesSection />
        {/* <TopRatedMoviesSection /> */}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.secondary
  }
})
