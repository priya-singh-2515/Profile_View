/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const profileImg =
  'https://img.freepik.com/free-photo/handsome-smiling-man-looking-with-disbelief_176420-19591.jpg?w=1060&t=st=1690476644~exp=1690477244~hmac=35f7e11e0dece294e4733608ab46c25d4178962188dd074ba0845474ef40927b';
const ProfileSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Profile</Text>
      <View style={styles.imageContainer}>
        <Image style={styles.profileImage} source={{uri: profileImg}} />
      </View>
      <Text style={styles.text1}>Johnny R.</Text>
      <Text style={{fontSize: 12}}>Designation</Text>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 30,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 10, marginRight: 5}}>Edit Profile</Text>
        <MIcon name={'chevron-right'} size={20} />
      </View>
    </View>
  );
};

export default ProfileSection;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: 400,
    backgroundColor: 'lightblue',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  title: {
    marginVertical: 20,
    fontSize: 18,
  },
  imageContainer: {
    position: 'relative',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 100,
    width: 120,
    height: 120,
    padding: 10,
  },
  profileImage: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 100,
    resizeMode: 'center',
    alignSelf: 'center',
    top: 8,
  },
  text1: {fontSize: 18, fontWeight: 'bold', marginTop: 11},
});
