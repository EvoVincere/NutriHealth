import React, {Component} from "react";
import { Text,View,StyleSheet } from "react-native";
import { TouchableRipple,Switch } from "react-native-paper";
import Icon from 'react-native-vector-icons/Ionicons';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import { ReactNativeFirebase } from "@react-native-firebase/app";
import { AuthContext } from "./Context";
import SettingsComponent from "./SettingComponent";

const Setting =({navigation}) =>{
    return(
        <View style={styles.menuWrapper,{marginLeft:37}}>
            <TouchableRipple onPress={() => navigation.navigate('EditProfileScreen')}>
                <View style={styles.menuItem}>
                    <Icon name="person-outline" color="#FF6347" size={25} />
                    <Text style={{color:'#000',marginLeft:10}}>Edit Profile</Text>
                    <Icon name="ios-chevron-forward" color="#909090" size={25} style={{marginLeft:130}} />
                </View>
            </TouchableRipple>
            <TouchableRipple onPress={() => {}}>
                <View style={styles.menuItem}>
                    <Material name="onepassword" color="#FF6347" size={25} />
                    <Text style={{color:'#000',marginLeft:10}}>Ganti Password</Text>
                    <Icon name="ios-chevron-forward" color="#909090" size={25} style={{marginLeft:100}} />
                </View>
            </TouchableRipple>
        </View>
    )
};
export default Setting;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    userInfoSection: {
      paddingHorizontal: 30,
      marginBottom: 25,
    },
    title: {
      fontSize: 25,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 15,
      lineHeight: 15,
      fontWeight: '500',
    },
    row: {
      flexDirection: 'row',
      marginBottom: 10,
    },
    infoBoxWrapper: {
      borderBottomColor: '#dddddd',
      borderBottomWidth: 1,
      borderTopColor: '#dddddd',
      borderTopWidth: 1,
      flexDirection: 'row',
      height: 100,
    },
    infoBox: {
      width: '50%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    menuWrapper: {
      marginTop: 10,
    },
    menuItem: {
      flexDirection: 'row',
      paddingVertical: 15,
      paddingHorizontal: 30,
    },
    menuItemText: {
      color: '#777777',
      marginLeft: 20,
      fontWeight: '600',
      fontSize: 16,
      lineHeight: 26,
    },
  });