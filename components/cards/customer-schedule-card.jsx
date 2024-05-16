import React from "react";
import { Image, View } from "react-native";

import { ICONS_NAME } from "../../constants/iconsName";
import { cn } from "../../utilities/cn";
import Icon from "../icon";
import Typography from "../typography";

const CustomerScheduleCard = ({
    imageSource,
    type,
    rating,
    title,
    time,
    rate,
    name,
    className,
}) => {
    return (
        <View
            className={cn(
                "mt-3 border border-neutral-200 rounded-lg flex-row overflow-hidden",
                className,
            )}
        >
            <View className="flex-1 items-center bg-violet-100">
                {/* <Icon name={ICONS_NAME.calendar} size={16} /> */}
                <Image className="flex-1 w-full h-full" source={imageSource} resizeMode="cover" />
            </View>
            <View className="p-4" style={{ flex: 2 }}>
                <View className="">
                    {/* <Icon name={ICONS_NAME.calendar} size={20} /> */}
                    <View className="flex-row items-center justify-between mb-2">
                        <Typography
                            variant="small1"
                            className="px-2 pt-2 pb-1 text-[10px] bg-violet-50 border border-violet-500 leading-tight rounded-full"
                        >
                            {type}
                        </Typography>
                        {rating ? (
                            <View className="flex-row items-center gap-1">
                                <Icon name={ICONS_NAME.star} color="#f97316" />
                                <Typography variant="small1" className="pt-1 text-orange-500">
                                    {rating}
                                </Typography>
                            </View>
                        ) : (
                            <></>
                        )}
                    </View>
                    <Typography
                        variant="h3"
                        className=" leading-snug mt-0.5 text-violet-950"
                        numberOfLines={1}
                    >
                        {title}
                    </Typography>
                </View>

                <View className="flex-row">
                    <View className="flex-row items-center gap-1 mt-2">
                        <Icon name={ICONS_NAME.calendar} color="#14b8a6" size={13} />
                        <Typography variant="h5" className="text-teal-500 pt-1 leading-tight">
                            {time}
                        </Typography>
                    </View>
                </View>

                <Typography variant="h5" className="text-orange-500 leading-snug mt-2">
                    $ {rate}
                </Typography>

                <View className="flex-row items-center gap-1 mt-2">
                    <Typography variant="small1" className="text-neutral-500 ">
                        with
                    </Typography>
                    <Typography variant="h5" className="text-violet-950 ">
                        {name}
                    </Typography>
                </View>
            </View>
        </View>
    );
};

export default CustomerScheduleCard;
