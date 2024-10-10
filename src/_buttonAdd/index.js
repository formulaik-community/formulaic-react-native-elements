import React from 'react'
import { Button, View } from 'react-native'

export default ({ onAdd, title, disabled }) =>
  <View style={{
    textAlign: 'center'
  }}>
    <Button
      onPress={onAdd}
      disabled={disabled}>
      {title ? title : "Add"}
    </Button >
  </View>
