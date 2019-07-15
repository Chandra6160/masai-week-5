function printCompany()
{
  var result=null
  var mainDiv=document.getElementById('output')
  mainDiv.innerHTML=""
  var xhr=new XMLHttpRequest();
  xhr.open('GET','https://raw.githubusercontent.com/masai-school/assignments-data/master/data/dummy/json/company_valuations.json')
  xhr.send()
  xhr.onload=function () {
    if(xhr.status==200)
    {
      result=xhr.response;
    }
    else
    {
        console.log("Error in request")
    }
    var json = JSON.parse(result)
    var stock_price=new Array();
    var market_cap=new Array();
    for(var i=0;i<json.length;i++)
    {
      stock_price.push(json[i].stock_price);
      market_cap.push(json[i].market_cap);
      var mainDiv=document.getElementById('output')
      var div=document.createElement('div')
      div.innerHTML="<h3>"+json[i].title+"</h3>" +"Stock Symbol : "+json[i].stock_symbol+"<br>"
                      +"Stock Price : "+json[i].stock_price+"<br>"+"Market Cap : "+json[i].market_cap;
      mainDiv.appendChild(div)
    }
    bubbleSortDec(stock_price)
    bubbleSortDec(market_cap)
  }
}
function printStocks()
{
  var result=null,count=0;
  var mainDiv=document.getElementById('output')
  mainDiv.innerHTML=""
  var xhr=new XMLHttpRequest();
  xhr.open('GET','https://raw.githubusercontent.com/masai-school/assignments-data/master/data/dummy/json/company_valuations.json')
  xhr.send()
  xhr.onload=function () {
    if(xhr.status==200)
    {
      result=xhr.response;
    }
    else
    {
        console.log("Error in request")
    }
    var json = JSON.parse(result)
    var stock_price=new Array();
    var market_cap=new Array();
    for(var i=0;i<json.length;i++)
    {
      stock_price.push(json[i].stock_price);
      market_cap.push(json[i].market_cap);
    }
    bubbleSortDec(stock_price)
    bubbleSortDec(market_cap)
    var stocks=[]
    for (var j= 0; j < stock_price.length-990;j++)
    {
      stocks.push(stock_price[j])
      for(var k=0;k<json.length;k++)
      {
        if(stocks[j]==json[k].stock_price)
        {
          console.log(stocks[j]);
          count++
          if(count<=10)
          {
            console.log(count)
            var mainDiv=document.getElementById('output')
            var div=document.createElement('div')
            div.innerHTML="<h3>"+json[k].title+"</h3>" +"<p>Stock Symbol : "+json[k].stock_symbol+"<br>"
                            +"Stock Price : "+json[k].stock_price+"<br>"+"Market Cap : "+json[k].market_cap+"</p>";
            mainDiv.appendChild(div)
          }
          break

        }
      }

    }
    console.log(stocks);
  }
}
function printMarket()
{
  var result=null,count=0;
  var mainDiv=document.getElementById('output')
  mainDiv.innerHTML=""
  var xhr=new XMLHttpRequest();
  xhr.open('GET','https://raw.githubusercontent.com/masai-school/assignments-data/master/data/dummy/json/company_valuations.json')
  xhr.send()
  xhr.onload=function () {
    if(xhr.status==200)
    {
      result=xhr.response;
    }
    else
    {
        console.log("Error in request")
    }
    var json = JSON.parse(result)
    var stock_price=[];
    var market_cap=[];
    for(var i=0;i<json.length;i++)
    {
      stock_price.push(json[i].stock_price);
      market_cap.push(json[i].market_cap);
    }
    bubbleSortDec(stock_price)
    bubbleSortDec(market_cap)
    var markets=[]
    for (var j= 0; j < market_cap.length-990;j++)
    {
      markets.push(market_cap[j])
      for(var k=0;k<json.length;k++)
      {
        if(markets[j]==json[k].market_cap)
        {
          console.log(markets[j]);
          if(count<=10)
          {
            var mainDiv=document.getElementById('output')
            var div=document.createElement('div')
            div.innerHTML="<h3>"+json[k].title +"</h3>"+"Stock Symbol : "+json[k].stock_symbol+"<br>"
                            +"Stock Price : "+json[k].stock_price+"<br>"+"Market Cap : "+json[k].market_cap;
            mainDiv.appendChild(div)
          }
          break;
        }
      }
    }
  }
}
function bubbleSortDec(arr){

  for(var i=0;i<arr.length-1;i++)
  {
    for(var j=0;j<arr.length-1;j++)
    {
      if(arr[j] < arr[j+1])
      {
        var temp=arr[j];
        arr[j]=arr[j+1]
        arr[j+1]=temp

      }
    }
  }
  return arr
}
function printSearch()
{
  var input=document.getElementById('input').value;
  var result=null
  var mainDiv=document.getElementById('output')
  mainDiv.innerHTML=""
  var xhr=new XMLHttpRequest();
  xhr.open('GET','https://raw.githubusercontent.com/masai-school/assignments-data/master/data/dummy/json/company_valuations.json')
  xhr.send()
  xhr.onload=function () {
    if(xhr.status==200)
    {
      result=xhr.response;
    }
    else
    {
        console.log("Error in request")
    }
    var json = JSON.parse(result)
    var stock_price=new Array();
    var market_cap=new Array();
    for(var i=0;i<json.length;i++)
    {
      if(input==json[i].stock_symbol)
      {
        var mainDiv=document.getElementById('output')
        var div=document.createElement('div')
        div.innerHTML="<h3>"+json[i].title+"</h3>"+"Stock Symbol : "+json[i].stock_symbol+"<br>"
                        +"Stock Price : "+json[i].stock_price+"<br>"+"Market Cap : "+json[i].market_cap;
        mainDiv.appendChild(div)
      }
    }
    bubbleSortDec(stock_price)
    bubbleSortDec(market_cap)
  }
}
