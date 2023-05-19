import React from 'react'
import styled from 'styled-components';
import Option from './Option';
import { departmentInfo, divisionInfo, gradeInfo, pointInfo, yearInfo } from '../data/categoryInfo';
import { Button, Input, Menu } from 'semantic-ui-react';
import { Icon } from 'semantic-ui-react';


const Options = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px;
  padding-top :20px;
  gap: 40px;
`


const SearchBar = styled.div`
  width: auto;
  height: 50%;
  padding : 20px;
  padding-right: 30rem;
  padding-left: 30rem;
  display: flex;
  flex-direction : row;
  gap : 20px;
  justify-content: center;
`;



const Info = styled.div`
  width: 20%;
  height: 100%;
  background-color: white;
`;
const InputSection = () => {
  return (
    <div style={{ width: "100%", height: "200px", backgroundColor: "#F7F8FA", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", paddingTop: "1em", }}>
      <div style={{ display: "flex", gap: "2em"}}>
        <Option optionData={departmentInfo} />
        <Option optionData={gradeInfo} />
        <Option optionData={divisionInfo} />
        <Option optionData={pointInfo} />
        <Option optionData={yearInfo} />

      </div>

      <SearchBar>
        <Input size="massive" type='text' placeholder='과목명...' action>
          <input />
          <Button type='submit'>Search</Button>
        </Input>
        <Icon name='question circle' size='huge' color='grey' />
      </SearchBar>
    </div>
  )
}
export default InputSection;
