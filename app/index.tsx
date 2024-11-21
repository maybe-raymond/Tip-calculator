import { Text, View, ScrollView, TextInput} from "react-native";
import React, { useState } from "react";
import { Foundation } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import styles from "./style/styles"; 
import TotalView from  './components/TotalView'
import IsNumeric from "./utils/helper";
import TipSelector from "./components/TipSelector";
import InputBox from "./components/InputBox";


export default function Index() {

    const [currentTip, changeTip] = useState<number>(5)
    const [amount, changeAmount]  = useState<number>(0)
    const [numPeople, changePeople] = useState<number>(1)
  
      return (
        <ScrollView 
        style={styles.Main_containor}
        scrollEnabled={true}>
           <InputBox Title="Bill" defaultValue="0"  place="$0.00" setValue={changeAmount} iconLeft={<Foundation name="dollar" size={24} color="black" style={styles.InputIcon} />}/>
           <TipSelector currentTip={currentTip} setValue={changeTip} />
           <PeopleInput  value="1" place="1" setValue={changePeople} />
           <TotalView amount ={amount} numPeople={numPeople} tip={currentTip} changeAmount={changeAmount}  changePeople={changePeople}  changeTip={ changeTip}/>
        </ScrollView>
      )
}


function PeopleInput(props){

  const checkPeopleValue = (people:string) =>{
    let [result, num] = IsNumeric(people)
    
    if (!result || num < 1) {
      props.setValue(1)
    }
    else{
      props.setValue(num)
    }
  }

  return (
      <View>
        <Text style={styles.title}>{"Number of People"}</Text>
        <View style={styles.inputContainor}>
          <Ionicons name="people" size={24} color="black" />
          <TextInput 
              onChangeText={ (e) => checkPeopleValue(e) }
              style={styles.Input}
              placeholder={props.place}  
              textAlign="right" 
              keyboardType="phone-pad" 
              defaultValue={props.value}/>
        </View>
    </View>
  )
}


