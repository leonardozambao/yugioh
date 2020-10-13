//jeito mais limpo
// Vue.component('card-item', {
// template: '<div>A custom component!</div>'
// })

// var CardItem = Vue.extend({
//     props: ['nome', 'idade'],
//     template: '<article class="card_item text-center"><h2>{{nome}}</h2><span>{{idade}}</span></article>',
// })

// Globally register the component with tag: card-item
//jeito mais limpo
// Vue.component('card-item')
// Vue.component('card-item', CardItem)

new Vue({
    el: '#app',
    data: {
        showSets: false,
        cardName: '',
        busca: false,
        card: [],
    },
    methods: {
        getCards: function() {
            this.busca = true;
            this.showSets = false,
            axios
                .get('https://db.ygoprodeck.com/api/v7/cardinfo.php?name='+this.cardName)
                .then(response => {
                    this.card = response.data.data[0];
                    // console.log(this.card);
                })
        },
        toggleSets(){
            this.showSets = !this.showSets;
        }
    }
});
