import React from "react";
import { View,Text, TouchableOpacity,Image } from "react-native";
import fotoo from './../Image/food.png';

const MakananScreen = () => {
    return (
        <View>
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

export default MakananScreen;