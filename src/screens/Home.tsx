import React, { useState } from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Button, TextInput} from 'react-native';
import { dataServer } from '../services/axiosConfig';

const HomeScreen = (props: any) => {
  const handleNavigate = () => {
    console.log('Pressed');
    props.navigation.navigate('HostNewGame');
  };

const [userName, setuserName] = useState('')
const [Password, setPassword] = useState('')
  const temArray = [
    {
      name: 'Nosheen',
      id: 123,
      temprature: 33.1,
    },
    {
        name: 'Samreen',
        id: 223,
        temprature: 11.2,
      },
      {
        name: 'Shaheen',
        id: 333,
        temprature: 33.1,
      },
      {
        name: 'Sarah',
        id: 453,
        temprature: 55.2,
      },
  ];

const loginApi = async () => {
  try{
     const loginApiResponse = await dataServer.post('/api/auth/login',
     {username: userName, 
     password: Password}
     ) 
      
      console.log("login Api success",loginApiResponse)
     
  }
  catch (e){
    console.log("error",e)
  }
}

  return (
    <View style={styles.container}>
      <Text style={{color: '#000'}}>Hello, this is Home</Text>
      <Button
        onPress={handleNavigate}
        color={'aqua'}
        title="Go to host screen"
      />
      <View style={{flex: 1, backgroundColor: '#fff', width: '100%'}}>
      {/* {temArray.map((item,index)=>(
      <TouchableOpacity>
        <Text style={{color:"red"}}>
            {item.name}{" "}
        </Text>
        <Text>
            {item.id}{" "}
        </Text>
        <Text>
            {item.temprature} 
        </Text>
      </TouchableOpacity>
        ))} */}
<TextInput 
        
        onChangeText={setuserName}
        value={userName}
        style={{borderWidth:1}}
      />
      <TextInput 
        onChangeText={setPassword}
        value={Password}
        style={{borderWidth:1}}
      />
      <TouchableOpacity style={{alignSelf:"center"}}
      onPress={() => loginApi()}
      >
        <Text>
            Login
        </Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
  },
});

export default HomeScreen;
