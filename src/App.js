import React from 'react';
import 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import TickerSearch from './components/search/TickerSearch';
import LineChartStocks from './components/chart/LineChartStocks';

process.title = App;

function App() {
  return (
    <Container>
      <Row className="my-3 border-bottom">
        <TickerSearch />
      </Row>
      <Row className="mb-3 border-bottom">
        <h3>Dab God</h3>
      </Row>
      <Row className="chart-row">
        <LineChartStocks />
      </Row>
    </Container>
  );
}

export default App;
