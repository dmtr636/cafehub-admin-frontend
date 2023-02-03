import React, {ReactNode} from 'react';
import styles from "./style.module.scss"
import {matchRoutes, useLocation} from "react-router-dom";
import {routes} from "../../routes/routes";
import {ISidebarRoute} from "../../routes/sidebarRoutes";

const PageLayout = (props: {
    children: ReactNode
}) => {
    const location = useLocation()
    const match = matchRoutes(routes, location)
    const route = match?.slice(-1)[0].route as ISidebarRoute

    return (
        <div className={styles.layout}>
            <div className={styles.pageHeader}>
                {route.name}
            </div>
            {props.children}
        </div>
    );
};

export default PageLayout;
