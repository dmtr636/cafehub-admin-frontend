import React from 'react';
import {Outlet} from "react-router-dom";
import Sidebar from "../sidebar/Sidebar/Sidebar";
import styles from "./style.module.scss"

const AppLayout = () => {
    return (
        <div className={styles.layout}>
            <Sidebar/>
            <Outlet/>
        </div>
    );
};

export default AppLayout;
