import { Image,Text, View, StyleSheet , TouchableOpacity} from "react-native";
import { useContext } from "react";
import { PostContext } from "../../App";

export default function Posts ({post, navigation}){
    const {setCurrentPost} = useContext(PostContext);
    const handleTouch = ()=>{
        setCurrentPost(post)
        navigation.navigate("Details")
       
    }

    return(
        <TouchableOpacity onPress={handleTouch}>
        <View style={styles.post}>
            <Image style={styles.image} source={{uri: post.photo}}/>
            <Text style={styles.title}>{post.description}</Text>

        </View>
        </TouchableOpacity>
    )

}

const styles= StyleSheet.create ({
    post:{
        margin: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: "white",
        shadowColor: "black",
        shadowOffset:{width: 1 , height: 2}
    },
    image: {
        width: "100%",
        height: 300,
        borderRadius:10,
        marginBottom:10,
    },
    title: {
        fontSize: 20
    }
})