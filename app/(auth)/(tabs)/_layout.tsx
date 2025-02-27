import { Tabs } from "expo-router"
import {useUserProfile} from "@/hooks/useUserProfile";
import React from "react";
import {TabBar} from "@/components/TabBar";

export default function TabsLayout() {
    const {userProfile} = useUserProfile()
    return (
        <Tabs  tabBar={props => <TabBar {...props} />}
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    tabBarLabel: "Home",
                    headerShown: false,



                }}
            />
            <Tabs.Screen
                name="expense"
                options={{
                    tabBarLabel: "Stats"

                }}
            />
            <Tabs.Screen
                name="history"
                options={{
                    tabBarLabel: "Wallet"
                }}

            />
            <Tabs.Screen
                name="profile"
                options={{
                    tabBarLabel: "Profile"
                }}
            />
        </Tabs>
    )
}

