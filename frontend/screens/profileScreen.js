import { View,Text, TouchableOpacity,Image, TextInput } from "react-native";

//importing stylesheets here
import profileStyle from "../stylesheet/profileStyle";

export default function ProfileScreen({navigation}){
    
    function profileHandler(){

    }
    function updateHandler(){

    }
    function backHandler(){
        navigation.navigate('Home')
    }
    return(
        <View style={profileStyle.maincontainer} >
            <View style={profileStyle.topbarcontainer}>
                <TouchableOpacity style={profileStyle.backbutton} onPress={backHandler} >
                    <Image source={require("../assets/back.png")}></Image>
                </TouchableOpacity>
                <Text style={profileStyle.toptext}>Edit Profile</Text>
            </View>

            <Image style={profileStyle.image} source={require("../assets/accounthd.png")}></Image>

            <TouchableOpacity style={profileStyle.editcontainer} onPress={profileHandler} >
                <Image source={require("../assets/edit.png")}></Image>
            </TouchableOpacity>

            <Text style={profileStyle.text}>Name</Text>
            <TextInput placeholder="Enter Name" style={profileStyle.textinput} ></TextInput>

            <Text style={profileStyle.text}>Phone Number</Text>
            <TextInput placeholder="Enter Phone number" style={profileStyle.textinput} ></TextInput>

            <Text style={profileStyle.text}>Email</Text>
            <TextInput placeholder="Enter email" style={profileStyle.textinput} ></TextInput>

            <TouchableOpacity style={profileStyle.updatebutton} onPress={updateHandler} >
                <Text style={profileStyle.updatetext}>Update Profile</Text>
            </TouchableOpacity>

        </View>
    )
}