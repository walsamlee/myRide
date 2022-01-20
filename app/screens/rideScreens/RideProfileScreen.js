import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

function RideProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={{ fontSize: 20, marginBottom: 20 }}>My Car</Text>
        <View>
          <Text style={styles.textBody}>Honda1</Text>
          <Text style={styles.textBody}>Civic</Text>
          <Text style={styles.textBody}>2008</Text>
          <Text style={styles.textBody}>KSF 321 GD</Text>
        </View>
        <View style={styles.vehicleContainer}>
          <Image source={require('../../assets/mercedes.png')} style={{ height: 120, width: 250 }} />
        </View>
      </View>

      <TouchableOpacity style={styles.fab} onPress={() => navigation.navigate('addCar')}>
        <FontAwesomeIcon
          icon={faPencilAlt}
          size={25}
          style={{ color: '#ffffff' }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 20,
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: '#ffffff'
  },
  fab: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF4D00',
    width: 50,
    height: 50,
    borderRadius: 50,
    color: '#ffffff'
  },
  textBody: {
    fontSize: 16,
    marginBottom: 13,
    color: '#636780'
  },
  vehicleContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    marginTop: 60,
    backgroundColor: '#ffffff'
  }
})

export default RideProfileScreen;
