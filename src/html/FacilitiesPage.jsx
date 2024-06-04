import { Html } from "@react-three/drei"

import styles from './styles/FacilitiesPage.module.css'

const FacilitiesPage = () => {
    return (
        <Html
            transform
            position={[0, 0.212, 0]} 
            scale={[.025, .025, .025]}
            rotation={[0, Math.PI/2, 0]}
            className={styles.html}
            >
            <div className={styles.container}>
                <ul className={styles.list}>
                <li>PC Client (Processor Intel Core i7 Gen 12, RAM 32GB, SSD 1TB).</li>
                <li>Semua monitor berukuran 24″ untuk memudahkan mahasiswa dalam melakukan kegiatan pemrograman.</li>
                <li>PC High End (Intel Core i9-12900K, 64GB DDR5, RTX 3080Ti 12GB).</li>
                </ul>
            </div>
        </Html>
    )
}

export default FacilitiesPage