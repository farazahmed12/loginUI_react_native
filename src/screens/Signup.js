import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

import React from 'react';

import {theme} from '../../theme';

const Signup = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-white" style={{backgroundColor: theme.bg}}>
      <SafeAreaView>
        <View className="flex-row justify-start">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="m-3 bg-yellow-400 p-2 rounded-full">
            <Image
              source={require('../assets/arrow.png')}
              className="w-4 h-4"
            />
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-center mb-6">
          <Image
            source={require('../assets/teamwork.png')}
            className="w-16 h-16"
          />
        </View>
      </SafeAreaView>

      <ScrollView
        className="flex-1 bg-white px-8 pt-6"
        style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}}>
        <View className="from space-y-1">
          <Text className="text-gray-700 ml-2">Username</Text>
          <TextInput
            className="bg-gray-100 text-gray-700 p-2 rounded-xl mb-3"
            placeholder="John Doe"
          />
          <Text className="text-gray-700 ml-2">Email Address</Text>
          <TextInput
            className="bg-gray-100 text-gray-700 p-2 rounded-xl mb-3"
            placeholder="Example@email.com"
          />

          <Text className="text-gray-700 ml-2">Password</Text>
          <TextInput
            className="bg-gray-100 text-gray-700 p-2 rounded-xl mb-7"
            placeholder="abc12345"
            secureTextEntry
          />

          <TouchableOpacity className="flex-row justify-center py-4 bg-yellow-400 rounded-xl ">
            <Text className="text-gray-700 font-bold text-md">Sign Up</Text>
          </TouchableOpacity>
        </View>

        <Text className="font-bold text-center text-md mt-2">OR</Text>

        <View className="flex-row justify-center space-x-4 mt-3">
          <TouchableOpacity className="bg-gray-100 p-2 rounded-xl">
            <Image
              source={require('../assets/facebook.png')}
              className="w-6 h-6"
            />
          </TouchableOpacity>
          <TouchableOpacity className="bg-gray-100 p-2 rounded-xl">
            <Image
              source={require('../assets/instagram.png')}
              className="w-6 h-6"
            />
          </TouchableOpacity>
          <TouchableOpacity className="bg-gray-100 p-2 rounded-xl">
            <Image
              source={require('../assets/google.png')}
              className="w-6 h-6"
            />
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-center mt-3">
          <Text className="text-gray-700">Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text className="text-yellow-400 ">Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Signup;
