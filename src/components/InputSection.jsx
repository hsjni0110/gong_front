import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Option from './Option';
import { departmentInfo, divisionInfo, gradeInfo, pointInfo, yearInfo, semesterInfo } from '../data/categoryInfo';
import { Button, Input, Menu } from 'semantic-ui-react';
import { Icon } from 'semantic-ui-react';
import axios from 'axios';


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

  const [ department, setDepartment ] = useState("전체");
  const [ grade, setGrade ] = useState("전체");
  const [ division, setDivision ] = useState("전체");
  const [ point, setPoint ] = useState("전체");
  const [ year, setYear ] = useState("전체");
  const [ semester, setSemester ] = useState("전체");

  const [ inputData, setInputData ] = useState("전체");

  const handleSearchBar = (e) => {
    e.preventDefault();
    setInputData(e.target.value);
  };
  
  // 데이터 전송
  const onSubmitData = async (e) => {
    e.preventDefault();
    let url = "http://"+process.env.REACT_APP_SERVER_HOST+":"+process.env.REACT_APP_SERVER_PORT+"/api/subject/subjects";
    console.log(url)

    try {
      const data = await axios.post(url,{
      "year": year,
      "semester" : semester,
      "name": inputData,
      "department": department,
      "grade" : grade,
      "division" : division,
      "point" : point
      })
      console.log(data);
    } catch(error) {
      console.log(error);
    }
  };

    useEffect(() => {
     setDepartment("전체");
     setGrade("전체")
     setDivision("전체")
     setPoint("전체");
    },[])


  return (
    <div style={{ width: "100%", height: "200px", backgroundColor: "#F7F8FA", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", paddingTop: "1em", }}>
      <div style={{ display: "flex", gap: "2em"}}>
        <Option optionData={departmentInfo} setOption={setDepartment} />
        <Option optionData={gradeInfo} setOption={setGrade} />
        <Option optionData={divisionInfo} setOption={setDivision}/>
        <Option optionData={pointInfo} setOption={setPoint}/>
        <Option optionData={yearInfo} setOption={setYear}/>
        <Option optionData={semesterInfo} setOption={setSemester}/>
        
      </div>

      <SearchBar>
        <Input size="massive" type='text' placeholder='과목명...' action>
          <input onChange={handleSearchBar}/>
          <Button type='submit' onClick={onSubmitData}>Search</Button>
        </Input>
        <Icon name='question circle' size='huge' color='grey' />
      </SearchBar>
    </div>
  )
}
export default InputSection;
