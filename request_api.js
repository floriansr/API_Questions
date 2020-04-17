const selector = document.getElementById('questions');

const requestQuestions = () => {

    const valeur = document.getElementById('input').value;
    const URL = `https://opentdb.com/api.php?amount=${valeur}`
 
    fetch(URL)
        .then((response) => response.json())
        .then((response) => {
        						const allQuestions = response.results;
                                console.log(allQuestions);

                                console.log(valeur)
                                for (let i = 0; i < valeur ; i++){
                                    console.log(i)          
                                    if (allQuestions[i]){
                                        showQuestion(selector, allQuestions[i].question, i)
                                        waitingAnswer(selector, allQuestions[i].correct_answer, allQuestions[i].incorrect_answers, i)
                                        console.log(i)
                                    }
                                }
                                return response;
                            })
    	.catch((error) => console.error(error));
};

const showQuestion = (selector, question, i) => {

    selector.innerHTML += `

        <div class="card col-lg-12 mt-5 card-inner">
            <div class="card-body">
                <h3 class= "text-center">${question}</h3>
                <div id="answers${i}"></div>
            </div>
        </div>   
    `
};

const waitingAnswer = (selector, correct_answer, allAnswers, z) => {

    let answers = document.getElementById(`answers${z}`);
    console.log(answers)

    allAnswers.push(correct_answer)
    shuffle(allAnswers)

        for (let i = 0; i < allAnswers.length; i++) {

        answers.innerHTML += `

                <div class="card mt-5">
                    <button class="btn btn-block btn-primary" onclick="answerSelected('${allAnswers[i]}', '${correct_answer}')"> ${allAnswers[i]} </button>
                </div>
            `
        }
}

const answerSelected = (i, correct_answer) => {
    

    if (i == correct_answer) {
        
        console.log("gagné")

        // let counter = 0
        // counter++
        // console.log(counter)
    }

    else{

        // animeObject
        console.log("perdu")

    }
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}