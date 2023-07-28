/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Section from './Section';
const data = [
  {name: 'HTML', color: 'red'},
  {name: 'CSS', color: 'blue'},
  {name: 'JavaScript', color: 'green'},
  {name: 'JavaScript', color: 'yellow'},
  {name: 'React', color: 'brown'},
  {name: 'Node', color: 'orange'},
];
const SkillSection = () => {
  return (
    <Section title="Skills" onNavigate={() => {}}>
      <View style={styles.box}>
        {data.map((item, index) => (
          <View key={index} style={styles.colorSize}>
            <View
              style={{
                backgroundColor: item.color,
                width: 10,
                height: 10,
                marginRight: 10,
                borderRadius: 2,
              }}
            />
            <Text style={styles.text1}>{item.name}</Text>
          </View>
        ))}
      </View>
    </Section>
  );
};

export default SkillSection;

const styles = StyleSheet.create({
  box: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 10,
  },
  colorSize: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
    paddingVertical: 5,
  },
  text1: {color: 'gray', fontSize: 12},
});
