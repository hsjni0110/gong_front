import React from 'react'
import ReactApexChart from "react-apexcharts";
import { Card, Grid } from 'semantic-ui-react';




const SugangInfo = () => {
  const sugangData = {

    series: [{
      name: '수강 신청 수',
      data: [10, 20, 30]
    }],
    options: {
      chart: {
        height: 350,
        type: 'bar',
        toolbar: {
          show: false
        }
      },
      grid: {
        show: false
      },
      
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: 'top',
          },
        }
      },
      dataLabels: {
        enabled: true,
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ["#304758"]
        }
      },

      xaxis: {
        categories: ["2020", "2021", "2022"],
        position: 'bottom',
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#D8E3F0',
              colorTo: '#BED1E6',
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            }
          }
        },
        tooltip: {
          enabled: false,
        }
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
        }

      },
      title: {
        text: '년도 별 수강 신청 수',
        floating: true,
        offsetY: 330,
        align: 'center',
        style: {
          color: '#444'
        }
      }
    },


  };

  return (
    <Card style={{ height: "100%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
       <ReactApexChart 
        options={sugangData.options}
        series={sugangData.series}
        type="bar"
        width= "300"
      />
    </Card>
  )
}

export default SugangInfo