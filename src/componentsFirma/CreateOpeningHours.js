import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import axios from 'axios'



export const CreateOpeningHours = ({ navigation }) => {
  const [monOpen, setMonOpen] = useState()
  const [monClose, setMonClose] = useState()

  const [tueOpen, setTueOpen] = useState()
  const [tueClose, setTueClose] = useState()

  const [wedOpen, setWedOpen] = useState()
  const [wedClose, setWedClose] = useState()

  const [thuOpen, setThuOpen] = useState()
  const [thuClose, setThuClose] = useState()

  const [friOpen, setFriOpen] = useState()
  const [friClose, setFriClose] = useState()

  const [satOpen, setSatOpen] = useState()
  const [satClose, setSatClose] = useState()

  const [sunOpen, setSunOpen] = useState()
  const [sunClose, setSunClose] = useState()
  const [id,setId]=useState(6)


 

  // const datas=new FormData()
  
  //  datas.append('mon_open',monOpen)
  //  datas.append('mon_close',monClose)
  //  datas.append('tue_open',tueOpen)
  //  datas.append('tue_close',tueClose)
  //  datas.append('wed_open',wedOpen)
  //  datas.append('wed_close',wedClose)
  //  datas.append('thu_open',thuOpen)
  //  datas.append('thu_close',thuClose)
  //  datas.append('fri_open',friOpen)
  //  datas.append('fri_close',friClose)
  //  datas.append('sat_open',satOpen)
  //  datas.append('sat_close',satClose)
  //  datas.append('sun_open',sunOpen)
  //  datas.append('sun_close',sunClose)

  const submit = () => {
    axios
      .post(`http://192.168.1.143:5000/restaurant/openTime/add/${id}`, {
        mon_open:monOpen ==null ? '00:00' : monOpen, 
        mon_close:monClose ==null ? '00:00' : monClose,
        tue_open:tueOpen ==null ? '00:00' : tueOpen,
        tue_close:tueClose ==null ? '00:00' : tueClose,
        wed_open:wedOpen ==null ? '00:00' : wedOpen,
        wed_close:wedClose ==null ? '00:00' : wedClose,
        thu_open:thuOpen ==null ? '00:00' : thuOpen,
        thu_close:thuClose == null ? '00:00' : thuClose,
        fri_open:friOpen ==null ? '00:00' : friOpen,
        fri_close:friClose ==null ? '00:00' : friClose,
        sat_open:satOpen ==null ? '00:00' : satOpen,
        sat_close:satClose ==null ? '00:00' : satClose,
        sun_open:sunOpen ==null ? '00:00' : sunOpen,
        sun_close:sunClose ==null ? '00:00' : sunClose,
      })
      .then(function (response) {
        alert(JSON.stringify(response.data));
      })
      .catch(function (error) {
        alert(error.message);
      });
  }


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.image} source={require('../../logodlafirm.png')}></Image>
      </View>
      <View style={styles.title}>
        <Text style={styles.txtStyle1}>Podaj godziny otwarcia restauracji</Text>
      </View>
      <ScrollView style={styles.datastyle}>
        <View style={styles.addHoursStyle}>
          <Text style={styles.txtStyle2}>Dzień</Text>
          <Text style={styles.openStyle}>Open</Text>
          <Text style={styles.closeStyle}>Close</Text>

        </View>
        <View style={styles.addHoursStyle}>
          <Text style={styles.txtStyle2}>Poniedziałek</Text>
          <TextInput
            placeholder="godz : min"
            keyboardType='numeric'
            style={styles.txtInputOpen}
            // type="text"
            onChangeText={text => setMonOpen(text)}
            value={monOpen}
          />
          <TextInput
            placeholder="godz : min"
            keyboardType='numeric'
            style={styles.txtInput}
            type="text"
            onChangeText={text => setMonClose(text)}
            value={monClose}
          />
        </View>

        <View style={styles.addHoursStyle}>
          <Text style={styles.txtStyle2}>Wtorek</Text>
          <TextInput
            placeholder="godz : min"
            keyboardType='numeric'
            style={styles.txtInputOpen}
            type="text"
            onChangeText={text => setTueOpen(text)}
            value={tueOpen}
          />
          <TextInput
            placeholder="godz : min"
            keyboardType='numeric'
            style={styles.txtInput}
            type="text"
            onChangeText={text => setTueClose(text)}
            value={tueClose}
          />
        </View>

        <View style={styles.addHoursStyle}>
          <Text style={styles.txtStyle2}>Środa</Text>
          <TextInput
            placeholder="godz : min"
            keyboardType='numeric'
            style={styles.txtInputOpen}
            type="text"
            onChangeText={text => setWedOpen(text)}
            value={wedOpen}
          />
          <TextInput
            placeholder="godz : min"
            keyboardType='numeric'
            style={styles.txtInput}
            type="text"
            onChangeText={text => setWedClose(text)}
            value={wedClose}
          />
        </View>

        <View style={styles.addHoursStyle}>
          <Text style={styles.txtStyle2}>Czwartek</Text>
          <TextInput
            placeholder="godz : min"
            keyboardType='numeric'
            style={styles.txtInputOpen}
            type="text"
            onChangeText={text => setThuOpen(text)}
            value={thuOpen}
          />
          <TextInput
            placeholder="godz : min"
            keyboardType='numeric'
            style={styles.txtInput}
            type="text"
            onChangeText={text => setThuClose(text)}
            value={thuClose}
          />
        </View>

        <View style={styles.addHoursStyle}>
          <Text style={styles.txtStyle2}>Piątek</Text>
          <TextInput
            placeholder="godz : min"
            keyboardType='numeric'
            style={styles.txtInputOpen}
            type="text"
            onChangeText={text => setFriOpen(text)}
            value={friOpen}
          />
          <TextInput
            placeholder="godz : min"
            keyboardType='numeric'
            style={styles.txtInput}
            type="text"
            onChangeText={text => setFriClose(text)}
            value={friClose}
          />
        </View>

        <View style={styles.addHoursStyle}>
          <Text style={styles.txtStyle2}>Sobota</Text>
          <TextInput
            placeholder="godz : min"
            keyboardType='numeric'
            style={styles.txtInputOpen}
            type="text"
            onChangeText={text => setSatOpen(text)}
            value={satOpen}
          />
          <TextInput
            placeholder="godz : min"
            keyboardType='numeric'
            style={styles.txtInput}
            type="text"
            onChangeText={text => setSatClose(text)}
            value={satClose}
          />
        </View>

        <View style={styles.addHoursStyle}>
          <Text style={styles.txtStyle2}>Niedziela</Text>
          <TextInput
            placeholder="godz : min"
            keyboardType='numeric'
            style={styles.txtInputOpen}
            type="text"
            onChangeText={text => setSunOpen(text)}
            value={sunOpen}
          />
          <TextInput
            placeholder="godz : min"
            keyboardType='numeric'
            style={styles.txtInput}
            type="text"
            onChangeText={text => setSunClose(text)}
            value={sunClose}
          />
        </View>
      </ScrollView>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginBottom: 10, }}>
        <TouchableOpacity style={styles.btnStyle} onPress={() => navigation.navigate('Dodaj stolik')}>
          <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold' }} >Idź dalej</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnStyle} onPress={submit}>
          <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold' }} >Zapisz</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

//export default formFirma;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',

    backgroundColor: 'white'
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

  title: {
    padding: 8,
    resizeMode: "contain",
    justifyContent: "center",
    width: '100%',
    justifyContent: 'flex-end',

  },

  datastyle: {
    padding: 10,
    width: '100%',
  },

  txtInput: {
    // alignSelf: 'stretch',
    fontSize: 18,
    // margin: 10,
    borderBottomColor: 'lightgrey',
    // borderBottomWidth: 1,
    textAlign: 'center',
    color: 'red'
  },
  txtInputOpen: {
    // alignSelf: 'stretch',
    fontSize: 18,
    // margin: 10,
    borderBottomColor: 'lightgrey',
    // borderBottomWidth: 1,
    textAlign: 'center',
    color: 'green'

  },

  txtStyle1: {
    fontSize: 28,
    color: 'black',
    marginLeft: 10
  },

  txtStyle2: {
    fontSize: 18,
    width: "30%",
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  openStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 10,

    width: "30%",
    textAlign: 'center'

  },
  closeStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 10,
    width: "30%",
    textAlign: 'center'

  },
  btnStyle: {
    backgroundColor: '#5B9CE6',
    padding: 20,
    height: 30,
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50

  },

  addHoursStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  }
})