const keyboard = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm']
]


// document.addEventListener('keydown', function(event) {
//     console.log(event.key);
// });


const { createApp } = Vue

createApp({
    data() {
        return {
            keyboardTop: keyboard[0],
            keyboardMiddle: keyboard[1],
            keyboardBottom: keyboard[2],
            currentLetterPressed: [],
        }
    },

    methods: {
        // letterClick(e){
        //     console.log('event:', e.target.innerHTML)
        // },
        
    },

    mounted() {
        document.addEventListener('keydown', function(event) {
            console.log(event.key)
        });
    }
    
}).mount('#app')


