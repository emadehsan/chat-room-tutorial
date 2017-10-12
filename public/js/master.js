var app = new Vue({
	el: '#app',
	data: {
		currentUser: '',
		socket: io(),
		msg: 'Hello WOrld',
		messages: [
			{
				by: 'emad',
				text: 'How are you doing?'
			},
			{
				by: 'qandeel',
				text: 'I am doing great'
			},
			{
				by: 'emad',
				text: 'Meet you soon'
			}
		]
	},
	created() {
		this.currentUser = prompt("What's your name?")
		console.log('created')

		this.socket.on('chatChannel', (chat) => {
	      this.messages.push(chat)
	      window.scrollTo(0, document.body.scrollHeight);
	  })
	},
	methods: {
    send (event) {
			console.log('Send button clicked')

			var by = this.currentUser
			var message = this.msg
			this.socket.emit('chatChannel', {
        text: message,
        by: by
      })

			this.msg = ''
		}
	}
})
