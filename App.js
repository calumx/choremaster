import React, { useState } from 'react';
import { View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HeaderIcons from './HeaderIcons';

import TaskData from './TaskData';
import MainMenu from './MainMenu';
import DailyTasks from './DailyTasks';
import WeeklyTasks from './WeeklyTasks';

import { UserContext } from './UserInfo';

function HomeScreen({ navigation }) {
  return (
    <View
      style={{
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
      }}
    >
      <MainMenu
        kitchenPress={() => navigation.navigate('Kitchen', { room: 'kitchen' })}
        bedroomPress={() => navigation.navigate('Bedroom', { room: 'bedroom' })}
        bathroomPress={() =>
          navigation.navigate('Bathroom', { room: 'bathroom' })
        }
        livingRoomPress={() =>
          navigation.navigate('Living Room', { room: 'livingRoom' })
        }
        dailyPress={() => navigation.navigate('Daily Tasks')}
        weeklyPress={() => navigation.navigate('Weekly Tasks')}
      />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  const [points, setPoints] = useState(10);
  const [completedTasks, addCompletedTasks] = useState([]);
  const [username, getUsername] = useState('Calum');

  function addPoints(numToAdd) {
    setPoints(points + numToAdd);
  }

  return (
    <UserContext.Provider
      value={{ username, points, addPoints, completedTasks, addCompletedTasks }}
    >
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerRight: () => <HeaderIcons />,
            headerRightContainerStyle: {
              flexDirection: 'row',
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            },
            headerStyle: {
              backgroundColor: '#F8F5D2',
            },
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Welcome!' }}
          />
          <Stack.Screen name="Kitchen" component={TaskData} />
          <Stack.Screen name="Bedroom" component={TaskData} />
          <Stack.Screen name="Bathroom" component={TaskData} />
          <Stack.Screen name="Living Room" component={TaskData} />
          <Stack.Screen name="Daily Tasks" component={DailyTasks} />
          <Stack.Screen name="Weekly Tasks" component={WeeklyTasks} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
}

export default App;
