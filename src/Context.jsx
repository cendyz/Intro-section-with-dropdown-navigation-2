import { useState, createContext, useContext, useEffect } from 'react'

const GlobalContext = createContext()

const AppContext = ({ children }) => {
	const [active, setActive] = useState(false)
	
	return (
		<GlobalContext.Provider value={{ active, setActive }}>
			{children}
		</GlobalContext.Provider>
	)
}

export const useGlobalContext = () => useContext(GlobalContext)

export default AppContext
