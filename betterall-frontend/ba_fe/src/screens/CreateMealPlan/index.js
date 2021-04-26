import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Vegan from '../../../assets/images/vegan.png';
import Flexitarian from '../../../assets/images/flexitarian.png';
import Macrobiotic from '../../../assets/images/macrobiotic.png';
import Pescatarian from '../../../assets/images/pescatarian.png';
import Vegetarian from '../../../assets/images/vegetarian.png';
import "../../../assets/fonts/Mulish-Regular.ttf";
import Modal from 'react-native-modal';

import {
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import Tags from "react-native-tags";




export default class CreateMealPlan extends Component {
  state = {
    dietaryRestriction: '',
    isModalVisible:false,
  };

  constructor() {
    super();
  }

  onPress = () => {
    this.setState({
      dietaryRestriction: 'Flexitarian',

    });
    console.log('Obama isa ' + this.state.dietaryRestriction)
  };

  toggleModal = () => {
    this.setState({
      isModalVisible: !this.state.isModalVisible,

    });
    console.log(' lütfen ' + this.state.isModalVisible)
  };

  suggestic = () => {
      fetch('https://production.suggestic.com/graphql',{
        method: 'post',
        mode: 'no-cors',
        headers: {
          'Authorization': 'Token 4efbe99a39de42eb211ca1270cbe2a87ea482fef',
          'sg-user': '3d719962-cca4-4a88-b7e4-402ef42e8cd2',
          'Accept': '',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: `mutation {
                    profileRestrictionsUpdate(
                    restrictions: [
                      "UmVzdHJpY3Rpb246M2ZmZDQ1OGUtMjczZi00MTZmLWE5NjYtNmFkYzliYjQ3OWE1",
                      "UmVzdHJpY3Rpb246ODU1ZjkzZjYtODQzOC00MTIzLTk3YzktM2U2YzU2MzllZjli"
                    ]) {
                     success
                  }}`,
        })

      }).then(response=>response.json()).then(data=>{console.log(data);
      }).catch(err=>console.error(err));
  };


  render() {
    return (
    <View style={styles.container}>

        {/*<Button title="Üzerinde çalıştığın sayfa." />
        <View>
          <Text>Please pick dietary restriction</Text>
          <Picker
            style={{
              width: 200,
            }}
            //selectedValue={(this.state && this.state.pickerValue) || 'a'}
            selectedValue={this.state.pickerValue}
            onValueChange={(value) => {
              if (this.state.pickerValue !== 0) {
                this.setState({pickerValue: value});
              }
            }}
            itemStyle={{color: 'white'}}>
            <Picker.Item label={'Vegan'} value={'a'} />
            <Picker.Item label={'Vegetarian'} value={'b'} />
            <Picker.Item label={'Pescatarian'} value={'c'} />
            <Picker.Item label={'Flexitarian'} value={'d'} />
            <Picker.Item label={'Macrobiotic'} value={'e'} />
          </Picker>
        </View>
        <Image source={Vegan} style={styles.image} />
        */}

        <SafeAreaView>
          <Text style={{marginTop: 20,marginRight: 20,marginLeft: 20}}>List of Meal Plans</Text>


          <View  style={{alignContent:"center",marginTop: 20}}>
            <TouchableOpacity onPress={this.toggleModal} style={styles.forModal}>
              <Text> I want to create a new meal plan</Text>
            </TouchableOpacity>
          </View>

          <Modal isVisible={this.state.isModalVisible}>
            <ScrollView>
              <Text style={styles.titleStyle}>
                Allergies
              </Text>
              <ScrollView horizontal={true}>
                <Tags createTagOnReturn
                  initialText="Insert your allergies"
                  textInputProps={{
                    placeholder: "Any type of allergy"
                  }}
                      initialTags={[]}
                  onChangeTags={tags => console.log(tags)}
                  onTagPress={(index, tagLabel, event, deleted) =>
                    console.log(index, tagLabel, event, deleted ? "deleted" : "not deleted")
                  }
                  //createTagOnString={["\n"]}
                  containerStyle={{ justifyContent: "center" }}
                  inputStyle={{ backgroundColor: '#eceece', borderRadius: 100, color: '#9cb3d3'}}
                  renderTag={({ tag, index, onPress, deleteTagOnPress, readonly }) => (
                    <TouchableOpacity key={`${tag}-${index}`} onPress={onPress} style={styles.tagTouchable}>
                      <Text style={styles.tagTextStyle}>🤧 {tag}</Text>
                    </TouchableOpacity>
                  )}
                />
            </ScrollView>

            <View style={styles.column}>
                <Text style={styles.titleStyle}>
                  Dietary Restriction
                </Text>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    activeOpacity={0.5}
                    onPress={this.suggestic}>
                  <Text style={styles.titleStyle}>List from Suggestic</Text>
                </TouchableOpacity>

                <View style={styles.row}>
                  <TouchableOpacity
                    style={styles.buttonStyle}
                    activeOpacity={0.5}>
                    <View>
                      <Image source={Vegan} style={styles.image} />
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.buttonStyle}
                    activeOpacity={0.5}
                    onPress={this.onPress}>
                    <View>
                      <Image source={Flexitarian} style={styles.image} />
                    </View>
                  </TouchableOpacity>
                </View>

                <View style={styles.row}>
                  <TouchableOpacity
                    style={styles.buttonStyle}
                    activeOpacity={0.5}>
                    <View>
                      <Image source={Macrobiotic} style={styles.image} />
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.buttonStyle}
                    activeOpacity={0.5}>
                    <View>
                      <Image source={Pescatarian} style={styles.image} />
                    </View>
                  </TouchableOpacity>
                </View>

                <View style={styles.row}>
                  <TouchableOpacity
                    style={styles.buttonStyle}
                    activeOpacity={0.5}>
                    <View>
                      <Image source={Vegetarian} style={styles.image} />
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.buttonStyle}
                    activeOpacity={0.5}>
                    <View style={{elevation: 10}}>
                      <Image source={Vegan} style={styles.image} />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>

              <Text style={styles.titleStyle}>
                Diseases
              </Text>
              <ScrollView horizontal={true}>
                <Tags createTagOnReturn
                      initialText="Insert your diseases"
                      textInputProps={{
                        placeholder: "Any type of disease"
                      }}
                      initialTags={[]}
                      onChangeTags={tags => console.log(tags)}
                      onTagPress={(index, tagLabel, event, deleted) =>
                        console.log(index, tagLabel, event, deleted ? "deleted" : "not deleted")
                      }
                  //createTagOnString={["\n"]}
                      containerStyle={{ justifyContent: "center" }}
                      inputStyle={{ backgroundColor: '#eceece', borderRadius: 100, color: '#9cb3d3'}}
                      renderTag={({ tag, index, onPress, deleteTagOnPress, readonly }) => (
                        <TouchableOpacity key={`${tag}-${index}`} onPress={onPress} style={styles.tagTouchable}>
                          <Text style={styles.tagTextStyle}>🏥 {tag}</Text>
                        </TouchableOpacity>
                      )}
                />
              </ScrollView>

              <Text style={styles.titleStyle}>
                Vitamins
              </Text>
              <ScrollView horizontal={true}>
                <Tags createTagOnReturn
                      initialText="monkey"
                      textInputProps={{
                        placeholder: "Any type of animal"
                      }}
                      initialTags={["dog", "cat", "chicken"]}
                      onChangeTags={tags => console.log(tags)}
                      onTagPress={(index, tagLabel, event, deleted) =>
                        console.log(index, tagLabel, event, deleted ? "deleted" : "not deleted")
                      }
                  //createTagOnString={["\n"]}
                      containerStyle={{ justifyContent: "center" }}
                      inputStyle={{ backgroundColor: '#eceece', borderRadius: 100, color: '#9cb3d3'}}
                      renderTag={({ tag, index, onPress, deleteTagOnPress, readonly }) => (
                        <TouchableOpacity key={`${tag}-${index}`} onPress={onPress} style={styles.tagTouchable}>
                          <Text style={styles.tagTextStyle}>💊 {tag}</Text>
                        </TouchableOpacity>
                      )}
                />
              </ScrollView>

              <View  style={{alignContent:"center",marginTop: 20}}>
                <TouchableOpacity onPress={this.toggleModal} style={styles.forCreate}>
                  <Text> Create !</Text>
                </TouchableOpacity>
              </View>

            </ScrollView>
          </Modal>

        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CDDA7E',
    paddingLeft: 10,
    paddingRight: 10,
    //justifyContent: 'center',
  },
  image: {
    //flex: 1,
    width: 170,
    height: 170,
    //resizeMode: 'contain',
    //justifyContent: 'space-evenly',
    //backgroundColor: 'black',
    //marginRight:50,
  },

  buttonStyle: {
    //flex: 1,
    width: 170,
    height: 170,
    resizeMode: 'contain',
    //backgroundColor: 'red',
  },
  /*column: {
    flex: 1,
    flexDirection: 'column',
  },*/
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-evenly',
    //resizeMode: 'contain',
    marginBottom: 10,
  },
  tagTouchable: {
    width: 80,
    height: 30,
    resizeMode: 'contain',
    backgroundColor: "#ffcc33",
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  tagTextStyle: {
    fontFamily: "Mulish-Regular",
    color: "#eceece",
  },
  titleStyle: {
    paddingTop: 10,
    paddingBottom: 10,
    fontFamily:'Mulish-Regular',
    fontSize: 26,
    //fontWeight: '700',
    color: "#7B8235",
  },
  forModal: {
    width: 250,
    height: 40,
    alignItems: 'center',
    backgroundColor: "#ffcc33",
    borderRadius: 100,
    justifyContent: 'center',
    marginRight: 8,
  },

  forCreate: {
    width: 100,
    height: 40,
    alignItems: 'center',
    backgroundColor: "#ffcc33",
    borderRadius: 100,
    justifyContent: 'center',
    marginRight: 8,
  },

});
