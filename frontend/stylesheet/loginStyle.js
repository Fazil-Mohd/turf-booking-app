import { StyleSheet,Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const loginStyle=StyleSheet.create(
    {

        container:{
            height:windowHeight,
            width:windowWidth,
            display:"flex",
            alignItems:"center",
            justifyContent:"flex-start",
            backgroundColor:"black",

        },
        mainheading:{
            color:"white",
            fontSize:28,
            fontWeight:"500",
            marginTop:150
        },
        subheading:{
          fontSize:20,
          color:"#C4C4C4",
          fontWeight:"500"
        },
        logincontainer:{
            width:315,
            height:48,
            display:"flex",
            alignItems:"start"
            
        },
        logintext:{
            color:"white",
            marginTop:30,
            fontSize:18,
            fontWeight:"500",
            height:27
            
        },
        textinput:{
            backgroundColor:"white",
            height:48,
            borderRadius:6,
            fontSize:16,
            color:"#36454F",
            marginTop:5
        },
        forgottext:{
            color:"#EA4335",
            fontSize:16,
            marginTop:5,
            marginRight:70            
        },
        forgotcontainer:{
            width:windowWidth,
            display:"flex",
            alignItems:'flex-end'
        },
        loginbutton:{
            width:295,
            height:48,
            backgroundColor:"#017906",
            borderRadius:22,
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            marginTop:30
        },
        loginbuttontext:{
            fontSize:20,
            color:"white",
            fontWeight:"500"
        },
        createcontainer:{
            display:"flex",
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"center",
            marginTop:5
        },
        createtext:{
            color:"#A9A9A9",
            fontSize:16,
            fontWeight:"500",

        },
        createbutton:{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            marginLeft:10
        },
        createbuttontext:{
            color:"#017906",
            fontSize:16
        }




    }
)
export default loginStyle