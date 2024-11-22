import { View } from "react-native";
import IsNumeric from "../utils/helper";
import { Input, Button,  List, Divider, ListItem } from '@ui-kitten/components';
import { Header } from "./Basic";

type TipObj = {
  value: string,
  key: number
}

const tipButtonList:TipObj[] = [
     {value:"5%", key:1},
     {value:"10%", key:2}, 
     {value:"15%", key:3}, 
     {value:"20%", key:4}, 
     {value:"25%", key:5},
     {value:"30%", key:6}
  ]
 
export default function TipSelector(props){
    //it represents all the tip values
   
 
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

   const renderItemns = ({item}:{item:TipObj}): React.ReactElement =>(
      <TipButton tip={item} func={setTipValue}/>
   )
   
   return(
     <View style={{marginBottom:25}}>
      <Header name="Select Tip"/>
      <List
        ItemSeparatorComponent={Divider}
        data={tipButtonList}
        renderItem={renderItemns}
      >
      </List>
      <Input 
        placeholder="custom"  
        keyboardType="phone-pad" 
        onChangeText={ (e) => setInput(e)} 
        style={{marginTop:10, textAlign:"right"}}
        textAlign="right" 
        />
     </View>
   )
}


const TipButton = ({tip, func}:{tip:TipObj, func:(a:string) => void}):React.ReactElement => (
    <Button
      onPress={ () => func(tip.value)}
      key={tip.key}
      style={{marginBottom: 10}}
      > 
          {tip.value}
    </Button>
)
