var data = require('./data/data').data;
var states = require('./data/states').states;

var statename=function (stateno)
{
	var statename="none";
	switch(stateno)
	{


case 1:
statename="alabama";
break;

case 2:
statename="alaska";
break;
case 3:
statename="arizona";
break;

case 4:
statename="arkansas";
break;

case 5:
statename="california";
break;

case 6:
statename="colorado";
break;

case 7:
statename="connecticut";
break;

case 8:
statename="delaware";
case 9:
statename="florida";
break;

case 10:
statename="georgia";
break;

case 11:
statename="hawaii";
break;

case 12:
statename="idaho";
break;

case 13:
statename="illinois";
break;

case 14:
statename="indiana";break;

case 15:
statename="iowa";break;

case 16:
statename="kansas";break;

case 17:
statename="kentucky";break;

case 18:
statename="louisiana";break;

case 19:
statename="maine";
break;

case 20:
statename="maryland";break;


case 21:
statename="massachusetts";break;

case 22:
statename="michigan";break;
case 23 :statename="minnesota";break;
case 24: statename="mississippi";break;
case 25: statename="missouri";break;
case 26: statename="montana";break;
case 27: statename="nebraska";break;
case 28:statename= "nevada";break;
case 29: statename="newhampshire";break;
case 30:statename= "newjersey";break;
case 31:statename= "newmexico";break;
case 32: statename="newyork";break;
case 33: statename="northcarolina";break;
case 34: statename="northdakota";break;

case 35:statename= "ohio";break;
case 36: statename="oklahoma";break;
case 37: statename="oregon";break;
case 38:statename= "pennsylvania";break;
case 39: statename="rhodeisland";break;
case 40:statename= "southcarolina";break;
case 41: statename="southdakota";break;
case 42: statename="tennessee";break;
case 43:statename= "texas";break;
case 44: statename="utah";break;
case 45:statename= "vermont" ;break;
case 46:statename= "virginia";break;
case 47:statename= "washington";break;
case 48: statename="west virginia";break;


case 49:statename= "wisconsin";break;
case 50: statename="wyoming";break;







	}

	return statename;
}






var statenameab=function (stateno)
{
	var statename="none";
	switch(stateno)
	{


case 'AL':
statename="alabama";
break;

case 'AK':
statename="alaska";
break;
case 'AZ':
statename="arizona";
break;

case 'AR':
statename="arkansas";
break;

case 'CA':
statename="california";
break;

case 'CO':
statename="colorado";
break;

case 'CT':
statename="connecticut";
break;

case 'DE':
statename="delaware";
case 'FL':
statename="florida";
break;

case 'GA':
statename="georgia";
break;

case 'HI':
statename="hawaii";
break;

case 'ID':
statename="idaho";
break;

case 'IL':
statename="illinois";
break;

case 'IN':
statename="indiana";break;

case 'IA':
statename="iowa";break;

case 'KS':
statename="kansas";break;

case 'KY':
statename="kentucky";break;

case 'LA':
statename="louisiana";break;

case 'ME':
statename="maine";
break;

case 'MD':
statename="maryland";break;


case 'MA':
statename="massachusetts";break;

case 'MI':
statename="michigan";break;
case 'MN' :statename="minnesota";break;
case 'MS': statename="mississippi";break;
case 'MO': statename="missouri";break;
case 'MT': statename="montana";break;
case 'NE': statename="nebraska";break;
case 'NV':statename= "nevada";break;
case 'NH': statename="newhampshire";break;
case 'NJ':statename= "newjersey";break;
case 'NM':statename= "newmexico";break;
case 'NY': statename="newyork";break;
case 'NC': statename="northcarolina";break;
case 'ND': statename="northdakota";break;
case 'OH':statename= "ohio";break;
case 'OK': statename="oklahoma";break;
case 'OR': statename="oregon";break;
case 'PA':statename= "pennsylvania";break;
case 'RI': statename="rhodeisland";break;
case 'SC':statename= "southcarolina";break;
case 'SD': statename="southdakota";break;
case 'TN': statename="tennessee";break;
case 'TX':statename= "texas";break;
case 'UT': statename="utah";break;
case 'VT':statename= "vermont" ;break;
case 'VA':statename= "virginia";break;
case 'WA':statename= "washington";break;
case 'WV': statename="west virginia";break;
case 'WI':statename= "wisconsin";break;
case 'WY': statename="wyoming";break;







	}

	return statename;
}
















var getDistricts = function(zip){
	//convert to string and trim spaces
	
	if(!data[zip]){
		return [];
	}else{
		return data[zip].districts;
	}
}

var confDist = function(zip){  //method to confirm if zip code is in a specific district
	
	
	if(!data[zip])
		return false;
	else
		return true;
}

var getNumOfDistricts = function(state){
	state = state.trim().toLowerCase().replace(/ /g,'_');
	if(!states[state])
		return -1;
	else
		return states[state];
}
var getState=function (zip) {
	zip = zip.toString().trim();
	if(!data[zip]){
		return [];
	}else{
		return data[zip].statename;
	}

}

exports.getNumOfDistricts = getNumOfDistricts;
exports.getDistricts = getDistricts;
exports.confirm = confDist;
exports.statenameab=statenameab;
exports.statename=statename;
exports.getstate=getState;