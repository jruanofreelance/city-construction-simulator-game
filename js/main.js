var timeObtainRewards = 10000,
    timeConsumption = 15000,
    tablero,
    casillas = "",
    totalHouses = 0,
    totalFlats = 0,
    totalOffices = 0,
    totalFactories = 0,
    totalNuclearPlants = 0,
    totalOrchards = 0,
    totalPathways = 0,
    totalWays = 0,
    totalPaveds = 0,
    totalRoads = 0,
    totalWaterWells = 0,
    totalCollectorFoodWilds = 0,
    totalCollectorWoods = 0,
    totalCollectorStones = 0,
    totalCollectorFreshWaters = 0;


//var totalPowerConsumptionCity = 0;
var deleteBuildings = false;

var scores = {
    totaltokens: 10000,
    totalpower: 50,
    totalworkers: 0,
    totalelders: 0,
    totaldiseases: 0,
    totalchildren: 0,
    totalpopulation: 0,
    totalfreshwater: 0,
    totalfood: 0,
    totalwood: 0,
    totalstone: 0,
    totaluranium: 0,
    totalpetroleum: 0,
    totalclay: 0,
    totalsand: 0,
    totaladobebrick: 0,
    totalcookedbrick: 0,
    totalaluminium: 0,
    totaliron: 0,
    totalsteel: 0,
    totalairpollution: 0,
    totalradioactivepollution: 0,
    totalwaterpollution: 0,
    totalnoisepollution: 0,
    totalcopper: 0,
    totalsilver: 0,
    totalgold: 0,
    totalgas: 0,
    totaltin: 0,
    totalplatinum: 0,
    totalsilicon: 0,
    totalbronze: 0,
    totalconcrete: 0,
    totalglass: 0

};

var orchard = {
    tokensvalue: 10,
    powerconsumption: 0,
    population: 0,
    workers: 2,
    rewardtokens: 0,
    rewardpower:0,
    rewardfood: 10
};

var house = {
	tokensvalue: 10,
	powerconsumption: 1,
	population: 5,
	workers: 0,
	rewardtokens: 0,
	rewardpower:0
};

var flat = {
	tokensvalue: 50,
	powerconsumption: 10,
	population: 20,
	workers: 0,
	rewardtokens: 0,
	rewardpower:0
};

var office = {
	tokensvalue: 3000,
	powerconsumption: 20,
	population: 0,
	workers: 50,
	rewardtokens: 100,
	rewardpower: 0
};

var nuclearPlant = {
	tokensvalue: 100,
	powerconsumption: 0,
	population: 0,
	workers: 10,
	rewardtokens: 0,
	rewardpower: 50
};

var factory = {
	tokensvalue: 1000,
	powerconsumption: 50,
	population: 0,
	workers: 20,
	rewardtokens: 10,
	rewardpower: 0
};

var pathway = {
	tokensvalue: 1,
	powerconsumption: 0,
	population: 0,
	workers: 0,
	rewardtokens: 0,
	rewardpower: 0
};

var way = {
	tokensvalue: 1,
	powerconsumption: 0,
	population: 0,
	workers: 0,
	rewardtokens: 0,
	rewardpower: 0
};

var paved = {
	tokensvalue: 1,
	powerconsumption: 0,
	population: 0,
	workers: 0,
	rewardtokens: 0,
	rewardpower: 0
};

var road = {
	tokensvalue: 5,
	powerconsumption: 0,
	population: 0,
	workers: 0,
	rewardtokens: 0,
	rewardpower: 0
};

var waterWell = {
	tokensvalue: 5,
	powerconsumption: 0,
	population: 0,
	workers: 0,
	rewardtokens: 0,
	rewardpower: 0,
	rewardwater: 1,
	freshwaterconsumption: 2
};



var collectorFoodWild = {
	tokensvalue: 5,
	powerconsumption: 0,
	population: 0,
	workers: 2,
	rewardtokens: 0,
	rewardpower: 0,
  rewardfood: 10,
  foodwildconsumption: 2
};

var collectorWood = {
	tokensvalue: 5,
	powerconsumption: 0,
	population: 0,
	workers: 2,
	rewardtokens: 0,
	rewardpower: 0,
	rewardwood: 1,
  woodconsumption: 2
};

var collectorStone = {
	tokensvalue: 5,
	powerconsumption: 0,
	population: 0,
	workers: 2,
	rewardtokens: 0,
	rewardpower: 0,
	rewardstone: 1,
  stoneconsumption: 2
};

var collectorFreshWater = {
	tokensvalue: 5,
	powerconsumption: 0,
	population: 0,
	workers: 2,
	rewardtokens: 0,
	rewardpower: 0,
	rewardwater: 1,
  freshwaterconsumption: 2
};

var numberOfcells = 391,
    columns = 23,
    rows = 17,
    rawMaterialsCellsArray = [];

var rawMaterialsCells = {
	saltwater: 80,
	freshwater: 10,
  foodwild: 10,
	clay: 2,
	petroleum: 20,
  swamp: 10,
	wood: 10,
	sand: 5,
	uranium: 5,
	stone: 10

};

var saltWaterCellVolume = 10000,
    freshWaterCellVolume = 10,
    foodWildCellVolume = 300,
    clayCellVolume = 500,
    petroleumCellVolume = 300,
    swampCellVolume = 300,
    woodCellVolume = 300,
    sandCellVolume = 300,
    uraniumCellVolume = 300,
    stoneCellVolume = 300,
    hasFlexDataCell = false,
    hasFlexScores = false,
    hasFlexMaterials = false,
    hasFlexProcessedProducts = false,
    hasFlexPollution = false,
    hasFlex0 = false,
    hasFlex1 = false,
    hasFlex2 = false,
    hasFlex3 = false,
    hasFlex4 = false,
    hasFlex5 = false;

$(document).ready(function(){

	tablero = $(".tablero");

	for (var i = 0; i < numberOfcells; i++) {

		rawMaterialsCellsArray.push(false);

		casillas += "<li id='"+i+"'><li/>";

	}

	tablero.append(casillas);

	distributeRawMaterialCellsInMap();

	$(".tablero li").each(function() {

		if(!$(this).prop("id")){

			$(this).remove();

		}

	});

	$('.house').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

    $('.flat').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

    $('.office').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

    $('.nuclearPlant').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

    $('.factory').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

    $('.road-c').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

    /* Stone Age */
    $('.collectorFoodWild').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

    $('.collectorWood').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

    $('.collectorStone').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

    $('.collectorFreshWater').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

    $('.pathway-c').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

    $('.pathway-e').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

    $('.pathway-eo').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

    $('.pathway-n').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

    $('.pathway-ne').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

    $('.pathway-no').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

    $('.pathway-ns').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

    $('.pathway-o').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

    $('.pathway-s').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

    $('.pathway-se').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

    $('.pathway-so').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

    $('.pathway-te').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

    $('.pathway-tn').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

    $('.pathway-to').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

    $('.pathway-ts').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

    /* Metal Age */
    $('.way-c').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

    $('.way-e').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

    $('.way-eo').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

    $('.way-n').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

    $('.way-ne').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

    $('.way-no').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

    $('.way-ns').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

    $('.way-o').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

    $('.way-s').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

    $('.way-se').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

    $('.way-so').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

    $('.way-te').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

    $('.way-tn').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

    $('.way-to').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

    $('.way-ts').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

    $('.orchardVertical').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

    $('.orchardHorizontal').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

    $('.orchardDiagonal1').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

    $('.orchardDiagonal2').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

    /* Old Age */
    $('.paved-c').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

    $('.paved-e').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

    $('.paved-eo').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

    $('.paved-n').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

    $('.paved-ne').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

    $('.paved-no').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

    $('.paved-ns').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

    $('.paved-o').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

    $('.paved-s').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

    $('.paved-se').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

    $('.paved-so').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

    $('.paved-te').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

    $('.paved-tn').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

    $('.paved-to').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

    $('.paved-ts').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });
	/* Middle Age */

	/* Modern Age */

    /* Contemporary Age */
    $('.road-c').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

    $('.road-e').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

    $('.road-eo').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

    $('.road-n').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

    $('.road-ne').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

    $('.road-no').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

    $('.road-ns').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

    $('.road-o').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

    $('.road-s').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

    $('.road-se').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

    $('.road-so').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

    $('.road-te').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

    $('.road-tn').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

    $('.road-to').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

    $('.road-ts').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

    $('.waterWell').draggable({
        revert: true,
        helper: "clone",
        cursor: "pointer",
        revertDuration: 0
    });

	$('.tablero li').droppable({
        accept: ".collectorFoodWild, .collectorWood, .collectorStone, .collectorFreshWater, .orchardVertical, .orchardHorizontal, .orchardDiagonal1, .orchardDiagonal2, .waterWell, .house, .flat, .office, .factory, .nuclearPlant, .pathway-c, .pathway-e, .pathway-eo, .pathway-n, .pathway-ne, .pathway-no, .pathway-ns, .pathway-o, .pathway-s, .pathway-se, .pathway-so, .pathway-te, .pathway-tn, .pathway-to, .pathway-ts, .way-c, .way-e, .way-eo, .way-n, .way-ne, .way-no, .way-ns, .way-o, .way-s, .way-se, .way-so, .way-te, .way-tn, .way-to, .way-ts, .paved-c, .paved-e, .paved-eo, .paved-n, .paved-ne, .paved-no, .paved-ns, .paved-o, .paved-s, .paved-se, .paved-so, .paved-te, .paved-tn, .paved-to, .paved-ts, .road-c, .road-e, .road-eo, .road-n, .road-ne, .road-no, .road-ns, .road-o, .road-s, .road-se, .road-so, .road-te, .road-tn, .road-to, .road-ts",
        drop: function(event, ui) {

	        if($(this).find("i").length){

	            message = "Is already a construction";

	            $("#messages").css("color","red");
	            $("#messages").text(message).fadeOut(1000,function(){
	            	$("#messages").text("");
	            	$("#messages").css("display","block");
	            });

	        }else{

	            var $item = ui.draggable.clone(),
    	            construccion = $item[0].classList[0],
    	            cellWhereToBuild = $(this).find("i").prevObject[0],
    	            hasFreshWater = $(cellWhereToBuild).hasClass("colorWater"),
                  hasWood = $(cellWhereToBuild).hasClass("colorWood"),
                  hasStone = $(cellWhereToBuild).hasClass("colorStone"),
                  hasFoodWild = $(cellWhereToBuild).hasClass("colorFoodWild"),
    	            hasSaltWater = $(cellWhereToBuild).hasClass("colorSaltWater"),
                  hasSwamp = $(cellWhereToBuild).hasClass("colorSwamp");

	            $(this).html($item);
	            var self = this,
    	            messageOne = "Not Tokens",
    	            messageTwo = "Not Workers",
    	            messageThree = "Not Fresh Water",
    	            messageFour = "Not construction in SaltWater",
                  messageFive = "Not construction in Swamp",
                  messageSix = "Not Elders",
                  messageSeven = "Not Children",
                  messageEight = "Not Wood",
                  messageNine = "Not Stone",
									messageTen = "Not Food Wild",
									messageEleven = "Not construction in Fresh Water",
									color = "red";
									

	            switch (construccion) {
					case "house":

						if(hasSaltWater){

							insertMessage(self, messageFour, color);

						}else if (hasFreshWater) {

							insertMessage(self, messageEleven, color);

            }else if(hasSwamp){

              insertMessage(self, messageFive, color);

						}else if(scores.totaltokens <= 0 || (scores.totaltokens - house.tokensvalue) < 0){

	          	insertMessage(self, messageOne, color);

						}else{

							totalHouses++;
							scores.totalpopulation += house.population;
							scorePopulationContainer.text(scores.totalpopulation);
							scores.totaltokens -= house.tokensvalue;
							scoreTokenContainer.text(scores.totaltokens);

							generateWorkers(construccion);
              generateElders(construccion);
              generateChildren(construccion);

						}

						break;
					case "flat":

						if(hasSaltWater){

							insertMessage(self, messageFour, color);

						} else if (hasFreshWater) {

							insertMessage(self, messageEleven, color);

						}else if(hasSwamp){

              insertMessage(self, messageFive, color);

            }else if(scores.totaltokens <= 0 || (scores.totaltokens - flat.tokensvalue) < 0){

							insertMessage(self, messageOne, color);

						}else{

							totalFlats++;
							scores.totalpopulation += flat.population;
							scorePopulationContainer.text(scores.totalpopulation);
							scores.totaltokens -= flat.tokensvalue;
							scoreTokenContainer.text(scores.totaltokens);

							generateWorkers(construccion);
              generateElders(construccion);
              generateChildren(construccion);

						}

						break;
					case "office":

						if(hasSaltWater){

							insertMessage(self, messageFour, color);

						} else if (hasFreshWater) {

							insertMessage(self, messageEleven, color);

						}else if(hasSwamp){

              insertMessage(self, messageFive, color);

            }else if(scores.totaltokens <= 0 || (scores.totaltokens - office.tokensvalue) < 0){

							insertMessage(self, messageOne, color);

						}else if(scores.totalworkers <= 0 || (scores.totalworkers - office.workers) < 0){

				      insertMessage(self, messageTwo, color);

						}else{

							totalOffices++;
							scores.totaltokens -= office.tokensvalue;
							scoreTokenContainer.text(scores.totaltokens);
							scores.totalworkers -= office.workers;
							scoreWorkerContainer.text(scores.totalworkers);

						}

						break;
					case "nuclearPlant":

						if(hasSaltWater){

							insertMessage(self, messageFour, color);

						} else if (hasFreshWater) {

							insertMessage(self, messageEleven, color);

						}else if(hasSwamp){

              insertMessage(self, messageFive, color);

            }else if(scores.totaltokens <= 0 || (scores.totaltokens - nuclearPlant.tokensvalue) < 0){

							insertMessage(self, messageOne, color);

				    }else if(scores.totalworkers <= 0 || (scores.totalworkers - nuclearPlant.workers) < 0){

				      insertMessage(self, messageTwo, color);

						}else{

							totalNuclearPlants++;
							scores.totaltokens -= nuclearPlant.tokensvalue;
							scoreTokenContainer.text(scores.totaltokens);
							scores.totalworkers -= nuclearPlant.workers;
							scoreWorkerContainer.text(scores.totalworkers);

						}

						break;
					case "factory":

						if(hasSaltWater){

							insertMessage(self, messageFour, color);

						} else if (hasFreshWater) {

							insertMessage(self, messageEleven, color);

						}else if(hasSwamp){

              insertMessage(self, messageFive, color);

            }else if(scores.totaltokens <= 0 || (scores.totaltokens - factory.tokensvalue) < 0){

							insertMessage(self, messageOne, color);


				    }else if(scores.totalworkers <= 0 || (scores.totalworkers - factory.workers) < 0){

				      insertMessage(self, messageTwo, color);

						}else{

							totalFactories++;
							scores.totaltokens -= factory.tokensvalue;
							scoreTokenContainer.text(scores.totaltokens);
							scores.totalworkers -= factory.workers;
							scoreWorkerContainer.text(scores.totalworkers);

						}

						break;
            case "collectorFreshWater":

  						if(hasSaltWater){

  							insertMessage(self, messageFour, color);

							}else if(hasSwamp){

                insertMessage(self, messageFive, color);

              }else if(hasFreshWater){

  							if(scores.totaltokens <= 0 || (scores.totaltokens - collectorFreshWater.tokensvalue) < 0){

  								insertMessage(self, messageOne, color);

  							}else{

  								totalCollectorFreshWaters++;
  								scores.totaltokens -= collectorFreshWater.tokensvalue;
  								scoreTokenContainer.text(scores.totaltokens);

  							}

  						}else{

  							insertMessage(self, messageThree, color);

  						}

  						break;
              case "collectorWood":

    						if(hasSaltWater){

    							insertMessage(self, messageFour, color);

								} else if (hasFreshWater) {

									insertMessage(self, messageEleven, color);

								}else if(hasSwamp){

                  insertMessage(self, messageFive, color);

                }else if(hasWood){

    							if(scores.totaltokens <= 0 || (scores.totaltokens - collectorWood.tokensvalue) < 0){

    								insertMessage(self, messageOne, color);

    							}else{

    								totalCollectorWoods++;
    								scores.totaltokens -= collectorWood.tokensvalue;
    								scoreTokenContainer.text(scores.totaltokens);

    							}

    						}else{

    							insertMessage(self, messageEight, color);

    						}

    						break;
                case "collectorStone":

      						if(hasSaltWater){

      							insertMessage(self, messageFour, color);

									} else if (hasFreshWater) {

										insertMessage(self, messageEleven, color);

									}else if(hasSwamp){

                    insertMessage(self, messageFive, color);

                  }else if(hasStone){

      							if(scores.totaltokens <= 0 || (scores.totaltokens - collectorStone.tokensvalue) < 0){

      								insertMessage(self, messageOne, color);

      							}else{

      								totalCollectorStones++;
      								scores.totaltokens -= collectorStone.tokensvalue;
      								scoreTokenContainer.text(scores.totaltokens);

      							}

      						}else{

      							insertMessage(self, messageNine, color);

      						}

      						break;
                  case "collectorFoodWild":

        						if(hasSaltWater){

        							insertMessage(self, messageFour, color);

										} else if (hasFreshWater) {

											insertMessage(self, messageEleven, color);

										}else if(hasSwamp){

                      insertMessage(self, messageFive, color);

                    }else if(hasFoodWild){

        							if(scores.totaltokens <= 0 || (scores.totaltokens - collectorFoodWild.tokensvalue) < 0){

        								insertMessage(self, messageOne, color);

        							}else{

        								totalCollectorFoodWilds++;
        								scores.totaltokens -= collectorFoodWild.tokensvalue;
        								scoreTokenContainer.text(scores.totaltokens);

        							}

        						}else{

        							insertMessage(self, messageTen, color);

        						}

        						break;
					case "pathway-c":
					case "pathway-e":
					case "pathway-eo":
					case "pathway-n":
					case "pathway-ne":
					case "pathway-no":
					case "pathway-ns":
					case "pathway-o":
					case "pathway-s":
					case "pathway-se":
					case "pathway-so":
					case "pathway-te":
					case "pathway-tn":
					case "pathway-to":
					case "pathway-ts":

						if(hasSaltWater){

							insertMessage(self, messageFour, color);

						} else if (hasFreshWater) {

							insertMessage(self, messageEleven, color);

						}else if(hasSwamp){

              insertMessage(self, messageFive, color);

            }else if(scores.totaltokens <= 0 || (scores.totaltokens - pathway.tokensvalue) < 0){

							insertMessage(self, messageOne, color);

						}else{

							totalPathways++;
							scores.totaltokens -= pathway.tokensvalue;
							scoreTokenContainer.text(scores.totaltokens);

						}

						break;

					case "way-c":
					case "way-e":
					case "way-eo":
					case "way-n":
					case "way-ne":
					case "way-no":
					case "way-ns":
					case "way-o":
					case "way-s":
					case "way-se":
					case "way-so":
					case "way-te":
					case "way-tn":
					case "way-to":
					case "way-ts":

						if(hasSaltWater){

							insertMessage(self, messageFour, color);

						} else if (hasFreshWater) {

							insertMessage(self, messageEleven, color);

						}else if(hasSwamp){

              insertMessage(self, messageFive, color);

            }else if(scores.totaltokens <= 0 || (scores.totaltokens - way.tokensvalue) < 0){

							insertMessage(self, messageOne, color);

						}else{

							totalWays++;
							scores.totaltokens -= way.tokensvalue;
							scoreTokenContainer.text(scores.totaltokens);

						}

						break;
                    case "orchardVertical":
                    case "orchardHorizontal":
                    case "orchardDiagonal1":
                    case "orchardDiagonal2":

                        if(hasSaltWater){

                            insertMessage(self, messageFour, color);

												} else if (hasFreshWater) {

													insertMessage(self, messageEleven, color);

												}else if(hasSwamp){

                            insertMessage(self, messageFive, color);

                        }else if(scores.totaltokens <= 0 || (scores.totaltokens - orchard.tokensvalue) < 0){

                            insertMessage(self, messageOne, color);


                        }else if(scores.totalworkers <= 0 || (scores.totalworkers - orchard.workers) < 0){

                            insertMessage(self, messageTwo, color);

                        }else{

                            totalOrchards++;
                            scores.totaltokens -= orchard.tokensvalue;
                            scoreTokenContainer.text(scores.totaltokens);
                            scores.totalworkers -= orchard.workers;
                            scoreWorkerContainer.text(scores.totalworkers);

                        }

                        break;
					case "paved-c":
					case "paved-e":
					case "paved-eo":
					case "paved-n":
					case "paved-ne":
					case "paved-no":
					case "paved-ns":
					case "paved-o":
					case "paved-s":
					case "paved-se":
					case "paved-so":
					case "paved-te":
					case "paved-tn":
					case "paved-to":
					case "paved-ts":

						if(hasSaltWater){

							insertMessage(self, messageFour, color);

						} else if (hasFreshWater) {

							insertMessage(self, messageEleven, color);

						}else if(hasSwamp){

              insertMessage(self, messageFive, color);

            }else if(scores.totaltokens <= 0 || (scores.totaltokens - paved.tokensvalue) < 0){

							insertMessage(self, messageOne, color);

						}else{

							totalPaveds++;
							scores.totaltokens -= paved.tokensvalue;
							scoreTokenContainer.text(scores.totaltokens);

						}

						break;

					case "road-c":
					case "road-e":
					case "road-eo":
					case "road-n":
					case "road-ne":
					case "road-no":
					case "road-ns":
					case "road-o":
					case "road-s":
					case "road-se":
					case "road-so":
					case "road-te":
					case "road-tn":
					case "road-to":
					case "road-ts":

						if(hasSaltWater){

							insertMessage(self, messageFour, color);

						} else if (hasFreshWater) {

							insertMessage(self, messageEleven, color);

						}else if(hasSwamp){

              insertMessage(self, messageFive, color);

            }else if(scores.totaltokens <= 0 || (scores.totaltokens - road.tokensvalue) < 0){

							insertMessage(self, messageOne, color);

						}else{

							totalRoads++;
							scores.totaltokens -= road.tokensvalue;
							scoreTokenContainer.text(scores.totaltokens);

						}

						break;
					case "waterWell":

						if(hasSaltWater){

							insertMessage(self, messageFour, color);

						}else if(hasSwamp){

              insertMessage(self, messageFive, color);

            }else if(hasFreshWater){

							if(scores.totaltokens <= 0 || (scores.totaltokens - waterWell.tokensvalue) < 0){

								insertMessage(self, messageOne, color);

							}else{

								totalWaterWells++;
								scores.totaltokens -= waterWell.tokensvalue;
								scoreTokenContainer.text(scores.totaltokens);

							}

						}else{

							insertMessage(self, messageThree, color);

						}

						break;
					default:
						console.log('Error');
				}

			}

        }

    });

    initializeScores();

    $("#changeMode").click(function(e){
    	e.preventDefault();
    	var text = $(".titleConstrucciones").text();
    	if(text === "Buildings:"){
    		$("#changeMode").removeClass("modeDerribo");
    		$("#changeMode").addClass("modeContruyo");
    		$(".titleConstrucciones").text("Delete Buildings Mode");
    		deleteBuildings = true;
    		$(".containerContrucciones").css("display","none");
    		$(".qa").css("display","none");
    		$(".mode").css("color","green");
    		$("body").css("cursor","url(images/cursor1.png), auto");
    		$("li").children().css("cursor","url(images/cursor1.png), auto");
    	}else{
    		$("#changeMode").removeClass("modeContruyo");
    		$("#changeMode").addClass("modeDerribo");
    		$(".titleConstrucciones").text("Buildings:");
    		deleteBuildings = false;
    		$(".containerContrucciones").css("display","");
    		$(".qa").css("display","");
    		$("body").css("cursor","default");
    		$("li").children().css("cursor","default");
    	}
    });

    $('li').click(function(e){
		e.preventDefault();

    	if(deleteBuildings === true){

    		if($(e.currentTarget).children().length > 0){

    			var buildingDeleted = $(e.currentTarget).children()[0].classList[0];
    			var workersDeleted = 0;
          var eldersDeleted = 0;
          var childrenDeleted = 0;

    			switch (buildingDeleted) {
					case "house":
						workersDeleted = 2;
            eldersDeleted = 1;
            childrenDeleted = 2;
						scores.totalpopulation -= house.population;
						scores.totaltokens += 3;
						totalHouses--;
						break;
					case "flat":
						workersDeleted = 8;
            eldersDeleted = 4;
            childrenDeleted = 8;
						scores.totalpopulation -= flat.population;
						scores.totaltokens += 16;
						totalFlats--;
						break;
					case "office":
						scores.totalworkers += office.workers;
						scores.totaltokens += 1000;
						totalOffices--;
						break;
					case "nuclearPlant":
						scores.totalworkers += nuclearPlant.workers;
						scores.totaltokens += 33;
						totalNuclearPlants--;
						break;
					case "factory":
						scores.totalworkers += factory.workers;
						scores.totaltokens += 333;
						totalFactories--;
						break;


          case "collectorFreshWater":
  						scores.totaltokens += 1;
  						totalCollectorFreshWaters--;
  				break;
          case "collectorWood":
    					scores.totaltokens += 1;
    					totalCollectorWoods--;
    			break;
          case "collectorFoodWild":
      				scores.totaltokens += 1;
      				totalCollectorFoodWilds--;
      		break;
          case "collectorStones":
        			scores.totaltokens += 1;
        			totalCollectorStones--;
        	break;


					case "pathway-c":
					case "pathway-e":
					case "pathway-eo":
					case "pathway-n":
					case "pathway-ne":
					case "pathway-no":
					case "pathway-ns":
					case "pathway-o":
					case "pathway-s":
					case "pathway-se":
					case "pathway-so":
					case "pathway-te":
					case "pathway-tn":
					case "pathway-to":
					case "pathway-ts":
						scores.totaltokens += 1;
						totalPathways--;
						break;

					case "way-c":
					case "way-e":
					case "way-eo":
					case "way-n":
					case "way-ne":
					case "way-no":
					case "way-ns":
					case "way-o":
					case "way-s":
					case "way-se":
					case "way-so":
					case "way-te":
					case "way-tn":
					case "way-to":
					case "way-ts":
						scores.totaltokens += 1;
						totalWays--;
						break;
                    case "orchardVertical":
                    case "orchardHorizontal":
                    case "orchardDiagonal1":
                    case "orchardDiagonal2":
                        scores.totalworkers += orchard.workers;
                        scores.totaltokens += 1;
                        totalOrchards--;
                        break;
					case "paved-c":
					case "paved-e":
					case "paved-eo":
					case "paved-n":
					case "paved-ne":
					case "paved-no":
					case "paved-ns":
					case "paved-o":
					case "paved-s":
					case "paved-se":
					case "paved-so":
					case "paved-te":
					case "paved-tn":
					case "paved-to":
					case "paved-ts":
						scores.totaltokens += 1;
						totalPaveds--;
						break;
					case "road-c":
					case "road-e":
					case "road-eo":
					case "road-n":
					case "road-ne":
					case "road-no":
					case "road-ns":
					case "road-o":
					case "road-s":
					case "road-se":
					case "road-so":
					case "road-te":
					case "road-tn":
					case "road-to":
					case "road-ts":
						scores.totaltokens += 1;
						totalRoads--;
						break;
					case "waterWell":
						scores.totaltokens += 1;
						totalWaterWells--;
						break;
					default:
						console.log('Error');

				}

				scores.totalworkers -= workersDeleted;
				scoreWorkerContainer.text(scores.totalworkers);
        scores.totalelders -= eldersDeleted;
        scoreEldersContainer.text(scores.totalelders);
        scores.totalchildren -= childrenDeleted;
        scoreChildrenContainer.text(scores.totalchildren);
				scoreTokenContainer.text(scores.totaltokens);
				scorePopulationContainer.text(scores.totalpopulation);


    			$(e.currentTarget).children().remove();

                var message = "Building Demolished";
                var color = "green";
                $("#messages").css("color",color);
                $("#messages").text(message).fadeOut(1000,function(){
                    $("#messages").text("");
                    $("#messages").css("display","block");
                });

    		}else{

    			var message = "Not Building";
	            var color = "red";
    			$("#messages").css("color",color);
				$("#messages").text(message).fadeOut(1000,function(){
					$("#messages").text("");
					$("#messages").css("display","block");
				});

    		}

		}

		var material = false;
		var notRawMaterial = "Not Raw Material";

		var hasFreshWater = $(e.currentTarget).hasClass("colorWater");
    var hasFoodWild = $(e.currentTarget).hasClass("colorFoodWild");
		var hasSaltWater = $(e.currentTarget).hasClass("colorSaltWater");
		var hasPetroleum = $(e.currentTarget).hasClass("colorPetroleum");
    var hasSwamp = $(e.currentTarget).hasClass("colorSwamp");
		var hasWood = $(e.currentTarget).hasClass("colorWood");
		var hasSand = $(e.currentTarget).hasClass("colorSand");
		var hasUranium = $(e.currentTarget).hasClass("colorUranium");
		var hasStone = $(e.currentTarget).hasClass("colorStone");
		var hasClay = $(e.currentTarget).hasClass("colorClay");

		if(hasFreshWater || hasFoodWild || hasSaltWater || hasPetroleum || hasClay || hasWood || hasSand || hasUranium || hasStone || hasSwamp){
			material = true;
		}

		var hasChildrenInCell = $(e.currentTarget).children().length > 0;
		var volume;
		var notVolume = "Not Volume";
		var rawMaterial;
		var notBuilding = "Not Building";
		var buildingName;
		var buildingNameAux;

		if(hasChildrenInCell){
			buildingNameAux = $(e.currentTarget).children()[0].classList[0];

			switch (buildingNameAux) {
				case "house":
					buildingName = "House";
					break;
				case "flat":
					buildingName = "Flat";
					break;
				case "office":
					buildingName = "Office";
					break;
				case "nuclearPlant":
					buildingName = "Nuclear Plant";
					break;
				case "factory":
					buildingName = "Factory";
					break;
        case "collectorWood":
  					buildingName = "Collector Wood";
  					break;
        case "collectorStone":
    				buildingName = "Collector Stone";
    				break;
        case "collectorFoodWild":
      			buildingName = "Collector Food Wild";
      		  break;
        case "collectorFreshWater":
        	  buildingName = "Collector Fresh Water";
        		break;
				case "pathway-c":
				case "pathway-e":
				case "pathway-eo":
				case "pathway-n":
				case "pathway-ne":
				case "pathway-no":
				case "pathway-ns":
				case "pathway-o":
				case "pathway-s":
				case "pathway-se":
				case "pathway-so":
				case "pathway-te":
				case "pathway-tn":
				case "pathway-to":
				case "pathway-ts":
					buildingName = "Pathway";
					break;

				case "way-c":
				case "way-e":
				case "way-eo":
				case "way-n":
				case "way-ne":
				case "way-no":
				case "way-ns":
				case "way-o":
				case "way-s":
				case "way-se":
				case "way-so":
				case "way-te":
				case "way-tn":
				case "way-to":
				case "way-ts":
					buildingName = "Way";
					break;
                case "orchardVertical":
                case "orchardHorizontal":
                case "orchardDiagonal1":
                case "orchardDiagonal2":
                    buildingName = "Orchard";
                    break;
				case "paved-c":
				case "paved-e":
				case "paved-eo":
				case "paved-n":
				case "paved-ne":
				case "paved-no":
				case "paved-ns":
				case "paved-o":
				case "paved-s":
				case "paved-se":
				case "paved-so":
				case "paved-te":
				case "paved-tn":
				case "paved-to":
				case "paved-ts":
					buildingName = "Paved";
					break;
				case "road-c":
				case "road-e":
				case "road-eo":
				case "road-n":
				case "road-ne":
				case "road-no":
				case "road-ns":
				case "road-o":
				case "road-s":
				case "road-se":
				case "road-so":
				case "road-te":
				case "road-tn":
				case "road-to":
				case "road-ts":
					buildingName = "Road";
					break;
				case "waterWell":
					buildingName = "Water Well";
					break;
				default:
					console.log('Error');
			}

		}

		if(material){

			if(hasFreshWater){

				volume = $(e.currentTarget).attr("data-freshwater-volume");
				rawMaterial = "Fresh Water";

				if(hasChildrenInCell){
					$("#buildingInCell").text(buildingName);
				}else{
					$("#buildingInCell").text(notBuilding);
				}

				$("#rawMaterialInCell").text(rawMaterial);
				$("#volumeAvailableInCell").text(volume);

			}else if(hasSaltWater){

				volume = $(e.currentTarget).attr("data-saltwater-volume");
				rawMaterial = "Salt Water";

				if(hasChildrenInCell){
					$("#buildingInCell").text(buildingName);
				}else{
					$("#buildingInCell").text(notBuilding);
				}

				$("#rawMaterialInCell").text(rawMaterial);
				$("#volumeAvailableInCell").text(volume);

      }else if(hasFoodWild){

        volume = $(e.currentTarget).attr("data-foodwild-volume");
        rawMaterial = "Food Wild";

        if(hasChildrenInCell){
          $("#buildingInCell").text(buildingName);
        }else{
          $("#buildingInCell").text(notBuilding);
        }

        $("#rawMaterialInCell").text(rawMaterial);
        $("#volumeAvailableInCell").text(volume);

			}else if(hasPetroleum){

				volume = $(e.currentTarget).attr("data-petroleum-volume");
				rawMaterial = "Petroleum";

				if(hasChildrenInCell){
					$("#buildingInCell").text(buildingName);
				}else{
					$("#buildingInCell").text(notBuilding);
				}

				$("#rawMaterialInCell").text(rawMaterial);
				$("#volumeAvailableInCell").text(volume);

            }else if(hasSwamp){

                volume = $(e.currentTarget).attr("data-swamp-volume");
                rawMaterial = "Swamp";

                if(hasChildrenInCell){
                    $("#buildingInCell").text(buildingName);
                }else{
                    $("#buildingInCell").text(notBuilding);
                }

                $("#rawMaterialInCell").text(rawMaterial);
                $("#volumeAvailableInCell").text(volume);

			}else if(hasWood){

				volume = $(e.currentTarget).attr("data-wood-volume");
				rawMaterial = "Wood";

				if(hasChildrenInCell){
					$("#buildingInCell").text(buildingName);
				}else{
					$("#buildingInCell").text(notBuilding);
				}

				$("#rawMaterialInCell").text(rawMaterial);
				$("#volumeAvailableInCell").text(volume);

			}else if(hasSand){

				volume = $(e.currentTarget).attr("data-sand-volume");
				rawMaterial = "Sand";

				if(hasChildrenInCell){
					$("#buildingInCell").text(buildingName);
				}else{
					$("#buildingInCell").text(notBuilding);
				}

				$("#rawMaterialInCell").text(rawMaterial);
				$("#volumeAvailableInCell").text(volume);

			}else if(hasUranium){

				volume = $(e.currentTarget).attr("data-uranium-volume");
				rawMaterial = "Uranium";

				if(hasChildrenInCell){
					$("#buildingInCell").text(buildingName);
				}else{
					$("#buildingInCell").text(notBuilding);
				}

				$("#rawMaterialInCell").text(rawMaterial);
				$("#volumeAvailableInCell").text(volume);

			}else if(hasStone){

				volume = $(e.currentTarget).attr("data-stone-volume");
				rawMaterial = "Stone";

				if(hasChildrenInCell){
					$("#buildingInCell").text(buildingName);
				}else{
					$("#buildingInCell").text(notBuilding);
				}

				$("#rawMaterialInCell").text(rawMaterial);
				$("#volumeAvailableInCell").text(volume);

			}else if(hasClay){

				volume = $(e.currentTarget).attr("data-clay-volume");
				rawMaterial = "Clay";

				if(hasChildrenInCell){
					$("#buildingInCell").text(buildingName);
				}else{
					$("#buildingInCell").text(notBuilding);
				}

				$("#rawMaterialInCell").text(rawMaterial);
				$("#volumeAvailableInCell").text(volume);

			}

		}else{

			if(hasChildrenInCell){
				$("#buildingInCell").text(buildingName);
			}else{
				$("#buildingInCell").text(notBuilding);
			}

			$("#rawMaterialInCell").text(notRawMaterial);
			$("#volumeAvailableInCell").text(notVolume);

		}

	});


	$(".ocultar-dataCell").click(function(e){
		//e.preventDefault();

		if(!hasFlexDataCell){

			$(".containerDataCell").addClass("flex");
			hasFlexDataCell = true;
		}else{

			$(".containerDataCell").removeClass("flex");
			hasFlexDataCell = false;
		}


	});

	$(".ocultar-scores").click(function(e){
		//e.preventDefault();

		if(!hasFlexScores){

			$(".containerScores").addClass("flex");
			hasFlexScores = true;
		}else{

			$(".containerScores").removeClass("flex");
			hasFlexScores = false;
		}


	});

    $(".ocultar-materials").click(function(e){
        //e.preventDefault();

        if(!hasFlexMaterials){

            $(".containerMaterials").addClass("flex");
            hasFlexMaterials = true;
        }else{

            $(".containerMaterials").removeClass("flex");
            hasFlexMaterials = false;
        }


    });

    $(".ocultar-processed-products").click(function(e){
        //e.preventDefault();

        if(!hasFlexProcessedProducts){

            $(".containerProcessedProducts").addClass("flex");
            hasFlexProcessedProducts = true;
        }else{

            $(".containerProcessedProducts").removeClass("flex");
            hasFlexProcessedProducts = false;
        }


    });

    $(".ocultar-pollution").click(function(e){
        //e.preventDefault();

        if(!hasFlexPollution){

            $(".containerPollution").addClass("flex");
            hasFlexPollution = true;
        }else{

            $(".containerPollution").removeClass("flex");
            hasFlexPollution = false;
        }


    });


	$(".ocultar0").click(function(e){
		//e.preventDefault();

		if(!hasFlex0){

			$(".containerContruccionesEpocas0").addClass("flex");
			hasFlex0 = true;
		}else{

			$(".containerContruccionesEpocas0").removeClass("flex");
			hasFlex0 = false;
		}


	});

	$(".ocultar1").click(function(e){
		//e.preventDefault();

		if(!hasFlex1){

			$(".containerContruccionesEpocas1").addClass("flex");
			hasFlex1 = true;
		}else{

			$(".containerContruccionesEpocas1").removeClass("flex");
			hasFlex1 = false;
		}


	});

	$(".ocultar2").click(function(e){
		//e.preventDefault();

		if(!hasFlex2){

			$(".containerContruccionesEpocas2").addClass("flex");
			hasFlex2 = true;
		}else{

			$(".containerContruccionesEpocas2").removeClass("flex");
			hasFlex2 = false;
		}


	});

	$(".ocultar3").click(function(e){
		//e.preventDefault();

		if(!hasFlex3){

			$(".containerContruccionesEpocas3").addClass("flex");
			hasFlex3 = true;
		}else{

			$(".containerContruccionesEpocas3").removeClass("flex");
			hasFlex3 = false;
		}


	});

	$(".ocultar4").click(function(e){
		//e.preventDefault();

		if(!hasFlex4){

			$(".containerContruccionesEpocas4").addClass("flex");
			hasFlex4 = true;
		}else{

			$(".containerContruccionesEpocas4").removeClass("flex");
			hasFlex4 = false;
		}


	});

	$(".ocultar5").click(function(e){
		//e.preventDefault();

		if(!hasFlex5){

			$(".containerContruccionesEpocas5").addClass("flex");
			hasFlex5 = true;
		}else{

			$(".containerContruccionesEpocas5").removeClass("flex");
			hasFlex5 = false;
		}


	});


	//TODO


	// Get the button that opens the modal
	var infoStone = $(".iconInfoStone");
	var infoMetal = $(".iconInfoMetal");
	var infoOld = $(".iconInfoOld");
	var infoMiddle = $(".iconInfoMiddle");
	var infoModern = $(".iconInfoModern");
	var infoContemporary = $(".iconInfoContemporary");

	var infoData = $(".iconInfoDataCell");
	var infoPopu = $(".iconInfoPopulation");
	var infoRaw = $(".iconInfoRawMaterials");
	var infoProcessed = $(".iconInfoProcessedProducts");
	var infoPollu = $(".iconInfoPollution");

	var infoStoneAgeModal = document.getElementById("infoStoneAgeModal");
	var infoMetalAgeModal = document.getElementById("infoMetalAgeModal");
	var infoOldAgeModal = document.getElementById("infoOldAgeModal");
	var infoMiddleAgeModal = document.getElementById("infoMiddleAgeModal");
	var infoModernAgeModal = document.getElementById("infoModernAgeModal");
	var infoComtemporaryAgeModal = document.getElementById("infoComtemporaryAgeModal");

	var infoDataCell = document.getElementById("infoDataCell");
	var infoPopulation = document.getElementById("infoPopulation");
	var infoRawMaterials = document.getElementById("infoRawMaterials");
	var infoProcessedProducts = document.getElementById("infoProcessedProducts");
	var infoPollution = document.getElementById("infoPollution");

	// Get the <span> element that closes the modal
	var closeStoneAgeModal = document.getElementById("closeStoneAgeModal");
	var closeMetalAgeModal = document.getElementById("closeMetalAgeModal");
	var closeOldAgeModal = document.getElementById("closeOldAgeModal");
	var closeMiddleAgeModal = document.getElementById("closeMiddleAgeModal");
	var closeModernAgeModal = document.getElementById("closeModernAgeModal");
	var closeComtemporaryAgeModal = document.getElementById("closeComtemporaryAgeModal");

	var closeDataCellModal = document.getElementById("closeDataCellModal");
	var closePopulationModal = document.getElementById("closePopulationModal");
	var closeRawMaterialsModal = document.getElementById("closeRawMaterialsModal");
	var closeProcessedProductsModal = document.getElementById("closeProcessedProductsModal");
	var closePollutionModal = document.getElementById("closePollutionModal");

	infoStone.click(function(){
		infoStoneAgeModal.style.display = "block";
	});

	infoMetal.click(function(){
		infoMetalAgeModal.style.display = "block";
	});

	infoOld.click(function(){
		infoOldAgeModal.style.display = "block";
	});

	infoMiddle.click(function(){
		infoMiddleAgeModal.style.display = "block";
	});

	infoModern.click(function(){
		infoModernAgeModal.style.display = "block";
	});

	infoContemporary.click(function(){
		infoComtemporaryAgeModal.style.display = "block";
	});



	infoData.click(function () {
		infoDataCellModal.style.display = "block";
	});
	infoPopu.click(function () {
		infoPopulationModal.style.display = "block";
	});
	infoRaw.click(function () {
		infoRawMaterialsModal.style.display = "block";
	});
	infoProcessed.click(function () {
		infoProcessedProductsModal.style.display = "block";
	});
	infoPollu.click(function () {
		infoPollutionModal.style.display = "block";
	});




	// Cerrar modal al hacer click en la x
	closeStoneAgeModal.onclick = function() {
	    infoStoneAgeModal.style.display = "none";
	};

	closeMetalAgeModal.onclick = function() {
	    infoMetalAgeModal.style.display = "none";
	};

	closeOldAgeModal.onclick = function() {
	    infoOldAgeModal.style.display = "none";
	};

	closeMiddleAgeModal.onclick = function() {
	    infoMiddleAgeModal.style.display = "none";
	};

	closeModernAgeModal.onclick = function() {
	    infoModernAgeModal.style.display = "none";
	};

	closeComtemporaryAgeModal.onclick = function() {
	    infoComtemporaryAgeModal.style.display = "none";
	};




	closeDataCellModal.onclick = function () {
		infoDataCellModal.style.display = "none";
	};
	closePopulationModal.onclick = function () {
		infoPopulationModal.style.display = "none";
	};
	closeRawMaterialsModal.onclick = function () {
		infoRawMaterialsModal.style.display = "none";
	};
	closeProcessedProductsModal.onclick = function () {
		infoProcessedProductsModal.style.display = "none";
	};
	closePollutionModal.onclick = function () {
		infoPollutionModal.style.display = "none";
	};
/*
	// Cerrar modal al hacer click fuera
	window.onclick = function(event) {
	    if (event.target == infoStoneAgeModal) {
	        infoStoneAgeModal.style.display = "none";
	    }
	};

	window.onclick = function(event) {
	    if (event.target == infoMetalAgeModal) {
	        infoMetalAgeModal.style.display = "none";
	    }
	};

	window.onclick = function(event) {
	    if (event.target == infoOldAgeModal) {
	        infoOldAgeModal.style.display = "none";
	    }
	};

	window.onclick = function(event) {
	    if (event.target == infoModernAgeModal) {
	        infoModernAgeModal.style.display = "none";
	    }
	};

	window.onclick = function(event) {
	    if (event.target == infoComtemporaryAgeModal) {
	        infoComtemporaryAgeModal.style.display = "none";
	    }
	};
*/

    setInterval(obtainRewards, timeObtainRewards);
    setInterval(obtainConsumption, timeConsumption);

	$(".preloader").fadeOut("slow");

});

function initializeScores(){

	scoreTokenContainer = $("#token");
	scorePopulationContainer = $("#population");
	scoreWorkerContainer = $("#workers");
  scoreEldersContainer = $("#elders");
  scoreDiseasesContainer = $("#diseases");
  scoreChildrenContainer = $("#children");
	scorePowerContainer = $("#power");
	scoreWaterContainer = $("#water");
  scoreFoodContainer = $("#food");
  scoreWoodContainer = $("#wood");
  scoreSandContainer = $("#sand");
  scoreStoneContainer = $("#stone");
  scoreUraniumContainer = $("#uranium");
  scorePetroleumContainer = $("#petroleum");
  scoreClayContainer = $("#clay");
  scoreAdobeBrickContainer = $("#adobeBrick");
  scoreCookedBrickContainer = $("#cookedBrick");
  scoreAluminiumContainer = $("#aluminium");
  scoreIronContainer = $("#iron");
  scoreSteelContainer = $("#steel");
  scoreAirPollutionContainer = $("#airPollution");
  scoreRadioactivePollutionContainer = $("#radioactivePollution");
  scoreWaterPollutionContainer = $("#waterPollution");
  scoreNoisePollutionContainer = $("#noisePollution");
  scoreCopperContainer = $("#copper");
  scoreSilverContainer = $("#silver");
  scoreGoldContainer = $("#gold");
  scoreGasContainer = $("#gas");
  scoreTinContainer = $("#tin");
  scorePlatinumContainer = $("#platinum");
  scoreSiliconContainer = $("#silicon");
  scoreBronzeContainer = $("#bronze");
  scoreConcreteContainer = $("#concrete");
  scoreGlassContainer = $("#glass");

	scoreTokenContainer.text(scores.totaltokens);
	scorePopulationContainer.text(scores.totalpopulation);
	scoreWorkerContainer.text(scores.totalworkers);
  scoreEldersContainer.text(scores.totalelders);
  scoreDiseasesContainer.text(scores.totaldiseases);
  scoreChildrenContainer.text(scores.totalchildren);
	scorePowerContainer.text(scores.totalpower);
	scoreWaterContainer.text(scores.totalfreshwater);
  scoreFoodContainer.text(scores.totalfood);
  scoreWoodContainer.text(scores.totalwood);
  scoreStoneContainer.text(scores.totalstone);
  scoreUraniumContainer.text(scores.totaluranium);
  scorePetroleumContainer.text(scores.totalpetroleum);
  scoreClayContainer.text(scores.totalclay);
  scoreSandContainer.text(scores.totalsand);
  scoreAdobeBrickContainer.text(scores.totaladobebrick);
  scoreCookedBrickContainer.text(scores.totalcookedbrick);
  scoreAluminiumContainer.text(scores.totalaluminium);
  scoreIronContainer.text(scores.totaliron);
  scoreSteelContainer.text(scores.totalsteel);
  scoreAirPollutionContainer.text(scores.totalairpollution);
  scoreRadioactivePollutionContainer.text(scores.totalradioactivepollution);
  scoreWaterPollutionContainer.text(scores.totalwaterpollution);
  scoreNoisePollutionContainer.text(scores.totalnoisepollution);
  scoreCopperContainer.text(scores.totalcopper);
  scoreSilverContainer.text(scores.totalsilver);
  scoreGoldContainer.text(scores.totalgold);
  scoreGasContainer.text(scores.totalgas);
  scoreTinContainer.text(scores.totaltin);
  scorePlatinumContainer.text(scores.totalplatinum);
  scoreSiliconContainer.text(scores.totalsilicon);
  scoreBronzeContainer.text(scores.totalbronze);
  scoreConcreteContainer.text(scores.totalconcrete);
  scoreGlassContainer.text(scores.totalglass);

}

function obtainRewards(){

	var totalTokenObtains = (totalFactories * factory.rewardtokens) + (totalOffices * office.rewardtokens),
    	totalPowerObtains = (totalNuclearPlants * nuclearPlant.rewardpower),
      totalFoodObtains = (totalOrchards * orchard.rewardfood),
      totalWoodObtains,
      totalStoneObtains,
      totalUraniumObtains,
      totalPetroleumObtains,
      totalClayObtains,
      totalSandObtains,
      totalAdobeBrickObtains,
      totalCookedBrickObtains,
      totalAluminiumObtains,
      totalIronObtains,
      totalSteelObtains,
      totalAirPollutionObtains,
      totalRadioactivePollutionObtains,
      totalWaterPollutionObtains,
      totalNoisePollutionObtains,
      totalDiseasesObtains,
      totalCopperObtains,
      totalSilverObtains,
      totalGoldObtains,
      totalGasObtains,
      totalTinObtains,
      totalPlatinumObtains,
      totalSiliconObtains,
      totalBronzeObtains,
      totalConcreteObtains,
      totalGlassObtains;

/*
	var message = "+ " + totalTokenObtains + " Tokens" + "<br/>+ " + totalPowerObtains + " Power";

	$("#messages").css("color","green");
	$("#messages").html(message).fadeOut(1000,function(){
	    $("#messages").text("");
	    $("#messages").css("display","block");
	});
*/
	scores.totaltokens += totalTokenObtains;
	scoreTokenContainer.text(scores.totaltokens);
	scores.totalpower += totalPowerObtains;
	scorePowerContainer.text(scores.totalpower);
  scores.totalfood += totalFoodObtains;
  scoreFoodContainer.text(scores.totalfood);

}

function obtainConsumption(){

	$(".tablero li").each(function(index, object) {
    var volumeInCell = "",
        hasFreshWater = $(object).hasClass("colorWater"),
        hasWood = $(object).hasClass("colorWood"),
        hasStone = $(object).hasClass("colorStone"),
        hasFoodWild = $(object).hasClass("colorFoodWild"),
    	  haveBuilding = $(object).children().length > 0,
        typeOfBuilding = $(object).children()[0] !== undefined ? $(object).children()[0].classList[0] : "noConstruction";

	    if(hasFreshWater && haveBuilding){
        volumeInCell = parseInt($(object).attr("data-freshwater-volume"));

        switch (typeOfBuilding) {
          case "waterWell":
            if(volumeInCell !== 0){

              volumeInCell -= waterWell.freshwaterconsumption;

              if(volumeInCell <= 0){
                volumeInCell = 0;
              }

              $(object).attr("data-freshwater-volume", volumeInCell);

              scores.totalfreshwater += waterWell.rewardwater;
              scoreWaterContainer.text(scores.totalfreshwater);

            }
            break;
          case "collectorFreshWater":
            if(volumeInCell !== 0){

              volumeInCell -= collectorFreshWater.freshwaterconsumption;

              if(volumeInCell <= 0){
                volumeInCell = 0;
              }

              $(object).attr("data-freshwater-volume", volumeInCell);

              scores.totalfreshwater += collectorFreshWater.rewardwater;
              scoreWaterContainer.text(scores.totalfreshwater);

            }
            break;
          case "noConstruction":
            break;
          default:
            console.log('Error');

        }

	    }

      if(hasWood && haveBuilding){
        volumeInCell = parseInt($(object).attr("data-wood-volume"));
        switch (typeOfBuilding) {
          case "collectorWood":
            if(volumeInCell !== 0){

              volumeInCell -= collectorWood.woodconsumption;

              if(volumeInCell <= 0){
                volumeInCell = 0;
              }

              $(object).attr("data-wood-volume", volumeInCell);

              scores.totalwood += collectorWood.rewardwood;
              scoreWoodContainer.text(scores.totalwood);

            }
            break;
            case "noConstruction":
              break;
            default:
              console.log('Error');
        }
      }

      if(hasStone && haveBuilding){
        volumeInCell = parseInt($(object).attr("data-stone-volume"));
        switch (typeOfBuilding) {
          case "collectorStone":
            if(volumeInCell !== 0){

              volumeInCell -= collectorStone.stoneconsumption;

              if(volumeInCell <= 0){
                volumeInCell = 0;
              }

              $(object).attr("data-stone-volume", volumeInCell);

              scores.totalstone += collectorStone.rewardstone;
              scoreStoneContainer.text(scores.totalstone);

            }
            break;
            case "noConstruction":
              break;
            default:
              console.log('Error');
        }
      }

      if(hasFoodWild && haveBuilding){
        volumeInCell = parseInt($(object).attr("data-foodwild-volume"));
        switch (typeOfBuilding) {
          case "collectorFoodWild":
            if(volumeInCell !== 0){

              volumeInCell -= collectorFoodWild.foodwildconsumption;

              if(volumeInCell <= 0){
                volumeInCell = 0;
              }

              $(object).attr("data-foodwild-volume", volumeInCell);

              scores.totalfood += collectorFoodWild.rewardfood;
              scoreFoodContainer.text(scores.totalfood);

            }
            break;
            case "noConstruction":
              break;
            default:
              console.log('Error');
        }
      }

	    //var hasSaltWater = $(object).hasClass("colorSaltWater");

	});

	var totalPowerConsumption = (totalHouses * house.powerconsumption) + (totalFlats * flat.powerconsumption) + (totalOffices * office.powerconsumption) + (totalFactories * factory.powerconsumption);
/*
	var message = "- " + totalPowerConsumption + " Power";

	$("#messages").css("color","red");
	$("#messages").html(message).fadeOut(1000,function(){
	    $("#messages").text("");
	    $("#messages").css("display","block");
	});
*/
	scores.totalpower -= totalPowerConsumption;
	scorePowerContainer.text(scores.totalpower);

}

function generateWorkers(building){

	var howManyWorkers;

	switch (building) {
		case "house":
			howManyWorkers = 2;
			break;
		case "flat":
			howManyWorkers = 8;
			break;
		default:
			console.log('Error');

	}

	scores.totalworkers += howManyWorkers;
	scoreWorkerContainer.text(scores.totalworkers);
}

function generateElders(building){

    var howManyElders;

    switch (building) {
      case "house":
        howManyElders = 1;
        break;
      case "flat":
        howManyElders = 4;
        break;
      default:
        console.log('Error');

    }

    scores.totalelders += howManyElders;
    scoreEldersContainer.text(scores.totalelders);

}

function generateChildren(building){
    var howManyChildren;

    switch (building) {
      case "house":
        howManyChildren = 2;
        break;
      case "flat":
        howManyChildren = 8;
        break;
      default:
        console.log('Error');

    }

    scores.totalchildren += howManyChildren;
    scoreChildrenContainer.text(scores.totalchildren);
}

function insertMessage(self, message, color){
  $("#messages").css("color",color);
  $("#messages").text(message).fadeOut(2000,function(){
    $("#messages").text("");
    $("#messages").css("display","block");
  });
	$(self).children().remove();
}

function distributeRawMaterialCellsInMap(){

	var materials = Object.keys(rawMaterialsCells).length;

	$.each(rawMaterialsCells, function(property, value) {

		var nameOfProperty = property,
		    randomNumberGenerate = [];

		for(var i = 0; i < value; i++){
	    	randomNumberGenerate.push("");
	  }

		randomNumberGenerate.forEach(function(value, index) {

			var randomNumber = generateRandomNumberToDistributeRawMaterials(),
			    data = "";
			//randomNumberGenerate[index] = randomNumber;

			switch (nameOfProperty) {
				case "clay":
          data = "data-clay-volume";
					$(".tablero li#" + randomNumber).addClass("colorClay");
					$(".tablero li#" + randomNumber).attr(data, clayCellVolume);
					break;
				case "petroleum":
				  data = "data-petroleum-volume";
					$(".tablero li#" + randomNumber).addClass("colorPetroleum");
					$(".tablero li#" + randomNumber).attr(data, petroleumCellVolume);
					break;
        case "swamp":
          data = "data-swamp-volume";
          $(".tablero li#" + randomNumber).addClass("colorSwamp");
          $(".tablero li#" + randomNumber).attr(data, swampCellVolume);
          break;
				case "wood":
				  data = "data-wood-volume";
					$(".tablero li#" + randomNumber).addClass("colorWood");
					$(".tablero li#" + randomNumber).attr(data, woodCellVolume);
					break;
				case "sand":
				  data = "data-sand-volume";
					$(".tablero li#" + randomNumber).addClass("colorSand");
					$(".tablero li#" + randomNumber).attr(data, sandCellVolume);
					break;
				case "uranium":
				  data = "data-uranium-volume";
					$(".tablero li#" + randomNumber).addClass("colorUranium");
					$(".tablero li#" + randomNumber).attr(data, uraniumCellVolume);
					break;
				case "stone":
				  data = "data-stone-volume";
					$(".tablero li#" + randomNumber).addClass("colorStone");
					$(".tablero li#" + randomNumber).attr(data, stoneCellVolume);
					break;
				case "freshwater":
				  data = "data-freshwater-volume";
					$(".tablero li#" + randomNumber).addClass("colorWater");
					$(".tablero li#" + randomNumber).attr(data, freshWaterCellVolume);
					break;
        case "foodwild":
  				data = "data-foodwild-volume";
  				$(".tablero li#" + randomNumber).addClass("colorFoodWild");
  				$(".tablero li#" + randomNumber).attr(data, woodCellVolume);
  				break;
				case "saltwater":
				  data = "data-saltwater-volume";
					$(".tablero li#" + randomNumber).addClass("colorSaltWater");
					$(".tablero li#" + randomNumber).attr(data, saltWaterCellVolume);
					break;
				default:
					console.log('Error');
			}

		});

	});

}

function generateRandomNumberToDistributeRawMaterials(){

	var maxNumber = numberOfcells - 1;
	var number = Math.floor(Math.random() * maxNumber);

	if(rawMaterialsCellsArray[number] === false){

		rawMaterialsCellsArray[number] = true;

		return number;

	}else{

		return generateRandomNumberToDistributeRawMaterials();

	}

}
