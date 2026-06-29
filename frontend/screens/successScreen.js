import { View,Text,Image, TouchableOpacity } from "react-native"
import successStyle from "../stylesheet/successStyle"
export default function SuccessScreen({navigation}){

    function emojiHandler(){

    }
    function continueHandler(){
        //register the feedback here
        navigation.navigate('Home')
    }
    function skipHandler(){
        navigation.navigate('Home')
    }

    return(
        <View style={successStyle.maincontainer} >
            <View style={successStyle.cardcontainer}>
                <Image style={successStyle.turfimage}  source={require("../assets/turf.png")}></Image>
                <Text style={successStyle.turftext}>Thank You For Booking!!.</Text>
                <Text style={successStyle.turfsubtext}>
                    Your payment has been successfully Done
                </Text>
                <View style={successStyle.tickcontainer}>
                    <View style={successStyle.ticksubcontainer}>
                        <View style={successStyle.ticksubsubcontainer}>
                            <Image source={require("../assets/tick.png")}></Image>
                        </View>
                    </View>
                </View>

            </View>
            <TouchableOpacity style={successStyle.recieptcontainer}>
                    <Image source={require("../assets/download.png")}></Image>
                    <Text style={successStyle.reciepttext} >Get Receipt</Text>
            </TouchableOpacity>

            <View style={[successStyle.cardcontainer,successStyle.additionalcontainer]}>
                <Text style={successStyle.exptext} >How was your experience?</Text>
                <View style={successStyle.emojicontainer}>
                    <TouchableOpacity style={successStyle.emojimaincontainer} onPress={emojiHandler}>
                        <View style={successStyle.emojisubcontainer}>
                            <Image source={require("../assets/blackheart.png")}></Image>     
                        </View>
                        <Text style={successStyle.emojitext}>Loved it</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={successStyle.emojimaincontainer} onPress={emojiHandler}>
                        <View style={successStyle.emojisubcontainer}>
                            <Image source={require("../assets/relaxing.png")}></Image>     
                        </View>
                        <Text style={successStyle.emojitext}>Relaxing</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={successStyle.emojimaincontainer} onPress={emojiHandler}>
                        <View style={successStyle.emojisubcontainer}>
                            <Image source={require("../assets/challenging.png")}></Image>     
                        </View>
                        <Text style={successStyle.emojitext}>Challenging</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={successStyle.emojimaincontainer} onPress={emojiHandler}>
                        <View style={successStyle.emojisubcontainer}>
                            <Image source={require("../assets/strong.png")}></Image>     
                        </View>
                        <Text style={successStyle.emojitext}>Strong</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={successStyle.emojimaincontainer} onPress={emojiHandler}>
                        <View style={successStyle.emojisubcontainer}>
                            <Image source={require("../assets/amazing.png")}></Image>     
                        </View>
                        <Text style={successStyle.emojitext}>Amazing</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={successStyle.emojimaincontainer} onPress={emojiHandler}>
                        <View style={successStyle.emojisubcontainer}>
                            <Image source={require("../assets/other.png")}></Image>     
                        </View>
                        <Text style={successStyle.emojitext}>Other</Text>
                    </TouchableOpacity>
                    




                </View>
            </View>

            <View style={successStyle.bottomcontainer}>
                <TouchableOpacity style={successStyle.continuebutton} onPress={continueHandler} >
                    <Text style={successStyle.bottomtext}>Continue</Text>
                </TouchableOpacity>
                <TouchableOpacity style={successStyle.skipbutton} onPress={skipHandler} >
                    <Text style={successStyle.bottomtext}>Skip</Text>
                </TouchableOpacity>
                
            </View>
        </View>
    )
}