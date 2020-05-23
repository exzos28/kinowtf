import React from 'react'
import styled from 'styled-components'

export const Button = ({ children, onClick }) => {
    return (
        <Container onClick={onClick}>
            {children}
        </Container>
    )
}

const Container = styled.button`
    border: none;
    cursor: pointer;
    background: #272729;
    color: #999999;
    padding: 10.5px 60px;
    border-radius: 8px;
    &:hover {
        background: #313033;
        color: #f0f0f0;
        border-radius: 8px;
    }
`