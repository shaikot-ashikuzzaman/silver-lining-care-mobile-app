import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import { FlatList, Image, Pressable, View } from "react-native";

import Icon from "../../../../components/icon";
import { ICONS_NAME } from "../../../../constants/iconsName";

import Button from "@/components/buttons/button";
import Layout from "@/components/layout";
import Typography from "@/components/typography";
import { useSession } from "@/contexts/authContext";

const RatingCard = ({ name, image, date, rating, review }) => {
    return (
        <View className="border border-neutral-200 rounded-lg p-4 mb-4">
            <View className="flex-row gap-3">
                <View>
                    <Image source={image} className="flex-1 w-14 h-14 rounded-full" />
                </View>
                <View className="">
                    <Typography variant="h4">{name}</Typography>
                    <Typography variant="small1" className="text-neutral-500">
                        {date}
                    </Typography>
                </View>
                <View className="flex-row ml-auto gap-1 mt-1">
                    {new Array(parseInt(rating)).fill(0).map((item) => {
                        return <Icon name={ICONS_NAME.starFill} color="#f97316" />;
                    })}
                </View>
            </View>
            <Typography variant="body3" className="text-neutral-500 mt-2">
                {review}
            </Typography>
        </View>
    );
};

export default function Rating() {
    const [isProfileCompleted, setIsProfileCompleted] = useState(false);
    const { session } = useSession();
    const isCustomer = session === "customer";
    const router = useRouter();

    return (
        <>
            {/* <Stack.Screen name="" /> */}
            <Layout headerTitle="Rating" drawerButton>
                <View className="w-full flex-1">
                    {/* <Button
                        title="Medication Support"
                        className="flex-1"
                        titleClassName="text-xs"
                        onPress={() => {
                            router.push("/home/create");
                        }}
                    /> */}
                    <RatingCard
                        name="Ben Stokes"
                        image={require("../../../../assets/images/man-1.jpg")}
                        date="21/03/2024"
                        rating="5"
                        review="Lorem ipsum dolor sit amet consecur acing elit. Provident natus hic alias aperiam laborum suscipit."
                    />
                    <RatingCard
                        name="Ian Bell"
                        image={require("../../../../assets/images/man-1.jpg")}
                        date="15/02/2024"
                        rating="4"
                        review="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi architecto vel excepturi consectetur recusandae, laudantium ut optio doloribus quaerat illo."
                    />
                </View>
            </Layout>
        </>
    );
}
