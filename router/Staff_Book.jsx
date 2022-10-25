import {View ,ScrollView, Text , TouchableOpacity , Image} from 'react-native'
import home from "../assets/nav/home.png"
import collection from "../assets/nav/collection-color.png"
import profile from "../assets/nav/profile.png"
import { useState,useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';


export default function Staff_Book({navigation}) {
  const [data,setData] = useState([]);
  const [have,setHave] = useState([]);
  const [old,setOld] = useState([]);

  useEffect(() => {
    async function mine(){
      const jsonValue = await AsyncStorage.getItem('staff')
      let list = JSON.parse(jsonValue)
      fetch('http://ec2-65-2-181-127.ap-south-1.compute.amazonaws.com/api/staff/lib?staff_id='+list[0].staff_id)
        .then((response) => response.json())
        .then((i) => {
          setData([])
          setHave([])
          setOld([])
          i.map((j)=>{
            if(j.data=="Waiting List"){
              setData(arr => [...arr , j])
            }else if(j.data=="You can pick"){
              setHave(oldArray => [...oldArray, j])
            }else{
              setOld(oldArray => [...oldArray, j])
            }
          })
        })
        .catch((error) => {
          alert(JSON.stringify(error));
          console.error(error);
        });
      }
      mine();
      
  },[]);
    return (
      <View style={{flex: 1,alignItems:'center'}}>
        <ScrollView style={{marginTop:30,width:'100%'}}>
          {(!have[0] && !data[0] && !old[0])?<Text  style={{paddingTop:50,textAlign:'center',fontSize:22,fontWeight:'bold',color:'#F5DBCC'}}>Nothing Found !</Text>:""}

          {(data[0])?<Text style={{paddingTop:20,paddingLeft:15,fontSize:22,fontWeight:'bold',color:'#'}}>Waiting List:</Text>:""}
          {data.map((i)=>
            <TouchableOpacity key={i._id} style={{flex:1,padding:10,justifyContent:'space-evenly',marginLeft:10,marginRight:10,width:"auto",height:'auto',borderWidth:2,marginTop:10,borderRadius:20,borderColor:'#F5DBCC',backgroundColor:'#fff'}}>
              <Text style={{color:'#aaa',fontSize:20}}>Book    :<Text style={{color:'#042744'}}>{i.book_name}</Text></Text>
            </TouchableOpacity>
          )}
          
          {(have[0])?<Text  style={{paddingTop:20,paddingLeft:15,fontSize:22,fontWeight:'bold',color:'#F67327'}}>Scheduled Books : </Text>:""}
          {have.map((i)=>
            <TouchableOpacity key={i._id} style={{flex:1,padding:10,justifyContent:'space-evenly',marginLeft:10,marginRight:10,width:"auto",height:180,borderWidth:2,marginTop:10,borderRadius:20,borderColor:'#F5DBCC',backgroundColor:'#fff'}}>
              <Text style={{color:'#aaa',fontSize:20}}>Book       :{'\n'}<Text style={{color:'#042744'}}>{'\t\t'}{i.book_name}</Text></Text>
              <Text style={{color:'#aaa',fontSize:20}}>Schedule :{'\n'}<Text style={{color:'#042744'}}>{'\t\t'}{moment(new Date(i.gettime).toISOString().substr(0, 19)).format('MMMM Do YYYY, h:mm a')}</Text></Text>
              <Text style={{color:'#aaa',fontSize:20}}>Message :{'\n'}<Text style={{color:'#042744'}}>{'\t\t'}{i.data}</Text></Text>
            </TouchableOpacity>
          )}

          {(old[0])?<Text style={{paddingTop:20,paddingLeft:15,fontSize:22,fontWeight:'bold',color:'#F67327'}}>Books you have : </Text>:""}
          {old.map((i)=>
            <TouchableOpacity  key={i._id} style={{flex:1,padding:10,justifyContent:'space-evenly',marginLeft:10,marginRight:10,width:"auto",height:200,borderWidth:2,marginTop:10,borderRadius:20,borderColor:'#F5DBCC',backgroundColor:'#fff'}}>
              <Text style={{color:'#aaa',fontSize:20}}>Book       :{'\n'}<Text style={{color:'#042744'}}>{'\t\t'}{i.book_name}</Text></Text>
              <Text style={{color:'#aaa',fontSize:20}}>Return Date :{'\n'}<Text style={{color:'#042744'}}>{'\t\t'}{moment(new Date(i.gettime).toISOString().substr(0, 19)).add(30, 'days').format('MMMM Do YYYY')}</Text></Text>
              <Text style={{color:'#aaa',fontSize:20}}>Message :{'\n'}<Text style={{color:'#042744'}}>{'\t\t'}{i.data}</Text></Text>
            </TouchableOpacity>
          )}

          <View style={{marginBottom:80}}></View>
        </ScrollView>
        <View style={{position: 'absolute', left: 0, right: 0, bottom: 0,height:60,backgroundColor:"#F5DBCC",flex:1,flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
          
          <TouchableOpacity onPress={()=> {navigation.navigate('Staff_Home')}}>
            <Image
              style={{width:30,height:30}}
              source={home}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> {navigation.navigate('Staff_Book')}}>
            <Image
              style={{width:30,height:30}}
              source={collection}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> {navigation.navigate('Staff_Profile')}}>
            <Image
              style={{width:30,height:30}}
              source={profile}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }