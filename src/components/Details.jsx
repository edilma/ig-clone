import { useContext } from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import Posts from "./Posts";
import { PostContext } from "../../App";

export default function Details(){
    const {currentPost} = useContext (PostContext)

    return(
        <ImageBackground
				source={require("../../assets/background-image.png")}
                resizeMode="cover"
				style={styles.bg}
			>
        <View>
            <Posts post={currentPost} clickable={false} />
        </View>
        </ImageBackground>
    )
}

export const  styles= StyleSheet.create ({
bg: {
    flex: 1,
    justifyContent: "center"
}})