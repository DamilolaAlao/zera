import React from 'react'
import {Text} from 'react-native'

export const RubikText = props => {
  return (
    <Text {...props} style={[{fontFamily: 'rubik-md'}, props.style]}>
      {props.children}
    </Text>
  )
}

// export default NirmalaText
