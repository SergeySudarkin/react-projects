import { } from 'react';
import { projects } from '../../projects/projects';
import styles from "./Header.module.css"

export const Header = ({ project, setProject }) => {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.wrapper}>
                    <ul className={styles.menu}>
                        {projects.map(item => {
                            return <li className={`${styles.menuItem} ${project === item ? styles.active : ""}`} onClick={() => setProject(item)} key={item}>{item}</li>
                        })}
                    </ul>
                </div>
            </div>
        </header>
    );
};
