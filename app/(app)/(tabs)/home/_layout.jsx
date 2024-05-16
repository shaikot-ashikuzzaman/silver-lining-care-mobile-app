import { DrawerToggleButton } from "@react-navigation/drawer";
import { Stack } from "expo-router";

export default function HomeLayout() {
    return (
        <Stack screenOptions={{ headerShown: true }}>
            <Stack.Screen
                name="index"
                options={{
                    headerShown: false,
                    title: "Home",
                    headerLeft: (props) => {
                        return <DrawerToggleButton />;
                    },
                }}
            />
            <Stack.Screen name="[id]" options={{ headerShown: false }} />
            <Stack.Screen name="create" options={{ headerShown: false }} />
            <Stack.Screen name="payment" options={{ headerShown: false }} />
            <Stack.Screen name="create-payment" options={{ headerShown: false }} />
        </Stack>
    );
}
