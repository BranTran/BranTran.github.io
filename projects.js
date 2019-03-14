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
  var lightbox = document.getElementById("lightbox");
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
      img.class="thumbnail";
///*
      var lightimg = document.createElement("img");
      lightimg.src=projects[i].slideshow;
      lightimg.alt=projects[i].alt;
      lightimg.id=projects[i].title;
      lightimg.class = "lightbox_img";
//      lightbox.appendChild(lightimg);
  //    console.log(projects[i].title)
      //*/
      img.onclick = function(){openBox(lightimg.id,lightimg.src)};
      block.appendChild(img);
      row.appendChild(block);
//      console.log(projects[i].title);

  }
  anchor.appendChild(lightbox);
}


function openBox(id,img){
  //document.getElementById(id).style.opacity = 1;
  //console.log(id+" "+img);
  document.getElementById("lightbox").style.opacity = 1;
  document.getElementById("picture").style.opacity = 1;  
  document.getElementById("picture").src = img;
  console.log("It is visible");
}
function closeBox(){
  document.getElementById(id).style.opacity = 0;
  document.getElementById("lightbox").style.opacity = 0;
  console.log("we closed it");
  //document.getElementById(id).style.visibility = hidden;
}
