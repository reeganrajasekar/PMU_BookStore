import {View , Text ,ScrollView, Switch ,StyleSheet, Image ,SafeAreaView , TextInput, TouchableOpacity} from 'react-native'
import Logo from '../assets/icon.png'
import React from "react";
import SelectList from 'react-native-dropdown-select-list'
const axios = require('axios').default;

export default function Student_Login({navigation}) {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [id, setId] = React.useState();
  const [dept, setDept] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [staff, setStaff] = React.useState(false);
  const data = [
    {value:'Civil Engineering'},
    {value:'Electrical Engineering'},
    {value:'Mechanical Engineering'},
    {value:'Computer Engineering'},
    {value:'Computer Science'},
    {value:'Information Technology'},
    {value:'Software Engineering'},
    {value:'Accounting'},
    {value:'Business Administration'},
    {value:'Finance'},
    {value:'Human Resource Management'},
    {value:'Management Information Systems'},
    {value:'Architecture (ARCH)'},
    {value:'Interior Design (IDES)'},
    {value:'Graphic Design (GDES)'},
    {value:'Master of Science in Education and Human Development'},
    {value:'College of LAW'},
  ];
    return (
      <SafeAreaView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
      <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#F5DBCC',paddingTop:50,paddingBottom:50}}>
        <Image
          style={{width:100,height:100}}
          source={Logo}
        />
        <Text style={{fontSize:26,fontWeight:'bold',paddingTop:20,paddingBottom:20,color:'#042744'}}>PMU BookStore</Text>
        <SafeAreaView>
          <TextInput
            onChangeText={setName}
            value={name}
            style={{marginBottom:15,width:300,height:50,borderWidth:1,borderRadius:30,borderColor:'#042744',backgroundColor:'#eee',fontSize:22,textAlign:'left',paddingLeft:15,paddingRight:15,}}
            placeholder="Name"
          />
          <TextInput
            onChangeText={setId}
            value={id}
            style={{marginBottom:15,width:300,height:50,borderWidth:1,borderRadius:30,borderColor:'#042744',backgroundColor:'#eee',fontSize:22,textAlign:'left',paddingLeft:15,paddingRight:15}}
            placeholder="Register No"
          />
          
          <TextInput
            onChangeText={setEmail}
            value={email}
            placeholder="Email"
            style={{marginBottom:15,width:300,height:50,borderWidth:1,borderRadius:30,borderColor:'#042744',backgroundColor:'#eee',fontSize:22,textAlign:'left',paddingLeft:15,paddingRight:15}}

          />
          <TextInput
            onChangeText={setPassword}
            value={password}
            secureTextEntry={true}
            style={{marginBottom:15,width:300,height:50,borderWidth:1,borderRadius:30,borderColor:'#042744',backgroundColor:'#eee',fontSize:22,textAlign:'left',paddingLeft:15,paddingRight:15}}
            placeholder="Password"
          />
          <SelectList 
            setSelected={setDept} 
            data={data}
            value={dept}
            boxStyles={{marginBottom:15,width:300,height:50,borderWidth:1,borderRadius:30,borderColor:'#042744',backgroundColor:'#eee',fontSize:22,textAlign:'left',paddingLeft:15,paddingRight:15,alignItems:'center'}}                                                                               
          /> 
          <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',paddingBottom:10}}>
            <Switch
                onValueChange = {()=>{(staff)?setStaff(false):setStaff(true)}}
                value = {staff}
                trackColor={{true: '#aaa',false:'#aaa'}}
                thumbColor={staff ? "#F67327" : "#f4f3f4"}
            />
            <Text style={{fontSize:16}}>Register as a Staff</Text>
          </View>
          <View style = {styles.container}>
            <TouchableOpacity onPress={()=>{
              if(email!="" && name!="" && id!="" && password!="" && dept!=""){
                let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
                if (reg.test(email) === false) {
                  alert("Email is Not Correct");
                }
                else {
                  if(staff){
                    fetch('http://ec2-65-2-181-127.ap-south-1.compute.amazonaws.com/api/staff/register', {
                      method: 'POST',
                      body: JSON.stringify({
                        staff_id:id,
                        staff_name:name,
                        staff_email:email,
                        staff_password:password,
                        dept:dept
                      }),
                      headers: {
                        "Content-Type": "application/json"
                      },
                    })
                      .then((response) => response.json())
                      .then((responseJson) => {
                        alert(responseJson.code);
                        navigation.navigate("Login")
                      })
                      .catch((error) => {
                        alert(JSON.stringify(error));
                        console.error(error);
                      });
                  }else{
                    fetch('http://ec2-65-2-181-127.ap-south-1.compute.amazonaws.com/api/register', {
                      method: 'POST',
                      body: JSON.stringify({
                        student_id:id,
                        student_name:name,
                        student_email:email,
                        student_password:password,
                        dept:dept
                      }),
                      headers: {
                        "Content-Type": "application/json"
                      },
                    })
                      .then((response) => response.json())
                      .then((responseJson) => {
                        alert(responseJson.code);
                        navigation.navigate("Login")
                      })
                      .catch((error) => {
                        alert(JSON.stringify(error));
                        console.error(error);
                      });
                  }
                }
              }else{
                alert("Enter all details!")
              }
            }}>
                <Text style = {styles.text}>
                  Register
                </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
        <Text 
          style = {{marginTop:20,fontSize:18,color:'#042744'}}
        >
          Do you have an Account? <Text onPress={()=>{navigation.navigate('Login')}} style={{color:"#F67327"}}>Click here</Text>
        </Text>
      </View>
      </ScrollView>
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create ({
    container: {
       alignItems: 'center',
    },
    text: {
       paddingLeft: 80,
       paddingRight: 80,
       fontSize:22,
       paddingTop:8,
       paddingBottom:8,
       color:'#fff',
       borderRadius:30,
       borderColor: 'black',
       backgroundColor: '#F67327'
    }
 })