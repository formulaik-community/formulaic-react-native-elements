import React from 'react'
import { Button } from '@rneui/themed'
import { View } from 'react-native'

export default (props) => {
  const {
    isSubmitting,
    item: { params = {} }
  } = props

  const {
    text = 'Continue',
    justifyContent = 'center',
    paddingHorizontal = 20,
    paddingVertical = 15,
    type = 'outline',
    textColor = "#434343",
    textColorSecond = "#565656",
    fontSize = 16,
    fontFamily,
  } = params

  let color, __backgroundColor, borderColor

  switch (type) {
    case 'clear': {
      color = textColorSecond
      __backgroundColor = 'transparent'
      borderColor = 'transparent'
    } break
    case 'outline': {
      color = textColorSecond
      __backgroundColor = 'transparent'
      borderColor = textColorSecond
    } break
    case 'solid':
    default: {
      const _backgroundColor = textColor
      color = __backgroundColor
      __backgroundColor = _backgroundColor
      borderColor = _backgroundColor
    } break
  }

  return <View className={`px-8 mt-4 flex items-start pl-0`}>
    <Button
      disabled={props.disabled}
      onPress={props.submitForm}
      paddingHorizontal={35}
      title={text}
      loading={isSubmitting}

      type={type}

      loadingProps={{
        color: textColor,
        size: 'large',
      }}
      titleStyle={{
        fontSize,
        fontFamily,
        color,
        fontWeight: 800
      }}
      containerStyle={{
        flex: 1,
        textAlign: 'left'
      }}
      buttonStyle={{
        borderColor,
        backgroundColor: __backgroundColor,
        borderRadius: 6,
        borderWidth: 1.5,
        justifyContent,
        paddingHorizontal,
        paddingVertical
      }}
    />
  </View>
}
