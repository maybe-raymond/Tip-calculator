import React from 'react';
import { StyleSheet, Text, View ,  TextInput, 
        TouchableOpacity} from 'react-native';


export default function TipContainor(props){
    //it represents all the tip values
 
   const buttons = [
     {value:"15%", key:"1"},
     {value:"10%", key:"2"}, 
     {value:"15%", key:"3"}, 
     {value:"25%", key:"4"}, 
     {value:"50%", key:"5"}]
 
   
 
   const setTipValue = (i) => {
     const splitValue = i.split("%")
     if (props.IsNumeric(splitValue[0])){
       props.setValue(Number(splitValue[0]));
     }
   }
 
   const setInput = (i) => {
     if (props.IsNumeric(i)){
       if (i === "0"){
         props.setValue(1)
       }
       else{
         props.setValue(Number(i));
       }
     }
   }
   
   return(
     <View>
       <Text style={styles.title}>Select Tip %</Text>
       <View style={styles.buttonContainor}>
         {
           buttons.map( i => 
               < TouchableOpacity>
                 <Text 
                   style={styles.button}
                   onPress={ () => setTipValue(i.value)}
                   key={i.key}
                   >
                   {i.value}</Text>
               </TouchableOpacity>
           )
         }
          <TouchableOpacity>
          <TextInput 
           style={styles.button}
           placeholder="custom"  
           placeholderTextColor = 'white'
           keyboardType="phone-pad" 
           onChangeText={ (e) => setInput(e)} />
           </TouchableOpacity>
       </View>
     </View>
   )
 }
 
 

 const styles = StyleSheet.create({
  
    title:{
      fontSize:16,
      color:"hsl(184, 14%, 56%)",
      marginBottom:10,
      fontFamily:"SpaceMonoBold",
  
    },
  
    buttonContainor:{
      flex:1,
      justifyContent:"space-evenly",
      flexDirection:"row",
      flexWrap:"wrap",
      padding:10,
    },
  
    button:{
      width:120,
      height:50,
      backgroundColor:"hsl(183, 100%, 15%)",
      color:"hsl(0, 0%, 100%)",
      borderRadius:4,
      fontSize:18,
      fontWeight:"700",
      marginTop:10,
      marginBottom:15,
      textAlign:"center",
      padding:10,
      fontFamily:"SpaceMonoBold",
    },
});
