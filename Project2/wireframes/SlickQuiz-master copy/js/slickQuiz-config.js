// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Let's see if you have learned!",
        "main":    "<p>How much do you think you know about the animals in Guatemala? You can take this quiz to find out!</p>",
        "results": "<h5>How did you do?</h5><p>If you want to continue learning about the animals in Guatemala, you can go back!</p>",
        "level1":  "Jeopardy Ready",
        "level2":  "Jeopardy Contender",
        "level3":  "Jeopardy Amateur",
        "level4":  "Jeopardy Newb",
        "level5":  "Stay in school, kid..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "What animal is considered the largest of America's big cats and the third largest in the world?", 
            "a": [
                {"option": "Puma",      "correct": false},
                {"option": "Panther",     "correct": false},
                {"option": "Jaguar",      "correct": true},
                {"option": "Cougar",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> The Jaguar is the largest cat in America!</p>",
            "incorrect": "<p><span>Uhh no.</span> The Jaguar is the largest cat in America.</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "What did the Quetzal represent to the Maya and Aztec people?",
            "a": [
                {"option": "Happiness and health",               "correct": false},
                {"option": "Power and wealth",   "correct": true},
                {"option": "Beauty and pride",               "correct": false},
                {"option": "Wisdom and curiosity", "correct": false} // no comma here
            ],
            "correct": "<p><span>Great!</span> The quetzal represented power and wealth.</p>",
            "incorrect": "<p><span>Hmmm.</span> The quetzal actually represented power and wealth.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "What is another name for the Puma? Select ALL that apply.",
            "a": [
                {"option": "Mountain Lion",           "correct": true},
                {"option": "Leopard",                  "correct": false},
                {"option": "Cougar",  "correct": true},
                {"option": "Panther",          "correct": true} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span> You're definitely a genius! </p>",
            "incorrect": "<p><span>Not Quite.</span> The only name not used to refer to pumas is leopard.</p>" // no comma here
        },
        { // Question 4
            "q": "Up to how long can it take a Sloth to digest a single meal?",
            "a": [
                {"option": "Twelve Days",    "correct": false},
                {"option": "One month",     "correct": true},
                {"option": "Three months",      "correct": false},
                {"option": "One week",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Oh My God!</span> I didn't actually expect you to know that!</p>",
            "incorrect": "<p><span>Wrong.</span> Sorry. It can actually take up to one month for a sloth to digest its food.</p>" // no comma here
        },
         { // Question 5 
            "q": "Are howler monkeys the loudest of all monekys?",
            "a": [
                {"option": "Yes",    "correct": true},
                {"option": "No",     "correct": false} 
            ],
            "correct": "<p><span>You are correct!</span> Howler monkeys are the loudest monkeys!</p>",
            "incorrect": "<p><span>You are wrong...</span> Howler monkeys are the loudest. </p>" // no comma here
        },
        { // Question 6
            "q": "Are Boa Constrictors considered some of the world's most beautiful snakes?",
            "a": [
                {"option": "Yes",    "correct": true},
                {"option": "No",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You clearly paid attention to the reading!</p>",
            "incorrect": "<p><span>Ehhh.. Good try</span> Boa constrictors <em>are </em> considered some of the world's most beautiful snakes. </p>" // no comma here
        },
         { // Question 7 
            "q": "What animal is a national symbol in Guatemala?", 
            "a": [
                {"option": "Puma",      "correct": false},
                {"option": "Sloth",     "correct": false},
                {"option": "Jaguar",      "correct": false},
                {"option": "Quetzal",     "correct": true} // no comma here
            ],
            "correct": "<p><span>You are right!</span> The quetzal is the national bird in Guatemala!</p>",
            "incorrect": "<p><span>I'm sorry but you are wrong.</span> The quetzal is the national bird in Guatemala.</p>" // no comma here
        },
         { // Question 8
            "q": "Sloths are omnivores, meaning they eat both plants and meat.",
            "a": [
                {"option": "True",    "correct": false},
                {"option": "False",     "correct": true} 
            ],
            "correct": "<p><span>Amazing!</span> Sloth's are not omnivores, they are herbivores.</p>",
            "incorrect": "<p><span>Good Try!</span> Sloth's are actually herbivores, meaning their diet is based off plants and leaves.</p>" // no comma here
        },
         { // Question 9 
            "q": "Jaguars avoid the water and are very bad swimmers.",
            "a": [
                {"option": "True",    "correct": false},
                {"option": "False",     "correct": true} 
            ],
            "correct": "<p><span>Nice!</span> Just like you, jaguars are actually good swimmers. </p>",
            "incorrect": "<p><span>Wrong!</span> Unlike most cats, jaguars do not avoid the water; in fact, they are very good swimmers.</p>" // no comma here
        },
         { // Question 10
            "q": "Boa Constrictors hold their prey while they wrap their bodies around their victim, squeezing them until they suffocate.",
            "a": [
                {"option": "True",    "correct": true},
                {"option": "False",     "correct": false} 
            ],
            "correct": "<p><span>Correct!</span> Their name suggests this. </p>",
            "incorrect": "<p><span>Wrong!</span> Just as their name suggests, they constrict or squeeze, their prey until they can no longer breath.</p>" // no comma here
        },
         { // Question 11
            "q": "The sound of howler monkeys is one of the loudest calls produced by any land animal.",
            "a": [
                {"option": "True",    "correct": true},
                {"option": "False",     "correct": false} 
            ],
            "correct": "<p><span>Brilliant!</span>Howler monkeys are more than just the loudest of all monkeys. </p>",
            "incorrect": "<p><span>Not quite!</span> Howler monkeys are actually one of the loudest land animals.</p>" // no comma here
        },
        { // Question 12
            "q": "The puma has the smallest range of any terrestrial mammal in the Western Hemisphere. ",
            "a": [
                {"option": "True",    "correct": false},
                {"option": "False",     "correct": true} 
            ],
            "correct": "<p><span>You are right!</span>Puma's have the largest range.</p>",
            "incorrect": "<p><span>You are wrong...</span> Puma's actually have the <em>largest </em> range of any mammal in the Western Hemisphere.</p>" // no comma here
        }// no comma he
    ]
};
