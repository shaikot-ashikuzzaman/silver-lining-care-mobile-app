import { useRouter } from "expo-router";
import { useState } from "react";
import { FlatList, Image, Pressable, View } from "react-native";

import CarerScheduleCard from "../../../../components/cards/carer-schedule-card";
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
                            <View className="">
                                <Typography variant="h1">Accept Booking</Typography>
                                <Typography variant="">
                                    Accept booking that matches with your schedule
                                </Typography>
                                <View className="flex-row flex-1 gap-4 mb-10 mt-4">
                                    <Button
                                        title="Available Booking"
                                        className="flex-1 bg-teal-500"
                                        titleClassName="text-xs"
                                        onPress={() => {
                                            router.push("/home/accept-booking");
                                        }}
                                    />
                                    <Button
                                        title="Create Schedule"
                                        className="flex-1"
                                        titleClassName="text-xs"
                                        onPress={() => {
                                            router.push("/home/create");
                                        }}
                                    />
                                </View>

                                <HorizontalLine className="" />

                                <View className="mt-10">
                                    <Typography variant="h1">Booked Schedule</Typography>
                                    <CarerScheduleCard
                                        imageSource={require("../../../../assets/images/customer-1.jpg")}
                                        time="9:30 am, 08 April"
                                        name="Catherine Dsourza"
                                        rate={350}
                                        rating={4.9}
                                        title="Need Emergency Medication"
                                        type="Medication Support"
                                        address="12 Homestead Rd"
                                    />
                                    <CarerScheduleCard
                                        imageSource={require("../../../../assets/images/customer-2.jpg")}
                                        time="10:00 pm, 09 April"
                                        name="John Doe"
                                        rate={500}
                                        rating={5.0}
                                        title="Let's Cure Me"
                                        type="Home Care"
                                        address="1/154 Koroit St"
                                    />
                                    <CarerScheduleCard
                                        imageSource={require("../../../../assets/images/customer-1.jpg")}
                                        time="9:00 am, 12 April"
                                        name="Catherine Dsourza"
                                        rate={350}
                                        rating={4.9}
                                        title="Need Emergency Medication"
                                        type="Medication Support"
                                        address="1042 Sydney Rd"
                                    />
                                    <CarerScheduleCard
                                        imageSource={require("../../../../assets/images/customer-2.jpg")}
                                        time="10:00 pm, 17 April"
                                        name="John Doe"
                                        rate={500}
                                        rating={5.0}
                                        title="Let's Cure Me"
                                        type="Home Care"
                                        address="Lorem ipsum"
                                    />
                                </View>
                            </View>
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