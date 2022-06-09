let header_grid = document.querySelector('.header-grid');

let div_title = document.createElement('div');
div_title.className = 'header-grid-item';
div_title.innerHTML = '<a href="../index.html" id="title">SPRINGWOOD</a>';

let div_hirek = document.createElement('div');
div_hirek.className = 'header-grid-item';
div_hirek.innerHTML = '<a href="../hirek/index.html" id="hirek">HÍREK</a>';

let div_kozlekedes = document.createElement('div');
div_kozlekedes.className = 'header-grid-item';
div_kozlekedes.innerHTML = '<a href="../kozlekedes/index.html" id="kozlekedes">KÖZLEKEDÉS</a>';

let div_terkep = document.createElement('div');
div_terkep.className = 'header-grid-item';
div_terkep.innerHTML = '<a href="../cities/Screenshot 2022-06-08 173847.png" target="_blank">TÉRKÉP</a>';

let div_cities = document.createElement('div');
div_cities.className = 'header-grid-item';
div_cities.innerHTML = '<a href="https://citiesskylines.com" target="_blank">A CITIESRŐL</a>';

header_grid.appendChild(div_title);
header_grid.appendChild(div_hirek);
header_grid.appendChild(div_kozlekedes);
header_grid.appendChild(div_terkep);
header_grid.appendChild(div_cities);