import { StyleSheet,Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const bookStyle=StyleSheet.create(
    {
        maincontainer:{
            flex:1,
            
            justifyContent:"flex-start",
            alignItems:"center"
        },
        image:{
            width:440,
            height:424,

        },
        topbarcontainer:{
            position:"absolute",
            marginTop:50,
            display:"flex",
            flexDirection:'row',
            justifyContent:"space-between",
            width:windowWidth,

        },
        backbutton:{
            backgroundColor:"#017906",
            height:36,
            width:36,
            borderRadius:1000,
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            
        },
        turfcontainer:{
            display:"flex",
            justifyContent:"start",
            alignItems:"start",
            width:windowWidth,
            borderTopLeftRadius:40,
            borderTopRightRadius:40,
            backgroundColor:"#D9D9D9",
            height:"100%",
            marginTop:-180
        },
        turfheading:{
            fontSize:20,
            fontWeight:"800",
            marginTop:30,
            marginLeft:20
        },
        turflocationcontainer:{
            justifyContent:'start',
            marginLeft:20
        },
        mapcontainer:{
            
            display:"flex",
            justifyContent:"center",
            alignItems:'flex-end'
        },
        maptext:{
            fontWeight:"700",
            fontSize:12,
            marginLeft:50
        },
        informationcontainer:{
            display:"flex",
            justifyContent:"space-evenly",
            alignItems:"center",
            flexDirection:"row"
        },
        infoview:{
            backgroundColor:"#017906EB",
            height:44,
            width:97,
            borderRadius:8,
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            
        },
        infotext:{
            color:"white",
            fontSize:10
        },
        ratingcontainer:{
            display:"flex",
            flexDirection:"row"
        },
        facilitycontainer:{
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-evenly",
            width:"100%"
        },
        datecontainer:{
            width:165,
            display:"flex",
            justifyContent:"space-evenly",
            flexDirection:"row",
            alignItems:'center',
            marginTop:20,
            marginLeft:20
        },
        datesubcontainer:{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            backgroundColor:"#017906",
            width:52,
            height:57,
            borderRadius:10
        },
        datetext:{
            color:"#D9D9D9",
            fontSize:25,
            fontWeight:"700",

        },
        datemaincontainer:{
            display:"flex",
            width:windowWidth,
            flexDirection:"row",
            justifyContent:"space-between"
        },
        containertext:{
            margin:20,
            fontSize:10,
            fontWeight:"800"
        },
        turfimage:{
            width:228,
            height:114,
            marginLeft:20,
            borderRadius:10
        },
        bookbuttoncontainer:{
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        },
        bookbutton:{
            width:330,
            height:44,
            justifyContent:"center",
            alignItems:"center",
            display:"flex",
            marginTop:20,
            backgroundColor:"#017906EB",
            borderRadius:8
        },
        booktext:{
            color:"white",
            fontWeight:"800"
        }
        
    }
)

export default bookStyle