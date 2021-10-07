import React from 'react'
import { View ,Text,Button,StyleSheet} from 'react-native'

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text>Login screens</Text>
      <Button 
      title="Login"
      onPress={()=>alert("Please Clicked me")}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
})