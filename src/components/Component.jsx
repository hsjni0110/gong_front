import React from 'react'
import TitleComponent from './TitleComponent'
import SugangInfo from './SugangInfo'
import styled from 'styled-components';
import { Grid, Item } from 'semantic-ui-react';

const Container = styled.div`
    display : flex;
    flex-direction : row;
    height: fit-content;
    gap: 5em;
`

const Component = (component) => {
  
  return (
    <Grid columns="2">
      <Grid.Row stretched>
        <Grid.Column width={10}>
          <TitleComponent component={component.component}/>
        </Grid.Column>
  
        <Grid.Column width={6}>
          <SugangInfo component={component.component} />
        </Grid.Column>

      </Grid.Row>
    </Grid>
  )
}

export default Component