import React, { useState } from 'react'
import InputSection from '../components/InputSection';
import { ComponentSection } from './ComponentSection';
import { Header, Icon } from 'semantic-ui-react';
import SelectOption from '../components/SelectOption';
import { searchState } from '../state/state';
import { useRecoilValue } from 'recoil';
import chacha from '../assets/image/chacha.png';
import { styled } from 'styled-components';
const ChaChaImg = styled.img`
  
`;

const Home = () => {

  const search = useRecoilValue(searchState);

  return (
    <div style={{ paddingTop: "100px", paddingLeft: "100px", paddingRight: "100px" }}>
      <div style={{ fontFamily: "SEBANG_Gothic_Bold", fontSize: "xx-large", marginBottom: "2em" }}>CNU 수강 풍월도</div>
      <InputSection />
      <SelectOption />
      {
        search ? (
          <ComponentSection />
        ) : (
          <div style={{ border: "1px solid gray", paddingTop: "5em", paddingBottom: "5em", marginBottom: "5em", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", gap:"2em" }}>
            <ChaChaImg src={chacha} />
            <div>
              <h1 style={{fontFamily: "SEBANG Gothic", color:"#393E41"}}>[사용 방법]</h1>
              <h3 style={{fontFamily: "SEBANG Gothic", color:"#393E41"}}>! 찾으려는 과목명, 학과, 학년, 구분, 학점, 년도, 학기, 검색어를 입력하고 Search 버튼을 눌러주세요</h3>
              <h3 style={{fontFamily: "SEBANG Gothic", color:"#393E41"}}>! 따로 입력하지 않는다면, 전체 검색 입니다!</h3>
              <h3 style={{fontFamily: "SEBANG Gothic", color:"#393E41"}}>! Search 버튼 옆에 있는 ! 버튼을 누르게 되면 현재 학생의 자가진단을 도와줘요</h3>
              <h3 style={{fontFamily: "SEBANG Gothic", color:"#393E41"}}>! 수강 목록안에 담은 과목들은 자가 진단 현황에 추가됩니다!</h3>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Home;