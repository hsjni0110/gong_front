import React, { useEffect, useState } from 'react'
import Component from '../components/Component'
import styled from 'styled-components';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { loadingState, subjectState } from '../state/state';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';

const ComponentContainer = styled.div`
    display: flex;
    flex-direction : column;
    gap : 5rem;
    margin-top : 5em;
`

export const ComponentSection = () => {
  const loading = useRecoilValue(loadingState);
  
  const data = useRecoilValue(subjectState);

  return (
    <ComponentContainer>
      {!loading?
        data.map((component) => (
          <Component component={component}/>
        )) : (
            <Dimmer active inverted>
              <Loader size="big" inverted>Loading</Loader>
            </Dimmer>
        )
      }
    </ComponentContainer>
  )
}
