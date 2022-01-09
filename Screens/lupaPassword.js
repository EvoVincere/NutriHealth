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
    StyleSheet,
} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
const LupaPassword = ({navigation}) => {
    return(
    <LinearGradient colors={['#3a86ff', '#db46c3', ]} style={styles.linearGradient}>
     <SafeAreaView style={{flex:1,justifyContent:'center',}}>
       <View>
         <Text style={{color: 'black',fontSize:24,fontWeight:'bold',marginLeft:21}}>Lupa Kata Sandi</Text>
        </View>  
        <View style={{marginLeft:21, marginTop:38}}>
            <Text style={{color:'black',fontSize:14,marginBottom:5}}>Masukkan Email</Text>
            <TextInput placeholder="cth: balbal12@gmail.com" placeholderTextColor="grey" style={{shadowColor:"#3A86FF",shadowRadius:10, borderRadius:10, height:48, fontSize: 13, paddingLeft:20, paddingRight:10, backgroundColor: 'white', marginRight: 58, color: 'black'}}/>
        </View>
        <View style={{alignItems:'center', justifyContent: 'center',marginRight:59,marginTop:51,marginBottom:60}}>
            <TouchableOpacity 
            onPress={()=> navigation.push('OTPscreen')} style={{backgroundColor:'#4F3E65',width:89,height:40,justifyContent:'center',alignItems:'center',borderRadius:7}}>
                <Text style={{fontSize:14,fontWeight:'bold',color:'#FFF'}}>Kirim</Text>
            </TouchableOpacity>
        </View>
        
     </SafeAreaView>
     </LinearGradient>
    ); 
 }  

 export default LupaPassword;

 const styles = StyleSheet.create({
    linearGradient: {
      flex: 1,
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 5,
    },
  })