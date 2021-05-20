import ImagePicker from 'react-native-image-crop-picker';
import React, { useState, useMemo, useCallback } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Animated, { onChange } from 'react-native-reanimated';
import { FlatList } from 'react-native-gesture-handler';
import BottomSheet from 'reanimated-bottom-sheet'
// import Swipeout from 'react-native-swipeout'
import { SwipeListView } from 'react-native-swipe-list-view'
import Icon from 'react-native-vector-icons/Ionicons'
import axios from 'axios'
import FormData from 'form-data'
import Table from './Table'


export function AddTableTest({ navigation }) {
    const [bottomPanel, setBottomPanel] = useState(React.createRef())
    const [fileList, setFileList] = useState([]);
    const [places, setPlaces] = useState()
    // const state = useMemo(() => ({ fileList }), [fileList]);
    const [index, setIndex] = useState(0)
    const [addEl,setAddEl]=useState(false)
    const[disabled,setDisabled]=useState(false)

    

    // const selectImage = useCallback((image, index) => {
    //     setFileList(fileList => {
    //         const newDataImg = [...fileList];
    //         const source = { uri: image.path };
    //         // let index;

    //         const item = {
    //             id: index,
    //             // url: source,
    //             // text: "",
    //             // input: ""
    //         };

    //         newDataImg.push(item);
    //         fileList = ""
    //         newDataImg.forEach((item, id, url,text) => {
    //             item.id = id;
    //             // // item.url=source.id
    //             // item.text = "STOLIK" + " " + (id + 1);
    //             // item.input = places

    //         })
    //         //console.log({ item })
    //         console.log(item.id)

    //         console.log({ newDataImg })
    //         bottomPanel.current.snapTo(1)

    //         return newDataImg;

    //     });
    // }, [setFileList]);

const afterClick=()=>{
   index +=1
//    setDisabled(false)
}

    const addMore=()=>{
        setAddEl(true)
        const addNewVal={id:'id'+ index ,text: index+1}
        const newArray=[...fileList,addNewVal]
        // setDisabled(true)
        setFileList(newArray)
        console.log({newArray})
        // setFileList(fileList => {
        //     const newDataImg = [...fileList];
           
        //     // let index;

        //     const item = {
        //         id: index,

        //         text: "",
                
        //     };

        //     newDataImg.push(item);
        //     fileList = ""
        //     newDataImg.forEach((item, id, url,text) => {
        //         item.id = id;
        //         // item.url=source.id
        //         item.text = "STOLIK" + " " + (id + 1);
               

        //     })
        // });
    }

    

    const renderItem = useCallback(({ item, index }) => {
        //console.log(item.id)

        return (
            <View>
                <View style={styles.item}>
                    <View>
                        <Text style={styles.txtStyle1}>{item.text}</Text>
                    </View>
                    <TouchableOpacity style={{ width: '100%' }} >
                        {/* <Image style={{ width: '100%', height: 300, resizeMode: 'contain', justifyContent: 'center', alignItems: 'center' }} source={item.url}></Image> */}
                    </TouchableOpacity>
                </View>
                <View style={styles.podajLiczbeMiejscStyle}>
                    <Text style={styles.txtStyle1}>Liczba miejsc</Text>
                    <TextInput
                        style={styles.styleInput}
                        keyboardType='numeric'
                        onChangeText={text => setPlaces(text)}
                        value={places}
                    ></TextInput>
                </View>
            </View>

        );
    }, []);

   

    const editItem = (rowMap, rowKey, item, image) => {

        const arr = [...fileList]
        const newImg = fileList.findIndex(item => item.id == rowKey)
        arr[newImg] = { ...arr[newImg], url: image }
        // console.log({newImg})
        setFileList(arr)
        console.log({ arr })

    }

    const deleteItem = (rowMap, rowKey) => {
        const newArray = [...fileList]
        const newIndex = fileList.findIndex(item => item.id == rowKey);
        newArray.splice(newIndex, 1)
        setFileList(newArray)
        console.log({ newArray })
    }

    const HiddenItemWithActions = props => {
        const { onEdit, onDelete } = props;
        return (
            <View style={styles.rowBack}>
                <TouchableOpacity style={[styles.btnRgihtBtn, styles.backRightBtnEdit]} onPress={onEdit}>
                    <Icon name="create-outline"
                        color='white'
                        size={30}></Icon>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btnRgihtBtn, styles.backRightBtnDelete]} onPress={onDelete} >
                    <Icon name="trash-outline"
                        color='white'
                        size={30}></Icon>
                </TouchableOpacity>
            </View>
        )

    }

    const renderHiddenItem = (data, rowMap) => {
        return (
            <HiddenItemWithActions
                data={data}
                rowMap={rowMap}
                onEdit={() => editItem(rowMap, data.item.id)}
                onDelete={() => deleteItem(rowMap, data.item.id)}
            />
        )
    }

    
    //renderowanie nagłowka w dolnym akruszu
    // renderHeader = () => (
    //     <View style={{
    //         backgroundColor: 'white', height: 45, justifyContent: 'center', alignItems: 'center', borderTopColor: 'lightgrey',
    //         borderTopWidth: 2,
    //     }}>
    //         <View style={{ height: 10, backgroundColor: 'grey', width: '30%', borderRadius: 10 }}></View>
    //     </View>
    // )


    return (
        <View style={styles.container}>
            

            <View style={styles.header}>
                <Image style={styles.imageStyleLogo} source={require('../../logodlafirm.png')}></Image>
            </View>

            <ScrollView
            ref={(scrollView)=> this.scrollView=scrollView}
            onContentSizeChange={()=>{
                addEl && this.scrollView.scrollToEnd()
            }}
            >
            <View style={{flex:1}}>
                {fileList.map(ele=>{
                    return(
                       <Table
                       key={ele.id}
                       item={ele}
                       afterClick={afterClick}
                       >

                       </Table> 
                    )
                })}
            </View>

            </ScrollView>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, opacity: 1, backgroundColor: 'white' }}>
                <TouchableOpacity style={styles.btnFooterStyle} >
                    <Text style={styles.txtStyleBottomSheet} onPress={addMore} disabled={disabled}>+ Nowy stolik</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnFooterStyle} >
                    <Text style={styles.txtStyleBottomSheet}>Zatwierdź</Text>
                </TouchableOpacity>
            </View>

        </View>
    );

}

const resizeMode = 'center';

AddTableTest.navigationOptions = {
    headerShown: false,
};

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
        height: 80,

    },
    dodajStoliki: {
        backgroundColor: '#F0F0F0',
        margin: 5
    },

    imageStyleLogo: {
        width: '80%',
        resizeMode: "contain",
        justifyContent: "center",
        alignItems: 'center',
        height: 75,
    },
    item: {
        backgroundColor: 'white',
        // borderColor: 'grey',
        //borderWidth: 1,
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        height: 'auto',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0.5,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1,

        elevation: 5,
        borderRadius: 10

    },
    podajLiczbeMiejscStyle: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        height: 60,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0.5,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        marginTop: -5,
        marginBottom: 15,
        elevation: 5,
        borderRadius: 10
    },
    txtStyle1: {
        fontSize: 20,
        color: 'black',
        padding: 10,
        textAlign: 'center'
    },
    txtStyleBottomSheet: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        padding: 10,
        textAlign: 'center',

    },
    txtStyleBottomSheetBack: {
        fontSize: 20,
        color: '#1B92C4',
        fontWeight: 'bold',
        padding: 10,
        textAlign: 'center',

    },
    btnAddPhoto: {
        backgroundColor: '#1B92C4',
        alignItems: 'center',
        padding: 3,
        marginVertical: 22,
        marginHorizontal: '10%',
        borderRadius: 50
    },
    btnAddPhotoBack: {
        backgroundColor: 'white',
        alignItems: 'center',
        padding: 3,
        marginVertical: 22,
        marginHorizontal: '10%',
        borderRadius: 50,
        borderWidth: 4,
        borderColor: '#1B92C4'
    },
    btnFooterStyle: {
        backgroundColor: '#1B92C4',
        width: '49%',
        height: 50,
        borderRadius: 50,

    },
    styleInput: {
        width: 50,
        borderColor: 'green',
        borderWidth: 2,
        borderRadius: 100,
        backgroundColor: 'white',
        fontSize: 20,
        justifyContent: 'flex-end',
        height: 50,
        textAlign: 'center',
        color: 'red',
        // borderBottomColor: 'black',
        // borderBottomWidth: 2,


    },
    backRightBtnDelete: {
        backgroundColor: 'red',
        //right: 75,

    },
    backRightBtnEdit: {
        backgroundColor: 'blue',
        //right: 75,
        margin: 3
    },
    btnRgihtBtn: {
        bottom: 0,
        justifyContent: 'center',
        //position:'absolute',
        padding: 18,
        marginVertical: 8,
        height: 80,

        borderRadius: 20


    },
    rowBack: {
        alignItems: 'center',
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginHorizontal: 16,
        marginVertical: 8,

        //paddingLeft: 15,

    },
    delete: {
        height: 30,
        width: 30
    }
});