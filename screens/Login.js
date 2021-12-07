import { StatusBar } from 'expo-status-bar';
import React, { useState, Fragment } from 'react';
import {
  StyleSheet,
  Text,
  View,
  CheckBox,
  TouchableOpacity,
  Linking,
  Modal,
  Pressable,
} from 'react-native';
import Input from '../components/Input';
// import { Visibility } from "@mui/icons-material";
import Feather from 'react-native-vector-icons/Feather';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secure, setSecure] = useState(true);
  const [check, setCheck] = useState(false);
  // const [visible, setVisible] = useState(false);

  const handleCheck = () => setSecure(!secure);

  function handleSubmit() {
    // console.log(`e-mail address of that user is: ' ${email} ' and it password too is: ' ${password} '`)
    if (email && password) {
      // setVisible(true);
      navigation.push('Home');
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {/* form view */}

      <View
        style={{
          width: '100%',
          paddingHorizontal: 20,
          paddingVertical: 30,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          marginBottom: 70,
        }}
      >
        <Text
          style={{
            fontSize: 25,
            fontWeight: '600',
            color: '#1F2937',
          }}
        >
          Welcome to App
        </Text>
        <Text
          style={{
            fontSize: 36,
            fontWeight: '700',
            marginVertical: 20,
            color: '#EF4444',
            fontFamily: 'Rakkas',
          }}
        >
          البادية اوربا
        </Text>
        <View
          style={{
            marginVertical: 5,
            width: '100%',
            padding: 10,
            flexDirection: 'column',
          }}
        >
          <Text
            style={{
              fontSize: 14,
              marginBottom: 10,
              fontWeight: '700',
              color: '#4B5563',
            }}
          >
            E-mail Address
          </Text>
          <Input
            title="E-mail address"
            secure={false}
            correct={false}
            complete={true}
            value={setEmail}
          />
        </View>
        <View
          style={{
            marginVertical: 5,
            width: '100%',
            padding: 10,
            position: 'relative',
          }}
        >
          <Text
            style={{
              fontSize: 14,
              marginBottom: 10,
              fontWeight: '700',
              color: '#4B5563',
            }}
          >
            Password
          </Text>
          <View
            style={{
              marginBottom: 20,
              position: 'relative',
            }}
          >
            <Input
              title="Password"
              secure={secure}
              correct={false}
              complete={false}
              value={setPassword}
            />
            <TouchableOpacity
              style={{
                position: 'absolute',
                transform: [{ translateY: '-50%' }],
                top: '50%',
                right: 15,
              }}
              onPress={handleCheck}
            >
              <Feather
                name={secure ? 'eye-off' : 'eye'}
                style={{
                  color: '#EF4444',
                  fontWeight: '700',
                  fontSize: 18,
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 10,
              flex: 1,
            }}
          >
            <CheckBox
              value={check}
              onChange={() => setCheck(!check)}
              style={{
                alignSelf: 'center',
                width: 16,
                height: 16,
                backgroundColor: '#F87171',
              }}
            />
            <Text
              style={{
                fontSize: 14,
                fontWeight: '700',
                color: '#374151',
                marginLeft: 10,
              }}
            >
              Login as provider
            </Text>
          </View>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '700',
              color: '#F87171',
              textAlign: 'right',
            }}
            onPress={() => Linking.openURL('http://google.com')}
          >
            Login as provider
          </Text>
        </View>
        <TouchableOpacity
          style={{
            width: '100%',
            paddingHorizontal: 20,
            paddingVertical: 15,
            borderRadius: 10,
            backgroundColor: '#EF4444',
            marginVertical: 10,
          }}
          onPress={handleSubmit}
        >
          <Text
            style={{
              color: '#fff',
              textAlign: 'center',
              fontSize: 14,
              fontWeight: '500',
            }}
          >
            Sign in
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '100%',
            paddingHorizontal: 20,
            paddingVertical: 15,
            marginVertical: 10,
          }}
          onPress={() => Linking.openURL('')}
        >
          <Text
            style={{
              color: '#EF4444',
              textAlign: 'center',
              fontSize: 14,
              fontWeight: '500',
            }}
          >
            Login as a guest
          </Text>
        </TouchableOpacity>
      </View>

      {/* footer view */}

      <View
        style={{
          width: '100%',
          paddingHorizontal: 10,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          paddingVertical: 20,
        }}
      >
        <Text
          style={{
            color: '#374151',
            fontWeight: '600',
            fontSize: 14,
          }}
        >
          Don't have an account?{' '}
          <Text
            style={{
              color: '#EF4444',
            }}
            onPress={() => Linking.openURL('')}
          >
            Sign up
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Rubik',
  },
  centeredView: {
    flex: 1,
    backgroundColor: '#37415150',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    width: '100%',
    alignItems: 'center',
  },
  button: {
    borderRadius: 10,
    // padding: 10,
    elevation: 2,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#10B981',
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
  },
});
