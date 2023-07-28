/* eslint-disable react-native/no-inline-styles */
import {Image, Text, View, StyleSheet} from 'react-native';
import React from 'react';
import Section from './Section';

const data = [
  {
    img: 'https://img.freepik.com/free-vector/many-animals-bamboo-forest_1308-35020.jpg?w=1060&t=st=1690484024~exp=1690484624~hmac=12cdf75bb5fac8322a20c7540b7ed43e2a6a4300654a3b5bde0e718b939ac13d',
    name: 'React Native',
    subtitle: 'React Native Certification',
    process: 100,
    tag: 'Courses',
  },
  {
    img: 'https://img.freepik.com/free-vector/many-animals-bamboo-forest_1308-35020.jpg?w=1060&t=st=1690484024~exp=1690484624~hmac=12cdf75bb5fac8322a20c7540b7ed43e2a6a4300654a3b5bde0e718b939ac13d',
    name: 'React Native',
    subtitle: 'React Native Certification',
    process: 100,
    tag: 'Courses',
  },
];
const TrainingSection = () => {
  return (
    <Section title="Completed Training" onNavigate={() => {}}>
      {data.map((item, index) => (
        <View style={styles.box} key={index}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={{uri: item.img}} style={styles.image} />
            <View
              style={{
                marginLeft: 10,
                justifyContent: 'space-between',
                flex: 3,
              }}>
              <View>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: '#000',
                  }}>
                  {item.name}
                </Text>
                <Text style={{color: '#cccc', fontSize: 12}}>
                  {item.subtitle}
                </Text>
              </View>
              <View style={{marginVertical: 5}}>
                <Text
                  style={{color: 'lightblue', fontSize: 12, marginBottom: 5}}>
                  Completed
                </Text>
                <View
                  style={{
                    width: `${item.process}%`,
                    height: 5,
                    backgroundColor: 'lightblue',
                    borderRadius: 5,
                  }}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              position: 'absolute',
              right: 0,
              top: 0,
              overflow: 'hidden',
              padding: 5,
              backgroundColor: '#ccc',
              paddingHorizontal: 20,
              borderTopLeftRadius: 5,
              borderTopRightRadius: 5,
              borderBottomLeftRadius: 5,
            }}>
            <Text style={{color: '#000', fontSize: 12}}>{item.tag}</Text>
          </View>
        </View>
      ))}
    </Section>
  );
};

export default TrainingSection;

const styles = StyleSheet.create({
  box: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'lightgray',
    marginVertical: 10,
    padding: 10,
  },
  image: {width: 80, height: 60, resizeMode: 'cover', flex: 1},
});
