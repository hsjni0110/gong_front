import React from 'react'
import InputSection from '../components/InputSection';
import { ComponentSection } from './ComponentSection';
import { Header, Icon } from 'semantic-ui-react';



const Home = () => {
  return (
    <div style={{ paddingTop: "100px", paddingLeft: "100px", paddingRight: "100px" }}>
        <div style={{ fontFamily: "SEBANG_Gothic_Bold", fontSize: "xx-large", marginBottom: "2em"}}>CNU 수강 풍월도</div>
        <InputSection />
        <ComponentSection />
    </div>
  )
}

export default Home;