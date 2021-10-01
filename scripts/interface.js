
//carrega apenas quando todos os documentos html forem carregados.
document.addEventListener('DOMContentLoaded', ()=>{

    let squares= document.querySelectorAll(".square");
    // console.log(squares); da a lista em node das classes square
    

    squares.forEach((square) =>{
        square.addEventListener('click',handleClick);
    })

// saber qual elemento foi clicado
function handleClick(event){
    let square = event.target;
    // console.log(square);
    let position = square.id
    // console.log(position);
    
    
  


    if(handleMove(position)){
        
        setTimeout(()=>{
            alert("O Jogo Acabou - O VENCEDOR FOI O NUMERO : "+ parseInt(playerTime+1))
        },10)
    };
   
    updateSquares();

}


function updateSquares(){

    let squares = document.querySelectorAll(".square");



    squares.forEach((square) => {
        // console.log(square); pega a lista, mas por conta do event click vai interagir apenas com um id
        let position = square.id;


        let symbol = board[position];
        // console.log(symbol); na parte de gameOver.js o symbol é adicionando a cada click
        

        if (symbol != '') {
            let teste = square.innerHTML = '<div class ='+symbol+'></div>'
            // console.log(teste);
            
            

        }
    
    })

   


}


})


