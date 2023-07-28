/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Section from './Section';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const data = [
  {
    img: 'https://img.freepik.com/free-vector/many-animals-bamboo-forest_1308-35020.jpg?w=1060&t=st=1690484024~exp=1690484624~hmac=12cdf75bb5fac8322a20c7540b7ed43e2a6a4300654a3b5bde0e718b939ac13d',
    name: 'Learn React Native',
    date: '09/07/2023',
    link: 'https://img.freepik.com/free-vector/many-animals-bamboo-forest_1308-35020.jpg?w=1060&t=st=1690484024~exp=1690484624~hmac=12cdf75bb5fac8322a20c7540b7ed43e2a6a4300654a3b5bde0e718b939ac13d',
  },
  {
    img: 'https://img.freepik.com/free-vector/many-animals-bamboo-forest_1308-35020.jpg?w=1060&t=st=1690484024~exp=1690484624~hmac=12cdf75bb5fac8322a20c7540b7ed43e2a6a4300654a3b5bde0e718b939ac13d',
    name: 'Learn React Native',
    date: '09/07/2023',
    link: 'https://img.freepik.com/free-vector/many-animals-bamboo-forest_1308-35020.jpg?w=1060&t=st=1690484024~exp=1690484624~hmac=12cdf75bb5fac8322a20c7540b7ed43e2a6a4300654a3b5bde0e718b939ac13d',
  },
];

const CertificatesSection = () => {
  return (
    <Section title="Certificates" onNavigate={() => {}}>
      {data.map((item, index) => (
        <View style={styles.box} key={index}>
          <View style={styles.textshow}>
            <Image source={{uri: item.img}} style={styles.image} />
            <View style={{marginLeft: 10}}>
              <Text style={styles.text1}>{item.name}</Text>
              <Text style={styles.text2}>certified on {item.date} </Text>
            </View>
          </View>
          <View style={styles.downloadbox}>
            <MIcon name="download" size={20} color="#cccc" />
          </View>
        </View>
      ))}
    </Section>
  );
};

export default CertificatesSection;

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'lightgray',
    marginVertical: 10,
    padding: 10,
  },
  image: {width: 80, height: 50, resizeMode: 'cover'},
  textshow: {flexDirection: 'row', alignItems: 'center'},
  downloadbox: {
    width: 30,
    height: 30,
    borderRadius: 5,
    borderColor: '#cccc',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text1: {fontWeight: 'bold', color: '#000', marginVertical: 5},
  text2: {color: '#cccc', fontSize: 12},
});
