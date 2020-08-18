var inputValue = document.getElementById('inputValue');
const searchBtn = document.getElementById('search-button');
searchBtn.addEventListener('click', function(){
fetch(`https://api.lyrics.ovh/suggest/ ${inputValue.value}`)
.then(response => response.json())
.then(data =>{
console.log(data);

var searchResult = document.getElementById('search-result').innerHTML;

 document.getElementById('name').innerHTML = searchResult;

 document.getElementById('name').className += "single-result";

var ele = document.getElementsByClassName('lyrics-name');
var wash = document.getElementsByClassName('wash');

for (let i = 0; i < 10; i++) {
    var el = data.data[i];

    ele[i].innerText = data.data[i].title;
    wash[i].innerText = data.data[i].artist.name;

   



}

// first song lyrics
var lyricsBtn = document.getElementsByClassName('lyricsBtn');

    lyricsBtn[0].addEventListener('click', function(){
        var x= data.data[0].artist.name;
        var y = data.data[0].title;
        console.log(x,y);
           fetch(`https://api.lyrics.ovh/v1/${x}/${y}`)
           .then(res => res.json())
           .then(data =>{
               console.log(data.lyrics);
    
               document.getElementById('lyric').innerText = data.lyrics;
    
             
           })
           
       })


// Second song lyrics
       var lyricsBtn = document.getElementsByClassName('lyricsBtn');

    lyricsBtn[1].addEventListener('click', function(){
        var x= data.data[1].artist.name;
        var y = data.data[1].title;
        console.log(x,y);
           fetch(`https://api.lyrics.ovh/v1/${x}/${y}`)
           .then(res => res.json())
           .then(data =>{
               console.log(data.lyrics);
    
               document.getElementById('lyric').innerText = data.lyrics;
    
             
           })
           
       })


       // Third song lyrics
    var lyricsBtn = document.getElementsByClassName('lyricsBtn');

    lyricsBtn[2].addEventListener('click', function(){
        var x= data.data[2].artist.name;
        var y = data.data[2].title;
        console.log(x,y);
           fetch(`https://api.lyrics.ovh/v1/${x}/${y}`)
           .then(res => res.json())
           .then(data =>{
               console.log(data.lyrics);
    
               document.getElementById('lyric').innerText = data.lyrics;
    
             
           })
           
       })


     // Fourth song lyrics  
    var lyricsBtn = document.getElementsByClassName('lyricsBtn');

    lyricsBtn[3].addEventListener('click', function(){
        var x= data.data[3].artist.name;
        var y = data.data[3].title;
        console.log(x,y);
           fetch(`https://api.lyrics.ovh/v1/${x}/${y}`)
           .then(res => res.json())
           .then(data =>{
               console.log(data.lyrics);
    
               document.getElementById('lyric').innerText = data.lyrics;
    
             
           })
           
       })


     // Fifth song lyrics  
    var lyricsBtn = document.getElementsByClassName('lyricsBtn');

    lyricsBtn[4].addEventListener('click', function(){
        var x= data.data[4].artist.name;
        var y = data.data[4].title;
        console.log(x,y);
           fetch(`https://api.lyrics.ovh/v1/${x}/${y}`)
           .then(res => res.json())
           .then(data =>{
               console.log(data.lyrics);
    
               document.getElementById('lyric').innerText = data.lyrics;
    
             
           })
           
       })


       // Sixth song lyrics
       var lyricsBtn = document.getElementsByClassName('lyricsBtn');

       lyricsBtn[5].addEventListener('click', function(){
           var x= data.data[5].artist.name;
           var y = data.data[5].title;
           console.log(x,y);
              fetch(`https://api.lyrics.ovh/v1/${x}/${y}`)
              .then(res => res.json())
              .then(data =>{
                  console.log(data.lyrics);
       
                  document.getElementById('lyric').innerText = data.lyrics;
       
                
              })
              
          })
          

          // Seventh song lyrics
          var lyricsBtn = document.getElementsByClassName('lyricsBtn');

    lyricsBtn[6].addEventListener('click', function(){
        var x= data.data[6].artist.name;
        var y = data.data[6].title;
        console.log(x,y);
           fetch(`https://api.lyrics.ovh/v1/${x}/${y}`)
           .then(res => res.json())
           .then(data =>{
               console.log(data.lyrics);
    
               document.getElementById('lyric').innerText = data.lyrics;
    
             
           })
           
       })

       
       // Eighth song lyrics
       var lyricsBtn = document.getElementsByClassName('lyricsBtn');

    lyricsBtn[7].addEventListener('click', function(){
        var x= data.data[7].artist.name;
        var y = data.data[7].title;
        console.log(x,y);
           fetch(`https://api.lyrics.ovh/v1/${x}/${y}`)
           .then(res => res.json())
           .then(data =>{
               console.log(data.lyrics);
    
               document.getElementById('lyric').innerText = data.lyrics;
    
             
           })
           
       })


      // Ninth song lyrics
       var lyricsBtn = document.getElementsByClassName('lyricsBtn');

    lyricsBtn[8].addEventListener('click', function(){
        var x= data.data[8].artist.name;
        var y = data.data[8].title;
        console.log(x,y);
           fetch(`https://api.lyrics.ovh/v1/${x}/${y}`)
           .then(res => res.json())
           .then(data =>{
               console.log(data.lyrics);
    
               document.getElementById('lyric').innerText = data.lyrics;
    
             
           })
           
       })

       
       // Tenth song lyrics
       var lyricsBtn = document.getElementsByClassName('lyricsBtn');


    lyricsBtn[9].addEventListener('click', function(){
        var x= data.data[9].artist.name;
        var y = data.data[9].title;
        console.log(x,y);
           fetch(`https://api.lyrics.ovh/v1/${x}/${y}`)
           .then(res => res.json())
           .then(data =>{
               console.log(data.lyrics);
    
               document.getElementById('lyric').innerText = data.lyrics;
    
             
           })
           
       })
  
      



                          

}) 
})