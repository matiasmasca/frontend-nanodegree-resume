var bio = {
	"name" : "Matías Mascazzini",
	"role" : "Tecnólogo",
	"welcomeMessage" : "Hola engorroso Mundo de JavaScript, larga vida a Ruby!",
	"age" : "33",
	"contactInfo" : {
		"mobile":"379-4781004",
		"email":"matiasmasca@gmail.com",
		"github":"matiasmasca",
		"twitter":"@matiasmasca",
		"location":"Corrientes, Corrientes, ARG"
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
		"title":" Proyecto 1", 
		"datesWorked":"", 
		"description":"", 
		"images" : ["url1","url2"] 
		},
		{
		"title":"Proyecto 2", 
		"datesWorked":"", 
		"description":"", 
		"images" : ["url1","url2"] 
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

// - Datos de Contacto.
// -- formatear datos.
var formattedMobile = HTMLmobile.replace("%data%",bio.contactInfo.mobile);
var formattedEmail = HTMLemail.replace("%data%",bio.contactInfo.email);
var formattedGitHub = HTMLgithub.replace("%data%",bio.contactInfo.github);
var formattedTwitter = HTMLtwitter.replace("%data%",bio.contactInfo.twitter);
// -- agregar datos
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGitHub);
$("#topContacts").append(formattedTwitter);

$("#header").append(HTMLbioPic.replace("%data%",bio.biopic));
$("#header").append(HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage));

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