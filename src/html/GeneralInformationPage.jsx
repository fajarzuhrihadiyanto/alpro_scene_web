import { Html } from "@react-three/drei"

import styles from './styles/GeneralInformationPage.module.css'

const GeneralInformationPage = () => {
    return (
        <Html
            transform
            position={[0, 0.212, 0]} 
            scale={[.025, .025, .025]}
            rotation={[0, Math.PI/2, 0]}
            className={styles.html}
            >
            <div className={styles.container}>
                <h1 style={{margin: 0, marginBottom: '16px'}}>Selamat Datang di halaman Laboratorium Algoritma dan Pemrograman.</h1>
                <p style={{fontSize: '18pt', margin: 0, textAlign: 'justify'}}>Laboratorium ini menawarkan bidang keahlian yang ditekankan pada kemampuan lulusan dalam merancang dan menganalisa algoritma dalam menyelesaikan permasalahan secara efektif dan efisien berdasarkan kaidah pemrograman yang kuat, mampu mengaplikasikan model pemrograman yang mendasari berbagai bahasa pemrograman yang ada, serta mampu memilih bahasa pemrograman untuk menghasilkan aplikasi yang sesuai, seperti mengembangkan sistem/aplikasi berbasis kerangka kerja dan pada perangkat bergerak.</p>
            </div>
        </Html>
    )
}

export default GeneralInformationPage