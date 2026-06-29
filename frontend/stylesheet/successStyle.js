import { StyleSheet,Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const successStyle=StyleSheet.create(
    {
        maincontainer:{
            flex:1,
            justifyContent:"flex-start",
            alignItems:"center",
            backgroundColor:"black"
        },
        cardcontainer:{
            height:269,
            width:320,
            backgroundColor:"white",
            marginTop:60,
            borderRadius:25,
            display:"flex",
            justifyContent:"start",
            alignItems:"center"

        },
        turfimage:{
            height:146,
            width:202,
            marginTop:-30,
            borderRadius:10

        },
        turftext:{
            marginTop:20,
            fontWeight:"700",
            fontSize:22,

        },
        turfsubtext:{
            fontSize:12,
            fontWeight:"700"
        },
        tickcontainer:{
            display:"flex",
            height:68,
            width:68,
            backgroundColor:"black",
            borderRadius:1000,
            marginTop:60,
            justifyContent:"center",
            alignItems:"center"
        },
        ticksubcontainer:{
            display:"flex",
            height:50,
            width:50,
            backgroundColor:"white",
            borderRadius:1000,
            justifyContent:"center",
            alignItems:"center"
        },
        ticksubsubcontainer:{
            display:"flex",
            height:40,
            width:40,
            backgroundColor:"white",
            justifyContent:"center",
            alignItems:"center",
            borderRadius:1000
        },
        recieptcontainer:{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            flexDirection:"row",
            marginTop:40
        },
        reciepttext:{
            color:"white",
            
        },
        additionalcontainer:{
            marginTop:20
        },
        exptext:{
            fontSize:14,
            fontWeight:"700",
            marginTop:20
        },
        emojicontainer:{
            display:"flex",
            flexDirection:"row",
            flexWrap:"wrap",
            justifyContent:"space-evenly",
            width:"100%"
        },
        emojisubcontainer:{
            height:61,
            width:61,
            borderColor:"black",
            borderWidth:1,
            borderRadius:1000,
            marginTop:20,
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        },
        emojimaincontainer:{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            width:"33.33%"
        },
        emojitext:{
            fontSize:12,
            fontWeight:"800",
            textAlign:"center"
        },
        bottomcontainer:{
            display:"flex",
            justifyContent:"center",
            alignItems:'center',
            marginTop:20,
            flexDirection:"row"
        },
        continuebutton:{
            backgroundColor:"#017906",
            width:72,
            height:20,
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            borderRadius:8,
            marginRight:10
        },
        bottomtext:{
            fontSize:10,
            fontWeight:"700",
            color:"white"
        },
        skipbutton:{
            borderColor:"white",
            borderWidth:1,
            width:72,
            height:20,
            justifyContent:"center",
            alignItems:'center',
            borderRadius:8
        }


    }
)

export default successStyle