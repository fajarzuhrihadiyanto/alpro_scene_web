import { Html } from "@react-three/drei"

import styles from './styles/GeneralInformationPage.module.css'
import { COMMUNITY_SERVICE } from "../data/communityService"

const CommunityServicePage = () => {
    return (
        <Html
            transform
            position={[0, 0.212, 0]} 
            scale={[.025, .025, .025]}
            rotation={[0, Math.PI/2, 0]}
            className={styles.html}
            >
            <div className={styles.container}>
                <h1 className={styles.title}>Daftar Pengabdian Masyarakat</h1>
                <ul className={styles.list}>
                    {COMMUNITY_SERVICE.map((data, index) => (
                        <li key={index}>{data.year} - {data.title}</li>
                    ))}
                </ul>
            </div>
        </Html>
    )
}

export default CommunityServicePage