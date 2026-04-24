import React, { useEffect, useContext } from "react"
import PrimaryButton from "src/components/Button/PrimaryButton"
import WhiteLinkButton from "src/components/Button/WhiteLinkButton"
import { Context } from "../context"

const QuotePopUpButton = ({ text, iconAfter, location, icon, thanksURL, size, btnStyle }) => {
    const { popupContext, setPopupContext } = useContext(Context);
    const HandleModalOpen = () => {
        setPopupContext({
            isVisible: true,
            thanksURL: thanksURL,
            sourceURL: location.pathname
        })
    }
    useEffect(() => {
        if (popupContext.isVisible === true) {
            document.querySelector("body").classList.add("modal-open")
        } else {
            document.querySelector("body").classList.remove("modal-open")
        }
    }, [popupContext, setPopupContext])

    return (
        <>
            {btnStyle ? (

                <button type="button" aria-label="button" aria-hidden="true" onClick={HandleModalOpen}><PrimaryButton text={text} iconAfter={iconAfter} icon={icon} size={size} /></button>

            ) : (
                <button type="button" aria-label="button" aria-hidden="true" onClick={HandleModalOpen}><WhiteLinkButton text={text} iconAfter={iconAfter} icon={icon} size={size} /></button>

            )
            }
        </>

    )
}

export default QuotePopUpButton