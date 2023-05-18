import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {theme} from '../../theme';
import { useNavigation } from '@react-navigation/native';


const Welcome = () => {

  const navigation = useNavigation();
  

  return (
    <SafeAreaView className="flex-1" style={{backgroundColor: theme.bg}}>
      <View className="flex-1 flex justify-around my-4">
        <Text className="text-white font-bold text-4xl text-center">
          Let's Get Started
        </Text>
        <View className="flex-row justify-center">
          <Image
            source={require('../assets/1.png')}
            resizeMode="contain"
            className=" rounded-lg w-40 h-40"
          />
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')} className="bg-yellow-400 mx-7 px-4 py-2 rounded-xl">
            <Text className="uppercase text-xl font-bold text-center">
              signup
            </Text>
          </TouchableOpacity>
          <View className="flex-row justify-center mt-2">
            <Text className='text-white'>already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')} >
              <Text className='text-yellow-400 font-bold'>Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
