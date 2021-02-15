import React from 'react';
import { TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import MyTextApp from './MyTextApp';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  calBtnStyle: {
    backgroundColor: 'lightblue',
    height: 65,
    elevation: 8, //Android
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 2, // IOS
    shadowRadius: 2, //IOS
    borderRadius: 3,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    width: 150,
    margin: 15,
  },

  bigBtnStyle: {
    backgroundColor: '#C4E1C8',
    height: 60,
    elevation: 8, //Android
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 2, // IOS
    shadowRadius: 2, //IOS
    borderRadius: 3,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    width: width - 20,
    margin: 15,
  },
});

const CalBtn = (props) => {
  return (
    <>
      <TouchableOpacity
        style={props.big ? styles.bigBtnStyle : styles.calBtnStyle}
        onPress={props.onPress}
      >
        <MyTextApp>{props.children}</MyTextApp>
      </TouchableOpacity>
    </>
  );
};

export default CalBtn;
