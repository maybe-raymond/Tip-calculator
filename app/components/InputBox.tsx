import { View} from "react-native"
import { Input} from '@ui-kitten/components';
import IsNumeric from "../utils/helper"
import { Header } from "./Basic";

export default function InputBox(props){
    
    const checkValue = (value:string) => {
      let [result, num] = IsNumeric(value)
      if (result) props.setValue(num)
   
    }
  
  
    return (
      <>
      <View style={{marginBottom:25}}>
        <Header name={props.Title}/>
        <View >
          <Input 
            onChangeText={ (e) => checkValue(e) }
            placeholder={props.place}  
            keyboardType="phone-pad" 
            textAlign="right" 
          />
        </View>
      </View>
    </>
    )
  }
