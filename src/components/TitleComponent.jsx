import React, { useEffect, useState } from 'react'
import { Card, Divider, Grid, Icon, Image, Item, Label, Segment, Statistic } from 'semantic-ui-react'

const TitleComponent = (component) => {
  return (

    <Card style={{ height: "100%", width: "100%" }}>
      <Card.Content textAlign='center' style={{ fontSize: "1.5em" }}>
        <Card.Header>{component.component.OPEN_SBJT_NM} - {component.component.OPEN_DCLSS} 분반</Card.Header>
      </Card.Content>

      <Card.Content>
        <Grid columns={2} divided>
          <Grid.Column>
            <Item name="write" />
            <p>{component.component.OPEN_YR} / {component.component.SHTM}</p>
          </Grid.Column>
          <Grid.Column>
            <p>{component.component.PNT} / {component.component.THEO_TMCNT} / {component.component.PRAC_TMCNT}</p>
          </Grid.Column>
        </Grid>
      </Card.Content>
      <Card.Content>
        <Grid columns={2} divided>
          <Grid.Column>
            <Item name="write" />
            <p>{component.component.DEGR_NM_SUST}</p>
          </Grid.Column>
          <Grid.Column>
            <p>{component.component.CPTN_DIV_NM}</p>
          </Grid.Column>
        </Grid>
      </Card.Content>

      <Card.Content>
        <Grid columns={2} divided>
        <Grid.Column>
          <Icon name='like' size='big'/>
        </Grid.Column>
        
        <Grid.Column>
          <Statistic label='Like' size='mini' value={component.component.likeCount} />
        </Grid.Column>
        </Grid>

      </Card.Content>
        

    </Card>
  )
}

export default TitleComponent