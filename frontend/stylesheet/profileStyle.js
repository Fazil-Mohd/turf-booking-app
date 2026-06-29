import { StyleSheet,Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const profileStyle=StyleSheet.create(
    {
        maincontainer:{
            flex:1,
            justifyContent:"start",
            alignItems:'center',
            backgroundColor:"white"
        },
        topbarcontainer:{
            display:"flex",
            flexDirection:"row",
            justifyContent:"flex-start",
            alignItems:"center",
            marginTop:20,
            width:"100%"
        },
        backbutton:{
            backgroundColor:"green",
            margin:20,
            height:36,
            width:36,
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            borderRadius:1000
        },
        toptext:{
            fontSize:19,
            marginLeft:70,
            fontWeight:"700"
        },
        image:{
            height:141,
            width:141
        },
        editcontainer:{
            backgroundColor:"green",
            height:45,
            width:45,
            display:"flex",
            justifyContent:'center',
            alignItems:"center",
            borderRadius:1000,
            marginTop:-20,
            marginLeft:50
        },
        text:{
            fontWeight:"700",
            width:"100%",
            marginLeft:50,
            marginTop:20
        },
        textinput:{
            width:304,
            height:45,
            backgroundColor:"#D9D9D97D",
            borderRadius:10,
            marginRight:40,
            marginTop:5,
            marginBottom:10
        },
        updatebutton:{
            backgroundColor:'green',
            width:274,
            height:47,
            marginTop:150,
            borderRadius:30,
            display:'flex',
            justifyContent:"center",
            alignItems:"center"
        },
        updatetext:{
            color:"white",
            fontWeight:"700"
        }

    }
)

export default profileStyle;