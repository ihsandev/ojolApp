import React from 'react';
import {View, Text} from 'react-native';
import {Button} from '../../../components';
import {color} from '../../../utils';

const ActionButton = ({desc, title}) => {
  return (
    <View style={styles.wrapper.action}>
      <Text style={styles.text.desc}>{desc}</Text>
      <Button title={title} />
    </View>
  );
};

const styles = {
  wrapper: {
    action: {
      width: 214,
    },
  },
  text: {
    desc: {
      fontSize: 12,
      color: color.text.default,
      textAlign: 'center',
      marginBottom: 6,
    },
  },
};

export default ActionButton;
