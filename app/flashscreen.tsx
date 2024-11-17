// app/Flashscreen.tsx
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useRouter } from 'expo-router';

export default function Flashscreen() {
  const router = useRouter();

//   // Navigate to the login page after a short delay
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       router.push('/flashscreen'); // Navigate to login screen
//     }, 2000); // 2-second delay for flash screen

//     return () => clearTimeout(timer);
//   }, [router]);

  return (
    <View>
      <Text>Welcome to the App!</Text>
    </View>
  );
}
