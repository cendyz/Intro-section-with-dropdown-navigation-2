import { useState } from 'react'
import { useGlobalContext } from '../../../Context'
import { menuBtnsData, insideLinksData } from '../../../data'
import React from 'react'
import styles from './NavMobile.module.scss'
import logo from '../../../images/logo.svg'
import openMenuIcon from '../../../images/icon-menu.svg'
import closeMenuIcon from '../../../images/icon-close-menu.svg'

const NavMobile = () => {
	const { active, setActive } = useGlobalContext()
	const [activeBox, setActiveBox] = useState(null)

	const handleLinkBox = id => {
		setActiveBox(prevItem => (prevItem === id ? null : id))
	}

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
				}}>
				{menuBtnsData.map(({ id, btnText, icon }) => {
					return (
						<div className={styles.LinkBox} key={id}>
							<button
								className={styles.btnLink}
								style={{
									paddingBottom: `${activeBox === id ? '0' : '1.5'}em`,
								}}
								onClick={() => handleLinkBox(id)}>
								{btnText}{' '}
								{icon && (
									<img
										src={icon}
										alt='Button link arrow icon'
										className={styles.btnLinkIcon}
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
											if (id > 3) return null
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
			</div>
		</nav>
	)
}
export default NavMobile

// <div className={styles.LinkBox}>
// 				<button className={styles.btnLink}>
// 					Features{' '}
// 					<img
// 						src={arrowDown}
// 						alt='Button link arrow icon'
// 						className={styles.btnLinkIcon}
// 					/>
// 				</button>
// 				<div className={styles.insideLinkBox}>
// 					<a href='#' className={styles.link}>
// 						<img
// 							src='src/images/icon-calendar.svg'
// 							alt='Calendar'
// 							className={styles.btnLinkIcon}
// 						/>{' '}
// 						Todo List
// 					</a>
// 					<a href='#' className={styles.link}>
// 						<img
// 							src='src/images/icon-calendar.svg'
// 							alt='Calendar'
// 							className={styles.btnLinkIcon}
// 						/>{' '}
// 						Todo List
// 					</a>
// 					<a href='#' className={styles.link}>
// 						<img
// 							src='src/images/icon-calendar.svg'
// 							alt='Calendar'
// 							className={styles.btnLinkIcon}
// 						/>{' '}
// 						Todo List
// 					</a>
// 				</div>
// 			</div>
