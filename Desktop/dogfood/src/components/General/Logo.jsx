import image from "../../assets/images/logo.webp";

const Logo = () => {
    return <a href="/" className="logo">
        <img src={image} alt="DogFood logo" />
        <span>RockDog</span>
    </a>
} 

export default Logo;