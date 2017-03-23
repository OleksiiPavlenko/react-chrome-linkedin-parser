import React from "react";

const Download = ({ data, fileName }) => (
    <a
        className="btn btn-default"
        href={ 'data:text/csv;charset=utf-8,' + encodeURIComponent(data) }
        download={ fileName }
        disabled={ data.length > 0 ? "" : "disabled" }
    >
        Download
    </a>
);

export default Download;