import React from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import Item from './item.js';
import SearchBar from "./search.js";
import Navbar from "./navbar.js";


const App = () => {
    return (
        <View style={{backgroundColor: "#F9F9FB"}}>
            <View style = {styles.View}>
                <Text style={{ margin: 16, marginTop: 30,marginBottom: 0, fontSize: 32, fontWeight: "bold",textAlign:"center" }}>FoodLine</Text>
                <SearchBar/>
                <Text style={{margin:16,marginTop:0, fontSize:16,fontWeight:"bold", }}>Recently Posted Items</Text>
                <ScrollView style={{height:490}}>
                    <Item name = 'Diet Pepsi' quantity= '40' price='0.99' img= {{uri:'https://firebasestorage.googleapis.com/v0/b/food-delivery-250ba.appspot.com/o/c6f553ab-c978-4d80-8b44-03006b3eef2b?alt=media&token=89dea4ff-8537-4223-8e15-2b880fccab4d'}}/>
                    <Item name = 'Cheetos' quantity= '18' price='0.69' img= {{uri:'https://firebasestorage.googleapis.com/v0/b/food-delivery-250ba.appspot.com/o/cheetos.png?alt=media&token=c42d623a-864b-438a-ad75-ecf7450a7588'}}/>
                    <Item name = 'Cup Noodles' quantity= '12' price='1.29' img= {{uri:'https://firebasestorage.googleapis.com/v0/b/food-delivery-250ba.appspot.com/o/cupnoodles.png?alt=media&token=cf1c5757-2dad-4854-9dad-2901d8e3a0d6'}}/>
                    <Item name = 'Diet Pepsi' quantity= '40' price='0.99' img= {{uri:'https://firebasestorage.googleapis.com/v0/b/food-delivery-250ba.appspot.com/o/c6f553ab-c978-4d80-8b44-03006b3eef2b?alt=media&token=89dea4ff-8537-4223-8e15-2b880fccab4d'}}/>
                    <Item name = 'Cheetos' quantity= '18' price='0.69' img= {{uri:'https://firebasestorage.googleapis.com/v0/b/food-delivery-250ba.appspot.com/o/cheetos.png?alt=media&token=c42d623a-864b-438a-ad75-ecf7450a7588'}}/>
                    <Item name = 'Cup Noodles' quantity= '12' price='1.29' img= {{uri:'https://firebasestorage.googleapis.com/v0/b/food-delivery-250ba.appspot.com/o/cupnoodles.png?alt=media&token=cf1c5757-2dad-4854-9dad-2901d8e3a0d6'}}/>
                    <Item name = 'Diet Pepsi' quantity= '40' price='0.99' img= {{uri:'https://firebasestorage.googleapis.com/v0/b/food-delivery-250ba.appspot.com/o/c6f553ab-c978-4d80-8b44-03006b3eef2b?alt=media&token=89dea4ff-8537-4223-8e15-2b880fccab4d'}}/>
                    <Item name = 'Cheetos' quantity= '18' price='0.69' img= {{uri:'https://firebasestorage.googleapis.com/v0/b/food-delivery-250ba.appspot.com/o/cheetos.png?alt=media&token=c42d623a-864b-438a-ad75-ecf7450a7588'}}/>
                    <Item name = 'Cup Noodles' quantity= '12' price='1.29' img= {{uri:'https://firebasestorage.googleapis.com/v0/b/food-delivery-250ba.appspot.com/o/cupnoodles.png?alt=media&token=cf1c5757-2dad-4854-9dad-2901d8e3a0d6'}}/>
                </ScrollView>
                <Navbar/>
            </View>
        </View>
        
    );
  };

  const styles = StyleSheet.create({
    View:{
        marginTop:50,
          marginBottom: 50,
        backgroundColor:"#F9F9FB",
    },
  })

  export default App;
  