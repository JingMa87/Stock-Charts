import React from 'react';
import LineChartStocks from './components/chart/LineChartStocks';

process.title = App;

function App() {
  return (
    <div className="App">
      <h1>Dab God</h1>
      <LineChartStocks />
    </div>
  );
}

export default App;
