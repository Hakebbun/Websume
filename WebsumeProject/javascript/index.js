// Constants:
var BIO_PATH = "html/bio.html";
var BLOG_PATH = "html/blog.html";
var PROJECTS_PATH = "html/projects.html";
var CONTACT_PATH = "html/contact.html"
var MUSING_PATH = "html/musing.html";


// On start:
document.addEventListener('DOMContentLoaded', function() {
   showBio();
}, false);

function showBio(){
  loadFragment(BIO_PATH);
}

function showBlog(){
  loadFragment(BLOG_PATH);
}

function showProjects(){
  loadFragment(PROJECTS_PATH);
}

function showContact(){
  loadFragment(CONTACT_PATH);
}

function showMusings(){
  loadFragment(MUSING_PATH);
}


// Loads target into iFrame
function loadFragment(target){
  $('#frame-view').attr('src', target);
}
