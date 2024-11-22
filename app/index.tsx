import { KeyboardAvoidingView, Platform, ScrollView, View, StyleSheet} from "react-native";
import React, { useState } from "react";
import TotalView from  './components/TotalView'
import IsNumeric from "./utils/helper";
import TipSelector from "./components/TipSelector";
import InputBox from "./components/InputBox";
import { Input, Text, Layout} from '@ui-kitten/components';
import { ResetButton, Header } from "./components/Basic";




/*
TODO LIST
- Convert card of Tip breakdown to be a list and add some colour to it

*/
export default function Index() {

    const [currentTip, changeTip] = useState<number>(5)
    const [amount, changeAmount]  = useState<number>(0)
    const [numPeople, changePeople] = useState<number>(1)
  
      return (
         <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={{ flex: 1 }}
        >
      <ScrollView>
          <Layout style={{flex:1, padding:20}}>
                 <InputBox Title="Amount" place="$0.00" value="0" setValue={changeAmount}/>
                 <TipSelector currentTip={currentTip} setValue={changeTip} />
                  <PeopleInput setValue={changePeople} />
                  <TotalView amount ={amount} numPeople={numPeople} tip={currentTip} ResetButton = {<ResetButton changeAmount={changeAmount}  changePeople={changePeople} changeTip={changeTip}/>} />
            </Layout>
      </ScrollView>
      </KeyboardAvoidingView>

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
      <View style={{marginBottom: 25}}>
        <Header name="Number of People"/>
          <Input 
              onChangeText={ (e) => checkPeopleValue(e) }
              placeholder="1"  
              textAlign="right" 
              keyboardType="phone-pad"/>
    </View>
  )
}


