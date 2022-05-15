import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Text,
} from 'react-native';

const Tasks = props => {
  const {text, completedTask, index, editTask} = props;

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.circle} />
        <TouchableOpacity onPress={() => editTask(index)}>
          <Text style={styles.itemText}>{text}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => completedTask(index)}>
        <Text style={styles.remove}>REMOVE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    padding: 16,
    marginHorizontal: 16,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  itemText: {
    marginLeft: 16,
    maxWidth: '80%',
    color: '#000',
  },
  circle: {
    width: 24,
    height: 24,
    backgroundColor: '#253DA1',
    borderRadius: 16,
  },
  remove: {
    color: '#949494',
    marginRight: 16,
  },
});

export default Tasks;
