import React from 'react';
import {Outlet} from "react-router-dom";
import Sidebar from "../sidebar/Sidebar/Sidebar";
import styles from "./style.module.scss"
import PageLayout from "../../PageLayout/PageLayout";

const AppLayout = () => {
    return (
        <div className={styles.layout}>
            <Sidebar/>
            <PageLayout>
                <Outlet/>
            </PageLayout>
        </div>
    );
};

export default AppLayout;
