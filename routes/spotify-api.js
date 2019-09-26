require("dotenv").config();
var Spotify = require("node-spotify-api");
var keys = require("./keys");
var spotify = new Spotify(keys.spotify);
var request = require("request");


function getTracks(track, callback) {
    spotify.search(
        {
            type: "track",
            query: "track",
        },
        function (err, data) {
            if (err) {
                console.log(err);
                return
            }
            console.log("data", data.tracks);
        },
    )
}
getTracks();
// function getAlanbums(album, callback) {
//     spotify.search(
//         {
//             type: "album",
//             query: "album",
//         },
//         function (err, data) {
//             if (err) {
//                 console.log(err);
//                 return
//             }
//             console.log("data", data.albums);
//         },
//     )
// }
// getAlanbums();

module.exports = {
    getTracks,
    getAlanbums,

}