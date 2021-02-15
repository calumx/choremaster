import React, { useContext } from 'react';
import { View } from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';
import MyTextApp from './MyTextApp';

import { Tooltip } from 'react-native-elements';
import PointsPopover from './PointsPopover';

import { UserContext } from './UserInfo';

export default function HeaderIcons() {
  const { username, points } = useContext(UserContext);

  return (
    <View
      style={{
        flexDirection: 'row',
        flex: 1,
      }}
    >
      <Tooltip
        popover={<PointsPopover />}
        backgroundColor="lightblue"
        highlightColor="lightblue"
        height={150}
        width={250}
        containerStyle={{
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}
      >
        <View style={{ alignItems: 'center' }}>
          <Feather
            name="star"
            size={24}
            color="black"
            style={{ marginHorizontal: 20 }}
          />

          <MyTextApp>{points}</MyTextApp>
        </View>
      </Tooltip>

      <View style={{ alignItems: 'center' }}>
        <FontAwesome
          name="user-circle"
          size={24}
          color="black"
          style={{ marginHorizontal: 20 }}
        />
        <MyTextApp marginTop={1}>{username}</MyTextApp>
      </View>
    </View>
  );
}
