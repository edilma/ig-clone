import { useContext } from "react";
import { View } from "react-native";
import Posts from "./Posts";
import { PostContext } from "../../App";

export default function Details(){
    const {currentPost} = useContext (PostContext)

    return(
        <View>
            <Posts post={currentPost} />
        </View>
    )
}