import { TextInput, TouchableOpacity, View, Text } from "react-native";
import styles from "../style/styles";
import IsNumeric from "../utils/helper";

export default  function TipSelector(props){
    //it represents all the tip values
 
   const buttons = [
     {value:"5%", key:"1"},
     {value:"10%", key:"2"}, 
     {value:"15%", key:"3"}, 
     {value:"25%", key:"4"}, 
     {value:"50%", key:"5"}]
 
   
 
   const setTipValue = (i:string) => {
     const splitValue = i.split("%")
     let [result, num] = IsNumeric(splitValue[0])
     if (result) props.setValue(num);
  
   }
 
   const setInput = (i:string) => {
    let [result, num] = IsNumeric(i);
     if (result){
       if (num > 0){
        props.setValue(num)
      }
       else{
         props.setValue(1);
       }
     }
   }
   
   return(
     <View>
       <Text style={styles.title}>Select Tip</Text>
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