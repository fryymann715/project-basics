/*
This is empty on purpose! Your code to build the resume will go here.
 */
var work = {
  "jobs" : [
    {
      "employer" : "Lucilles",
      "title" : "supervisor",
      "location" : "Concord, CA",
      "dates" : "2013 - 2017",
      "description" : "Hell."
    },
    {
      "employer" : "Bear Mountain Resorts",
      "title" : "HP Tech",
      "location" : "Big Bear Lake, CA",
      "dates" : "2008 - 2012",
      "description" : "Awesome."
    }
  ]
}

var projects = {
  "projects" : [
    {
      "title" : "MERNcom",
      "dates" : "october",
      "description" : "this ishnit",
      "repo" : "https://github.com/thamaranth/MERNcom"
    },
    {
      "title" : "NotesApp",
      "dates" : "2015-2016",
      "description" : "Project from Udacity's Nanodegree program.0",
      "repo" : "https://github.com/fryymann715/notesapp"
    },
    {
      "title" : "React Blackjack",
      "dates" : "2016",
      "description" : "A blackjack game in ReactJS.",
      "repo" : "https://github.com/fryymann715/merciful-eland"
    }
  ]
}

var bio = {
  "name" : "FryyMann",
  "role" : "Duke of Dood",
  "welcomeMessage" : "",
  "biopic" : "images/fry.jpg",
  "contacts" : {
    "mobile" : "951-816+0486",
    "email" : "ideans7125@gmail.com",
    "github" : "fryymann715",
    "twitter" : "@ian_deans2",
    "location" : "Oakland, CA"
  },
  "skills" : [ "Creating Things", "Awesomeness" ]
}

var education = {
  "schools" : [
    {
      "name" : "Palomar College",
      "location" : "San Marcos, CA"
    }
  ],
  "online-courses" : [
    {
      "title" : "Intro to Programming Nanodegree",
      "school" : "Udacity",
      "dates" : "2015 - 2016",
      "url" : "https://classroom.udacity.com/nanodegrees/nd000/syllabus"
    },
    {
      "title" : "Fullstack Fundamentals",
      "school" : "Udacity",
      "dates" : "2016",
      "url" : ""
    }
  ]
}

bio.display = function() {
  let formattedName = HTMLheaderName.replace( '%data%', bio.name )
  let formattedRole = HTMLheaderRole.replace( '%data%', bio.role )
  let formattedCombo = formattedName + formattedRole
  $('#header').append( formattedCombo )

  let contactKeys = Object.keys( bio.contacts )
  let contacts = ''
  contactKeys.forEach( contact => {
    let formattedContact = HTMLcontactGeneric.replace( '%contact%', `${contact}` )
    formattedContact = formattedContact.replace( '%data%', bio.contacts[contact] )
    contacts += formattedContact
  })
  $('#footerContacts').append( contacts )

  $('#header').append( HTMLbioPic.replace( '%data%', bio.biopic ) )
}
bio.display()

function displayWork() {
  if ( bio.skills.length > 0 ) {
    $('#header').append( HTMLskillsStart )
    bio.skills.forEach( skill => {
      $('#skills').append( HTMLskills.replace( '%data%', skill ) )
    })
  }
  work.jobs.forEach( job => {
    $("#workExperience").append( HTMLworkStart )
    let formattedEmployer = HTMLworkEmployer.replace( '%data%', job.employer )
    let formattedTitle = HTMLworkTitle.replace( '%data%', job.title )
    let formattedEmployerTitle = formattedEmployer + formattedTitle
    $(".work-entry:last").append( formattedEmployerTitle )
  })
}
displayWork()

$('#main').append( internationalizeButton )

function inName(  ) {
  let names = bio.name.split(' ')
  names[0] = names[0].toLowerCase()
  names[1] = names[1].toUpperCase()
  names[0] = names[0].charAt(0).toUpperCase() + names[0].substring(1)
  bio.name = names.join(' ')
}

projects.display = function() {
  projects.projects.forEach( project => {
    $('#projects').append( HTMLprojectStart )
    let formattedTitle = HTMLprojectTitle.replace( '%data%', project.title )
    let formattedDescription = HTMLprojectDescription.replace( '%data%', project.description )
    let formattedProject = formattedTitle + formattedDescription
    $('.project-entry:last').append( formattedProject )
  })
}
projects.display()

$('#mapDiv').append( googleMap )
