let row = 6;
let col = 8;
let seatNumList = []
// let seatContainer = document.getElementsByClassName("seatContainer")
let booking = (event, i, j) =>{
   if(event.target.classList.contains("seat")){
      event.target.classList.replace( "seat", "occupied")
      seatNumList.push(i*8+j+1)
   }else{
    event.target.classList.replace( "occupied", "seat")
    // seatNumList.push(i*8+j+1)
    let seatNumber = i*8+j+1;
    let index = seatNumList.indexOf(seatNumber);
    if(index > -1){
        seatNumList.splice(index,1) // 잇으면 빼줘라
    }
}
getMovie();
}

let screen = document.getElementsByClassName("screen")
for(let i=0; i<row; i++){
   let div = document.createElement('div')
   div.classList.add('row')
   for(let j=0; j<col; j++){
      let span = document.createElement('span')
      span.classList.add("seat")
      div.appendChild(span)
      span.addEventListener('click', (event)=>booking(event, i, j))
   }
   screen[0].parentNode.insertBefore(div, screen[0].nextSibling)
}


// change event
let count = document.getElementById("count");
let costs = document.getElementById("costs");
let movie = document.getElementById('movie');

let getMovie = (event) => {
    let movieTittle = movie.value
    count.innerHTML = seatNumList.length
    costs.innerHTML = movieTittle * seatNumList.length
}

movie.addEventListener('change', getMovie)


