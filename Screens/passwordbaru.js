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

const PasswordBaru = ({navigation}) => {
    return(
 
     <SafeAreaView style={{flex:1,justifyContent:'center',backgroundColor:'#3A86FF'}}>
       <View>
         <Text style={{color: 'black',fontSize:24,fontWeight:'bold',marginLeft:21}}>Masukkan Kata Sandi Baru</Text>
        </View>  

        <View style={{marginLeft:21, marginTop:39}}>
            <Text style={{color:'black',fontSize:14,marginBottom:5}}>Kata Sandi Baru</Text>
            <TextInput placeholder="Masukkan Kata Sandi Baru" placeholderTextColor="grey" style={{borderColor:'black', borderRadius:10, height:50, fontSize: 13, paddingLeft:20, paddingRight:10, backgroundColor: 'white', marginRight: 58, color: 'black'}}/>
        </View>
        <View style={{marginLeft:21, marginTop:24}}>
            <Text style={{color:'black',fontSize:14,marginBottom:5}}>Konfirmasi Kata Sandi Baru</Text>
            <TextInput placeholder="Konfirmasi Kata Sandi Baru" placeholderTextColor="grey" style={{shadowColor:'#3A86FF', borderRadius:10, height:50, fontSize: 13, paddingLeft:20, paddingRight:10, backgroundColor: 'white', marginRight: 58, color: 'black'}}/>
        </View>

        <View style={{alignItems:'center',marginTop:32}}>
            <TouchableOpacity onPress={()=> navigation.push('Login')} style={{backgroundColor:'#4F3E65',width:89,height:40,justifyContent:'center',alignItems:'center',borderRadius:7}}>
                <Text style={{color:'#FFF'}}>OK</Text>
            </TouchableOpacity>
        </View>
        
        
     </SafeAreaView>
    ); 
 }  

 export default PasswordBaru;