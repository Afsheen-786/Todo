/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  Keyboard,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import Tasks from '../components/Tasks';

const Home = () => {
  const [task, setTask] = useState('');
  const [taskItems, setTaskItems] = useState([]);

  const handleTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  const completedTask = index => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };
  // console.log(completedTask);

  const editTask = index => {
    let itemsEdit = [...taskItems];
    itemsEdit.splice(index, 1, task);
    setTaskItems(itemsEdit);
  };
  console.log(editTask);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>TODO :</Text>

        <ScrollView style={styles.items}>
          {taskItems.map((item, index) => {
            return (
              <Tasks
                key={index}
                text={item}
                index={index}
                completedTask={completedTask}
                editTask={editTask}
              />
            );
          })}
          {/* <Tasks text="Task 1" /> */}
          {/* <Tasks text="Task 2" /> */}
        </ScrollView>

        {/* Button */}
        <KeyboardAvoidingView style={styles.inputContainer}>
          <TextInput
            placeholder="Enter Here"
            style={styles.input}
            value={task}
            onChangeText={text => setTask(text)}
          />
          <TouchableOpacity
            style={{marginLeft: '50%'}}
            onPress={() => handleTask()}>
            <View style={styles.addContainer}>
              <Text style={styles.addText}>ADD</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: '#253DA1',
    marginTop: '5%',
    fontSize: 20,
    fontWeight: '700',
    marginLeft: '5%',
  },
  items: {
    marginTop: 30,
  },
  inputContainer: {
    position: 'absolute',
    bottom: 1,
    margin: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 8,
    backgroundColor: '#fff',
    borderRadius: 20,
  },
  input: {
    marginLeft: 10,
    fontSize: 18,
  },
  addContainer: {
    padding: 16,
    backgroundColor: '#253DA1',
    borderRadius: 10,
  },
  addText: {
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Home;
