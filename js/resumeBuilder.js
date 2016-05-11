var bio = {
  "name": "Homer Simpson",
  "role": "Web Developer",
  "bioPic": "http://images.gutefrage.net/media/fragen/bilder/wieso-sind-comic-figuren-immer-schwarz-umrandet/0_big.jpg",
  "welcomeMsg": "Welcome to the internet my friend, what can I do for you?",
  "contacts":
    {
      "mobile": "939-555-0113",
      "email": "chunkylover53@aol.com",
      "github": "homer-jay",
      "location": "Springfield, USA"
    },
  "skills": [
    "Eating",
    " Sleeping",
    " Drinking",
    " Watching TV",
    " Strangling The Boy"]
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

$(".flex-box").append(formattedMobile);
$(".flex-box").append(formattedEmail);
$(".flex-box").append(formattedGithub);
$(".flex-box").append(formattedLocation);


if (bio.skills.length > 0) {

  $("#header").append(HTMLskillsStart);
    for (var i = 0; i < bio.skills.length; i++) {
      var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
      $("#skills").append(formattedSkill);
    }
};

var work = {
  "jobs": [
    {
      "employer": "Springfield Nuclear Power Plant",
      "title": "Safety Inspector",
      "location": "Springfield, USA",
      "dates": "1989 - 2016",
      "description": "Strengthened safety procedures that resulted in 75% fewer accidents on days I was absent. Pioneered workplace stress-reduction methods that worked for at least one employee."
    },
    {
      "employer": "City of Springfield",
      "title": "Chief of Police",
      "location": "Springfield, USA",
      "dates": "2002",
      "description": "Broke up weasel-selling ring. Secured community support in almost-successful effort to expel organized crime from city."
    },
    {
      "employer": "Moe's Tavern",
      "title": "Bartender",
      "location": "Springfield, USA",
      "dates": "2001",
      "description": "Engaged patrons in witty, whimsical, avuncular dialog covering topics such as the arts, philosophy, politics, and spectator sports. Launched remodeling project that led to 100% reduction in clientele (including myself)."
    },
    {
      "employer": "National Aeronautics and Space Administration (NASA)",
      "title": "Astronaut",
      "location": "Cape Canaveral, FL",
      "dates": "1994",
      "description": "Averted in-flight disaster by forcing giant ants out of cockpit during space shuttle mission."
    },
    {
      "employer": "Mr. Plow",
      "title": "Owner/Operator",
      "location": "Springfield, USA",
      "dates": "1992 - 1993",
      "description": "Boosted business 15% by executing late-night TV marketing campaign targeting homeowners who were too wasted to shovel their driveways. Deliberated at length before rescuing man trapped beneath mountain avalanche."
    },
    {
      "employer": "Springfield Isotopes Baseball Club",
      "title": "Mascot ('Dancing Homer')",
      "location": "Springfield, USA",
      "dates": "1990",
      "description": "Generated 25% increase in fan interest and 50% jump in beer sales by leading cheers at home games for minor league baseball team."
    }
  ]
}

function displayWork () {
  for (job in work.jobs) {
    if (work.jobs.hasOwnProperty(job)) {
      $("#workExperience").append(HTMLworkStart);

      var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
      var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
      var formattedDate = HTMLworkDates.replace('%data%', work.jobs[job].dates);
      var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
      var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);

      var formattedJob = formattedEmployer + formattedTitle + formattedDate + formattedLocation + formattedDescription;

      $(".work-entry:last").append(formattedJob);
    }
  }
}

displayWork();

var projects = {
  "projects": [
    {
      "title": "Bootlegging",
      "dates": "1997",
      "description": "Making illegal hooch.",
      "images": "https://static.simpsonswiki.com/images/thumb/e/e3/Homer_vs._the_Eighteenth_Amendment.png/250px-Homer_vs._the_Eighteenth_Amendment.png"
    },
    {
      "title": "Barbershop Quartet",
      "dates": "1993",
      "description": "Singer/songwriter in Grammy-winning barbershop quartet.",
      "images": "https://static.simpsonswiki.com/images/thumb/a/a9/Homer%27s_Barbershop_Quartet.gif/250px-Homer%27s_Barbershop_Quartet.gif"
    },
    {
      "title": "Country Music Management",
      "dates": "1992",
      "description": "Managed Lurleen Lumpkin to stardom and eventual alcoholism.",
      "images": "https://static.simpsonswiki.com/images/thumb/e/e0/Colonel_Homer_promo.gif/250px-Colonel_Homer_promo.gif"
    },
    {
      "title": "Soap Box Racer",
      "dates": "1991",
      "description": "Built \"Lil' Lightnin'\" with The Boy.",
      "images": "https://static.simpsonswiki.com/images/thumb/2/2d/Day.png/250px-Day.png"
    }
  ]
}

projects.display = function() {
  $("#projects").append(HTMLprojectStart);
}

var education = {
  "schools": [
    {
      "name": "Springfield High School",
      "location": "Springfield, USA",
      "degree": "None",
      "majors": ["None", "None"],
      "dates": "The 70s",
      "url": "springfieldhs.edu"
    }
  ],
  "onlineCourses": [
    {
      "title": "",
      "school": "",
      "dates": "",
      "url": ""
    }
  ]
}

// $(document).click(function(loc) {
//     var x = loc.pageX;
//     var y = loc.pageY;

//     logClicks(x,y);
// })

function inName(name) {
  name = name.trim().split(" ");
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + 
    name[0].slice(1).toLowerCase();

    return name[0] +" "+ name[1];
}

$("#main").append(internationalizeButton);