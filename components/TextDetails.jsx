import React from 'react'
import styles from '../styles/Home.module.css';
export default function TextDetails({title,info}) {
    return (
        <div className={styles.additionalInfo}>
        <h4>{title}</h4>
            <p dangerouslySetInnerHTML = {{__html:info}}/>
        </div>
    )
}
