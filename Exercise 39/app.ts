// Music Album

interface Album {
    artist: string;
    title: string;
    tracks?: number;
}

const make_album = (artist: string, albumTitle: string, tracks?: number): Album => {
    let album: Album = {
        artist: artist,
        title: albumTitle
    };

    if (tracks) {
      album.tracks = tracks;
    }

    return album;
}

const album1: Album = make_album("Ali Azmat", "Album Title 1", 10);
const album2: Album = make_album("Asim Azhar", "Album Title 2"); // No tracks specified
const album3: Album = make_album("Mustafa Zahid", "Album Title 3", 15);

console.log(album1);
console.log(album2);
console.log(album3);