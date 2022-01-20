import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import colors from '../../config/colors';

function AddCarScreen(props) {
  return (
    <SafeAreaView style={styles.safeView}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Text style={{ fontSize: 24 }}>Add Car</Text>

          <View>
            <View style={styles.inputContainer}>
              <Text style={{ color: '#FF0000'}}>*</Text>
              <TextInput style={styles.input} placeholder={'Make'} />
            </View>
            <View style={styles.inputContainer}>
              <Text style={{ color: '#FF0000'}}>*</Text>
              <TextInput style={styles.input} placeholder={'Year'} keyboardType={'number-pad'} />
            </View>
            <View style={styles.inputContainer}>
              <Text style={{ color: '#FF0000'}}>*</Text>
              <TextInput style={styles.input} placeholder={'License No.'} />
            </View>
            <View style={styles.inputContainer}>
              <Text style={{ color: '#FF0000'}}>*</Text>
              <TextInput style={styles.input} placeholder={'Upload picture'} />
            </View>
          </View>

          <View style={styles.button}>
            <Text
              style={styles.buttonText}
              onPress={
                () => navigation.navigate('Home')
              }
            >
              Save
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    width: 280,
    marginTop: 80,
    marginBottom: 20,
    backgroundColor: colors.primary,
    borderRadius: 20,
    justifyContent: 'center',
    color: '#fff'
  },
  buttonText: {
    width: '100%',
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 25
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#ffffff'
  },
  input: {
    height: 40,
    width: '100%',
    margin: 12,
    padding: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    width: 280,
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
  },
  safeView: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  scrollView: {
    width: '100%',
    paddingTop: 150,
  }
})

export default AddCarScreen;