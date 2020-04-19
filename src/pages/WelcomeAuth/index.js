import React from 'react';
import {View, Text, Image} from 'react-native';
import ActionButton from './ActionButton';
import {color} from '../../utils';
import {welcomeAuth} from '../../assets';

const WelcomeAuth = () => {
  return (
    <View style={styles.wrapper.root}>
      <Image source={welcomeAuth} style={styles.wrapper.illustration} />
      <View style={styles.wrapper.welcome}>
        <Text style={styles.text.welcome}>Selamat Datang di</Text>
        <Text style={styles.text.brand}>
          O- <Text style={styles.text.subBrand}>JOL</Text>
        </Text>
      </View>

      <ActionButton desc="Sudah Punya Akun" title="Masuk" />
      <ActionButton desc="Belum Punya Akun" title="Daftar" />
    </View>
  );
};

const styles = {
  wrapper: {
    root: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
    },
    illustration: {
      width: 246,
      height: 132,
      marginBottom: 30,
    },
    welcome: {
      marginBottom: 85,
    },
  },
  text: {
    welcome: {
      fontSize: 22,
      fontWeight: 'bold',
    },
    brand: {
      textAlign: 'center',
      fontSize: 25,
      fontWeight: 'bold',
    },
    subBrand: {
      color: color.default,
    },
  },
};

export default WelcomeAuth;
