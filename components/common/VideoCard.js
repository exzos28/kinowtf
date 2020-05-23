import React from 'react'
import Link from 'next/link'

import styled from 'styled-components'


export const VideoCard = (props) => {
    return (
        <Link href='/watch/[pid]' as={`/watch/${props.kp_id}`} passHref>
            <Root>
                <ImageContainer>
                    <Image src={`https://st.kp.yandex.net/images/film_iphone/iphone360_${props.kp_id}.jpg`} />
                </ImageContainer>
                <TitleContainer>
                    <Title>{props.title}</Title>
                </TitleContainer>
            </Root>
        </Link>
    )
}

const Root = styled.a`
    text-decoration: none;
    width: calc(230px - 10px);
    margin-bottom: 50px;
    margin-right: 10px;
    margin-left: 10px;
    @media (max-width: 768px) {
        margin-left: 10px;
        margin-right: 10px;
        width: calc(210px - 10px);
        &:nth-child(2n + 1) {
            margin-left: 10px;
            margin-right: 10px;
        }
    } 
    @media (max-width: 500px) {
        margin: 0;
        &:nth-child(2n + 1) {
            margin-right: 10px;
        }
        flex-grow: 0;
        width: calc(50% - 10px);
        margin-bottom: 2vh;
    }

`

const ImageContainer = styled.div`
    overflow: hidden;
    position: relative;
    width: 100%;
    cursor: pointer;
    display: block;
    border-radius: 8px;
    border: 1px #373737 solid;
    background-position: center;
    padding-bottom: 133.333%;
    &:hover {
        border: 1px #0d84fb solid;
    }
`

const TitleContainer = styled.div`
   padding: 5px;
`

const Title = styled.h3`
    margin: 0;
    font-size: 14px;
    font-family: 'SF UI Display', sans-serif;
    text-decoration: none;
    color: #f0f0f0;
    font-weight: 500;
    font-size: 16px;
    @media (max-width: 425px) {
        font-size: 1.5vh;
    }
`

const Image = styled.img`
    left: 0;
    min-height: 100%;
    position: absolute;
    width: 100%;
`