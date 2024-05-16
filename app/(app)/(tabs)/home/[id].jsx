import { Stack, useLocalSearchParams } from "expo-router";
import { View } from "react-native";

import Button from "@/components/buttons/button";
import Layout from "@/components/layout";
import Typography from "@/components/typography";
import { useSession } from "@/contexts/authContext";

const DATA = {
    id: 1,
    preference: "Assistant Nurse",
    time: "12:20 AM",
    date: "22 March, 2024",
    carer: { name: "John Doe", phone: "+0181234234234" },
};

export default function HomeDetails() {
    const { session } = useSession();
    const isCustomer = session === "customer";
    const { preference, time, date, carerName, carerPhone, customerPhone, customerName, shift } =
        useLocalSearchParams();

    return (
        <Layout>
            <Stack.Screen
                options={{ headerTitle: isCustomer ? "Carer Details" : "Customer Details" }}
            />
            <View className="bg-white p-4 rounded-md mb-4">
                {isCustomer ? (
                    <>
                        <Typography className="mt-2">Carer: {carerName}</Typography>
                        <Typography>Contact No: {carerPhone}</Typography>
                        <Typography className="mt-2" variant="subtitle3">
                            Booked For
                        </Typography>
                        <Typography>Date: {date}</Typography>
                        <Typography>Time: {time}</Typography>
                        <Typography variant="subtitle1" className="text-indigo-500 mt-2">
                            More details...
                        </Typography>
                    </>
                ) : (
                    <>
                        <Typography>Customer Name: {customerName}</Typography>
                        <Typography variant="subtitle1" className="text-indigo-500 mt-2">
                            More details...
                        </Typography>
                        <Button
                            className="bg-indigo-500 mt-10 mb-2"
                            title="Accept Shift"
                            onPress={() => {}}
                        />
                    </>
                )}
            </View>
        </Layout>
    );
}
