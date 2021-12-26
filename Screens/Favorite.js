import React from "react";
import {
    Text,
    View,
    ScrollView,
    Button,
    TouchableOpacity,
    Image
} from 'react-native';

import fotoo from './../Image/food.png';
const Favorite = () => {
    return(
 
     <View style={{flex:1}}>
         <View>
            <Text style={{color: 'black',fontSize:22,fontWeight:'bold',marginTop:27,marginLeft:67}}>Favorit</Text>
         </View>
        <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={{flexDirection:'row',marginLeft:49,marginTop:31,backgroundColor:'#2F80ED',borderTopLeftRadius:16,borderBottomLeftRadius:16,width:156,height:48}} > 
                <Text style={{color:'#FFF',alignSelf:'center',marginLeft:50}}>Makanan</Text>
            </TouchableOpacity>
             <TouchableOpacity style={{flexDirection:'row',marginTop:31,backgroundColor:'#ECFAFF',borderTopRightRadius:16,borderBottomRightRadius:16,width:156,height:48}} > 
                <Text style={{color:'#2F80ED',alignSelf:'center',marginLeft:50}}>Resep</Text>
            </TouchableOpacity>    
        </View>
        <View style={{flexDirection:'row',alignItems:'center',alignContent:'center',alignSelf:'center'}}>
            <TouchableOpacity style={{flexDirection:'row',marginVertical:23,marginLeft:16,backgroundColor:'#ECFAFF',width:96,height:96,alignItems:'center'}}>
                <Image source={fotoo} style={{marginLeft:14,width:64,height:64}}/>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row',marginVertical:23,marginLeft:16,backgroundColor:'#ECFAFF',width:96,height:96,alignItems:'center'}}>
                <Image source={fotoo} style={{marginLeft:14,width:64,height:64}}/>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row',marginVertical:23,marginLeft:16,backgroundColor:'#ECFAFF',width:96,height:96,alignItems:'center'}}>
                <Image source={fotoo} style={{marginLeft:14,width:64,height:64}}/>
            </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row',alignItems:'center',alignContent:'center',alignSelf:'center'}}>
            <TouchableOpacity style={{flexDirection:'row',marginVertical:23,marginLeft:16,backgroundColor:'#ECFAFF',width:96,height:96,alignItems:'center'}}>
                <Image source={fotoo} style={{marginLeft:14,width:64,height:64}}/>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row',marginVertical:23,marginLeft:16,backgroundColor:'#ECFAFF',width:96,height:96,alignItems:'center'}}>
                <Image source={fotoo} style={{marginLeft:14,width:64,height:64}}/>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row',marginVertical:23,marginLeft:16,backgroundColor:'#ECFAFF',width:96,height:96,alignItems:'center'}}>
                <Image source={fotoo} style={{marginLeft:14,width:64,height:64}}/>
            </TouchableOpacity>
        </View>
     </View>
    ); 
 } 

 export default Favorite;