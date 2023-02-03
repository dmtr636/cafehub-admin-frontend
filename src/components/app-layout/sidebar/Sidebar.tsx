import React from 'react';
import styles from "./style.module.scss"
import {ISidebarRoute, sidebarRoutes} from "../../../routes/sidebarRoutes";
import {NavLink} from "react-router-dom";
import classNames from "classnames";

const Sidebar = () => {
    const getMenuItem = (route: ISidebarRoute) => {
        const sidebarProps = route.sidebarProps
        return (
            <NavLink
                to={route.path}
                className={({isActive}) => classNames(
                    styles.menuItem,
                    {[styles.menuItemActive]: isActive}
                )}
                key={route.path}
            >
                {({isActive}) =>
                    <>
                        <div className={styles.itemIcon}>
                            {isActive ? sidebarProps.iconActive : sidebarProps.icon}
                        </div>
                        {route.name}
                    </>
                }
            </NavLink>
        )
    }

    return (
        <div className={styles.sidebar}>
            <div className={styles.menu}>
                {sidebarRoutes.map(route =>
                    getMenuItem(route)
                )}
            </div>
        </div>
    );
};

export default Sidebar;
