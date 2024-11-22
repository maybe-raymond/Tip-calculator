import {StyleSheet} from "react-native";
import IsNumeric from "../utils/helper";
import {Card, Divider, List , ListItem, Text} from '@ui-kitten/components';




export default function TotalView(props){
    //bottom bar that containts total amount and reset button
  let Tip = totalAmount(props.amount, props.tip)
  
  let TipData = [
    {title: "Tip", value: `${props.tip}%`},
    {title: "Tip Per Person", value: check(Tip / props.numPeople)},
    {title: "Total Tip", value:check(Tip)},
    {title:"Total Bill", value:check(Tip + props.amount)}
  ]

  const renderItems = ({item}): React.ReactElement => (
    <ItemView title={item.title} tip={item.value}/>
  )
            
  return (
      <Card
        style={{borderRadius:10}}
      >
        <List
          style={{marginBottom:20}}
          data={TipData}
          renderItem={renderItems}
          ItemSeparatorComponent={Divider}
        />
        {props.ResetButton}
      </Card>    )
  }
  

const totalAmount = (amount: string, tip:number): number => {
    let [result, num] = IsNumeric(amount)
    if (!result) return 1 // for cases where people are less than 0 and converting amount fails
    
    let semiAmount = num / 100
    let total = semiAmount*tip
    return total
  } 

const check = (value:number): string => {
      let result = value.toFixed(2)
      if (result) return `${result}` 
      return "0.00"  
}

const TextRender = ({item}:{item: string|number}): React.ReactElement =>{
    return <Text category='h6'>{item}</Text>
  }
  


const ItemView = ({title, tip}:{title:string, tip:number|string}): React.ReactElement =>(
    <>
      <ListItem
      accessoryLeft={<TextRender item={title} />}
      accessoryRight={<TextRender item={`${tip}`} />}
      >
      </ListItem>
    </>
  )
