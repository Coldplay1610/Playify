console.log("Welcome to Spotify");
let songIndex=0;
let audioElement=new Audio('song/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let masterSongName = document.getElementById('masterSongName');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName: "Believer", filePath:"song/1.mp3",coverPath:"cover/1.jpg"},
    {songName: "Whatever it Takes", filePath:"song/2.mp3",coverPath:"cover/2.jpg"},
    {songName: "Thunder", filePath:"song/3.mp3",coverPath:"cover/3.jpg"},
    {songName: "Birds", filePath:"song/4.mp3",coverPath:"cover/4.jpg"},
    {songName: "Bullet in a Gun", filePath:"song/5.mp3",coverPath:"cover/5.jpg"},
    {songName: "Lonely", filePath:"song/6.mp3",coverPath:"cover/6.jpg"},
    {songName: "Walking the wire", filePath:"song/7.mp3",coverPath:"cover/7.jpg"},
    {songName: "Wrecked", filePath:"song/8.mp3",coverPath:"cover/8.jpg"},
    {songName: "Bad Liar", filePath:"song/9.mp3",coverPath:"cover/9.jpg"},
    {songName: "Zero", filePath:"song/10.mp3",coverPath:"cover/10.jpg"},
    {songName: "Enemy", filePath:"song/11.mp3",coverPath:"cover/11.jpg"},
    {songName: "Natural", filePath:"song/12.mp3",coverPath:"cover/12.jpg"}
]
songItems.forEach((element,i) => {
    // console.log(element,i);
    element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    element.getElementsByClassName('songListPlay')[0].innerText=songs[i].songName;
    
});
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})
// Listen to events
audioElement.addEventListener('timeupdate',()=>{console.log('timeupdate');
progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
console.log('progress');
myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})
const makeAllPlays=()=>{
    
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        // console.log(e.target);
        makeAllPlays();
        
        songIndex=parseInt(e.target.id);
        
        e.target.classList.remove('fa-circle-play');
        masterSongName.innerText=songs[songIndex-1].songName;
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`song/${songIndex}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
}) 
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>11)
    {
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`song/${songIndex}.mp3`;
    masterSongName.innerText=songs[songIndex-1].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex=0)
    {
        songIndex=12;
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`song/${songIndex}.mp3`;
    masterSongName.innerText=songs[songIndex-1].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})