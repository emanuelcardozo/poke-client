import { createContext, useState } from 'react';
import translations from "../../settings/translater"

export const TranslaterContext = createContext();

export default ({ children }) => {
    const [ translater, setTranslater ] = useState( translations.ENG )

    return(
        <TranslaterContext.Provider value={[ translater, setTranslater ]}>
            { children }
        </TranslaterContext.Provider>
    )
}