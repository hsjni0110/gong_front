import React from 'react'
import ReactApexChart from "react-apexcharts";
import { Card, Grid, Statistic } from 'semantic-ui-react';




const SugangInfo = (component) => {
  
  return (
    <Card style={{ height: "100%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Statistic color='red'>
        <Statistic.Value>{component.component.sugangCount}</Statistic.Value>
        <Statistic.Label>수강신청 수</Statistic.Label>
    </Statistic>
    </Card>
  )
}

export default SugangInfo