var btnSearch = document.getElementById('btnSearch');
btnSearch.addEventListener("click",myFunction);

function myFunction(){
	document.getElementById('results').innerHTML = " ";
	var txtSearch = document.getElementById('txtSearch').value;
	var txtSearch1 = txtSearch.split(" ").join("+");
	fetch("https://openlibrary.org/search.json?q="+txtSearch1)
	  .then(response => response.json())
	  .then(data => {
		  	//console.log(data.docs);
		  	if(0<data.docs.length){
			  	for(var i=0; i<data.docs.length; i++){
			  		document.getElementById('results').innerHTML += 
					"<div class='card mb-2' style='width: 18rem;'>" +
					  "<img src='http://covers.openlibrary.org/b/isbn/"+ data.docs[i].isbn[0]+"-M.jpg' class='card-img-top' alt='"+data.docs[i].title+"'>" +
					  "<div class='card-body'>" +
					    "<h5 class='card-title'>"+data.docs[i].title+"</h5>" +
					    "<p class='card-text'>Autor: "+data.docs[i].author_name+"</p>" +
					    "<p class='card-text'>ISBN: "+data.docs[i].isbn[0]+"</p>" +
					    "<a href='http://openlibrary.org/isbn/"+data.docs[i].isbn[0]+"' target='_blank' class='btn btn-primary'>Ir a ver</a>" +
					  "</div>" +
					"</div>";
			  	}
		  	}else{
		  		document.getElementById('results').innerHTML += 
				"<div class='alert alert-danger' role='alert'>" +
				  "Título no encontrado"+
				"</div>";
		  	}
	  });
}
