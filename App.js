import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Foundation } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { StyleSheet, Text, View , 
  ScrollView , Image, TextInput, TouchableOpacity} from 'react-native';


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
    return <Text>Erro</Text>
    
  }
  
}


function Main(){
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
         <Total amount ={amount} numPeople={ numPeople} tip={currentTip} changeAmount={changeAmount}  changePeople={changePeople}  changeTip={ changeTip}/>
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


function TipContainor(props){

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
    <View style={styles.tip}>
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


function Total(props){

  const totalAmount = (amount, tip) => {
    let semiAmount = Number(props.amount)/100
    let total = semiAmount*tip
    return total
  }

  return (
    <View style={styles.TotalContainor}>
      <Amount header="Tip Amount" para="per person" money="$0.00" total={ totalAmount(props.amount, props.tip)/props.numPeople} />
      <TipView  header="Tip %" para="percentage of tip" tip={props.tip}/>
      <Amount header="Total"  para="person" money="$0.00"  total={ totalAmount(props.amount, props.tip)} />
      <ResetButton changeAmount={props.changeAmount}  changePeople={props.changePeople} changeTip={props.changeTip}/>
    </View>

  )
}

function Amount(props){

  const value =`$${props.total.toFixed(2)}`

  return(
    <View style={styles.AmountConntainor}>
      <View>
       <Text style={styles.TipHeader}>{props.header} </Text>
       <Text style={styles.TipPar}>{props.para}</Text>
      </View>
      <Text style={styles.amount}>{value}</Text>
  </View>
  )
}

function TipView(props){

  return(
    <View style={styles.AmountConntainor}>
      <View>
       <Text style={styles.TipHeader}>{props.header} </Text>
       <Text style={styles.TipPar}>{props.para}</Text>
      </View>
      <Text style={styles.amount}>{`${props.tip}%`}</Text>
  </View>
  )
}
  

function ResetButton (props){

  const Resetting = () => {
    props.changeAmount(0) 
    props.changePeople(1) 
    props.changeTip(1)
  }

  return(
    <TouchableOpacity>
      <Text style={styles.reset} onPress={Resetting}>
        Reset</Text>
    </TouchableOpacity>
  )
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

  TotalContainor:{
    padding:25,
    backgroundColor:"hsl(183, 100%, 15%)",
    borderRadius:10,

  },
  AmountConntainor:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
  },

  TipHeader:{
    color:"white",
    fontSize:20,
    fontFamily:"SpaceMonoBold",
  },

  TipPar:{
    color:"hsl(180, 37%, 78.8%);",
    fontSize:15,
    marginBottom:15,
  },

  amount:{
    fontWeight:"700",
    fontSize:25,
    color:"white",
    fontFamily:"SpaceMonoBold",
  },

  reset:{
    flex:1,
    height:40,
    fontWeight:"bold",
    color:"hsl(183, 100%, 15%)",
    backgroundColor:"hsl(172, 67%, 45%)",
    textAlign:"center",
    borderRadius:5,
    padding:10,
    marginTop:20,
    fontFamily:"SpaceMonoBold",
    fontSize:18,
  }
});
