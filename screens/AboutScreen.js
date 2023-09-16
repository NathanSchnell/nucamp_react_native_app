import { ScrollView, Text } from "react-native";
import { Avatar, Card, ListItem } from "react-native-elements";
import { PARTNERS } from "../shared/partners";
import { useState } from "react";


const AboutScreen = () => {
    const [partners, setPartners] = useState(PARTNERS);
    return (
        <ScrollView>
        </ScrollView>
    );
};

export default AboutScreen;