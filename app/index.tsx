// app/Flashscreen.tsx
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useRouter } from 'expo-router';

export default function Flashscreen() {
  const router = useRouter();

  // Navigate to the login page after a short delay
  useEffect(() => {
    // console.log('heello')
    const timer = setTimeout(() => {
      router.push('/newuser'); // Navigate to login screen
    }, 2000); // 2-second delay for flash screen

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View style={{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }}>
      <Text style={{
        fontSize:20,fontWeight:'bold'
      }}>MirrorLink</Text>
      <Text>Let's Connect all Displays Together</Text>
    </View>
  );
}
