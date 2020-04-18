const selector = document.getElementById('questions');

const requestQuestions = () => {

    const valeur = document.getElementById('input').value;
    const URL = `https://opentdb.com/api.php?amount=${valeur}`
 
    fetch(URL)
        .then((response) => response.json())
        .then((response) => {
        						const allQuestions = response.results;

                                for (let i = 0; i < valeur ; i++){
                                    if (allQuestions[i]){

                                        showQuestion(selector, allQuestions[i].question, i)
                                        waitingAnswer(selector, allQuestions[i].correct_answer, allQuestions[i].incorrect_answers, i)
                                        observerFadeUp();
                                    }
                                }
                                return response;    
                            })
    	.catch((error) => console.error(error));
};

const showQuestion = (selector, question, i) => {

    selector.innerHTML += `

        <div class="card col-lg-12 mt-5 card-inner" id="card-inner${i}">
            <div class="card-body">
                <h3 class= "text-center">${question}</h3>
                <div id="answers${i}"></div>
            </div>
        </div>   
    `
};

const waitingAnswer = (selector, correct_answer, allAnswers, z) => {

    let answers = document.getElementById(`answers${z}`);
    allAnswers.push(correct_answer)
    shuffle(allAnswers)

        for (let i = 0; i < allAnswers.length; i++) {

            answers.innerHTML += `

                <div class="card mt-5 ">
                    <button class="btn btn-block btn-primary" onclick="answerSelected('${allAnswers[i]}', '${correct_answer}', '${z}')"> ${allAnswers[i]} </button>
                </div>
            `
        }
}

const answerSelected = (i, correct_answer, z) => {
    
    if (i == correct_answer) {       
        console.log("gagné")
        win(z);
        document.getElementById(`card-inner${z}`).style.pointerEvents = "none";

    }

    else{
        console.log("perdu")
        loose(z);
        document.getElementById(`card-inner${z}`).style.pointerEvents = "none";
    }
}




const shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

const loose = (z) => {
  anime({
  targets: `#card-inner${z}`,
  translateX: -500,
  });
} 

const win = (z) => {
  anime({
  targets: `#card-inner${z}`,
  translateX: 500,
  });
} 

const observerFadeUp = () => {

    let observer = new IntersectionObserver(function (cards) {
        cards.forEach(function (card){
        
            if (card.intersectionRatio > 0.3) {
                card.target.classList.remove('not-visible')
                console.log('Item visible')
            }
        })
    },{
    threshold: [0.5]
    })
        let items = document.querySelectorAll(".card-inner")
            items.forEach(function(item){
            item.classList.add('not-visible')
            observer.observe(item)
    })
}