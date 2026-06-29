import { StyleSheet,Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const mapStyle=StyleSheet.create(
    {
        container: {
            ...StyleSheet.absoluteFillObject,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          },
          map: {
            ...StyleSheet.absoluteFillObject,
          },
          topbarcontainer:{
            position:"absolute",
            width:windowWidth,
            top:0,
            display:"flex",
            justifyContent:"center",
            alignItems:'center',
            marginTop:30,
            flexDirection:"row"

          },
          backbuttoncontainer:{
            backgroundColor:"#017906",
            height:33,
            width:33,
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            borderRadius:1000
          },
          textinput:{
            height:41,
            width:303,
            backgroundColor:"#FDFDFD",
            borderRadius:8,marginLeft:5
          }
    }
)

export default mapStyle