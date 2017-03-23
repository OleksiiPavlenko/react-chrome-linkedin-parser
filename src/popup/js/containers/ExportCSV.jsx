import React, { Component } from "react";

import jsonexport from 'jsonexport';

import DownloadData from '../components/DownloadData';

export default class ExportCSV extends Component {

    constructor(props) {
        super(props);

        this.state = {
            csvData: ''
        };
    }

    componentWillMount() {
        const { data } = this.props;

        this.parseDataToCSV(data);
    }

    componentWillReceiveProps(nextProps) {

        this.parseDataToCSV(nextProps.data);

    }

    parseDataToCSV(data) {
        jsonexport(data, (error, result) => {
            if (error) return console.log(error);
            this.setState({
                csvData: result
            });
        });
    }

    render() {

        const { csvData } = this.state;
        
        return (
            <div>
                <DownloadData
                    fileName={'csv.csv'}
                    data={csvData}
                />
                
            </div>
        );
    }
};