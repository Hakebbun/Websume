// Constants:
var FRAME_VIEW = location.href;
var POST_PATH = "../html/blog-entries/";

// Loads target into iFrame
function loadPost(target){
  var curPostPath = POST_PATH.concat(target);
  window.location = curPostPath;
}
