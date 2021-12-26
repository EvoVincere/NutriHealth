import React from "react";
import googleLogo from '../Image/google.png';
import facebookLogo from '../Image/facebook.png';
import {
    Text,
    View,
    Image,
    Button,
    TextInput,
    TouchableOpacity,
    SafeAreaView
} from 'react-native';

const OTPscreen = ({navigation}) => {
    return(
 
     <SafeAreaView style={{flex:1,justifyContent:'center',backgroundColor:'#3A86FF'}}>
       <View>
         <Text>OTP</Text>
        </View>

        <View style={{alignItems:'flex-end', justifyContent: 'flex-end',marginRight:59,marginTop:21,marginBottom:60}}>
            <TouchableOpacity 
            onPress={()=> navigation.push('PasswordBaru')} style={{backgroundColor:'#4F3E65',width:89,height:40,justifyContent:'center',alignItems:'center',borderRadius:7}}>
                <Text style={{fontSize:14,fontWeight:'bold',color:'#FFF'}}>Kirim</Text>
            </TouchableOpacity>
        </View>
        
     </SafeAreaView>
    ); 
 }  

 export default OTPscreen;