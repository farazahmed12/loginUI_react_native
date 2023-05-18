import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {theme} from '../../theme';

const Login = () => {
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
          <Image source={require('../assets/2.png')} className="w-20 h-20" />
        </View>
      </SafeAreaView>

      <ScrollView
        className="flex-1 bg-white px-8 pt-8"
        style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}}>
        <View className="from space-y-1">
          <Text className="text-gray-700 ml-2">Email Address</Text>
          <TextInput
            className="bg-gray-100 text-gray-700 px-2 rounded-xl mb-3"
            placeholder="Example@email.com"
          />

          <Text className="text-gray-700 ml-2">Password</Text>
          <TextInput
            className="bg-gray-100 text-gray-700 px-2 rounded-xl mb-3"
            placeholder="abc12345"
            secureTextEntry
          />

          <View className="flex-row justify-end">
            <TouchableOpacity>
              <Text className="text-gray-700 text-xs mb-3">
                forget password ?
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity className="flex-row justify-center py-4 bg-yellow-400 rounded-xl">
            <Text className="text-gray-700 font-bold text-md">Login</Text>
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
          <Text className="text-gray-700">don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text className="text-yellow-400 ">SignUp</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;
