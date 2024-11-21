import { Text, View, TouchableOpacity} from "react-native";
import styles from "../style/styles";
import IsNumeric from "../utils/helper";


export default function TotalView(props){
    //bottom bar that containts total amount and reset button
  let Tip = totalAmount(props.amount, props.tip)
            
  return (
      <View style={styles.TotalContainor}>
        <TipView  header="Tip %" tip={props.tip}/>
        <Amount header="Tip Per Person" money="$0.00" total={(Tip / props.numPeople)} />
        <Amount header="Total Tip"  money="$0.00"  total={Tip} />
        <Amount header="Total Bill"  money="$0.00"  total={Tip + props.amount} />
        <ResetButton changeAmount={props.changeAmount}  changePeople={props.changePeople} changeTip={props.changeTip}/>
      </View>
  
    )
  }
  

const totalAmount = (amount: string, tip:number): number => {
    let [result, num] = IsNumeric(amount)
    if (!result) return 1 // for cases where people are less than 0 and converting amount fails
    
    let semiAmount = num / 100
    let total = semiAmount*tip
    return total
  } 

  
function Amount(props){

    const check = (value:number): string => {
      let result = value.toFixed(2)
      if (result) return `${result}` 
      return "0.00"
      
    }

    const value = check(props.total)
  
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
      props.changeTip(5)
    }
  
    return(
      <TouchableOpacity>
        <Text style={styles.reset} onPress={Resetting}>
          Reset</Text>
      </TouchableOpacity>
    )
  }

