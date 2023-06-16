import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Option from './Option';
import Modal from './ModalSection';
import { departmentInfo, divisionInfo, gradeInfo, pointInfo, yearInfo, semesterInfo } from '../data/categoryInfo';
import { Button, Input, Menu } from 'semantic-ui-react';
import { Icon } from 'semantic-ui-react';
import axios from 'axios';
import { useSetRecoilState, useRecoilState, useRecoilValue } from 'recoil';
import { subjectState, loadingState, modalState, searchState } from '../state/state';

const Options = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px;
  padding-top :20px;
  gap: 40px;
`;


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
  const [ year, setYear ] = useState("");
  const [ semester, setSemester ] = useState("");

  const [ inputData, setInputData ] = useState("");
  const [ validCheck, setVaildCheck ] = useState(false);
  const [ hovering, setHovering ] = useState(false);

  const setSubjectData = useSetRecoilState(subjectState);
  const setLoading = useSetRecoilState(loadingState);
  const [ openModal, setModal ] = useRecoilState(modalState);
  const search = useRecoilValue(searchState);
  const setSearchState = useSetRecoilState(searchState);

  const handleSearchBar = (e) => {
    e.preventDefault();
    setInputData(e.target.value);
  };
  
  // 데이터 전송
  const onSubmitData = async (e) => {
    
    setSearchState(true);

    

    setLoading(true)

    e.preventDefault();
    let url = "https://"+process.env.REACT_APP_SERVER_HOST+":"+process.env.REACT_APP_SERVER_PORT+"/api/subject/subjects";

    try {
      const data = await axios.post(url,{
      "year": year,
      "semester" : semester,
      "name": inputData,
      "department": department,
      "grade" : grade,
      "division" : division,
      "point" : point
      }, { withCredentials: true })
 

      setSubjectData(data.data);
      setLoading(false);

    } catch(error) {
      console.log(error);
    }

    
  };

  useEffect(() => {
    setLoading(true)
  },[search])

  useEffect(() => {
    setDepartment("전체");
    setGrade("전체")
    setDivision("전체")
    setPoint("전체");
  },[]);

  const iconColor = hovering ? 'yellow' : 'blue';

  return (
    <div style={{ width: "100%", height: "200px", backgroundColor: "#F7F8FA", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", paddingTop: "1em", }}>
      <div style={{ display: "flex", gap: "2em"}}>
        <Option optionData={departmentInfo} setOption={setDepartment} optionName="학과" />
        <Option optionData={gradeInfo} setOption={setGrade} optionName="학년"/>
        <Option optionData={divisionInfo} setOption={setDivision} optionName="구분"/>
        <Option optionData={pointInfo} setOption={setPoint} optionName="학점"/>
        <Option optionData={yearInfo} setOption={setYear} optionName="년도(*)"/>
        <Option optionData={semesterInfo} setOption={setSemester} optionName="학기(*)" />
        
      </div>

      <SearchBar>
        <Input size="massive" type='text' placeholder='과목명...' action>
          <input onChange={handleSearchBar}/>
          <Button type='submit' onClick={onSubmitData}>Search</Button>
        </Input>
       <Icon bordered inverted color={iconColor} name='exclamation' size='big' 
       onClick={() => setModal(true)} onMouseOver={() => setHovering(true)} onMouseOut={() => setHovering(false)} 
       style={{ borderRadius: "10px", cursor: "pointer" }}/> 
       <Modal open={openModal} onClose={() => setModal(false)}> </Modal>
      </SearchBar>
    </div>
  )
};

export default InputSection;