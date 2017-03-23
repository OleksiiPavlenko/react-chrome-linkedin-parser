import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import React, { Component } from 'react';

import DragNDrop from '../components/DragNDrop';
import Row from '../components/Row';
import ExportCSV from './ExportCSV';
import SelectIndustries from './SelectIndustries';

import Papa from 'papaparse';

import { 
    handleFormData,
    startParseSimilarCompany,
    handleSelectDataForSimilar,
    clearSimilarCompaniesData
} from '../actions';


@connect(mapStateToProps, { 
    handleFormData,
    startParseSimilarCompany,
    handleSelectDataForSimilar,
    clearSimilarCompaniesData
})
export default class SearchForm extends Component {

    constructor(props) {
        super(props);

        this.onDrodParse = this.onDrodParse.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            uploadedFiles: null
        };
    }

    onSubmit(event) {
        event.preventDefault();
		event.stopPropagation();

        const {
            startParseSimilarCompany,
            dataFromFile
        } = this.props;

        startParseSimilarCompany(dataFromFile);

    }

    onDrodParse(files) {

        this.setState({
            uploadedFiles: files
        });
        
        files.forEach(file => {
            Papa.parse(file, {
                complete: res => {
                    this.props.handleSelectDataForSimilar(res.data);
                }
            })
        });
    }

    render () {
        const {
            isFetching, 
            result, 
            clearSimilarCompaniesData,
            dataForCSV
        } = this.props;
        console.log(dataForCSV)
        return (
            <fieldset disabled={ isFetching && "disabled" }>
                <Form horizontal onSubmit={ this.onSubmit }>
                    <Row>
                        <h4>Search Similar Companies</h4>
                    </Row>
                    <Row>
                        <DragNDrop 
                            onDrop={files => this.onDrodParse(files)}
                        />
                    </Row>
                    {/*<div>
                        {
                            this.state.uploadedFiles ? 
                            this.state.uploadedFiles.map((file, index) => 
                                <div key={index}>
                                    {file.name}
                                </div>
                            ) : null
                        }
                    </div>*/}
                    <Row className={"styles.button_collection"}>
                        <Button type="submit" bsStyle="success" disabled={!this.state.uploadedFiles}>
                            Start check
                        </Button>
                        <Button 
                            type="button"
                            bsStyle="info"
                            onClick={ () => clearSimilarCompaniesData() }
                        >
                            Clear data
                        </Button>
                        <ExportCSV
                            data={dataForCSV}
                        />
                    </Row>
                </Form>
            </fieldset>
        );
    }
};

function mapStateToProps(state) {
    return {
       isFetching: state.main.isFetching,
       dataFromFile: state.main.fileValueForSimilar,
       dataForCSV: state.similarCompaniesData
    }
}