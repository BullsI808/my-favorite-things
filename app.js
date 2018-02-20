console.log('heck you');
var btn1 = document.getElementById('button1');
var btn2 = document.getElementById('button2');
var btn3 = document.getElementById('button3');
var response1 = document.getElementById('response1');
var response2 = document.getElementById('response2');
var response3 = document.getElementById('response3');

var favoriteDesserts = ['ice cream' , 'cake' , 'doughnuts'];
var favoriteFoods = ['pizza' , 'steak' , 'crab'];
var favoriteGames = ['warframe' , 'world of warcraft' , 'overwatch'];

btn1.addEventListener('click', function(){
    response1.innerHTML = "look in the console"
    for (var i=0 ; i<favoriteDesserts.length ; i++ ){
        console.log(favoriteDesserts[i]);
    }
});

btn2.addEventListener('click', function(){
    response2.innerHTML = "look in the console"
    for (var i=0 ; i<favoriteFoods.length ; i++ ){
        console.log(favoriteFoods[i]);
    }
});

btn3.addEventListener('click', function(){
    response3.innerHTML = "look in the console"
    for (var i=0 ; i<favoriteGames.length ; i++ ){
        console.log(favoriteGames[i]);
    }
});