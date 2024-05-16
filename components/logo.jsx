import { Image } from "react-native";

const Logo = () => {
    return (
        <Image
            source={require("../assets/images/logo.jpg")}
            className="h-32 my-10"
            resizeMode="contain"
        />
    );
};

export default Logo;
