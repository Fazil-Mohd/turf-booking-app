import drawerStyle from "../stylesheet/drawerStyle";
import { View,Text,Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

//just add whatever is necessary here


const NavigationView =({drawerRef})=>{ 
  const navigation = useNavigation();

  function navigateHandler(id){
    //based on which element clicked
    navigation.navigate(id); // Navigate to the specified screen

  }

  return(
    <View style={drawerStyle.drawer}>
        <View style={drawerStyle.usercontainer}>
            <Image style={drawerStyle.image}  source={require("../assets/account.png")}></Image>
            <Text style={drawerStyle.usertext}>User 123</Text>
            <Text style={drawerStyle.phonetext}>+917907145522</Text>

        </View>

        <View style={drawerStyle.optionscontainer}>
            <TouchableOpacity id="123" style={drawerStyle.optionsubcontainer} onPress={()=>navigateHandler('Profile')} >
              <Image source={require("../assets/usericon.png")}></Image>
              <Text style={drawerStyle.optionstext}>Edit Profile</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={drawerStyle.optionsubcontainer} onPress={()=>navigateHandler('Profile')} >
              <Image source={require("../assets/favorite.png")}></Image>
              <Text style={drawerStyle.optionstext}>Favorite</Text>
            </TouchableOpacity>

            <TouchableOpacity style={drawerStyle.optionsubcontainer} onPress={()=>navigateHandler('Profile')} >
              <Image source={require("../assets/language.png")}></Image>
              <Text style={drawerStyle.optionstext}>Language</Text>
            </TouchableOpacity>

            <TouchableOpacity style={drawerStyle.optionsubcontainer} onPress={()=>navigateHandler('Profile')} >
              <Image source={require("../assets/history.png")}></Image>
              <Text style={drawerStyle.optionstext}>History</Text>
            </TouchableOpacity>

            <TouchableOpacity style={drawerStyle.optionsubcontainer} onPress={()=>navigateHandler('Profile')} >
              <Image source={require("../assets/privacy.png")}></Image>
              <Text style={drawerStyle.optionstext}>Privacy</Text>
            </TouchableOpacity>

            <TouchableOpacity style={drawerStyle.optionsubcontainer} onPress={()=>navigateHandler('Profile')} >
              <Image source={require("../assets/help.png")}></Image>
              <Text style={drawerStyle.optionstext}>Help & Support</Text>
            </TouchableOpacity>

            <TouchableOpacity style={drawerStyle.optionsubcontainer} onPress={()=>navigateHandler('Login')} >
              <Image source={require("../assets/logout.png")}></Image>
              <Text style={drawerStyle.optionstext}>Logout</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
};


export default NavigationView