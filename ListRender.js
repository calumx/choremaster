import React, { useContext, useRef, useState } from 'react';
import { FlatList, Text, StyleSheet, View } from 'react-native';
import {
  MerriweatherSans_400Regular,
  useFonts,
} from '@expo-google-fonts/merriweather-sans';

import CheckBoxes from './CheckBoxes';
import AddTasks from './AddTasks';
import AddPointsAnim from './AddPointsAnim';
import { UserContext } from './UserInfo';

const styles = StyleSheet.create({
  listStyle: {
    marginBottom: 70,
  },
});

const ListRender = (props) => {
  const [clear, toggleClear] = useState(false);
  const [fontsLoaded] = useFonts({
    MerriweatherSans_400Regular,
  });

  let checkedArr = [];

  const checkHandler = (checked, item) => {
    if (checked) {
      checkedArr.push(item + props.room);
    } else {
      let index = checkedArr.findIndex(() => item + props.room);
      checkedArr.splice(index, 1);
    }
  };

  const listRef = useRef();
  const { completedTasks } = useContext(UserContext);

  const clearCheckboxes = () => {
    toggleClear(true);
    setTimeout(() => {
      toggleClear(false);
    }, 4000);
  };

  if (fontsLoaded) {
    return (
      <>
        <View style={styles.listStyle}>
          <FlatList
            ref={listRef}
            onContentSizeChange={() => listRef.current.scrollToEnd()}
            data={props.data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <CheckBoxes
                countdown={props.countdown}
                clear={clear}
                index={index}
                completed={
                  completedTasks.indexOf(item + props.room) > -1 ? true : false
                }
                onPress={(checked) => checkHandler(checked, item)}
              >
                {item}
              </CheckBoxes>
            )}
          />
        </View>
        <View style={{ marginTop: 30 }}>
          <AddTasks
            checked={checkedArr}
            countdown={props.countdown}
            room={props.room}
            clearCheckboxes={() => clearCheckboxes()}
          />
        </View>
        <AddPointsAnim clear={clear} />
      </>
    );
  } else return <Text>Loading...</Text>;
};

export default ListRender;
