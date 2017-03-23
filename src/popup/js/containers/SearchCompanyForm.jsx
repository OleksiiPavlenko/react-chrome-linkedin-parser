import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import React, { Component } from 'react';

// import InputGroup from '../components/InputGroup';
import DragNDrop from '../components/DragNDrop';
import Row from '../components/Row';
import ExportCSV from './ExportCSV';
import SelectIndustries from './SelectIndustries';

import Papa from 'papaparse';

import { 
    handleFormData,
    startParseCompany,
    clearSearchCompaniesData,
    handleSelectDataForSearch
} from '../actions';


@connect(mapStateToProps, { 
    handleFormData,
    startParseCompany,
    handleSelectDataForSearch,
    clearSearchCompaniesData
})
export default class SearchForm extends Component {

    constructor(props) {
        super(props);

        // this.handleChange = this.handleChange.bind(this);
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
            // companyName,
            // companyDomain,
            startParseCompany,
            selectValue,
            dataFromFile
        } = this.props;

        startParseCompany(dataFromFile, selectValue);

    }

    // handleChange(event) {
    //     const { handleFormData } = this.props;

    //     handleFormData({
    //         [event.target.name]: event.target.value
    //     });
    // }

    onDrodParse(files) {

        this.setState({
            uploadedFiles: files
        });

        files.forEach(file => {
            Papa.parse(file, {
                complete: res => {
                    this.props.handleSelectDataForSearch(res.data);
                }
            })
        });
    }

    render () {
        const {
            companyName,
            companyDomain, 
            isFetching, 
            result, 
            clearData,
            data
        } = this.props;

        return (
            <fieldset disabled={ isFetching && "disabled" }>
                <Form horizontal onSubmit={ this.onSubmit }>
                    <Row>
                        <h4>Search Companies</h4>
                    </Row>
                    {/*<InputGroup 
                        label="Company name"
                        placeholder="e.g. iDeals Solution"
                        inputType="text"
                        name="company"
                        inputValue={ companyName }
                        onChange={ this.handleChange }
                    />
                    <InputGroup 
                        label="Company domain"
                        placeholder="e.g. idealsvdr.com"
                        inputType="text"
                        name="domain"
                        inputValue={ companyDomain }
                        onChange={ this.handleChange }
                    />*/}
                    <Row>
                        <DragNDrop 
                            onDrop={files => this.onDrodParse(files)}
                        />
                    </Row>
                    <SelectIndustries 
                        label="Industries list"
                        placeholder="e.g. Information Services, Financial Services"
                    />
                    <Row className={"styles.button_collection"}>
                        <Button type="submit" bsStyle="success" disabled={!this.state.uploadedFiles}>
                            Start check
                        </Button>
                        <Button 
                            type="button"
                            bsStyle="info"
                            onClick={ () => clearSearchCompaniesData() }
                        >
                            Clear data
                        </Button>
                        <ExportCSV
                            data={data}
                        />
                    </Row>
                </Form>
            </fieldset>
        );
    }
};

function mapStateToProps(state) {
    return {
    //    companyName: state.main.company,
    //    companyDomain: state.main.domain,
       isFetching: state.main.isFetching,
       selectValue: state.main.selectValue,
       data: state.companiesData,
       dataFromFile: state.main.fileValueForSearch,
    }
}