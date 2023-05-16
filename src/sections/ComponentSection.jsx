import React from 'react'
import Component from '../components/Component'
import styled from 'styled-components';


const ComponentContainer = styled.div`
    display: flex;
    flex-direction : column;
    gap : 5rem;
    margin-top : 5em;
`

export const ComponentSection = () => {
  return (
    <ComponentContainer>
        <Component />
        <Component />
        <Component />
    </ComponentContainer>
  )
}
