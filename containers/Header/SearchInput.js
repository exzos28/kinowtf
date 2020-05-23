import React from 'react'
import Router, { useRouter } from 'next/router'
import styled from 'styled-components'


export const SearchInput = () => {
    const router = useRouter()
    const handleChange = (e) => {
        const value = e.target.value
        Router.replace('/?search=' + value)
    }

    return (
        <Container>
            <Input defaultValue={router.query.search} onChange={handleChange} placeholder="Поиск по сайту" />
        </Container>
    )
}


const Container = styled.div`
    margin-top: 32px;
    margin-bottom: 32px;
`

const Input = styled.input`
    width: 100%;
    height: 50px;
    background: #2f2f2f;
    border: none;
    border-radius: 8px;
    font-size: 15px;
    color: #f0f0f0;
    outline: none;
    background-image: url(/icons/search.svg);
    background-repeat: no-repeat;
    background-position: 24px;
    background-size: 20px;
    padding: 0px 25px 0px 62px;
    &:focus {
        border: 2px solid #4f7096!important;
        padding: 0px 23px 0px 60px!important;
        background-position: 22px!important;
    }
`;
