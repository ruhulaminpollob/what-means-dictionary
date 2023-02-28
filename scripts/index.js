const loadMeaning = (word) => {
    if (word) {
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    fetch(url)
        .then(Response => Response.json())
        .then(data => {
            
            if (data.title==="No Definitions Found") {
                 alert(data.message)
            } else {
                
            }
        });
    }else{
        alert('empty input field')
    }
    

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