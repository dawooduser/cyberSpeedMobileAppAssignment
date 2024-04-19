import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback } from 'react'
import axiosInstance from './useAxiosInstance'

const useHttp = () => {

    const popularMovies = useCallback(async () => {
        return axiosInstance.get(`/?q=racing&L=en_GB`)
    }, [])

    const searchMovies = useCallback(async (query='') => {
        return axiosInstance.get(`/?q=${query}&L=en_GB`)
    }, [])

    const getMovieDetailByID = useCallback(async (id='') => {
        return axiosInstance.get(`/?tt=${id}`)
    }, [])

    
    
  return { popularMovies, searchMovies, getMovieDetailByID }
}

export default useHttp

const styles = StyleSheet.create({})