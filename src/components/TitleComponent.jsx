import React from 'react'
import { Card, Divider, Grid, Icon, Image, Item, Segment, Statistic } from 'semantic-ui-react'

const TitleComponent = () => {
  return (

    <Card style={{ height: "100%", width: "100%" }}>
      <Card.Content textAlign='center' style={{ fontSize: "1.5em" }}>
        <Card.Header>컴퓨터 프로그래밍</Card.Header>
      </Card.Content>

      <Card.Content>
        <Grid columns={2} divided>
          <Grid.Column>
            <Item name="write" />
            <p>2022 / 1학기</p>
          </Grid.Column>
          <Grid.Column>
            <p>3/2/2 상대평가</p>
          </Grid.Column>
        </Grid>
      </Card.Content>
      <Card.Content>
        <Grid columns={2} divided>
          <Grid.Column>
            <Item name="write" />
            <p>컴퓨터 융합 학부</p>
          </Grid.Column>
          <Grid.Column>
            <p>전공(핵심)</p>
          </Grid.Column>
        </Grid>
      </Card.Content>

      <Card.Content>
        <Grid columns={2} divided>
        <Grid.Column>
          <Icon name='like' size='big'/>
        </Grid.Column>
        
        <Grid.Column>
          <Statistic label='Like' size='mini' value='5,550' />
        </Grid.Column>
        </Grid>

      </Card.Content>
        

    </Card>
  )
}

export default TitleComponent