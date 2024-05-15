//make album function
function make_album (artist_name :string ,title_album :string , tracks?: number){
let album: {artist :string , title :string , tracks? :number} ={
    artist: artist_name,
    title: title_album,
};
if(tracks !== undefined){
    album.tracks=tracks;
}
return album;
}
//calling function with three different values
let album1 = make_album("The Beatles","Sgt. Pepper's Lonely Hearts Club Band");
let album2 =make_album("The Beatles","Abbey Road");
let album3 =make_album("The Beatles","Abbey Road");

// now two times  calling function with third parameter
let album4 =make_album("The Beatles","Abbey Road" , 12);
 let album5 =make_album("The Beatles","Sgt. Pepper's Lonely Hearts Club Band",12);

 //print album veriable

 console.log(album1);
 console.log(album2);
 console.log(album3);
 console.log(album4);
 console.log(album5);
 