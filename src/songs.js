const songs = [
    {
        title: "Drive Breakbeat",
        artist: "Rockot",
        src : require('./components/songs/drive-breakbeat-173062.mp3')
    },
    {
        title: "Good Night",
        artist: "FASSounds",
        src : require('./components/songs/good-night-160166.mp3')
    },
    {
        title: "Lofi Chill",
        artist: "BoDleasons",
        src : require('./components/songs/lofi-chill-medium-version-159456.mp3')
    },
    {
        title: "Titanium",
        artist: "AlishaMusic",
        src : require('./components/songs/titanium-170190.mp3')
    }
].sort(() => .5 - Math.random())

export default songs;