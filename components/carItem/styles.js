import React from 'react'
import { Dimensions, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  carContainer: {
    flex: 1,
    width: '100%',
    height: Dimensions.get('window').height,
  },
  titles: {
    marginTop: '30%',
    width: '100%',
    alignItems: 'center'
  },
  title: {
    fontSize: 40,
    fontWeight: '500',
  },
  subtitle: {
    fontSize: 16,
    color: '#5c5e62'
  },
  taglineLink: {
    textDecorationLine: 'underline',
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute'
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 60,
    width: '100%'
  }
})