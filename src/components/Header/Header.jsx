import { } from 'react';
import { projects } from '../../projects/projects';
import styles from "./Header.module.css"

const itemClickHandler = (item, setProject) => {
    document.body.classList = "";
    document.body.classList.add(item.split(" ").join(""));
    setProject(item)
}

export const Header = ({ project, setProject }) => {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.wrapper}>
                    <h1>React Projects</h1>
                    <ul className={styles.menu}>
                        {projects.map(item => {
                            return <li className={`${styles.menuItem} ${project === item ? styles.active : ""}`} onClick={() => itemClickHandler(item, setProject)} key={item}>{item}</li>
                        })}
                    </ul>
                </div>
            </div>
        </header>
    );
};
