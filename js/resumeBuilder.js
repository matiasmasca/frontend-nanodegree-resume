var bio = {
	"name" : "Matías Mascazzini",
	"role" : "Tecnólogo",
	"welcomeMessage" : "Hola engorroso Mundo de JavaScript, larga vida a Ruby!",
	"age" : "33",
	"contactInfo" : {
		"mobile":"+543794781004",
		"email":"matiasmasca@gmail.com",
		"github":"matiasmasca",
		"twitter":"@matiasmasca",
		"location":"Corrientes"
	},
	"biopic" : "https://pbs.twimg.com/profile_images/484164821839929344/eIoc7KyP.png",
	"skills": ["Entrepreneur", "Generalist", "Web Develorper Jr."]
};


var work = {
	"jobs": [
		{"employer":"TEX", "title":"Consultor Asociado", "location":"Corrientes, ARG", "dates":"05/08/2013 - Current", "description":"Como consultor Consultor Asociado me encargo de prestar a los clientes las asesorías tecnicas necesarias. Como Ejecutivo de Cuentas, me encargo de mantener la relación con los clientes y atender a sus posibles necesidades."},
		{"employer":"Connextion", "title":"Ejecutivo de Cuentas", "location":"Corrientes, ARG", "dates":"05/08/2013 - Current", "description":"Me encargo de atender a una serie de clientes especificos, gestionar el pago de mensualidades y la adquisición de nuevos servicios."},
		{"employer":"Terciar", "title":"Consultor Asociado", "location":"Corrientes, ARG", "dates":"01/01/2014 - Current", "description":"Me encargo de prestar servicios de consultoría tecnólogica a los clientes."}
	],
	"currentJobPosition": "Consultor Tecnólogico",
	"employer": "TEX, Terciar and Connextion",
	"years": "2014",
	"city" : "Corrientes, ARG"
};

var projects = { "projects": 
	[{
		"title":"ComunidadTIC", 
		"dates":"01/01/2006 - Current", 
		"description":"Crear una comunidad virtual para los interesados en las TICs.", 
		"images" : ["https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-9/1014443_544787838910933_460571798_n.jpg?oh=b0f89cc732f6ecc953bfe16a47365c9a&oe=55223FC2&__gda__=1433068342_f5f9e01c987abe003ac919d12bd9f2c4","https://pbs.twimg.com/media/B2gDzyqCEAANxGT.jpg"] 
		},
		{
		"title":"Santa Ana Web", 
		"dates":"05/11/2013 - Current", 
		"description":"Colaborar en la mejora del portal. Agregar una vista para dispositivos móviles.", 
		"images" : ["https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-9/960164_10151892301747380_840613429_n.jpg?oh=00d3db2341ee3b8654203fdb2f4d19f9&oe=556EB30F&__gda__=1429087392_e9348a634d91e4f24af11138d3a9e958","https://scontent-a-mia.xx.fbcdn.net/hphotos-frc3/v/t1.0-9/q82/p180x540/1176367_10151781000742380_527436760_n.jpg?oh=4e6ebe44cf88b26af1e8c6e14ca838f7&oe=552EB1F8"] 
		}
	]
};

var education = {
"schools" : [
  {
	"name": "Facultad de Ciencias Exactas (Universidad Nacional de Nordeste)",
	"city" : "Corrientes, Corrientes, ARG", 
	"year" : "2008",
	"degree": "pre-grado",
	"minor" : "CompSci",
	"title" : "Programador Universitario de Aplicaciones."
  },
 {
	"name": "Facultad de Ciencias Exactas (Universidad Nacional de Nordeste)",
	"city" : "Corrientes, Corrientes, ARG",
	"year" : "2014",
	"degree" : "Bachelor degree in information systems", 
	"major" : "information systems",
	"minor" : "BDD, TDD, CI",
	"title" : "Licenciatura en Sistemas de Información"
  }
	],
	"onlineCourses": [
	{
		"title": "SaaS",
		"school":"UC BerkeleyX",
		"dates": 2014,
		"url": "url_al_curso"
	},
	{
		"title": "JavaScript Basics",
		"school":"Udacity",
		"dates": 2015,
		"url": "url_al_curso"
	}
	]
};

var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);

$("#main").prepend(formattedRole);
$("#main").prepend(formattedName);

$("#header").append(HTMLbioPic.replace("%data%",bio.biopic));
$("#header").append(HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage));

// - Datos de Contacto.
// -- formatear datos.
var formattedMobile = HTMLmobile.replace("%data%",bio.contactInfo.mobile);
var formattedEmail = HTMLemail.replace("%data%",bio.contactInfo.email);
var formattedGitHub = HTMLgithub.replace("%data%",bio.contactInfo.github);
var formattedTwitter = HTMLtwitter.replace("%data%",bio.contactInfo.twitter);
var formattedLocationContact = HTMLlocation.replace("%data%",bio.contactInfo.location);
// -- agregar datos
//$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGitHub);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedLocationContact);

$("#footerContacts").append(formattedMobile);
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedGitHub);
$("#footerContacts").append(formattedTwitter);
$("#footerContacts").append(formattedLocationContact);



if(bio.skills.length > 0)
{
  $("#header").append(HTMLskillsStart);
  for (var i = 0; i < bio.skills.length; i++) {
    $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
  };
}

function displayWork(){
if (work.jobs.length > 0) {
  for (job in work.jobs) {
	//$("#workExperience").append(HTMLworkEmployer.replace("%data%", work.jobs[job].employer));
	//$("#workExperience").append(HTMLworkTitle.replace("%data%", work.jobs[job].title));	
	$("#workExperience").append(HTMLworkStart);
	var formattedJob = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedJob + formattedTitle);
	$(".work-entry:last").append(formattedDates);
	$(".work-entry:last").append(formattedLocation);
	$(".work-entry:last").append(formattedDescription);
  };	
};
}

displayWork();

//Para internacionalizar el apellido poniendolo en mayuscula.
function inName(name){
    var re = /\s/; //expresion regular
    var nameList = name.split(re);
	 nameList[0] = nameList[0].slice(0,1).toUpperCase() + nameList[0].slice(1).toLowerCase();
	 nameList[1] = nameList[1].toUpperCase();	
	return nameList[0] + " " + nameList[1];
}
$("#main").append(internationalizeButton);

projects.display = function() {
  for (project in projects.projects) {
	$("#projects").append(HTMLprojectStart);
	var formattedTitleP = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
	var formattedDatesP = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
	var formattedDescriptionP = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
	var formattedImg1P = HTMLprojectImage.replace("%data%", projects.projects[project].images[0]);
	var formattedImg2P = HTMLprojectImage.replace("%data%", projects.projects[project].images[1]);
	$(".project-entry:last").append(formattedTitleP);
	$(".project-entry:last").append(formattedDatesP);
	$(".project-entry:last").append(formattedDescriptionP);
	$(".project-entry:last").append(formattedImg1P);
	$(".project-entry:last").append(formattedImg2P);
  };
}
projects.display(); //puse esto porque no mostraba los proyectos.

$("#mapDiv").append(googleMap);