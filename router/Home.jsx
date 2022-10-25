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
        const jsonValue = await AsyncStorage.getItem('student')
        let list = JSON.parse(jsonValue)
        fetch('http://ec2-65-2-181-127.ap-south-1.compute.amazonaws.com/api/books?dept='+list[0].dept)
          .then((response) => response.json())
          .then((data) => {setData(data)})
        .catch((error) => {
          alert(JSON.stringify(error));
          console.error(error);
        });
        const student = await AsyncStorage.getItem('student')
        const student_list = JSON.parse(student)
        setName(student_list[0].student_name)
        setId(student_list[0].student_id)
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
              const jsonValue = await AsyncStorage.getItem('student')
              let list = JSON.parse(jsonValue)
              fetch('http://ec2-65-2-181-127.ap-south-1.compute.amazonaws.com/api/books?dept='+list[0].dept+'&book_name='+text)
                .then((response) => response.json())
                .then((data) => {setData(data)})
              .catch((error) => {
                alert(JSON.stringify(error));
                console.error(error);
              });
            }}

            onClearPress={async ()=>{
              const jsonValue = await AsyncStorage.getItem('student')
              let list = JSON.parse(jsonValue)
              fetch('http://ec2-65-2-181-127.ap-south-1.compute.amazonaws.com/api/books?dept='+list[0].dept)
                .then((response) => response.json())
                .then((data) => {setData(data)})
              .catch((error) => {
                alert(JSON.stringify(error));
                console.error(error);
              });
            }}
          />
          {(!data[0])?<Text  style={{paddingTop:50,textAlign:'center',fontSize:22,fontWeight:'bold',color:'#F5DBCC'}}>Nothing Found !</Text>:""}

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
                      fetch('http://ec2-65-2-181-127.ap-south-1.compute.amazonaws.com/api/request', {
                        method: 'POST',
                        body: JSON.stringify({
                          student_id : person_id,
                          student_name: person_name,
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
                          navigation.navigate("Book")
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