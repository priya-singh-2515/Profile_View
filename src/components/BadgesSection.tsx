import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Section from './Section';

const data = [
  {
    img: 'https://img.freepik.com/free-vector/cute-baby-elephant-butterfly-outline-drawing-color_96037-424.jpg?w=1060&t=st=1690481525~exp=1690482125~hmac=16b95591dab50f5fc3fe340e123d4fb7d1fd6e9ed20b44ec4ce69b4bc4bb5c9b',
    name: 'Learner',
    point: 20,
  },
  {
    img: 'https://img.freepik.com/free-vector/cute-baby-elephant-butterfly-outline-drawing-color_96037-424.jpg?w=1060&t=st=1690481525~exp=1690482125~hmac=16b95591dab50f5fc3fe340e123d4fb7d1fd6e9ed20b44ec4ce69b4bc4bb5c9b',
    name: 'Learner',
    point: 20,
  },
  {
    img: 'https://img.freepik.com/free-vector/cute-baby-elephant-butterfly-outline-drawing-color_96037-424.jpg?w=1060&t=st=1690481525~exp=1690482125~hmac=16b95591dab50f5fc3fe340e123d4fb7d1fd6e9ed20b44ec4ce69b4bc4bb5c9b',
    name: 'Learner',
    point: 20,
  },
  {
    img: 'https://img.freepik.com/free-vector/cute-baby-elephant-butterfly-outline-drawing-color_96037-424.jpg?w=1060&t=st=1690481525~exp=1690482125~hmac=16b95591dab50f5fc3fe340e123d4fb7d1fd6e9ed20b44ec4ce69b4bc4bb5c9b',
    name: 'Learner',
    point: 20,
  },
  {
    img: 'https://img.freepik.com/free-vector/cute-baby-elephant-butterfly-outline-drawing-color_96037-424.jpg?w=1060&t=st=1690481525~exp=1690482125~hmac=16b95591dab50f5fc3fe340e123d4fb7d1fd6e9ed20b44ec4ce69b4bc4bb5c9b',
    name: 'Learner',
    point: 20,
  },
];

const BadgesSection = () => {
  return (
    <Section title={'Badges'}>
      <ScrollView horizontal>
        {data.map((item, index) => (
          <View key={index} style={styles.box}>
            <Image source={{uri: item.img}} style={styles.image} />
            <Text style={styles.text1}>{item.name}</Text>
            <Text style={styles.text2}>Points: {item.point}</Text>
          </View>
        ))}
      </ScrollView>
    </Section>
  );
};

export default BadgesSection;

const styles = StyleSheet.create({
  box: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    width: 100,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'center',
  },
  text1: {fontSize: 14, fontWeight: 'bold', color: 'gray'},
  text2: {fontSize: 10, color: 'gray'},
});
