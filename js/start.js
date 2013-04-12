function desctorStart()
{
    var menuStart,
	buttonStart,
	workStart,
	oclokStart,
    panelStart;

	panelStart = document.createElement('div');
	panelStart.className = 'panelStart';
	
	buttonStart = document.createElement('div');
	buttonStart.className = 'buttonStart';
	
	workStart = document.createElement('div');
	workStart.className = 'workStart';
	
	oclokStart = document.createElement('div');
	oclokStart.className = 'oclokStart';
	
	menuStart = document.createElement('div');
	menuStart.className = 'menuStart';

	buttonStart.appendChild(menuStart);
	panelStart.appendChild(buttonStart);
	panelStart.appendChild(workStart);
	panelStart.appendChild(oclokStart);
	this.root = panelStart;
	document.body.appendChild(panelStart);
};

desctorStart();

function newIconStart(){
	var Icon = new Publisher;
	
	Function.prototype.subscribe = function(publisher) {
		publisher.subscribers.push(this); 
		return this; 
	};
	
	Publisher.prototype.deliver = function(data) {
		this.subscribers.forEach(
		function(fn) {
				fn(data);
			}
		);
		return this;
	};
	
	var newIc = function(from) {
		newIcon = document.createElement('div');
		r = document.getElementsByClassName('workStart')[0];
		newIcon.className = 'imgIcon';
		r.appendChild(newIcon);
		this.room=r;
		
	
	};

	newIc.subscribe(Icon);
	Icon.deliver(this.color);

	function Publisher() {
		this.subscribers = [];
	};
};



