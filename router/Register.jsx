import {View , Text ,ScrollView, Switch ,StyleSheet, Image ,SafeAreaView , TextInput, TouchableOpacity} from 'react-native'
import Logo from '../assets/icon.png'
import React from "react";
import SelectList from 'react-native-dropdown-select-list'

export default function Student_Login({navigation}) {
  const [email, setEmail] = React.useState(null);
  const [name, setName] = React.useState(null);
  const [id, setId] = React.useState(null);
  const [dept, setDept] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [staff, setStaff] = React.useState(false);
  const data = [
    {value:'Jammu & Kashmir'},
    {value:'Jammu & Kashmir'},
    {value:'Jammu & Kashmir'},
    {value:'Jammu & Kashmir'},
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
            placeholder="Username"
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
            style={{marginBottom:15,width:300,height:50,borderWidth:1,borderRadius:30,borderColor:'#042744',backgroundColor:'#eee',fontSize:22,textAlign:'left',paddingLeft:15,paddingRight:15}}
            placeholder="Password"
          />
          <SelectList 
            setSelected={setDept} 
            data={data}
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
            <TouchableOpacity>
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