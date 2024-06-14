import { Html } from "@react-three/drei"

import styles from './styles/GeneralInformationPage.module.css'
import useDataStore from "../store/dataStore"

const CommunityServicePage = () => {
    const communityServices = useDataStore.useCommunityServices()
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
                    {communityServices.map((communityService, index) => (
                        <li key={index}>{communityService.year} - {communityServices.community_service_type} {communityService.title} {communityService.professor_fullname && `, ${communityService.professor_fullname}`}</li>
                    ))}
                </ul>
            </div>
        </Html>
    )
}

export default CommunityServicePage