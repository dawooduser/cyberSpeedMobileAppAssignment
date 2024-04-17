import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback } from 'react'
import axiosInstance from './useAxiosInstance'
import { POPULARMOVIES, SEARCHMOVIES, TOPRATEDMOVIES } from '../../http/HttpActions'

const useHttp = () => {

    const popularMovies = useCallback(async () => {
        return axiosInstance.get(`/?q=racing&L=en_GB`)
    }, [])

    const searchMovies = useCallback(async (query='', pageIndex = 1) => {
        return axiosInstance.get(`/?q=${query}&L=en_GB`)
    }, [])

    
    
  return { popularMovies, searchMovies }
}

export default useHttp

const styles = StyleSheet.create({})