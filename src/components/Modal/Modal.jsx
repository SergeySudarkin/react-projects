import { useState } from 'react';
import styles from "./Modal.module.css"

const ModalWindow = ({ open, setOpen, children }) => {
    return <div onClick={() => setOpen(false)} className={`${styles.overlay} ${styles.animated} ${open ? styles.show : ""}`}>
        <div className={styles.modal}>
            <svg onClick={() => setOpen(false)} height="200" viewBox="0 0 200 200" width="200">
                <title />
                <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
            </svg>
            <p className={styles.content}>{children}</p>
        </div>
    </div>
}

export const Modal = () => {
    const [open, setOpen] = useState(false);

    return (
        <section className={styles.AppModal}>
            <div className="container">
                <button className={styles.openModalBtn} onClick={() => setOpen(true)}>✨ Открыть окно</button>
                <ModalWindow open={open} setOpen={setOpen}>Модальное окно</ModalWindow>
            </div>
        </section >
    );
};