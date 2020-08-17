import React, {Component} from 'react';
import styled from 'styled-components/native'

const Container = styled.View`
  flex: 1;
	justify-content: flex-end;
  margin: 0 0 70px 13px;
  background-color: white; 
  height: 50%;
  width: 100%;
  position: absolute;
	bottom: 0;
  right: 0;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`

const CommentTitle = styled.View`  
  height: 30px;
	justify-content: flex-end;
  background-color: black;  
  top: 0;
  position: absolute;
`

const Comments = (setShowComment) => {
	return (
		<Container>
      <CommentTitle >


      </CommentTitle>
		</Container>
	)
}

export default Comments
