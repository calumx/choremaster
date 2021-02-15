import React from 'react';
import { View } from 'react-native';
import CalBtn from './CalBtn';

const MainMenu = (props) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <CalBtn title="Kitchen" onPress={props.kitchenPress}>
          Kitchen
        </CalBtn>
        <CalBtn title="Bedroom" onPress={props.bedroomPress}>
          Bedroom
        </CalBtn>
      </View>

      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <CalBtn title="Bathroom" onPress={props.bathroomPress}>
          Bathroom
        </CalBtn>
        <CalBtn title="Living Room" onPress={props.livingRoomPress}>
          Living Room
        </CalBtn>
      </View>
      <View>
        <CalBtn big title="Daily Tasks" onPress={props.dailyPress}>
          Daily Tasks
        </CalBtn>
        <CalBtn big title="Weekly Tasks" onPress={props.weeklyPress}>
          Weekly Tasks
        </CalBtn>
      </View>
    </View>
  );
};

export default MainMenu;
