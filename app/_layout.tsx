
import { Stack } from "expo-router";




export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="loginpage" />
      <Stack.Screen name="dashboard" />
      <Stack.Screen name="newuser" />
      <Stack.Screen name="registeruser" />
      <Stack.Screen name="contents" />
    </Stack>
  );
}
