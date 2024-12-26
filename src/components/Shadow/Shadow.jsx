import styles from './Shadow.module.scss'
import { useGlobalContext } from '../../Context'
const Shadow = () => {
	const { active } = useGlobalContext()
	return (
		<div
			className={`${styles.shadow} ${active ? styles.shadowActive : ''}`}
			style={{ zIndex: active ? '5' : '-10' }}></div>
	)
}
export default Shadow
