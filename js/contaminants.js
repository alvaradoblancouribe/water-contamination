
//Hashmap that contains the information about the contaminants  

var contaminants={};
contaminants["arsenic"] = {description:"<h4> Arsenic </h4> <p>Effects appear slowly when concumed in small amounts. <br> Long term effects: Skin, bladder, lung, kidney, nasal passages, liver and prostate cancer. It could also lead to cardiovascular, pulmonary, immunological, neurological and endocrine disruption effects</p>"};
contaminants["barium"] = {description:"<h4> Barium </h4> <p>Long term effects: Difficulties in breathing, increased blood pressure, changes in heart rhythm, stomach irritation, brain swelling, muscle weakness, and damage to liver, kidney, heart, and spleen </p>"};
contaminants["cadmium"] = {description:"<h4> Cadium </h4> <p> Short term effects: Nausea, vomiting, diarrhea, muscle cramps, salivation, sensory disturbances, liver injury, convulsions, shock and kidney failure<br> Long term effects: Kidney, liver, bone, and blood damage</p>"};
contaminants["copper"] = {description:"<h4> Copper </h4> <p>Long term effects: Copper poisoning, which can cause nausea, vomiting, diarrhea, gastrointestinal illness, abdominal and muscle pain. Extreme cases can lead to anemia, liver poisoning, and kidney failure.</p>"};
contaminants["lead"] = {description:"<h4> Lead </h4> <p>Long term effects: Irritability, weight loss, vomiting, constipation, and stomach pains. Damage to the brain, kidneys, and bone marrow in addition to coma and convulsions and damage to a person’s nervous system and red blood cells can also occur with low exposures, in addition to reduced intelligence, impaired hearing and decreased growth. </p>"};
contaminants["mercury"] = {description:"<h4> Mercury </h4> <p>Long term effects: Permanently damage the brain, kidneys, and developing fetus. The effects on the brain can cause irritability, shyness, tremors, changes in vision or hearing and memory problems </p>"};
contaminants["selenium"] = {description:"<h4> Selenium </h4> <p>Short term: hair and fingernail changes, damage to peripheral nervous system, fatigue and irritability. <br> Long term effects: Hair and fingernail loss, damage to kidney and liver tissue, and problems with the nervous system and circulatory systems. </p>"};
contaminants["silver"] = {description:"<h4> Silver </h4><p> Long term effects: Can also lead to skin discoloration.</p>"};


//replaceContent: Inserts the information about the contaminant that was clicked
//contaminant: id of the contaminant that was clicked 
function replaceContent(contaminant){
	$( "div.current-contaminant" ).replaceWith( "<div class='current-contaminant'>" + findContent(contaminant) + "</div>" );
}

//findContent: Returns the information about the contaminant 
//contaminant: id of the contaminant that was clicked 
function findContent(contaminant){
	return contaminants[contaminant].description;
}

