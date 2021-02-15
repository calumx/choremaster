import React from 'react';
import { Text } from 'react-native';
import {
  MerriweatherSans_400Regular,
  useFonts,
} from '@expo-google-fonts/merriweather-sans';

const MyTextApp = (props) => {
  const [fontLoaded] = useFonts({
    MerriweatherSans_400Regular,
  });

  if (fontLoaded) {
    return (
      <Text
        style={{
          fontSize: props.fontSize,
          fontFamily: 'MerriweatherSans_400Regular',
          marginRight: props.marginRight,
          marginLeft: props.marginLeft,
          marginTop: props.marginTop,
          color: !props.color ? '#50272d' : props.color,
          textAlign: props.textAlign,
        }}
      >
        {props.children}
      </Text>
    );
  } else return <Text>Loading...</Text>;
};

export default MyTextApp;
