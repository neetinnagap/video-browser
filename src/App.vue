<template>
    <div class="container">
        <SearchBar @termChange="onTermChange"></SearchBar>
        <div class="row">
            <VideoDetail :video="selectedVideo"></VideoDetail>
            <!-- <VideoList v-bind:videos="videos"></VideoList> -->
            <!-- Short way below: -->
            <VideoList :videos="videos" @videoSelect="onVideoSelect"></VideoList>
        </div>
    </div>
</template>

<script>
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import axios from 'axios';
const API_KEY='AIzaSyDlNnldR1fStKFL3bDKdztq31fP4jAgdvU';

export default {
    name:"App",
    components: {
        SearchBar, // Identical to SearchBar: SearchBar if key and value are same use the shortcut
        VideoList,
        VideoDetail
    },
    data() {
        return {
            videos: [],
            selectedVideo: null
        }
    },
    methods: {
        onVideoSelect(video) {
            this.selectedVideo = video; 
        },
        onTermChange: function(searchTerm) {

            axios.get('https://www.googleapis.com/youtube/v3/search', {
                params: {
                    key: API_KEY,
                    type: 'video',
                    part: 'snippet',
                    q: searchTerm
                }
            }).then(response => this.videos = response.data.items);
        }
    }
}
</script>