import React from "react";
import { View,Text, TouchableOpacity,Image } from "react-native";
import fotoo from './../Image/food.png';
import burger from './../Image/burger.jpg';
import ayam from './../Image/ayambakar.jpg';
import cakue from './../Image/cakue.jpg';
import sopiga from './../Image/sop-iga-sapi.jpg';
import pancake from './../Image/pancake.jpg';
import plus from './../Image/plus.png';

const MakananScreen = () => {
    return (
        <View>
        <View style={{flexDirection:'row',alignItems:'center',alignContent:'center',alignSelf:'center'}}>
            <TouchableOpacity style={{flexDirection:'row',marginVertical:23,marginLeft:16,backgroundColor:'#ECFAFF',width:96,height:96,alignItems:'center'}}>
                <Image source={ayam} style={{marginLeft:14,width:64,height:64}}/>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row',marginVertical:23,marginLeft:16,backgroundColor:'#ECFAFF',width:96,height:96,alignItems:'center'}}>
                <Image source={burger} style={{marginLeft:14,width:64,height:64}}/>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row',marginVertical:23,marginLeft:16,backgroundColor:'#ECFAFF',width:96,height:96,alignItems:'center'}}>
                <Image source={cakue} style={{marginLeft:14,width:64,height:64}}/>
            </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row',alignItems:'center',alignContent:'center',alignSelf:'center'}}>
            <TouchableOpacity style={{flexDirection:'row',marginVertical:23,marginLeft:16,backgroundColor:'#ECFAFF',width:96,height:96,alignItems:'center'}}>
                <Image source={sopiga} style={{marginLeft:14,width:64,height:64}}/>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row',marginVertical:23,marginLeft:16,backgroundColor:'#ECFAFF',width:96,height:96,alignItems:'center'}}>
                <Image source={pancake} style={{marginLeft:14,width:64,height:64}}/>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row',marginVertical:23,marginLeft:16,backgroundColor:'#ECFAFF',width:96,height:96,alignItems:'center'}}>
                <Image source={plus} style={{marginLeft:14,width:64,height:64}}/>
            </TouchableOpacity>
        </View>
        </View>
    );
}

export default MakananScreen;