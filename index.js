window.onload = function(){
  var list = document.getElementById("newsitems");
  var news = "https://brantran.github.io/JSON/recentNews.json";

  getNews(news,function(data){
    addNews(data.date1,list);
    addNews(data.date2,list);
  });
//*/
}

function getNews(news,callback){
  var req = new XMLHttpRequest();
	req.onreadystatechange = function(){
		if(req.readyState == 4 && req.status == 200)
		{
			var data = JSON.parse(req.response);
			callback(data);
		}//if
	}//function
	req.open("GET",news,true);
	req.send();
}
function addNews(data,parent){
  var semester = document.createElement("li");
  semester.textContent = data.date;
  var innerlist = document.createElement("ul");
  for(var i = 0; i < data.things.length; i++)
  {
    var detail = document.createElement("li");
    detail.textContent = data.things[i];
    innerlist.appendChild(detail);
  }//for
  semester.appendChild(innerlist);
  parent.appendChild(semester);
}
