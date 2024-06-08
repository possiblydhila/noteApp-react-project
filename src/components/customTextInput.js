import React from 'react'
import { TextInput, Text, StyleSheet, View } from 'react-native'

const CustomTextInput = ({
  text,
  onChange,
  label,
  multiline,
  numberOfLines,
}) => {
  const styles = StyleSheet.create({
    textInputWrapper: {
      marginTop: 20,
    },
    label: {
      marginBottom: 10,
    },
    input: {
      borderWidth: 2,
      borderColor: '#DDD',
      padding: 10,
    },
  })

  return (
    <View style={styles.textInputWrapper}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        multiline={multiline}
        numberOfLines={numberOfLines}
        style={styles.input}
        placeholder={label}
        onChangeText={onChange}
        defaultValue={text}
      />
    </View>
  )
}

export default CustomTextInput