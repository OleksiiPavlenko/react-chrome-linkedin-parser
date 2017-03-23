import React from "react";

import styles from '../../sass/popup.sass';

const Row = ({ children }) => (
    <div className={ styles.custom_row }>
        { children }
    </div>
);

export default Row;