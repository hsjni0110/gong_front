import React from 'react'
import InputSection from '../components/InputSection';
import { ComponentSection } from './ComponentSection';


const Home = () => {
  return (
    <div style={{ paddingTop: "100px", paddingLeft: "100px", paddingRight: "100px" }}>
        <InputSection />

        <ComponentSection />
    </div>
  )
}

export default Home;