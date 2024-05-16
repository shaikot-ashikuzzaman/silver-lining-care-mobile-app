import {
    AntDesign,
    Feather,
    FontAwesome,
    FontAwesome5,
    Ionicons,
    MaterialIcons,
} from "@expo/vector-icons";
import React from "react";

import { ICONS_NAME } from "../constants/iconsName";

const RenderIconComponent = {
    [ICONS_NAME.batches]: (props) => <FontAwesome5 name="layer-group" {...props} />,
    [ICONS_NAME.profile]: (props) => <FontAwesome5 name="user-circle" {...props} />,
    [ICONS_NAME.students]: (props) => <FontAwesome5 name="user-graduate" {...props} />,
    [ICONS_NAME["course-resources"]]: (props) => <FontAwesome5 name="server" {...props} />,
    [ICONS_NAME.users]: (props) => <FontAwesome5 name="user-friends" {...props} />,
    [ICONS_NAME.home]: (props) => <FontAwesome5 name="home" {...props} />,
    [ICONS_NAME.announcement]: (props) => <FontAwesome5 name="bullhorn" {...props} />,
    [ICONS_NAME.attendance]: (props) => <FontAwesome5 name="tasks" {...props} />,
    [ICONS_NAME.payment]: (props) => <FontAwesome5 name="dollar-sign" {...props} />,
    [ICONS_NAME.calendar]: (props) => <FontAwesome5 name="calendar-alt" {...props} />,
    [ICONS_NAME.assessment]: (props) => <FontAwesome5 name="book" {...props} />,
    [ICONS_NAME.dashboard]: (props) => <FontAwesome name="dashboard" {...props} />,
    [ICONS_NAME.logout]: (props) => <FontAwesome5 name="sign-out-alt" {...props} />,
    [ICONS_NAME["nav-menu"]]: (props) => <FontAwesome name="navicon" {...props} />,
    [ICONS_NAME.plus]: (props) => <FontAwesome5 name="plus" {...props} />,
    [ICONS_NAME.search]: (props) => <FontAwesome5 name="search" {...props} />,
    [ICONS_NAME.view]: (props) => <FontAwesome5 name="eye" {...props} />,
    [ICONS_NAME.clone]: (props) => <FontAwesome5 name="clone" {...props} />,
    [ICONS_NAME.edit]: (props) => <FontAwesome5 name="edit" {...props} />,
    [ICONS_NAME.delete]: (props) => <FontAwesome5 name="trash-alt" {...props} />,
    [ICONS_NAME.clock]: (props) => <FontAwesome5 name="clock" {...props} />,
    [ICONS_NAME.dot]: (props) => <FontAwesome name="circle" {...props} />,
    [ICONS_NAME.previous]: (props) => <FontAwesome5 name="arrow-alt-circle-left" {...props} />,
    [ICONS_NAME.download]: (props) => <FontAwesome name="cloud-download" {...props} />,
    [ICONS_NAME.lock]: (props) => <FontAwesome5 name="lock" {...props} />,
    [ICONS_NAME.unlock]: (props) => <FontAwesome5 name="unlock" {...props} />,
    [ICONS_NAME.phone]: (props) => <FontAwesome5 name="phone-alt" {...props} />,
    [ICONS_NAME["address-card"]]: (props) => <FontAwesome5 name="address-card" {...props} />,
    [ICONS_NAME.remove]: (props) => <FontAwesome name="remove" {...props} />,
    [ICONS_NAME.transfer]: (props) => <FontAwesome name="angle-double-right" {...props} />,
    [ICONS_NAME.bell]: (props) => <FontAwesome name="bell" {...props} />,
    [ICONS_NAME["arrow-down"]]: (props) => <FontAwesome5 name="angle-down" {...props} />,
    [ICONS_NAME["arrow-up"]]: (props) => <FontAwesome5 name="angle-up" {...props} />,
    [ICONS_NAME["arrow-right"]]: (props) => <FontAwesome5 name="angle-right" {...props} />,
    [ICONS_NAME["arrow-left"]]: (props) => <Feather name="arrow-left" {...props} />,
    [ICONS_NAME["arrow-circle-down"]]: (props) => (
        <FontAwesome5 name="arrow-circle-down" {...props} />
    ),
    [ICONS_NAME["arrow-circle-up"]]: (props) => <FontAwesome5 name="arrow-circle-up" {...props} />,
    [ICONS_NAME.info]: (props) => <FontAwesome5 name="info-circle" {...props} />,
    [ICONS_NAME.list]: (props) => <FontAwesome5 name="th-list" {...props} />,
    [ICONS_NAME["list-alt"]]: (props) => <FontAwesome5 name="list-alt" {...props} />,
    [ICONS_NAME.upload]: (props) => <FontAwesome5 name="cloud-upload-alt" {...props} />,
    [ICONS_NAME.key]: (props) => <FontAwesome5 name="key" {...props} />,
    [ICONS_NAME.exclamation]: (props) => <FontAwesome5 name="exclamation-circle" {...props} />,
    [ICONS_NAME.reset]: (props) => <FontAwesome name="repeat" {...props} />,
    [ICONS_NAME.save]: (props) => <FontAwesome5 name="save" {...props} />,
    [ICONS_NAME.check]: (props) => <FontAwesome5 name="check" {...props} />,
    [ICONS_NAME.eye]: (props) => <FontAwesome5 name="eye" {...props} />,
    [ICONS_NAME["eye-slash"]]: (props) => <FontAwesome5 name="eye-slash" {...props} />,
    [ICONS_NAME.account]: (props) => <MaterialIcons name="account-circle" {...props} />,
    [ICONS_NAME.settings]: (props) => <Ionicons name="settings" {...props} />,
    [ICONS_NAME.car]: (props) => <FontAwesome5 name="car" {...props} />,
    [ICONS_NAME.star]: (props) => <AntDesign name="staro" {...props} />,
    [ICONS_NAME.starFill]: (props) => <AntDesign name="star" {...props} />,
    [ICONS_NAME.dollar]: (props) => <FontAwesome name="dollar" {...props} />,
};

const Icon = ({ color, name, size, style, ...props }) => {
    return RenderIconComponent[name]?.({ color, size, style, ...props });
};

export default Icon;
