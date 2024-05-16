import FontAwesome from "@expo/vector-icons/FontAwesome";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { Redirect, Stack, Tabs } from "expo-router";
import { Text, View } from "react-native";

import Icon from "../../../components/icon";
import { ICONS_NAME } from "../../../constants/iconsName";

import Typography from "@/components/typography";
import { useSession } from "@/contexts/authContext";
import { cn } from "@/utilities/cn";

const getTabBarIcon =
    (name) =>
    ({ color, size, focused }) => (
        <Icon name={name} color={focused ? "#7c3aed" : "#737373"} size={size - 3} />
    );

const getTabBarLabel = ({ focused, children }) =>
    focused ? (
        <Typography
            variant="small1"
            className={cn({ "text-violet-500 font-poppins-medium": true })}
        >
            {children}
        </Typography>
    ) : (
        <Typography variant="small1" className={cn({ "text-neutral-500": true })}>
            {children}
        </Typography>
    );

export default function AppLayout() {
    const { session, isLoading } = useSession();
    const isCustomer = session === "customer";

    // You can keep the splash screen open, or render a loading screen like we do here.
    if (isLoading) {
        return <Text>Loading...</Text>;
    }

    // Only require authentication within the (app) group's layout as users
    // need to be able to access the (auth) group and sign in again.
    if (!session) {
        // On web, static rendering will stop here as the user is not authenticated
        // in the headless Node process that the pages are rendered in.
        return <Redirect href="/" />;
    }

    // This layout can be deferred because it's not the root layout.
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                headerTitleAlign: "center",
                // headerLeft: (props) => {
                //     return <DrawerToggleButton />;
                // },
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    // headerShown: false,
                    title: "Home",
                    headerTitle: "",
                    tabBarIcon: getTabBarIcon(ICONS_NAME.home),
                    tabBarLabel: getTabBarLabel,
                }}
            />
            <Tabs.Screen
                name="schedule"
                options={{
                    headerShown: false,
                    headerTitle: "Schedule",
                    title: "Schedule",
                    tabBarIcon: getTabBarIcon(ICONS_NAME.clock),
                    tabBarLabel: getTabBarLabel,
                }}
            />
            <Tabs.Screen
                name="account"
                options={{
                    headerShown: false,
                    headerTitle: "Account",
                    title: "Account",
                    tabBarIcon: getTabBarIcon(ICONS_NAME.account),
                    tabBarLabel: getTabBarLabel,
                }}
            />
            <Tabs.Screen
                name="rating"
                options={{
                    headerShown: false,
                    headerTitle: "Rating",
                    title: "Rating",
                    tabBarIcon: getTabBarIcon(ICONS_NAME.star),
                    tabBarLabel: getTabBarLabel,
                }}
            />
            {isCustomer ? (
                <Tabs.Screen
                    name="earning"
                    options={{
                        headerShown: false,
                        headerTitle: "Earning",
                        title: "Earning",
                        tabBarIcon: getTabBarIcon(ICONS_NAME.dollar),
                        tabBarLabel: getTabBarLabel,
                        headerLeft: (props) => (
                            <View className="h-20 justify-center px-5">
                                <Icon name={ICONS_NAME["nav-menu"]} color="#2e1065" size={24} />
                            </View>
                        ),
                    }}
                />
            ) : (
                <></>
            )}
        </Tabs>
    );
}
