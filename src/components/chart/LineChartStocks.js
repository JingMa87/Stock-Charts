import React, { Component } from 'react';
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { connect } from 'react-redux';

class LineChartStocks extends Component {
    render() {
        return (
            <ResponsiveContainer width="100%" height="100%">
                <LineChart width={900} height={400} data={this.props.timeSeries} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="timestamp" minTickGap={80} />
                    <YAxis domain={[dataMin => Math.floor(dataMin * 0.95), dataMax => Math.ceil(dataMax * 1.05)]} />
                    <Line type="monotone" dot={false} dataKey="high" stroke="#98FB98" />
                    <Line type="monotone" dot={false} dataKey="low" stroke="#ff8080" />
                    <Line type="monotone" dot={false} dataKey="close" stroke="#000000" />
                    <Tooltip />
                    <Legend />
                </LineChart>
            </ResponsiveContainer>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        timeSeries: state.data.timeSeries
    }
}

export default connect(mapStateToProps)(LineChartStocks);