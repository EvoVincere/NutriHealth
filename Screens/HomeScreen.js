import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    Text,
    View,
    ScrollView,
    Button,
} from 'react-native';


const HomeScreen = ({route,navigation}) => {
   return(

    <View style={{flex:1, alignItems: 'center', justifyContent: 'flex-start',paddingTop:50,backgroundColor:'#FFF'}}>
        <View>
            <Text style={{color: '#3725A4',fontSize:25}}>Hello ,</Text>
        </View>
        <View>
            <Text style={{color: '#7B7B7B',fontSize:18}}>Temukan Makanan Sehat Mu.</Text>
        </View>
    </View>
   ); 
}

export default HomeScreen;