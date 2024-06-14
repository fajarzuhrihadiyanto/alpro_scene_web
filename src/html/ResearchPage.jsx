import { Html } from "@react-three/drei"

import styles from './styles/GeneralInformationPage.module.css'
import useDataStore from "../store/dataStore"

const ResearchPage = () => {
    const research = useDataStore.useResearch()
    return (
        <Html
            transform
            position={[0, 0.212, 0]} 
            scale={[.025, .025, .025]}
            rotation={[0, Math.PI/2, 0]}
            className={styles.html}
            >
            <div className={styles.container}>
                <h1 className={styles.title}>Daftar Penelitian</h1>
                <ul className={styles.list}>
                    {research.map((research, index) => (
                        <li key={index}>{research.year} - {research.research_type} {research.title} {research.professor_fullname && `, ${research.professor_fullname}`}</li>
                    ))}
                </ul>
            </div>
        </Html>
    )
}

export default ResearchPage