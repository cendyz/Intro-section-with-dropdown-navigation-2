import { useEffect } from 'react'
import classNames from 'classnames'
import logo from '../../../images/logo.svg'
import styles from './NavDesktop.module.scss'
import { menuBtnsData, insideLinksData } from '../../../data'
import { useGlobalContext } from '../../../Context'

const NavDesktop = () => {
	const {
		handleLinkBoxDesktop,
		activeBoxDesktop,
		desktopRef,
		handleClickOutsideDesktop,
	} = useGlobalContext()

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutsideDesktop)
		return () => {
			document.removeEventListener('mousedown', handleClickOutsideDesktop)
		}
	}, [])

	return (
		<nav className={styles.nav}>
			<div className={styles.leftPart} ref={desktopRef}>
				<img src={logo} alt='Logo snap' className={styles.logo} />
				{menuBtnsData.map(({ btnText, icon, id }) => {
					return (
						<div className={styles.btnBox} key={id}>
							<button
								className={styles.btnLink}
								onClick={() => handleLinkBoxDesktop(id)}
								disabled={id > 2}>
								{btnText}
								{icon && (
									<img
										src={icon}
										alt='Arrow icon'
										className={styles.btnLinkIcon}
										style={{
											transform:
												activeBoxDesktop === id
													? 'rotate(180deg)'
													: 'rotate(0deg)',
										}}
									/>
								)}
							</button>
							{activeBoxDesktop === id && (
								<div
									className={classNames(
										styles.linksContainer,
										styles.insideLinkBox
									)}
									style={{
										left: id === 2 && '0',
										right: id === 1 && '30%',
									}}>
									{insideLinksData.map(
										({ linkOne, linkTwo, icon, id }) => {
											if (activeBoxDesktop === 2 && id > 3) return null
											return (
												<div className={styles.linkBox} key={id}>
													{activeBoxDesktop === 1 && (
														<img
															src={icon}
															alt='Arrow icon'
															className={classNames(
																styles.btnLinkIcon,
																styles.insideIcon
															)}
														/>
													)}
													<a
														href='#'
														className={styles.link}
														onClick={() => handleLinkBoxDesktop(null)}>
														{activeBoxDesktop === 2 ? linkTwo : linkOne}
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
			<div className={styles.rightPart}>
				<button className={styles.loginBtn}>Login</button>
				<button className={styles.registerBtn}>Register</button>
			</div>
		</nav>
	)
}
export default NavDesktop
