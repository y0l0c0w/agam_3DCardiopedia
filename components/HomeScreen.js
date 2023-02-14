import * as React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Dimensions} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {Fragment} from 'react';

const Dev_Height = Dimensions.get('screen').height;
const Dev_Width = Dimensions.get('screen').width;

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: 'Home',
    };
  }
  render() {
    return (
      <SafeAreaView styles={styles.container}>
        <View>
          <Picker
            selectedValue={this.state.selectedValue}
            style={{height: 30, width: Dev_Width}}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({selectedValue: itemValue})
            }
            itemStyle={{
              backgroundColor: '#505050',
              color: '#ffffff',
              fontSize: 15,
            }}>
            <Picker.Item
              label="Home"
              value={this.props.navigation.navigate('HomeScreen')}
            />
            <Picker.Item
              label="Patient Portal"
              value={this.props.navigation.navigate('PatientPortal')}
            />
            <Picker.Item label="Care Team Portal" value="care team portal" />
            <Picker.Item label="Library" value="library" />
          </Picker>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: Dev_Height,
    width: Dev_Width,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
});
