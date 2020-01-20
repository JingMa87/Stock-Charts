import axios from 'axios';

export const getTimeSeries = (ticker) => {
    return (dispatch, getState) => {
        // Call url for data
        axios.get('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=' + ticker + '&apikey=JT1SLVYQDAH1W33T').then(response => {
            let timeSeriesRaw = response.data['Time Series (Daily)'];
            dispatch({
                type: 'RECEIVE_TIME_SERIES',
                timeSeries: formatData(timeSeriesRaw)
            });
        }).catch(error => {
            console.log(error);
        });
    }
}

function formatData(timeSeriesRaw) {
    return Object.entries(timeSeriesRaw).reverse().map(([key, value]) => {
        return (
            {
                timestamp: key,
                high: value["2. high"],
                low: value["3. low"],
                close: value["4. close"],
            }
        );
    });
}