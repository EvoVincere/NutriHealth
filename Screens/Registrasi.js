import React, { useState } from "react";
import googleLogo from '../Image/google.png';
import facebookLogo from '../Image/facebook.png';
import { GoogleSignin,GoogleSigninButton,statusCodes } from "@react-native-community/google-signin";
import {
    Text,
    View,
    Image,
    Button,
    TextInput,
    TouchableOpacity,
    SafeAreaView
} from 'react-native';
import { AuthContext } from "./Context";
const Registrasi = ({navigation}) => {
    const [name,setName] = React.useState("");
    const [email,setEmail] = React.useState("");
    const [password,setPassword,] = React.useState("");
    const [confirmPassword,setConfirmPassword,] = React.useState("");
    const {Registrasi}=React.useContext(AuthContext);
    
    return(
 
     <SafeAreaView style={{flex:1,justifyContent:'flex-end',backgroundColor:'#3A86FF'}}>
       <View>
         <Text style={{color: 'black',fontSize:36,fontWeight:'bold',marginLeft:21}}>Daftar</Text>
        </View>  
        <View style={{marginLeft:21, marginTop:39}}>
            <Text style={{color:'black',fontSize:14,marginBottom:5}}>Full Name</Text>
            <TextInput placeholder="cth: Ujang Spakbor" placeholderTextColor="grey" value={name} onChangeText={setName} style={{shadowColor:"#3A86FF",shadowRadius:10, borderRadius:10, height:48, fontSize: 13, paddingLeft:20, paddingRight:10, backgroundColor: 'white', marginRight: 58, color: 'black'}}/>
        </View>
        <View style={{marginLeft:21, marginTop:17}}>
            <Text style={{color:'black',fontSize:14,marginBottom:5}}>Email</Text>
            <TextInput placeholder="cth: balbal12@gmail.com" placeholderTextColor="grey"  value={email} onChangeText={setEmail} style={{shadowColor:"#3A86FF",shadowRadius:10, borderRadius:10, height:48, fontSize: 13, paddingLeft:20, paddingRight:10, backgroundColor: 'white', marginRight: 58, color: 'black'}}/>
        </View>
        <View style={{marginLeft:21, marginTop:17}}>
            <Text style={{color:'black',fontSize:14,marginBottom:5}}>Password</Text>
            <TextInput placeholder="Password" placeholderTextColor="grey" value={password} onChangeText={setPassword} secureTextEntry  style={{shadowColor:"#3A86FF",shadowRadius:10, borderRadius:10, height:48, fontSize: 13, paddingLeft:20, paddingRight:10, backgroundColor: 'white', marginRight: 58, color: 'black'}}/>
        </View>
        <View style={{marginLeft:21, marginTop:17}}>
            <Text style={{color:'black',fontSize:14,marginBottom:5}}>Confirm Password</Text>
            <TextInput placeholder="Confirm Password" placeholderTextColor="grey" value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry style={{shadowColor:"#3A86FF",shadowRadius:10, borderRadius:10, height:48, fontSize: 13, paddingLeft:20, paddingRight:10, backgroundColor: 'white', marginRight: 58, color: 'black'}}/>
        </View>
        
        <View style={{marginLeft:25,flexDirection:'row',marginTop:42}}>
            <TouchableOpacity onPress={() => on}>
                <Image source={googleLogo} style={{width:45, height:45,backgroundColor:'#FFF',borderRadius:5}}/>
            </TouchableOpacity>
            <TouchableOpacity> 
                <Image source={facebookLogo} style={{width:45,height:45,backgroundColor:'#FFF',borderRadius:5,marginLeft:17}}/>
            </TouchableOpacity>
        </View>
        <View style={{alignItems:'flex-end', justifyContent: 'flex-end',marginRight:59,marginTop:21,marginBottom:60}}>
            <TouchableOpacity 
            onPress={()=> Registrasi({email,password,name})} style={{backgroundColor:'#4F3E65',width:89,height:40,justifyContent:'center',alignItems:'center',borderRadius:7}}>
                <Text style={{fontSize:14,fontWeight:'bold',color:'#FFF'}}>Daftar</Text>
            </TouchableOpacity>
        </View>
     </SafeAreaView>
    ); 
 }  

 export default Registrasi;