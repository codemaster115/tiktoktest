import React, {useState, useEffect} from 'react'
import  Video from 'react-native-video'
import styled from 'styled-components/native'

type Props = {
	video: any,
	isPlay: boolean
}

const Poster = styled.ImageBackground`
	height: 100%;
`
const VideoPlayer = (props: Props) => {
	return(	<Video
			rate={1.0}
			volume={1.0}
			muted={false}
			controls={false}
			 poster={"https://homepages.cae.wisc.edu/~ece533/images/airplane.png"}
			source={props.video}
			resizeMode='cover'
			style={{height: '100%'}}
		/>)	
}

export default VideoPlayer
