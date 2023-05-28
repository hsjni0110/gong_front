import React, { useState } from 'react'
import { Button, Card, Grid, Header, Icon, Image, Modal, Progress } from 'semantic-ui-react'
import { useSetRecoilState } from 'recoil';
import { modalState } from '../state/state';
import { styled } from 'styled-components';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap : 20px;
  padding-right: 10px;
  padding-left: 10px;
`
const GridLeft = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
`

const MisulsangGrid = styled.div`
  display: grid;
  grid-template-columns : repeat(5, 1fr);
`
function ModalSection({ open, onClose }) {
  const setModal = useSetRecoilState(modalState);

  return (
    <Modal open={open} onClose={onClose}>
      <Modal.Header>나의 자가진단</Modal.Header>
      <Modal.Content>
        <GridContainer>
          <GridLeft>
            <div>
              <div>전공</div>
              <div style={{ display: "flex", flexDirection: "row", gap:"5px" }}>
                <Progress style={{ flex: "1" }} percent={33} />
                <Icon name='zoom-in' size='big' color='black'/>
              </div>
            </div>
            <div>
              <div>교양</div>
              <div style={{ display: "flex", flexDirection: "row", gap:"5px" }}>
                <Progress style={{ flex: "1" }} percent={33} />
                <Icon name='zoom-in' size='big' color='black'/>
              </div>
            </div>
            <div style={{ margin: "5px", display: "flex", flexDirection: "column", gap: "5px" }}>
              <h>미설상</h>
              <MisulsangGrid>
                <Icon name="check circle outline" size='huge' color='grey' />
                <Icon name="check circle outline" size='huge' color='grey' />
                <Icon name="check circle outline" size='huge' color='grey' />
                <Icon name="check circle outline" size='huge' color='grey' />
                <Icon name="check circle outline" size='huge' color='grey' />
              </MisulsangGrid>
            </div>
          </GridLeft>

          <Card style={{ width: "100%", padding: "10px" }}>
            <div style={{ paddingBottom: "10px" }}>
              <Card.Header>전공 세부</Card.Header>
            </div>
            <Card.Content>
              <Grid rows={3}>
                <Grid.Row style={{ display: "flex", flexDirection: "column" }}>
                  <div>전공 기초</div>
                  <Progress percent={20} />
                </Grid.Row>
                <Grid.Row style={{ display: "flex", flexDirection: "column" }}>
                  <div>전공 핵심</div>
                  <Progress percent={20} />
                </Grid.Row>
                <Grid.Row style={{ display: "flex", flexDirection: "column" }}>
                  <div>전심</div>
                  <Progress percent={20} />
                </Grid.Row>
              </Grid>

            </Card.Content>
          </Card>
        </GridContainer>
        <div style={{ paddingRight: "10px", paddingLeft: "10px", marginTop: "10px" }}>
          <div>졸업까지</div>
          <Progress percent={30} />
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