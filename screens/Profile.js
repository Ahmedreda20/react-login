import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Platform } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import * as ImagePicker from 'expo-image-picker';
export default function Profile({ navigation }) {
  const [image, setImage] = useState(null);
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);
  async function uploadImage() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  }

  return (
    <View style={{ flex: 1, paddingVertical: 30 }}>
      <View
        style={{
          width: 100,
          height: 100,
          borderRadius: 9999,
          padding: 5,
          borderWidth: 2,
          borderColor: '#e2e8f0',
          borderStyle: 'solid',
          position: 'relative',
          marginHorizontal: 'auto',
          marginBottom: 30,
        }}
      >
        <Image
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 9999,
          }}
          source={{
            uri: image
              ? image
              : 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png',
          }}
        />
        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: 30,
            height: 30,
            borderRadius: 9999,
            backgroundColor: '#b91c1c',
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: '#fff',
            borderWidth: 2,
          }}
          onPress={() => uploadImage()}
        >
          <SimpleLineIcons
            name="pencil"
            style={{
              color: '#fff',
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.fieldGroup}>
        <TextInput style={styles.field} placeholder="Full name" />
      </View>
      <View style={styles.fieldGroup}>
        <TextInput style={styles.field} placeholder="Phone number" />
      </View>
      <View style={styles.fieldGroup}>
        <TextInput style={styles.field} placeholder="E-mail address" />
      </View>
      <View style={styles.fieldGroup}>
        <TextInput style={styles.field} placeholder="Write your address" />
      </View>
      <View style={styles.fieldGroup}>
        <TouchableOpacity style={{ marginTop: 10 }}>
          <Text
            style={{
              textDecorationLine: 'underline',
              underlineColor: 'red',
              color: '#64748b',
            }}
          >
            Change your password
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.fieldGroup}>
        <TouchableOpacity
          style={{
            width: '100%',
            backgroundColor: '#b91c1c',
            fontWeight: 700,
            textAlign: 'center',
            borderRadius: 999,
            paddingInline: 30,
            paddingBlock: 10,
            fontFamily: 'Rubik',
            marginTop: 100,
          }}
        >
          <Text
            style={{
              color: '#fff',
              fontSize: 16,
            }}
          >
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  field: {
    width: '100%',
    borderColor: '#cbd5e1',
    paddingInline: 30,
    paddingBlock: 10,
    borderRadius: 20,
    color: '#64748b',
    fontSize: 14,
    borderWidth: 1.5,
    borderStyle: 'solid',
    fontWeight: 300,
    fontFamily: 'Rubik',
  },

  fieldGroup: {
    paddingInline: 20,
    marginBottom: 15,
    alignItems: 'flex-start',
  },
});
