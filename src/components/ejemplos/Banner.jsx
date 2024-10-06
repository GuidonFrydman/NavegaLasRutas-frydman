import imgBanner from "../assets/imgbanner.jpg"
import "./banner.css"

const Banner = () => {

    return(
        <div className="banner">
        <img src={imgBanner} alt="" />
        </div>
    )
}

export default Banner