import React from 'react';
import { View, Text, Button, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { blue } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
import flashimage from '../assets/images/rb_60348.png'

export default function Loginpage() {
  const router = useRouter();

  const handleLogin = () => {
    console.log('User logged in');
    router.push('/dashboard')
  };

  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
    }}>

      <Image source={flashimage} style={{
        width: 200,
        height: 200,
        marginTop: 30
      }}></Image>

      <View style={{
        padding: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        margin:10
      }}>
        <Text style={{
          fontSize: 25,
          fontWeight: 'bold',
          alignItems: 'center'
        }}>Welcome to </Text>
        <Text style={{
          fontSize: 25,
          fontWeight: 'bold',
          alignContent: 'center'
        }}>MirrorLink</Text>
        <Text style={{textAlign:'center',color:'gray'}}>Manage your mirror contents from one place . control all your display contents and update it when you need.</Text>

      </View>

      <TouchableOpacity
        style={{
          'backgroundColor': '#1170D1',
          'width': '100%',
          alignItems: 'center',
          margin: 5,
          borderRadius: 10
        
        }}
        onPress={()=>router.push('/loginpage')}
        ><Text style={{
          color: 'white',
          padding: 20,
          fontSize:18

          
        }}>Login</Text></TouchableOpacity>

      <TouchableOpacity
        style={{
          'backgroundColor': 'gray',
          'width': '100%',
          alignItems: 'center',
          margin: 5,
          borderRadius: 10
        }}
        
        onPress={()=>router.push('/registeruser')}
        ><Text style={{
          color: 'white',
          padding: 20,
          fontSize:18
        }}>Register</Text></TouchableOpacity>
    </View>
  );
}
