import styles from './NavDesktop.module.scss'
import logo from '../../../images/logo.svg'
import { useGlobalContext } from '../../../Context'
import classNames from 'classnames'
import { menuBtnsData } from '../../../data'

const NavDesktop = () => {
	const { active } = useGlobalContext()
	return (
		<nav className={styles.nav}>
			<div className={styles.leftPart}>
				<img src={logo} alt='Logo snap' className={styles.logo} />
				{menuBtnsData.map(({ btnText, icon, id }) => {
					return (
						<div className={styles.btnBox} key={id}>
							<button className={styles.btnLink}>
								{btnText}
								{icon && <img
									src={icon}
									alt='Arrow icon'
									className={styles.btnLinkIcon}
								/>}
							</button>
							{active && (
								<div
									className={classNames(
										styles.linksContainer,
										styles.insideLinkBox
									)}>
									<div className={styles.linkBox}>
										<img
											src='src/images/icon-reminders.svg'
											alt='Arrow icon'
											className={classNames(
												styles.btnLinkIcon,
												styles.insideIcon
											)}
										/>
										<a href='#' className={styles.link}>
											Reminder
										</a>
									</div>
									<div className={styles.linkBox}>
										<img
											src='src/images/icon-reminders.svg'
											alt='Arrow icon'
											className={classNames(
												styles.btnLinkIcon,
												styles.insideIcon
											)}
										/>
										<a href='#' className={styles.link}>
											Reminder
										</a>
									</div>
									<div className={styles.linkBox}>
										<img
											src='src/images/icon-reminders.svg'
											alt='Arrow icon'
											className={classNames(
												styles.btnLinkIcon,
												styles.insideIcon
											)}
										/>
										<a href='#' className={styles.link}>
											Reminder
										</a>
									</div>
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
