import React from 'react';
import 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import TickerSearcher from './components/search/TickerSearcher';
import LineChartStocks from './components/chart/LineChartStocks';

process.title = App;

export default function App() {
    return (
        <Container>
            <Row className="my-3 pb-3">
                <TickerSearcher />
            </Row>
            <Row className="chart-row">
                <h3>Chart</h3>
                <LineChartStocks />
            </Row>
        </Container>
    );
}