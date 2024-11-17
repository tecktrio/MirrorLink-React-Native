import React from 'react';
import { View, Text, Button, TouchableOpacity, Image, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { blue } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
import flashimage from '../assets/images/rb_60348.png'

export default function Loginpage() {
  const router = useRouter();


  return (
    <View style={{
      flex: 1,
      padding: 20,
    }}>

      <View style={{
        flex: 1,
        alignItems: 'flex-start'
      }}>

        <Text style={{
          fontSize: 40,
          fontWeight: 'bold',
        }}>Let's Sign </Text>
        <Text style={{
          fontSize: 40,
          fontWeight: 'bold',
        }}>You In.</Text>
        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'gray'
        }}>You've been missed!</Text>

      </View>



      <View style={{
        flex: 1,
        width: '100%',
      }}>
        <Text>Username or Email</Text>
        <TextInput
          style={{
            height: 40,
            borderColor: '#ccc',
            borderWidth: 1,
            borderRadius: 5,
            paddingLeft: 10,
            width: '100%',
            marginBottom: 20,
          }}
          placeholder="Enter your text here"

        // Update state when text changes
        />

        <Text>Password</Text>
        <TextInput
          style={{
            height: 40,
            borderColor: '#ccc',
            borderWidth: 1,
            borderRadius: 5,
            paddingLeft: 10,
            width: '100%',
            marginBottom: 20,
          }}
          placeholder="Enter your text here" />
      </View>

      <TouchableOpacity
        style={{
          'backgroundColor': '#1170D1',
          'width': '100%',
          alignItems: 'center',
          margin: 5,
          borderRadius: 10

        }}
        onPress={() => router.push('/dashboard')}
      ><Text style={{
        color: 'white',
        padding: 20,
        fontSize: 18


      }}>Login</Text></TouchableOpacity>


    </View>
  );
}
