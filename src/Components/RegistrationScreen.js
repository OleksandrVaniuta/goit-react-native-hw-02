import {
  StyleSheet,
  Text,
  TextInput,
  SafeAreaView,
  Button,
  TouchableOpacity,
} from 'react-native';

export default function Registration() {
  return (
    <SafeAreaView style={styles.RegContainer}>
      <Text style={styles.RegTitle}>Реєстрація</Text>
      <TextInput style={styles.input} placeholder="Логін" />
      <TextInput style={styles.input} placeholder="Адреса електронної пошти" />
      <TextInput style={styles.input} placeholder="Пароль" />
      <TouchableOpacity style={styles.showPasswordButton}>
        <Text>Показати</Text>
      </TouchableOpacity>
      {/* <Button title="Зареєстуватися" style={styles.registerBtn} /> */}
      <TouchableOpacity style={styles.registerBtn}>
        <Text style={styles.registerBtnText}>Зареєстуватися</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  RegContainer: {
    backgroundColor: '#fff',
    width: '100%',
    alignItems: 'center',
    paddingRight: 16,
    paddingLeft: 16,
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
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontFamily: 'Roboto-Regular',
    width: '100%',
  },
  //   registerBtn: {
  //     width: '100%',
  //     backgroundColor: '#FF6C00',
  //     fontFamily: 'Roboto-Regular',
  //   },
  registerBtn: {
    width: '100%',
    backgroundColor: '#FF6C00',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    borderRadius: 100,
    paddingBottom: 16,
    paddingTop: 16,
  },
  registerBtnText: {
    color: '#fff',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    padding: 0,
    margin: 0,
  },
});
