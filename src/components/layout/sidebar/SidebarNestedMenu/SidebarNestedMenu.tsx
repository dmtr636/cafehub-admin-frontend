import {ISidebarRoute} from "../../../../routes/sidebarRoutes";
import React, {MouseEventHandler, useState} from "react";
import SidebarMenuItem from "../SidebarMenuItem/SidebarMenuItem";
import classNames from "classnames";
import styles from "./style.module.scss";
import {appStore} from "@/stores/appStore";

const SidebarNestedMenu = (props: {
    route: ISidebarRoute
}) => {
    const [isOpen, setOpen] = useState(false)
    const store = appStore.sidebar

    const handleClick: MouseEventHandler = (event) => {
        event.preventDefault()
        setOpen(!isOpen)
    }

    const handleMatch = () => {
        setOpen(true)
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
                        onMatch={handleMatch}
                    />
                )}
            </div>
        </>
    )
}

export default SidebarNestedMenu
