import React from 'react'

import {StatusBar} from 'react-native'
import styled from 'styled-components/native'

import Header from '../components/Header'
import Tabs from '../components/Tabs'

const Container = styled.View`
	flex: 1;
	background: red;
`
const Home = () => {
	return (
		<>
			 <StatusBar
				translucent
				backgroundColor='transparent'
				barStyle='light-content'
			/>
		  <Container>
          <Header />
          <Tabs />       
			</Container> 
		</>
	)
}

export default Home
