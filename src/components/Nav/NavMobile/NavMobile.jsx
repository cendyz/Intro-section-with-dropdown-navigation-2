import { useState } from 'react'
import styles from './NavMobile.module.scss'
import logo from '../../../images/logo.svg'
import openMenuIcon from '../../../images/icon-menu.svg'
import closeMenuIcon from '../../../images/icon-close-menu.svg'
import { useGlobalContext } from '../../../Context'

const NavMobile = () => {
	const { active, setActive } = useGlobalContext()
	return (
		<nav className={styles.nav}>
			<img src={logo} alt='Logo' className={styles.navLogo} />
			<button className={styles.btn}>
				<img
					src={active ? closeMenuIcon : openMenuIcon}
					alt='Menu open/close icon'
					className={styles.btnBurger}
					onClick={() => setActive(!active)}
				/>
			</button>
			<div
				className={styles.navMenu}
				style={{
					transform: `translateX(${active ? '0' : '100'}%)`,
				}}></div>
		</nav>
	)
}
export default NavMobile
