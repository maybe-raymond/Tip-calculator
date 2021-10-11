import Main from "./src/main";
import React from 'react';
import { useFonts } from 'expo-font';
import { StyleSheet, Text,  
        ScrollView , Image} from 'react-native';


export default function App() {

  const [Loaded] = useFonts({
    "SpaceMono": require("./assets/fonts/SpaceMono-Regular.ttf"),
    "SpaceMonoBold": require("./assets/fonts/SpaceMono-Bold.ttf"),
  })

  if (Loaded){
    return (
      <ScrollView 
      scrollEnabled={true} 
      contentContainerStyle={styles.container}>
        <Image 
          source={require("./assets/logo.png")}
          style={styles.logo}  
        />
        <Main />
      </ScrollView>
    );
  }else{
    return <Text>Error</Text>
    
  }
  
}


const styles = StyleSheet.create({
    container: {
        backgroundColor:"hsl(180, 38.5%, 77.1%)",
        alignItems: 'center',
      },
    
      logo:{
        width:80,
        height:50,
        marginTop:30,
        marginBottom:30
      },
    

});
