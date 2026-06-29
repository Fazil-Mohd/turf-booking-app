import { StyleSheet,Dimensions } from "react-native"

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const paymentStyle=StyleSheet.create(
    {
        maincontainer:{
            flex:1,
            justifyContent:"start",
            alignItems:"center",
            backgroundColor:"black"
        },
        topcontainer:{
            display:"flex",
            width:windowWidth,
            backgroundColor:"#017906",
            height:50,
            justifyContent:"center",
            alignItems:"flex-start",
        },
        backbuttoncontainer:{
            marginLeft:10,
            marginTop:10,
            shadowColor: 'grey',
            shadowOffset: { width: 10, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5, 

        },
        paytext:{
            color:"white",
            fontWeight:"700",
            marginTop:20
        },
        cardcontainer:{
            height:180,
            width:327,
            backgroundColor:"white",
            marginTop:20,
            borderRadius:16
        },
        cardsubcontainer:{
            display:"flex",
            margin:20,
            flexDirection:"row",
            justifyContent:"space-evenly",
            alignItems:"center"
        },
        cardtext:{
            color:"#606060",
            fontSize:12,

        },
        cardselectcontainer:{
            height:12,
            width:12,
            borderColor:"#027FEE",
            borderWidth:1,
            borderRadius:1000
        },
        addcardcontainer:{
            display:"flex",
            flexDirection:"row",
            justifyContent:"center",
            alignItems:"center"
        },
        addcardtext:{
            color:"#606060",
            marginLeft:10
        },
        othercontainer:{
            height:120
        },
        bottomcontainer:{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            flexDirection:"row",
            marginTop:20
        },
        firstcontainer:{
            display:"flex",
            justifyContent:"center",
            alignItems:'center'
        },
        firsttext:{
            fontSize:20,
            color:"white",
            fontWeight:"800",
        },
        proceedbutton:{
            backgroundColor:"#017906",
            display:"flex",
            justifyContent:"center",
            alignItems:'center',
            height:50,
            width:159,
            marginLeft:20,
            borderRadius:16,


        },
        proceedtext:{
            color:"white",
            fontSize:16,
            fontWeight:"700"

        }

    }
)

export default paymentStyle