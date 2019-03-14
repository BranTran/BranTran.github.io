window.onload = function(){
  var projects = "https://brantran.github.io/JSON/projects.json";
  var anchor = document.getElementById("gallery");
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
    if(i%3==0)
    {
      var row = document.createElement("tr");
      anchor.appendChild(row);
    }
      var block = document.createElement("td");
//    console.log("What do we have here"+i);
      var title = document.createElement("h3");
      title.textContent = projects[i].title;
      block.appendChild(title);
      var img = document.createElement("img");
      img.src=projects[i].thumbnail;
      img.alt=projects[i].alt;
      block.appendChild(img);
      row.appendChild(block);
//      console.log(projects[i].title);

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
