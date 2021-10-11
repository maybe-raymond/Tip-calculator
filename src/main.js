import React, {useState} from 'react';
import { Foundation } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Total from './totalCompount';
import TipContainor from './tipCompount';
import { StyleSheet, Text, View , 
        ScrollView , TextInput
        } from 'react-native';



export default function Main(){
    const [currentTip, changeTip] = useState(1)
    const [amount, changeAmount]  = useState(0)
    const [numPeople, changePeople] = useState(1)
  
    const IsNumeric = (num) => {
      return !isNaN(num)
    }
  
  
      return (
        <ScrollView 
        style={styles.Main_containor}
        scrollEnabled={true}>
           <InputBox Title="Bill" defaultValue="0"  place="$0.00" setValue={changeAmount} IsNumeric={IsNumeric} iconLeft={<Foundation name="dollar" size={24} color="black" style={styles.InputIcon} />}/>
           <TipContainor currentTip={currentTip} setValue={changeTip} IsNumeric={IsNumeric} />
           <InputBox  Title="number of people %" value="1" place="1" setValue={changePeople} IsNumeric={IsNumeric} iconLeft={<Ionicons name="people" size={24} color="black" />}/>
           //<Total amount ={amount} numPeople={ numPeople} tip={currentTip} changeAmount={changeAmount}  changePeople={changePeople}  changeTip={ changeTip}/>
        </ScrollView>
      )
    }

function InputBox(props){
  
  
        const checkValue = (e) => {
      
          if (!e || e === "0"){
            props.setValue(1)
          }
          else if(props.IsNumeric(e)){
            props.setValue(Number(e))
          }
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
  
  
  const styles = StyleSheet.create({
    
      Main_containor:{
        backgroundColor: "white",
        height:"70%",
        width:"100%",
        borderRadius:12,
        padding:10
      },
    
      title:{
        fontSize:16,
        color:"hsl(184, 14%, 56%)",
        marginBottom:10,
        fontFamily:"SpaceMonoBold",
    
      },
    
      inputContainor:{
        flex:1,
        backgroundColor:"hsl(185, 41%, 84%)",
        flexDirection:"row",
        justifyContent:"space-between",
        borderRadius: 5,
        padding:12,
        marginBottom:20,
      },
    
      Input:{
        textAlign:"right",
        width:"80%",
        fontSize:20,
        fontFamily:"SpaceMonoBold",
      },
    
      InputIcon:{
        marginLeft:10,
      }
});
