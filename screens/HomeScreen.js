/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Keyboard,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import Tasks from '../components/Tasks';

const Home = () => {
  const [task, setTask] = useState('');
  const [index, setIndex] = useState(null);
  const [update, setUpdate] = useState(false);
  const [taskItems, setTaskItems] = useState([]);

  const handleTask = () => {
    Keyboard.dismiss();
    if (update) {
      const copyItems = taskItems;
      copyItems[index] = task;
      setTaskItems([...copyItems]);
      setUpdate(!update);
    } else {
      setTaskItems([...taskItems, task]);
    }
    setTask(null);
  };

  const completedTask = _index => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(_index, 1);
    setTaskItems(itemsCopy);
  };

  const editTask = _index => {
    let itemsEdit = [...taskItems];
    setIndex(index => _index);
    setTask(itemsEdit[_index]);
    setUpdate(!update);
  };

  return (
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
      </ScrollView>

      <KeyboardAvoidingView style={styles.inputContainer}>
        <TextInput
          placeholder="Please enter your task"
          style={styles.input}
          value={task}
          onChangeText={text => setTask(text)}
          placeholderTextColor={'grey'}
        />
        <TouchableOpacity
          style={{marginLeft: '50%'}}
          onPress={() => handleTask()}>
          <View style={styles.addContainer}>
            <Text style={styles.addText}>{update ? 'UPDATE' : 'ADD'}</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
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
    paddingLeft: 30,
    color: '#000',
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
