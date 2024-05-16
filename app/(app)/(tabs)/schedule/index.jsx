import { useRouter } from "expo-router";
import { useState } from "react";
import { FlatList, Image, Pressable, View } from "react-native";

import IconButton from "../../../../components/buttons/icon-button";
import CustomerScheduleCard from "../../../../components/cards/customer-schedule-card";
import Icon from "../../../../components/icon";
import Layout from "../../../../components/layout";
import { ICONS_NAME } from "../../../../constants/iconsName";

import Button from "@/components/buttons/button";
import Typography from "@/components/typography";
import { useSession } from "@/contexts/authContext";

export default function Schedule() {
    const [isProfileCompleted, setIsProfileCompleted] = useState(false);
    const { session } = useSession();
    const isCustomer = session === "customer";
    const router = useRouter();

    return (
        <Layout
            headerTitle="Schedule"
            drawerButton
            rightButton={
                <IconButton
                    className=""
                    onPress={() => {
                        router.push("/home/create");
                    }}
                >
                    <Icon name={ICONS_NAME["plus"]} size={16} />
                </IconButton>
            }
        >
            <View className="mb-10">
                <Typography variant="h1">Pending Schedules</Typography>
                <CustomerScheduleCard
                    imageSource={require("../../../../assets/images/default-user.jpg")}
                    time="11:00 am, 29 April"
                    name="-"
                    rate="-"
                    rating=""
                    title="High Fever"
                    type="Medication Support"
                    className="bg-neutral-100"
                />
            </View>
            <View className="">
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
        </Layout>
    );
}
