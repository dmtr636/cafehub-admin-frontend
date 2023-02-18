import {ISidebarRoute} from "../../../../routes/sidebarRoutes";
import React, {MouseEventHandler, useEffect} from "react";
import {NavLink} from "react-router-dom";
import classNames from "classnames";
import styles from "./style.module.scss";
import {IconArrow} from "../../../../assets/icons";
import {observer} from "mobx-react-lite";
import {appStore} from "@/stores/appStore";

const SidebarMenuItem = (props: {
    route: ISidebarRoute,
    nested?: boolean,
    onClick?: MouseEventHandler,
    open?: boolean,
    onMatch?: () => void,
}) => {
    const sidebarProps = props.route.sidebarProps
    const store = appStore.sidebar
    const isMatch = store.isMatch(props.route.path)
    const isSearching = store.isSearching

    useEffect(() => {
        if (isMatch && props.onMatch) {
            props.onMatch()
        }
    }, [isMatch])

    return (
        <NavLink
            to={props.route.path}
            className={({isActive}) => classNames(
                styles.menuItem,
                {[styles.nested]: props.nested},
                {[styles.active]: isActive && !isSearching},
                {[styles.match]: isMatch}
            )}
            onClick={props.onClick}
        >
            {({isActive}) =>
                <>
                    {sidebarProps?.icon &&
                        <div className={styles.itemIcon}>
                            {isActive
                                ? sidebarProps?.iconActive
                                : sidebarProps?.icon
                            }
                        </div>
                    }
                    {props.route.name}
                    {props.route.children &&
                        <IconArrow className={classNames(
                            styles.arrowIcon,
                            {[styles.arrowIconActive]: props.open}
                        )}/>
                    }
                </>
            }
        </NavLink>
    )
}

export default observer(SidebarMenuItem)
