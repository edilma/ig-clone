import { useState,useEffect } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
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
         {!posts
         ? <Text> "Its loading..."</Text>
        : posts.map(post=>(
            <Posts key={post.photoId} post ={post} navigation={navigation} />

        ))}
        </ScrollView>
    )
}

const styles= StyleSheet.create({
    feed:{
        backgroundColor: "pink",
       // marginTop  : 40,
        width: '100%',
       
    }
})