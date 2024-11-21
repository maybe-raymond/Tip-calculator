import { StyleSheet } from "react-native";


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

export default styles;
