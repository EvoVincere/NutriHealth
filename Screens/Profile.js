import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    Text,
    View,
    SafeAreaView,
    Button,
    StyleSheet,
} from 'react-native';
import {Avatar,Title,Caption,TouchableRipple,} from 'react-native-paper';
import { AuthContext } from "./Context";
import Setting from "./SettingScreen";
import Icon from 'react-native-vector-icons/Ionicons';
import Material from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EditProfileScreen from "./EditProfileScreen";
import HomeScreen from "./HomeScreen";




const Profile = ({navigation}) => {
    const {Logout} = React.useContext(AuthContext);
    return(
 
     <SafeAreaView style={styles.container}>
         <View style={styles.userInfoSection}>
             <View style={{marginTop:10,alignItems:'center'}}>
                 <Text style={{justifyContent:'center',color:'#000',fontSize:22,fontWeight:'bold',marginTop:33}}>Profil</Text>
            <Avatar.Image 
                source={{
                    uri: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/b3053232163929.567197ac6e6f5.png'
                }}
                size={160}
                style={{marginTop:22}}
               
            />
            <View style={{marginTop:27}}>
                <Title style={[styles.title]}>Daffa Ahmadhan K</Title>
                <Caption style={[styles.caption]}>@Daffajr</Caption>
            </View>
             </View>
            <View style={{marginLeft:42,marginTop:24}}>
                <Text style={{color:'#000',fontWeight:'bold'}}>Tentang Saya: </Text>
            </View>
         <View style={styles.userInfoSection,{marginTop:25,marginLeft:40}}>
                <View style={styles.row}>
                    <Material name="home-work" color="#000" size={25}/>
                    <Text style={{color:'#000',marginLeft:20}}>Alamat</Text>
                </View>
                <View style={styles.row}>
                    <Material name="call" color="#000" size={25}/>
                    <Text style={{color:'#000',marginLeft:20}}>Nomor Handphone</Text>
                </View>
                <View style={styles.row}>
                    <Material name="email" color="#000" size={25}/>
                    <Text style={{color:'#000',marginLeft:20}}>Email</Text>
                </View>
         </View>


         </View>
         <View style={styles.menuWrapper,{marginLeft:37}}>
                <TouchableRipple onPress={() => navigation.navigate('EditProfileScreen')}>
                    <View style={styles.menuItem}>
                        <Icon name="person-outline" color="#FF6347" size={25} />
                        <Text style={{color:'#000',marginLeft:10}}>Edit Profile</Text>
                        <Icon name="ios-chevron-forward" color="#909090" size={25} style={{marginLeft:124}} />
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => navigation.navigate('Setting')}>
                    <View style={styles.menuItem}>
                        <Icon name="settings-outline" color="#FF6347" size={25} />
                        <Text style={{color:'#000',marginLeft:10}}>Pengaturan</Text>
                        <Icon name="ios-chevron-forward" color="#909090" size={25} style={{marginLeft:118}} />
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={() =>Logout()}>
                    <View style={styles.menuItem}>
                        <Material name="logout" color="#FF6347" size={25} />
                        <Text style={{color:'#000',marginLeft:10}}>Keluar</Text>
                        <Icon name="ios-chevron-forward" color="#909090" size={25} style={{marginLeft:151}} />
                    </View>
                </TouchableRipple>
                
         </View>
         
     </SafeAreaView>
    ); 
 }  

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
 export default Profile;