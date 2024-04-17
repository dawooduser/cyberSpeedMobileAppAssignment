import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback } from 'react'
import axiosInstance from './useAxiosInstance'

const useHttp = () => {

    const popularMovies = useCallback(async () => {
        console.log('popularMovies')
        return axiosInstance.get(`/?q=racing&L=en_GB`)
    }, [])

    const searchMovies = useCallback(async (query='') => {
        return axiosInstance.get(`/?q=${query}&L=en_GB`)
    }, [])

    
    
  return { popularMovies, searchMovies }
}

export default useHttp

const styles = StyleSheet.create({})