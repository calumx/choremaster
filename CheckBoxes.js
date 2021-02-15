import React, { useEffect, useState } from 'react';
import Checkbox from 'expo-checkbox';

import { StyleSheet, TouchableWithoutFeedback, View, Text } from 'react-native';

const styles = StyleSheet.create({
  task: {
    fontSize: 16,
    alignSelf: 'flex-end',
    marginTop: 20,
    fontFamily: 'MerriweatherSans_400Regular',
    marginLeft: 10,
    marginRight: 10,
  },
  countdown: {
    fontSize: 11,
    alignSelf: 'flex-end',
    marginTop: 20,
    fontFamily: 'MerriweatherSans_400Regular',
    marginLeft: 10,
    marginRight: 10,
  },
});

const CheckBoxes = (props) => {
  const colors = ['#fdf7ed', '#ebebeb'];
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const onPress = () => {
    setToggleCheckBox(!toggleCheckBox);
    props.onPress(!toggleCheckBox);
  };

  useEffect(() => {
    if (props.clear) {
      setToggleCheckBox(false);
    }
  }, [props.clear]);

  return (
    <TouchableWithoutFeedback onPress={() => onPress()}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: props.completed
            ? '#d8fde6'
            : colors[props.index % 2],
        }}
      >
        <Text style={styles.task}>{props.children}</Text>
        {props.countdown ? (
          <Text style={styles.countdown}>{props.countdown} </Text>
        ) : null}

        <View style={styles.task}>
          <Checkbox
            value={toggleCheckBox}
            onValueChange={(newValue) => onPress(!toggleCheckBox)}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CheckBoxes;
