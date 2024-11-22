  import { Input, Text, Button, Layout, List, Divider, ListItem } from '@ui-kitten/components';


export function ResetButton (props){
  
    const Resetting = () => {
      props.changeAmount(0) 
      props.changePeople(1) 
      props.changeTip(5)
    }
  
    return(
      <>
      <Button>
        <Text onPress={Resetting}>
          Reset</Text>
      </Button>
      <Divider />
      </>
    )
  }


export const Header = ({name}:{name:string}): React.ReactElement => (
    <Text  
       style={{marginBottom: 10}}
       category='h6'>
         {name}
     </Text>
 )
 