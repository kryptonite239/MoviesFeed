const moviesDisplay=document.querySelector('.movies-section');
const genreDisplay=document.querySelector('.genre');
const langDisplay=document.querySelector('.lang');
const search=document.querySelector('input');
search.addEventListener('mousedown',()=>{
    search.style.borderBottom="2px solid white";
});
document.addEventListener('dblclick',()=>{
    search.style.borderBottom=0;
})

const width=10;
for(let i=0;i<width;i++){
    let card=document.createElement('div');
    card.setAttribute('class','movie-'+i+' movie');
    let rating=document.createElement('div');
    let r=document.createElement('div');
    let title=document.createElement('div');
    title.setAttribute('class','title');
    title.innerText="Call Me By Your Name";
    r.innerText=4.6;
    rating.appendChild(r);
    rating.setAttribute('class','rating');

    card.appendChild(rating);
    card.appendChild(title)
    
    card.addEventListener('click',hover);
    moviesDisplay.appendChild(card);
}
function hover(){

   let sidebar=document.querySelector(".sidebar");

   sidebar.style.display="block";
    
}
let col=document.createElement('div');
col.setAttribute('class','col-1');
genreDisplay.appendChild(col);

for(let i=1;i<=12;i++){
    let g=document.createElement('div');
    g.setAttribute('class','g '+'g-'+i);
    g.innerText='Romance';
    g.addEventListener('click',clicked);
    col.appendChild(g);
}
function clicked(){
    this.classList.remove('g');
    this.classList.add('clicked');
    this.removeEventListener('click',clicked);
    this.addEventListener('click',normal);
}

function normal(){
    this.classList.remove('clicked');
    this.classList.add('g');
    this.addEventListener('click',clicked);
}