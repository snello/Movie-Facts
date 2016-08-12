'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'Movie Facts';

/**
 * Array containing space facts.
 */
var FACTS = [
    "Sean Connery wore a wig in every single one of his Bond performances.",
    "Some Wookie suits were made from human hair.",
    "Arnold Schwarzenegger was paid approximately $21,429 for every one of the 700 words he said in, Terminator 2: Judgement Day.",
    "Star Wars was originally prefixed by the definite article ‘The’.",
    "The original raw footage of Apocalypse Now consisted of 1,250,000 feet of film which is over 230 hours’ worth.",
    "Walt Disney refused to allow Alfred Hitchcock to film at Disneyland in the early 1960s because he had made 'that disgusting movie Psycho.'",
    "Alfred Hitchcock’s, Psycho (1960) was the first American film ever to show a flushing toilet.",
    "For Dr. Strangelove, Peter Sellers was paid $1 million, 55 percent of the film’s budget.",
    "There is a sound effect called the Wilhelm Scream that has been used in over 200 movies and TV shows since 1951.",
    "Django Unchained is the first time in 16 years that Leonardo DiCaprio didn’t get the top billing.",
    "Samuel L. Jackson used the word mother-fucker to overcome his stammer/stutter.",
    "Jim Caviezel was struck by lightening while he was on the cross in, Passion of the Christ.",
    "Michael Myers mask in Halloween is just a Captain Kirk mask altered slightly and painted white.",
    "The director of Cannibal Holocaust had to prove in court that the actors were still alive and didn’t get killed during the movie",
    "Courtney Love insists that the role of the drug dealer, Lance, in Pulp Fiction was offered to Kurt Cobain.",
    "The carpet in The Shining and the second floor of Sid’s house in Toy Story are almost identical.",
    "Ryan Gosling was cast as Noah in The Notebook because the director wanted someone 'not handsome'.",
    "Drive director Nicolas Winding Refn failed his driving test eight times.",
    "Barbie in Toy Story is voiced by Jodi Benson, best known for her role as Ariel in The Little Mermaid.",
    "Pornstar Asia Carrera plays the flatmate of Tara Reid in Logjammin’, the film within the film in The Big Lebowski.",
    "Sigourney Weaver actually made that ‘impossible’ basketball shot in, Aliens: Resurrection.",
    "Fox passed on The Watchmen because they thought the script was “one of the most unintelligible pieces of shit they had read in years.",
    "The original cut of The Wolf of Wallstreet had over four hours worth of content so had to be cut further.",
    "Mark Wahlberg and Matt Damon agree that if they’re ever confused for one another, they will just go along with it.",
    "Sam Raimi has a lucky car that is in all of his films, including his pre-automobile western, The Quick and the Dead.",
    "Morgan Freeman’s line, in Shawshank Redemption “Maybe it’s ’cause I’m an Irish” is not a joke. In the novel ‘Red’ really is Irish."
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random space fact from the space facts list
        var factIndex = Math.floor(Math.random() * FACTS.length);
        var randomFact = FACTS[factIndex];

        // Create speech output
        var speechOutput = "Here's your fact: " + randomFact;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me a movie fact, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};
