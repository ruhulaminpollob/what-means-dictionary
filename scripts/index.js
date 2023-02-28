const loadMeaning = (word) => {
    if (word) {
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    fetch(url)
        .then(Response => Response.json())
        .then(data => {
            
            if (data.title==="No Definitions Found") {
                 alert(data.message)
            } else {
                displayMeaning(data)
            }
        });
    }else{
        alert('empty input field')
    }
    

}

const displayMeaning=(wordInfo)=>{
    wordInfo[0].phonetics.forEach(element => {
        const audioResult=document.getElementById('audio-result');
        console.log(element.audio);
        const audio=document.createElement('audio');
        audio.src=element.audio
        const audioPlayBtn=document.createElement('button');
        audioPlayBtn.innerText='Play'
        audioPlayBtn.onclick=()=>audio.play()
        audioResult.appendChild(audio)
        audioResult.appendChild(audioPlayBtn)
        
        // console.log(audio);

    });
    // console.log(wordInfo[0].phonetics);
}








// search event handler 
document.getElementById('search-btn').addEventListener('click', function () {
    const searchInputFiled = document.getElementById('search-input-filed').value;
    
    loadMeaning(searchInputFiled)
})

const searchInputFiled = document.getElementById('search-input-filed').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        const searchInputFiled = document.getElementById('search-input-filed').value;
        loadMeaning(searchInputFiled)
    }
})