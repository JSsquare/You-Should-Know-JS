//ajax
const http = new XMLHttpRequest();
const url = "https://jsonplaceholder.typicode.com/posts";
Http.open("GET", url);
Http.send();
Http.onreadystatechange=(e)=>{
	console.log(Http.responseText)
}

//jQuery
//$.ajax
$.document.ready(function(){
	const url = "https://jsonplaceholder.typicode.com/posts";

	$('.button').click(function(){
		$.ajax({
			url: Url,
			type: "GET",
			success: function(result){
				console.log(result);
			},
			error: function(error){
				console.log('Error', error);
			}
		})
		})
})

//$.get
$.document.ready(function(){
	const url = "https://jsonplaceholder.typicode.com/posts";

	$('.button').click(function(){
		$.get(Url, function(data, status){
			console.log(`${data}`)	
		});
	})

});

//$.post
$document.ready(function(){
	const url = "https://jsonplaceholder.typicode.com/posts";
	const data = {
		name:'John Doe',
		id: 1234
	}
	$('.button').click(function(){
		$.post(url, data, function(data, status){
			console.log(`${data} ${status}`)	
		})

		});
});

//ES6 fetch
const url = "https://jsonplaceholder.typicode.com/posts";
const data = {
		name:'John Doe',
		id: 1234
	}
const params = {
	headers: {
		"content-type" : "application/json; charset=UTF-8"
	},
	body: data,
	method: "POST"
};

fetch(url, params)
.then(data => {return data.json()})
.then(res => {console.log(res)})
.catch(error => console.log(error))



//angularJS $http
$http.get("https://jsonplaceholder.typicode.com/posts")
  .then(function(response){  console.log(response.data); });


//Angular HttpClient Modeule
import { HttpClientModule } from '@angular/common/http';
export class AppComponent implements OnInit { // implementing OnInit
  
  constructor( private http: HttpClient ) {

  }
  ngOnInit(): void { // adding the lifecycle hook ngOnInit
    this.http.get('http://jsonplaceholder.typicode.com/posts').subscribe(data => {
      console.log(data); // using the HttpClient instance, http to call the API then subscribe to the data and display to console
    });
  }

}