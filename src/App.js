import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import ReactNativeHapticFeedback from "react-native-haptic-feedback";
import * as Yup from 'yup';
import { Formik } from 'formik';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import DiceOne from '../assets/One.png'
import DiceTwo from '../assets/Two.png'
import DiceThree from '../assets/Three.png'
import DiceFour from '../assets/Four.png'
import DiceFive from '../assets/Five.png'
import DiceSix from '../assets/Six.png';

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};



const Dice=({imageUrl})=>{
  return(
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  )
}


export default function App() {
const [diceImage,setDiceImage]=useState(DiceOne)

const rollDice=()=>{
  const randomNumber=Math.floor(Math.random()*6)+1;
 if(randomNumber===1){
  setDiceImage(DiceOne)
 }
 else if(randomNumber===2){
  setDiceImage(DiceTwo)
 }
 else if(randomNumber===3){
  setDiceImage(DiceThree)
 }
 else if(randomNumber===4)
 {
  setDiceImage(DiceFour)
 }
 else if(randomNumber===5){
  setDiceImage(DiceFive)
 }
 else{
  setDiceImage(DiceSix)
 }
 ReactNativeHapticFeedback.trigger("impactLight", options);
}



  return (
    <>
    <View style={styles.container}>
      <Dice imageUrl={diceImage}/>
      <Pressable ><Text style={styles.rollDiceBtnText} onPress={rollDice}>Roll the Dice</Text></Pressable>
    </View>
    </>
        
     
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});