import React, { useState } from 'react';

const Context = React.createContext({
	theme: '',
	lang: '',
	selectedProd: {}
});

const retrieveLocalStorageData = () => {
    const localLang = localStorage.getItem('lang')
    const localTheme = localStorage.getItem('theme')

    return {
        localLang,
        localTheme
    }
}

export const ContextProvider = (props) => {
    const {localLang, localTheme} = retrieveLocalStorageData()
    console.log(localLang, localTheme)
    const [dark, setDark] = useState(!!localTheme);
    const [eng, setEng] = useState(!!localLang);
    console.log(eng, dark)
    const [selectedProd, setSelectedProd] = useState({});
    const changeThemeHandler = () => {
        setDark((prevState) => !prevState)
        if(localTheme) {
            localStorage.removeItem('theme');
        } else {
            localStorage.setItem('theme', 'dark');
        }
    }

    const changeLangHandler = () => {
        setEng((prevState) => !prevState)
        if(localLang) {
            localStorage.removeItem('lang');
        } else {
            localStorage.setItem('lang', 'eng');
        }
    }

    const selectingProdHandler = (product) => {
        setSelectedProd(product)
    }
    return (
		<Context.Provider
			value={{
				dark,
				eng,
				selectedProd,
				changeThemeHandler,
                changeLangHandler,
                selectingProdHandler
			}}>
			{props.children}
		</Context.Provider>
	);
}

export default Context