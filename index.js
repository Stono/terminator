'use strict';
let convnetjs = require('./lib/convnet');

var layer_defs = [];
// input layer of size 1x1x2 (all volumes are 3D)
layer_defs.push({type:'input', out_sx:1, out_sy:1, out_depth:1});

// some fully connected layers
layer_defs.push({type:'fc', num_neurons:20, activation:'relu'});
layer_defs.push({type:'fc', num_neurons:20, activation:'relu'});

// a softmax classifier predicting probabilities for two classes: 0,1
layer_defs.push({type:'softmax', num_classes: 2});

// create a net out of it
var net = new convnetjs.Net();
net.makeLayers(layer_defs);

// the network always works on Vol() elements. These are essentially
// simple wrappers around lists, but also contain gradients and dimensions
// line below will create a 1x1x2 volume and fill it with 0.5 and -1.3


let isArmed = 1;
let isNotArmed = 0;

let shoot = 1;
let dontShoot = 0;

let unarmedPerson = new convnetjs.Vol([isNotArmed]);
let armedPerson = new convnetjs.Vol([isArmed]);

let yesNo = (result) => {
	if(Math.round(result) == dontShoot) {
		return 'no (' + result + ')';
	} else {
		return 'yes - bang (' + result + ')';
	}
};

let askQuestion = () => {
	let fireOnUnarmed = net.forward(unarmedPerson).w[1];
	console.log('  should I shoot the unarmed person?', yesNo(fireOnUnarmed));

	let fireOnArmed = net.forward(armedPerson).w[1];
	console.log('  should I shoot the armed person?', yesNo(fireOnArmed));
};

console.log('terminator is faced with one armed person, and another unarmed person...');
askQuestion();

console.log('');
let learningCycles = 25;
console.log('Telling the terminator ' + learningCycles + ' times that it should shoot an armed person, but not an unarmed person...');

var trainer = new convnetjs.Trainer(net, {learning_rate:0.01, l2_decay:0.001});
for(var y = 0; y < learningCycles; y++) {
	let a = trainer.train(unarmedPerson, dontShoot);
	let b = trainer.train(armedPerson, shoot);
	console.log('  loss:', a.loss, b.loss);
}
console.log('');
console.log('terminator is faced with another two people, one armed, one unarmed');
askQuestion();
