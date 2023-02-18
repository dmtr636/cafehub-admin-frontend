import React, {Fragment} from 'react';
import styles from "./style.module.scss"
import {sidebarRoutes} from "@/routes/sidebarRoutes";
import SidebarMenuItem from "../SidebarMenuItem/SidebarMenuItem";
import SidebarNestedMenu from "../SidebarNestedMenu/SidebarNestedMenu";
import {ReactComponent as Logo} from "@/assets/logo/logo.svg";
import {IconArrow} from "@/assets/icons";
import {appStore} from "@/stores/appStore";
import {observer} from "mobx-react-lite";

const Sidebar = observer(() => {
    const store = appStore.sidebar

    return (
        <div className={styles.sidebar}>
            <Logo/>
            <input
                className={styles.search}
                placeholder={"Что искать?"}
                value={store.searchValue}
                onChange={(event) => store.setSearchValue(event.target.value)}
            />
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
            <div className={styles.bottom}>
                <div className={styles.divider}/>
                <div className={styles.userInfo}>
                    <img
                        className={styles.avatar}
                        src={"https://i.pinimg.com/originals/98/bb/7c/98bb7ccc15ea6d79d1881bd3e773df9e.jpg"}
                    />
                    <div className={styles.userName}>Кот</div>
                    <IconArrow className={styles.arrow}/>
                </div>
            </div>
        </div>
    );
});

export default Sidebar;
