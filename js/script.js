function initVue() {
    new Vue({
        el: '#app', 
        data: {
            activeIndex: 0,
            contacts : 
            [
                {
                    name: 'Locke',
                    avatar: 'img/avatar1.jfif',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hey, hai per caso visto Celes?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'N-no è da un bel pezzo che non la vedo ',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Strano...!',
                            status: 'received'
                        }
                        ,
                        {
                            date: '10/01/2020 16:16:55',
                            text: 'Se la vedi o la senti avvisami!',
                            status: 'received'
                        }
                        ,
                        {
                            date: '10/01/2020 16:21:12',
                            text: 'Certo',
                            status: 'sent'
                        }
                        ,
                        {
                            date: '10/01/2020 16:25:54',
                            text: 'Credo dovresti chiedere a Terra, potrebbe saperlo',
                            status: 'sent'
                        }
                        ,
                        {
                            date: '10/01/2020 16:32:01',
                            text: 'Ci proverò!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Rinoa',
                    avatar: 'img/avatar2.jfif',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao R-Rinoa, mi ha detto Squall di dirti che stasera ti aspetta fuori la mensa alle 18:30',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Grazie mille! Vieni anche tu con noi?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma..',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:37:15',
                            text: 'Dai vieni! Sarà uno spettacolo divertente e tanto i biglietti li abbiamo!',
                            status: 'received'
                        },
                    ],
                },
                {
                    name: 'Gidan',
                    avatar: 'img/avatar3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Ma chi è questa Marianna di cui parli? Gidan hai bevuto di nuovo?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: '...',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Yuffie',
                    avatar: 'img/avatar4.jfif',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei riavere le mie Materia indietro, Yuffie.',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 19:40:20',
                            text: 'Lo prendo per un no',
                            status: 'sent'
                        }
                    ],
                },
            ],
            newMsg: {
                        date: 'now',
                        text: '',
                        status: 'sent'
                    },

            defaultReply: {
                            date: 'now',
                            text: 'ok',
                            status: 'received'
            },
            contactName: '',
            show: false,
            searchText: '',
            deleteMsg: 'false'


        },
        updated() { 
            var container = this.$el.querySelector("#activeChat");
            container.scrollTop = container.scrollHeight;
        },
        methods: {
            loadMsgClick: function(index){
                this.activeIndex = index;
            },
            botReply: function() {
                this.contacts[this.activeIndex].messages.push(this.defaultReply);
            },
            addNewMsg: function(){
                this.contacts[this.activeIndex].messages.push(this.newMsg);
                setTimeout(this.botReply, 1000)
            },
            lastMessage: function(contact) {
                const indexThis = contact.messages.length - 1;
                const lastDate = contact.messages[indexThis].date; 
                const lastMsg = contact.messages[indexThis].text + '' + lastDate;
                return lastMsg;
            },
            dropdownShow: function(){
                if (this.show== false) {
                    this.show = true;
                } 
                else {
                    this.show = false;
                } 
            },
            searchContact: function() {
                const resContacts = [];
                for(let i=0;i<this.contacts.length;i++) {
                    
                    const contact = this.contacts[i];
                    console.log(contact);
                    const name = contact['name'];
                    if (name.toLowerCase()
                        .includes(this.searchText.toLowerCase())) {
                        resContacts.push(contact);
                    }
                }
                return resContacts;
            },
            deleteCurrentMsg: function(index) {
                const contact = this.contacts[this.activeIndex];
                console.log(contact)
                
               contact.messages.splice(index,1)
            },

            deleteCurrentMsgAlt: function(index){
                const contact = this.contacts[this.activeIndex];
                contact.messages[index].text = 'messaggio eliminato'
            }
        }
    })}

    function init() {
        initVue();
    
    
    }
    document.addEventListener('DOMContentLoaded', init);