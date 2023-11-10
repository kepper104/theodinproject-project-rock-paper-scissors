const moves = 5
const moves_list = ["rock", "paper", "scissors"]
function game(){
    for (let i = 0; i < moves; i++){
        let computer_move = moves_list[get_computer_move()]
        let player_move = prompt("Please enter your move: ").toLowerCase()
        let move_res = determine_winner(player_move, computer_move)
        alert(move_res)
    }
}

function determine_winner(player_move, computer_move){
    let res = ""
    if (player_move === "paper" && computer_move === "rock"){
        res += `You win! ${player_move} beats ${computer_move}`
    } else if (player_move === "rock" && computer_move === "scissors"){
        res += `You win! ${player_move} beats ${computer_move}`
    } else if (player_move === "scissors" && computer_move === "paper"){
        res += `You win! ${player_move} beats ${computer_move}`
    } else {
        if (player_move !== computer_move){
            res += `You lose! ${computer_move} beats ${player_move}`
        } else {
            res += `You lose! (or, well... draw) ${computer_move} is the same as ${player_move}`
        }
    }
    return res
}

function get_computer_move(){
    let random_move = Math.floor(Math.random() * 3);
    return random_move
}

game()