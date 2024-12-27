import { useEffect } from 'react'
import { useGlobalContext } from '../../../Context'
import { menuBtnsData, insideLinksData } from '../../../data'
import React from 'react'
import styles from './NavMobile.module.scss'
import logo from '../../../images/logo.svg'
import openMenuIcon from '../../../images/icon-menu.svg'
import closeMenuIcon from '../../../images/icon-close-menu.svg'

const NavMobile = () => {
	const {
		active,
		activeBox,
		menuRef,
		handleLinkBoxMobile,
		handleActive,
		handleClickOutside,
	} = useGlobalContext()

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [])

	return (
		<nav className={styles.nav} ref={menuRef}>
			<img src={logo} alt='Logo' className={styles.navLogo} />
			<button className={styles.btn}>
				<img
					src={active ? closeMenuIcon : openMenuIcon}
					alt='Menu open/close icon'
					className={styles.btnBurger}
					onClick={handleActive}
				/>
			</button>
			<div
				className={styles.navMenu}
				style={{
					transform: `translateX(${active ? '0' : '100'}%)`,
				}}>
				{menuBtnsData.map(({ id, btnText, icon }) => {
					return (
						<div className={styles.LinkBox} key={id}>
							<button
								className={styles.btnLink}
								style={{
									paddingBottom: `${activeBox === id ? '0' : '1.5'}em`,
								}}
								onClick={() => handleLinkBoxMobile(id)}
								disabled={id > 2}>
								{btnText}{' '}
								{icon && (
									<img
										src={icon}
										alt='Button link arrow icon'
										className={styles.btnLinkIcon}
										style={{
											transform: `${
												activeBox === id ? 'rotate(180deg)' : 'rotate(0)'
											}`,
										}}
									/>
								)}
							</button>
							{icon && (
								<div
									className={styles.insideLinkBox}
									style={{
										display: activeBox === id ? 'flex' : 'none',
									}}>
									{insideLinksData.map(
										({ linkOne, linkTwo, icon, id }) => {
											if (activeBox === 2 && id > 3) return null
											return (
												<div className={styles.linkBox} key={id}>
													{!(activeBox === 2) && (
														<img
															src={icon}
															alt={linkOne}
															className={styles.btnLinkIcon}
														/>
													)}

													<a href='#' className={styles.link}>
														{activeBox === 2 ? linkTwo : linkOne}
													</a>
												</div>
											)
										}
									)}
								</div>
							)}
						</div>
					)
				})}
				<button className={styles.loginBtn}>Login</button>
				<button className={styles.registerBtn}>Register</button>
			</div>
		</nav>
	)
}
export default NavMobile
