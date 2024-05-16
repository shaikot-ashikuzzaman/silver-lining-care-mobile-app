import clsx from "clsx";
import { Text } from "react-native";

import { cn } from "../utilities/cn";

const VARIANTS = {
    small1: "text-xs font-poppins-regular",
    body1: "text-base font-poppins-regular",
    body2: "text-sm font-poppins-medium",
    body3: "text-sm font-poppins-regular",
    label: "text-xl font-poppins-semibold",
    button1: "text-xl font-poppins-regular",
    button2: "text-lg font-poppins-regular",
    caption1: "text-base font-semibold font-poppins-regular",
    h1: "text-5xl font-poppins-semibold",
    h2: "text-4xl font-poppins-semibold",
    h3: "text-3xl font-poppins-semibold",
    h4: "text-2xl font-poppins-semibold",
    h5: "text-xl font-poppins-semibold",
    h6: "text-lg font-poppins-semibold",
    display1: "text-5xl font-poppins-regular",
    display2: "text-4xl font-poppins-regular",
    display3: "text-3xl font-poppins-regular",
    display4: "text-2xl font-poppins-regular",
    display5: "text-xl font-poppins-regular",
    overline1: "text-base uppercase tracking-widest font-poppins-regular",
    overline2: "text-xs uppercase tracking-widest font-poppins-regular",
    subtitle1: "text-xl leading-5 font-poppins-medium",
    subtitle2: "text-lg font-poppins-medium",
    subtitle3: "text-base font-poppins-medium",
};

const Typography = ({ children, className = "", style, variant = "body1", ...props }) => {
    return (
        <Text
            className={cn(VARIANTS[variant ? variant : "body1"], "text-violet-950", className)}
            {...props}
        >
            {children}
        </Text>
    );
};

export default Typography;
