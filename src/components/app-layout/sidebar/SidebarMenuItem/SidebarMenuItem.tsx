import {ISidebarRoute} from "../../../../routes/sidebarRoutes";
import React, {MouseEventHandler} from "react";
import {NavLink} from "react-router-dom";
import classNames from "classnames";
import styles from "./style.module.scss";
import {IconArrow} from "../../../../assets/icons";

const SidebarMenuItem = (props: {
    route: ISidebarRoute,
    nested?: boolean,
    onClick?: MouseEventHandler,
    open?: boolean,
}) => {
    const sidebarProps = props.route.sidebarProps

    return (
        <NavLink
            to={props.route.path}
            className={({isActive}) => classNames(
                styles.menuItem,
                {[styles.nested]: props.nested},
                {[styles.active]: isActive}
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

export default SidebarMenuItem
