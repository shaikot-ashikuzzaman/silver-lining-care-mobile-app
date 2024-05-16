import { useRouter } from "expo-router";
import { useState } from "react";
import { FlatList, Image, Pressable, View } from "react-native";

import CustomerScheduleCard from "../../../../components/cards/customer-schedule-card";
import HorizontalLine from "../../../../components/horizontal-line";
import Icon from "../../../../components/icon";
import { ICONS_NAME } from "../../../../constants/iconsName";

import Button from "@/components/buttons/button";
import Layout from "@/components/layout";
import Typography from "@/components/typography";
import { useSession } from "@/contexts/authContext";

const DATA = [
    {
        id: 1,
        preference: "Assistant Nurse",
        time: "12:20 AM",
        date: "22 March, 2024",
        carer: { name: "John Doe", phone: "+0181234234234" },
    },
    {
        id: 2,
        preference: "Personal Carer",
        time: "5:30 PM",
        date: "7 April, 2024",
        carer: { name: "Tashauf Ananno", phone: "+239282834" },
    },
    {
        id: 3,
        preference: "Assistant Nurse",
        time: "9:45 AM",
        date: "15 May, 2024",
        carer: { name: "Alauddin", phone: "+4564343435" },
    },
    {
        id: 4,
        preference: "Assistant Nurse",
        time: "9:45 AM",
        date: "15 May, 2024",
        carer: { name: "Alauddin", phone: "+4564343435" },
    },
    {
        id: 5,
        preference: "Assistant Nurse",
        time: "9:45 AM",
        date: "15 May, 2024",
        carer: { name: "Alauddin", phone: "+4564343435" },
    },
    {
        id: 6,
        preference: "Assistant Nurse",
        time: "9:45 AM",
        date: "15 May, 2024",
        carer: { name: "Alauddin", phone: "+4564343435" },
    },
];

const SHIFTS = [
    {
        id: 1,
        customerName: "Shovon Mojumder",
        customerPhone: "+23487291",
        shift: "12:45 PM to 4:50 PM",
    },
    {
        id: 2,
        customerName: "Pavel",
        customerPhone: "+23487291",
        shift: "12:45 PM to 4:50 PM",
    },
    {
        id: 3,
        customerName: "Tausif",
        customerPhone: "+23487291",
        shift: "12:45 PM to 4:50 PM",
    },
];

export default function Index() {
    const [isProfileCompleted, setIsProfileCompleted] = useState(false);
    const { session } = useSession();
    const isCustomer = session === "customer";
    const router = useRouter();

    return (
        <Layout drawerButton>
            <View className="w-full flex-1">
                {isProfileCompleted ? (
                    <>
                        {isCustomer ? (
                            <View className="">
                                <Typography variant="h1">Book Schedule</Typography>
                                <Typography variant="">
                                    Create new schedule for your needs
                                </Typography>
                                <View className="flex-row flex-1 gap-4 mb-10 mt-4">
                                    <Button
                                        title="Home Care"
                                        className="flex-1 bg-teal-500"
                                        titleClassName="text-xs"
                                        onPress={() => {
                                            router.push("/home/create");
                                        }}
                                    />
                                    <Button
                                        title="Medication Support"
                                        className="flex-1"
                                        titleClassName="text-xs"
                                        onPress={() => {
                                            router.push("/home/create");
                                        }}
                                    />
                                </View>

                                <HorizontalLine className="" />

                                <View className="mt-10">
                                    <Typography variant="h1">Upcoming Schedules</Typography>
                                    <CustomerScheduleCard
                                        imageSource={require("../../../../assets/images/woman-1.jpg")}
                                        time="9:00 am, 25 April"
                                        name="Catherine Dsourza"
                                        rate={350}
                                        rating={4.9}
                                        title="Need Emergency Medication"
                                        type="Medication Support"
                                    />
                                    <CustomerScheduleCard
                                        imageSource={require("../../../../assets/images/man-1.jpg")}
                                        time="10:00 pm, 30 April"
                                        name="John Doe"
                                        rate={500}
                                        rating={5.0}
                                        title="Let's Cure Me"
                                        type="Home Care"
                                    />
                                    <CustomerScheduleCard
                                        imageSource={require("../../../../assets/images/woman-1.jpg")}
                                        time="9:00 am, 25 April"
                                        name="Catherine Dsourza"
                                        rate={350}
                                        rating={4.9}
                                        title="Need Emergency Medication"
                                        type="Medication Support"
                                    />
                                    <CustomerScheduleCard
                                        imageSource={require("../../../../assets/images/man-1.jpg")}
                                        time="10:00 pm, 30 April"
                                        name="John Doe"
                                        rate={500}
                                        rating={5.0}
                                        title="Let's Cure Me"
                                        type="Home Care"
                                    />
                                </View>
                            </View>
                        ) : (
                            <FlatList
                                showsVerticalScrollIndicator={false}
                                contentContainerStyle={{ flexGrow: 1, paddingBottom: 60 }}
                                keyExtractor={(item) => item.id?.toString()}
                                data={SHIFTS}
                                renderItem={({ item }) => {
                                    return (
                                        <Pressable
                                            className="bg-white p-4 rounded-md mb-4"
                                            onPress={() => {
                                                router.push({
                                                    pathname: "/(app)/home/[id]",
                                                    params: {
                                                        customerName: item.customerName,
                                                        customerPhone: item.customerPhone,
                                                        shift: item.shift,
                                                    },
                                                });
                                            }}
                                        >
                                            <Typography
                                                variant="subtitle1"
                                                className="text-indigo-500"
                                            >
                                                {item.customerName}
                                            </Typography>
                                            <Typography>
                                                Contact No: {item.customerPhone}
                                            </Typography>
                                            <Typography className="mt-2" variant="subtitle3">
                                                Shift
                                            </Typography>
                                            <Typography>{item.shift}</Typography>
                                        </Pressable>
                                    );
                                }}
                            />
                        )}
                        {/* <View className="pt-4 items-center">
                            <Button
                                onPress={() => {
                                    router.push("/(app)/home/create");
                                }}
                                title={isCustomer ? "Request for New Carer" : "Schedule a Shift"}
                            />
                        </View> */}
                    </>
                ) : (
                    <View className="justify-center items-center flex-1">
                        <Typography variant="h1" className="text-center">
                            Let's complete your profile
                        </Typography>
                        <Typography className="text-center mt-1" variant="body1">
                            Seems like your profile isn't complete yet. Please complete your profile
                            to use our service.
                        </Typography>
                        <Button
                            title="Go to Account"
                            className="mt-8"
                            onPress={() => {
                                setIsProfileCompleted(true);
                                router.navigate("/account");
                            }}
                        />
                    </View>
                )}
            </View>
        </Layout>
    );
}

{
    /* <Typography variant="display1">
                    {isCustomer ? "Already Requested Care" : "Available Shifts"}
                </Typography> */
}

{
    /* <FlatList
                                showsVerticalScrollIndicator={false}
                                contentContainerStyle={{ flexGrow: 1, paddingBottom: 60 }}
                                keyExtractor={(item) => item.id?.toString()}
                                data={DATA}
                                renderItem={({ item }) => {
                                    return (
                                        <Pressable
                                            className="bg-white p-4 rounded-md mb-4"
                                            onPress={() => {
                                                router.push({
                                                    pathname: "/(app)/home/[id]",
                                                    params: {
                                                        preference: "Assistant Nurse",
                                                        time: "12:20 AM",
                                                        date: "22 March, 2024",
                                                        carerName: item.carer.name,
                                                        carerPhone: item.carer.phone,
                                                    },
                                                });
                                            }}
                                        >
                                            <Typography
                                                variant="subtitle1"
                                                className="text-indigo-500"
                                            >
                                                {item.preference}
                                            </Typography>
                                            <Typography className="mt-2">
                                                Carer: {item.carer.name}
                                            </Typography>
                                            <Typography>Contact No: {item.carer.phone}</Typography>
                                            <Typography className="mt-2" variant="subtitle3">
                                                Booked For
                                            </Typography>
                                            <Typography>Date: {item.date}</Typography>
                                            <Typography>Time: {item.time}</Typography>
                                        </Pressable>
                                    );
                                }}
                            /> */
}
