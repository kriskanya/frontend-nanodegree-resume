// JSON Objects

var bio = {
  "bio": [
    {
      "name": "Kristian Kanya",
      "role": "Web Developer",
      "contacts":
      {
        "mobile": "916-802-0552",
        "email": "kriskanya@gmail.com",
        "github": "github.com/kriskanya",
        "twitter": "twitter.com/kriskanya",
        "location": "Nashville, TN"
      },
      "skills": ["HTML", "CSS", "JavaScript", "Ruby", "Testing"],
      "biopic": "images/profile.jpg",
    }
  ],
  display: function() {
    // name and role
    var formattedName = HTMLheaderName.replace('%data%', bio.bio[0].name);
    var formattedRole = HTMLheaderRole.replace('%data%', bio.bio[0].role);
    $('#header').prepend(formattedRole);
    $('#header').prepend(formattedName);

    // contact info
    populateBio('#topContacts');

    var bioPic = HTMLbioPic.replace('%data%', bio.bio[0].biopic);
    $('#header').append(bioPic);

    // skills
    $('#header').append(HTMLskillsStart);

    for (skillIndex in bio.bio[0].skills) {
      var skill = HTMLskills.replace('%data%', bio.bio[0].skills[skillIndex]);
      $('#skills').append(skill);
    }
    // lets connect
    populateBio('#footerContacts');
  }
}

var education = {
  "schools": [
    {
      "name": "Nashville Software School",
      "location": "Nashville, TN",
      "degree": "Web Developer",
      "majors": ["Web Development"],
      "dates": "April 2014 - September 2014",
      "url": "http://www.nashvillesoftwareschool.com"
    },
    {
      "name": "UCLA",
      "location": "Los Angeles, CA",
      "degree": "BA",
      "majors": ["Political Science", "American Politics"],
      "dates": "September 2005 - June 2009",
      "url": "http://www.ucla.edu"
    }
  ],
  "onlineCourses": [
    {
      "title": "Udacity Front End Course",
      "school": "Udacity",
      "dates": "February 2015 - Present",
      "url": "http://www.udacity.com"
    }
  ],
  display: function() {
    // education
    $('#education').append(HTMLschoolStart);

    for (courseIndex in education.schools) {
      var schoolName = HTMLschoolName.replace('%data%', education.schools[courseIndex].name).replace('%link%', education.schools[courseIndex].url);
      var schoolDegree = HTMLschoolDegree.replace('%data%', education.schools[courseIndex].degree);
      var schoolDates = HTMLschoolDates.replace('%data%', education.schools[courseIndex].dates);
      var schoolLocation = HTMLschoolLocation.replace('%data%', education.schools[courseIndex].location);
      $('.education-entry:last').append(schoolName + schoolDegree);
      $('.education-entry:last').append(schoolDates);
      $('.education-entry:last').append(schoolLocation);

      for (var i = 0; i < education.schools[courseIndex].majors.length; i++) {
        var schoolMajor = HTMLschoolMajor.replace('%data%', education.schools[courseIndex].majors[i]);
        $('.education-entry:last').append(schoolMajor);
      }
    }
    // online education
    $('#education').append(HTMLonlineClasses);
    $('#education').append(HTMLonlineClassesDiv);

    for (courseIndex in education.onlineCourses) {
      var onlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[courseIndex].title);
      var onlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[courseIndex].school);
      var onlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[courseIndex].dates);
      var onlineURL = HTMLonlineURL.replace('%data%', education.onlineCourses[courseIndex].url).replace(
        '%link%', education.onlineCourses[courseIndex].url
      );
      $('.online-education-entry').append(onlineTitle + onlineSchool);
      $('.online-education-entry').append(onlineDates);
      $('.online-education-entry').append(onlineURL);
    }
  }
}

var work = {
  "jobs": [
    {
      "employer": "NextGxDx",
      "title": "QA Engineer",
      "location": "Nashville, TN",
      "dates": "November 2014 - Present",
      "description": "I mainly write end-to-end tests for the Angular apps using the Protractor testing framework and unit tests with Jasmine.  " +
                     "The different NextGxDx apps are written using the MEAN stack."
    },
    {
      "employer": "Hulu",
      "title": "Ad Operations",
      "location": "Los Angeles, CA",
      "dates": "September 2012 - March 2014",
      "description": "Implemented advertising campaigns worth over $8 million per quarter, integrated third-party tracking, and delegated Creative Services tasks and timelines via JIRA."
    }
  ],
  display: function() {
    // work experience
    $('#workExperience').append(HTMLworkStart);

    for (jobIndex in work.jobs) {
      var workEmployer = HTMLworkEmployer.replace('%data%', work.jobs[jobIndex].employer);
      var workTitle = HTMLworkTitle.replace('%data%', work.jobs[jobIndex].title);
      var workDates = HTMLworkDates.replace('%data%', work.jobs[jobIndex].dates);
      var workLocation = HTMLworkLocation.replace('%data%', work.jobs[jobIndex].location);
      var workDescription = HTMLworkDescription.replace('%data%', work.jobs[jobIndex].description);
      $('.work-entry:last').append(workEmployer + workTitle);
      $('.work-entry:last').append(workDates);
      $('.work-entry:last').append(workLocation);
      $('.work-entry:last').append(workDescription);
    }
  }
}

var projects = {
  "projects": [
    {
      "title": "Responsive Web Site",
      "dates": "February 2015",
      "description": "Made a responsive web site for the Udacity Course.",
      "link": "https://github.com/kriskanya/udacity-project1",
      "images":
      [
        "images/Project_1.png"
      ]
    },
    {
      "title": "MOOChub",
      "dates": "September 2014",
      "description": "Reddit-style site for users to upload their favorite massively open online courses (MOOCs), and vote and comment on them.",
      "link": "http://moochub.herokuapp.com",
      "images":
      [
        "images/moochub.png"
      ]
    }
  ],
  display: function() {
    // projects
    $('#projects').append(HTMLprojectStart);

    for (projectIndex in projects.projects) {
      var projectTitle = HTMLprojectTitle.replace('%data%', projects.projects[projectIndex].title).replace('%link%', projects.projects[projectIndex].link);
      var projectDates = HTMLprojectDates.replace('%data%', projects.projects[projectIndex].dates);
      var projectDescription = HTMLprojectDescription.replace('%data%', projects.projects[projectIndex].description);
      $('.project-entry:last').append(projectTitle);
      $('.project-entry:last').append(projectDates);
      $('.project-entry:last').append(projectDescription);

      for (var i = 0; i < projects.projects[projectIndex].images.length; i++) {
        var projectImage = HTMLprojectImage.replace('%data%', projects.projects[projectIndex].images[i]);
        $('.project-entry:last').append(projectImage);
      }
    }
  }
}

function populateBio(divId) {
  var mobileContact = HTMLmobile.replace('%data%', bio.bio[0].contacts.mobile);
  var emailContact = HTMLemail.replace('%data%', bio.bio[0].contacts.email);
  var githubContact = HTMLgithub.replace('%data%', bio.bio[0].contacts.github);
  var twitterContact = HTMLtwitter.replace('%data%', bio.bio[0].contacts.twitter);
  var locationContact = HTMLlocation.replace('%data%', bio.bio[0].contacts.location);
  $(divId).append(mobileContact);
  $(divId).append(emailContact);
  $(divId).append(githubContact);
  $(divId).append(twitterContact);
  $(divId).append(locationContact);
}

// Function calls

bio.display();

work.display();

projects.display();

education.display();

// map
$('#mapDiv').append(googleMap);
