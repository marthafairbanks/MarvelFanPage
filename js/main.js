$(document).ready(function() {
    console.log("hey");


    $.ajax({
        url: 'http://gateway.marvel.com:80/v1/public/characters?apikey=a3d450fd87cce2aeff11efbcc111f789',
        success: function success(marvel) {
            console.log("hey2");
      

    function randomFeature(n) {
     	return Math.floor(Math.random() * n -1 ) + 1;	
    }
    
    function writeImages(){
   		characterArray.forEach(function(character) {
   		var characterImage = character.thumbnail.path+"."+character.thumbnail.extension;
	    $(".characterWrapper").append("<div class = 'characterImage'><img src='"+characterImage+"'><figcaption>"+character.name+"</div>");
		}

   	);}

    var characterArray = marvel.data.results;
    console.log(characterArray);
    
    var character1 = randomFeature(characterArray.length);
    var character2 = randomFeature(characterArray.length);
    var character3 = randomFeature(characterArray.length);
    
    character1 = characterArray[character1];
    character2 = characterArray[character2];
    character3 = characterArray[character3];

    console.log(characterArray);

    characterArray = [];

    characterArray.push(character1);
    characterArray.push(character2);
    characterArray.push(character3);

    writeImages();

   	}

	});


    $.ajax({
        url: 'http://gateway.marvel.com:80/v1/public/comics?apikey=a3d450fd87cce2aeff11efbcc111f789',
        success: function success(marvel) {
            console.log("hey2");
      

    function randomFeature(n) {
     	return Math.floor(Math.random() * n -1 ) + 1;	
    }
    
    function writeImages(){
   		comicArray.forEach(function(comic) {
   		var comicImage = comic.thumbnail.path+"."+comic.thumbnail.extension;
	    $(".comicWrapper").append("<div class = 'comicImage'><img src='"+comicImage+"'><figcaption>"+comic.title+"</div>");
		}

   	);}

    var comicArray = marvel.data.results;
    console.log(comicArray);
    
    var comic1 = randomFeature(comicArray.length);
    var comic2 = randomFeature(comicArray.length);
    var comic3 = randomFeature(comicArray.length);
    
    comic1 = comicArray[comic1];
    comic2 = comicArray[comic2];
    comic3 = comicArray[comic3];

    console.log(comicArray);

    comicArray = [];

    comicArray.push(comic1);
    comicArray.push(comic2);
    comicArray.push(comic3);

    writeImages();

   	}

	});

});    