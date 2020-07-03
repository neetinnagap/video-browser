import Vue from 'vue';
import App from './App';

new Vue({

    // render: function(createElement) {
    //     return createElement(App)
    // }
    // Equivalent short code below:
    render: h => h(App)
}).$mount('#app'); // Identical to -> el : '#app'