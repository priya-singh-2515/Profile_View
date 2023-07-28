/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Section: React.FC<any> = ({title, onNavigate, children}) => {
  return (
    <View
      style={{
        marginVertical: 20,
        margin: 15,
        padding: 5,
        borderBottomWidth: 1,
        borderColor: 'lightgray',
        minHeight: 150,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={styles.text1}>{title}</Text>
        {onNavigate && (
          <Text onPress={onNavigate} style={styles.text2}>
            see more
          </Text>
        )}
      </View>
      {children}
    </View>
  );
};

export default Section;

const styles = StyleSheet.create({
  text1: {fontSize: 16, fontWeight: 'bold', color: 'lightblue'},
  text2: {fontSize: 12, color: 'lightblue'},
});
