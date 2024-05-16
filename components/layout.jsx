import { DrawerToggleButton } from "@react-navigation/drawer";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, View } from "react-native";

import Button from "./buttons/button";
import IconButton from "./buttons/icon-button";
import Icon from "./icon";
import Typography from "./typography";

import { ICONS_NAME } from "@/constants/iconsName";

const Layout = ({
    center = false,
    hasScrollView = true,
    headerTitle = "",
    drawerButton = false,
    backButton = false,
    rightButton = false,
    children,
    style = {},
    ...props
}) => {
    const router = useRouter();
    return (
        <>
            {headerTitle || backButton || drawerButton ? (
                <View className="flex-row items-center h-20 bg-white border-b border-neutral-100">
                    {/* <Icon name={ICONS_NAME["nav-menu"]} color="#2e1065" size={24} /> */}
                    {drawerButton && <DrawerToggleButton />}
                    {!drawerButton && backButton && (
                        <IconButton
                            className="p-4"
                            onPress={() => {
                                if (router.canGoBack) {
                                    router.back();
                                }
                            }}
                        >
                            <Icon name={ICONS_NAME["arrow-left"]} size={24} />
                        </IconButton>
                    )}

                    {headerTitle && (
                        <Typography
                            variant=""
                            className="font-poppins-medium text-4xl leading-snug"
                        >
                            {headerTitle}
                        </Typography>
                    )}

                    {rightButton && <View className="ml-auto p-4 pr-5">{rightButton}</View>}
                </View>
            ) : (
                <></>
            )}
            <ScrollView
                contentContainerClassName="px-5 py-5 bg-white"
                contentContainerStyle={{
                    ...(center ? { alignItems: "center", justifyContent: "center" } : {}),
                    flexGrow: 1,
                }}
            >
                {children}
            </ScrollView>
        </>
    );
    return hasScrollView ? (
        <ScrollView
            className="flex-1 p-4"
            contentContainerStyle={{ paddingBottom: 60 }}
            style={style}
            {...props}
        >
            {children}
        </ScrollView>
    ) : (
        <View className="flex-1 p-4" style={style} {...props}>
            {children}
        </View>
    );
};

export default Layout;
