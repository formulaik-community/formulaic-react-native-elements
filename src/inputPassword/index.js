import React from 'react'
import { useCallback, useEffect, useState, } from 'react'
import { Input } from '@rneui/themed'
import { useDebouncedCallback } from 'use-debounce'

export default (props) => {
  const {
    value,
    error,
    disabled,
    onValueChanged,
    item: {
      params = {},
    }
  } = props

  const {
    placeholder,
    inputDelay = 1000,
    className = '',
    multiline = true,
    variant = "outlined",
    textColorThird = "#fafafa",
    accentColor = "#e76f51",
    fontSize = 16,
    fontFamily,
  } = params

  const [innerValue, setInnerValue] = useState(value ? value : '')

  useEffect(() => {
    setInnerValue(value ? value : '')
  }, [value])

  const debouncedHandleOnChange = useDebouncedCallback(
    (event) => {
      const value = event.nativeEvent.text
      onValueChanged(value)
      console.log('textArea debouncedHandleOnChange', value)
    },
    inputDelay
  )

  const handleOnChange = useCallback((event) => {
    event.persist()
    const newValue = event.nativeEvent.text
    setInnerValue(newValue)
    debouncedHandleOnChange(event)
    console.log('textArea handleOnChange', value)
  }, [])


  const styles = {
    labelStyle: {
      fontFamily: fontFamily,
      fontSize: fontSize,
      color: textColorThird,
    },
    inputStyle: {
      fontFamily: fontFamily,
      fontSize: fontSize,
      flex: 1,
      borderWidth: 1,
      borderColor: textColorThird,
      paddingLeft: 14,
      paddingTop: 15,
      verticalAlign: 'middle',
      paddingRight: 8,
      borderRadius: 6,
      marginTop: 8,
      height: 58,
    },
    inputContainerStyle: {
      borderBottomWidth: 0,
    },
    containerStyle: {
      alignItems: 'stretch',
      padding: 0,
      marginLeft: -9,
    },
    inputBlock: {
      marginBottom: 25,
      height: 80,
    },
    errorStyle: {
      color: accentColor,
      fontFamily: fontFamily,
      fontSize: fontSize,
      paddingHorizontal: 0,
      marginLeft: -2,
      height: 0
    },
  }


  return <Input
    secureTextEntry={true}
    variant={variant}
    disabled={disabled}
    value={innerValue}
    multiline={multiline}
    className={`transition-all
      ease-in-out
      duration-1000
      ${error ? 'bg-red-50' : ''}
    ${className}`}
    onChange={handleOnChange}
    inputContainerStyle={styles.inputContainerStyle}
    inputStyle={styles.inputStyle}
    labelStyle={styles.labelStyle}
    containerStyle={styles.containerStyle}
    errorStyle={styles.errorStyle}
    {...params}
  />
}
