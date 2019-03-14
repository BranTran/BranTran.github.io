window.onload = function(){
  var projects = "https://brantran.github.io/JSON/projects.json";
  var anchor = document.getElementById("resumeContent");
  console.log("Hello");
  getProjects(projects,function(data){
    showProjects(data,anchor);
  });
//*/
}

function getProjects(url,callback){
  console.log("Into the function")
  var req = new XMLHttpRequest();
	req.onreadystatechange = function(){
		if(req.readyState == 4 && req.status == 200)
		{
      console.log("We dwnld the data");
			var data = JSON.parse(req.response);
      console.log(data);
			callback(data);
		}//if
	}//function
	req.open("GET",url,true);
	req.send();
}
function showProjects(data,anchor)
{
  console.log("Inside the show");
  var projects = data.projects;
  for(var i=0; i < projects.length;i++)
  {
//    console.log("What do we have here"+i);
//    var names = ;
  console.log(projects.title);

//    console.log(data.(Object.keys(data)[i]).title);
  }
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
