
//Information about the contaminants 
var arsenic= "<h3> Arsenic </h3> <p>Long term effects: Skin, bladder, lung, kidney, nasal passages, liver and prostate cancer. In addition to cardiovascular, pulmonary, immunological, neurological and endocrine disruption effects</p>";
var barium = "<h3> Barium </h3> <p>Difficulties in breathing, increased blood pressure, changes in heart rhythm, stomach irritation, brain swelling, muscle weakness, and damage to liver, kidney, heart, and spleen </p>";
var cadmium= "<h3> Cadium </h3> <p>Nausea, vomiting, diarrhea, muscle cramps, salivation, sensory disturbances, liver injury, convulsions, shock and renal (kidney) failure for short term <br>Kidney, liver, bone, and blood damage from long term exposure </p>"
var copper= "<h3> Copper </h3> <p>Can lead to copper poisoning, which can cause nausea, vomiting, diarrhea, gastrointestinal illness, abdominal and muscle pain. Extreme cases can lead to anemia, liver poisoning, and kidney failure. Copper can be found in water due to industrial discharges or from copper salts used for algae control in reservoirs, or corrosion of pipes </p>"
var lead= "<h3> Lead </h3> <p>Can cause irritability, weight loss, vomiting, constipation, and stomach pains. Damage to the brain, kidneys, and bone marrow in addition to coma and convulsions and damage to a person’s nervous system and red blood cells can also occur with low exposures. Reduced intelligence, impaired hearing and decreased growth. </p>"
var mercury= "<h3> Mercury </h3> <p>Can permanently damage the brain, kidneys, and developing fetus. The effects on the brain can cause irritability, shyness, tremors, changes in vision or hearing and memory problems </p>"
var selenium = "<h3> Selenium </h3> <p>Short term: hair and fingernail changes, damage to peripheral nervous system, fatigue and irritability. Long term: hair and fingernail loss, damage to kidney and liver tissue, and problems with the nervous system and circulatory systems. </p>"
var silver =" <h3> Silver </h3><p>When ingested and absorbed, it is held indefinitely within tissue, particularly skin, eyes, and mucous membranes. Can also lead to skin discoloration.</p>"

//Inserting the information if the contaminant is clicked
//Optamize by taking in the id of what you click and inserting it and make this whole thing just one funciton 
$(document ).ready(function(){
	$( "figure.arsenic" ).click(function() {
		$( "div.replace" ).replaceWith( "<div class='replace'>" + arsenic + "</div>" );
	});
	$( "figure.barium" ).click(function() {
		$( "div.replace" ).replaceWith( "<div class='replace'>" + barium + "</div>" );
	});
	$( "figure.cadmium" ).click(function() {
		$( "div.replace" ).replaceWith( "<div class='replace'>" + cadmium + "</div>" );
	});
	$( "figure.copper" ).click(function() {
		$( "div.replace" ).replaceWith( "<div class='replace'>" + copper + "</div>" );
	});
	$( "figure.lead" ).click(function() {
		$( "div.replace" ).replaceWith( "<div class='replace'>" + lead + "</div>" );
	});
	$( "figure.mercury" ).click(function() {
		$( "div.replace" ).replaceWith( "<div class='replace'>" + mercury + "</div>" );
	});
	$( "figure.selenium" ).click(function() {
		$( "div.replace" ).replaceWith( "<div class='replace'>" + selenium + "</div>" );
	});
	$( "figure.silver" ).click(function() {
		$( "div.replace" ).replaceWith( "<div class='replace'>" + silver + "</div>" );
	});
});
