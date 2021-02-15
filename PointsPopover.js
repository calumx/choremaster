import React, { useContext, useEffect, useState } from 'react';
import { View } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
import { UserContext } from './UserInfo';

import MyTextApp from './MyTextApp';

const PointsPopover = () => {
  const [pointsPercentage, setPointsPercentage] = useState(0);

  const { points } = useContext(UserContext);

  useEffect(() => {
    if (points > 0) {
      setPointsPercentage(points / 50);
    }
  });

  return (
    <View style={{ justifyContent: 'space-between', flex: 1 }}>
      <MyTextApp>
        You have {points} points.{'\n'}This is {(points / 50) * 100}% of your
        weekly goal.
      </MyTextApp>

      <ProgressBar
        progress={pointsPercentage}
        animationType={'timing'}
        animationConfig={{
          duration: 1000,
        }}
      />
      <MyTextApp>You are 1st on the leaderboard.</MyTextApp>
    </View>
  );
};

export default PointsPopover;
