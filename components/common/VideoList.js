import React from 'react'
import styled from 'styled-components'

import { VideoCard } from './VideoCard'

export const VideoList = ({ data }) => (
  <Body>
    {data.map(videoData => <VideoCard key={videoData.id} {...videoData} />)}
  </Body>
)

const Body = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`