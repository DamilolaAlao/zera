import React from 'react'
import {Text} from 'react-native'

export const NirmalaText = props => {
  return (
    <Text {...props} style={[{fontFamily: 'nirmala-rg'}, props.style]}>
      {props.children}
    </Text>
  )
}

// export default NirmalaText
