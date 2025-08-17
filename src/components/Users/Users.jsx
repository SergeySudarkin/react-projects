import { useState } from 'react';
import { Skeleton } from '../Skeleton/Skeleton';
import { User } from '../User/User';
import styles from "./Users.module.css"

export const Users = ({ items, isLoading, sendInvite, invites, checkInvite }) => {
    const [search, setSearch] = useState("");

    const onChangeSearch = (event) => {
        setSearch(event.target.value);
    }

    return (
        <section className={styles.AppUsers}>
            <div className="container">
                <div className={styles.usersWrapper}>
                    <div className={styles.search}>
                        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                        </svg>
                        <input onChange={onChangeSearch} type="text" placeholder="Найти пользователя..." />
                    </div>

                    {isLoading ? (
                        <div className={styles.skeletonList}>
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                        </div>
                    ) : (
                        <ul className={styles.usersList}>
                            {items.filter((item) => {
                                const fullname = `${item.first_name} ${item.last_name}`;
                                return fullname.toLowerCase().includes(search.trim().toLowerCase()) || item.email.toLowerCase().includes(search.trim().toLowerCase());
                            }).map((item) => {
                                return <User key={item.id} item={item} invites={invites} checkInvite={checkInvite} />
                            })}
                        </ul>
                    )}
                    <button onClick={sendInvite} className={styles.sendInviteBtn} disabled={!invites.length}>Отправить приглашение</button>
                </div>
            </div>
        </section>
    );
};