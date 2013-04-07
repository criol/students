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
	document.body.appendChild(panelStart);
};
desctorStart();

				
				
	