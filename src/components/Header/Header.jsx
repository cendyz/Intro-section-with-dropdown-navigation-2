import styles from './Header.module.scss'
import headerMobileImg from '../../images/mobile/image-hero-mobile.png'
import headerDesktopImg from '../../images/desktop/image-hero-desktop.png'
import databizIcon from '../../images/client-databiz.svg'
import audiophileIcon from '../../images/client-audiophile.svg'
import meetIcon from '../../images/client-meet.svg'
import makerIcon from '../../images/client-maker.svg'

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.firstBox}>
				<picture>
					<source srcSet={headerDesktopImg} media='(min-width: 992px)' />
					<img
						src={headerMobileImg}
						alt='Some circles and guy working on laptop'
						className={styles.headerImg}
					/>
				</picture>
			</div>
			<div className={styles.secondBox}>
				<h1 className={styles.title}>Make remote work</h1>
				<p className={styles.desc}>
					Get your team in sync, no matter your location. Streamline
					processes, create team rituals, and watch productivity soar.
				</p>
				<button className={styles.btn}>Learn more</button>
				<div className={styles.logosContainer}>
					<img
						src={databizIcon}
						alt='Company logo icon databiz'
						className={styles.logo}
					/>
					<img
						src={audiophileIcon}
						alt='Company logo icon audiophile'
						className={styles.logo}
					/>
					<img
						src={meetIcon}
						alt='Company logo icon meet'
						className={styles.logo}
					/>
					<img
						src={makerIcon}
						alt='Company logo icon maker'
						className={styles.logo}
					/>
				</div>
			</div>
		</header>
	)
}
export default Header
