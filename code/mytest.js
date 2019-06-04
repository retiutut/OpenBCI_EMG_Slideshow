// inlets and outlets
inlets = 1;
outlets = 1;


var data = [];

var arrayUnique = function (arr) {
	return arr.filter(function(item, index){
		return arr.indexOf(item) >= index;
	});
};

function add(val) {
	data.push(val);
	bang();
}

function clear() {
	data = [];
	bang();
}

function bang() {
	var dataUnique = arrayUnique(data);
	outlet(0, dataUnique);
}