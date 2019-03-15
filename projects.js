window.onload = function(){
  var projects = "https://brantran.github.io/JSON/projects.json";
  var anchor = document.getElementById("gallery");
//  console.log("Hello");
  getProjects(projects,function(data){
    showProjects(data,anchor);
  });
//*/
}

function getProjects(url,callback){
//  console.log("Into the request function")
  var req = new XMLHttpRequest();
	req.onreadystatechange = function(){
		if(req.readyState == 4 && req.status == 200)
		{
//      console.log("We dwnld the data");
			var data = JSON.parse(req.response);
//      console.log(data);
			callback(data);
		}//if
	}//function
	req.open("GET",url,true);
	req.send();
}
function showProjects(data,anchor)
{
  //console.log("Inside the showProjects");
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
      img.className="thumbnail";
///*
      var lightimg = document.createElement("img");
      lightimg.src=projects[i].slideshow;
      var name = projects[i].title;
      var div = document.createElement("div");
      div.className = "lightbox_img";
      lightimg.id = name.replace(/\s+/g, '-');
      div.appendChild(lightimg);
  //    console.log(projects[i].title)
      //*/
      //console.log(img.alt+" "+lightimg.id+i);
      img.addEventListener("click",function(){
        openBox();
        console.log(i);
        showImg(i);
      });
  block.appendChild(img);
  row.appendChild(block);
  lightbox.appendChild(div);
  }//for each

  document.getElementById("lightbox").appendChild(lightbox);
}//function showProjects


function openBox(){
  document.getElementById("lightbox").style.display = "block";
  var images = document.getElementsByClassName("lightbox_img");
/*  for(var i= 0; i < images.length; i++)
  {
    if(images[i].id == img.id)
    {
     document.getElementById(img.id).style.display = "block";
      //    images[i].style.display = "none";
    }
  }//*/
  console.log(images);
//  console.log("It is visible");
}
function closeBox(){
  var images = document.getElementsByClassName("lightbox_img");
//  console.log(images);
  for(var i= 0; i < images.length; i++)
  {
    images[i].style.display = "none";
  }
  document.getElementById("lightbox").style.display = "none";
  console.log("we closed it");
  //document.getElementById(id).style.visibility = hidden;
}
function showImg(n)
{
  var images = document.getElementsByClassName("lightbox_img");

  console.log(n+" "+images[n]);
  for(var i = 0; i<images.length;i++);
  {
    if(n == i)
    {
//      images[i].style.display = "block";
    }

  }
}
