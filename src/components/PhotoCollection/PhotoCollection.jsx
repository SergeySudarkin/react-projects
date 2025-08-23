import { useEffect, useState } from 'react';
import styles from "./PhotoCollection.module.css"
import { Collection } from '../Collection/Collection';
import { categories } from "../../photos.json"

// Photos API: https://67c74127c19eb8753e79370a.mockapi.io/photos

export const PhotoCollection = () => {
    const [category, setCategory] = useState(0);
    const [photoCollection, setPhotoCollection] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchValue, setSearchValue] = useState("");
    const [page, setPage] = useState(1);

    const photoCollectionRender = photoCollection
        .filter(item => item.name.toLowerCase().includes(searchValue.trim().toLowerCase()))
        .map((item, index) => {
            return <Collection key={index + 1} name={item.name} images={item.photos} />
        });

    const limitPhotoCollection = 3;
    const lengthPhotoCollection = 3;

    useEffect(() => {
        setIsLoading(true);
        fetch(`https://67c74127c19eb8753e79370a.mockapi.io/photos?page=${page}&limit=${limitPhotoCollection}&${category ? `category=${category}` : ""}`)
            .then(res => res.json())
            .then(data => setPhotoCollection(data))
            .catch(error => console.error(error.message))
            .finally(() => setIsLoading(false));
    }, [category, page]);

    const pickCategory = (index) => {
        setCategory(index);
        setPage(1);
    }

    return (
        <section className={styles.AppPhotoCollection}>
            <div className="container">
                <h1>Коллекция фотографий</h1>
                <div className={styles.top}>
                    <ul className={styles.tags}>
                        {categories.map((item, index) => {
                            return <li key={index} onClick={() => pickCategory(index)} className={category === index ? styles.active : ""}>{item.name}</li>
                        })}
                    </ul>
                    <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className={styles.searchInput} placeholder="Поиск по названию" />
                </div>
                {isLoading && <p className={styles.infoText}>Идет загрузка...</p>}
                {!photoCollectionRender.length && !isLoading && <p className={styles.infoText}>Коллекция не найдена...</p>}
                <div className={styles.content}>
                    {!isLoading && photoCollectionRender}
                </div>
                <ul className={styles.pagination}>
                    {!isLoading && [...Array(lengthPhotoCollection)].map((_, index) => {
                        return <li key={index + 1} onClick={() => setPage(index + 1)} className={page === index + 1 ? styles.active : ""}>{index + 1}</li>
                    })}
                </ul>
            </div>
        </section>
    );
}