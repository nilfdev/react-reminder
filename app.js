import React from 'react';
import ReactDOM from 'react-dom';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import {format, formatParam} from './src/dateServices'


// import request from 'superagent';


// import DataTable from './src/components/dataTable';
// import Filter from './src/components/filter';
// import Confirmation from './src/components/confirmation';
// import {parseTeams, parseRequests} from './src/parsers'

// import {Get, Post} from './src/httpRequests';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };

        this.handleStartChange = this.handleStartChange.bind(this);
        this.handleEndChange = this.handleEndChange.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount(){
         const defaultDate = moment(new Date());
         this.setState({ start: defaultDate });
         this.setState({ end: defaultDate });
    }

    handleStartChange(start){
        this.setState({start});
    }

    handleEndChange(end){
        this.setState({end});
    }
   
    render() {
        const start = formatParam(this.state.start);
        const end = formatParam(this.state.end);
      
    
            return (
                
                <div>
                    <DatePicker id='start' dateFormat="YYYY/MM/DD" selected={this.state.start} onChange={this.handleStartChange} todayButton={"Vandaag"} />
                    <DatePicker id='end' dateFormat="YYYY/MM/DD" selected={this.state.end} onChange={this.handleEndChange} todayButton={"Vandaag"} />

            
                    {/* <DataTable start={start} end={end} team={this.state.team} teams={this.state.teams} requests={this.state.requests} 
                        handleCellClick={this.onClickDate}  /> */}
                
                </div>
            )

        
    }
}

ReactDOM.render(<App />, document.getElementById('container'));