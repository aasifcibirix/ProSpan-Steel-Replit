import React from "react"
import {LinkdenIcon, YoutubeIcon, NewsIcon, FacebookIcon, TwitterIcon,  } from "../Icons"
import {SocialIcon, SocialItem } from "../SocialStyle"


const Followers = () => {
  return(	
    <SocialIcon className="social-icon">
      <SocialItem className="social-item"><a className="social-link facebook"   href="https://www.facebook.com/share/1CJVpgGbgW/?mibextid=wwXIfr" target="_blank" rel="noreferrer" aria-label="linkedin"><FacebookIcon /></a></SocialItem>
      <SocialItem className="social-item"><a className="social-link linkden"   href="https://www.linkedin.com/in/mohammed-zubair-msz/" target="_blank" rel="noreferrer" aria-label="linkedin"><LinkdenIcon /></a></SocialItem>
      <SocialItem className="social-item"><a className="social-link Twitter"   href="https://x.com/zubairkhan4uall?s=11&t=pDA7bI6ytcdqLMnvvGFKqg" target="_blank" rel="noreferrer" aria-label="Youtube"><TwitterIcon /></a></SocialItem>
      <SocialItem className="social-item"><a className="social-link youtube"   href="https://www.youtube.com/watch?v=BWuXQCwlBsk&ab_channel=KhaligenaTV" target="_blank" rel="noreferrer" aria-label="Youtube"><YoutubeIcon /></a></SocialItem>
      <SocialItem className="social-item"><a className="social-link news" href="https://uaetimes.ae/meet-mohammed-zubair/" target="_blank" rel="noreferrer" aria-label="UAE Times"><NewsIcon /></a></SocialItem>
    </SocialIcon> 			
	)
}
export default Followers
