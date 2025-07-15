import { useEffect } from "react"
import { useLocation } from "react-router-dom"


const ScrollTop = () => {
    const {pathname}= useLocation();
 useEffect(() => {
    // Force scroll to top when path changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto', // Or 'smooth' if you want animation
    });
  }, [pathname]);
  return null
}

export default ScrollTop