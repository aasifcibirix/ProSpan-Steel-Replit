import React from "react"
import { FacebookIcon, InstagramIcon } from "../Icons"
import { SocialIcon, SocialItem } from "../SocialStyle"


const SocialNetwork = () => {
  return (
    <SocialIcon className="social-icon ">
      <SocialItem className="social-item"><a className="social-link facebook" href="https://www.facebook.com/share/16pUi7fGyW" target="_blank" rel="noreferrer" aria-label="Facebook"><FacebookIcon /></a></SocialItem>
      <SocialItem className="social-item"><a className="social-link instagram" href="https://www.instagram.com/prospansteelbuildings" target="_blank" rel="noreferrer" aria-label="instagram"><InstagramIcon /></a></SocialItem>
      {/* <SocialItem className="social-item"><a className="social-link linkden"   href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="linkden"><LinkdenIcon /></a></SocialItem> */}
    </SocialIcon>
  )
}
export default SocialNetwork