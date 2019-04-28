let frat_visited = false;    //0 
let law_visited = false; 
let hall_visited = false;
let book_visited = false;
let tribal_visited = false;
let arrillaga_visited = false; 
let innout_visited = false; 
let church_visited = false;
let quad_visited = false; 
let lot_visited = false; 
let dish_visited = false;  


let complete = false;
let wrong_keys = 0;

function start()
{
	newClue("Ledtråd 1", "På din vanliga cykelväg till campus så swishar du förbi ett antal frat houses. Vilket hus kommer härnäst i ordningen Haus Mitteleuropa, French house, Phi Kappa Psi, ---?");
	
	setInterval(stopSpamming, 1000);
	setInterval(checkIfComplete, 100);
	setInterval(function(){if(wrong_keys > 0){wrong_keys--;}}, 30000); //Dra bort fel var 30:e sekund
	timer();
}

function submit()
{
	let key = document.getElementById("key_bar").value.toLowerCase().replace(/ /g,'');
	document.getElementById("key_bar").value = "";

	let key_is_valid = false; //Styr error-färgen

	if ((key == "kairos") && (!frat_visited)){
		frat_visited = true;
		key_is_valid = true;
		done("Frat Houses");
		newClue("Ledtråd 2","På ett av campus grönaste hus finns en patio på andra våning där det kryllar av människor som studerar lagen. Det finns en fontän här som donerades av de fyra barnen i familjen Franklin. På ett plakat vid nordvästra sidan av pation så kan barnens namn läsas, vad heter det sistnämnda barnet?");
	}
	if ((key == "priscilla") && (!law_visited)){
		law_visited = true;
		key_is_valid = true;
		done("Law School");
		newClue("Ledtråd 3", "Om du ställer dig i mitten av Meyer green på den röda cirkeln så kan du se en söt hall direkt söderut. Vilket nummer har byggnaden?");
		
	}
	if ((key == "590") && (!hall_visited)){
		hall_visited = true;
		key_is_valid = true;
		done("Sweet hall 590");
		newClue("Ledtråd 4", "Vad kostar den här jackan i Stanford Book store? ($)");
			addImage();
	}
	if ((key == "75") && (!book_visited)){
		book_visited = true;
		key_is_valid = true;
		done("Book store");
		removeImage();
		newClue("Ledtråd 5", "Papua New Guinea Sculpture park var en av parkerna vi cyklade igenom. Parken kryllar av unika träskulpturer som avbildar olika motiv. Vid parkens nordöstra ingång finner du en naken kvinna med ett djur på huvudet, vilket typ av djur?");	
	}
	if ((key == "fågel") && (!tribal_visited)){
		tribal_visited = true;
		key_is_valid = true;
		done("Sculpture Park");
		newClue("Ledtråd 6", "Arrillaga Outdoor Education and Recreation Center är en plats som du frekvent besöker när du vill simma lite eller bara kika på föreläsningar medan du är på löpbandet. Nästa ledtråd finner du här och du kan ta en paus från skattletandet och träna lite. Problemet är dock att det är endast personalen vid receptionen som vet vad nästa lösenord är.");
	}
	if ((key == "gummelumman") && (!arrillaga_visited)){
		arrillaga_visited = true;
		key_is_valid = true;
		done("Arrillaga");
		newClue("Ledtråd 7", "In-N-Out är gott. Jag tycker nog det är godare än vad du tycker och eftersom det är jag som är lekledare så måste det såklart vara en del av skattjakten. När vi åt där så köpte vi 2st Double-Double Burger, 1st Cheeseburger, 1st Animal Style fries och en Soft drink (Large). Vad kostade det jag åt upp? Separera dollar och cents med punkt.");
	}
	if ((key == "12.15") && (!innout_visited)){
		innout_visited = true;
		key_is_valid = true;
		done("In-N-Out");
		newClue("Ledtråd 8", "För att hitta nästa kod måste du ta dig till en byggnad där man kan sitta stillsamt på en bänk och antingen lyssna på tystnaden eller sång. Om du går fram till altaret och svänger höger till sidokapellet finns det flera texter där en börjar med: “Thoughts and words travel…”. Nästa lösenord hittar du genom 'MATLAB'-koden: Array = words(R,C); Array(4,5); ");
	}
	if ((key == "atmosphere") && (!church_visited)){
		church_visited = true;
		key_is_valid = true;
		done("Memorial Church");
		newClue("Ledtråd 9", "Nu måste du bege dig till platsen där vi tog din profilbild för Facebook. Ställ dig på samma plats, vänd mot samma håll. Rotera pi/2 motsols. Hur många fönster ser du rakt framför dig?");
	}
	if ((key == "12") && (!quad_visited)){
		quad_visited = true;
		key_is_valid = true;
		alert("Nu är resterande ledtrådar på vägen hem från campus så du bör fortsätta när du är klar för dagen!");
		done("Quad Picture");
		newClue("Ledtråd 10", "Vidare hemåt från campus så finns Wilbur Lot L-63 som vi stannade på både när vi skulle guida Jonas och senare din mamma+Jonas#2. På skylten vid ingången för denna parkering står det en siffra, vilken? ");
	}
	if (key == "21113" && (!lot_visited)){
		frat_visited = true;
		key_is_valid = true;
		done("Wilbur lot");
		hideKeys();
		newClue("Sista ledtråden", "Du är nästan färdig! Det är hög sannolikhet att det är här skatten gömmer sig. Platsen du ska till ligger nära Cottrell Way så det är nog smart om du tar den här när du är på väg hemåt. Du ska till ett område som du besöker varje måndag med Alissa. Tyvärr är det ett ganska stort område så för att hjälpa dig på traven så får du (latitud,longitud) här: (1822.6764615-1785.2651125, -376.516804+254.35264). Du lär nog behöva en miniräknare för det här... ");
	}


	if (!key_is_valid){
		wrong_keys += 1;

		let backgroundColor = document.getElementById("key_bar").style.backgroundColor;
		document.getElementById("key_bar").style.backgroundColor = "red";
		setTimeout(function(){
			document.getElementById("key_bar").style.backgroundColor = backgroundColor;
		}, 400);
	}
}



function done(place)
{
	let done = document.getElementById("done_list");
	let p = document.createElement("p");
	p.appendChild(document.createTextNode(place));
	done.appendChild(p);
}
function hideKeys()
{
	let element = document.getElementById("keys");
	element.parentNode.removeChild(element);
}
function addImage()
{
	var img = document.createElement("img");
	img.src = "images/jacka.jpg";
	img.className = ("jacka");
	var src = document.getElementById("clue_list");
	src.appendChild(img);
}
function removeImage()
{
	var src = document.getElementById("clue_list");
	src.removeChild(src.childNodes[2]);
}


function newClue(clue_txt, clue_desc)
{
	let clues= document.getElementById("clue_list");
	let p = document.createElement("p");
	let h5 = document.createElement("h5");
	console.log(clues);
	
	h5.appendChild(document.createTextNode(clue_txt));
	p.appendChild(document.createTextNode(clue_desc));
	clues.removeChild(clues.childNodes[0]);
	clues.removeChild(clues.childNodes[1]);
	clues.insertBefore(h5, clues.childNodes[0]);
	clues.insertBefore(p, clues.childNodes[2]);
}
function stopSpamming()
{
	if (wrong_keys > 4)
	{
		wrong_keys = 0;
		let button = document.getElementById("key_button");
		let bar = document.getElementById("key_bar");
		let div = document.getElementById("keys");
		let placeholder = bar.placeholder;
		let backgroundColor = div.style.backgroundColor;

		button.disabled = true;
		bar.content = "";
		bar.placeholder = "Låst i 2 min";
		div.style.backgroundColor = "red";

		setTimeout(function(){
			button.disabled = false;
			bar.placeholder = placeholder;
			div.style.backgroundColor = backgroundColor;
		}, 120000);
	}
}

function checkIfComplete()
{
	if (frat_visited &&
	 	law_visited && 
	 	quad_visited &&
	 	tribal_visited &&
	 	arrillaga_visited &&
		innout_visited && 
		church_visited &&
		dish_visited &&
		!complete
		){
			complete = true;
			//let clues = document.getElementById("clue_list");
			newClue("Grattis!", "Du är färdig.");
			document.getElementById("keys").style.display = "none";
			document.getElementById("timer").style.backgroundColor = "#87dd77";
			//stopTimer();
			return true;
		}
	return false;
}

function timer()
{
	let deadline = new Date("May 13, 2019 20:00:00").getTime();
	let deadline_soon = false;

	timer = setInterval(function() {

	  let now = new Date().getTime();
	  let remaining_time = deadline - now;

	  let hours = Math.floor((remaining_time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	  let minutes = Math.floor((remaining_time % (1000 * 60 * 60)) / (1000 * 60));
	  let seconds = Math.floor((remaining_time % (1000 * 60)) / 1000);

		if (!complete) {
			document.getElementById("countdown").innerHTML =
			('0' + hours).slice(-2) + ':' +
			('0' + minutes).slice(-2) + ':' +
		  ('0' + seconds).slice(-2);
		}

		if ((hours == 0) && (minutes < 30) && (deadline_soon == false)) {
			deadline_soon = true;
			document.getElementById("timer").style.backgroundColor = "red";
			document.getElementById("warning").style.display = "inline-block";
		}

	  if (remaining_time < 0) {
	    clearInterval(timer);
	    document.getElementById("countdown").innerHTML = "00:00:00";
	  }
	}, 100);
}


function printTime(x){
	document.getElementById("countdown").innerHTML = x;
}
