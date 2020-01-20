const initState = {
    timeSeries: [
        {
            timestamp : "2019-08-02",
            high: "163.8500",
            low: "160.3500",
            close: "161.0000"
        },
        {
            timestamp: "2019-08-01",
            high: "175.7145",
            low: "162.1000",
            close: "165.6500"
        },
        {
            timestamp : "2019-08-02",
            high: "163.8500",
            low: "160.3500",
            close: "161.0000"
        },
        {
            timestamp: "2019-08-01",
            high: "175.7145",
            low: "162.1000",
            close: "165.6500"
        }]
};

export default function timeSeriesReducer(state = initState, action) {
    switch (action.type) {
        case 'RECEIVE_TIME_SERIES':
            return {
                ...state,
                timeSeries: action.timeSeries
            };
        default:
            return state;
    }
}