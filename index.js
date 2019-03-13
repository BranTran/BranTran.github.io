window.onload = function(){
  var list = document.getElementById("newsitems")
  var news = "https://brantran.github.io/JSON/recentNews.json";

  getNews(news,function(data){
    addNews(data.date1);
    addNews(data.date2);
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
function addNews(data){
  var descript = document.createElement("dt");
  descript.innerHTML = data.date;
  for(var i = 0; i < data.things.length; i++)
  {
    var detail = document.createElement("dd");
    detail.innerHTML = data.things[i];
    descript.appendChild(detail);
  }//for
  list.appendChild(descript);
}
