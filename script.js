var vBtnAj = document.getElementById("btnAjoute");
vBtnAj.addEventListener("click",recupererAjout);

var  vBtnAff = document.getElementById("btnAffiche");
vBtnAff.addEventListener("click",afficherListe);

var maListe = [];
var maZoneListe = document.getElementById("uListe");

function recupererAjout()
{
	var vAjout = document.getElementById("jeVeux");
	insererDansListe(vAjout);
	viderChamp(vAjout);
}

function insererDansListe(nouvAjout)
{
	maListe.push(nouvAjout.value);
	var nouvEntree = document.createElement("li");
	nouvEntree.innerHTML = maListe[maListe.length - 1];

	maZoneListe.appendChild(nouvEntree);
}

function viderChamp(idChamp)
{
	idChamp.value = "";
}

function afficherListe()
{
	var vPL = document.getElementById("pageListe");
	var vZF = document.getElementById("zoneFormulaire");

	vZF.style.display = "none";
	vPL.className = "classAff";
	maZoneListe.innerHTML = "";
	maListe.sort();

	for(var i = 0; i < maListe.length; i++)
	{
		uListe.innerHTML += "<li>" + maListe[i] + "</li>";
	}
	window.print();
}