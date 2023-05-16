import React from 'react'
import TitleComponent from './TitleComponent'
import SugangInfo from './SugangInfo'
import styled from 'styled-components';

const Container = styled.div`
    display : flex;
    flex-direction : row;
    height: 10em;
    gap: 5em;
`

const Component = () => {
  return (
    <Container>
        <TitleComponent />

        <SugangInfo />
    </Container>
  )
}

export default Component