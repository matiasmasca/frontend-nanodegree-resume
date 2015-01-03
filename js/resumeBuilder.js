var bio = {
	"name" : "Matías Mascazzini",
	"role" : "Tecnólogo",
	"welcomeMessage" : "Hola Mundo JavaScript",
	"age" : "33",
	"contactInfo" : {
		"mobile":"379-4781004",
		"email":"matiasmasca@gmail.com",
		"github":"matiasmasca",
		"twitter":"@matiasmasca",
		"location":"Corrientes, Corrientes, ARG"
	},
	"bioPictureURL" : "images/me.jpg",
	
	"skills": ["Desarrollador Web","Emprendedor", "Generalista"]
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

 Each project object in projects should contain a title, dates worked, description, and an images array with URL strings for project images.
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
