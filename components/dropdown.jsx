import clsx from "clsx";
import { get, isEmpty } from "lodash";
import _isEqual from "lodash/isEqual";
import React from "react";
import isEqual from "react-fast-compare";
import { Controller } from "react-hook-form";
import { RefreshControl, TextInput, View, FlatList, TouchableOpacity } from "react-native";

import HorizontalLine from "./horizontal-line";
import Icon from "./icon";
import Modal from "./modal";
import NoDataFound from "./no-data-found";
import Typography from "./typography";
import { ICONS_NAME } from "../constants/iconsName";
import COLORS from "../constants/themeColors";
import { cn } from "../utilities/cn";

const VARIANTS = {
    filled: "bg-input-bg",
    outline: "border border-primary bg-white",
};

const Item = React.memo(({ isSelected, item, onPress }) => {
    return (
        <TouchableOpacity
            onPress={() => {
                onPress({ isSelected, item });
            }}
            className={clsx({
                "bg-neutral-100 flex-row justify-between items-center": isSelected,
                "py-4 px-6": true,
            })}
        >
            <Typography className={clsx({ "": true })} variant={isSelected ? "h5" : "body3"}>
                {item?.label}
            </Typography>
            {isSelected ? <Icon name={ICONS_NAME.check} /> : <></>}
        </TouchableOpacity>
    );
}, isEqual);

const Dropdown = ({
    style = {},
    placeholder = "Select",
    options = [],
    title = "Select Options",
    onChange,
    defaultValue = null,
    onTryAgain,
    searchable = false,
    onChangeSearchInput,
    control,
    name,
    isMulti = false,
    loading = false,
    label,
    required = false,
    variant = "outline",
    disabled = false,
    hideDefaultLabel = false,
}) => {
    const [show, setShow] = React.useState(false);
    // console.log(name, control?);
    const [toggleConditionToUpdateSelectedItem, setToggleConditionToUpdateSelectedItem] =
        React.useState(false);
    const [selectedItem, setSelectedItem] = React.useState(
        isMulti
            ? get(control, `_formValues.${name}`, "")
                ? [...get(control, `_formValues.${name}`, [])]
                : []
            : get(control, `_formValues.${name}`, ""),
    );
    const [previousSelectedItem, setPreviousSelectedItem] = React.useState();

    const [searchInput, setSearchInput] = React.useState("");
    const formOnChangeRef = React.useRef();
    const formValueRef = React.useRef();

    // console.log({ selectedItem });

    const onPress = React.useCallback(
        ({ item, isSelected }) => {
            // if (!isMulti) setShow(false);
            setShow(false);
            let updatedSelectedItem = [];
            let newSelectedItem = "";

            if (!isSelected) newSelectedItem = item;

            // console.log({ selectedItem });

            if (isMulti) {
                updatedSelectedItem = newSelectedItem
                    ? [...selectedItem, newSelectedItem]
                    : selectedItem?.filter?.((perItem) => {
                          // !_isEqual(perItem?.value, item?.value);
                          //   console.log({ perItem });
                          if (typeof perItem === "object" && item?.value == perItem?.value) {
                              return false;
                              // eslint-disable-next-line eqeqeq
                          } else if (perItem == item?.value) {
                              return false;
                          }
                          return true;
                      });
            } else {
                updatedSelectedItem = newSelectedItem;
            }

            // setSelectedItem(updatedSelectedItem);
            // console.log({ updatedSelectedItem });
            // console.log({ updatedSelectedItem });
            formOnChangeRef.current?.(
                isMulti
                    ? updatedSelectedItem
                    : updatedSelectedItem?.value
                      ? updatedSelectedItem?.value
                      : "",
            );
            setSelectedItem(updatedSelectedItem);
            onChange?.(item);
        },
        [selectedItem],
    );

    const renderItem = React.useCallback(
        ({ item, index }) => {
            let isSelected = false;

            // console.log({ item });
            if (isMulti) {
                isSelected = Boolean(
                    selectedItem?.find?.((perItem) => _isEqual(item?.value, perItem?.value)),
                );
            } else {
                // isSelected = _isEqual(item?.value, selectedItem?.value);
                // console.log({ isSelected });
                if (typeof selectedItem === "object" && item?.value == selectedItem?.value) {
                    isSelected = true;
                    // eslint-disable-next-line eqeqeq
                } else if (selectedItem == item?.value) {
                    isSelected = true;
                }
            }

            return <Item isSelected={isSelected} item={item} onPress={onPress} />;
        },
        [selectedItem],
    );

    const updateSelectedItemWithDetails = (item) => {
        // if (name === "subject_id") {
        //     console.log({ name, item });
        // }
        for (const option of options) {
            // eslint-disable-next-line eqeqeq
            if (typeof item === "object" && option?.value == selectedItem?.value) {
                setSelectedItem(option);
                // eslint-disable-next-line eqeqeq
            } else if (item == option?.value) {
                setSelectedItem(option);
            }
        }
    };

    React.useEffect(() => {
        // if (!_isEqual(value, selectedItem)) {
        //     formOnChangeRef.current?.(updatedSelectedItem);
        // }
        // console.log({ name, defaultValue });
        // if (!defaultValue) return;
        updateSelectedItemWithDetails(selectedItem);
    }, [options, toggleConditionToUpdateSelectedItem]);

    React.useEffect(() => {
        onChangeSearchInput?.("");
    }, [show]);

    React.useEffect(() => {
        if (
            isMulti &&
            isEmpty(control?._formValues?.[name]) &&
            !_isEqual(control?._formValues?.[name], selectedItem)
        ) {
            setSelectedItem(isMulti ? [] : "");
        }
    }, [control?._formValues?.[name]]);

    return (
        <View className="relative z-10 px-5 mb-4" style={style}>
            <Controller
                control={control}
                name={name}
                rules={{
                    required: { value: required, message: `${label} is required` },
                }}
                render={({ field: { onBlur, onChange, value }, fieldState: { error } }) => {
                    formOnChangeRef.current = onChange;
                    formValueRef.current = value;

                    if (selectedItem && selectedItem?.value != value && selectedItem != value) {
                        updateSelectedItemWithDetails(value);
                    }

                    if (!selectedItem && value) {
                        updateSelectedItemWithDetails(value);
                    }

                    if (!value) {
                        setSelectedItem("");
                    }
                    // if (name === "subject_id") {
                    //     console.log({ name, selectedItem });
                    // }

                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    // React.useEffect(() => {
                    //     if (selectedItem?.value == value || selectedItem == value) {
                    //         setSelectedItem()
                    //     }
                    //     setSelectedItem(
                    //         isMulti
                    //             ? control?._formValues?.[name]
                    //                 ? [...control._formValues[name]]
                    //                 : []
                    //             : get(control, `_formValues.${name}`, ""),
                    //     );
                    // }, [value]);

                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    // React.useEffect(() => {
                    //     if (selectedItem?.value != value && selectedItem != value) {
                    //         setToggleConditionToUpdateSelectedItem(!toggleConditionToUpdateSelectedItem);
                    //     }
                    // }, [value]);

                    return (
                        <>
                            {label && !hideDefaultLabel ? (
                                <View className="flex-row items-start">
                                    <Typography
                                        className="mb-1 justify-self-end align-text-bottom"
                                        variant="label"
                                    >
                                        {label}
                                    </Typography>
                                    {required ? (
                                        <Typography
                                            className="text-red leading-[30px] ml-0.5"
                                            variant="display4"
                                        >
                                            *
                                        </Typography>
                                    ) : (
                                        <></>
                                    )}
                                </View>
                            ) : (
                                <></>
                            )}
                            <TouchableOpacity
                                disabled={disabled}
                                onPress={() => {
                                    setShow(!show);
                                }}
                                className={cn(
                                    "bg-transparent flex-row items-center space-x-2 rounded-full p-2 px-6 h-16",
                                    VARIANTS[variant],
                                    variant === "outline" ? "border border-neutral-200" : "",
                                )}
                            >
                                <Typography
                                    className={cn({
                                        "flex-1": !isMulti || !selectedItem?.length,
                                        "w-3/5": isMulti && selectedItem?.length,
                                        "text-neutral-500": isEmpty(selectedItem),
                                        // "text-neutral-500":
                                        //     isEmpty(selectedItem) && variant === "filled",
                                        "text-neutral-400": disabled,
                                        "text-xs leading-snug": true,
                                    })}
                                    numberOfLines={1}
                                >
                                    {!isEmpty(selectedItem)
                                        ? isMulti
                                            ? selectedItem?.map?.((perItem, perIndex) => {
                                                  const isLastIndex =
                                                      perIndex === selectedItem.length - 1;
                                                  return (
                                                      <Typography
                                                          key={`${perItem?.label}-${perIndex}`}
                                                      >
                                                          {perItem?.label}
                                                          {isLastIndex ? "" : ", "}
                                                      </Typography>
                                                  );
                                              })
                                            : selectedItem?.label
                                        : placeholder}
                                </Typography>
                                {isMulti && selectedItem?.length ? (
                                    <Typography className="flex-1">
                                        {selectedItem?.length} selected
                                    </Typography>
                                ) : (
                                    <></>
                                )}
                                <View className="ml-auto items-end">
                                    <Icon
                                        name={ICONS_NAME["arrow-down"]}
                                        color={disabled ? "gray" : "black"}
                                    />
                                </View>
                            </TouchableOpacity>
                            <Modal
                                visible={show}
                                onRequestClose={() => {
                                    setShow(!show);
                                }}
                                onPressOverlay={() => {
                                    setShow(false);
                                }}
                                style={{ padding: 0 }}
                            >
                                <View className="flex-1">
                                    <View className="pt-4 pb-2 px-6">
                                        <Typography variant="h2">{title}</Typography>
                                    </View>
                                    <HorizontalLine className="bg-gray-100 mt-4" />
                                    {searchable ? (
                                        <TextInput
                                            className="border m-2 py-1 px-2 rounded-md"
                                            placeholder="Search..."
                                            // value={searchInput}
                                            onChangeText={(input) => {
                                                // console.log(input);
                                                // setSearchInput(input);
                                                onChangeSearchInput?.(input);
                                            }}
                                        />
                                    ) : (
                                        <></>
                                    )}
                                    <FlatList
                                        data={options}
                                        keyExtractor={(item, index) => {
                                            return `${index}-${item.value}`;
                                        }}
                                        renderItem={renderItem}
                                        className=""
                                        ListHeaderComponent={() => {
                                            return <></>;
                                        }}
                                        // ItemSeparatorComponent={() => {
                                        //     return <HorizontalLine className="bg-gray-100" />;
                                        // }}
                                        refreshControl={
                                            <RefreshControl
                                                refreshing={loading}
                                                onRefresh={() => onTryAgain?.()}
                                            />
                                        }
                                        contentContainerStyle={{ paddingBottom: 20, flexGrow: 1 }}
                                        ListEmptyComponent={() => {
                                            return <NoDataFound onTryAgain={onTryAgain} />;
                                        }}
                                    />
                                </View>
                            </Modal>
                            {error ? (
                                <View className="flex-row items-center gap-x-1 mt-1">
                                    <Icon
                                        name={ICONS_NAME.exclamation}
                                        color={COLORS.red.DEFAULT}
                                        size={12}
                                    />
                                    <Typography className="text-red text-[13px]">
                                        {error.message}
                                    </Typography>
                                </View>
                            ) : (
                                <></>
                            )}
                        </>
                    );
                }}
            />
        </View>
    );
};

export default Dropdown;

{
    /* <FlatList
data={options}
keyExtractor={(item, index) => {
    return `${index}-${item.value}`;
}}
renderItem={renderItem}
className=""
ListHeaderComponent={() => {
    return <></>;
}}
// ItemSeparatorComponent={() => {
//     return <HorizontalLine className="bg-gray-100" />;
// }}
refreshControl={<RefreshControl refreshing={loading} onRefresh={() => onTryAgain?.()} />}
contentContainerStyle={{ paddingBottom: 20, flexGrow: 1 }}
ListEmptyComponent={() => {
    return <NoDataFound onTryAgain={onTryAgain} />;
}}
/> */
}
