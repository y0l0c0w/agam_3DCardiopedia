import * as React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Button,
  Image,
} from 'react-native';
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
      <View style={styles.container}>
        <View style={styles.welcome}>
          {/*Sets logo/welcome space*/}
          <View style={{flex: 2}}>
            <View style={{flexDirection: 'row'}}>
              {/*Sets logo space*/}
              <View style={{flex: 1}}>
                <Image
                  style={{
                    width: 90,
                    height: 90,
                  }}
                  source={require('Cardiopedia\\logo-circle.png')}
                />
              </View>
              {/*Sets welcome space*/}
              <View style={{flex: 3, alignItems: 'center', paddingTop: 5}}>
                <Text style={styles.welcomeText}>
                  Welcome to 3D Cardiopedia!
                </Text>
              </View>
            </View>
          </View>
          {/*Sets welcome description space*/}
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={{textAlign: 'center'}}>
              3D Cardiopedia aims to provide the most anatomically accurate
              depictions of congenital heart disease at the touch of your
              fingers.
            </Text>
          </View>
        </View>
        <View style={styles.gray}>
          {/*Sets header space*/}
          <View style={{flex: 2}}>
            <Text style={styles.portalText}>Patient Portal</Text>
          </View>
          {/*Sets description space*/}
          <View style={{flex: 5, paddingTop: 2, paddingBottom: 2}}>
            <Text>Patient portal description</Text>
          </View>
          {/*Sets button space*/}
          <View style={{flex: 3}}>
            <Button
              title="Go to patient portal"
              onPress={() => this.props.navigation.navigate('PatientPortal')}
            />
          </View>
        </View>
        <View style={styles.white}>
          {/*Sets header space*/}
          <View style={{flex: 2}}>
            <Text style={styles.portalText}>Library</Text>
          </View>
          {/*Sets description space*/}
          <View style={{flex: 5, paddingTop: 2, paddingBottom: 2}}>
            <Text>Library description</Text>
          </View>
          {/*Sets button space*/}
          <View style={{flex: 3}}>
            <Button
              title="Go to library"
              onPress={() => this.props.navigation.navigate('Library')}
            />
          </View>
        </View>
        <View style={styles.gray}>
          {/*Sets header space*/}
          <View style={{flex: 2}}>
            <Text style={styles.portalText}>Care Team Portal</Text>
          </View>
          {/*Sets description space*/}
          <View style={{flex: 5, paddingTop: 2, paddingBottom: 2}}>
            <Text>Care team portal description</Text>
          </View>
          {/*Sets button space*/}
          <View style={{flex: 3}}>
            <Button
              title="Go to care team portal"
              onPress={() => this.props.navigation.navigate('CareTeamPortal')}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  welcome: {
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    flex: 28,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  white: {
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    flex: 24,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  gray: {
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    flex: 24,
    flexDirection: 'column',
    backgroundColor: '#d9d9d9',
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  portalText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'left',
  },
});
