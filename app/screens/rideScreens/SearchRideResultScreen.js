import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import colors from '../../config/colors';

function SearchRideResultScreen({ navigation }) {
  return (
    <View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View>
            <Text style={styles.title}>Victoria Island</Text>
          </View>

          <View style={styles.card}>

            <View style={styles.userContainer}>
              <View style={styles.userAvatarContainer}>
                <Image source={require('../../assets/john_doe.png')} style={styles.userAvatar} />
              </View>
              <View style={styles.userNameContainer}>
                <Text style={{ color: colors.secondary, fontSize: 17 }}>John Doe</Text>
                <Text>08032123455</Text>
              </View>
            </View>

            <View style={styles.ratingContainer}>
              <Text style={{ fontSize: 15 }}>Ratings</Text>
              <View style={styles.ratingIconContainer}>
                <FontAwesomeIcon
                  icon={faStar}
                  size={21}
                  style={styles.ratingIcon}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  size={21}
                  style={styles.ratingIcon}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  size={21}
                  style={styles.ratingIcon}
                />
              </View>
            </View>

            <View style={styles.vehicleContainer}>
              <View>
                <Text style={{ fontSize: 15 }}>Vehicle</Text>
                <Text>Toyota Camry 2009</Text>
                <Text>LSD 123 GD</Text>
              </View>
              <View>
                <TouchableOpacity activeOpacity={.5} onPress={() => { navigation.navigate('myRide') }}>
                  <Image source={require('../../assets/Toyota_Camry.png')} />
                </TouchableOpacity>
              </View>
            </View>

            <View>
              <Text style={{ fontSize: 15 }}>Successful Trips</Text>
              <Text>11</Text>
            </View>

            <View style={styles.button}>
              <Text style={styles.buttonText}>JOIN</Text>
            </View>
          </View>

          <View style={styles.hr}></View>

          <View style={styles.card}>

            <View style={styles.userContainer}>
              <View style={styles.userAvatarContainer}>
                <Image source={require('../../assets/user_female_.png')} style={styles.userAvatar} />
              </View>
              <View style={styles.userNameContainer}>
                <Text style={{ color: colors.secondary, fontSize: 17 }}>Jane Doe</Text>
                <Text>08032123455</Text>
              </View>
            </View>

            <View style={styles.ratingContainer}>
              <Text style={{ fontSize: 15 }}>Ratings</Text>
              <View style={styles.ratingIconContainer}>
                <FontAwesomeIcon
                  icon={faStar}
                  size={21}
                  style={styles.ratingIcon}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  size={21}
                  style={styles.ratingIcon}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  size={21}
                  style={styles.ratingIcon}
                />
              </View>
            </View>

            <View style={styles.vehicleContainer}>
              <View>
                <Text style={{ fontSize: 15 }}>Vehicle</Text>
                <Text>Toyota Camry 2009</Text>
                <Text>GGE 123 OG</Text>
              </View>

              <View>
                <TouchableOpacity activeOpacity={.5} onPress={() => { navigation.navigate('myRide') }}>
                  <Image source={require('../../assets/mercedes.png')} style={{ height: 50, width: 110 }} />
                </TouchableOpacity>
              </View>
            </View>

            <View>
              <Text style={{ fontSize: 15 }}>Successful Trips</Text>
              <Text>11</Text>
            </View>

            <View style={styles.button}>
              <Text style={styles.buttonText}>JOIN</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 30,
    width: 120,
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: colors.primary,
    borderRadius: 20,
    color: '#fff'
  },
  buttonText: {
    width: '100%',
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 12
  },
  card: {
    marginTop: 20,
    marginBottom: 20,
    padding: 20,
    backgroundColor: '#F6F6F6',
    borderRadius: 30
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    marginBottom: 40,
    paddingLeft: 20,
    paddingRight: 20
  },
  hr: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#ccc'
  },
  ratingContainer: {
    marginTop: 10,
    marginBottom: 20
  },
  ratingIcon: {
    color: '#FEA82F',
    marginRight: 10
  },
  ratingIconContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 5,
  },
  scrollView: {
    width: '100%',
    paddingTop: 40,
    backgroundColor: '#ffffff'
  },
  title: {
    width: '100%',
    paddingBottom: 10,
    fontSize: 18,
    borderBottomWidth: 1,
    // fontWeight: ["normal", "bold", "600"]
  },
  userAvatar: {
    width: 80,
    height: 80
  },
  userAvatarContainer: {
    width: 80,
    height: 80,
    alignItems: 'center',
    alignContent: 'center',
    marginTop: 10,
    borderRadius: 50,
    backgroundColor: '#cccccc',
    overflow: 'hidden'
  },
  userContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    marginTop: 10,
  },
  userNameContainer: {
    marginLeft: 20
  },
  vehicleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    marginTop: 10,
    marginBottom: 20,
  }
})

export default SearchRideResultScreen;