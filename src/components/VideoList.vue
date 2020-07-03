<template>
    <ul class="list-group col-md-4">
        <VideoListItem 
            v-for="video in videos" 
            :key="video.id.videoId" 
            :video="video" 
            @videoSelect="onVideoSelect" ></VideoListItem>
    </ul>
</template>

<script>
import VideoListItem from './VideoListItem';

export default {
    name: "VideoList",
    components: {
        VideoListItem
    },
    // props: {
    //     videos: Array //Also performs validation
    // }
    // Short way below (without validation):
    props: ['videos'],
    methods: {
        onVideoSelect(video) {
            this.$emit('videoSelect', video);
        }
    }
}
</script>

<style>
</style>