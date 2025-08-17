import styles from "./Success.module.css"
import logoSuccess from "../../assets/Users/success.svg"
import { } from 'react';

export const Success = ({ count }) => {
    return (
        <section className={styles.AppUsers}>
            <div className="container">
                <div className={styles.successBlock}>
                    <img src={logoSuccess} alt="Success" />
                    <h3>Успешно!</h3>
                    <p>Всем {count} пользователям отправлено приглашение.</p>
                    <button onClick={() => window.location.reload()} className={styles.sendInviteBtn}>Назад</button>
                </div>
            </div>
        </section>
    );
};