import React from 'react'
import styled from 'styled-components'

function Layout(props) {
    return (
        <Container>
            {props.children}
        </Container>
    )
}
const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

export default Layout