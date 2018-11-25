function fun()
	{
		$.ajax(
		{
			type:"POST",
			url:"/findBooks",
			data: { key: document.getElementById('search').value },
			success: function(data)
			{
				x = document.getElementsByTagName("results")[0];			
				x.innerHTML = "<h1 id='ready' class='ml-5 mt-3'><b><u> RESULTS: <u><b></h1>";

				resultRow = document.createElement('div');
				deck = document.createElement('div');

				var books = data.results;
				for ( var i in books ) {
					if( i % 4 == 0)
					{
						resultRow.appendChild(deck);
						x.appendChild(resultRow);
						resultRow = document.createElement('div');
						resultRow.className = "row no-gutters m-5";
						deck = document.createElement('div');
						deck.className = 'card-deck justify-content-around';
					}
				    var newElement = document.createElement('div');
				    newElement.id = "books" + i;
				    newElement.className = "card shadow";
				    newElement.style = "width: 17rem;";
				    newElement.href = books[i].link;
				    console.log(books[i].link);

				    imageTag = document.createElement('img');
				    imageTag.src = books[i].thumbnail;
				    newElement.appendChild(imageTag);

				    	var cardBody = document.createElement('div');
				    	cardBody.className = "card-body";
				    		var cardHead = document.createElement('h5');
				    		cardHead.className = "card-title";
				    		cardHead.innerHTML = books[i].title;
				    		cardBody.appendChild(cardHead);
				    	
				    	var bookInfo = document.createElement('p');
				    	bookInfo.innerHTML = " <b> Authors : </b> ";
				    	for( j in books[i].authors )
				    	{
				    		if( j!=0)
				    			bookInfo.innerHTML += ", ";
				    		bookInfo.innerHTML += books[i].authors[j];
				    		if( j == 3 )
				    		{
				    			bookInfo.innerHTML += "<b>...</b>";
				    		}
				    	}
				    	cardBody.appendChild(bookInfo);	

				    	bookInfo = document.createElement('p');
				    	bookInfo.innerHTML = " <b> Language : </b> " + books[i]['language'];	
						cardBody.appendChild(bookInfo);

						bookInfo = document.createElement('p');
				    	bookInfo.innerHTML = " <b> Categories : </b> ";
				    	for( j in books[i].categories )
				    	{
				    		if( j!=0)
				    			bookInfo.innerHTML += ", ";
				    		bookInfo.innerHTML += books[i].categories[j];
				    		if( j == 3 )
				    		{
				    			bookInfo.innerHTML += "<b>...</b>";
				    		}
				    	}
				    	cardBody.appendChild(bookInfo);	

				    	bookInfo = document.createElement('p');
				    	bookInfo.innerHTML = " <b> Published On : </b> " + books[i]['publishedDate:'];	
						cardBody.appendChild(bookInfo);

						bookInfo = document.createElement('p');
				    	bookInfo.innerHTML = " <b> Publisher : </b> " + books[i]['publisher'];	
						cardBody.appendChild(bookInfo);

						bookInfo = document.createElement('p');
				    	bookInfo.innerHTML = " <b> Page Count : </b> " + books[i]['pageCount'];	
						cardBody.appendChild(bookInfo);
				    	
					newElement.appendChild(cardBody);
				    deck.appendChild(newElement);
				} 
				resultRow.appendChild(deck);
				x.appendChild(resultRow);
				// console.log(books);
				document.getElementById("move").style.display = "block";
			},
			error: function(data)
			{
				alert('Some error occured! Please check your connection or try after some time.');				
			}
		});
	}
	