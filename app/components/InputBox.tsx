import { View, Text, TextInput } from "react-native"
import styles from "../style/styles"
import IsNumeric from "../utils/helper"

export default function InputBox(props){
    
    const checkValue = (value:string) => {
      let [result, num] = IsNumeric(value)
      if (result) props.setValue(num)
   
    }
  
  
    return (
      <View>
        <Text style={styles.title}>{props.Title}</Text>
        <View style={styles.inputContainor}>
          {props.iconLeft}
          <TextInput 
            onChangeText={ (e) => checkValue(e) }
            style={styles.Input}
            placeholder={props.place}  
            textAlign="right" 
            keyboardType="phone-pad" 
            defaultValue={props.value}/>
        </View>
      </View>
    )
  }

function isNumeric(value: string): [any, any] {
    throw new Error("Function not implemented.")
}
  