class EventEmitter{

	constructor(){
		this.listeners = {};
	}

	emit(evento, argumentos){
		
		if (this.listeners[evento]){
			this.listeners[evento].forEach(callback => callback(argumentos));

		}
	}


	on(evento, callback){
		
		this.listeners[evento] = this.listeners[evento] || [];
		this.listeners[evento].push(callback);

	}
}

exports = module.exports = EventEmitter;
