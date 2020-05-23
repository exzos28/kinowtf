import React from 'react'

import styled from 'styled-components'
import { Logo } from './Logo'

export const Sidebar = () => {
    return (
        <Container>
            <Logo />
        </Container>
    )
}


const Container = styled.div`
    margin-top: 5px;
    margin-bottom: 32px;
`; 
