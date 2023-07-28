import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const PointSection = () => {
  return (
    <View style={styles.scorebox}>
      <Text style={styles.scoretext}>Your Score</Text>
      <View style={styles.circle1}>
        <View style={styles.circle2}>
          <View style={styles.circle3}>
            <Text style={styles.circletext}>10</Text>
          </View>
        </View>
      </View>
      <Text style={styles.text1}>Earn 50 Points to earn badge</Text>
      <View style={styles.leaderboad}>
        <Text style={styles.text2}>Go To Leaderboad</Text>
        <MIcon
          name="chevron-right"
          size={20}
          color="lightblue"
          style={styles.icon}
        />
      </View>
    </View>
  );
};

export default PointSection;

const styles = StyleSheet.create({
  scorebox: {
    alignItems: 'center',
    backgroundColor: 'white',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 40,
    height: 230,
    marginTop: -90,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  scoretext: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'lightblue',
    marginTop: 10,
  },
  circle1: {
    position: 'relative',
    borderColor: 'lightblue',
    width: 80,
    height: 80,
    borderRadius: 100,
    marginVertical: 20,
    padding: 5,
    borderStartWidth: 1,
    borderEndWidth: 1,
  },
  circle2: {
    position: 'absolute',
    borderColor: 'lightblue',
    width: 70,
    height: 70,
    left: 4,
    top: 4,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderRadius: 100,
  },
  circle3: {
    backgroundColor: 'lightblue',
    width: 60,
    height: 60,
    borderRadius: 100,
    left: 4,
    top: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circletext: {fontSize: 16, fontWeight: 'bold', color: 'white'},
  text1: {fontSize: 12, fontWeight: 'bold', color: 'gray'},
  leaderboad: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  text2: {fontSize: 12, fontWeight: 'bold', color: 'lightblue'},
  icon: {marginLeft: 5},
});
