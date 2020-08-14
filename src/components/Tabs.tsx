import React from 'react'

import  LinearGradient  from 'react-native-linear-gradient'

// import  Icon  from 'react-native-vector-icons/dist/FontAwesome'

import styled from 'styled-components/native'

const Container = styled.View`
	height: 59px;
	width: 100%;
	position: absolute;
	bottom: 0;
	z-index: 1;
	border-top-width: 1px;
	border-top-color: rgba(255, 255, 255, 0.2);
	flex-direction: row;
 `
const Menu = styled.TouchableOpacity`
	width: 20%;
	height: 100%;
	justify-content: center;
	align-items: center;
`
const Icon = styled.Image.attrs({ resizeMode: 'contain' })`
	height: 32px;
`
const IconPlus = styled.Image.attrs({ resizeMode: 'contain' })`
	height: 20px;
`
const MenuText = styled.Text`
	font-size: 9px;
  margin-top: -3px;
  color: rgba(255,255,255,0.6);
  `
const MenuTextActive = styled.Text`
font-size: 9px;
margin-top: -3px;  
color: #fff;
`
const Button = styled.View`
	width: 36px;
	height: 28px;
	background: #fff;
	border-radius: 8px;
	justify-content: center;
	align-items: center;
`

export const Add = styled.View`
    width: 70%;
    padding: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-left-width: 4px;
    border-right-width: 4px;
    border-radius: 10px;
    border-left-color: #69C9D0;
    border-right-color: #EE1D52;
    background: #FFF;
`;

const Tabs = () => {
	return (
		<Container>
			<Menu>
				<Icon source={require('../assets/icons/home.png')} />
				<MenuTextActive>Home</MenuTextActive>        
			</Menu>
			<Menu>
				<Icon source={require('../assets/icons/discover.png')} />
				<MenuText>Discover</MenuText>
			</Menu>
      <Menu>
        <Add>
          <Button>
            <IconPlus source={require('../assets/icons/plus.png')} />
          </Button>
        </Add>
      </Menu>          
			<Menu>
				<Icon source={require('../assets/icons/message.png')} />
				<MenuText>Inbox</MenuText>
			</Menu>
			<Menu>
				<Icon source={require('../assets/icons/profile.png')} />
				<MenuText>Me</MenuText>
			</Menu>
		</Container>
	)
}

export default Tabs
