import React, { useContext, useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';
import MyTextApp from './MyTextApp';
import { UserContext } from './UserInfo';

const AddPointsAnim = ({ clear }) => {
  const { points } = useContext(UserContext);
  const beenPressed = useRef(false);

  let fadeValue = new Animated.Value(0);
  let positionValue = new Animated.Value(0);

  useEffect(() => {
    if (beenPressed.current) {
      Animated.parallel([
        Animated.timing(fadeValue, {
          toValue: 1,
          duration: 1900,
          easing: Easing.easeOutBack,
          useNativeDriver: true,
        }),

        Animated.timing(positionValue, {
          toValue: 400,
          duration: 3500,
          easing: Easing.easeOut,
          useNativeDriver: true,
        }),
      ]).start(() => {});
    } else {
      beenPressed.current = true;
      return;
    }
  }, [points]);

  const fadeInOut = fadeValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 1, 0],
  });

  return clear ? (
    <Animated.View
      style={{
        alignSelf: 'center',
        transform: [{ translateY: positionValue }],
        opacity: fadeInOut,
      }}
    >
      <MyTextApp fontSize={24}>Points Added!</MyTextApp>
    </Animated.View>
  ) : null;
};

export default AddPointsAnim;
