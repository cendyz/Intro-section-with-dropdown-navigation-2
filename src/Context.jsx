import {
	useState,
	createContext,
	useContext,
	useEffect,
	useRef,
} from 'react'

const GlobalContext = createContext()

const AppContext = ({ children }) => {
	const [active, setActive] = useState(false)
	const [activeBox, setActiveBox] = useState(null)
	const menuRef = useRef(null)
	const desktopRef = useRef(null)

	const handleLinkBox = id => {
		setActiveBox(prevItem => (prevItem === id ? null : id))
	}

	const handleActive = () => {
		setActive(!active)
		setActiveBox(null)
	}

	const handleClickOutsideMobile = e => {
		if (menuRef.current && !menuRef.current.contains(e.target)) {
			setActive(false)
		}
	}
	const handleClickOutsideDesktop = e => {
		if (desktopRef.current && !desktopRef.current.contains(e.target)) {
			setActiveBox(null)
		}
	}

	return (
		<GlobalContext.Provider
			value={{
				active,
				setActive,
				handleLinkBox,
				handleActive,
				handleClickOutsideMobile,
				handleClickOutsideDesktop,
				desktopRef,
				menuRef,
				activeBox,
			}}>
			{children}
		</GlobalContext.Provider>
	)
}

export const useGlobalContext = () => useContext(GlobalContext)

export default AppContext
