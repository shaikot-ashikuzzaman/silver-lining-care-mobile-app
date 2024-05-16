import { GestureHandlerRootView } from "react-native-gesture-handler";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
    useFonts,
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_500Medium,
} from "@expo-google-fonts/poppins";
import { Slot, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import "../global.css";
import { View } from "react-native";
import Toast, { ErrorToast, SuccessToast } from "react-native-toast-message";

import { ASSET } from "../constants/assets";
import { SessionProvider } from "../contexts/authContext";

import Icon from "@/components/icon";

export {
    // Catch any errors thrown by the Layout component.
    ErrorBoundary,
} from "expo-router";

export default function Root() {
    const [loaded, error] = useFonts({
        PoppinsRegular: Poppins_400Regular,
        PoppinsMedium: Poppins_500Medium,
        PoppinsSemiBold: Poppins_600SemiBold,
    });

    // console.log({ loaded });

    // Expo Router uses Error Boundaries to catch errors in the navigation tree.
    useEffect(() => {
        if (error) throw error;
    }, [error]);

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    // Set up the auth context and render our layout inside of it.
    return (
        <SessionProvider>
            {/* <Slot /> */}
            <Stack
                screenOptions={{
                    headerShown: false,
                    statusBarHidden: false,
                }}
            >
                <Stack.Screen name="index" />
                <Stack.Screen
                    name="sign-up"
                    options={{
                        // headerShown: true,
                        title: "",
                    }}
                />
                <Stack.Screen name="register-as" />
                {/* <Stack.Screen
                    name="(app)"
                    options={{
                        headerShown: false,
                    }}
                /> */}
            </Stack>
            <Toast
                config={{
                    success: (props) => (
                        <SuccessToast
                            {...props}
                            style={{ borderLeftColor: "white" }}
                            contentContainerStyle={{
                                paddingRight: 12,
                                paddingLeft: 0,
                            }}
                            text1Style={{
                                fontSize: 16,
                                fontFamily: "PoppinsSemiBold",
                                color: "#14b8a6",
                            }}
                            text2Style={{
                                fontSize: 13,
                                fontFamily: "PoppinsRegular",
                            }}
                            renderLeadingIcon={() => (
                                <View className="justify-center p-3">
                                    <Icon name="check" size={18} color="#14b8a6" />
                                </View>
                            )}
                        />
                    ),
                    error: (props) => (
                        <ErrorToast
                            {...props}
                            text2Style={{
                                fontSize: 13,
                                fontFamily: "PoppinsRegular",
                            }}
                            // renderLeadingIcon={() => (
                            //     <View className="justify-center p-3">
                            //         <Icon name="check" size={18} color="green" />
                            //     </View>
                            // )}
                        />
                    ),
                }}
                position="top"
            />
        </SessionProvider>
    );
}
