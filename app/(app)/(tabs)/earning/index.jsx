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

const RatingCard = ({ name, image, date, rating, review }) => {};

export default function Earning() {
    const [isProfileCompleted, setIsProfileCompleted] = useState(false);
    const { session } = useSession();
    const isCustomer = session === "customer";
    const router = useRouter();

    return (
        <Layout headerTitle="Earning" drawerButton>
            <View className="w-full flex-1">
                <Typography>Earning Screen for Carer</Typography>
            </View>
        </Layout>
    );
}
