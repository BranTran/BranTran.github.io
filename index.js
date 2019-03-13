window.onload = function(){
  var list = document.getElementById("newsitems")
  var news = "JSON/recentNews.json";
/*
  getNews(news,function(data){
    var descript = document.createElement("dt");
    descript.innerHTML = "data.date1.date";
    for(var i = 0; i < data.date1.class.length; i++)
    {
      var detail = document.createElement("dd");
      detail.innerHTML = "data.date1.class[i]";
      descript.appendChild(detail);
    }//for
    list.appendChild(descript);
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
