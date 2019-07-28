import React, { Component } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import axios from 'axios';

export default class LineChartStocks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timeSeries: []
        };
    }

    componentWillMount() {
        axios.get('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=BABA&apikey=JT1SLVYQDAH1W33T').then(response => {
            let timeSeriesRaw = response.data['Time Series (Daily)'];
            let timeSeries = formatData(timeSeriesRaw);
            this.setState({ timeSeries });
            console.log(this.state);
        }).catch(error => {
            console.log(error);
        });
    }

    render() {
        return (
            <LineChart width={1200} height={600} data={this.state.timeSeries} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="timestamp" />
                <YAxis />
                <Line type="monotone" dot={false} dataKey="1. open" stroke="#8884d8" />
                <Line type="monotone" dot={false} dataKey="2. high" stroke="#82ca9d" />
                <Line type="monotone" dot={false} dataKey="3. low" stroke="#000000" />
                <Tooltip />
                <Legend />
            </LineChart>
        )
    }
}

function formatData(timeSeriesRaw) {
    return Object.entries(timeSeriesRaw).reverse().map(([key, value]) => {
        return (
            {
                timestamp: key,
                ...value
            }
        );
    });
}

const data = [
    {
        "name": "Page A",
        "uv": 4000,
        "pv": 2400,
        "amt": 2400
    },
    {
        "name": "Page B",
        "uv": 3000,
        "pv": 1398,
        "amt": 2210
    },
    {
        "name": "Page C",
        "uv": 2000,
        "pv": 9800,
        "amt": 2290
    },
    {
        "name": "Page D",
        "uv": 2780,
        "pv": 3908,
        "amt": 2000
    },
    {
        "name": "Page E",
        "uv": 1890,
        "pv": 4800,
        "amt": 2181
    },
    {
        "name": "Page F",
        "uv": 2390,
        "pv": 3800,
        "amt": 2500
    },
    {
        "name": "Page G",
        "uv": 3490,
        "pv": 4300,
        "amt": 2100
    }
]