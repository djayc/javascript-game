var texturePath = require('programmerart-textures')('');
var createGame = require('voxel-engine');

var game = createGame({
    texturePath: texturePath,
    materials: [
        ['blocks/grass_top', 'blocks/dirt', 'blocks/grass_side'],
        'blocks/stone',
        'blocks/dirt']
});
var container = document.body;
game.appendTo(container);