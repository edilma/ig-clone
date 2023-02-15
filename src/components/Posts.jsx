import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useContext } from "react";
import { PostContext } from "../../App";

export default function Posts({ post, navigation, clickable }) {
    const { setCurrentPost } = useContext(PostContext);
    //console.log("clickable",clickable)
    const handleTouch = () => {

        if (clickable) {
            console.log(post)
            setCurrentPost(post)
            navigation.navigate("Details")
        }


    }

    return (
        <TouchableOpacity onPress={handleTouch}>
            <View style={styles.post}>
                <Image style={styles.image} source={{ uri: post.photo }} />
                <Text style={styles.title}>{post.description}</Text>

            </View>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    post: {
        margin: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: "rgba(95,94,130,0,8)",
        shadowColor: "#black",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.96,
        shadowRadius: 10,
        elevation: 11
    },
    image: {
        width: "100%",
        height: 300,
        borderRadius: 10,
        marginBottom: 10,
        border: 300,
    },
    title: {
        textAlign: "center",
        marginTop: 13,
        fontSize: 19,
        color: "white"

    }
})