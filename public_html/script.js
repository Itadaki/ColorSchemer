/* 
 * Autor = Diego Rodríguez Suárez-Bustillo
 * Fecha = 19-dic-2014
 * Licencia = gpl30
 * Version = 1.0
 * Descripcion = 
 */

/* 
 * Copyright (C) 2014 Diego Rodríguez Suárez-Bustillo
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

var colores = 'Retro-024959-037E8C-FFFFFA-F24C27-5F5448;' +
        'Amorcita-011826-023859-03658C-049DBF-F1F2EB;' +
        'Ramo de flores-E15B64-F27F62-FBB36B-ABBC85-849B89;' +
        'Gama-009D84-39BCA4-F1EEDA-4C565E-E75244;' +
        'Hipster-F8555E-4C6A8D-0C9DA9-FBC38D-F14440;' +
        'Vintage-F35E75-00C5A6-95D9C9-F1B2A1-F36F5E;' +
        'Curriculum-1f2023-dddbdc-f6f6f6-39b2e1-e03333';
var separadorGrupos = ';';
var separadorElementos = '-';


function fillSelector() {
    var select = document.getElementById('selector');
    var arrColor = colores.split(separadorGrupos);
    for (var i = 0; i < arrColor.length; i++) {
        var color = arrColor[i].split(separadorElementos);
        var option = new Option(color[0]);
        select.options.add(option);
        console.log('Añadido: ' + color[0]);
    }
}

function setColors() {
    var contenedor = document.getElementById('contenedor');
    contenedor.innerHTML = '';
    var boxes = document.getElementById('boxes');
    boxes.innerHTML = '';
    var index = document.getElementById('selector').selectedIndex;
    var arrColores = colores.split(separadorGrupos)[index].split(separadorElementos);
    for (var i = 1; i < arrColores.length; i++) {
        var color = document.createElement('div');
        color.className = 'color';

        var hex = document.createElement('div');
        hex.style.backgroundColor = '#' + arrColores[i].toUpperCase();
        hex.className = 'hex';

        var name = document.createElement('div');
        name.className = 'name';
        name.innerHTML = arrColores[i].toUpperCase();
//        color.onmouseenter = cambiarInput;

        color.appendChild(hex);
        color.appendChild(name);
        contenedor.appendChild(color);

        //Set boxbar
        var box = document.createElement('div');
        box.className = 'box';
        box.style.backgroundColor = '#' + arrColores[i].toUpperCase();
        boxes.appendChild(box);
    }
}



window.onload = function () {
    fillSelector();
    setColors();
};