import React from 'react';
import { Button, View, Text, StyleSheet, Image, TextInput, Picker } from 'react-native';


export default class HomeScreen extends React.Component {
 state = {user: ''}
   updateUser = (user) => {
      this.setState({ user: user })
   }
  render() {
    return (
    <View style={styles.container}>
	  	<Image
	      		source={require('../media/img/logo.png')}
	      		style={styles.logo}
		/>
	     <TextInput
	        style={styles.input}
	        onChangeText={(text) => this.setState({text})}
	        placeholder="Nama Siswa"
		/>
	    <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser}>
               <Picker.Item label = "Steve" value = "steve" />
               <Picker.Item label = "Ellen" value = "ellen" />
               <Picker.Item label = "Maria" value = "maria" />
            </Picker>
            <Text style = {styles.text}>{this.state.user}</Text>	

        <Button
	          title="Login"
	          onPress={() => this.props.navigation.navigate('Details')}
        />

    </View>
    );
  }
}

const styles = StyleSheet.create({
	
	container:{
		flex: 1,
		alignItems: 'center',
	},

	logo:{
		width: 200,
		height: 210,
		justifyContent: 'flex-start',
		marginTop: 20
	},

	input:{
		height: 40,
		width: 200, 
		borderColor: 'gray', 
		borderWidth: 1,
		margin: 20,
	}
});