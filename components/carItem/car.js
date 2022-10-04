import React from 'react'
import { Text, View, ImageBackground } from 'react-native'
import { styles } from './styles'
import Button from '../button/btn'

export default function Car(props) {

  const { name, tagline, taglineCTA, image } = props.car

  return (
    <View style={styles.carContainer}>

      <ImageBackground
        style={styles.img}
        source={image}
      >

        <View style={styles.titles}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>
            {tagline}{' '}
            <Text style={styles.taglineLink}>
              {taglineCTA}
            </Text>
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title='Custom Order'
            type='primary'
            onPress={() => console.log('custom order')}
          />
          <Button
            title='Existing Inventory'
            type='secondary'
            onPress={() => console.log('Existing Inventory')}
          />
        </View>

      </ImageBackground>

    </View>
  )
}