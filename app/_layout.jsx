import { Stack } from "expo-router";

// Can use Slot instead of stack if creating a single page app.

const RootLayout = () => {
  return <Stack
  screenOptions={{
    headerStyle:{
      backgroundColor: '#ff8c00',
    },
    headerTintColor:'#fff',
    headerTitleStyle: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    contentStyle: {
      paddingHorizontal:10,
      paddingTop:10,
      backgroundColor: '#fff',
    },
  }}
  >
    <Stack.Screen name = 'index' options={{title: 'Home'}} />
  </Stack>
  
};

export default RootLayout;