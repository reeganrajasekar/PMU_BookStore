import {View ,ScrollView, Text , TouchableOpacity , Image} from 'react-native'
import home from "../assets/nav/home-color.png"
import collection from "../assets/nav/collection.png"
import profile from "../assets/nav/profile.png"
import SearchBar from "react-native-dynamic-search-bar";

export default function Home({navigation}) {
    return (
      <View style={{flex: 1,alignItems:'center'}}>
        <ScrollView style={{marginTop:30,width:'100%'}}>
          <SearchBar
            style={{marginTop:20}}
            placeholder="Search here"
            iconColor='#fff'
            onChangeText={(text) => {}}
          />
          <TouchableOpacity onPress={()=> alert("Bookname")} style={{flex:1,padding:10,justifyContent:'space-evenly',marginLeft:10,marginRight:10,width:"auto",height:'auto',minHeight:200,borderWidth:2,marginTop:20,borderRadius:20,borderColor:'#F5DBCC',backgroundColor:'#fff'}}>
            <Text style={{color:'#aaa',fontSize:20}}>Book    :<Text style={{color:'#042744'}}>Cloud Computing</Text></Text>
            <Text style={{color:'#aaa',fontSize:20}}>Author :<Text style={{color:'#042744'}}>Dr.M.Shanthi</Text></Text>
            <Text style={{color:'#aaa',fontSize:20}}>Edition :<Text style={{color:'#042744'}}>vol2</Text></Text>
            <Text style={{color:'#aaa',fontSize:20}}>Dept    :<Text style={{color:'#042744'}}>Computer Science</Text></Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=> alert("Bookname")} style={{flex:1,padding:10,justifyContent:'space-evenly',marginLeft:10,marginRight:10,width:"auto",height:'auto',minHeight:200,borderWidth:2,marginTop:20,borderRadius:20,borderColor:'#F5DBCC',backgroundColor:'#fff'}}>
            <Text style={{color:'#aaa',fontSize:20}}>Book    :<Text style={{color:'#042744'}}>Cloud Computing</Text></Text>
            <Text style={{color:'#aaa',fontSize:20}}>Author :<Text style={{color:'#042744'}}>Dr.M.Shanthi</Text></Text>
            <Text style={{color:'#aaa',fontSize:20}}>Edition :<Text style={{color:'#042744'}}>vol2</Text></Text>
            <Text style={{color:'#aaa',fontSize:20}}>Dept    :<Text style={{color:'#042744'}}>Computer Science</Text></Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=> alert("Bookname")} style={{flex:1,padding:10,justifyContent:'space-evenly',marginLeft:10,marginRight:10,width:"auto",height:'auto',minHeight:200,borderWidth:2,marginTop:20,borderRadius:20,borderColor:'#F5DBCC',backgroundColor:'#fff'}}>
            <Text style={{color:'#aaa',fontSize:20}}>Book    :<Text style={{color:'#042744'}}>Cloud Computing</Text></Text>
            <Text style={{color:'#aaa',fontSize:20}}>Author :<Text style={{color:'#042744'}}>Dr.M.Shanthi</Text></Text>
            <Text style={{color:'#aaa',fontSize:20}}>Edition :<Text style={{color:'#042744'}}>vol2</Text></Text>
            <Text style={{color:'#aaa',fontSize:20}}>Dept    :<Text style={{color:'#042744'}}>Computer Science</Text></Text>
          </TouchableOpacity>


          <TouchableOpacity onPress={()=> alert("Bookname")} style={{flex:1,padding:10,justifyContent:'space-evenly',marginLeft:10,marginRight:10,width:"auto",height:'auto',minHeight:200,borderWidth:2,marginTop:20,borderRadius:20,borderColor:'#F5DBCC',backgroundColor:'#fff'}}>
            <Text style={{color:'#aaa',fontSize:20}}>Book    :<Text style={{color:'#042744'}}>Cloud Computing</Text></Text>
            <Text style={{color:'#aaa',fontSize:20}}>Author :<Text style={{color:'#042744'}}>Dr.M.Shanthi</Text></Text>
            <Text style={{color:'#aaa',fontSize:20}}>Edition :<Text style={{color:'#042744'}}>vol2</Text></Text>
            <Text style={{color:'#aaa',fontSize:20}}>Dept    :<Text style={{color:'#042744'}}>Computer Science</Text></Text>
          </TouchableOpacity>


          <TouchableOpacity onPress={()=> alert("Bookname")} style={{flex:1,padding:10,justifyContent:'space-evenly',marginLeft:10,marginRight:10,width:"auto",height:'auto',minHeight:200,borderWidth:2,marginTop:20,borderRadius:20,borderColor:'#F5DBCC',backgroundColor:'#fff'}}>
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