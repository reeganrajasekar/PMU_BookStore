import {View ,ScrollView, Text ,StyleSheet, TouchableOpacity , Image} from 'react-native'
import home from "../assets/nav/home.png"
import collection from "../assets/nav/collection.png"
import profile from "../assets/nav/profile-color.png"
import Logo from '../assets/icon.png'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState,useEffect } from 'react';



export default function Profile({navigation}) {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [dept,setDept] = useState("");
  const [id,setId] = useState("");
    useEffect(() => {
      async function mine(){
        const student = await AsyncStorage.getItem('student')
        const student_list = JSON.parse(student)
        setName(student_list[0].student_name)
        setDept(student_list[0].dept)
        setId(student_list[0].student_id)
        setEmail(student_list[0].student_email)
      }
      mine();
    },[]);
    return (
      <View style={{flex: 1}}>
        <ScrollView style={{marginTop:30}}>
          <View style={{flex:1,paddingTop:30,alignItems:'center',justifyContent:'center'}}>
            <Image
              style={{width:100,height:100}}
              source={Logo}
            />
            <Text style={{fontSize:26,fontWeight:'bold',paddingTop:20,paddingBottom:20,color:'#042744'}}>PMU BookStore</Text>
            <View style={{width:'100%',height:'auto',padding:20}}>
              <Text style={{color:'#aaa',fontSize:20}}>Name    :</Text>
              <Text style={{color:'#042744',fontSize:26}}>{"\t\t"}{name}{"\n"}</Text>
              <Text style={{color:'#aaa',fontSize:20}}>Register No :</Text>
              <Text style={{color:'#042744',fontSize:26}}>{"\t\t"}{id}{"\n"}</Text>
              <Text style={{color:'#aaa',fontSize:20}}>Email :</Text>
              <Text style={{color:'#042744',fontSize:26}}>{"\t\t"}{email}{"\n"}</Text>
              <Text style={{color:'#aaa',fontSize:20}}>Department    :</Text>
              <Text style={{color:'#042744',fontSize:26}}>{"\t\t"}{dept}</Text>
            </View>
            <View style = {styles.container}>
            <TouchableOpacity onPress={async ()=> {
              await AsyncStorage.removeItem('student')
              await AsyncStorage.removeItem('staff')
              await AsyncStorage.removeItem('login')
              navigation.navigate('Login')
              
              }}>
                <Text style = {styles.text}>
                  Logout
                </Text>
            </TouchableOpacity>
          </View>
          </View>
        </ScrollView>
        <View style={{position: 'absolute', left: 0, right: 0, bottom: 0,height:60,backgroundColor:"#F5DBCC",flex:1,flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
          
          <TouchableOpacity onPress={()=> {navigation.navigate('Home')}}>
            <Image
              style={{width:30,height:30}}
              source={home}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> {navigation.navigate('Book')}}>
            <Image
              style={{width:30,height:30}}
              source={collection}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> {navigation.navigate('Profile')}}>
            <Image
              style={{width:30,height:30}}
              source={profile}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create ({
    container: {
       alignItems: 'center',
       marginTop:10
    },
    text: {
       paddingLeft: '30%',
       paddingRight: '30%',
       fontSize:26,
       paddingTop:10,
       paddingBottom:10,
       color:'#fff',
       borderRadius:30,
       borderColor: 'black',
       backgroundColor: '#F67327'
    }
 })