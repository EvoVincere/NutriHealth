import React, {useEffect, useState} from "react";
import { View,Text,TouchableOpacity,ImageBackground,StyleSheet,TextInput } from "react-native";


import  Icon  from "react-native-vector-icons/MaterialCommunityIcons";
import  FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { useTheme } from "react-native-paper";
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from "react-native-reanimated";
import ImagePicker from 'react-native-image-crop-picker';
import firestore from '@react-native-firebase/firestore';
import { ReactNativeFirebase } from "@react-native-firebase/app";





const EditProfile = () => {

  const [image,setImage]= useState('https://mir-s3-cdn-cf.behance.net/project_modules/disp/b3053232163929.567197ac6e6f5.png');
    const {colors} = useTheme();
/*    const usersCollection = firestore().collection('Users');   
    useEffect(()=>{
      const user = await firestore().collection('Users').doc('ABC').get();
    },[])
    const [user,setUser] = useState();
    const storeData = () => {
      firestore()
        .collection('Users')
        .doc('ABC')
        .set({
        name: 'Ada Lovelace',
        age: 30,
  })
  .then(() => {
    console.log('User added!');
  });
    }

    const UpdateData = () => {
      firestore()
      .collection('Users')
      .doc('ABC')
      .update({
      'info.address.zipcode': 94040,
    })
      .then(() => {
        console.log('User updated!');
  });
    }
*/
    const takePhotoFromCamera = () => {
      ImagePicker.openCamera({
        compressImageMaxWidth:300,
        compressImageMaxHeight:300,
        width: 300,
        height: 300,
        cropping: true,
        compressImageQuality: 0.7,
      }).then(image => {
        console.log(image);
        setImage(image.path);
        this.bs.current.snapTo(1);
      });
    }

    const choosePhotoFromLibrary = () => {
      ImagePicker.openPicker({
        width: 300,
        height: 300,
        cropping: true,
        compressImageQuality: 0.7,
      }).then(image => {
        console.log(image);
        setImage(image.path);
        this.bs.current.snapTo(1);
      });
    }

    renderInner = () => (
      <View style={styles.panel}>
        <View style={{alignItems:'center'}}>
          <Text style={styles.panelTitle}>Upload Photo</Text>
          <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
        </View>
        <TouchableOpacity style={styles.panelButton} onPress={takePhotoFromCamera}>
          <Text style={styles.panelButtonTitle}>Take Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.panelButton} onPress={choosePhotoFromLibrary}>
          <Text style={styles.panelButtonTitle}>Choose From Library</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.panelButton} onPress={() => this.bs.current.snapTo(1)}>
          <Text style={styles.panelButtonTitle}>Cancel</Text>
        </TouchableOpacity>
      </View>
    );

    renderHeader = () => (
      <View style={styles.header}>
        <View style={styles.panelHeader}>
          <View style={styles.panelHandle}/>
        </View>
      </View>
    )


    bs = React.createRef(); //reference hook
    fall= new Animated.Value(1); // buat animasi

    return(
        <View style={styles.container}>
          <BottomSheet 
            ref={this.bs}
            snapPoints={[330,0]}
            initialSnap={1}
            callbackNode={this.fall}
            enabledGestureInteraction={true}
            renderContent={this.renderInner}
            renderHeader={this.renderHeader}
            />
            <Animated.View style={{margin:20, opacity: Animated.add(0.1, Animated.multiply(this.fall,1.0)),}}>
                <View style={{alignItems:'center'}}>
                    <TouchableOpacity onPress={()=> this.bs.current.snapTo(0)}>
                        <View style={{
                            height : 100,
                            width: 100,
                            borderRadius: 15,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <ImageBackground source={{
                                uri: image,
                            }} style={{height:100, width:100}}
                            imageStyle={{borderRadius:15}}>
                                <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                                    <Icon name="camera" size={35} color='#fff'  style={{
                                        opacity: 0.7,
                                        alignItems:'center',
                                        justifyContent: 'center',
                                        borderWidth: 1,
                                        borderColor: '#fff',
                                        borderRadius: 10,
                                    }}/>
                                </View>
                            </ImageBackground>    
                        </View>
                    </TouchableOpacity>
                    <Text style={{marginTop: 10, fontSize: 18, fontWeight:'bold',color:'#000'}}>Daffa Ahmadhan K</Text>
                    <View style={styles.action}>
                        <FontAwesome name="user-o" size={20} color={colors.text} />
                        <TextInput 
                            placeholder="First Name" placeholderTextColor="#6666"
                            autoCorrect={false}
                            style={styles.textInput}
                        />
                    </View>
                    <View style={styles.action}>
                        <FontAwesome name="user-o" size={20} color={colors.text} />
                        <TextInput 
                            placeholder="Last Name" placeholderTextColor="#6666"
                            autoCorrect={false}
                            style={styles.textInput}
                        />
                    </View>
                    <View style={styles.action}>
                        <Icon name="home-edit-outline" size={20} color={colors.text} />
                        <TextInput 
                            placeholder="Alamat" placeholderTextColor="#6666"
                            autoCorrect={false}
                            style={styles.textInput}
                        />
                        
                    </View>
                    <View style={styles.action}>
                        <Feather name="phone" size={20} color={colors.text} />
                        <TextInput 
                            placeholder="Phone" placeholderTextColor="#6666"
                            keyboardType='phone-pad'
                            autoCorrect={false}
                            style={styles.textInput}
                        />
                        
                    </View>
                    <View style={styles.action}>
                        <Icon name="email-outline" size={20} color={colors.text} />
                        <TextInput 
                            placeholder="Email" placeholderTextColor="#6666"
                            keyboardType='email-address'
                            autoCorrect={false}
                            style={styles.textInput}
                        />
                        
                    </View>
                    <TouchableOpacity style={styles.commandButton} onPress={() => {storeData()}}>
                            <Text style={styles.panelButtonTitle}>Submit</Text>        
                    </TouchableOpacity>
                </View>
            </Animated.View>
        </View>
    );
}

export default EditProfile;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    commandButton: {
      padding: 15,
      borderRadius: 10,
      backgroundColor: '#FF6347',
      alignItems: 'center',
      marginTop: 10,
    },
    panel: {
      padding: 20,
      backgroundColor: '#FFFFFF',
      paddingTop: 20,
      // borderTopLeftRadius: 20,
      // borderTopRightRadius: 20,
      // shadowColor: '#000000',
      // shadowOffset: {width: 0, height: 0},
      // shadowRadius: 5,
      // shadowOpacity: 0.4,
    },
    header: {
      backgroundColor: '#FFFFFF',
      shadowColor: '#333333',
      shadowOffset: {width: -1, height: -3},
      shadowRadius: 2,
      shadowOpacity: 0.4,
      // elevation: 5,
      paddingTop: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    panelHeader: {
      alignItems: 'center',
    },
    panelHandle: {
      width: 40,
      height: 8,
      borderRadius: 4,
      backgroundColor: '#00000040',
      marginBottom: 10,
    },
    panelTitle: {
      fontSize: 27,
      height: 35,
    },
    panelSubtitle: {
      fontSize: 14,
      color: 'gray',
      height: 30,
      marginBottom: 10,
    },
    panelButton: {
      padding: 13,
      borderRadius: 10,
      backgroundColor: '#2F80ED',
      alignItems: 'center',
      marginVertical: 7,
    },
    panelButtonTitle: {
      fontSize: 17,
      fontWeight: 'bold',
      color: 'white',
    },
    action: {
      flexDirection: 'row',
      marginTop: 10,
      marginBottom: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#719ECE',
      paddingBottom: 5,
    },
    actionError: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#FF0000',
      paddingBottom: 5,
    },
    textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
    },
  });