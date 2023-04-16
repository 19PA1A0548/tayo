import { Line } from "react-chartjs-2";
import {useEffect,useState} from "react";
import axios from "axios";
import React from 'react';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);

export default function Canvas(){
    const [chartData, setChartData] = useState("");
    useEffect(()=>{
        axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=all')
      .then((response) => {
        setChartData({
            labels: Object.keys(response.data.cases), 
            datasets: [
              {
                label: "Cases",
                data: Object.values(response.data.cases),
                backgroundColor: [
                  "rgba(75,192,192,1)",
                  "#50AF95",
                  "#f3ba2f",
                  "#2a71d0"
                ],
                borderColor: "black",
                borderWidth: 2
              }
            ]
        })
      })
      .catch((error) => {
        console.log(error);
      });
    },[])
    
    return(
        <div className="chart-container">
            <h2 style={{ textAlign: "center" }}>Line Chart</h2>
            {chartData && <Line
                data={chartData}
                options={{
                plugins: {
                    title: {
                    display: true,
                    text: "Cases Fluctuations"
                    },
                    legend: {
                    display: false
                    }
                }
                }}
            />}
    </div>
    )
}