import React, { useEffect, useState } from 'react'
import ReactApexChart from "react-apexcharts";
import { Card, Grid, Icon, Statistic } from 'semantic-ui-react';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';
import { gyoGong, gyoHak, gyoIl, gyoJun, junGi, junHak, junSim, ilSun } from '../state/state';
import { useSetRecoilState } from 'recoil';

const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  width: 100%;
  height: 100%;
`;

const SugangDamgi = styled.div`
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const variants = {
  open: { scale: "1.2" },
  closed: { scale: "1" },
}

const SugangInfo = (component) => {

  const [isIn, setIsIn] = useState(false);

  const [backgroundColor, setBackgroundColor] = useState("#CCD7E4");
  const [IconColor, setIconColor] = useState("black");

  // 현재 과목 구분
  const [currentCptn, setCurrentCptn] = useState();

  // 현재 과목 학점
  const [currentPoint, setCurrentPoint] = useState();

  const [select, setSelect] = useState(false);

  useEffect(() => {
    setCurrentCptn(component.component.CPTN_DIV_NM);
    setCurrentPoint(component.component.PNT);
  },[component])



  useEffect(() => {
    if(select) {
      setBackgroundColor("#3A5683");
      setIconColor("yellow");
    } else {
      setBackgroundColor("#CCD7E4");
      setIconColor("black");
    }
  },[select])

  const setGyoGong = useSetRecoilState(gyoGong);
  const setGyoHak = useSetRecoilState(gyoHak);
  const setGyoIl = useSetRecoilState(gyoIl);
  const setGyoJun = useSetRecoilState(gyoJun);
  const setJunGi = useSetRecoilState(junGi);
  const setJunHak = useSetRecoilState(junHak);
  const setJunSim = useSetRecoilState(junSim);
  const setIlsun = useSetRecoilState(ilSun);

  // 수강 담기 시
  const onSugangDamgi = () => {

    if (!select) {
      if (currentCptn == "일반선택") {
        setIlsun((prev) => prev + currentPoint);
      }
      if (currentCptn == "교양(공통기초)") {
        setGyoGong((prev) => prev + currentPoint);
      }
      if (currentCptn == "교양(핵심)") {
        setGyoHak((prev) => prev + currentPoint);
      }
      if (currentCptn == "교양(일반)") {
        setGyoIl((prev) => prev + currentPoint);
      }
      if (currentCptn == "교양(전문기초)") {
        setGyoJun((prev) => prev + currentPoint);
      }
      if (currentCptn == "전공(기초)") {
        setJunGi((prev) => prev + currentPoint);
      }
      if (currentCptn == "전공(핵심)") {
        setJunHak((prev) => prev + currentPoint);
      }
      if (currentCptn == "전공(심화)") {
        setJunSim((prev) => prev + currentPoint);
      }

      setSelect(true);

    } else {
      if (currentCptn == "일반선택") {
        setIlsun((prev) => prev - currentPoint);
      }
      if (currentCptn == "교양(공통기초)") {
        setGyoGong((prev) => prev - currentPoint);
      }
      if (currentCptn == "교양(핵심)") {
        setGyoHak((prev) => prev - currentPoint);
      }
      if (currentCptn == "교양(일반)") {
        setGyoIl((prev) => prev - currentPoint);
      }
      if (currentCptn == "교양(전문기초)") {
        setGyoJun((prev) => prev - currentPoint);
      }
      if (currentCptn == "전공(기초)") {
        setJunGi((prev) => prev - currentPoint);
      }
      if (currentCptn == "전공(핵심)") {
        setJunHak((prev) => prev - currentPoint);
      }
      if (currentCptn == "전공(심화)") {
        setJunSim((prev) => prev - currentPoint);
      }

      setSelect(false);

    }
    
  }
  return (
    <Card style={{ height: "100%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center", }}>
      <Container>
        <Statistic style={{ margin: "auto"}} color='red'>
          <Statistic.Value>{component.component.sugangCount}</Statistic.Value>
          <Statistic.Label>수강신청 수</Statistic.Label>
        </Statistic>
        <SugangDamgi onMouseEnter={() => { setIsIn(true) }} onMouseLeave={() => { setIsIn(false) }} onClick={onSugangDamgi} backgroundColor={backgroundColor}>
          <motion.div animate={isIn? "open": "close"} variants={variants}>
            <Icon name="save outline" size='big' color={IconColor} />
          </motion.div>
        </SugangDamgi>
      </Container>


    </Card>
  )
}

export default SugangInfo