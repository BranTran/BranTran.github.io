window.onload = function(){
  var projects = "https://brantran.github.io/JSON/projects.json";
  var anchor = document.getElementById("resumeContent");
  getProjects(projects,function(data){
    showResume(data,anchor);
  });
//*/
}

function getProjects(url,callback){
  var req = new XMLHttpRequest();
	req.onreadystatechange = function(){
		if(req.readyState == 4 && req.status == 200)
		{
			var data = JSON.parse(req.response);
      console.log(data);
			callback(data);
		}//if
	}//function
	req.open("GET",url,true);
	req.send();
}
function showResume(data,anchor)
{
//  console.log(data);
    /*

    h3
    p
    table
    table td
    table img
    .table_link
    .table_link:hover
    */
}
