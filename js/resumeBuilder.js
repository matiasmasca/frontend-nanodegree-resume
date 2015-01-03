var name = 	"Matías Mascazzini";
var role = 	"Tecnólogo";
var age = 33;
var contact_info = {
	"mobile":"379-4781004",
	"email":"matiasmasca@gmail.com",
	"github":"matiasmasca",
	"twitter":"@matiasmasca",
	"location":"Corrientes"
};
var skills = ["Desarrollador Web","Emprendedor"];

var bio = {
	"name" : name,
	"role" : role,
	"age" : age,
	"contactInfo" : contact_info ,
	"bioPictureURL" : "images/me.jpg",
	"welcomeMessage" : "Hola Mundo JavaScript",
	"skills": skills
};

var work = {};
work.currentJobPosition = "Consultor Tecnólogico";
work.employer = "TEX, Terciar and Connextion";
work.years = "2000-2014";
work.city = "Corrientes, ARG";

var education = {
"schools" : [
  {
	"name": "Facultad de Ciencias Exactas (Universidad Nacional de Nordeste)",
	"city" : "Corrientes, Corrientes, ARG", 
	"year" : "2008",
	"degree": "pre-grado"
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
		"dates": 2014
	},
	{
		"title": "JavaScript Basics",
		"school":"Udacity",
		"dates": 2014
	}
	]
};


var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);

$("#main").prepend(formattedRole);
$("#main").prepend(formattedName);
$("#main").append(bio.contactInfo.email);

$("#main").append(work["currentJobPosition"]);
$("#main").append(education.lastSchool);
