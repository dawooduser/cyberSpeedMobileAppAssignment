import {StyleSheet, Text, View} from 'react-native'
import React, {useCallback, useState} from 'react'

const useTextDescriptionVisibility = () => {
  const [textShown, setTextShown] = useState(false)
  const [lengthMore, setLengthMore] = useState(false)
  const toggleNumberOfLines = () => setTextShown(!textShown)
  const onTextLayout = useCallback(
    e => setLengthMore(e.nativeEvent.lines.length >= 4),
    [],
  )

  return {textShown, lengthMore, toggleNumberOfLines, onTextLayout}
}

export default useTextDescriptionVisibility

const styles = StyleSheet.create({})
