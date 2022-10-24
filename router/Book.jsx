import {View ,ScrollView, Text , TouchableOpacity , Image} from 'react-native'
import home from "../assets/nav/home.png"
import collection from "../assets/nav/collection-color.png"
import profile from "../assets/nav/profile.png"

export default function Book({navigation}) {
    return (
      <View style={{flex: 1,alignItems:'center'}}>
        <ScrollView style={{marginTop:30,width:'100%'}}>
          <Text style={{paddingTop:20,paddingLeft:15,fontSize:22,fontWeight:'bold',color:'#F67327'}}>Waiting for Schedule :</Text>
          <TouchableOpacity onPress={()=> alert("Bookname")} style={{flex:1,padding:10,justifyContent:'space-evenly',marginLeft:10,marginRight:10,width:"auto",height:200,borderWidth:2,marginTop:10,borderRadius:20,borderColor:'#F5DBCC',backgroundColor:'#fff'}}>
            <Text style={{color:'#aaa',fontSize:20}}>Book    :<Text style={{color:'#042744'}}>Cloud Computing</Text></Text>
            <Text style={{color:'#aaa',fontSize:20}}>Author :<Text style={{color:'#042744'}}>Dr.M.Shanthi</Text></Text>
            <Text style={{color:'#aaa',fontSize:20}}>Edition :<Text style={{color:'#042744'}}>vol2</Text></Text>
            <Text style={{color:'#aaa',fontSize:20}}>Dept    :<Text style={{color:'#042744'}}>Computer Science</Text></Text>
          </TouchableOpacity>
          
          <Text style={{paddingTop:20,paddingLeft:15,fontSize:22,fontWeight:'bold',color:'#F67327'}}>Books you have : </Text>
          <TouchableOpacity onPress={()=> alert("Bookname")} style={{flex:1,padding:10,justifyContent:'space-evenly',marginLeft:10,marginRight:10,width:"auto",height:200,borderWidth:2,marginTop:10,borderRadius:20,borderColor:'#F5DBCC',backgroundColor:'#fff'}}>
            <Text style={{color:'#aaa',fontSize:20}}>Book    :<Text style={{color:'#042744'}}>Cloud Computing</Text></Text>
            <Text style={{color:'#aaa',fontSize:20}}>Author :<Text style={{color:'#042744'}}>Dr.M.Shanthi</Text></Text>
            <Text style={{color:'#aaa',fontSize:20}}>Edition :<Text style={{color:'#042744'}}>vol2</Text></Text>
            <Text style={{color:'#aaa',fontSize:20}}>Dept    :<Text style={{color:'#042744'}}>Computer Science</Text></Text>
          </TouchableOpacity>

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