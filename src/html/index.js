import React from 'react'
import { Text } from 'react-native'

export default (props) => {
  const { item: { params } } = props
  return <Text>{params.content}</Text>
}

