import React, { useState, useEffect } from 'react'
import { Button, Card, Grid, Header, Icon, Image, Modal, Progress } from 'semantic-ui-react'
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { modalState, gyoGong, gyoIl, gyoJun, gyoHak, junGi, junHak, junSim, ilSun, miSulsang } from '../state/state';  
import { styled } from 'styled-components';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap : 20px;
  row-gap : 1px;
  padding-right: 10px;
  padding-left: 10px;
`
// 교양 세부의 행이 4개라서 자꾸 넘어가길래 만들어봤는데 잘 안됨. row-gap, gap, grid-gap 다 안됨.^^ㅣ발
// const NarrowGridContainer = styled.div`
//   display: grid;
//   row-gap : 1px;
// `

const GridLeft = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
`

const MisulsangGrid = styled.div`
  display: grid;
  grid-template-columns : repeat(5, 1fr);
`

function ModalSection({ open, onClose }) {
  // 호버링이랑 card 조건부 렌더링용 변수들
  const setModal = useSetRecoilState(modalState);
  const [ junhovering, setJunHovering ] = useState(false);
  const [ gyohovering, setGyoHovering ] = useState(false);
  const [ showjun, setShowJun ] = useState(false);
  const [ showgyo, setShowGyo ] = useState(false);

  // 현재 이수 학점: 과목 담으면 증가해야돼서 recoil사용.
  const gyogong = useRecoilValue(gyoGong);
  const gyohak = useRecoilValue(gyoHak);
  const gyojun = useRecoilValue(gyoJun);
  const gyoil = useRecoilValue(gyoIl);
  const jungi = useRecoilValue(junGi);
  const junhak = useRecoilValue(junHak);
  const junsim = useRecoilValue(junSim);
  const ilsun = useRecoilValue(ilSun);
  const misulsang = useRecoilValue(miSulsang);
  const [ jungong, setJungong ] = useState(jungi+junhak+junsim);
  const [ gyoyang, setGyoyang ] = useState(gyogong+gyohak+gyojun+gyoil);
  const [ total, setTotal ] = useState(jungong + gyoyang + ilsun);

  // 전체 이수 학점: 가변적인 값이 아니라서 state 안씀
  const ggtotal = 8.0;
  const ghtotal = 9.0;
  const gjtotal = 9.0;
  const gitotal = 10.0;
  const gyototal = ggtotal + ghtotal + gjtotal + gitotal;
  const jgtotal = 18.0;
  const jhtotal = 26.0;
  const jstotal = 46.0;
  const juntotal = jgtotal + jhtotal + jstotal;
  const iltotal = 4.0;
  const tototal = gyototal + juntotal + iltotal;

  const showJungong = () => {
    setShowJun(!showjun);
    !showjun ? setShowGyo(false) : setShowGyo(showgyo);
  };

  const showGyoyang = () => {
    setShowGyo(!showgyo);
    !showgyo ? setShowJun(false) : setShowJun(showjun);
  };

  // total까지 전역으로 할 필요 없을 거 같아서 이렇게 함
  useEffect(() => {
    setJungong(jungi+junhak+junsim);
    setGyoyang(gyogong+gyohak+gyojun+gyoil)
    setTotal(jungi+junhak+junsim+gyogong+gyohak+gyojun+gyoil)
  },[gyogong,gyohak,gyojun,gyoil,jungi,junhak,junsim]);

  const decToPercent = (dec) => {
    return Math.round(dec * 100);
  };

  // 일선 추가, 
  return (
    <Modal open={open} onClose={onClose}>
      <Modal.Header>나의 자가진단</Modal.Header>
      <Modal.Content>
        <GridContainer>
          <GridLeft>
            <div>
              <div>전공</div>
              <div style={{ display: "flex", flexDirection: "row", gap:"5px" }}>
                <Progress style={{ flex: "1" }} percent={decToPercent(jungong/juntotal)} color={decToPercent(jungong/juntotal) < 100 ? 'grey' : 'green' } indicating progress/>
                <Icon name='zoom-in' size='big' color={junhovering ? 'green' : 'black'} onClick={showJungong}
                onMouseOver={() => setJunHovering(true)} onMouseOut={() => setJunHovering(false)} style = {{cursor: 'pointer'}} />
              </div>
            </div>
            <div>
              <div>교양</div>
              <div style={{ display: "flex", flexDirection: "row", gap:"5px" }}>
                <Progress style={{ flex: "1"}} percent={decToPercent(gyoyang/gyototal)} color={decToPercent(jungong/juntotal) < 100 ? 'grey' : 'green'} indicating progress/>
                <Icon name='zoom-in' size='big' color={gyohovering ? 'green' : 'black'} onClick={showGyoyang}
                onMouseOver={() => setGyoHovering(true)} onMouseOut={() => setGyoHovering(false)} style = {{cursor: 'pointer'}} />
              </div>
            </div>
            <div>
              <div>일선</div>
              <div style={{ display: "flex", flexDirection: "row", gap:"5px" }}>
                <Progress style={{ flex: "1" }} percent={decToPercent(ilsun/iltotal)} color={decToPercent(jungong/juntotal) < 100 ? 'grey' : 'green'} indicating progress/>
                <Icon style={{color: 'white'}} name='zoom-in' size='big' />
              </div>
            </div>
            <div style={{ margin: "5px", display: "flex", flexDirection: "column", gap: "5px" }}>
              <h>미설상</h>
              <MisulsangGrid>
                <Icon color={0 < misulsang ? 'blue' : 'grey'} name="check circle outline" size='huge' />
                <Icon color={1 < misulsang ? 'blue' : 'grey'} name="check circle outline" size='huge' />
                <Icon color={2 < misulsang ? 'blue' : 'grey'} name="check circle outline" size='huge' />
                <Icon color={3 < misulsang ? 'blue' : 'grey'} name="check circle outline" size='huge' />
                <Icon color={4 < misulsang ? 'blue' : 'grey'} name="check circle outline" size='huge' />
              </MisulsangGrid>
            </div>
          </GridLeft>

          {/* 조건부 렌더링 */}
          {showjun ? (
            <Card style={{ width: "100%", padding: "10px" }}>
              <div style={{ paddingBottom: "10px" }}>
              <Card.Header>전공 세부</Card.Header>
              </div>
        
              <Card.Content>
                <Grid rows={3}>
                  <Grid.Row style={{ display: "flex", flexDirection: "column" }}>
                    <div>전공 기초</div>
                    <Progress percent={decToPercent(jungi/jgtotal)} color={decToPercent(jungong/juntotal) < 100 ? 'grey' : 'green'} indicating progress />
                  </Grid.Row>
                  <Grid.Row style={{ display: "flex", flexDirection: "column" }}>
                    <div>전공 핵심</div>
                    <Progress percent={decToPercent(junhak/jhtotal)} color={decToPercent(jungong/juntotal) < 100 ? 'grey' : 'green'} indicating progress />
                  </Grid.Row>
                  <Grid.Row style={{ display: "flex", flexDirection: "column" }}>
                    <div>전공 심화</div>
                    <Progress percent={decToPercent(junsim/jstotal)} color={decToPercent(jungong/juntotal) < 100 ? 'grey' : 'green'} indicating progress />
                  </Grid.Row>
                </Grid>
              </Card.Content>
      
            </Card>
            ) : null
          }

          {showgyo ? (
            <Card style={{ width: "100%", padding: "10px" }}>
              <div style={{ paddingBottom: "10px"}}>
                <Card.Header>교양 세부</Card.Header>
              </div>
              <Card.Content>
                <Grid rows={4}>
                  <Grid.Row style={{ display: "flex", flexDirection: "column" }}>
                    <div>공통 기초 교양</div>
                    <Progress percent={decToPercent(gyogong/ggtotal)} color={decToPercent(jungong/juntotal) < 100 ? 'grey' : 'green'} indicating progress/>
                  </Grid.Row>
                  <Grid.Row style={{ display: "flex", flexDirection: "column" }}>
                    <div>교양 핵심</div>
                    <Progress percent={decToPercent(gyohak/ghtotal)} color={decToPercent(jungong/juntotal) < 100 ? 'grey' : 'green'} indicating progress/>
                  </Grid.Row>
                  <Grid.Row style={{ display: "flex", flexDirection: "column" }}>
                    <div>교양 일반</div>  
                    <Progress percent={decToPercent(gyoil/gitotal)} color={decToPercent(jungong/juntotal) < 100 ? 'grey' : 'green'} indicating progress/>
                  </Grid.Row>
                  <Grid.Row style={{ display: "flex", flexDirection: "column" }}>
                    <div>전문 기초 교양</div>
                    <Progress percent={decToPercent(gyojun/gjtotal)} color={decToPercent(jungong/juntotal) < 100 ? 'grey' : 'green'} indicating progress/>
                  </Grid.Row>
                </Grid>
              </Card.Content>
            </Card>
            ) : null
          }

        </GridContainer>
        <div style={{ paddingRight: "10px", paddingLeft: "10px", marginTop: "10px" }}>
          <div>졸업까지</div>
          <Progress percent={decToPercent(total/tototal)} color={decToPercent(jungong/juntotal) < 100 ? 'grey' : 'green'} indicating progress/>
        </div>
      </Modal.Content>
      <Modal.Actions>
        <Button
          content="확인"
          labelPosition='right'
          icon='checkmark'
          onClick={() => setModal(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
};

export default ModalSection

// state에서 default 바꾸다가 가끔 졸업까지 부분에서 값이 튀는 경우가 있었다. 나중에 백엔드랑 연동하면 실험해볼 것.