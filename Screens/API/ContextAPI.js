import React,{ createContext,useState, useEffect } from "react";
import axios from "axios";
import { getNewsAPI } from "./CallAPI";

export const ArticleContext = createContext();

const Context = ({children}) => {
    const [article, setArticle] = useState([]);
    const [category,setCategory] = useState("general");
    const [index,setIndex] = useState(1);

    const fetchArticle = async() => {
        const {data} = await axios.get(getNewsAPI(category))

        setArticle(data);
        setIndex(1);
    };

    useEffect(()=> {
        fetchArticle();
    },[category])

    return (
    <ArticleContext.Provider value={article,index,setIndex,fetchArticle}>
        {children}
        </ArticleContext.Provider>
    );
}

export default Context;