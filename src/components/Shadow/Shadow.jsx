import styles from './Shadow.module.scss'
import { useGlobalContext } from '../../Context'
const Shadow = () => {
	const { active } = useGlobalContext()
	return <div className={styles.shadow}
    style={{opacity: `${active ? '1' : '0'}`}}
    ></div>
}
export default Shadow
