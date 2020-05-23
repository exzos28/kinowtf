import React from 'react'
import styled from 'styled-components'

import { VideoList } from './VideoList'

export const SectionVideoList = ({ title, data }) => {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <HeaderLink href="#">См.все</HeaderLink>
      </Header>
      <VideoList data={data} />
    </Container>
  )
}

const HeaderLink = styled.a`
  color: #0d84fb;
  font-size: 15px;
  font-weight: 500;
  font-family: 'SF UI Display', sans-serif;
  text-decoration: none;
  margin-bottom: 22px;
  line-height: 20px;
  float: right;
  &:hover {
    text-decoration: underline;
  }
`

const Container = styled.div`
  margin-bottom: 50px;
`
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Body = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const Title = styled.h2`
  margin: 0;
  color: #f0f0f0;
  font-size: 24px;
  line-height: 20px;
  font-weight: 500;
  font-family: 'SF UI Display', sans-serif;
  text-decoration: none;
  margin-bottom: 30px;
`
