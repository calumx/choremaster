import React, { useContext, useState } from 'react';
import {
  View,
  Modal,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import MyTextApp from './MyTextApp';
import { UserContext } from './UserInfo';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  addTaskStyle: {
    position: 'absolute',
    bottom: 0,
    width: width,
    left: width / 6,
  },
  button: {
    height: 65,
    alignItems: 'center',
    backgroundColor: '#0c7956',
    padding: 10,
    justifyContent: 'center',
    width: width / 1.5,
    elevation: 5,
  },
  modalButton: {
    height: 40,
    width: 100,
    alignItems: 'center',
    backgroundColor: '#0c7956',
    padding: 10,
    marginTop: 30,
    elevation: 5,
  },
});

const AddTasks = (props) => {
  const { addPoints, completedTasks, addCompletedTasks } = useContext(
    UserContext
  );
  const [modalVisible, setModalVisible] = useState(false);

  const points = props.checked.length * 10;

  const addTasksToPoints = () => {
    setModalVisible(false);
    addPoints(points);
    props.clearCheckboxes();
    addCompletedTasks(completedTasks.concat(props.checked));
  };

  const regex = new RegExp(props.room, 'g');
  const commaRegex = new RegExp(',', 'g');
  let confirmationText = props.checked.toString().replace(regex, '\n');
  confirmationText = confirmationText.replace(commaRegex, '');

  return (
    <View style={styles.addTaskStyle}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          alert('Tasks not added!');
          setModalVisible(false);
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        >
          <View
            style={{
              backgroundColor: 'white',
              width: width / 1.5,
              height: height / 3,
              justifyContent: 'center',
              alignItems: 'center',
              alignContent: 'center',
            }}
          >
            {props.checked.length > 0 ? (
              <>
                <MyTextApp textAlign="center">{confirmationText}</MyTextApp>

                <MyTextApp>{points} points will be added</MyTextApp>

                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={() => {
                    addTasksToPoints();
                  }}
                >
                  <MyTextApp color="white">Confirm</MyTextApp>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <MyTextApp>No tasks were selected.</MyTextApp>
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={() => setModalVisible(false)}
                >
                  <MyTextApp color="white">OK</MyTextApp>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalVisible(true)}
      >
        <MyTextApp color="white">Mark Tasks as Complete</MyTextApp>
      </TouchableOpacity>
    </View>
  );
};

export default AddTasks;
