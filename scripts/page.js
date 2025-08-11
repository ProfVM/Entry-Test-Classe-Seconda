//=========================================
// File name: page_NNNNN.js
//-----------------------------------------
// Project : QuizFaber 4.1.9
// Licence : GNU General Public License v3.0
// Author  : Luca Galli
// Email   : info@quizfaber.com
//-----------------------------------------
// Script for NNNNN-th question
//=========================================

var allInitQuestionFunctions = new Array (
    InitQuestion1,
    InitQuestion2,
    InitQuestion3,
    InitQuestion4,
    InitQuestion5,
    InitQuestion6,
    InitQuestion7,
    InitQuestion8,
    InitQuestion9,
    InitQuestion10,
    InitQuestion11,
    InitQuestion12,
    InitQuestion13,
    InitQuestion14,
    InitQuestion15,
    InitQuestion16,
    InitQuestion17,
    InitQuestion18,
    InitQuestion19,
    InitQuestion20,
    InitQuestion21,
    InitQuestion22,
    InitQuestion23,
    InitQuestion24,
    InitQuestion25,
    InitQuestion26,
    InitQuestion27,
    InitQuestion28,
    InitQuestion29,
    InitQuestion30,
    InitQuestion31,
    InitQuestion32,
    InitQuestion33,
    InitQuestion34,
    InitQuestion35,
    InitQuestion36,
    InitQuestion37,
    InitQuestion38,
    InitQuestion39,
    InitQuestion40,
    InitQuestion41,
    InitQuestion42,
    InitQuestion43,
    InitQuestion44,
    InitQuestion45,
    InitQuestion46,
    InitQuestion47,
    InitQuestion48,
    InitQuestion49,
    InitQuestion50,
    InitQuestion51,
    InitQuestion52,
    InitQuestion53,
    InitQuestion54,
    InitQuestion55,
    InitQuestion56,
    InitQuestion57,
    InitQuestion58,
    InitQuestion59,
    InitQuestion60,
    InitQuestion61,
    InitQuestion62,
    InitQuestion63,
    InitQuestion64,
    InitQuestion65,
    InitQuestion66,
    InitQuestion67,
    InitQuestion68,
    InitQuestion69,
    InitQuestion70,
    InitQuestion71,
    InitQuestion72,
    InitQuestion73,
    InitQuestion74,
    InitQuestion75,
    InitQuestion76,
    InitQuestion77,
    InitQuestion78,
    InitQuestion79,
    InitQuestion80,
    InitQuestion81,
    InitQuestion82,
);



$(document).ready(function ()
{
	const questionIndex = 0;
	const questionTime = 0;

	PageLoad(questionIndex, questionTime);

	
});

$(window).on("beforeunload", function ()
{
	PageUnload();
	window.scrollTo(0, 0);
});

$(window).on("scroll", function ()
{
	PageOnScroll();
});


/* Code generated function */
function InitQuestion1()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 0;
    var weight = DecodeNumber('4lqxMtuw0TU=', 685, 0, 99999);
    var numOfAnswers = 10;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('iJGdoPyJdyg=', 44, -1000, 1000),DecodeDecimal('oNV8mHcqYdo=', 44, -1000, 1000),DecodeDecimal('oNV8mHcqYdo=', 44, -1000, 1000));
    question.num = 1;
    question.answers.length = 0;
    question.shortTextQuestion = "Body and Health";
    question.noChoice = false;
    choice = $('#idGap1_0').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('RGRZITusr8E='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap1_1').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('b6IK3/JjHgw='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap1_2').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('8VqA6ltGxM5eGRQa'));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    choice = $('#idGap1_3').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('un9HIiS7HDLgqBaa'));
    var answer3 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer3);
    choice = $('#idGap1_4').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('VPPhkDjsrSw='));
    var answer4 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer4);
    choice = $('#idGap1_5').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('kjnmxpGh/9Y='));
    var answer5 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer5);
    choice = $('#idGap1_6').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('68IBYE5qs9uAvLHz'));
    var answer6 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer6);
    choice = $('#idGap1_7').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('qQzW4QZ97DA='));
    var answer7 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer7);
    choice = $('#idGap1_8').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('VpWCSCLMZj8='));
    var answer8 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer8);
    choice = $('#idGap1_9').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('WPSI/EwwDks='));
    var answer9 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer9);
    return question;

}
/* Code generated function */
function InitQuestion2()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 1;
    var weight = DecodeNumber('A7L9ppJzwIw=', 54, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('A7L9ppJzwIw=', 54, -1000, 1000),DecodeDecimal('bvgZkaOcWxk=', 54, -1000, 1000),DecodeDecimal('bvgZkaOcWxk=', 54, -1000, 1000));
    question.answers.length = 0;
    question.num = 2;
    question.isSingleAns = false;
    question.shortTextQuestion = "Choose the correct article: ___ apple a day keeps the doctor away.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('A7L9ppJzwIw=', 56, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "a";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('XVIn5AxGemY=', 58, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "the";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('45kT8rIPV+Q=', 60, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "an";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('JE2oyQhZz4Y=', 62, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "no article";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion3()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 2;
    var weight = DecodeNumber('lqZyCIaRUf4=', 64, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('lqZyCIaRUf4=', 64, -1000, 1000),DecodeDecimal('QG2jlZRq8DY=', 64, -1000, 1000),DecodeDecimal('QG2jlZRq8DY=', 64, -1000, 1000));
    question.answers.length = 0;
    question.num = 3;
    question.isSingleAns = false;
    question.shortTextQuestion = "Choose the best option: Can you close ___ window, please?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('lqZyCIaRUf4=', 66, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('QG2jlZRq8DY=', 64, -9999, 99999), DecodeNumber('QG2jlZRq8DY=', 64, -9999, 99999), '');
    answer1.shortTextAnswer = "a";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Po6uQhNUdpw=', 68, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('0ruBw+PWHbE=', 66, -9999, 99999), DecodeNumber('bGaRZyCloyU=', 66, -9999, 99999), '');
    answer2.shortTextAnswer = "the";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Po6uQhNUdpw=', 70, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('x63sqIGApxM=', 68, -9999, 99999), DecodeNumber('x63sqIGApxM=', 68, -9999, 99999), '');
    answer3.shortTextAnswer = "an";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('zAZnDiQBCrQ=', 72, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('gQC8i7eXGJ4=', 70, -9999, 99999), DecodeNumber('gQC8i7eXGJ4=', 70, -9999, 99999), '');
    answer4.shortTextAnswer = "no article";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion4()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 3;
    var weight = DecodeNumber('Lq7nEx6wzvA=', 74, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Lq7nEx6wzvA=', 74, -1000, 1000),DecodeDecimal('iR+PQOmvBXQ=', 74, -1000, 1000),DecodeDecimal('iR+PQOmvBXQ=', 74, -1000, 1000));
    question.answers.length = 0;
    question.num = 4;
    question.isSingleAns = false;
    question.shortTextQuestion = "What time is it? 7:15";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Iw3VToOvOqY=', 76, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('xheDP899Iu4=', 74, -9999, 99999), DecodeNumber('iR+PQOmvBXQ=', 74, -9999, 99999), '');
    answer1.shortTextAnswer = "Quarter past seven";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Iw3VToOvOqY=', 78, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('uf835cIBduQ=', 76, -9999, 99999), DecodeNumber('uf835cIBduQ=', 76, -9999, 99999), '');
    answer2.shortTextAnswer = "Half past seven";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('kSqifEr7uIA=', 80, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('rOsjeXtqixk=', 78, -9999, 99999), DecodeNumber('rOsjeXtqixk=', 78, -9999, 99999), '');
    answer3.shortTextAnswer = "Quarter to seven";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('W8VvR8adohw=', 82, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('UeZbrlo5CYg=', 80, -9999, 99999), DecodeNumber('UeZbrlo5CYg=', 80, -9999, 99999), '');
    answer4.shortTextAnswer = "Seven thirty";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion5()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 4;
    var weight = DecodeNumber('+Nu0nr5Ep8k=', 84, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('+Nu0nr5Ep8k=', 84, -1000, 1000),DecodeDecimal('zy7oH2Q72gs=', 84, -1000, 1000),DecodeDecimal('zy7oH2Q72gs=', 84, -1000, 1000));
    question.answers.length = 0;
    question.num = 5;
    question.isSingleAns = false;
    question.shortTextQuestion = "What time is it? 23:00";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('6emZpCILnu8=', 86, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('J/kIrcNvqlQ=', 84, -9999, 99999), DecodeNumber('zy7oH2Q72gs=', 84, -9999, 99999), '');
    answer1.shortTextAnswer = "Eleven o'clock PM";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('6emZpCILnu8=', 88, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('bq0xKC9wt8I=', 86, -9999, 99999), DecodeNumber('bq0xKC9wt8I=', 86, -9999, 99999), '');
    answer2.shortTextAnswer = "Ten PM";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ghKUxyCOMJE=', 90, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('gDXMFFR0nXc=', 88, -9999, 99999), DecodeNumber('gDXMFFR0nXc=', 88, -9999, 99999), '');
    answer3.shortTextAnswer = "Eleven o'clock AM";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('1tHSfz7mKfc=', 92, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('4kvr1nuT76Q=', 90, -9999, 99999), DecodeNumber('4kvr1nuT76Q=', 90, -9999, 99999), '');
    answer4.shortTextAnswer = "Midnight";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion6()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 5;
    var weight = DecodeNumber('m3nPNTICokw=', 94, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('m3nPNTICokw=', 94, -1000, 1000),DecodeDecimal('0YizNOxY5kw=', 94, -1000, 1000),DecodeDecimal('0YizNOxY5kw=', 94, -1000, 1000));
    question.answers.length = 0;
    question.num = 6;
    question.isSingleAns = false;
    question.shortTextQuestion = "___ do you live?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('m3nPNTICokw=', 96, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('0YizNOxY5kw=', 94, -9999, 99999), DecodeNumber('0YizNOxY5kw=', 94, -9999, 99999), '');
    answer1.shortTextAnswer = "Why";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('XhlOh3vSd34=', 98, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('zd70GPBCm1I=', 96, -9999, 99999), DecodeNumber('zd70GPBCm1I=', 96, -9999, 99999), '');
    answer2.shortTextAnswer = "How";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('6WsWDbswJ+U=', 100, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('+66QX4d6b3w=', 98, -9999, 99999), DecodeNumber('Jpn8/VUEETc=', 98, -9999, 99999), '');
    answer3.shortTextAnswer = "Where";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('6WsWDbswJ+U=', 102, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('618USKcXwCs=', 100, -9999, 99999), DecodeNumber('618USKcXwCs=', 100, -9999, 99999), '');
    answer4.shortTextAnswer = "When";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion7()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 6;
    var weight = DecodeNumber('tEKin6JTYZc=', 104, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('tEKin6JTYZc=', 104, -1000, 1000),DecodeDecimal('qUtyVyjjPDg=', 104, -1000, 1000),DecodeDecimal('qUtyVyjjPDg=', 104, -1000, 1000));
    question.answers.length = 0;
    question.num = 7;
    question.isSingleAns = false;
    question.shortTextQuestion = "___ is she talking to?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('tEKin6JTYZc=', 106, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('qUtyVyjjPDg=', 104, -9999, 99999), DecodeNumber('qUtyVyjjPDg=', 104, -9999, 99999), '');
    answer1.shortTextAnswer = "What";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('6Td9qJTcU0o=', 108, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('Q5LYEAj9LRw=', 106, -9999, 99999), DecodeNumber('lzilj2pCwf4=', 106, -9999, 99999), '');
    answer2.shortTextAnswer = "Who";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('6Td9qJTcU0o=', 110, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('gQRLAuLd1ww=', 108, -9999, 99999), DecodeNumber('gQRLAuLd1ww=', 108, -9999, 99999), '');
    answer3.shortTextAnswer = "Where";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('cbHtoICC/s0=', 112, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('iKcuXxJybBM=', 110, -9999, 99999), DecodeNumber('iKcuXxJybBM=', 110, -9999, 99999), '');
    answer4.shortTextAnswer = "When";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion8()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 7;
    var weight = DecodeNumber('PYpsVRVo5GM=', 114, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('PYpsVRVo5GM=', 114, -1000, 1000),DecodeDecimal('NfgOPYNAEl8=', 114, -1000, 1000),DecodeDecimal('NfgOPYNAEl8=', 114, -1000, 1000));
    question.answers.length = 0;
    question.num = 8;
    question.isSingleAns = false;
    question.shortTextQuestion = "___ is your favorite color?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('PYpsVRVo5GM=', 116, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('NfgOPYNAEl8=', 114, -9999, 99999), DecodeNumber('NfgOPYNAEl8=', 114, -9999, 99999), '');
    answer1.shortTextAnswer = "When";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('HftAPXYDpS8=', 118, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('XD/+HXB0ZQs=', 116, -9999, 99999), DecodeNumber('XD/+HXB0ZQs=', 116, -9999, 99999), '');
    answer2.shortTextAnswer = "Why";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('uWoaU+tE3kA=', 120, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('VYzIqWwgHoU=', 118, -9999, 99999), DecodeNumber('vFiq4xSKLtc=', 118, -9999, 99999), '');
    answer3.shortTextAnswer = "What";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('uWoaU+tE3kA=', 122, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('OvQ+1BYk6Go=', 120, -9999, 99999), DecodeNumber('OvQ+1BYk6Go=', 120, -9999, 99999), '');
    answer4.shortTextAnswer = "Who";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion9()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 8;
    var weight = DecodeNumber('9C8i1UcuQHw=', 124, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('9C8i1UcuQHw=', 124, -1000, 1000),DecodeDecimal('Ca4nm7SbWGQ=', 124, -1000, 1000),DecodeDecimal('Ca4nm7SbWGQ=', 124, -1000, 1000));
    question.answers.length = 0;
    question.num = 9;
    question.isSingleAns = false;
    question.shortTextQuestion = "___ owns this car?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('qgYxNr0LJKQ=', 126, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('wqHNbwtGQhg=', 124, -9999, 99999), DecodeNumber('Ca4nm7SbWGQ=', 124, -9999, 99999), '');
    answer1.shortTextAnswer = "Who";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('qgYxNr0LJKQ=', 128, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('THsG2WwZrog=', 126, -9999, 99999), DecodeNumber('THsG2WwZrog=', 126, -9999, 99999), '');
    answer2.shortTextAnswer = "Where";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('6VwJF5vVMNE=', 130, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('AHRbRhNPh7M=', 128, -9999, 99999), DecodeNumber('AHRbRhNPh7M=', 128, -9999, 99999), '');
    answer3.shortTextAnswer = "Which";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('sbWlGrguahk=', 132, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('ScX2qfEtdbk=', 130, -9999, 99999), DecodeNumber('ScX2qfEtdbk=', 130, -9999, 99999), '');
    answer4.shortTextAnswer = "What";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion10()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 9;
    var weight = DecodeNumber('sJHqAmwW4l4=', 134, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('sJHqAmwW4l4=', 134, -1000, 1000),DecodeDecimal('02vn/ZKIIzw=', 134, -1000, 1000),DecodeDecimal('02vn/ZKIIzw=', 134, -1000, 1000));
    question.answers.length = 0;
    question.num = 10;
    question.isSingleAns = false;
    question.shortTextQuestion = "What is the plural of 'child'?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('sJHqAmwW4l4=', 136, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('02vn/ZKIIzw=', 134, -9999, 99999), DecodeNumber('02vn/ZKIIzw=', 134, -9999, 99999), '');
    answer1.shortTextAnswer = "childs";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('rffaBE+2qKs=', 138, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('8OhIv+hsnLI=', 136, -9999, 99999), DecodeNumber('LRAskPKQ2rc=', 136, -9999, 99999), '');
    answer2.shortTextAnswer = "children";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('rffaBE+2qKs=', 140, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('GUJhP+3CsBE=', 138, -9999, 99999), DecodeNumber('GUJhP+3CsBE=', 138, -9999, 99999), '');
    answer3.shortTextAnswer = "childrens";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('jGQxacOTmRc=', 142, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('4o4W5WzVxrs=', 140, -9999, 99999), DecodeNumber('4o4W5WzVxrs=', 140, -9999, 99999), '');
    answer4.shortTextAnswer = "childes";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion11()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 10;
    var weight = DecodeNumber('d1fByD4Bsr0=', 144, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('d1fByD4Bsr0=', 144, -1000, 1000),DecodeDecimal('fhyldDQqvXI=', 144, -1000, 1000),DecodeDecimal('fhyldDQqvXI=', 144, -1000, 1000));
    question.answers.length = 0;
    question.num = 11;
    question.isSingleAns = false;
    question.shortTextQuestion = "Select the correct plural: 'tomato'";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('d1fByD4Bsr0=', 146, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('fhyldDQqvXI=', 144, -9999, 99999), DecodeNumber('fhyldDQqvXI=', 144, -9999, 99999), '');
    answer1.shortTextAnswer = "tomatos";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('TsUOkZ3TmiM=', 148, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('KTPWZQxycyA=', 146, -9999, 99999), DecodeNumber('KTPWZQxycyA=', 146, -9999, 99999), '');
    answer2.shortTextAnswer = "tomatoies";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('mlaxsLF8idM=', 150, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('0Dqx5CD2f6Y=', 148, -9999, 99999), DecodeNumber('d40UfmHK56Q=', 148, -9999, 99999), '');
    answer3.shortTextAnswer = "tomatoes";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('mlaxsLF8idM=', 152, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('lEEka0ifJjo=', 150, -9999, 99999), DecodeNumber('lEEka0ifJjo=', 150, -9999, 99999), '');
    answer4.shortTextAnswer = "tomatoe";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion12()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 11;
    var weight = DecodeNumber('SrZY+DD6LZE=', 154, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('SrZY+DD6LZE=', 154, -1000, 1000),DecodeDecimal('JYmuOVfB21Q=', 154, -1000, 1000),DecodeDecimal('JYmuOVfB21Q=', 154, -1000, 1000));
    question.answers.length = 0;
    question.num = 12;
    question.isSingleAns = false;
    question.shortTextQuestion = "Which of the following is correct?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('SrZY+DD6LZE=', 156, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('JYmuOVfB21Q=', 154, -9999, 99999), DecodeNumber('JYmuOVfB21Q=', 154, -9999, 99999), '');
    answer1.shortTextAnswer = "sheeps";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Qm2Rb/T2AW8=', 158, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('EYuIGdo1Q8c=', 156, -9999, 99999), DecodeNumber('EYuIGdo1Q8c=', 156, -9999, 99999), '');
    answer2.shortTextAnswer = "sheepen";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('QR1ztmXJQGk=', 160, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('zWwHX9ABv5c=', 158, -9999, 99999), DecodeNumber('7OWIS6Lp5vA=', 158, -9999, 99999), '');
    answer3.shortTextAnswer = "sheep";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('QR1ztmXJQGk=', 162, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('9VeZSPol9WU=', 160, -9999, 99999), DecodeNumber('9VeZSPol9WU=', 160, -9999, 99999), '');
    answer4.shortTextAnswer = "sheepes";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion13()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 12;
    var weight = DecodeNumber('Zu8LBobH4kc=', 164, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Zu8LBobH4kc=', 164, -1000, 1000),DecodeDecimal('zxuNK8Z5xFY=', 164, -1000, 1000),DecodeDecimal('zxuNK8Z5xFY=', 164, -1000, 1000));
    question.answers.length = 0;
    question.num = 13;
    question.isSingleAns = false;
    question.shortTextQuestion = "Choose the plural form of 'mouse'";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Zu8LBobH4kc=', 166, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('zxuNK8Z5xFY=', 164, -9999, 99999), DecodeNumber('zxuNK8Z5xFY=', 164, -9999, 99999), '');
    answer1.shortTextAnswer = "mouses";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('DKJ8D61CV0k=', 168, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('/59MF1o1VHE=', 166, -9999, 99999), DecodeNumber('0ruBw+PWHbE=', 166, -9999, 99999), '');
    answer2.shortTextAnswer = "mice";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('DKJ8D61CV0k=', 170, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('cUfx4u/YGss=', 168, -9999, 99999), DecodeNumber('cUfx4u/YGss=', 168, -9999, 99999), '');
    answer3.shortTextAnswer = "mouse";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('0rdTEIJ0KCo=', 172, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('kO4WqFP5uxI=', 170, -9999, 99999), DecodeNumber('kO4WqFP5uxI=', 170, -9999, 99999), '');
    answer4.shortTextAnswer = "mices";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion14()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 13;
    var weight = DecodeNumber('sFDqH4YSDK0=', 174, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('sFDqH4YSDK0=', 174, -1000, 1000),DecodeDecimal('xheDP899Iu4=', 174, -1000, 1000),DecodeDecimal('xheDP899Iu4=', 174, -1000, 1000));
    question.answers.length = 0;
    question.num = 14;
    question.isSingleAns = false;
    question.shortTextQuestion = "Is this ___ bag?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Mv1yp7sIBhI=', 176, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('wcL1zFxDwEI=', 174, -9999, 99999), DecodeNumber('xheDP899Iu4=', 174, -9999, 99999), '');
    answer1.shortTextAnswer = "Ann's";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Mv1yp7sIBhI=', 178, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('LHrekh/ZMTc=', 176, -9999, 99999), DecodeNumber('LHrekh/ZMTc=', 176, -9999, 99999), '');
    answer2.shortTextAnswer = "Anns";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('9EafbkRB0vA=', 180, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('v1ysugaJkUo=', 178, -9999, 99999), DecodeNumber('v1ysugaJkUo=', 178, -9999, 99999), '');
    answer3.shortTextAnswer = "Ann";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('dIsXdR7AjOY=', 182, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('SdA5+VlymRE=', 180, -9999, 99999), DecodeNumber('SdA5+VlymRE=', 180, -9999, 99999), '');
    answer4.shortTextAnswer = "Ann'";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion15()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 14;
    var weight = DecodeNumber('13E2crVMCjk=', 184, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('13E2crVMCjk=', 184, -1000, 1000),DecodeDecimal('J/kIrcNvqlQ=', 184, -1000, 1000),DecodeDecimal('J/kIrcNvqlQ=', 184, -1000, 1000));
    question.answers.length = 0;
    question.num = 15;
    question.isSingleAns = false;
    question.shortTextQuestion = "These are the ___ books.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('eu3W7Ndauqk=', 186, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('FdDLJdrxHtE=', 184, -9999, 99999), DecodeNumber('J/kIrcNvqlQ=', 184, -9999, 99999), '');
    answer1.shortTextAnswer = "children's";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('eu3W7Ndauqk=', 188, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('EZO0PiMwJx4=', 186, -9999, 99999), DecodeNumber('EZO0PiMwJx4=', 186, -9999, 99999), '');
    answer2.shortTextAnswer = "childrens'";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('TKBfQ11Ewf4=', 190, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('Q2bW2IuhFog=', 188, -9999, 99999), DecodeNumber('Q2bW2IuhFog=', 188, -9999, 99999), '');
    answer3.shortTextAnswer = "childrens";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('M0qhSy/fIJw=', 192, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('dqMmTZxVWlY=', 190, -9999, 99999), DecodeNumber('dqMmTZxVWlY=', 190, -9999, 99999), '');
    answer4.shortTextAnswer = "child";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion16()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 15;
    var weight = DecodeNumber('yD3Dnstc1M8=', 194, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('yD3Dnstc1M8=', 194, -1000, 1000),DecodeDecimal('uqQZdNeIK+o=', 194, -1000, 1000),DecodeDecimal('uqQZdNeIK+o=', 194, -1000, 1000));
    question.answers.length = 0;
    question.num = 16;
    question.isSingleAns = false;
    question.shortTextQuestion = "I always have lunch ___ noon.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('2B4InosfcpU=', 196, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('Gje8UYhwPo8=', 194, -9999, 99999), DecodeNumber('uqQZdNeIK+o=', 194, -9999, 99999), '');
    answer1.shortTextAnswer = "at";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('2B4InosfcpU=', 198, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('EtrWzjF80Qg=', 196, -9999, 99999), DecodeNumber('EtrWzjF80Qg=', 196, -9999, 99999), '');
    answer2.shortTextAnswer = "on";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('BWGumQNtjAE=', 200, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('+66QX4d6b3w=', 198, -9999, 99999), DecodeNumber('+66QX4d6b3w=', 198, -9999, 99999), '');
    answer3.shortTextAnswer = "in";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('hyNa3si1Xxk=', 202, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('J48jr4DfrHA=', 200, -9999, 99999), DecodeNumber('J48jr4DfrHA=', 200, -9999, 99999), '');
    answer4.shortTextAnswer = "by";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion17()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 16;
    var weight = DecodeNumber('KRfY7N0Z9iI=', 204, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('KRfY7N0Z9iI=', 204, -1000, 1000),DecodeDecimal('Dzd6u5/Or8k=', 204, -1000, 1000),DecodeDecimal('Dzd6u5/Or8k=', 204, -1000, 1000));
    question.answers.length = 0;
    question.num = 17;
    question.isSingleAns = false;
    question.shortTextQuestion = "The book is ___ the bag.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('V4NBjzTeerI=', 206, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('fUhWaUJ1l2U=', 204, -9999, 99999), DecodeNumber('Dzd6u5/Or8k=', 204, -9999, 99999), '');
    answer1.shortTextAnswer = "in";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('V4NBjzTeerI=', 208, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('Q5LYEAj9LRw=', 206, -9999, 99999), DecodeNumber('Q5LYEAj9LRw=', 206, -9999, 99999), '');
    answer2.shortTextAnswer = "under";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('PWllDDb3UTM=', 210, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('62DYKYmj3GA=', 208, -9999, 99999), DecodeNumber('62DYKYmj3GA=', 208, -9999, 99999), '');
    answer3.shortTextAnswer = "on";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('F3ILBeH9eR0=', 212, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('+jQSMw0GL4A=', 210, -9999, 99999), DecodeNumber('+jQSMw0GL4A=', 210, -9999, 99999), '');
    answer4.shortTextAnswer = "over";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion18()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 17;
    var weight = DecodeNumber('Vafdn1V48sA=', 214, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Vafdn1V48sA=', 214, -1000, 1000),DecodeDecimal('Yma3jlsZv+4=', 214, -1000, 1000),DecodeDecimal('Yma3jlsZv+4=', 214, -1000, 1000));
    question.answers.length = 0;
    question.num = 18;
    question.isSingleAns = false;
    question.shortTextQuestion = "She ___ to school every day.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Vafdn1V48sA=', 216, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('Yma3jlsZv+4=', 214, -9999, 99999), DecodeNumber('Yma3jlsZv+4=', 214, -9999, 99999), '');
    answer1.shortTextAnswer = "go";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('TwQ4sVPD058=', 218, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('e/pkn7RGJqE=', 216, -9999, 99999), DecodeNumber('e/pkn7RGJqE=', 216, -9999, 99999), '');
    answer2.shortTextAnswer = "gone";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('1stEdLVLMR8=', 220, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('S/4aDIosEhg=', 218, -9999, 99999), DecodeNumber('VYzIqWwgHoU=', 218, -9999, 99999), '');
    answer3.shortTextAnswer = "goes";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('1stEdLVLMR8=', 222, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('iPRC+3S7OpQ=', 220, -9999, 99999), DecodeNumber('iPRC+3S7OpQ=', 220, -9999, 99999), '');
    answer4.shortTextAnswer = "going";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion19()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 18;
    var weight = DecodeNumber('VaIOCti1G48=', 224, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('VaIOCti1G48=', 224, -1000, 1000),DecodeDecimal('wqHNbwtGQhg=', 224, -1000, 1000),DecodeDecimal('wqHNbwtGQhg=', 224, -1000, 1000));
    question.answers.length = 0;
    question.num = 19;
    question.isSingleAns = false;
    question.shortTextQuestion = "They ___ in Rome.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('VaIOCti1G48=', 226, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('wqHNbwtGQhg=', 224, -9999, 99999), DecodeNumber('wqHNbwtGQhg=', 224, -9999, 99999), '');
    answer1.shortTextAnswer = "lives";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('dZQJ3BZHTpo=', 228, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('wQ97baSfFeY=', 226, -9999, 99999), DecodeNumber('wQ97baSfFeY=', 226, -9999, 99999), '');
    answer2.shortTextAnswer = "living";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('KCk6P1ujaFg=', 230, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('XZOfTrmOTSI=', 228, -9999, 99999), DecodeNumber('T3DKTMOde7k=', 228, -9999, 99999), '');
    answer3.shortTextAnswer = "live";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('KCk6P1ujaFg=', 232, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('CCB9gX8rv5Q=', 230, -9999, 99999), DecodeNumber('CCB9gX8rv5Q=', 230, -9999, 99999), '');
    answer4.shortTextAnswer = "are living";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion20()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 19;
    var weight = DecodeNumber('Wj2qGCi0p5g=', 234, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Wj2qGCi0p5g=', 234, -1000, 1000),DecodeDecimal('IpZdqV0yUlQ=', 234, -1000, 1000),DecodeDecimal('IpZdqV0yUlQ=', 234, -1000, 1000));
    question.answers.length = 0;
    question.num = 20;
    question.isSingleAns = false;
    question.shortTextQuestion = "___ he work on weekends?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Wj2qGCi0p5g=', 236, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('IpZdqV0yUlQ=', 234, -9999, 99999), DecodeNumber('IpZdqV0yUlQ=', 234, -9999, 99999), '');
    answer1.shortTextAnswer = "Do";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('e19krxwEbpY=', 238, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('vJd7vZjkZZM=', 236, -9999, 99999), DecodeNumber('8OhIv+hsnLI=', 236, -9999, 99999), '');
    answer2.shortTextAnswer = "Does";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('e19krxwEbpY=', 240, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('PK0hpAJvKp8=', 238, -9999, 99999), DecodeNumber('PK0hpAJvKp8=', 238, -9999, 99999), '');
    answer3.shortTextAnswer = "Did";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('kknUYwN4QxY=', 242, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('KwZvGFe+1XE=', 240, -9999, 99999), DecodeNumber('KwZvGFe+1XE=', 240, -9999, 99999), '');
    answer4.shortTextAnswer = "Has";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion21()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 20;
    var weight = DecodeNumber('l1fOXwIwCAU=', 244, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('l1fOXwIwCAU=', 244, -1000, 1000),DecodeDecimal('SuPtA6sAkPA=', 244, -1000, 1000),DecodeDecimal('SuPtA6sAkPA=', 244, -1000, 1000));
    question.answers.length = 0;
    question.num = 21;
    question.isSingleAns = false;
    question.shortTextQuestion = "She is ___ late for school.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('l1fOXwIwCAU=', 246, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('SuPtA6sAkPA=', 244, -9999, 99999), DecodeNumber('SuPtA6sAkPA=', 244, -9999, 99999), '');
    answer1.shortTextAnswer = "often";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('BCP+0LSxKSQ=', 248, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('pYCpoaMGAMw=', 246, -9999, 99999), DecodeNumber('pYCpoaMGAMw=', 246, -9999, 99999), '');
    answer2.shortTextAnswer = "never";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('p4985gSGJkk=', 250, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('0Dqx5CD2f6Y=', 248, -9999, 99999), DecodeNumber('0Dqx5CD2f6Y=', 248, -9999, 99999), '');
    answer3.shortTextAnswer = "rarely";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('BIJ1JPwm8zQ=', 252, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('40Rl25BPVPU=', 250, -9999, 99999), DecodeNumber('1wQ+J1Z70vA=', 250, -9999, 99999), '');
    answer4.shortTextAnswer = "always";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion22()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 21;
    var weight = DecodeNumber('9ddJq70HsYQ=', 254, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('9ddJq70HsYQ=', 254, -1000, 1000),DecodeDecimal('hFD/XjzuQGY=', 254, -1000, 1000),DecodeDecimal('hFD/XjzuQGY=', 254, -1000, 1000));
    question.answers.length = 0;
    question.num = 22;
    question.isSingleAns = false;
    question.shortTextQuestion = "They ___ eat out on weekends. (50%)";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('9ddJq70HsYQ=', 256, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('hFD/XjzuQGY=', 254, -9999, 99999), DecodeNumber('hFD/XjzuQGY=', 254, -9999, 99999), '');
    answer1.shortTextAnswer = "always";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('/03QiJEDO+I=', 258, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('Uo5sIiic41w=', 256, -9999, 99999), DecodeNumber('Uo5sIiic41w=', 256, -9999, 99999), '');
    answer2.shortTextAnswer = "usually";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('GB0wUmavSbA=', 260, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('csPdbJPiABw=', 258, -9999, 99999), DecodeNumber('zWwHX9ABv5c=', 258, -9999, 99999), '');
    answer3.shortTextAnswer = "sometimes";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('GB0wUmavSbA=', 262, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('OzOR5UevbsY=', 260, -9999, 99999), DecodeNumber('OzOR5UevbsY=', 260, -9999, 99999), '');
    answer4.shortTextAnswer = "never";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion23()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 22;
    var weight = DecodeNumber('iivTxfQ9ZrI=', 264, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('iivTxfQ9ZrI=', 264, -1000, 1000),DecodeDecimal('1Y7sFgDAYBI=', 264, -1000, 1000),DecodeDecimal('1Y7sFgDAYBI=', 264, -1000, 1000));
    question.answers.length = 0;
    question.num = 23;
    question.isSingleAns = false;
    question.shortTextQuestion = "She ___ reads books. (20%)";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('iivTxfQ9ZrI=', 266, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('1Y7sFgDAYBI=', 264, -9999, 99999), DecodeNumber('1Y7sFgDAYBI=', 264, -9999, 99999), '');
    answer1.shortTextAnswer = "always";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('6IaMtUstsCM=', 268, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('/59MF1o1VHE=', 266, -9999, 99999), DecodeNumber('/59MF1o1VHE=', 266, -9999, 99999), '');
    answer2.shortTextAnswer = "sometimes";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('AgMSZpbZm2c=', 270, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('qz+VStN66mo=', 268, -9999, 99999), DecodeNumber('qz+VStN66mo=', 268, -9999, 99999), '');
    answer3.shortTextAnswer = "often";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('JkbQgAG9eAM=', 272, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('StNdUQ7iEKc=', 270, -9999, 99999), DecodeNumber('zGqDo4U5fHw=', 270, -9999, 99999), '');
    answer4.shortTextAnswer = "rarely";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion24()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 23;
    var weight = DecodeNumber('iyx/2TFXKIM=', 274, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('iyx/2TFXKIM=', 274, -1000, 1000),DecodeDecimal('wcL1zFxDwEI=', 274, -1000, 1000),DecodeDecimal('wcL1zFxDwEI=', 274, -1000, 1000));
    question.answers.length = 0;
    question.num = 24;
    question.isSingleAns = false;
    question.shortTextQuestion = "She ___ reading a book now.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('K0lvB9DAAME=', 276, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('q2otvvt3K+I=', 274, -9999, 99999), DecodeNumber('wcL1zFxDwEI=', 274, -9999, 99999), '');
    answer1.shortTextAnswer = "is";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('K0lvB9DAAME=', 278, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('i2QlilE5yi0=', 276, -9999, 99999), DecodeNumber('i2QlilE5yi0=', 276, -9999, 99999), '');
    answer2.shortTextAnswer = "am";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('7MORuZ7efWk=', 280, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('x+iyPFyAZe8=', 278, -9999, 99999), DecodeNumber('x+iyPFyAZe8=', 278, -9999, 99999), '');
    answer3.shortTextAnswer = "are";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('GA4vdBzk3ic=', 282, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('OjxxJ7UXh7U=', 280, -9999, 99999), DecodeNumber('OjxxJ7UXh7U=', 280, -9999, 99999), '');
    answer4.shortTextAnswer = "be";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion25()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 24;
    var weight = DecodeNumber('9HDY2NLJfdM=', 284, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('9HDY2NLJfdM=', 284, -1000, 1000),DecodeDecimal('FdDLJdrxHtE=', 284, -1000, 1000),DecodeDecimal('FdDLJdrxHtE=', 284, -1000, 1000));
    question.answers.length = 0;
    question.num = 25;
    question.isSingleAns = false;
    question.shortTextQuestion = "He ___ not listening to music.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('9HDY2NLJfdM=', 286, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('FdDLJdrxHtE=', 284, -9999, 99999), DecodeNumber('FdDLJdrxHtE=', 284, -9999, 99999), '');
    answer1.shortTextAnswer = "am";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('HzWNdk8/71g=', 288, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('34U3fXVjy8k=', 286, -9999, 99999), DecodeNumber('iD7CQJI7jkU=', 286, -9999, 99999), '');
    answer2.shortTextAnswer = "is";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('HzWNdk8/71g=', 290, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('dttZvcPQjr8=', 288, -9999, 99999), DecodeNumber('dttZvcPQjr8=', 288, -9999, 99999), '');
    answer3.shortTextAnswer = "are";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('rtcThMyPZT4=', 292, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('KlSTygawO0A=', 290, -9999, 99999), DecodeNumber('KlSTygawO0A=', 290, -9999, 99999), '');
    answer4.shortTextAnswer = "be";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion26()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 25;
    var weight = DecodeNumber('BxVUR0Olrg0=', 294, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('BxVUR0Olrg0=', 294, -1000, 1000),DecodeDecimal('Gje8UYhwPo8=', 294, -1000, 1000),DecodeDecimal('Gje8UYhwPo8=', 294, -1000, 1000));
    question.answers.length = 0;
    question.num = 26;
    question.isSingleAns = false;
    question.shortTextQuestion = "We ___ studying for the test.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('BxVUR0Olrg0=', 296, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('Gje8UYhwPo8=', 294, -9999, 99999), DecodeNumber('Gje8UYhwPo8=', 294, -9999, 99999), '');
    answer1.shortTextAnswer = "am";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('3YYMgKZTepQ=', 298, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('MJBj2ZuvVWI=', 296, -9999, 99999), DecodeNumber('cRHcUm1KZpY=', 296, -9999, 99999), '');
    answer2.shortTextAnswer = "are";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('3YYMgKZTepQ=', 300, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('99V0gTLLgv8=', 298, -9999, 99999), DecodeNumber('99V0gTLLgv8=', 298, -9999, 99999), '');
    answer3.shortTextAnswer = "is";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Hu/CePmKDVo=', 302, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('lArzxaFwLlY=', 300, -9999, 99999), DecodeNumber('lArzxaFwLlY=', 300, -9999, 99999), '');
    answer4.shortTextAnswer = "be";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion27()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 26;
    var weight = DecodeNumber('C4i6Xrf6kWw=', 304, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('C4i6Xrf6kWw=', 304, -1000, 1000),DecodeDecimal('fUhWaUJ1l2U=', 304, -1000, 1000),DecodeDecimal('fUhWaUJ1l2U=', 304, -1000, 1000));
    question.answers.length = 0;
    question.num = 27;
    question.isSingleAns = false;
    question.shortTextQuestion = "___ she coming with us?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('bJak9UHKkeQ=', 306, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('814+h3Z9QWk=', 304, -9999, 99999), DecodeNumber('fUhWaUJ1l2U=', 304, -9999, 99999), '');
    answer1.shortTextAnswer = "Is";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('bJak9UHKkeQ=', 308, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('LZ+5bqkwVlk=', 306, -9999, 99999), DecodeNumber('LZ+5bqkwVlk=', 306, -9999, 99999), '');
    answer2.shortTextAnswer = "Am";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('dIOU4MiBG7A=', 310, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('WuJEA9krZYk=', 308, -9999, 99999), DecodeNumber('WuJEA9krZYk=', 308, -9999, 99999), '');
    answer3.shortTextAnswer = "Are";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('NnbZzyVXi/k=', 312, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('xZ5UBug/l+Y=', 310, -9999, 99999), DecodeNumber('xZ5UBug/l+Y=', 310, -9999, 99999), '');
    answer4.shortTextAnswer = "Does";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion28()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 27;
    var weight = DecodeNumber('gwgYkKW9Q8k=', 314, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('gwgYkKW9Q8k=', 314, -1000, 1000),DecodeDecimal('TR/EBZPV2Xo=', 314, -1000, 1000),DecodeDecimal('TR/EBZPV2Xo=', 314, -1000, 1000));
    question.answers.length = 0;
    question.num = 28;
    question.isSingleAns = false;
    question.shortTextQuestion = "She ___ her homework now.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('gwgYkKW9Q8k=', 316, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('TR/EBZPV2Xo=', 314, -9999, 99999), DecodeNumber('TR/EBZPV2Xo=', 314, -9999, 99999), '');
    answer1.shortTextAnswer = "does";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('TdYA9WFCkyM=', 318, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('fFEU/Cuw3Nk=', 316, -9999, 99999), DecodeNumber('fFEU/Cuw3Nk=', 316, -9999, 99999), '');
    answer2.shortTextAnswer = "do";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('U0icJbG4Wak=', 320, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('rs/GKk2I6XY=', 318, -9999, 99999), DecodeNumber('S/4aDIosEhg=', 318, -9999, 99999), '');
    answer3.shortTextAnswer = "is doing";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('U0icJbG4Wak=', 322, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('+coQSB/fPy0=', 320, -9999, 99999), DecodeNumber('+coQSB/fPy0=', 320, -9999, 99999), '');
    answer4.shortTextAnswer = "doing";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion29()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 28;
    var weight = DecodeNumber('AcvlIyCkhhw=', 324, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('AcvlIyCkhhw=', 324, -1000, 1000),DecodeDecimal('Dg58rfuIsIo=', 324, -1000, 1000),DecodeDecimal('Dg58rfuIsIo=', 324, -1000, 1000));
    question.answers.length = 0;
    question.num = 29;
    question.isSingleAns = false;
    question.shortTextQuestion = "What ___ she doing?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('AcvlIyCkhhw=', 326, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('Dg58rfuIsIo=', 324, -9999, 99999), DecodeNumber('Dg58rfuIsIo=', 324, -9999, 99999), '');
    answer1.shortTextAnswer = "does";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Jmg5UOffbRE=', 328, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('Jg1qZPzYLmU=', 326, -9999, 99999), DecodeNumber('Y6lJM8pV3qw=', 326, -9999, 99999), '');
    answer2.shortTextAnswer = "is";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Jmg5UOffbRE=', 330, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('XZOfTrmOTSI=', 328, -9999, 99999), DecodeNumber('XZOfTrmOTSI=', 328, -9999, 99999), '');
    answer3.shortTextAnswer = "is being";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('5YjSQ3/04Zw=', 332, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('Ft9Y7MRRo48=', 330, -9999, 99999), DecodeNumber('Ft9Y7MRRo48=', 330, -9999, 99999), '');
    answer4.shortTextAnswer = "are";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion30()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 29;
    var weight = DecodeNumber('X1ljjVDPi4k=', 1170, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('X1ljjVDPi4k=', 1170, -1000, 1000),DecodeDecimal('8sNSoZv2ipk=', 1170, -1000, 1000),DecodeDecimal('8sNSoZv2ipk=', 1170, -1000, 1000));
    question.answers.length = 0;
    question.num = 30;
    question.isSingleAns = false;
    question.shortTextQuestion = "She ___ like chocolate.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('eYGiqAh5ldk=', 1172, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('N46Ogs7ys5A=', 1170, -9999, 99999), DecodeNumber('8sNSoZv2ipk=', 1170, -9999, 99999), '');
    answer1.shortTextAnswer = "likes";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('eYGiqAh5ldk=', 1174, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('UEjD+0vUbHY=', 1172, -9999, 99999), DecodeNumber('UEjD+0vUbHY=', 1172, -9999, 99999), '');
    answer2.shortTextAnswer = "like";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('2dF+7TZgBhQ=', 1176, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('wyDWjLaUMPk=', 1174, -9999, 99999), DecodeNumber('wyDWjLaUMPk=', 1174, -9999, 99999), '');
    answer3.shortTextAnswer = "is liking";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('2hILy7YI3ig=', 1178, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('JVc792izSRU=', 1176, -9999, 99999), DecodeNumber('JVc792izSRU=', 1176, -9999, 99999), '');
    answer4.shortTextAnswer = "liked";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion31()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 30;
    var weight = DecodeNumber('Q1DvTpmhUP0=', 1180, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Q1DvTpmhUP0=', 1180, -1000, 1000),DecodeDecimal('ec+h/u0uMWA=', 1180, -1000, 1000),DecodeDecimal('ec+h/u0uMWA=', 1180, -1000, 1000));
    question.answers.length = 0;
    question.num = 31;
    question.isSingleAns = false;
    question.shortTextQuestion = "You ___ seem tired.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('9KIfB4m0pcI=', 1182, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('62/0G3KHMKQ=', 1180, -9999, 99999), DecodeNumber('ec+h/u0uMWA=', 1180, -9999, 99999), '');
    answer1.shortTextAnswer = "seem";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('9KIfB4m0pcI=', 1184, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('q6nr1gWijj0=', 1182, -9999, 99999), DecodeNumber('q6nr1gWijj0=', 1182, -9999, 99999), '');
    answer2.shortTextAnswer = "seems";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Al2iY/hIr0U=', 1186, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('EdFV7s6wcwM=', 1184, -9999, 99999), DecodeNumber('EdFV7s6wcwM=', 1184, -9999, 99999), '');
    answer3.shortTextAnswer = "are seeming";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('QBPav7ZlLJ0=', 1188, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('pK2QEe7MRj8=', 1186, -9999, 99999), DecodeNumber('pK2QEe7MRj8=', 1186, -9999, 99999), '');
    answer4.shortTextAnswer = "seeming";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion32()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 31;
    var weight = DecodeNumber('i3uBoPMCrws=', 1190, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('i3uBoPMCrws=', 1190, -1000, 1000),DecodeDecimal('azPxewrLjKk=', 1190, -1000, 1000),DecodeDecimal('azPxewrLjKk=', 1190, -1000, 1000));
    question.answers.length = 0;
    question.num = 32;
    question.isSingleAns = false;
    question.shortTextQuestion = "They ___ happy to see us.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('a6kWifjQO6o=', 1192, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('Q/ukqRZ35Sg=', 1190, -9999, 99999), DecodeNumber('azPxewrLjKk=', 1190, -9999, 99999), '');
    answer1.shortTextAnswer = "were";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('a6kWifjQO6o=', 1194, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('UmNVPwBE8Ug=', 1192, -9999, 99999), DecodeNumber('UmNVPwBE8Ug=', 1192, -9999, 99999), '');
    answer2.shortTextAnswer = "are";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Qw0Qjw2sPAQ=', 1196, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('rNPS4UtdSmo=', 1194, -9999, 99999), DecodeNumber('rNPS4UtdSmo=', 1194, -9999, 99999), '');
    answer3.shortTextAnswer = "was";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('F6mD50ROQHo=', 1198, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('QxflOHTOLX4=', 1196, -9999, 99999), DecodeNumber('QxflOHTOLX4=', 1196, -9999, 99999), '');
    answer4.shortTextAnswer = "is";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion33()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 32;
    var weight = DecodeNumber('KKsZe3Tt4CE=', 1200, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('KKsZe3Tt4CE=', 1200, -1000, 1000),DecodeDecimal('EJK7zWRtLX0=', 1200, -1000, 1000),DecodeDecimal('EJK7zWRtLX0=', 1200, -1000, 1000));
    question.answers.length = 0;
    question.num = 33;
    question.isSingleAns = false;
    question.shortTextQuestion = "She ___ in London last summer.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('KKsZe3Tt4CE=', 1202, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('EJK7zWRtLX0=', 1200, -9999, 99999), DecodeNumber('EJK7zWRtLX0=', 1200, -9999, 99999), '');
    answer1.shortTextAnswer = "is";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('YYS/fNuklCs=', 1204, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('4C0ocTRJSQQ=', 1202, -9999, 99999), DecodeNumber('o9gCZf0OqAM=', 1202, -9999, 99999), '');
    answer2.shortTextAnswer = "was";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('YYS/fNuklCs=', 1206, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('+L3LXpw5kdQ=', 1204, -9999, 99999), DecodeNumber('+L3LXpw5kdQ=', 1204, -9999, 99999), '');
    answer3.shortTextAnswer = "were";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('WL6IgUUfe+U=', 1208, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('dbYYgxPnxsk=', 1206, -9999, 99999), DecodeNumber('dbYYgxPnxsk=', 1206, -9999, 99999), '');
    answer4.shortTextAnswer = "be";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion34()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 33;
    var weight = DecodeNumber('Go7qAIoYGp8=', 1210, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Go7qAIoYGp8=', 1210, -1000, 1000),DecodeDecimal('K+I9yHj/o7A=', 1210, -1000, 1000),DecodeDecimal('K+I9yHj/o7A=', 1210, -1000, 1000));
    question.answers.length = 0;
    question.num = 34;
    question.isSingleAns = false;
    question.shortTextQuestion = "We ___ tired after the trip.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Go7qAIoYGp8=', 1212, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('K+I9yHj/o7A=', 1210, -9999, 99999), DecodeNumber('K+I9yHj/o7A=', 1210, -9999, 99999), '');
    answer1.shortTextAnswer = "is";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('3Z3DmQCrfSo=', 1214, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('IxHXGF9wv+4=', 1212, -9999, 99999), DecodeNumber('n5XyaVc0Rtc=', 1212, -9999, 99999), '');
    answer2.shortTextAnswer = "were";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('3Z3DmQCrfSo=', 1216, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('tV0kJV9ZXzk=', 1214, -9999, 99999), DecodeNumber('tV0kJV9ZXzk=', 1214, -9999, 99999), '');
    answer3.shortTextAnswer = "are";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('h55pIt8oPlQ=', 1218, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('wdodDR83JlQ=', 1216, -9999, 99999), DecodeNumber('wdodDR83JlQ=', 1216, -9999, 99999), '');
    answer4.shortTextAnswer = "be";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion35()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 34;
    var weight = DecodeNumber('vcjbzDSB0Pk=', 1220, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('vcjbzDSB0Pk=', 1220, -1000, 1000),DecodeDecimal('HE81SCkn5X0=', 1220, -1000, 1000),DecodeDecimal('HE81SCkn5X0=', 1220, -1000, 1000));
    question.answers.length = 0;
    question.num = 35;
    question.isSingleAns = false;
    question.shortTextQuestion = "He ___ my teacher in 2020.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('uubbkEtOsTo=', 1222, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('vnMoLR2FdS0=', 1220, -9999, 99999), DecodeNumber('HE81SCkn5X0=', 1220, -9999, 99999), '');
    answer1.shortTextAnswer = "was";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('uubbkEtOsTo=', 1224, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('Ifd97SOxMDs=', 1222, -9999, 99999), DecodeNumber('Ifd97SOxMDs=', 1222, -9999, 99999), '');
    answer2.shortTextAnswer = "is";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('CykOz8o/klc=', 1226, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('vtChLIA6mBk=', 1224, -9999, 99999), DecodeNumber('vtChLIA6mBk=', 1224, -9999, 99999), '');
    answer3.shortTextAnswer = "were";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('UskHSGV1fOg=', 1228, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('1hlIoFGVxzw=', 1226, -9999, 99999), DecodeNumber('1hlIoFGVxzw=', 1226, -9999, 99999), '');
    answer4.shortTextAnswer = "are";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion36()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 35;
    var weight = DecodeNumber('VDZAr8q8vOo=', 1230, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('VDZAr8q8vOo=', 1230, -1000, 1000),DecodeDecimal('AgcOV5W92yg=', 1230, -1000, 1000),DecodeDecimal('AgcOV5W92yg=', 1230, -1000, 1000));
    question.answers.length = 0;
    question.num = 36;
    question.isSingleAns = false;
    question.shortTextQuestion = "Where ___ she last weekend?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('6jpbRA8iliQ=', 1232, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('BUq6HD2iDU4=', 1230, -9999, 99999), DecodeNumber('AgcOV5W92yg=', 1230, -9999, 99999), '');
    answer1.shortTextAnswer = "was";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('6jpbRA8iliQ=', 1234, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('d0WoYarzgfw=', 1232, -9999, 99999), DecodeNumber('d0WoYarzgfw=', 1232, -9999, 99999), '');
    answer2.shortTextAnswer = "is";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('gojNUQmWRcw=', 1236, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('CE8IzNN9j6c=', 1234, -9999, 99999), DecodeNumber('CE8IzNN9j6c=', 1234, -9999, 99999), '');
    answer3.shortTextAnswer = "were";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('luffJUwvn4M=', 1238, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('DRw2/Dsm5j0=', 1236, -9999, 99999), DecodeNumber('DRw2/Dsm5j0=', 1236, -9999, 99999), '');
    answer4.shortTextAnswer = "be";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion37()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 36;
    var weight = DecodeNumber('hZquYcFglSk=', 1240, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('hZquYcFglSk=', 1240, -1000, 1000),DecodeDecimal('GHU0iXat0+M=', 1240, -1000, 1000),DecodeDecimal('GHU0iXat0+M=', 1240, -1000, 1000));
    question.answers.length = 0;
    question.num = 37;
    question.isSingleAns = false;
    question.shortTextQuestion = "They ___ the cake in the morning.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('p+nQpCB43EE=', 1242, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('ZpBZHkvd8M4=', 1240, -9999, 99999), DecodeNumber('GHU0iXat0+M=', 1240, -9999, 99999), '');
    answer1.shortTextAnswer = "baked";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('p+nQpCB43EE=', 1244, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('KO+ifuDApVg=', 1242, -9999, 99999), DecodeNumber('KO+ifuDApVg=', 1242, -9999, 99999), '');
    answer2.shortTextAnswer = "baking";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('qAIeZsClKAI=', 1246, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('ztYQ5+JWgzg=', 1244, -9999, 99999), DecodeNumber('ztYQ5+JWgzg=', 1244, -9999, 99999), '');
    answer3.shortTextAnswer = "bake";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('k+Jdb0aqxso=', 1248, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('+n70XI3hlIk=', 1246, -9999, 99999), DecodeNumber('+n70XI3hlIk=', 1246, -9999, 99999), '');
    answer4.shortTextAnswer = "bakes";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion38()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 37;
    var weight = DecodeNumber('mmK8kWki7sY=', 1250, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('mmK8kWki7sY=', 1250, -1000, 1000),DecodeDecimal('YerNW0lWf+Q=', 1250, -1000, 1000),DecodeDecimal('YerNW0lWf+Q=', 1250, -1000, 1000));
    question.answers.length = 0;
    question.num = 38;
    question.isSingleAns = false;
    question.shortTextQuestion = "I ___ to the cinema last night.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('k9EwqfNunKU=', 1252, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('euxJoFJUuAg=', 1250, -9999, 99999), DecodeNumber('YerNW0lWf+Q=', 1250, -9999, 99999), '');
    answer1.shortTextAnswer = "went";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('k9EwqfNunKU=', 1254, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('jZzmRyoTqcs=', 1252, -9999, 99999), DecodeNumber('jZzmRyoTqcs=', 1252, -9999, 99999), '');
    answer2.shortTextAnswer = "goes";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('4xTVsrlHA/U=', 1256, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('vyW9yOtn8q0=', 1254, -9999, 99999), DecodeNumber('vyW9yOtn8q0=', 1254, -9999, 99999), '');
    answer3.shortTextAnswer = "go";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('BeyepczFTt8=', 1258, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('HgiYBExznLs=', 1256, -9999, 99999), DecodeNumber('HgiYBExznLs=', 1256, -9999, 99999), '');
    answer4.shortTextAnswer = "going";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion39()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 38;
    var weight = DecodeNumber('TdHOCYQsF1g=', 1260, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('TdHOCYQsF1g=', 1260, -1000, 1000),DecodeDecimal('Voa27eHv3QQ=', 1260, -1000, 1000),DecodeDecimal('Voa27eHv3QQ=', 1260, -1000, 1000));
    question.answers.length = 0;
    question.num = 39;
    question.isSingleAns = false;
    question.shortTextQuestion = "We ___ the movie together.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('CJ3ZE+FvXNw=', 1262, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('MjJUj2uLqZY=', 1260, -9999, 99999), DecodeNumber('Voa27eHv3QQ=', 1260, -9999, 99999), '');
    answer1.shortTextAnswer = "saw";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('CJ3ZE+FvXNw=', 1264, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('F1cVup6CA+4=', 1262, -9999, 99999), DecodeNumber('F1cVup6CA+4=', 1262, -9999, 99999), '');
    answer2.shortTextAnswer = "seen";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('XmbAfWr55E8=', 1266, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('ajiTHN/0Sac=', 1264, -9999, 99999), DecodeNumber('ajiTHN/0Sac=', 1264, -9999, 99999), '');
    answer3.shortTextAnswer = "see";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('D2AkfB5Vyws=', 1268, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('Fr/zQfCTUyg=', 1266, -9999, 99999), DecodeNumber('Fr/zQfCTUyg=', 1266, -9999, 99999), '');
    answer4.shortTextAnswer = "seeing";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion40()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 39;
    var weight = DecodeNumber('DGAsgZoAimg=', 1270, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('DGAsgZoAimg=', 1270, -1000, 1000),DecodeDecimal('N46Ogs7ys5A=', 1270, -1000, 1000),DecodeDecimal('N46Ogs7ys5A=', 1270, -1000, 1000));
    question.answers.length = 0;
    question.num = 40;
    question.isSingleAns = false;
    question.shortTextQuestion = "She called me ___ last night.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('DGAsgZoAimg=', 1272, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('N46Ogs7ys5A=', 1270, -9999, 99999), DecodeNumber('N46Ogs7ys5A=', 1270, -9999, 99999), '');
    answer1.shortTextAnswer = "since";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('xbpvMYQG4bc=', 1274, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('j4lpufSDCJI=', 1272, -9999, 99999), DecodeNumber('j4lpufSDCJI=', 1272, -9999, 99999), '');
    answer2.shortTextAnswer = "at";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('+4N6oIgewsk=', 1276, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('KeevnedbLbI=', 1274, -9999, 99999), DecodeNumber('KeevnedbLbI=', 1274, -9999, 99999), '');
    answer3.shortTextAnswer = "in";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('52wkgUkuLSM=', 1278, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('ZvCNfzsBRM8=', 1276, -9999, 99999), DecodeNumber('DJOrI229PLc=', 1276, -9999, 99999), '');
    answer4.shortTextAnswer = "?";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion41()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 40;
    var weight = DecodeNumber('Y9S0Vy8QOQk=', 1280, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Y9S0Vy8QOQk=', 1280, -1000, 1000),DecodeDecimal('62/0G3KHMKQ=', 1280, -1000, 1000),DecodeDecimal('62/0G3KHMKQ=', 1280, -1000, 1000));
    question.answers.length = 0;
    question.num = 41;
    question.isSingleAns = false;
    question.shortTextQuestion = "I saw her ___ the party.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Y9S0Vy8QOQk=', 1282, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('62/0G3KHMKQ=', 1280, -9999, 99999), DecodeNumber('62/0G3KHMKQ=', 1280, -9999, 99999), '');
    answer1.shortTextAnswer = "in";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('wBG2Zp+yZ/o=', 1284, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('hjN+vPqjtIg=', 1282, -9999, 99999), DecodeNumber('hjN+vPqjtIg=', 1282, -9999, 99999), '');
    answer2.shortTextAnswer = "at";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('r/pEQVVniHw=', 1286, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('W8+JobNzhd0=', 1284, -9999, 99999), DecodeNumber('W8+JobNzhd0=', 1284, -9999, 99999), '');
    answer3.shortTextAnswer = "on";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('2udB61rDjs8=', 1288, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('irtB9kT6PVE=', 1286, -9999, 99999), DecodeNumber('xYX40goXG8Q=', 1286, -9999, 99999), '');
    answer4.shortTextAnswer = "during";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion42()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 41;
    var weight = DecodeNumber('Ua8H55hi8Sk=', 1290, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Ua8H55hi8Sk=', 1290, -1000, 1000),DecodeDecimal('Q/ukqRZ35Sg=', 1290, -1000, 1000),DecodeDecimal('Q/ukqRZ35Sg=', 1290, -1000, 1000));
    question.answers.length = 0;
    question.num = 42;
    question.isSingleAns = false;
    question.shortTextQuestion = "I ___ watching TV when she called.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('rbIp01jd9vU=', 1292, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('mJ2LZuozFyg=', 1290, -9999, 99999), DecodeNumber('Q/ukqRZ35Sg=', 1290, -9999, 99999), '');
    answer1.shortTextAnswer = "was";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('rbIp01jd9vU=', 1294, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('1rHVAnLEW/8=', 1292, -9999, 99999), DecodeNumber('1rHVAnLEW/8=', 1292, -9999, 99999), '');
    answer2.shortTextAnswer = "were";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('UERCxq/lvWA=', 1296, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('ucHbyMw4cvw=', 1294, -9999, 99999), DecodeNumber('ucHbyMw4cvw=', 1294, -9999, 99999), '');
    answer3.shortTextAnswer = "am";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('IWQsEEWUyrE=', 1298, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('yVH0SsWmgDg=', 1296, -9999, 99999), DecodeNumber('yVH0SsWmgDg=', 1296, -9999, 99999), '');
    answer4.shortTextAnswer = "be";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion43()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 42;
    var weight = DecodeNumber('pw9xSdvDsxE=', 1300, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('pw9xSdvDsxE=', 1300, -1000, 1000),DecodeDecimal('ObaDsoJYy60=', 1300, -1000, 1000),DecodeDecimal('ObaDsoJYy60=', 1300, -1000, 1000));
    question.answers.length = 0;
    question.num = 43;
    question.isSingleAns = false;
    question.shortTextQuestion = "What ___ he doing yesterday at 5?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('pw9xSdvDsxE=', 1302, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('ObaDsoJYy60=', 1300, -9999, 99999), DecodeNumber('ObaDsoJYy60=', 1300, -9999, 99999), '');
    answer1.shortTextAnswer = "is";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('SDthbdO+hmQ=', 1304, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('4C0ocTRJSQQ=', 1302, -9999, 99999), DecodeNumber('4C0ocTRJSQQ=', 1302, -9999, 99999), '');
    answer2.shortTextAnswer = "were";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('so92Li3ijS4=', 1306, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('XmdJ061dh6I=', 1304, -9999, 99999), DecodeNumber('pnb0m49Ch1o=', 1304, -9999, 99999), '');
    answer3.shortTextAnswer = "was";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('so92Li3ijS4=', 1308, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('6wZKxBUWhK8=', 1306, -9999, 99999), DecodeNumber('6wZKxBUWhK8=', 1306, -9999, 99999), '');
    answer4.shortTextAnswer = "be";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion44()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 43;
    var weight = DecodeNumber('IfWYZkv4Tlw=', 1310, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('IfWYZkv4Tlw=', 1310, -1000, 1000),DecodeDecimal('rYG2xkq32+8=', 1310, -1000, 1000),DecodeDecimal('rYG2xkq32+8=', 1310, -1000, 1000));
    question.answers.length = 0;
    question.num = 44;
    question.isSingleAns = false;
    question.shortTextQuestion = "I ___ not sleeping when the phone rang.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('IfWYZkv4Tlw=', 1312, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('rYG2xkq32+8=', 1310, -9999, 99999), DecodeNumber('rYG2xkq32+8=', 1310, -9999, 99999), '');
    answer1.shortTextAnswer = "am";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('rJ9iwN1mEx8=', 1314, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('IxHXGF9wv+4=', 1312, -9999, 99999), DecodeNumber('IxHXGF9wv+4=', 1312, -9999, 99999), '');
    answer2.shortTextAnswer = "were";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('DKjHVM4Pz64=', 1316, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('7Byov/PjgCM=', 1314, -9999, 99999), DecodeNumber('BW0bgovw+94=', 1314, -9999, 99999), '');
    answer3.shortTextAnswer = "was";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('DKjHVM4Pz64=', 1318, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('uaeFYmKmw7o=', 1316, -9999, 99999), DecodeNumber('uaeFYmKmw7o=', 1316, -9999, 99999), '');
    answer4.shortTextAnswer = "be";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion45()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 44;
    var weight = DecodeNumber('zWTfBSo3xU8=', 1320, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('zWTfBSo3xU8=', 1320, -1000, 1000),DecodeDecimal('vnMoLR2FdS0=', 1320, -1000, 1000),DecodeDecimal('vnMoLR2FdS0=', 1320, -1000, 1000));
    question.answers.length = 0;
    question.num = 45;
    question.isSingleAns = false;
    question.shortTextQuestion = "They ___ TV when the phone rang.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('XUIwn/2DOAY=', 1322, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('FrPD6GABZkk=', 1320, -9999, 99999), DecodeNumber('vnMoLR2FdS0=', 1320, -9999, 99999), '');
    answer1.shortTextAnswer = "were watching";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('XUIwn/2DOAY=', 1324, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('4kaYwVoRigc=', 1322, -9999, 99999), DecodeNumber('4kaYwVoRigc=', 1322, -9999, 99999), '');
    answer2.shortTextAnswer = "watching";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('tQZ0q6y8R8s=', 1326, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('HoBdjpsur5Y=', 1324, -9999, 99999), DecodeNumber('HoBdjpsur5Y=', 1324, -9999, 99999), '');
    answer3.shortTextAnswer = "watched";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('JcYRSm/K148=', 1328, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('KfnyOZ7ITmE=', 1326, -9999, 99999), DecodeNumber('KfnyOZ7ITmE=', 1326, -9999, 99999), '');
    answer4.shortTextAnswer = "watches";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion46()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 45;
    var weight = DecodeNumber('Pis/AycKcr8=', 1330, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Pis/AycKcr8=', 1330, -1000, 1000),DecodeDecimal('BUq6HD2iDU4=', 1330, -1000, 1000),DecodeDecimal('BUq6HD2iDU4=', 1330, -1000, 1000));
    question.answers.length = 0;
    question.num = 46;
    question.isSingleAns = false;
    question.shortTextQuestion = "While she ___, the doorbell rang.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Pis/AycKcr8=', 1332, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('BUq6HD2iDU4=', 1330, -9999, 99999), DecodeNumber('BUq6HD2iDU4=', 1330, -9999, 99999), '');
    answer1.shortTextAnswer = "slept";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('vVbXp3ZYKIU=', 1334, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('8uHlxVyCBU0=', 1332, -9999, 99999), DecodeNumber('8uHlxVyCBU0=', 1332, -9999, 99999), '');
    answer2.shortTextAnswer = "sleeps";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('q2fzz12Qf3Q=', 1336, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('BgVX4kCquZg=', 1334, -9999, 99999), DecodeNumber('yWLSHZY2aEY=', 1334, -9999, 99999), '');
    answer3.shortTextAnswer = "was sleeping";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('q2fzz12Qf3Q=', 1338, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('okr80cYJHsk=', 1336, -9999, 99999), DecodeNumber('okr80cYJHsk=', 1336, -9999, 99999), '');
    answer4.shortTextAnswer = "sleep";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion47()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 46;
    var weight = DecodeNumber('1OdbDqZRwbc=', 1340, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('1OdbDqZRwbc=', 1340, -1000, 1000),DecodeDecimal('ZpBZHkvd8M4=', 1340, -1000, 1000),DecodeDecimal('ZpBZHkvd8M4=', 1340, -1000, 1000));
    question.answers.length = 0;
    question.num = 47;
    question.isSingleAns = false;
    question.shortTextQuestion = "This time tomorrow I ___ flying to Rome.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('1OdbDqZRwbc=', 1342, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('ZpBZHkvd8M4=', 1340, -9999, 99999), DecodeNumber('ZpBZHkvd8M4=', 1340, -9999, 99999), '');
    answer1.shortTextAnswer = "will fly";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('YiJ7eZtUT/U=', 1344, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('vtROl8W6VAg=', 1342, -9999, 99999), DecodeNumber('el2mdJ6BGG4=', 1342, -9999, 99999), '');
    answer2.shortTextAnswer = "will be flying";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('YiJ7eZtUT/U=', 1346, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('eG6DR1Otl9Y=', 1344, -9999, 99999), DecodeNumber('eG6DR1Otl9Y=', 1344, -9999, 99999), '');
    answer3.shortTextAnswer = "will be";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('qkLiNleV0OI=', 1348, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('w0Y/YIUvStQ=', 1346, -9999, 99999), DecodeNumber('w0Y/YIUvStQ=', 1346, -9999, 99999), '');
    answer4.shortTextAnswer = "fly";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion48()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 47;
    var weight = DecodeNumber('8bPITEZRKAk=', 1350, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('8bPITEZRKAk=', 1350, -1000, 1000),DecodeDecimal('euxJoFJUuAg=', 1350, -1000, 1000),DecodeDecimal('euxJoFJUuAg=', 1350, -1000, 1000));
    question.answers.length = 0;
    question.num = 48;
    question.isSingleAns = false;
    question.shortTextQuestion = "I ___ going to the dentist tomorrow. (present continuous)";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('8bPITEZRKAk=', 1352, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('euxJoFJUuAg=', 1350, -9999, 99999), DecodeNumber('euxJoFJUuAg=', 1350, -9999, 99999), '');
    answer1.shortTextAnswer = "is";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('enc8deVdxrw=', 1354, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('buDcPgfG7ko=', 1352, -9999, 99999), DecodeNumber('buDcPgfG7ko=', 1352, -9999, 99999), '');
    answer2.shortTextAnswer = "are";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('zLNmaOMgvo4=', 1356, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('j6rImla077w=', 1354, -9999, 99999), DecodeNumber('iKXU3hCB3uU=', 1354, -9999, 99999), '');
    answer3.shortTextAnswer = "am";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('zLNmaOMgvo4=', 1358, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('8SygIbJ3W0I=', 1356, -9999, 99999), DecodeNumber('8SygIbJ3W0I=', 1356, -9999, 99999), '');
    answer4.shortTextAnswer = "be";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion49()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 48;
    var weight = DecodeNumber('T3JonFU6mGY=', 1360, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('T3JonFU6mGY=', 1360, -1000, 1000),DecodeDecimal('MjJUj2uLqZY=', 1360, -1000, 1000),DecodeDecimal('MjJUj2uLqZY=', 1360, -1000, 1000));
    question.answers.length = 0;
    question.num = 49;
    question.isSingleAns = false;
    question.shortTextQuestion = "We ___ visit grandma this weekend. (be going to)";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('T3JonFU6mGY=', 1362, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('MjJUj2uLqZY=', 1360, -9999, 99999), DecodeNumber('MjJUj2uLqZY=', 1360, -9999, 99999), '');
    answer1.shortTextAnswer = "are";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('HRZUcbCi4jk=', 1364, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('2vR3F+AMeo0=', 1362, -9999, 99999), DecodeNumber('2vR3F+AMeo0=', 1362, -9999, 99999), '');
    answer2.shortTextAnswer = "will";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('uIfEb7Jph4Y=', 1366, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('GRGUlj+4bZo=', 1364, -9999, 99999), DecodeNumber('IT1AkaCt+iI=', 1364, -9999, 99999), '');
    answer3.shortTextAnswer = "are going to";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('uIfEb7Jph4Y=', 1368, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('4D5Q2bYZ4Gw=', 1366, -9999, 99999), DecodeNumber('4D5Q2bYZ4Gw=', 1366, -9999, 99999), '');
    answer4.shortTextAnswer = "going";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion50()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 49;
    var weight = DecodeNumber('ChuKXLn9J/M=', 1370, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ChuKXLn9J/M=', 1370, -1000, 1000),DecodeDecimal('oEP7MsRjaZk=', 1370, -1000, 1000),DecodeDecimal('oEP7MsRjaZk=', 1370, -1000, 1000));
    question.answers.length = 0;
    question.num = 50;
    question.isSingleAns = false;
    question.shortTextQuestion = "I ___ buy a new phone soon. (be going to)";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('ChuKXLn9J/M=', 1372, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('oEP7MsRjaZk=', 1370, -9999, 99999), DecodeNumber('oEP7MsRjaZk=', 1370, -9999, 99999), '');
    answer1.shortTextAnswer = "will";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ciZ4qER+VwQ=', 1374, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('Kx/M+KHwxsc=', 1372, -9999, 99999), DecodeNumber('Kx/M+KHwxsc=', 1372, -9999, 99999), '');
    answer2.shortTextAnswer = "am";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('92rlN4V8Sv8=', 1376, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('vsj9ZcOvV2k=', 1374, -9999, 99999), DecodeNumber('v3PxX6xryws=', 1374, -9999, 99999), '');
    answer3.shortTextAnswer = "am going to";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('92rlN4V8Sv8=', 1378, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('ZvCNfzsBRM8=', 1376, -9999, 99999), DecodeNumber('ZvCNfzsBRM8=', 1376, -9999, 99999), '');
    answer4.shortTextAnswer = "go";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion51()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 50;
    var weight = DecodeNumber('elY4MOfUSHM=', 1380, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('elY4MOfUSHM=', 1380, -1000, 1000),DecodeDecimal('iMY37iajF0s=', 1380, -1000, 1000),DecodeDecimal('iMY37iajF0s=', 1380, -1000, 1000));
    question.answers.length = 0;
    question.num = 51;
    question.isSingleAns = false;
    question.shortTextQuestion = "She ___ flying to Paris next week. (present continuous)";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('elY4MOfUSHM=', 1382, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('iMY37iajF0s=', 1380, -9999, 99999), DecodeNumber('iMY37iajF0s=', 1380, -9999, 99999), '');
    answer1.shortTextAnswer = "will be";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('p/yUs13U/5A=', 1384, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('+eibEbXLw/k=', 1382, -9999, 99999), DecodeNumber('+eibEbXLw/k=', 1382, -9999, 99999), '');
    answer2.shortTextAnswer = "is going";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ra2KTNCB/Tg=', 1386, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('+PvjHWaLy80=', 1384, -9999, 99999), DecodeNumber('Bh676ucOZUA=', 1384, -9999, 99999), '');
    answer3.shortTextAnswer = "is";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('ra2KTNCB/Tg=', 1388, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('irtB9kT6PVE=', 1386, -9999, 99999), DecodeNumber('irtB9kT6PVE=', 1386, -9999, 99999), '');
    answer4.shortTextAnswer = "will";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion52()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 51;
    var weight = DecodeNumber('2pHcgPaSWH0=', 1390, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('2pHcgPaSWH0=', 1390, -1000, 1000),DecodeDecimal('mJ2LZuozFyg=', 1390, -1000, 1000),DecodeDecimal('mJ2LZuozFyg=', 1390, -1000, 1000));
    question.answers.length = 0;
    question.num = 52;
    question.isSingleAns = false;
    question.shortTextQuestion = "We ___ have a barbecue on Saturday. (be going to)";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('cplca4XKAkc=', 1392, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('IxJriOifWsY=', 1390, -9999, 99999), DecodeNumber('mJ2LZuozFyg=', 1390, -9999, 99999), '');
    answer1.shortTextAnswer = "are going to";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('cplca4XKAkc=', 1394, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('IwqN9R9PGYg=', 1392, -9999, 99999), DecodeNumber('IwqN9R9PGYg=', 1392, -9999, 99999), '');
    answer2.shortTextAnswer = "are having";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('GdFq2ac+3Eo=', 1396, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('QGotsQa1kiE=', 1394, -9999, 99999), DecodeNumber('QGotsQa1kiE=', 1394, -9999, 99999), '');
    answer3.shortTextAnswer = "will";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('ImHg6yicYLc=', 1398, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('vAZMvjs5sbo=', 1396, -9999, 99999), DecodeNumber('vAZMvjs5sbo=', 1396, -9999, 99999), '');
    answer4.shortTextAnswer = "going";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion53()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 52;
    var weight = DecodeNumber('urWpgGREcxg=', 1400, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('urWpgGREcxg=', 1400, -1000, 1000),DecodeDecimal('1nQ6pnEcNDU=', 1400, -1000, 1000),DecodeDecimal('1nQ6pnEcNDU=', 1400, -1000, 1000));
    question.answers.length = 0;
    question.num = 53;
    question.isSingleAns = false;
    question.shortTextQuestion = "She ___ be 18 next week.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Bl7JW/maBo8=', 1402, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('Bc1Uoy3xrGY=', 1400, -9999, 99999), DecodeNumber('1nQ6pnEcNDU=', 1400, -9999, 99999), '');
    answer1.shortTextAnswer = "will";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Bl7JW/maBo8=', 1404, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('GAI3pf8vRBE=', 1402, -9999, 99999), DecodeNumber('GAI3pf8vRBE=', 1402, -9999, 99999), '');
    answer2.shortTextAnswer = "going to";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('tIToiW4TrD8=', 1406, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('XmdJ061dh6I=', 1404, -9999, 99999), DecodeNumber('XmdJ061dh6I=', 1404, -9999, 99999), '');
    answer3.shortTextAnswer = "is";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('e0tXoFw76NE=', 1408, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('NduRbotwr9U=', 1406, -9999, 99999), DecodeNumber('NduRbotwr9U=', 1406, -9999, 99999), '');
    answer4.shortTextAnswer = "was";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion54()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 53;
    var weight = DecodeNumber('MlBUvRT/uN0=', 1410, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('MlBUvRT/uN0=', 1410, -1000, 1000),DecodeDecimal('dmUCpBljeoY=', 1410, -1000, 1000),DecodeDecimal('dmUCpBljeoY=', 1410, -1000, 1000));
    question.answers.length = 0;
    question.num = 54;
    question.isSingleAns = false;
    question.shortTextQuestion = "They ___ not agree with you.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('MlBUvRT/uN0=', 1412, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('dmUCpBljeoY=', 1410, -9999, 99999), DecodeNumber('dmUCpBljeoY=', 1410, -9999, 99999), '');
    answer1.shortTextAnswer = "do";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('aVyXGBlkA8A=', 1414, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('KNjqztusPio=', 1412, -9999, 99999), DecodeNumber('KNjqztusPio=', 1412, -9999, 99999), '');
    answer2.shortTextAnswer = "are";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('1wr5P3KJFpA=', 1416, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('7Byov/PjgCM=', 1414, -9999, 99999), DecodeNumber('7Byov/PjgCM=', 1414, -9999, 99999), '');
    answer3.shortTextAnswer = "will";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('yAIPJ/QbDmA=', 1418, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('8K3Qw6euk4s=', 1416, -9999, 99999), DecodeNumber('TjjK83G8eKY=', 1416, -9999, 99999), '');
    answer4.shortTextAnswer = "will not";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion55()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 54;
    var weight = DecodeNumber('oFClDl8z21Y=', 1420, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('oFClDl8z21Y=', 1420, -1000, 1000),DecodeDecimal('FrPD6GABZkk=', 1420, -1000, 1000),DecodeDecimal('FrPD6GABZkk=', 1420, -1000, 1000));
    question.answers.length = 0;
    question.num = 55;
    question.isSingleAns = false;
    question.shortTextQuestion = "We ___ call you tomorrow.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('A64xtFh/F/c=', 1422, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('8JXBOYZTdbE=', 1420, -9999, 99999), DecodeNumber('FrPD6GABZkk=', 1420, -9999, 99999), '');
    answer1.shortTextAnswer = "will";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('A64xtFh/F/c=', 1424, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('hUsMDtG6Saw=', 1422, -9999, 99999), DecodeNumber('hUsMDtG6Saw=', 1422, -9999, 99999), '');
    answer2.shortTextAnswer = "calls";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('jt6IeK24ydI=', 1426, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('1BPsqSZTHWI=', 1424, -9999, 99999), DecodeNumber('1BPsqSZTHWI=', 1424, -9999, 99999), '');
    answer3.shortTextAnswer = "are";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('FONDiV3I+j8=', 1428, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('PKsfuRliVnU=', 1426, -9999, 99999), DecodeNumber('PKsfuRliVnU=', 1426, -9999, 99999), '');
    answer4.shortTextAnswer = "going to";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion56()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 55;
    var weight = DecodeNumber('Ktk1ut53US4=', 1430, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Ktk1ut53US4=', 1430, -1000, 1000),DecodeDecimal('BSmln52Lbbs=', 1430, -1000, 1000),DecodeDecimal('BSmln52Lbbs=', 1430, -1000, 1000));
    question.answers.length = 0;
    question.num = 56;
    question.isSingleAns = false;
    question.shortTextQuestion = "___ you come with us?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Ktk1ut53US4=', 1432, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('BSmln52Lbbs=', 1430, -9999, 99999), DecodeNumber('BSmln52Lbbs=', 1430, -9999, 99999), '');
    answer1.shortTextAnswer = "Do";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('gBmXZXgMTfU=', 1434, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('CWcPrVdspC8=', 1432, -9999, 99999), DecodeNumber('CWcPrVdspC8=', 1432, -9999, 99999), '');
    answer2.shortTextAnswer = "Are";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('7tt96/Re6Es=', 1436, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('eG8wUwKCiRE=', 1434, -9999, 99999), DecodeNumber('BgVX4kCquZg=', 1434, -9999, 99999), '');
    answer3.shortTextAnswer = "Will";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('7tt96/Re6Es=', 1438, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('1mOU6WJ72GI=', 1436, -9999, 99999), DecodeNumber('1mOU6WJ72GI=', 1436, -9999, 99999), '');
    answer4.shortTextAnswer = "Can";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion57()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 56;
    var weight = DecodeNumber('5OPLTwBP2V0=', 1440, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('5OPLTwBP2V0=', 1440, -1000, 1000),DecodeDecimal('EXkyB54f9LQ=', 1440, -1000, 1000),DecodeDecimal('EXkyB54f9LQ=', 1440, -1000, 1000));
    question.answers.length = 0;
    question.num = 57;
    question.isSingleAns = false;
    question.shortTextQuestion = "It ___ snow tonight. (will)";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('5OPLTwBP2V0=', 1442, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('EXkyB54f9LQ=', 1440, -9999, 99999), DecodeNumber('EXkyB54f9LQ=', 1440, -9999, 99999), '');
    answer1.shortTextAnswer = "is";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('EF5IDij78ro=', 1444, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('vtROl8W6VAg=', 1442, -9999, 99999), DecodeNumber('vtROl8W6VAg=', 1442, -9999, 99999), '');
    answer2.shortTextAnswer = "going to";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('a+Vh4k39ezQ=', 1446, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('he/f91CEW7k=', 1444, -9999, 99999), DecodeNumber('OpPR3eygNe8=', 1444, -9999, 99999), '');
    answer3.shortTextAnswer = "will";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('a+Vh4k39ezQ=', 1448, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('QkZDEvyi2Y4=', 1446, -9999, 99999), DecodeNumber('QkZDEvyi2Y4=', 1446, -9999, 99999), '');
    answer4.shortTextAnswer = "might";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion58()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 57;
    var weight = DecodeNumber('JM6D5dxYWtY=', 1450, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('JM6D5dxYWtY=', 1450, -1000, 1000),DecodeDecimal('E+DDtDGKoAM=', 1450, -1000, 1000),DecodeDecimal('E+DDtDGKoAM=', 1450, -1000, 1000));
    question.answers.length = 0;
    question.num = 58;
    question.isSingleAns = false;
    question.shortTextQuestion = "How much ___ do you want?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('uRkYIzeEdkg=', 1452, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('kpcCc91h6nE=', 1450, -9999, 99999), DecodeNumber('E+DDtDGKoAM=', 1450, -9999, 99999), '');
    answer1.shortTextAnswer = "water";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('uRkYIzeEdkg=', 1454, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('MLDehg2rRPM=', 1452, -9999, 99999), DecodeNumber('MLDehg2rRPM=', 1452, -9999, 99999), '');
    answer2.shortTextAnswer = "eggs";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('jg23A2uYJoM=', 1456, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('j6rImla077w=', 1454, -9999, 99999), DecodeNumber('j6rImla077w=', 1454, -9999, 99999), '');
    answer3.shortTextAnswer = "apple";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('fKH/Wj7B9j0=', 1458, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('UiMvCLUotOE=', 1456, -9999, 99999), DecodeNumber('UiMvCLUotOE=', 1456, -9999, 99999), '');
    answer4.shortTextAnswer = "cars";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion59()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 58;
    var weight = DecodeNumber('FuGhSWJqrbY=', 1460, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('FuGhSWJqrbY=', 1460, -1000, 1000),DecodeDecimal('gQlycjBCAjU=', 1460, -1000, 1000),DecodeDecimal('gQlycjBCAjU=', 1460, -1000, 1000));
    question.answers.length = 0;
    question.num = 59;
    question.isSingleAns = false;
    question.shortTextQuestion = "Can you give me an ___?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('FuGhSWJqrbY=', 1462, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('gQlycjBCAjU=', 1460, -9999, 99999), DecodeNumber('gQlycjBCAjU=', 1460, -9999, 99999), '');
    answer1.shortTextAnswer = "information";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('yY4H2TriMAY=', 1464, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('wD6Q0VAH968=', 1462, -9999, 99999), DecodeNumber('1UR6OFRrf9c=', 1462, -9999, 99999), '');
    answer2.shortTextAnswer = "apple";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('yY4H2TriMAY=', 1466, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('GRGUlj+4bZo=', 1464, -9999, 99999), DecodeNumber('GRGUlj+4bZo=', 1464, -9999, 99999), '');
    answer3.shortTextAnswer = "advice";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('6ACzKyl60fs=', 1468, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('YjZeIpX7pbg=', 1466, -9999, 99999), DecodeNumber('YjZeIpX7pbg=', 1466, -9999, 99999), '');
    answer4.shortTextAnswer = "equipment";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion60()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 59;
    var weight = DecodeNumber('unYa+mx9Knw=', 1470, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('unYa+mx9Knw=', 1470, -1000, 1000),DecodeDecimal('wz2vNcaO0fc=', 1470, -1000, 1000),DecodeDecimal('wz2vNcaO0fc=', 1470, -1000, 1000));
    question.answers.length = 0;
    question.num = 60;
    question.isSingleAns = false;
    question.shortTextQuestion = "He drank two ___ of juice.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('ymvUs7JrJzI=', 1472, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('v+Z9mMa1YUo=', 1470, -9999, 99999), DecodeNumber('wz2vNcaO0fc=', 1470, -9999, 99999), '');
    answer1.shortTextAnswer = "bottles";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ymvUs7JrJzI=', 1474, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('lzXA0f6JC+4=', 1472, -9999, 99999), DecodeNumber('lzXA0f6JC+4=', 1472, -9999, 99999), '');
    answer2.shortTextAnswer = "cup";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ZF97IEmPIwc=', 1476, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('vsj9ZcOvV2k=', 1474, -9999, 99999), DecodeNumber('vsj9ZcOvV2k=', 1474, -9999, 99999), '');
    answer3.shortTextAnswer = "bottle";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('BVO/Qzag6MU=', 1478, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('YiFZZIGwgPM=', 1476, -9999, 99999), DecodeNumber('YiFZZIGwgPM=', 1476, -9999, 99999), '');
    answer4.shortTextAnswer = "equipment";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion61()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 60;
    var weight = DecodeNumber('UaGFUso51IE=', 1480, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('UaGFUso51IE=', 1480, -1000, 1000),DecodeDecimal('x7uKBWgv2r0=', 1480, -1000, 1000),DecodeDecimal('x7uKBWgv2r0=', 1480, -1000, 1000));
    question.answers.length = 0;
    question.num = 61;
    question.isSingleAns = false;
    question.shortTextQuestion = "We need some ___ for breakfast.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('muK5+HkV9NQ=', 1482, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('3GsWPqIpVg4=', 1480, -9999, 99999), DecodeNumber('x7uKBWgv2r0=', 1480, -9999, 99999), '');
    answer1.shortTextAnswer = "milk";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('muK5+HkV9NQ=', 1484, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('bMqFtM/sB1c=', 1482, -9999, 99999), DecodeNumber('bMqFtM/sB1c=', 1482, -9999, 99999), '');
    answer2.shortTextAnswer = "eggs";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ZbMzbR7ltFM=', 1486, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('+PvjHWaLy80=', 1484, -9999, 99999), DecodeNumber('+PvjHWaLy80=', 1484, -9999, 99999), '');
    answer3.shortTextAnswer = "milks";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('UQfTHfXS/LE=', 1488, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('WFbN5maQh8s=', 1486, -9999, 99999), DecodeNumber('WFbN5maQh8s=', 1486, -9999, 99999), '');
    answer4.shortTextAnswer = "chair";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion62()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 61;
    var weight = DecodeNumber('zloLviz5FhQ=', 1490, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('zloLviz5FhQ=', 1490, -1000, 1000),DecodeDecimal('IxJriOifWsY=', 1490, -1000, 1000),DecodeDecimal('IxJriOifWsY=', 1490, -1000, 1000));
    question.answers.length = 0;
    question.num = 62;
    question.isSingleAns = false;
    question.shortTextQuestion = "___ is not a countable noun.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('EOwvBZLhifY=', 1492, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('Gb1wxYbH+y8=', 1490, -9999, 99999), DecodeNumber('IxJriOifWsY=', 1490, -9999, 99999), '');
    answer1.shortTextAnswer = "Water";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('EOwvBZLhifY=', 1494, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('ruggntDnZSc=', 1492, -9999, 99999), DecodeNumber('ruggntDnZSc=', 1492, -9999, 99999), '');
    answer2.shortTextAnswer = "Book";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('zxaybzba9Gg=', 1496, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('kO+Rs2C3/8I=', 1494, -9999, 99999), DecodeNumber('kO+Rs2C3/8I=', 1494, -9999, 99999), '');
    answer3.shortTextAnswer = "Car";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('FBHx/zcvRWc=', 1498, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('ucb7T+g8Xls=', 1496, -9999, 99999), DecodeNumber('ucb7T+g8Xls=', 1496, -9999, 99999), '');
    answer4.shortTextAnswer = "Pen";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion63()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 62;
    var weight = DecodeNumber('TWkMlmbbE78=', 1500, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('TWkMlmbbE78=', 1500, -1000, 1000),DecodeDecimal('Bc1Uoy3xrGY=', 1500, -1000, 1000),DecodeDecimal('Bc1Uoy3xrGY=', 1500, -1000, 1000));
    question.answers.length = 0;
    question.num = 63;
    question.isSingleAns = false;
    question.shortTextQuestion = "Can I have some ___, please?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('TWkMlmbbE78=', 1502, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('Bc1Uoy3xrGY=', 1500, -9999, 99999), DecodeNumber('Bc1Uoy3xrGY=', 1500, -9999, 99999), '');
    answer1.shortTextAnswer = "advices";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('5zoU7tJDzE8=', 1504, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('DP0XP7GznOI=', 1502, -9999, 99999), DecodeNumber('EcMiGfVa4lk=', 1502, -9999, 99999), '');
    answer2.shortTextAnswer = "water";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('5zoU7tJDzE8=', 1506, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('Eme2/gx7YjA=', 1504, -9999, 99999), DecodeNumber('Eme2/gx7YjA=', 1504, -9999, 99999), '');
    answer3.shortTextAnswer = "informations";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('FSEjdtHAjxU=', 1508, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('+UP7jxuodPA=', 1506, -9999, 99999), DecodeNumber('+UP7jxuodPA=', 1506, -9999, 99999), '');
    answer4.shortTextAnswer = "apples";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion64()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 63;
    var weight = DecodeNumber('Z6Z2ln7lJVM=', 1510, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Z6Z2ln7lJVM=', 1510, -1000, 1000),DecodeDecimal('pJlzGUNkI1U=', 1510, -1000, 1000),DecodeDecimal('pJlzGUNkI1U=', 1510, -1000, 1000));
    question.answers.length = 0;
    question.num = 64;
    question.isSingleAns = false;
    question.shortTextQuestion = "That?s a picture of my ___ house.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Z6Z2ln7lJVM=', 1512, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('pJlzGUNkI1U=', 1510, -9999, 99999), DecodeNumber('pJlzGUNkI1U=', 1510, -9999, 99999), '');
    answer1.shortTextAnswer = "parent";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('nLwEmPNjepI=', 1514, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('tekfLnvx7Jo=', 1512, -9999, 99999), DecodeNumber('tekfLnvx7Jo=', 1512, -9999, 99999), '');
    answer2.shortTextAnswer = "parents'";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('0ju1nOWL0gk=', 1516, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('mZn+qCc4q2I=', 1514, -9999, 99999), DecodeNumber('mZn+qCc4q2I=', 1514, -9999, 99999), '');
    answer3.shortTextAnswer = "parents";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('JeD0hEKoAl4=', 1518, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('RqVB1Y1GtQY=', 1516, -9999, 99999), DecodeNumber('8K3Qw6euk4s=', 1516, -9999, 99999), '');
    answer4.shortTextAnswer = "parent's";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion65()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 64;
    var weight = DecodeNumber('XEwKBbFYhPs=', 1520, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('XEwKBbFYhPs=', 1520, -1000, 1000),DecodeDecimal('8JXBOYZTdbE=', 1520, -1000, 1000),DecodeDecimal('8JXBOYZTdbE=', 1520, -1000, 1000));
    question.answers.length = 0;
    question.num = 65;
    question.isSingleAns = false;
    question.shortTextQuestion = "Is she a friend of your ___?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('ZXzcsbhzAtA=', 1522, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('TvLgd8/QEHE=', 1520, -9999, 99999), DecodeNumber('8JXBOYZTdbE=', 1520, -9999, 99999), '');
    answer1.shortTextAnswer = "brother's";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ZXzcsbhzAtA=', 1524, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('MZiw2SoVpUg=', 1522, -9999, 99999), DecodeNumber('MZiw2SoVpUg=', 1522, -9999, 99999), '');
    answer2.shortTextAnswer = "brothers";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('qxAJ2Nw/w/w=', 1526, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('euoGnyJtHwM=', 1524, -9999, 99999), DecodeNumber('euoGnyJtHwM=', 1524, -9999, 99999), '');
    answer3.shortTextAnswer = "brother";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('+BcSPSGKch4=', 1528, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('ghFcgeMM2Kk=', 1526, -9999, 99999), DecodeNumber('ghFcgeMM2Kk=', 1526, -9999, 99999), '');
    answer4.shortTextAnswer = "brother'";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion66()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 65;
    var weight = DecodeNumber('8h7kcMMATGQ=', 1530, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('8h7kcMMATGQ=', 1530, -1000, 1000),DecodeDecimal('4CFdEPuDO8w=', 1530, -1000, 1000),DecodeDecimal('4CFdEPuDO8w=', 1530, -1000, 1000));
    question.answers.length = 0;
    question.num = 66;
    question.isSingleAns = false;
    question.shortTextQuestion = "Can I have ___ water?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('8h7kcMMATGQ=', 1532, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('4CFdEPuDO8w=', 1530, -9999, 99999), DecodeNumber('4CFdEPuDO8w=', 1530, -9999, 99999), '');
    answer1.shortTextAnswer = "many";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('RLuRjpVIT5I=', 1534, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('5MsVdc/7AMQ=', 1532, -9999, 99999), DecodeNumber('BOa5tcerq4o=', 1532, -9999, 99999), '');
    answer2.shortTextAnswer = "some";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('RLuRjpVIT5I=', 1536, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('eG8wUwKCiRE=', 1534, -9999, 99999), DecodeNumber('eG8wUwKCiRE=', 1534, -9999, 99999), '');
    answer3.shortTextAnswer = "any";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('vhsBKGu1EdI=', 1538, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('237tlv7y1Xg=', 1536, -9999, 99999), DecodeNumber('237tlv7y1Xg=', 1536, -9999, 99999), '');
    answer4.shortTextAnswer = "a";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion67()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 66;
    var weight = DecodeNumber('E6Pte+NLyko=', 1540, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('E6Pte+NLyko=', 1540, -1000, 1000),DecodeDecimal('6wmyGcN5zok=', 1540, -1000, 1000),DecodeDecimal('6wmyGcN5zok=', 1540, -1000, 1000));
    question.answers.length = 0;
    question.num = 67;
    question.isSingleAns = false;
    question.shortTextQuestion = "I saw ___ interesting books in the shop.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('E6Pte+NLyko=', 1542, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('6wmyGcN5zok=', 1540, -9999, 99999), DecodeNumber('6wmyGcN5zok=', 1540, -9999, 99999), '');
    answer1.shortTextAnswer = "many";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('P224vzNh3es=', 1544, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('ZzXRRQtQvHU=', 1542, -9999, 99999), DecodeNumber('IVKb9SWdYTw=', 1542, -9999, 99999), '');
    answer2.shortTextAnswer = "some";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('P224vzNh3es=', 1546, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('he/f91CEW7k=', 1544, -9999, 99999), DecodeNumber('he/f91CEW7k=', 1544, -9999, 99999), '');
    answer3.shortTextAnswer = "any";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('jcG5meybm1s=', 1548, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('Ja0ONwMfBPY=', 1546, -9999, 99999), DecodeNumber('Ja0ONwMfBPY=', 1546, -9999, 99999), '');
    answer4.shortTextAnswer = "much";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion68()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 67;
    var weight = DecodeNumber('YQ4ZHVFnjUk=', 1550, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('YQ4ZHVFnjUk=', 1550, -1000, 1000),DecodeDecimal('kpcCc91h6nE=', 1550, -1000, 1000),DecodeDecimal('kpcCc91h6nE=', 1550, -1000, 1000));
    question.answers.length = 0;
    question.num = 68;
    question.isSingleAns = false;
    question.shortTextQuestion = "There are ___ people here.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('YQ4ZHVFnjUk=', 1552, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('kpcCc91h6nE=', 1550, -9999, 99999), DecodeNumber('kpcCc91h6nE=', 1550, -9999, 99999), '');
    answer1.shortTextAnswer = "much";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Sx26wO+B64M=', 1554, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('k0x02ZUh0vY=', 1552, -9999, 99999), DecodeNumber('qBBWjKZtpQ4=', 1552, -9999, 99999), '');
    answer2.shortTextAnswer = "a lot of";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Sx26wO+B64M=', 1556, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('CwI75kV4lC0=', 1554, -9999, 99999), DecodeNumber('CwI75kV4lC0=', 1554, -9999, 99999), '');
    answer3.shortTextAnswer = "many";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('3nug0vrYBX8=', 1558, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('ULCuCKsGBAQ=', 1556, -9999, 99999), DecodeNumber('ULCuCKsGBAQ=', 1556, -9999, 99999), '');
    answer4.shortTextAnswer = "few";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion69()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 68;
    var weight = DecodeNumber('tNMcMHO47u0=', 1560, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('tNMcMHO47u0=', 1560, -1000, 1000),DecodeDecimal('cr9VyOflgc8=', 1560, -1000, 1000),DecodeDecimal('cr9VyOflgc8=', 1560, -1000, 1000));
    question.answers.length = 0;
    question.num = 69;
    question.isSingleAns = false;
    question.shortTextQuestion = "How ___ homework do you have?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('/ICPk8BSHOY=', 1562, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('hVvI1kROQuc=', 1560, -9999, 99999), DecodeNumber('cr9VyOflgc8=', 1560, -9999, 99999), '');
    answer1.shortTextAnswer = "much";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('/ICPk8BSHOY=', 1564, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('wD6Q0VAH968=', 1562, -9999, 99999), DecodeNumber('wD6Q0VAH968=', 1562, -9999, 99999), '');
    answer2.shortTextAnswer = "lot";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('pM0Vvg/1lVw=', 1566, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('Mf6xR9Qt+Qo=', 1564, -9999, 99999), DecodeNumber('Mf6xR9Qt+Qo=', 1564, -9999, 99999), '');
    answer3.shortTextAnswer = "many";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('n+/xasOYbd8=', 1568, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('PT3Kpbrxokg=', 1566, -9999, 99999), DecodeNumber('PT3Kpbrxokg=', 1566, -9999, 99999), '');
    answer4.shortTextAnswer = "few";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion70()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 69;
    var weight = DecodeNumber('bifKGjuzmxM=', 1570, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('bifKGjuzmxM=', 1570, -1000, 1000),DecodeDecimal('v+Z9mMa1YUo=', 1570, -1000, 1000),DecodeDecimal('v+Z9mMa1YUo=', 1570, -1000, 1000));
    question.answers.length = 0;
    question.num = 70;
    question.isSingleAns = false;
    question.shortTextQuestion = "They ate ___ food at the party.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('bifKGjuzmxM=', 1572, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('v+Z9mMa1YUo=', 1570, -9999, 99999), DecodeNumber('v+Z9mMa1YUo=', 1570, -9999, 99999), '');
    answer1.shortTextAnswer = "much";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('yutBErMlhtE=', 1574, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('rsIaE6+T6vU=', 1572, -9999, 99999), DecodeNumber('lxO/SUxqh/8=', 1572, -9999, 99999), '');
    answer2.shortTextAnswer = "lots of";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('yutBErMlhtE=', 1576, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('00zJTwBCQuI=', 1574, -9999, 99999), DecodeNumber('00zJTwBCQuI=', 1574, -9999, 99999), '');
    answer3.shortTextAnswer = "many";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('KYwuS2sDu4o=', 1578, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('trsRNznUWDI=', 1576, -9999, 99999), DecodeNumber('trsRNznUWDI=', 1576, -9999, 99999), '');
    answer4.shortTextAnswer = "few";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion71()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 70;
    var weight = DecodeNumber('AqgREPthgw0=', 1580, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('AqgREPthgw0=', 1580, -1000, 1000),DecodeDecimal('3GsWPqIpVg4=', 1580, -1000, 1000),DecodeDecimal('3GsWPqIpVg4=', 1580, -1000, 1000));
    question.answers.length = 0;
    question.num = 71;
    question.isSingleAns = false;
    question.shortTextQuestion = "I have ___ money left.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('AqgREPthgw0=', 1582, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('3GsWPqIpVg4=', 1580, -9999, 99999), DecodeNumber('3GsWPqIpVg4=', 1580, -9999, 99999), '');
    answer1.shortTextAnswer = "a few";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('lhg5OPl5JEw=', 1584, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('7YMRZ0g51qM=', 1582, -9999, 99999), DecodeNumber('7YMRZ0g51qM=', 1582, -9999, 99999), '');
    answer2.shortTextAnswer = "few";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('8HbXyle0PoA=', 1586, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('RjD3PKJt7Dg=', 1584, -9999, 99999), DecodeNumber('NX7R1hYeuOI=', 1584, -9999, 99999), '');
    answer3.shortTextAnswer = "a little";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('8HbXyle0PoA=', 1588, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('RcRp7nlgLyY=', 1586, -9999, 99999), DecodeNumber('RcRp7nlgLyY=', 1586, -9999, 99999), '');
    answer4.shortTextAnswer = "little";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion72()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 71;
    var weight = DecodeNumber('6VgLZKA3G10=', 1590, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('6VgLZKA3G10=', 1590, -1000, 1000),DecodeDecimal('Gb1wxYbH+y8=', 1590, -1000, 1000),DecodeDecimal('Gb1wxYbH+y8=', 1590, -1000, 1000));
    question.answers.length = 0;
    question.num = 72;
    question.isSingleAns = false;
    question.shortTextQuestion = "We need ___ sugar for the recipe.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('6VgLZKA3G10=', 1592, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('Gb1wxYbH+y8=', 1590, -9999, 99999), DecodeNumber('Gb1wxYbH+y8=', 1590, -9999, 99999), '');
    answer1.shortTextAnswer = "few";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Q+Ut3EkDdmE=', 1594, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('2u/HEkoIBL4=', 1592, -9999, 99999), DecodeNumber('OGD7YRFmxdo=', 1592, -9999, 99999), '');
    answer2.shortTextAnswer = "a little";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Q+Ut3EkDdmE=', 1596, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('Ly1+ZpITzMc=', 1594, -9999, 99999), DecodeNumber('Ly1+ZpITzMc=', 1594, -9999, 99999), '');
    answer3.shortTextAnswer = "a few";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('30aLXyjuc28=', 1598, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('oXiTc3DUma4=', 1596, -9999, 99999), DecodeNumber('oXiTc3DUma4=', 1596, -9999, 99999), '');
    answer4.shortTextAnswer = "little";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion73()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 72;
    var weight = DecodeNumber('nhCTWs9Agt0=', 1600, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('nhCTWs9Agt0=', 1600, -1000, 1000),DecodeDecimal('j62pMs3HiBE=', 1600, -1000, 1000),DecodeDecimal('j62pMs3HiBE=', 1600, -1000, 1000));
    question.answers.length = 0;
    question.num = 73;
    question.isSingleAns = false;
    question.shortTextQuestion = "She brought ___ snacks for the trip.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('nhCTWs9Agt0=', 1602, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('j62pMs3HiBE=', 1600, -9999, 99999), DecodeNumber('j62pMs3HiBE=', 1600, -9999, 99999), '');
    answer1.shortTextAnswer = "few";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('NabJVul9nrg=', 1604, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('DP0XP7GznOI=', 1602, -9999, 99999), DecodeNumber('DP0XP7GznOI=', 1602, -9999, 99999), '');
    answer2.shortTextAnswer = "little";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('t3Rm7g2lz74=', 1606, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('kOpDBasG+0c=', 1604, -9999, 99999), DecodeNumber('arYQPwxI/6s=', 1604, -9999, 99999), '');
    answer3.shortTextAnswer = "a few";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('t3Rm7g2lz74=', 1608, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('NLPwKbEEysE=', 1606, -9999, 99999), DecodeNumber('NLPwKbEEysE=', 1606, -9999, 99999), '');
    answer4.shortTextAnswer = "a little";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion74()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 73;
    var weight = DecodeNumber('b62bxdGpD8M=', 1610, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('b62bxdGpD8M=', 1610, -1000, 1000),DecodeDecimal('PqppqUrF8sg=', 1610, -1000, 1000),DecodeDecimal('PqppqUrF8sg=', 1610, -1000, 1000));
    question.answers.length = 0;
    question.num = 74;
    question.isSingleAns = false;
    question.shortTextQuestion = "There?s only ___ time left.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('b62bxdGpD8M=', 1612, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('PqppqUrF8sg=', 1610, -9999, 99999), DecodeNumber('PqppqUrF8sg=', 1610, -9999, 99999), '');
    answer1.shortTextAnswer = "a few";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('biHjnamrPY0=', 1614, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('cgoeLh/+AYE=', 1612, -9999, 99999), DecodeNumber('vWcRbIBZUqM=', 1612, -9999, 99999), '');
    answer2.shortTextAnswer = "a little";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('biHjnamrPY0=', 1616, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('xxNW8P02828=', 1614, -9999, 99999), DecodeNumber('xxNW8P02828=', 1614, -9999, 99999), '');
    answer3.shortTextAnswer = "few";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('sCbTrm4j7Xs=', 1618, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('RqVB1Y1GtQY=', 1616, -9999, 99999), DecodeNumber('RqVB1Y1GtQY=', 1616, -9999, 99999), '');
    answer4.shortTextAnswer = "many";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion75()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 74;
    var weight = DecodeNumber('+E434GpvHgU=', 1620, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('+E434GpvHgU=', 1620, -1000, 1000),DecodeDecimal('TvLgd8/QEHE=', 1620, -1000, 1000),DecodeDecimal('TvLgd8/QEHE=', 1620, -1000, 1000));
    question.answers.length = 0;
    question.num = 75;
    question.isSingleAns = false;
    question.shortTextQuestion = "___ child received a toy.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('+E434GpvHgU=', 1622, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('TvLgd8/QEHE=', 1620, -9999, 99999), DecodeNumber('TvLgd8/QEHE=', 1620, -9999, 99999), '');
    answer1.shortTextAnswer = "Every";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('KD0FSIur+ZI=', 1624, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('IEsgP0WDoLA=', 1622, -9999, 99999), DecodeNumber('IEsgP0WDoLA=', 1622, -9999, 99999), '');
    answer2.shortTextAnswer = "Both";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('F+zce6VQ3NM=', 1626, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('y1Xk/XEcCrw=', 1624, -9999, 99999), DecodeNumber('fN6lwEtUS9k=', 1624, -9999, 99999), '');
    answer3.shortTextAnswer = "Each";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('F+zce6VQ3NM=', 1628, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('Rs41Al9UkAc=', 1626, -9999, 99999), DecodeNumber('Rs41Al9UkAc=', 1626, -9999, 99999), '');
    answer4.shortTextAnswer = "Some";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion76()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 75;
    var weight = DecodeNumber('NXKiHHXa6qo=', 1630, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('NXKiHHXa6qo=', 1630, -1000, 1000),DecodeDecimal('EgNjQbJz8Iw=', 1630, -1000, 1000),DecodeDecimal('EgNjQbJz8Iw=', 1630, -1000, 1000));
    question.answers.length = 0;
    question.num = 76;
    question.isSingleAns = false;
    question.shortTextQuestion = "___ boy in the group is wearing a hat.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('NXKiHHXa6qo=', 1632, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('EgNjQbJz8Iw=', 1630, -9999, 99999), DecodeNumber('EgNjQbJz8Iw=', 1630, -9999, 99999), '');
    answer1.shortTextAnswer = "Both";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('KXHyBXKypJc=', 1634, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('0joxbzim+HU=', 1632, -9999, 99999), DecodeNumber('5MsVdc/7AMQ=', 1632, -9999, 99999), '');
    answer2.shortTextAnswer = "Every";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('KXHyBXKypJc=', 1636, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('mVs6RdjI6UM=', 1634, -9999, 99999), DecodeNumber('mVs6RdjI6UM=', 1634, -9999, 99999), '');
    answer3.shortTextAnswer = "Each";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('i7gAdJFex3M=', 1638, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('ZFDf616yqs4=', 1636, -9999, 99999), DecodeNumber('ZFDf616yqs4=', 1636, -9999, 99999), '');
    answer4.shortTextAnswer = "All";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion77()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 76;
    var weight = DecodeNumber('jh7dmCXTnrc=', 1640, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('jh7dmCXTnrc=', 1640, -1000, 1000),DecodeDecimal('WiRDSTTKhIw=', 1640, -1000, 1000),DecodeDecimal('WiRDSTTKhIw=', 1640, -1000, 1000));
    question.answers.length = 0;
    question.num = 77;
    question.isSingleAns = false;
    question.shortTextQuestion = "Do you have ___ questions?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('V9cUaT/P8S8=', 1642, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('2FoNzsPM14c=', 1640, -9999, 99999), DecodeNumber('WiRDSTTKhIw=', 1640, -9999, 99999), '');
    answer1.shortTextAnswer = "any";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('V9cUaT/P8S8=', 1644, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('ZzXRRQtQvHU=', 1642, -9999, 99999), DecodeNumber('ZzXRRQtQvHU=', 1642, -9999, 99999), '');
    answer2.shortTextAnswer = "no";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('wXslZ1NbH1A=', 1646, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('bZSPXOutsQQ=', 1644, -9999, 99999), DecodeNumber('bZSPXOutsQQ=', 1644, -9999, 99999), '');
    answer3.shortTextAnswer = "some";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('0OMiWZh6oM4=', 1648, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('JKsp9h+vdjc=', 1646, -9999, 99999), DecodeNumber('JKsp9h+vdjc=', 1646, -9999, 99999), '');
    answer4.shortTextAnswer = "none";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion78()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 77;
    var weight = DecodeNumber('rzF14L2wsFQ=', 1650, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('rzF14L2wsFQ=', 1650, -1000, 1000),DecodeDecimal('kF4JnfHKgGI=', 1650, -1000, 1000),DecodeDecimal('kF4JnfHKgGI=', 1650, -1000, 1000));
    question.answers.length = 0;
    question.num = 78;
    question.isSingleAns = false;
    question.shortTextQuestion = "I found ___ interesting articles online.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('8P7kga/zt+8=', 1652, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('83XEj3+eC5M=', 1650, -9999, 99999), DecodeNumber('kF4JnfHKgGI=', 1650, -9999, 99999), '');
    answer1.shortTextAnswer = "some";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('8P7kga/zt+8=', 1654, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('k0x02ZUh0vY=', 1652, -9999, 99999), DecodeNumber('k0x02ZUh0vY=', 1652, -9999, 99999), '');
    answer2.shortTextAnswer = "any";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Z/cBPedYy4s=', 1656, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('6PgGSWshA5o=', 1654, -9999, 99999), DecodeNumber('6PgGSWshA5o=', 1654, -9999, 99999), '');
    answer3.shortTextAnswer = "no";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('8YWvBCEAtn4=', 1658, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('+/9bePSHcAw=', 1656, -9999, 99999), DecodeNumber('+/9bePSHcAw=', 1656, -9999, 99999), '');
    answer4.shortTextAnswer = "none";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion79()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 78;
    var weight = DecodeNumber('tQC7OPQINZo=', 1660, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('tQC7OPQINZo=', 1660, -1000, 1000),DecodeDecimal('hVvI1kROQuc=', 1660, -1000, 1000),DecodeDecimal('hVvI1kROQuc=', 1660, -1000, 1000));
    question.answers.length = 0;
    question.num = 79;
    question.isSingleAns = false;
    question.shortTextQuestion = "My car is ___ fast ___ yours.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('tQC7OPQINZo=', 1662, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('hVvI1kROQuc=', 1660, -9999, 99999), DecodeNumber('hVvI1kROQuc=', 1660, -9999, 99999), '');
    answer1.shortTextAnswer = "more / than";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('kqbvtPYOcKA=', 1664, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('xinpcPzVgiQ=', 1662, -9999, 99999), DecodeNumber('xinpcPzVgiQ=', 1662, -9999, 99999), '');
    answer2.shortTextAnswer = "so / than";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Z+C1Mky9p6M=', 1666, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('eHrtd/BB154=', 1664, -9999, 99999), DecodeNumber('8eR9k7K+nSY=', 1664, -9999, 99999), '');
    answer3.shortTextAnswer = "as / as";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Z+C1Mky9p6M=', 1668, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('HtMxnge9EoY=', 1666, -9999, 99999), DecodeNumber('HtMxnge9EoY=', 1666, -9999, 99999), '');
    answer4.shortTextAnswer = "less / as";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion80()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 79;
    var weight = DecodeNumber('bcTVOvqRioY=', 1670, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('bcTVOvqRioY=', 1670, -1000, 1000),DecodeDecimal('4KSLJ+qA6TI=', 1670, -1000, 1000),DecodeDecimal('4KSLJ+qA6TI=', 1670, -1000, 1000));
    question.answers.length = 0;
    question.num = 80;
    question.isSingleAns = false;
    question.shortTextQuestion = "This is the ___ book I?ve ever read.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('bcTVOvqRioY=', 1672, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('4KSLJ+qA6TI=', 1670, -9999, 99999), DecodeNumber('4KSLJ+qA6TI=', 1670, -9999, 99999), '');
    answer1.shortTextAnswer = "better";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('iulPi5ug+to=', 1674, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('rsIaE6+T6vU=', 1672, -9999, 99999), DecodeNumber('rsIaE6+T6vU=', 1672, -9999, 99999), '');
    answer2.shortTextAnswer = "good";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('kdDJ4yCLz8M=', 1676, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('U41XS2bRi3Q=', 1674, -9999, 99999), DecodeNumber('pmLuxTGNosE=', 1674, -9999, 99999), '');
    answer3.shortTextAnswer = "best";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('kdDJ4yCLz8M=', 1678, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('K/kgbdBFmDs=', 1676, -9999, 99999), DecodeNumber('K/kgbdBFmDs=', 1676, -9999, 99999), '');
    answer4.shortTextAnswer = "most";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion81()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 80;
    var weight = DecodeNumber('YH1QfjN0XO8=', 1680, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('YH1QfjN0XO8=', 1680, -1000, 1000),DecodeDecimal('cOmsINa7r0A=', 1680, -1000, 1000),DecodeDecimal('cOmsINa7r0A=', 1680, -1000, 1000));
    question.answers.length = 0;
    question.num = 81;
    question.isSingleAns = false;
    question.shortTextQuestion = "It?s the ___ expensive hotel in town.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('YH1QfjN0XO8=', 1682, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('cOmsINa7r0A=', 1680, -9999, 99999), DecodeNumber('cOmsINa7r0A=', 1680, -9999, 99999), '');
    answer1.shortTextAnswer = "more";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ui7yhkSZ2JM=', 1684, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('tXBj14YiQuI=', 1682, -9999, 99999), DecodeNumber('tXBj14YiQuI=', 1682, -9999, 99999), '');
    answer2.shortTextAnswer = "much";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('qc571mTKrtg=', 1686, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('F080NodKRQk=', 1684, -9999, 99999), DecodeNumber('RjD3PKJt7Dg=', 1684, -9999, 99999), '');
    answer3.shortTextAnswer = "most";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('qc571mTKrtg=', 1688, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('LGIWSdIgrS0=', 1686, -9999, 99999), DecodeNumber('LGIWSdIgrS0=', 1686, -9999, 99999), '');
    answer4.shortTextAnswer = "many";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion82()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 81;
    var weight = DecodeNumber('+rOKZh9vtYA=', 1690, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('+rOKZh9vtYA=', 1690, -1000, 1000),DecodeDecimal('/JZCOq5Okd0=', 1690, -1000, 1000),DecodeDecimal('/JZCOq5Okd0=', 1690, -1000, 1000));
    question.answers.length = 0;
    question.num = 82;
    question.isSingleAns = false;
    question.shortTextQuestion = "He climbed the ___ mountain in Europe.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('+rOKZh9vtYA=', 1692, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('/JZCOq5Okd0=', 1690, -9999, 99999), DecodeNumber('/JZCOq5Okd0=', 1690, -9999, 99999), '');
    answer1.shortTextAnswer = "higher";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('p8QUHY9BbOQ=', 1694, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('2u/HEkoIBL4=', 1692, -9999, 99999), DecodeNumber('2u/HEkoIBL4=', 1692, -9999, 99999), '');
    answer2.shortTextAnswer = "high";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('3pTis60S1Cs=', 1696, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('Np19jXOvVIg=', 1694, -9999, 99999), DecodeNumber('0hW4QPhJoWs=', 1694, -9999, 99999), '');
    answer3.shortTextAnswer = "highest";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('3pTis60S1Cs=', 1698, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('/VDmCbQ18vY=', 1696, -9999, 99999), DecodeNumber('/VDmCbQ18vY=', 1696, -9999, 99999), '');
    answer4.shortTextAnswer = "most high";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}


/* Code generated function */
function ClearQuestion1()
{
    ClearFillTheGap(1,0);
    ClearFillTheGap(1,1);
    ClearFillTheGap(1,2);
    ClearFillTheGap(1,3);
    ClearFillTheGap(1,4);
    ClearFillTheGap(1,5);
    ClearFillTheGap(1,6);
    ClearFillTheGap(1,7);
    ClearFillTheGap(1,8);
    ClearFillTheGap(1,9);

}
/* Code generated function */
function ClearQuestion2()
{
    const questionIndex = 1;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion3()
{
    const questionIndex = 2;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion4()
{
    const questionIndex = 3;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion5()
{
    const questionIndex = 4;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion6()
{
    const questionIndex = 5;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion7()
{
    const questionIndex = 6;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion8()
{
    const questionIndex = 7;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion9()
{
    const questionIndex = 8;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion10()
{
    const questionIndex = 9;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion11()
{
    const questionIndex = 10;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion12()
{
    const questionIndex = 11;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion13()
{
    const questionIndex = 12;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion14()
{
    const questionIndex = 13;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion15()
{
    const questionIndex = 14;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion16()
{
    const questionIndex = 15;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion17()
{
    const questionIndex = 16;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion18()
{
    const questionIndex = 17;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion19()
{
    const questionIndex = 18;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion20()
{
    const questionIndex = 19;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion21()
{
    const questionIndex = 20;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion22()
{
    const questionIndex = 21;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion23()
{
    const questionIndex = 22;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion24()
{
    const questionIndex = 23;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion25()
{
    const questionIndex = 24;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion26()
{
    const questionIndex = 25;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion27()
{
    const questionIndex = 26;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion28()
{
    const questionIndex = 27;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion29()
{
    const questionIndex = 28;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion30()
{
    const questionIndex = 29;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion31()
{
    const questionIndex = 30;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion32()
{
    const questionIndex = 31;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion33()
{
    const questionIndex = 32;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion34()
{
    const questionIndex = 33;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion35()
{
    const questionIndex = 34;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion36()
{
    const questionIndex = 35;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion37()
{
    const questionIndex = 36;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion38()
{
    const questionIndex = 37;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion39()
{
    const questionIndex = 38;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion40()
{
    const questionIndex = 39;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion41()
{
    const questionIndex = 40;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion42()
{
    const questionIndex = 41;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion43()
{
    const questionIndex = 42;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion44()
{
    const questionIndex = 43;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion45()
{
    const questionIndex = 44;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion46()
{
    const questionIndex = 45;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion47()
{
    const questionIndex = 46;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion48()
{
    const questionIndex = 47;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion49()
{
    const questionIndex = 48;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion50()
{
    const questionIndex = 49;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion51()
{
    const questionIndex = 50;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion52()
{
    const questionIndex = 51;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion53()
{
    const questionIndex = 52;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion54()
{
    const questionIndex = 53;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion55()
{
    const questionIndex = 54;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion56()
{
    const questionIndex = 55;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion57()
{
    const questionIndex = 56;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion58()
{
    const questionIndex = 57;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion59()
{
    const questionIndex = 58;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion60()
{
    const questionIndex = 59;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion61()
{
    const questionIndex = 60;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion62()
{
    const questionIndex = 61;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion63()
{
    const questionIndex = 62;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion64()
{
    const questionIndex = 63;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion65()
{
    const questionIndex = 64;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion66()
{
    const questionIndex = 65;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion67()
{
    const questionIndex = 66;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion68()
{
    const questionIndex = 67;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion69()
{
    const questionIndex = 68;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion70()
{
    const questionIndex = 69;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion71()
{
    const questionIndex = 70;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion72()
{
    const questionIndex = 71;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion73()
{
    const questionIndex = 72;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion74()
{
    const questionIndex = 73;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion75()
{
    const questionIndex = 74;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion76()
{
    const questionIndex = 75;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion77()
{
    const questionIndex = 76;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion78()
{
    const questionIndex = 77;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion79()
{
    const questionIndex = 78;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion80()
{
    const questionIndex = 79;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion81()
{
    const questionIndex = 80;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion82()
{
    const questionIndex = 81;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}






