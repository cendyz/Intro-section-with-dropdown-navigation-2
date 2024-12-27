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
	const [activeBoxDesktop, setActiveBoxDesktop] = useState(null)
	const menuRef = useRef(null)
	const desktopRef = useRef(null)

	const handleLinkBoxMobile = id => {
		setActiveBox(prevItem => (prevItem === id ? null : id))
	}
	const handleLinkBoxDesktop = id => {
		setActiveBoxDesktop(prevItem => (prevItem === id ? null : id))
	}

	const handleActive = () => {
		setActive(!active)
		setActiveBox(null)
	}

	const handleClickOutside = e => {
		if (menuRef.current && !menuRef.current.contains(e.target)) {
			setActive(false)
		}
	}
	const handleClickOutsideDesktop = e => {
		if (desktopRef.current && !desktopRef.current.contains(e.target)) {
			setActiveBoxDesktop(null)
		}
	}

	return (
		<GlobalContext.Provider
			value={{
				active,
				setActive,
				handleLinkBoxMobile,
				handleLinkBoxDesktop,
				setActiveBoxDesktop,
				handleClickOutsideDesktop,
				handleActive,
				handleClickOutside,
				activeBoxDesktop,
				menuRef,
				desktopRef,
				activeBox,
			}}>
			{children}
		</GlobalContext.Provider>
	)
}

export const useGlobalContext = () => useContext(GlobalContext)

export default AppContext
