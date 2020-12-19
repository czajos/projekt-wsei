import React, {useState} from 'react';
import { View,Button, Text,Dimensions,Platform,StyleSheet,Image,ScrollView,TouchableOpacity ,SafeAreaView, ImageBackground} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Animated, { add } from 'react-native-reanimated';
import { FlatList } from 'react-native-gesture-handler';
import BottomSheet from 'reanimated-bottom-sheet'
import ImagePicker from 'react-native-image-crop-picker';


export const  AddTable =({navigation})=>{
const [bs,setBs]=useState(React.createRef())
// let img=require('../../addPhoto.jpg')
const [image,setImage]=useState(require('../../addPhoto.jpg'))
const [images,setImages]=useState(null)


  //Create flatlist
  // bs=React.createRef();
  const clickBu=()=>{
    bs.current.snapTo(0)
  }
   fall =new Animated.Value(1)

const [initEl,changeEl]=useState([
  {id:"0",text:"Stolik 1"},
  
  
])
const [exampleState,setExampleState]=useState(initEl);
const [idx, incr] = useState(2);

//Flatlist
const addEl =()=>{
  let newArray=[...initEl,{id:idx,text:"Stolik" + " "+(idx)}];
  incr(idx+1)
  setExampleState(newArray)
  changeEl(newArray)

}
// const selcetImg =(image)=>{
//   let arr=[...]
// }

//create ImagePicker
const photoLibrary=(cropit,circular=false,mediaType)=>{

  ImagePicker.openPicker({
    // path:image.uri,
    width: 400,
    height: 500,
    cropping: true,
    cropping: cropit,
     
  }).then((image) => {
    console.log('received image', image);
    setImage({
      
      uri:image.path,
      width:image.width,
      height:image.height ,
      mime: image.mime, 
    });
    setImages(null)
  });
}

//ImagePicker
const renderAsset =(image)=>{

  return renderImage(image)
}
const renderImage =(image)=>{
  return(
<Image
style={{width:'100%',height:'80%',resizeMode:'contain',justifyContent:'center',alignItems:'center'}} source={image} ></Image>
  )
}

//renderowanie pola dolnego arkusza
renderSheet=()=>(
  <View style={{backgroundColor:'white'}}>
  
  <TouchableOpacity style={styles.btnAddPhoto} onPress={()=>photoLibrary(false)}>
    <Text style={styles.txtStyleBottomSheet}>Dodaj zdjęcie z galeri</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.btnAddPhoto}>
  <Text style={styles.txtStyleBottomSheet}>Zrób zdjęcie</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.btnAddPhoto}>
  <Text style={styles.txtStyleBottomSheet}>Wróć</Text>
  </TouchableOpacity>
  </View>
)
//renderowanie nagłowka w dolnym akruszu
 renderHeader=()=>(
  <View style={{backgroundColor:'white',height:30}}>
<View style={{height:10,backgroundColor:'grey',width:'100%'}}></View>
  </View>
 )



// renderowanie Item

const Item = ({ item, style }) => (
  <View  style={[styles.item, style]}>
  <View>
  <Text style={styles.txtStyle1}>{item.text}</Text></View>
   <TouchableOpacity onPress={clickBu} style={{width:'100%'}} >
   {/* <Image  source={require('../../addPhoto.jpg')}   ></Image>     */}
   <View style={{resizeMode:'contain'}}>
   {image ? renderAsset(image):null}
     {item.images ? item.images.map((i)=>(
       <View key={i.uri} >{this.renderAsset(i)}</View>
     ))
     :null} 
   </View>    
   </TouchableOpacity>
   <View style={{flexDirection:'row',marginTop:-30}}>
     <Text style={styles.txtStyle1}>Podaj liczbe miejsc</Text>
     <TextInput style={styles.styleInput}></TextInput>
   </View>
  </View>
  
);

const renderItem = ({ item,index }) => {
  return (
    <Item
      item={item}  
      key={index} 
      source={item}   
      renderItem={renderImage}  
    />
  );
};

return(
  <SafeAreaView style={styles.container}>
   <BottomSheet
  ref={bs}
  snapPoints={[330,0]}
  initialSnap={1}
  callbackNode={fall}
  enabledGestureInteraction={true}
  renderContent={renderSheet}
  renderHeader={renderHeader}
  >
  </BottomSheet>
 
  <View style={styles.header}>
  <Image style={styles.image} source={require('../../logodlafirm.png')}></Image>
  </View>
  
  <Animated.View 
     style={{flex:1,opacity:Animated.add(0.2,Animated.multiply(fall,0.8))}}>      
  <Text style={styles.txtStyle1}>Dodaj stoliki</Text>
        <FlatList
            keyExtractor = {item => item.id.toString()}  
            data={exampleState}
             renderItem = {renderItem}
            
             >
             </FlatList>
             
         </Animated.View> 
           <View style={{flexDirection:'row',justifyContent:'space-between'}}>
           <TouchableOpacity style={styles.btnFooterStyle} onPress={addEl}>
        <Text style={styles.txtStyleBottomSheet}>+ Nowy stolik</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnFooterStyle} onPress={()=>{navigation.navigate('Menu panel')}}>
        <Text style={styles.txtStyleBottomSheet}>Zatwierdź</Text>
        </TouchableOpacity>
        </View>
        
    </SafeAreaView>
)

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    borderWidth: 1,
    
  },
  header:{
        flexDirection:'row',
          backgroundColor:'green',
          width:'100%',
          resizeMode: "contain",
          justifyContent: "center",
          
        },
    
        image:{
          width:'80%',
      resizeMode: "contain",
      justifyContent: "center",
      alignItems:'center'
        },
        item: {
          // backgroundColor: 'white',
          borderColor:'grey',
          borderWidth:2,
          padding: 10,
          marginVertical: 8,
          marginHorizontal: 16,
          height:400,
          alignItems:'center'
         
        },
        txtStyle1:{
          fontSize:22,
          color:'black',
          padding:10,
          textAlign:'center'
      },
      txtStyleBottomSheet:{
        fontSize:20,
        color:'white',
        fontWeight:'bold',
        padding:10,
        textAlign:'center'
    },
        btnAddPhoto:{
          backgroundColor:'#1B92C4',
          alignItems:'center',
          padding:5, 
          marginVertical: 22,
          marginHorizontal: '10%',
          borderRadius:10
        },
        btnFooterStyle:{
          backgroundColor:'#1B92C4',
          width:'49%',
          height:50
        },
        styleInput:{
          width:50,
          height:50,
          borderWidth:1,
          borderColor:'grey',
          borderRadius:10,
          marginLeft:25,
          textAlign:'center'

        }
});