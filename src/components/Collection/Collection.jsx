import { } from "react"
import styles from "./Collection.module.css"

export const Collection = ({ name, images }) => {
    return (
        <div className={styles.collection}>
            <img className={styles.collectionBig} src={images[0]} alt="Item" />
            <div className={styles.collectionBottom}>
                <img className={styles.collectionMini} src={images[1]} alt="Item" />
                <img className={styles.collectionMini} src={images[2]} alt="Item" />
                <img className={styles.collectionMini} src={images[3]} alt="Item" />
            </div>
            <h4>{name}</h4>
        </div>
    );
}