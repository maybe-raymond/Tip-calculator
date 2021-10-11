import React from 'react';
import { StyleSheet, Text, View ,  
        TouchableOpacity} from 'react-native';


export default function Total(props){
    //bottom bar that containts total amount and reset button
  
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
