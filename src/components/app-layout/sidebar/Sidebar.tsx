import React, {MouseEventHandler, useState} from 'react';
import styles from "./style.module.scss"
import {ISidebarRoute, sidebarRoutes} from "../../../routes/sidebarRoutes";
import {NavLink} from "react-router-dom";
import classNames from "classnames";
import {IconArrow} from "../../../assets/icons";

const Sidebar = () => {
    const getMenuItem = (route: ISidebarRoute) => {
        const sidebarProps = route.sidebarProps

        return (
            <NavLink
                to={route.path}
                className={({isActive}) => classNames(
                    styles.menuItem,
                    {[styles.active]: isActive}
                )}
                key={route.path}
            >
                {({isActive}) =>
                    <>
                        <div className={styles.itemIcon}>
                            {isActive ? sidebarProps?.iconActive : sidebarProps?.icon}
                        </div>
                        {route.name}
                    </>
                }
            </NavLink>
        )
    }

    const getNestedMenu = (route: ISidebarRoute) => {
        const sidebarProps = route.sidebarProps
        const [isOpen, setOpen] = useState(false)

        const handleClick: MouseEventHandler = (event) => {
            event.preventDefault()
            setOpen(!isOpen)
        }

        return (
            <>
                <NavLink
                    to={route.path}
                    className={({isActive}) => classNames(
                        styles.menuItem,
                        {[styles.active]: isActive}
                    )}
                    key={route.path}
                    onClick={handleClick}
                >
                    {({isActive}) =>
                        <>
                            <div className={styles.itemIcon}>
                                {isActive ? sidebarProps?.iconActive : sidebarProps?.icon}
                            </div>
                            {route.name}
                            <IconArrow className={classNames(
                                styles.arrowIcon,
                                {[styles.arrowIconActive]: isOpen}
                            )}/>
                        </>
                    }
                </NavLink>
                <div className={classNames(
                    styles.nestedMenu,
                    {[styles.open]: isOpen}
                )}>
                    {route.children?.map((route: ISidebarRoute) =>
                        <NavLink
                            to={route.path}
                            className={({isActive}) => classNames(
                                styles.nestedMenuItem,
                                {[styles.active]: isActive}
                            )}
                            key={route.path}
                        >
                            {route.name}
                        </NavLink>
                    )}
                </div>
            </>
        )
    }

    return (
        <div className={styles.sidebar}>
            <div className={styles.menu}>
                {sidebarRoutes.map(route =>
                    route.children
                        ? getNestedMenu(route)
                        : getMenuItem(route)
                )}
            </div>
        </div>
    );
};

export default Sidebar;
