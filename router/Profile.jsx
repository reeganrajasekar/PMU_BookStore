import {View ,ScrollView, Text ,StyleSheet, TouchableOpacity , Image} from 'react-native'
import home from "../assets/nav/home.png"
import collection from "../assets/nav/collection.png"
import profile from "../assets/nav/profile-color.png"
import Logo from '../assets/icon.png'


export default function Profile({navigation}) {
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
              <Text style={{color:'#042744',fontSize:26}}>{"\t\t"}Reegan Rajasekar{"\n"}</Text>
              <Text style={{color:'#aaa',fontSize:20}}>Register No :</Text>
              <Text style={{color:'#042744',fontSize:26}}>{"\t\t"}821919104022{"\n"}</Text>
              <Text style={{color:'#aaa',fontSize:20}}>Email :</Text>
              <Text style={{color:'#042744',fontSize:26}}>{"\t\t"}reegan2002a@gmail.com{"\n"}</Text>
              <Text style={{color:'#aaa',fontSize:20}}>Department    :</Text>
              <Text style={{color:'#042744',fontSize:26}}>{"\t\t"}Computer Science</Text>
            </View>
            <View style = {styles.container}>
            <TouchableOpacity onPress={()=> {navigation.navigate('Login')}}>
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