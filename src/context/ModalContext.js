import { createContext, useState } from "react";

const ModalContext = createContext()

export default ModalContext

export const ModalProvider = ({children}) => {
    const [ showReviews, setShowReviews ] = useState(true)

    const contextData = {
        showReviews
    }

    return(
        <ModalContext.Provider value={contextData}>
            {children}
        </ModalContext.Provider>
    )
}