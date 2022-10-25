import {View ,ScrollView, Text , TouchableOpacity , Image ,Alert} from 'react-native'
import home from "../assets/nav/home-color.png"
import collection from "../assets/nav/collection.png"
import profile from "../assets/nav/profile.png"
import SearchBar from "react-native-dynamic-search-bar";
import { useState,useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Home({navigation}) {
  const [data,setData] = useState([]);
  const [person_name,setName] = useState("");
  const [person_id,setId] = useState("");
    useEffect(() => {
      async function mine(){
        fetch('http://ec2-65-2-181-127.ap-south-1.compute.amazonaws.com/api/staff/books')
          .then((response) => response.json())
          .then((data) => {setData(data)})
        .catch((error) => {
          alert(JSON.stringify(error));
          console.error(error);
        });
        const staff = await AsyncStorage.getItem('staff')
        const staff_list = JSON.parse(staff)
        setName(staff_list[0].staff_name)
        setId(staff_list[0].staff_id)
      }
      mine();
    },[]);

    return (
      <View style={{flex: 1,alignItems:'center'}}>
        <ScrollView style={{marginTop:30,width:'100%'}}>
          <SearchBar
            style={{marginTop:20}}
            placeholder="Search here"
            iconColor='#fff'
            onChangeText={async (text) => {
              fetch('http://ec2-65-2-181-127.ap-south-1.compute.amazonaws.com/api/staff/books?book_name='+text)
                .then((response) => response.json())
                .then((data) => {setData(data)})
              .catch((error) => {
                alert(JSON.stringify(error));
                console.error(error);
              });
            }}

            onClearPress={async ()=>{
              fetch('http://ec2-65-2-181-127.ap-south-1.compute.amazonaws.com/api/staff/books')
                .then((response) => response.json())
                .then((data) => {setData(data)})
              .catch((error) => {
                alert(JSON.stringify(error));
                console.error(error);
              });
            }}
          />
        {
          data.map((item)=>

            <TouchableOpacity key={item._id} onPress={()=>{
              Alert.alert(
                "Create Request",
                "Book Name : "+item.book_name+"\n"+"Author Name : "+item.author_name,
                [
                  {
                    text: "Cancel",
                    onPress: () => {cancelable: true}
                  },
                  {
                    text: "Request",
                    onPress: async () => {
                      fetch('http://ec2-65-2-181-127.ap-south-1.compute.amazonaws.com/api/staff/request', {
                        method: 'POST',
                        body: JSON.stringify({
                          staff_id : person_id,
                          staff_name: person_name,
                          book_id: item._id,
                          book_name : item.book_name,
                        }),
                        headers: {
                          "Content-Type": "application/json"
                        },
                      })
                      .then((response) => response.json())
                      .then((data) => {
                        if(data.code=="Requested"){
                          navigation.navigate("Staff_Book")
                        }else{
                          alert(data.code)
                        }
                      })
                      .catch((error) => {
                        console.error(error);
                      });
                    },
                  },
                ],
                {
                  cancelable: true,
                }
              )

              }} style={{flex:1,padding:10,justifyContent:'space-evenly',marginLeft:10,marginRight:10,width:"auto",height:'auto',minHeight:200,borderWidth:2,marginTop:15,borderRadius:10,borderColor:'#F5DBCC',backgroundColor:'#fff'}}>
              <Text style={{color:'#aaa',fontSize:20}}>Book    :{"\t"}<Text style={{color:'#042744'}}>{item.book_name}</Text></Text>
              <Text style={{color:'#aaa',fontSize:20}}>Author :{"\t"}<Text style={{color:'#042744'}}>{item.author_name}</Text></Text>
              <Text style={{color:'#aaa',fontSize:20}}>ISBN    :{"\t"}<Text style={{color:'#042744'}}>{item.ISBN}</Text></Text>
              <Text style={{color:'#aaa',fontSize:20}}>Edition :{"\t"}<Text style={{color:'#042744'}}>{item.version} / {item.year}</Text></Text>
              <Text style={{color:'#aaa',fontSize:20}}>Dept    :{"\t"}<Text style={{color:'#042744'}}>{item.dept}</Text></Text>
            </TouchableOpacity>

          )
        }


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