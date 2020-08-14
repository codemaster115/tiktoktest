import React from 'react'

import styled from 'styled-components/native'

type Props = {
  bold: String; 
}

const Container = styled.View`
	top: 22px;
	width: 100%;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	position: absolute;
  z-index: 1;
`
const Menu = styled.Text`
	color: #fff;
	letter-spacing: 0.8px;
  margin: 11px 12px;
  font-weight: bold;
  opacity: 1;
  font-size: 16px;
  font-weight: normal;
	opacity: 0.8;
	font-size: 15px;
  `
const MenuBold = styled.Text`
	color: #fff;
	letter-spacing: 0.8px;
  margin: 11px 12px;
  font-weight: bold;
  opacity: 1;
  font-size: 16px;
  font-weight: bold;
	opacity: 1;
	font-size: 16px;
  `

const Separator = styled.View`
	width: 1px;
	height: 13px;
	background-color: #d8d8d8;
	opacity: 0.6;
`

const Header = () => {
	return (
		<Container>
			<Menu>Following</Menu>
			<Separator />
			<MenuBold>For You</MenuBold>      
		</Container>
	)
}

export default Header
