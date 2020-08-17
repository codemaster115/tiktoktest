import React, {useState} from 'react'

import {StatusBar} from 'react-native'
import styled from 'styled-components/native'

import Header from '../components/Header'
import Tabs from '../components/Tabs'
import Main from '../components/Main'
import Commnets from '../components/Comments'

const Container = styled.View`
	flex: 1;
	background: transparent;
`

import api from '../../services/api'

const Home = () => {
 const [showComment, setShowComment] = useState(false) 
 console.log('showComment',showComment)
	return (
		<>
			 <StatusBar
				translucent
				backgroundColor='transparent'
				barStyle='light-content'
			/>
		  <Container>
          <Header />
					<Main videos={api} setShowComment={setShowComment} />
          <Tabs />       
					{/* {showComment && <Commnets setShowComment={setShowComment} />} */}
			</Container> 
		</>
	)
}

export default Home
