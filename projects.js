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
  var lightbox = document.getElementById("lightbox_content");
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
      var name = projects[i].title;
      lightimg.id = name.replace(/\s+/g, '-');
      lightimg.class = "lightbox_img";
      lightbox.appendChild(lightimg);
  //    console.log(projects[i].title)
      //*/
      img.onclick = function(){openBox(lightimg);};

//      console.log(projects[i].title);


block.appendChild(img);
row.appendChild(block);
  }
  document.getElementById("lightbox").appendChild(lightbox);
}


function openBox(img){
  document.getElementById("lightbox").style.display = "block";
  var images = document.getElementsByClassName("lightbox_img");
  for(var i= 0; i < images.length; i++)
  {
    if(images.id != img.id)
    {
      document.getElementById(img.id).style.display = "none";
    }
//    images[i].style.display = "none";
  }
  console.log(img+" "+img.id);
  console.log("It is visible");
}
function closeBox(){
  var images = document.getElementsByClassName("lightbox_img");
  for(var i= 0; i < images.length; i++)
  {
    images[i].style.display = "none";
  }
  document.getElementById("lightbox").style.display = "none";
  console.log("we closed it");
  //document.getElementById(id).style.visibility = hidden;
}
