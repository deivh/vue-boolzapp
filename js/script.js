function initVue() {
    new Vue({
        el: '#app', 
        data: {
            activeIndex: 0,
            contacts : 
            [
                {
                    name: 'Michele',
                    avatar: 'img/avatar1.jfif',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: 'img/avatar2.jfif',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: 'img/avatar3.jfif',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Luisa',
                    avatar: 'img/avatar4.jfif',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
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
            deleteMsg: function() {
                
            }
        }
    })}

    function init() {
        initVue();
    
    
    }
    $(init);