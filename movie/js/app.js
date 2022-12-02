import actorsUI from './actorsUI.mjs';
import mainUI from './mainUI.mjs';
import trailer from './trailer.mjs';

const id = new URL(window.location).searchParams.get('id');

let method = `movie/${id}`;

mainUI(method, '1', '');
actorsUI(`${method}/credits`, '1', '');
trailer(`${method}/videos`, '1', '');
