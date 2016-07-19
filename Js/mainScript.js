
$(document).ready(function(){
    $("button").click(function(){
        
           var search=$("#searchInput").val();
           $('#info').html('<tr><th>Movie Title</th><th>Description</th></tr>');
			$.ajax({
				type:"GET",
			   url: 'http://www.omdbapi.com/?s='+search,
			   
			   error: function() {
			      $('#info').html('<p>An error has occurred</p>');
			   },
			   
			   success: function(data) {

				   	   for(var i=0;i<data.Search.length;i++){
				   	   	  if(data.Search[i].Poster==='N/A')
				   	   	  {
				   	   	  	data.Search[i].Poster="bootstrap/images/na.jpg";
				   	   	  }
				   	   	  var addRow = '<tr><td>'+'<img src="'+data.Search[i].Poster+'"alt="NA"/></td>' 
				   	   	  					 +'<td> Title:'+data.Search[i].Title+'<br> Year: '
				   	   	  					 +data.Search[i].Year+'<br> imdbID: '
				   	   	  					 +data.Search[i].imdbID+'<br> Type: '
				   	   	  					 +data.Search[i].Type+'</td></tr>';

				   	   	  
				   	   	  					 
				   	   		$('#info').append(addRow);
				   	   }
			      }
			   
			});
    });
});
