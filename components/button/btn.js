import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { styles } from './styles'

const Button=(props)=> {
  const type = props.type

  const backgroundColor = type === 'primary' ? '#171a20cc' : '#fffffa'
  const textColor = type === 'primary' ? '#fff' : '#171a20'

  return (
    <View style={styles.container}>
      <Pressable 
        style={[styles.button, {backgroundColor: backgroundColor}]}
        onPress={()=> props.onPress()}
      >
        <Text style={[styles.text, { color: textColor}]}>{props.title}</Text>
      </Pressable>
    </View>
  )
}

export default Button