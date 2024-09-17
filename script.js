
const choices = document.querySelectorAll(".choice");
let computer_score = document.getElementById("computer-score");
let user_score = document.getElementById("user-score");
let winwin_msg = document.querySelector("#msg");
let you_chose = document.querySelector(".you_chose");
let compute_chose = document.querySelector(".compute_chose");

let userscore = 0;
let computerscore = 0;

/// For computer choice
const computerchoice = () => {
    const option = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * option.length);
    return option[randomIndex];
};

/// For displaying winner
const showwinner = (userwin, userchoice, compchoice) => {
    if (userwin) {
        userscore++;
        user_score.innerText = userscore;
        winwin_msg.innerText = "Result: You win!";
        winwin_msg.style.backgroundColor = "green";
    } else {
        computerscore++;
        computer_score.innerText = computerscore;
        winwin_msg.innerText = "Result: You lose!";
        winwin_msg.style.backgroundColor = "red";
    }
    you_chose.innerText = `You chose: ${userchoice}`;
    compute_chose.innerText = `Computer chose: ${compchoice}`;
};

/// For tie condition
const drawgame = (userchoice, compchoice) => {
    winwin_msg.innerText = "Result: It's a tie!";
    winwin_msg.style.backgroundColor = "orange";
    you_chose.innerText = `You chose: ${userchoice}`;
    compute_chose.innerText = `Computer chose: ${compchoice}`;
};

/// Game logic
const playgame = (userchoice) => {
    const compchoice = computerchoice();
    
    if (userchoice === compchoice) {
        drawgame(userchoice, compchoice);
        return;
    }
    
    let userwin = false;
    if (userchoice === "rock") {
        userwin = compchoice === "scissors";
    } else if (userchoice === "paper") {
        userwin = compchoice === "rock";
    } else if (userchoice === "scissors") {
        userwin = compchoice === "paper";
    }

    showwinner(userwin, userchoice, compchoice);
};

/// Fetch user input when the user clicks a choice
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});
