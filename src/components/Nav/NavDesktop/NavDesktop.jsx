import styles from './NavDesktop.module.scss'
import logo from '../../../images/logo.svg'
import { useGlobalContext } from '../../../Context'
import classNames from 'classnames'
import { menuBtnsData, insideLinksData } from '../../../data'

const NavDesktop = () => {
	const { active, handleLinkBox, activeBox } = useGlobalContext()
	return (
		<nav className={styles.nav}>
			<div className={styles.leftPart}>
				<img src={logo} alt='Logo snap' className={styles.logo} />
				{menuBtnsData.map(({ btnText, icon, id }) => {
					return (
						<div className={styles.btnBox} key={id}>
							<button
								className={styles.btnLink}
								onClick={() => handleLinkBox(id)}
								disabled={id > 2}>
								{btnText}
								{icon && (
									<img
										src={icon}
										alt='Arrow icon'
										className={styles.btnLinkIcon}
									/>
								)}
							</button>
							{activeBox === id && (
								<div
									className={classNames(
										styles.linksContainer,
										styles.insideLinkBox
									)}
									style={{ opacity: activeBox === id ? 1 : 0 }}>
									{insideLinksData.map(
										({ linkOne, linkTwo, icon, id }) => {
											if (activeBox === 2 && id > 3) return null
											return (
												<div className={styles.linkBox} key={id}>
													{activeBox === 1 && (
														<img
															src={icon}
															alt='Arrow icon'
															className={classNames(
																styles.btnLinkIcon,
																styles.insideIcon
															)}
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

				{/* <div className={styles.btnBox}>
					<button className={styles.btnLink}>
						Features
						<img
							src='src/images/icon-arrow-down.svg'
							alt='Arrow icon'
							className={styles.btnLinkIcon}
						/>
					</button>
					
				</div> */}

				{/* <div className={styles.insideLinkBox}>
					<div className={styles.linkBox}>
						<img
							src='src/images/icon-reminders.svg'
							alt='{linkOne}'
							className={styles.btnLinkIcon}
						/>
						<a href='#' className={styles.link}>
							Reminder
						</a>
					</div>
				</div> */}
			</div>
		</nav>
	)
}
export default NavDesktop
