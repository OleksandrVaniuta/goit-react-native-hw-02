import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
} from 'react-native';

export default function Registration() {
  const [isFocused, setIsFocused] = useState({
    input1: false,
    input2: false,
  });

  const handleFocus = (inputName) => {
    setIsFocused((prev) => ({ ...prev, [inputName]: true }));
  };

  const handleBlur = (inputName) => {
    setIsFocused((prev) => ({ ...prev, [inputName]: false }));
  };

  return (
    <SafeAreaView style={styles.RegContainer}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.Keyboard}
      >
        <View style={styles.form}>
          <Text style={styles.RegTitle}>Увійти</Text>
          <TextInput
            style={[
              styles.input,
              styles.inputMail,
              isFocused.input1 && styles.inputFocused,
            ]}
            placeholder="Адреса електронної пошти"
            onFocus={() => handleFocus('input1')}
            onBlur={() => handleBlur('input1')}
          />
          <View style={styles.passContainer}>
            <TextInput
              style={[
                styles.input,
                styles.inputPass,
                isFocused.input2 && styles.inputFocused,
              ]}
              placeholder="Пароль"
              onFocus={() => handleFocus('input2')}
              onBlur={() => handleBlur('input2')}
            />
            <TouchableOpacity style={styles.showPasswordButton}>
              <Text style={styles.showPasswordText}>Показати</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.registerBtn}>
          <Text style={styles.registerBtnText}>Увійти</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logIn}>
          <Text style={styles.logInText}>Немає акаунту? Зареєструватися</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  Keyboard: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
    resizeMode: 'cover',
  },
  form: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingRight: 16,
    paddingLeft: 16,
    paddingTop: 32,
    paddingBottom: 43,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
  },
  RegContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    width: '100%',
    alignItems: 'center',
  },
  RegTitle: {
    color: '#000',
    fontSize: 30,
    fontFamily: 'Roboto-Medium',
  },
  input: {
    backgroundColor: '#F6F6F6',
    borderColor: '#E8E8E8',
    borderRadius: 8,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontFamily: 'Roboto-Regular',
    width: '100%',
    padding: 16,
    paddingBottom: 15,
    margin: 0,
    fontSize: 16,
  },
  inputFocused: {
    borderColor: '#FF6C00',
  },
  inputLogin: {
    margin: 0,
    marginTop: 32,
  },
  inputMail: {
    marginTop: 32,
  },
  inputPass: {
    margin: 0,
  },
  passContainer: {
    width: '100%',
    marginTop: 16,
  },
  showPasswordButton: {
    position: 'absolute',
    top: 20,
    right: 16,
  },
  showPasswordText: {
    fontSize: 16,
    color: '#1B4371',
  },
  btnContainer: {
    width: '100%',
    alignItems: 'center',
    paddingRight: 16,
    paddingLeft: 16,
    backgroundColor: '#fff',
    paddingBottom: 111,
  },
  registerBtn: {
    width: '100%',
    backgroundColor: '#FF6C00',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    paddingBottom: 15,
    paddingTop: 16,
  },
  registerBtnText: {
    color: '#fff',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    padding: 0,
    margin: 0,
  },
  logIn: {
    marginTop: 16,
  },
  logInText: {
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    color: '#1B4371',
  },
});
