import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from '../../redux/reducers/FavouriteMoviesData'
import { showToastMsg } from '../../helper'

const useAddORRemoveFav = () => {
    const data = useSelector(x=> x.FavouriteMoviesDataSlice.data)
    const dispatch = useDispatch()
    const count = useMemo(() => data?.length || 0, [data])
    const Listening = useMemo(() => data, [data])
    const addItem = useCallback((item) => {
        if (data.length > 0) {
            const find = data.find(x => x.id === item.id)
            if (find) {
                showToastMsg('info', 'Already Added')
                return;
            }
        }
        dispatch(add(item))
        showToastMsg('success', 'Added')
    }, [data])

    const removeItem = useCallback((item) => {
        if (item) {
            const findIndex = data.findIndex(x => x.id === item.id)
            if (findIndex >= 0) {
                dispatch(remove(findIndex))
            }
        }
    }, [data])

  return {count, addItem, removeItem, Listening}
}

export default useAddORRemoveFav

const styles = StyleSheet.create({})