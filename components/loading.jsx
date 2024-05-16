import { Box } from "native-base";
import React from "react";
import { ImageBackground, View, StyleSheet } from "react-native";

const backgroundImage = require("../../assets/splash.png");

const Loading = (props) => {
    return (
        <Box flex="1">
            <ImageBackground source={backgroundImage} style={styles.image} />
        </Box>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: `center`,
        alignItems: `center`,
    },
    image: {
        flex: 1,
        resizeMode: `cover`,
        justifyContent: `center`,
    },
});

export default Loading;
