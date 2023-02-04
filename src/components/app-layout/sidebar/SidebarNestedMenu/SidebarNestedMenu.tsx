import {ISidebarRoute} from "../../../../routes/sidebarRoutes";
import React, {MouseEventHandler, useState} from "react";
import SidebarMenuItem from "../SidebarMenuItem/SidebarMenuItem";
import classNames from "classnames";
import styles from "./style.module.scss";

const SidebarNestedMenu = (props: {
    route: ISidebarRoute
}) => {
    const [isOpen, setOpen] = useState(false)

    const handleClick: MouseEventHandler = (event) => {
        event.preventDefault()
        setOpen(!isOpen)
    }

    return (
        <>
            <SidebarMenuItem
                route={props.route}
                onClick={handleClick}
                open={isOpen}
            />
            <div className={classNames(
                styles.nestedMenu,
                {[styles.open]: isOpen}
            )}>
                {props.route.children?.map((route: ISidebarRoute) =>
                    <SidebarMenuItem
                        route={route}
                        nested
                        key={route.path}
                    />
                )}
            </div>
        </>
    )
}

export default SidebarNestedMenu
