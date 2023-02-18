import React, {ReactNode} from 'react';
import styles from "./style.module.scss"

const PageLayout = (props: {
    title: string,
    icon?: ReactNode,
    children: ReactNode
}) => {
    return (
        <div className={styles.layout}>
            <div className={styles.header}>
                <div className={styles.icon}>
                    {props.icon}
                </div>
                <div className={styles.title}>
                    {props.title}
                </div>
            </div>
            {props.children}
        </div>
    );
};

export default PageLayout;
