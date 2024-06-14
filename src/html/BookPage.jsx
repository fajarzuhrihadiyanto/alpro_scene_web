import { Html } from "@react-three/drei"

import styles from './styles/GeneralInformationPage.module.css'
import useDataStore from "../store/dataStore"

const BookPage = () => {
    const books = useDataStore.useBooks()
    return (
        <Html
            transform
            position={[0, 0.212, 0]} 
            scale={[.025, .025, .025]}
            rotation={[0, Math.PI/2, 0]}
            className={styles.html}
            >
            <div className={styles.container}>
                <h1 className={styles.title}>Daftar Buku</h1>
                <ul className={styles.list}>
                    {books.map((book, index) => (
                        <li key={index}>{book.release_year} - {book.title}{book.professor_fullname && `, ${book.professor_fullname}`}</li>
                    ))}
                </ul>
                {books.length === 0 && <p className={styles.description}>Tidak ada data</p>}
            </div>
        </Html>
    )
}

export default BookPage