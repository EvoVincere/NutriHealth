import React from "react";
import { WebView } from 'react-native-webview';
import { View,Text,StyleSheet } from "react-native";

const ArticleView1 = () => {
    return(
    <View style={styles.container}>
        <WebView source={{uri: 'https://koran-jakarta.com/fast-food-tidak-mengandung-gizi-yang-cukup-untuk-pertumbuhan?page=all'}}/>
    </View>
    )
}

const ArticleView2 = () => {
    return(
    <View style={styles.container}>
        <WebView source={{uri: 'https://www.alodokter.com/ini-cara-menghilangkan-lemak-di-perut-yang-benar'}}/>
    </View>
    )
}
const ArticleView3 = () => {
    return(
    <View style={styles.container}>
        <WebView source={{uri: 'https://superapps.kompas.com/read/1548780/8-rujak-khas-nusantara-yang-pedas-dan-menyegarkan-rujak-shanghai-disajikan-dengan-seafood'}}/>
    </View>
    )
}
const ArticleView4 = () => {
    return(
    <View style={styles.container}>
        <WebView source={{uri: 'https://nationalgeographic.grid.id/read/13295002/mengapa-perilaku-hidup-sehat-sulit-dijalankan'}}/>
    </View>
    )
}

const ArticleView5 = () => {
    return(
    <View style={styles.container}>
        <WebView source={{uri: 'https://lifestyle.kompas.com/read/2021/05/18/134420120/ketahui-11-penyebab-berat-badan-susah-naik?page=all'}}/>
    </View>
    )
}

const SearchArticle1 = () => {
    return(
        <View style={styles.container}>
            <WebView source={{uri: 'https://portaljember.pikiran-rakyat.com/gaya-hidup/pr-161033423/rahasia-labu-kuning-bisa-ampuh-sembuhkan-diabetes-salah-satunya-kaya-vitamin-dan-antioksidan'}}/>
        </View>
        )
}

const SearchArticle2 = () => {
    return(
        <View style={styles.container}>
            <WebView source={{uri: 'https://www.beritasatu.com/nasional/467865/tahukah-anda-10-rahasia-kesehatan-sayur-kubis'}}/>
        </View>
        )
}

const SearchArticle3 = () => {
    return(
        <View style={styles.container}>
            <WebView source={{uri: 'https://lifestyle.bisnis.com/read/20210807/106/1426929/sudah-tahu-ini-5-rahasia-efek-makan-wortel'}}/>
        </View>
        )
}
const TrendingArticle1 = () => {
    return(
        <View style={styles.container}>
            <WebView source={{uri: 'https://www.briliofood.net/resep/20-resep-sayur-ala-rumahan-enak-sehat-dan-sederhana-191007w.html'}}/>
        </View>
        )
}

const TrendingArticle2 = () => {
    return(
        <View style={styles.container}>
            <WebView source={{uri: 'https://www.kompasiana.com/rakhmaarum/61d93e2606310e29d40283a4/healthy-food-or-fast-food-which-one-will-you-choose-for-your-daily-food'}}/>
        </View>
        )
}

const TrendingArticle3 = () => {
    return(
        <View style={styles.container}>
            <WebView source={{uri: 'https://hot.liputan6.com/read/4378001/8-resep-ayam-sehat-untuk-diet-tetap-makan-enak'}}/>
        </View>
        )
}

const TrendingArticle4 = () => {
    return(
        <View style={styles.container}>
            <WebView source={{uri: 'https://www.briliofood.net/resep/10-resep-sup-khas-nusantara-nikmat-dan-sedap-210527j.html'}}/>
        </View>
        )
}
const googleSearch = () => {
    return(
        <View style={styles.container}>
            <WebView source={{uri: 'https://www.google.com/'}}/>
        </View>
        )
}
export  {ArticleView1,ArticleView2,ArticleView3,ArticleView4,ArticleView5,SearchArticle1,SearchArticle2,SearchArticle3,TrendingArticle1,TrendingArticle2,TrendingArticle3,TrendingArticle4,googleSearch};


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        
    }
})