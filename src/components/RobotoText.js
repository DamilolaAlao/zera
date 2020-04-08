import React from 'react'
import {Text} from 'react-native'

export const RobotoText = props => {
  return (
    <Text {...props} style={[{fontFamily: 'roboto-light'}, props.style]}>
      {props.children}
    </Text>
  )
}