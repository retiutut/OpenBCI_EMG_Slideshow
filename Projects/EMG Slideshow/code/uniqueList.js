// inlets and outlets
inlets = 1;
outlets = 1;

var data = [];
var dataUnique;

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
	dataUnique = arrayUnique(data);
	if (dataUnique == null) {	
		outlet(0, dataUnique);
	} else {
		outlet(0, "");
	}
}