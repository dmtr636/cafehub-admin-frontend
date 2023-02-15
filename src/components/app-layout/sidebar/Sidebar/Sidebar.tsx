import React, {Fragment} from 'react';
import styles from "./style.module.scss"
import {sidebarRoutes} from "@/routes/sidebarRoutes";
import SidebarMenuItem from "../SidebarMenuItem/SidebarMenuItem";
import SidebarNestedMenu from "../SidebarNestedMenu/SidebarNestedMenu";
import {ReactComponent as Logo} from "@/assets/logo/logo.svg";

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <Logo/>
            <input className={styles.search} placeholder={"Что искать?"} />
            <div className={styles.menu}>
                {sidebarRoutes.map(route =>
                    <Fragment key={route.path}>
                        {route.children
                            ? <SidebarNestedMenu route={route}/>
                            : <SidebarMenuItem route={route}/>
                        }
                    </Fragment>
                )}
            </div>
        </div>
    );
};

export default Sidebar;
