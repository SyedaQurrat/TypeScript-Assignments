//make album function
function make_album(artist_name, title_album, tracks) {
    var album = {
        artist: artist_name,
        title: title_album,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
//calling function with three different values
var album1 = make_album("The Beatles", "Sgt. Pepper's Lonely Hearts Club Band");
var album2 = make_album("The Beatles", "Abbey Road");
var album3 = make_album("The Beatles", "Abbey Road");
// now two times  calling function with third parameter
var album4 = make_album("The Beatles", "Abbey Road", 12);
var album5 = make_album("The Beatles", "Sgt. Pepper's Lonely Hearts Club Band", 12);
//print album veriable
console.log(album1);
console.log(album2);
console.log(album3);
console.log(album4);
console.log(album5);
