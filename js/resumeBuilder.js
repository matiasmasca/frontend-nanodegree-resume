var bio = {
	"name" : "Matías Mascazzini",
	"role" : "Tecnólogo",
	"welcomeMessage" : "Hola engorroso Mundo de JavaScript!",
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
		{"employer":"", "title":"", "location":"", "datesWorked":"", "description":""},
		{"employer":"", "title":"", "location":"", "datesWorked":"", "description":""}
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

var formattedEmail = HTMLemail.replace("%data%",bio.contactInfo.email);
$("#letsConnect").append(formattedEmail);
var formattedTwitter = HTMLtwitter.replace("%data%",bio.contactInfo.twitter);
$("#letsConnect").append(formattedTwitter);


if(bio.skills.length > 0)
{
  $("#header").append(HTMLskillsStart);
  for (var i = 0; i < bio.skills.length; i++) {
    $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
  };
}