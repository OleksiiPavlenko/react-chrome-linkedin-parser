import React, { Component } from "react";
import { connect } from 'react-redux';

import SelectGroup from '../components/SelectGroup';

import {
    handleSelectData
} from '../actions';

import { INDUSTRIES_OBJ } from '../../../industriesList';

@connect(mapStateToProps, {
    handleSelectData
})
export default class SelectIndustries extends Component {
    render() {
        const { 
            handleSelectData,
            selectValue,
            label,
            placeholder
        } = this.props;

        return (
            <SelectGroup 
                label={ label }
                options={ INDUSTRIES_OBJ }
                placeholder={ placeholder }
                inputValue={ selectValue }
                onChange={ (value) => handleSelectData(value) }
            />
        );
    }
};

function mapStateToProps(state) {
    return {
        selectValue: state.main.selectValue
    }
}
