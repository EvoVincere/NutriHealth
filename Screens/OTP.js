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
    SafeAreaView,
    StyleSheet
} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
const OTPscreen = ({navigation}) => {
    return(
    <LinearGradient colors={['#3a86ff', '#db46c3', ]} style={styles.linearGradient}>
     <SafeAreaView style={{flex:1,justifyContent:'center',}}>
         <Text style={{fontSize:36,fontWeight:'bold',marginLeft:38}}>OTP</Text>
       <View style={{flexDirection:'row',marginTop: 37}}>
           <View style={{marginLeft:38,marginRight:7,}}>
                <TextInput style={{width:60,height:60,backgroundColor:'white',borderRadius:10}}/>
           </View>
            <View style={{marginHorizontal:7}}>
                <TextInput style={{width:60,height:60,backgroundColor:'white',borderRadius:10}}/>
            </View>
            <View style={{marginHorizontal:7}}>
                <TextInput style={{width:60,height:60,backgroundColor:'white',borderRadius:10}}/>
            </View>
            <View style={{marginHorizontal:7}}>
                <TextInput style={{width:60,height:60,backgroundColor:'white',borderRadius:10}}/>
            </View>
        </View>
        <Text style={{fontWeight:'300',color:'#FFF',alignSelf:'center',marginTop:46}}>Kirim ulang OTP</Text>
        <View style={{alignItems:'center', justifyContent: 'center',marginRight:20,marginTop:21,marginBottom:60}}>
            <TouchableOpacity 
            onPress={()=> navigation.push('PasswordBaru')} style={{backgroundColor:'#4F3E65',width:89,height:40,justifyContent:'center',alignItems:'center',borderRadius:7,marginTop:41}}>
                <Text style={{fontSize:14,fontWeight:'bold',color:'#FFF'}}>Kirim</Text>
            </TouchableOpacity>
        </View>
        
     </SafeAreaView>
     </LinearGradient>
    ); 
 }  

 export default OTPscreen;

 const styles = StyleSheet.create({
    linearGradient: {
      flex: 1,
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 5,
    },
  })