import React from 'react';
import {Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {color} from '../../../utils';

const Button = ({title}) => {
  return (
    <TouchableOpacity style={styles.wrapper.component}>
      <Text style={styles.text.component}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  wrapper: {
    component: {
      backgroundColor: color.default,
      borderRadius: 25,
      paddingVertical: 9,
      marginBottom: 36,
    },
  },
  text: {
    component: {
      color: 'white',
      textAlign: 'center',
    },
  },
};

export default Button;
