import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { getTimeSeries } from '../../store/actions/timeSeriesActions';
import { connect } from 'react-redux';

class TickerSearcher extends Component {
    handleClick = (e) => {
        this.props.getTimeSeries(getTicker());
    }

    render() {
        return (
            <div>
                <label>Ticker:
                    <input type="text" name="ticker" id="ticker" />
                </label>
                <Button variant="primary" onClick={this.handleClick}>Go!</Button>
            </div>
        )
    }
}

function getTicker() {
    return document.getElementById("ticker").value;
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTimeSeries: (ticker) => dispatch(getTimeSeries(ticker))
    }
}

export default connect(null, mapDispatchToProps)(TickerSearcher);