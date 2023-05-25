import React, { useEffect, useState } from 'react'
import { Card, Divider, Grid, Icon, Image, Item, Label, Segment, Statistic } from 'semantic-ui-react'
import axios from 'axios'

const TitleComponent = (component) => {

  const [year, setYear] = useState("");
  const [semester, setSemester] = useState("");
  const [name, setName] = useState("");
  const [dclass, setDclass] = useState("");
  const [likes, setLikes] = useState("");

  useEffect(() => {
      setYear(component.component.OPEN_YR);
      setSemester(component.component.SHTM);
      setName(component.component.OPEN_SBJT_NM);
      setDclass(component.component.OPEN_DCLSS);
      setLikes(component.component.likeCount);
    },[component])


  const onClickLike = async () => {
    let url = "http://" + process.env.REACT_APP_SERVER_HOST + ":" + process.env.REACT_APP_SERVER_PORT + "/api/subject/likes";
    
    var like = (likes+1).toString()

    try {
      let newLike = await axios.post(url, {
        "year": year,
        "semester": semester,
        "name": name,
        "dclass" : dclass,
        "likes": like
      })

      setLikes(() => likes+1);

    } catch (error){
      setLikes(() => likes-1);
      console.log(error);
    }
  }
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
          <div onClick={onClickLike}>
          <Icon name='like' size='big' />
          </div>
        </Grid.Column>
        
        <Grid.Column>
          <Statistic label='Like' size='mini' value={likes} />
        </Grid.Column>
        </Grid>

      </Card.Content>
        

    </Card>
  )
}

export default TitleComponent