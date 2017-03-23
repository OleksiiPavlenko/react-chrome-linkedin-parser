import React from "react";
import Dropzone from 'react-dropzone';

import styles from '../../sass/popup.sass';

const DragNDrop = ({ onDrop }) => (
    <Dropzone
        className={styles.dragNdrop}
        multiple={false}
        accept=".csv"
        onDrop={onDrop}
    >
        <div>Try dropping .csv file here, or click to select file to upload.</div>
    </Dropzone>
);

export default DragNDrop;