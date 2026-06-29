import { StyleSheet,Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const blankStyle=StyleSheet.create(
    {
        maincontainer:{
            backgroundColor:"black",
            height:windowHeight,
            width:windowWidth,
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            color:"white"
        },
        imagecontainer:{
            height:"267px",
            width:"259px",
            backgroundColor:"#017906",
            borderRadius:1000
        },
        textcontainer:{
            color:"white",
            fontSize:19,
            fontWeight:"700",
            margin:22
        },
        text:{
            color:"white",
            width:202
        },
        buttoncontainer:{
            backgroundColor:"#017906",
            height:53,
            width:226,
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            borderRadius:18,
            margin:60
        },
        buttontext:{
            fontSize:22,
            fontWeight:"700",
            color:"white",
            
        }
    }
)

export default blankStyle