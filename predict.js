// TODO:
// add restart button
// add descriptions for results
// add more questions
// adjust answer weights 

//multiple choice, weights-> answer probability
const serMultQuestions = [
    {
        'q': 'Is your driver currently in the lead?',
        'a': ['Yes', 'No'],
        'weights': [
            [1, 1.5, 2, 2, 1, 5, 3, 2.3, 1, 3, 5, 0.8, 1.2, 1],
            [0.4, 3, 3, 4, 1, 3, 1, 4, 2, 1.2 , 2, 1.5, 1.8, 1]
        ]
    }, 
    {
        'q': 'What tires are currently on?',
        'a': ['Soft', 'Medium', 'Hard', 'Intermediate', 'Full Wet'],
        'weights': [
            [0.5, 4, 4, 4, 5, 0.2, 1, 1, 1, 1, 1, 1, 1, 2],
            [0.5, 4, 4, 4, 3.3, 0.2, 1, 1, 1, 1, 1, 1, 1, 2],
            [0.2, 2, 5, 5, 6, 0.2, 1, 1, 1, 1, 1, 1, 1, 2],
            [5, 4, 1, 1, 1, 0.2, 1, 1, 1, 1, 1, 1, 1, 2],
            [6.5, 4, 1, 1, 1, 0.2, 1, 1, 1, 1, 1, 1, 1, 2],
        ]
    },  
    {
        'q': 'Is the car broken?',
        'a': ['Yes', 'No'],
        'weights': [
            [1, 1, 1, 1, 5, 2, 0.4, 1, 4, 1.5, 1, 6, 2, 4],
            [1, 1, 1, 1, 0.6, 4, 0.4, 1, 4, 1.5, 1, 6, 4, 1],
        ]
    }, 
    {
        'q': 'What track is it?',
        'a': 
        [
            'Bahrain International Circuit, Sakhir', 
            'Jeddah Corniche Circuit, Jeddah', 
            'Albert Park Circuit, Melbourne', 
            'Autodromo Enzo e Dino Ferrari, Imola', 
            'Miami International Autodrome, Miami Gardens', 
            'Circuit de Barcelona-Catalunya, Barcelona', 
            'Circuit de Monte Carlo, Monaco', 
            'Baku City Circuit, Baku', 
            'Circuit Gilles-Villeneuve, Montreal', 
            'Silverstone Circuit, Towcester', 
            'Red Bull Ring, Speilberg', 
            'Circuit Paul Ricard, Le Castellet', 
            'Hungaroring, Budapest', 
            'Circuit Spa-Francorchamps, Stavelot', 
            'Circuit Zandvoort, Zandvoort', 
            'Autodromo Nazionale Monza, Monza', 
            'Marina Bay Circuit, Singapore', 
            'Suzuka Circuit', 
            'Circuit of the Americas, Austin', 
            'Autódromo Hermanos Rodríguez, Mexico City', 
            'Autódromo José Carlos Pace, Interlagos', 
            'Yas Marina Circuit'
        ],
        'weights': 0
    }, 
    {
        'q': 'Is Max Verstappen leading the race?',
        'a': ['Yes', 'No'],
        'weights': [
            [1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2.5, 1],
            [1, 1, 1, 1, 1, 1, 1, 1.6, 1, 1, 1, 1, 1, 1],
        ]
    }
];
//fill in the blank
const serBlankQuestions = [
    {
        'q': 'How many laps are left in the race?'
    }, 
    {
        'q': 'What is the tire age?'
    }, 
    {
        'q': 'What is the gap to the next car?'
    }
];
const sillyQuestions = [
    {
        'q': 'Choose a number from 1 to 10'
    }, 
    {
        'q': 'What is your favorite color?'
    }, 
    {
        'q': 'How did you feel during quali?'
    }, 
    {
        'q': 'How are you feeling?'
    },
    {
        'q': 'What is your favorite animal?'
    },
    {
        'q': 'What did you eat for breakfast?'
    }
];

const results = [
    {
        'title': 'Pit for soft tires',
        'desc': 'Squishy!'
    },
    {
        'title': 'Pit for hard tires',
        'desc': 'Honestly the only option'
    },
    {
        'title': 'Pit for intermediate tires',
        'desc': 'It might rain soon, better safe than sorry.'
    },
    {
        'title': 'Pit for full wet tires',
        'desc': 'Who cares if the track is wet or not.'
    },
    {
        'title': 'One stop race',
        'desc': '(but make it a 30 second stop)'
    },
    {
        'title': 'Five stop race',
        'desc': 'Maybe six if you feel like it'
    },
    {
        'title': 'Team orders time!!!',
        'desc': 'The drivers will be so happy'
    },
    {
        'title': 'Play in the gravel',
        'desc': 'The other drivers might join in :)'
    },
    {
        'title': 'Use the wrong tires',
        'desc': 'The driver will never see it coming.'
    },
    {
        'title': 'Retire from the race',
        'desc': 'What\'s the point anymore.'
    },
    {
        'title': 'Pit stop (just for fun!)',
        'desc': 'Your driver probably misses the pit crew.'
    },
    {
        'title': 'Tell the pit crew they can go home',
        'desc': 'A few lucky paddock club members can replace them!'
    },
    {
        'title': 'Let Mattia drive',
        'desc': 'He\'s just as qualified, if not more.'
    },
    {
        'title': 'EAT THE TIRES',
        'desc': 'chomp chomp chomp'
    }
];

const images = [
    "https://i2-prod.mirror.co.uk/incoming/article27563721.ece/ALTERNATES/s1200c/0_0gboz6dn0jd91.jpg", 
    "https://preview.redd.it/i06t82nmg6591.jpg?auto=webp&s=37ba8f54501baef14212513ef1e97d2a4efd427e",
    "https://pbs.twimg.com/media/FVDK2TzWUAA-hRb?format=jpg&name=900x900",
    "https://www.f1world.it/news/wp-content/uploads/2022/07/Sainz-Ritiro-Austria.jpg",
    "https://d3cm515ijfiu6w.cloudfront.net/wp-content/uploads/2022/07/27144209/ferrari-charles-leclerc-french-grand-prix-planet-f12.jpg",
    "https://external-preview.redd.it/Z9nQSJsfvQSS9ICFLynaBwR0HOhnNrGQ_pfb0aX2uPo.png?width=640&crop=smart&format=pjpg&auto=webp&s=13f765ab78afa2e985dc340936a436e2051c6cac",
    "https://www.sportsnet.ca/wp-content/uploads/2022/07/ferrari1280.jpg",
    "https://pbs.twimg.com/media/FRHxdWoXwAIa8XL.jpg",
    "https://d3cm515ijfiu6w.cloudfront.net/wp-content/uploads/2022/07/11132415/ferrari-carlos-sainz-engine-failure-planet-f1.jpg",
    "https://preview.redd.it/xy17hv4a3ra91.jpg?width=640&crop=smart&auto=webp&s=e1b68696ace371f0fc967d2d697a71aba0c2c1e1",
    "https://tellmysport.com/wp-content/uploads/2020/07/csportfotoskysports-vettel-leclerc-f1_5038361.jpg"
];

let questions = []
let answerWeights = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let curQuestion = 0;

//choose random questions from lists
function chooseRandQuestions(amount, arr) {
    let chosen = [];
    while(chosen.length < amount) {
        let rand = Math.floor(Math.random() * arr.length);
        if(!chosen.includes(arr[rand])) {
            chosen.push(arr[rand]);
        }
    }
    return(chosen);
};

//choose 3 serious (2 mult, 1 blank) + 2 silly
function questionSelection() {
    for(let q of chooseRandQuestions(3, serMultQuestions)) {
        questions.push(q);
    }
    questions.push(chooseRandQuestions(1, serBlankQuestions)[0]);
    for(let q of chooseRandQuestions(2, sillyQuestions)) {
        questions.push(q);
    }

    //show first question
    displayQuestion();
};

//title and options
function displayQuestion() {
    const title = document.getElementById('qText');
    const options = document.getElementById('qList');

    title.innerText = questions[curQuestion].q;
    options.innerHTML = ''; //clear options
    //only mult choice questions have options
    if(curQuestion < 3) {
        for(let i = 0; i < questions[curQuestion].a.length; i++) {
            let answer = document.createElement("li");
            let button = document.createElement("button");
    
            button.appendChild(document.createTextNode(questions[curQuestion].a[i]));
            button.onclick = function () {
                advanceQuestion(i);
            }
            options.appendChild(answer.appendChild(button));
        }
    }
    else {
        let input = document.createElement("input");

        let answer = document.createElement("li");
        options.appendChild(input);
        
        let button = document.createElement("button");
        button.appendChild(document.createTextNode("next"));
        button.onclick = function () {
            advanceQuestion(0);
        }
        options.appendChild(answer.appendChild(button));
    }
};

function calculateResult() {
    //choose result (weighted random)
    let calcWeights = [];
    for(let i = 0; i < answerWeights.length; i++) {
        if(i == 0) {
            calcWeights.push(answerWeights[i]);
        }
        else calcWeights.push(answerWeights[i] + calcWeights[i-1]);
    }

    let randNum = Math.floor(Math.random() * calcWeights[calcWeights.length - 1]);
    for(let i = calcWeights.length; i >= 0; i--) {
        if(calcWeights[i] - randNum <= 0) {
            return(i);
        }
    }
    return(calcWeights.length-1);
};

function displayResult() {
    //clear questions
    const qBox = document.getElementById('questions');
    const aBox = document.getElementById('answer');
    const iBox = document.getElementById('image')
    let resultIndex = calculateResult();

    qBox.innerHTML = ''; //clear questions

    let heading = document.createElement('h2');
    heading.innerText = 'Race Strategy:';
    aBox.appendChild(heading);

    let resultTitle = document.createElement('h3');
    resultTitle.innerText = results[resultIndex].title;
    aBox.appendChild(resultTitle);

    let resultText = document.createElement('p');
    resultText.innerText = results[resultIndex].desc;
    aBox.appendChild(resultText);

    let resultImage = document.createElement("img");
    resultImage.setAttribute("src", images[Math.floor((Math.random())*images.length)]);
    resultImage.classList.add("image")
    iBox.appendChild(resultImage);

    let restartButton = document.createElement('button');
    restartButton.innerText = 'Start Over';
    restartButton.onclick = function() {
        location.reload();
    }
    aBox.appendChild(restartButton);
};

function advanceQuestion(choiceNum) {
    //adjust weights
    if(curQuestion < 3 && questions[curQuestion].weights !== 0) {
        for(let i = 0; i < answerWeights.length; i++) {
            answerWeights[i] *= questions[curQuestion].weights[choiceNum][i];
        }
    }

    //last question
    if(curQuestion == 5) {
        displayResult();
    }
    else {
        //advance to dif type of question
        curQuestion++;
        displayQuestion(curQuestion);
    }
};

questionSelection();
