import React from 'react';
import {
  StatusBar,
  AsyncStorage,
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  CheckBox
} from 'react-native-elements'
import Constants from 'expo-constants';
import { styles } from '../Styles/styles'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'


const PROTEIN_DATA = [
  {
    id: '1',
    title: 'Chicken',
    clicked: 0,
  },
  {
    id: '2',
    title: 'Turkey',
    clicked: 1,
  },
  {
    id: '3',
    title: 'Steak',
    clicked: 0,
  },
  {
    id: '4',
    title: 'Egg Whites',
    clicked: 1,
  },
  {
    id: '5',
    title: 'Salmon',
    clicked: 0,
  },
  {
    id: '6',
    title: 'Tofu',
    clicked: 0,
  },
];
const CARB_DATA = [
  {
    id: '1',
    title: 'Brown Rice',
    clicked: 1,
  },
  {
    id: '2',
    title: 'Pasta',
    clicked: 0,
  },
  {
    id: '3',
    title: 'Bread',
    clicked: 0,
  },
  {
    id: '4',
    title: 'White Rice',
    clicked: 0,
  },
  {
    id: '5',
    title: 'Candy',
    clicked: 0,
  },
  {
    id: '6',
    title: 'Sweet Potato',
    clicked: 1,
  },
];
const FAT_DATA = [
  {
    id: '1',
    title: 'Peanut Butter',
    clicked: 0,
  },
  {
    id: '2',
    title: 'Olive Oil',
    clicked: 1,
  },
  {
    id: '3',
    title: 'Avacado',
    clicked: 1,
  },
  {
    id: '4',
    title: 'Butter',
    clicked: 0,
  },
  {
    id: '5',
    title: 'Cheese',
    clicked: 0,
  },
  {
    id: '6',
    title: 'Dark Chocolate',
    clicked: 0,
  },
];

function Item({ title, clicked }) {
  return (
    <View style={clicked===0?local_styles.item1:local_styles.item2}>
      <Text style={local_styles.title}>{title}</Text>
    </View>
  );
}

export class PreferencesScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vegan: false,
      vegetarian: false,
      pescatarian: false,
      no_red_meat: false,
      no_pork: false,
      no_beef: false,
    };
  }

  static navigationOptions = {
    title: 'Set Food Preferences',
  };

    render() {
      return (
        <SafeAreaView style={styles.container}>
          <KeyboardAwareScrollView>
            <Text style={styles.central_subheader_text}>Dietary Restrictions</Text>
            <CheckBox
              title='Vegan'
              checked={this.state.vegan}
              checkedColor='#3b821b'
              onPress={() => 
                this.setState({vegan: !this.state.vegan})
              }
            />

            <CheckBox
              title='Vegetarian'
              checked={this.state.vegetarian}
              checkedColor='#3b821b'
              onPress={() => 
                this.setState({vegetarian: !this.state.vegetarian})
              }
            />

            <CheckBox
              title='Pescatarian'
              checked={this.state.pescatarian}
              checkedColor='#3b821b'
              onPress={() => 
                this.setState({pescatarian: !this.state.pescatarian})
              }
            />

            <CheckBox
              title='No Red Meat'
              checked={this.state.no_red_meat}
              checkedColor='#3b821b'
              onPress={() => 
                this.setState({no_red_meat: !this.state.no_red_meat})
              }
            />

            <CheckBox
              title='No Pork'
              checked={this.state.no_pork}
              checkedColor='#3b821b'
              onPress={() => 
                this.setState({no_pork: !this.state.no_pork})
              }
            />

            <CheckBox
              title='No Beef'
              checked={this.state.no_beef}
              checkedColor='#3b821b'
              onPress={() => 
                this.setState({no_beef: !this.state.no_beef})
              }
            />


            <Text style={styles.central_subheader_text}>Protein</Text>
            <FlatList
              data={PROTEIN_DATA}
              renderItem={({item}) =>
                <TouchableOpacity onPress={() => item.clicked=1} >
                  <Item title={item.title} clicked={item.clicked} />
                </TouchableOpacity>
              }
              keyExtractor={item => item.id}
            />

            <Text style={styles.central_subheader_text}>Carbs</Text>
            <FlatList
              data={CARB_DATA}
              renderItem={({item}) =>
                <TouchableOpacity onPress={() => item.clicked=1} >
                  <Item title={item.title} clicked={item.clicked} />
                </TouchableOpacity>
              }
              keyExtractor={item => item.id}
            />

            <Text style={styles.central_subheader_text}>Fats</Text>
            <FlatList
              data={FAT_DATA}
              renderItem={({item}) =>
                <TouchableOpacity onPress={() => item.clicked=1} >
                  <Item title={item.title} clicked={item.clicked} />
                </TouchableOpacity>
              }
              keyExtractor={item => item.id}
            />
            <Button title="Generate Meals" onPress={this._showMoreApp} />
          </KeyboardAwareScrollView>
        </SafeAreaView>
      );
    }

    _showMoreApp = () => {
      this.props.navigation.navigate('Detail');
    };

    _setGenerateMealsAsync = () => {
        this.props.navigation.navigate('App');
      };

    _goToMainAsync = () => {
        this.props.navigation.navigate('App');
      };
  }

const local_styles = StyleSheet.create({
  item1: {
    backgroundColor: '#419A1C',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  item2: {
    backgroundColor: '#00FF00',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
  },
});
