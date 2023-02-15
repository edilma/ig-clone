import { useState,useEffect } from "react";
import { ScrollView, StyleSheet, Text, ImageBackground } from "react-native";
import Posts from "./Posts";

export default function Feed({navigation}){
    const [posts, setPosts] = useState();
    useEffect(()=>{
        fetch('https://express-ts-c8.web.app/photos')
        .then(res => res.json())
        .then(setPosts)
        .catch(console.error)
    },[])


    return(
        <ScrollView style={styles.feed}>
           <ImageBackground
				source={require("../../assets/background-image.png")}
				style={styles.backgroundImage}
			>
         {!posts
         ? <Text> "Its loading..."</Text>
        : posts.map(post=>(
            <Posts key={post.photoId} post ={post} navigation={navigation}
            clickable={true} />

        ))}
        </ImageBackground>
        </ScrollView>
    )
}

const styles= StyleSheet.create({
    feed:{
        backgroundColor: 'rgba(36,46,80,255)',
       // marginTop  : 40,
        width: '100%',
       
    }
})