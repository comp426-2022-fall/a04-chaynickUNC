module.exports = function roll(nSides, nDice, nRolls){ 

	var results = [];
	for(var i=0; i<nRolls; i++){
		// results[i] = Math.floor(Math.random() * nSides * nDice + 1); 
		results[i] = 0;
		for(var j=0; j<nDice; j++){ results[i] += Math.floor(Math.random() * nSides + 1)}
	}
	return JSON.stringify({
		"sides": parseInt(nSides),
		"dice": parseInt(nDice), 
		"rolls": parseInt(nRolls), 
		"results": results
	}); 
}
