import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { FlatList } from 'react-native-gesture-handler';
import BottomSheet from 'reanimated-bottom-sheet'
import ImagePicker from 'react-native-image-crop-picker';
import Table from './Table';


export const AddTableVersion1 = ({ navigation }) => {
  const [bs, setBs] = useState(React.createRef())
  // let img=require('../../addPhoto.jpg')
  const [image, setImage] = useState(require('../../addPhoto.jpg'))
  const [currentTableId, setCurrentTableId] = useState();
  
 const [items,setItems]=useState([])
  const [initEl, changeEl] = useState([
    { id: '1', text: "Stolik 1", img: image }

  ])
  const [exampleState, setExampleState] = useState(initEl);
  const [index, setIndex] = useState(2);


  //Create flatlist
  // bs=React.createRef();
  const clickImage = (id) => {
    setCurrentTableId(id);
    bs.current.snapTo(0)
  }
  fall = new Animated.Value(1)

  
  //Flatlist add item
  const addEl = () => {
    let newArray = [...initEl, { id: index, text: "Stolik" + " " + (index), img: image }];
    setIndex(index + 1)
    setExampleState(newArray)
    changeEl(newArray)
    
r
  }


  //create ImagePicker with Gallery
  const photoLibrary = (cropit, circular = false, mediaType) => {

    ImagePicker.openPicker({
      path: image.uri,
      width: 400,
      height: 500,
      // cropping: true,
      // cropping: cropit,

    }).then((image) => {
      addEl(image)
      console.log('received image', image);

      // setExampleState(tables => {
         console.log('current table id: ' + currentTableId);
         console.log({exampleState});

         
         const currentTable = exampleState.filter(table => table.id === currentTableId)[0];
         

        if (currentTable) {
          currentTable.img = image.path;
         
        }
        
       
        console.log({ currentTable})
        // return [...tables];
       
      // });

      // setImage({
        
      //   uri:image.path,
      //   width:image.width,
      //   height:image.height ,
      //   mime: image.mime, 
      // });
      bs.current.snapTo(1)
     
    })
      
  }

  //Image picker add photo with camera 
  const pickSingleWithCamera = (cropping, mediaType = 'photo') => {
    ImagePicker.openCamera({
      cropping: cropping,
      width: 400,
      height: 500,
      includeExif: true,
      mediaType,
    })
      .then((image) => {
        console.log('received image', image);
        setImage({
          uri: image.path,
          width: image.width,
          height: image.height,
          mime: image.mime,
        });
        setImages(null)
      })

  }

  
  renderSheet = () => (
    <View style={{ backgroundColor: 'white' }}>
      <TouchableOpacity style={styles.btnAddPhoto} onPress={() => photoLibrary(false)}>
        <Text style={styles.txtStyleBottomSheet}>Dodaj zdjęcie z galeri</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnAddPhoto} onPress={() => pickSingleWithCamera(false)}>
        <Text style={styles.txtStyleBottomSheet} >Zrób zdjęcie</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnAddPhoto}>
        <Text style={styles.txtStyleBottomSheet} onPress={() => bs.current.snapTo(1)}>Wróć</Text>
      </TouchableOpacity>
    </View>
  )
  //renderowanie nagłowka w dolnym akruszu
  renderHeader = () => (
    <View style={{ backgroundColor: 'white', height: 30, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ height: 10, backgroundColor: 'grey', width: '30%' }}></View>
    </View>
  )

  

  const renderItem = ({ item, style, index }) => {
    console.log(item)
    
   
    return (
      // <View style={[styles.item, style]}>
        <Table style={{}} id={item.id} image={item.img} title={item.text} clickImage={clickImage} ></Table>
      
    );
   

  };
  
  return (
    <View style={styles.container}>
      <BottomSheet
        ref={bs}
        snapPoints={[330, 0]}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
        renderContent={renderSheet}
        renderHeader={renderHeader}
      >
      </BottomSheet>

      <View style={styles.header}>
        <Image style={styles.image} source={require('../../logo.png')}></Image>
      </View>

      <Animated.View
        style={{ flex: 1, opacity: Animated.add(0.2, Animated.multiply(fall, 0.8)) }}>
        <Text style={styles.txtStyle1}>Dodaj stoliki</Text>
        <FlatList

          keyExtractor={(item) => item.id.toString()}
          data={exampleState}
          //extraData = {setImage}
          renderItem={renderItem}
          // extraData={}
          //extraData = {currentTable}
          
          // refreshing={refresh}
          // onRefresh={() => onRefresh()}
        >

        </FlatList>

      </Animated.View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity style={styles.btnFooterStyle} onPress={addEl}>
          <Text style={styles.txtStyleBottomSheet}>+ Nowy stolik</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnFooterStyle} onPress={() => { navigation.navigate('Menu panel') }}>
          <Text style={styles.txtStyleBottomSheet}>Zatwierdź</Text>
        </TouchableOpacity>
      </View>

    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    borderWidth: 1,

  },
  header: {
    flexDirection: 'row',
    backgroundColor: 'green',
    width: '100%',
    resizeMode: "contain",
    justifyContent: "center",

  },

  image: {
    width: '80%',
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: 'center'
  },
  item: {
    // backgroundColor: 'white',
    borderColor: 'grey',
    borderWidth: 2,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    height: 400,
    alignItems: 'center'

  },
  txtStyle1: {
    fontSize: 22,
    color: 'black',
    padding: 10,
    textAlign: 'center'
  },
  txtStyleBottomSheet: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center'
  },
  btnAddPhoto: {
    backgroundColor: '#1B92C4',
    alignItems: 'center',
    padding: 5,
    marginVertical: 22,
    marginHorizontal: '10%',
    borderRadius: 10
  },
  btnFooterStyle: {
    backgroundColor: '#1B92C4',
    width: '49%',
    height: 50
  },
  styleInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    marginLeft: 25,
    textAlign: 'center'

  }
});