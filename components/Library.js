import * as React from 'react';
import {
  View,
  Button,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image,
  FlatList,
  StatusBar,
  TouchableOpacity,
  TextInput,
  ScrollView,
  RefreshControl,
} from 'react-native';

const Dev_Height = Dimensions.get('screen').height;
const Dev_Width = Dimensions.get('screen').width;

export default class Library extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <SafeAreaView styles={styles.container}>
        <View>
          <Button
            title="Go to home screen"
            onPress={() => this.props.navigation.navigate('HomeScreen')}
          />
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
    backgroundColor: '#222222',
  },
});
