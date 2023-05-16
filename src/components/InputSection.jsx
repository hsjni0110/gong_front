import React from 'react'
import styled from 'styled-components';


const Options = styled.div`
  width: auto%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px;
  padding-top :20px;
  gap: 40px;
`
const Option = styled.div`
  width: 10%;
  height: 100%;
  background: #FFFFFF;
  box-shadow: 0px 2px 5px rgba(38, 51, 77, 0.03);
  border-radius: 10px;
`

const SearchBar = styled.div`
  width: auto;
  height: 100%;
  padding : 20px;
  padding-right: 30rem;
  padding-left: 30rem;
  display: flex;
  flex-direction : row;
  gap : 20px;
`;

const Search = styled.input`
  width: 80%;
  height: 100%;
  border: 1px solid #D0D5DD;
  border-radius: 8px;
`;

const Info = styled.div`
  width: 20%;
  height: 100%;
  background-color: white;
`;
const InputSection= () => {
  return (
    <div style={{ width : "100%", height: "200px", backgroundColor:"#F7F8FA", display: "flex", flexDirection: "column"}}>
        <Options>
          <Option />
          <Option />
          <Option />
          <Option />
        </Options>

        <SearchBar>
          <Search />
          <Info />
        </SearchBar>
    </div>
  )
}
export default InputSection;
