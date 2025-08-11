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
    var weight = DecodeNumber('YwSZvzfI4Xs=', 687, 0, 99999);
    var numOfAnswers = 10;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('WdMIYDVp3Po=', 687, -1000, 1000),DecodeDecimal('O++xcj9gwgM=', 687, -1000, 1000),DecodeDecimal('O++xcj9gwgM=', 687, -1000, 1000));
    question.num = 1;
    question.answers.length = 0;
    question.shortTextQuestion = "Town and Country";
    question.noChoice = false;
    choice = $('#idGap1_0').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('axTEiqaygvU='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap1_1').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('M0/NL9PdH+/CxYgC'));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap1_2').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('Szj0KgSjzTY='));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    choice = $('#idGap1_3').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('Mj9SJwvrJpcBeJt8'));
    var answer3 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer3);
    choice = $('#idGap1_4').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('vuIfrVd1ANI='));
    var answer4 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer4);
    choice = $('#idGap1_5').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('mAaj4IVipfU='));
    var answer5 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer5);
    choice = $('#idGap1_6').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('wwM3H3Xq348='));
    var answer6 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer6);
    choice = $('#idGap1_7').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('ZCIs9O4tCUg='));
    var answer7 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer7);
    choice = $('#idGap1_8').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('+uQPJR0yuJI='));
    var answer8 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer8);
    choice = $('#idGap1_9').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('Vuh0klFdRET4ExPN'));
    var answer9 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer9);
    return question;

}
/* Code generated function */
function InitQuestion2()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 1;
    var weight = DecodeNumber('/XGqhXzA6ak=', 697, 0, 99999);
    var numOfAnswers = 10;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('frPwol8PWBo=', 697, -1000, 1000),DecodeDecimal('YwSZvzfI4Xs=', 697, -1000, 1000),DecodeDecimal('YwSZvzfI4Xs=', 697, -1000, 1000));
    question.num = 2;
    question.answers.length = 0;
    question.shortTextQuestion = "Family and Friends (People and Relationships)";
    question.noChoice = false;
    choice = $('#idGap2_0').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('i8hFps4NYYU='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap2_1').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('Jna6/lh8NQg='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap2_2').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('M3Y5r2gK64mkR/ak'));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    choice = $('#idGap2_3').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('2lO6Nb+v0dg='));
    var answer3 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer3);
    choice = $('#idGap2_4').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('aSJqMUkH1DY='));
    var answer4 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer4);
    choice = $('#idGap2_5').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('j9QVM2hsyyo='));
    var answer5 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer5);
    choice = $('#idGap2_6').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('RFghr+Ot+WM='));
    var answer6 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer6);
    choice = $('#idGap2_7').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('zINfRmNmbMQ='));
    var answer7 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer7);
    choice = $('#idGap2_8').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('BjXwcZ8uZVU='));
    var answer8 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer8);
    choice = $('#idGap2_9').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('oWXXIgPWyzheombaSuuI0Q=='));
    var answer9 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer9);
    return question;

}
/* Code generated function */
function InitQuestion3()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 2;
    var weight = DecodeNumber('5+/EsSnmY/A=', 65, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('5+/EsSnmY/A=', 65, -1000, 1000),DecodeDecimal('8lZ+SsPoT1I=', 65, -1000, 1000),DecodeDecimal('8lZ+SsPoT1I=', 65, -1000, 1000));
    question.answers.length = 0;
    question.num = 3;
    question.isSingleAns = false;
    question.shortTextQuestion = "Select the subject pronoun: ___ play football every weekend.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('5+/EsSnmY/A=', 67, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('8lZ+SsPoT1I=', 65, -9999, 99999), DecodeNumber('8lZ+SsPoT1I=', 65, -9999, 99999), '');
    answer1.shortTextAnswer = "Us";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('zzvkpV2AmFk=', 69, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('c6ek4+UtSZw=', 67, -9999, 99999), DecodeNumber('49OzZys/Nf8=', 67, -9999, 99999), '');
    answer2.shortTextAnswer = "They";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('zzvkpV2AmFk=', 71, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('mzZl86g63sc=', 69, -9999, 99999), DecodeNumber('mzZl86g63sc=', 69, -9999, 99999), '');
    answer3.shortTextAnswer = "Them";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('XEoKRw2p7s0=', 73, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('r1A8wqviWJE=', 71, -9999, 99999), DecodeNumber('r1A8wqviWJE=', 71, -9999, 99999), '');
    answer4.shortTextAnswer = "Him";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion4()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 3;
    var weight = DecodeNumber('PSFif9F8HUM=', 75, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('PSFif9F8HUM=', 75, -1000, 1000),DecodeDecimal('M5pYwkOqbi8=', 75, -1000, 1000),DecodeDecimal('M5pYwkOqbi8=', 75, -1000, 1000));
    question.answers.length = 0;
    question.num = 4;
    question.isSingleAns = false;
    question.shortTextQuestion = "Choose the right option: This gift is for ___.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('PSFif9F8HUM=', 77, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('M5pYwkOqbi8=', 75, -9999, 99999), DecodeNumber('M5pYwkOqbi8=', 75, -9999, 99999), '');
    answer1.shortTextAnswer = "I";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ZPRdooSQd1I=', 79, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('NFlXknj9Tcs=', 77, -9999, 99999), DecodeNumber('fhScPNgN3vM=', 77, -9999, 99999), '');
    answer2.shortTextAnswer = "me";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ZPRdooSQd1I=', 81, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('X89JHfo0lIo=', 79, -9999, 99999), DecodeNumber('X89JHfo0lIo=', 79, -9999, 99999), '');
    answer3.shortTextAnswer = "we";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('2zY6AwblC2I=', 83, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('D2SoofWJkXY=', 81, -9999, 99999), DecodeNumber('D2SoofWJkXY=', 81, -9999, 99999), '');
    answer4.shortTextAnswer = "she";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion5()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 4;
    var weight = DecodeNumber('ztYn8Nv7Kh0=', 85, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ztYn8Nv7Kh0=', 85, -1000, 1000),DecodeDecimal('odwZZCNYfUM=', 85, -1000, 1000),DecodeDecimal('odwZZCNYfUM=', 85, -1000, 1000));
    question.answers.length = 0;
    question.num = 5;
    question.isSingleAns = false;
    question.shortTextQuestion = "What?s the correct pronoun: Can you help ___?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('ztYn8Nv7Kh0=', 87, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('odwZZCNYfUM=', 85, -9999, 99999), DecodeNumber('odwZZCNYfUM=', 85, -9999, 99999), '');
    answer1.shortTextAnswer = "I";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('5V/+FOyuryQ=', 89, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('9teQwt3kI30=', 87, -9999, 99999), DecodeNumber('IyNA32p2xpE=', 87, -9999, 99999), '');
    answer2.shortTextAnswer = "me";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('5V/+FOyuryQ=', 91, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('SN3hFPRNhvo=', 89, -9999, 99999), DecodeNumber('SN3hFPRNhvo=', 89, -9999, 99999), '');
    answer3.shortTextAnswer = "we";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('FDqqzhMTHH8=', 93, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('EbckYDtXTVM=', 91, -9999, 99999), DecodeNumber('EbckYDtXTVM=', 91, -9999, 99999), '');
    answer4.shortTextAnswer = "mine";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion6()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 5;
    var weight = DecodeNumber('VRmMXCJU6p8=', 95, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('VRmMXCJU6p8=', 95, -1000, 1000),DecodeDecimal('aG3QloDJDs0=', 95, -1000, 1000),DecodeDecimal('aG3QloDJDs0=', 95, -1000, 1000));
    question.answers.length = 0;
    question.num = 6;
    question.isSingleAns = false;
    question.shortTextQuestion = "Choose the object pronoun: John saw __ at the party.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('+KAu1Pd8PDg=', 97, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('GnI8RKIXjM8=', 95, -9999, 99999), DecodeNumber('aG3QloDJDs0=', 95, -9999, 99999), '');
    answer1.shortTextAnswer = "us";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('+KAu1Pd8PDg=', 99, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('8uXhQp0oT4I=', 97, -9999, 99999), DecodeNumber('8uXhQp0oT4I=', 97, -9999, 99999), '');
    answer2.shortTextAnswer = "we";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('soeUcwSQQ0o=', 101, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('9D6eK5lzwi8=', 99, -9999, 99999), DecodeNumber('9D6eK5lzwi8=', 99, -9999, 99999), '');
    answer3.shortTextAnswer = "they";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Vjw1uDopqA0=', 103, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('+gzeeTJpxTg=', 101, -9999, 99999), DecodeNumber('+gzeeTJpxTg=', 101, -9999, 99999), '');
    answer4.shortTextAnswer = "I";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion7()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 6;
    var weight = DecodeNumber('RZsVsjUBtrw=', 105, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('RZsVsjUBtrw=', 105, -1000, 1000),DecodeDecimal('TPCvRMEujYk=', 105, -1000, 1000),DecodeDecimal('TPCvRMEujYk=', 105, -1000, 1000));
    question.answers.length = 0;
    question.num = 7;
    question.isSingleAns = false;
    question.shortTextQuestion = "What number comes after twelve?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('RZsVsjUBtrw=', 107, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('TPCvRMEujYk=', 105, -9999, 99999), DecodeNumber('TPCvRMEujYk=', 105, -9999, 99999), '');
    answer1.shortTextAnswer = "ten";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('MzviigB20sk=', 109, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('3hq9QTQVwzs=', 107, -9999, 99999), DecodeNumber('S4oXZN056aw=', 107, -9999, 99999), '');
    answer2.shortTextAnswer = "thirteen";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('MzviigB20sk=', 111, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('GMkH0csy/5s=', 109, -9999, 99999), DecodeNumber('GMkH0csy/5s=', 109, -9999, 99999), '');
    answer3.shortTextAnswer = "eleven";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('KU0n6gbd8CQ=', 113, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('DhIJRd0noTY=', 111, -9999, 99999), DecodeNumber('DhIJRd0noTY=', 111, -9999, 99999), '');
    answer4.shortTextAnswer = "fourteen";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion8()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 7;
    var weight = DecodeNumber('Tl8k9GHpBW4=', 115, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Tl8k9GHpBW4=', 115, -1000, 1000),DecodeDecimal('lB+gxrQBhsw=', 115, -1000, 1000),DecodeDecimal('lB+gxrQBhsw=', 115, -1000, 1000));
    question.answers.length = 0;
    question.num = 8;
    question.isSingleAns = false;
    question.shortTextQuestion = "What time is it? 7:15";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('eldBOm53fpg=', 117, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('hdvPGCcMtfU=', 115, -9999, 99999), DecodeNumber('lB+gxrQBhsw=', 115, -9999, 99999), '');
    answer1.shortTextAnswer = "Quarter past seven";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('eldBOm53fpg=', 119, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('r56EJJKtD5Y=', 117, -9999, 99999), DecodeNumber('r56EJJKtD5Y=', 117, -9999, 99999), '');
    answer2.shortTextAnswer = "Quarter to seven";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ZQOvBhYoPJg=', 121, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('OFV8Ie1scqo=', 119, -9999, 99999), DecodeNumber('OFV8Ie1scqo=', 119, -9999, 99999), '');
    answer3.shortTextAnswer = "Seven thirty";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('l+gnUH4x8q0=', 123, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('nOEn6GljiKc=', 121, -9999, 99999), DecodeNumber('nOEn6GljiKc=', 121, -9999, 99999), '');
    answer4.shortTextAnswer = "Half past seven";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion9()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 8;
    var weight = DecodeNumber('Lx2gBCG9sHE=', 125, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Lx2gBCG9sHE=', 125, -1000, 1000),DecodeDecimal('XLe4kv2CCB8=', 125, -1000, 1000),DecodeDecimal('XLe4kv2CCB8=', 125, -1000, 1000));
    question.answers.length = 0;
    question.num = 9;
    question.isSingleAns = false;
    question.shortTextQuestion = "___ is your name?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Z+m//Nt3KFs=', 127, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('Ev0H6XoVPho=', 125, -9999, 99999), DecodeNumber('XLe4kv2CCB8=', 125, -9999, 99999), '');
    answer1.shortTextAnswer = "What";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Z+m//Nt3KFs=', 129, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('x76PEJWiCyE=', 127, -9999, 99999), DecodeNumber('x76PEJWiCyE=', 127, -9999, 99999), '');
    answer2.shortTextAnswer = "Where";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('0Y1gMQeCz0s=', 131, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('hRdNBXgOKTY=', 129, -9999, 99999), DecodeNumber('hRdNBXgOKTY=', 129, -9999, 99999), '');
    answer3.shortTextAnswer = "Why";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('sLql+0LiVKU=', 133, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('xVZGt9oJf8Q=', 131, -9999, 99999), DecodeNumber('xVZGt9oJf8Q=', 131, -9999, 99999), '');
    answer4.shortTextAnswer = "Who";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion10()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 9;
    var weight = DecodeNumber('NuLrUIWg3Vk=', 135, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('NuLrUIWg3Vk=', 135, -1000, 1000),DecodeDecimal('nPlDKCA1/ls=', 135, -1000, 1000),DecodeDecimal('nPlDKCA1/ls=', 135, -1000, 1000));
    question.answers.length = 0;
    question.num = 10;
    question.isSingleAns = false;
    question.shortTextQuestion = "___ are they arriving?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('NuLrUIWg3Vk=', 137, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('nPlDKCA1/ls=', 135, -9999, 99999), DecodeNumber('nPlDKCA1/ls=', 135, -9999, 99999), '');
    answer1.shortTextAnswer = "Why";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('3EpQDr2CryM=', 139, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('CAQDw127gi0=', 137, -9999, 99999), DecodeNumber('CAQDw127gi0=', 137, -9999, 99999), '');
    answer2.shortTextAnswer = "Where";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('GLTPTo4BUYQ=', 141, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('DTcLEWasRjk=', 139, -9999, 99999), DecodeNumber('DTcLEWasRjk=', 139, -9999, 99999), '');
    answer3.shortTextAnswer = "Who";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('g7BymXPFbxk=', 143, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('kTdzYJ/zjPM=', 141, -9999, 99999), DecodeNumber('GcNSY1sRhpo=', 141, -9999, 99999), '');
    answer4.shortTextAnswer = "When";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion11()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 10;
    var weight = DecodeNumber('kcZuDanVSqE=', 145, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('kcZuDanVSqE=', 145, -1000, 1000),DecodeDecimal('3i+0sphDyrI=', 145, -1000, 1000),DecodeDecimal('3i+0sphDyrI=', 145, -1000, 1000));
    question.answers.length = 0;
    question.num = 11;
    question.isSingleAns = false;
    question.shortTextQuestion = "___ do you go to school?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('kcZuDanVSqE=', 147, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('3i+0sphDyrI=', 145, -9999, 99999), DecodeNumber('3i+0sphDyrI=', 145, -9999, 99999), '');
    answer1.shortTextAnswer = "Who";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('32xf6dCHMQE=', 149, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('LS9rBtFMjMA=', 147, -9999, 99999), DecodeNumber('LS9rBtFMjMA=', 147, -9999, 99999), '');
    answer2.shortTextAnswer = "Why";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('n09xSLNJZRs=', 151, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('0HYTyqWI6E8=', 149, -9999, 99999), DecodeNumber('EBKhBthIL/M=', 149, -9999, 99999), '');
    answer3.shortTextAnswer = "How";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('n09xSLNJZRs=', 153, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('zxpHJ5chyPo=', 151, -9999, 99999), DecodeNumber('zxpHJ5chyPo=', 151, -9999, 99999), '');
    answer4.shortTextAnswer = "What";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion12()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 11;
    var weight = DecodeNumber('HdR25jKlI3o=', 155, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('HdR25jKlI3o=', 155, -1000, 1000),DecodeDecimal('v9QZ8S/Ad9w=', 155, -1000, 1000),DecodeDecimal('v9QZ8S/Ad9w=', 155, -1000, 1000));
    question.answers.length = 0;
    question.num = 12;
    question.isSingleAns = false;
    question.shortTextQuestion = "What is the plural of 'child'?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('HdR25jKlI3o=', 157, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('v9QZ8S/Ad9w=', 155, -9999, 99999), DecodeNumber('v9QZ8S/Ad9w=', 155, -9999, 99999), '');
    answer1.shortTextAnswer = "childs";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('4iOh8oSRK+E=', 159, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('x6x3zaNO2Mo=', 157, -9999, 99999), DecodeNumber('x6x3zaNO2Mo=', 157, -9999, 99999), '');
    answer2.shortTextAnswer = "childrens";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('9j8gE5MKaVU=', 161, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('V/lZieaJOY8=', 159, -9999, 99999), DecodeNumber('V/lZieaJOY8=', 159, -9999, 99999), '');
    answer3.shortTextAnswer = "childes";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('fugWpbq+UHE=', 163, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('h0UGI6xbdn0=', 161, -9999, 99999), DecodeNumber('1ae3X1phxE8=', 161, -9999, 99999), '');
    answer4.shortTextAnswer = "children";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion13()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 12;
    var weight = DecodeNumber('EcINtxMnok0=', 165, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('EcINtxMnok0=', 165, -1000, 1000),DecodeDecimal('uQim10aRT6M=', 165, -1000, 1000),DecodeDecimal('uQim10aRT6M=', 165, -1000, 1000));
    question.answers.length = 0;
    question.num = 13;
    question.isSingleAns = false;
    question.shortTextQuestion = "Select the correct plural: 'tomato'";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('EcINtxMnok0=', 167, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('uQim10aRT6M=', 165, -9999, 99999), DecodeNumber('uQim10aRT6M=', 165, -9999, 99999), '');
    answer1.shortTextAnswer = "tomatos";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('OlzHjUVXTc4=', 169, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('faotL+wfE18=', 167, -9999, 99999), DecodeNumber('c6ek4+UtSZw=', 167, -9999, 99999), '');
    answer2.shortTextAnswer = "tomatoes";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('OlzHjUVXTc4=', 171, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('4Kqa3yRYl4o=', 169, -9999, 99999), DecodeNumber('4Kqa3yRYl4o=', 169, -9999, 99999), '');
    answer3.shortTextAnswer = "tomatoe";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('MZsW/lQMWcY=', 173, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('MHxjKn3rf/Y=', 171, -9999, 99999), DecodeNumber('MHxjKn3rf/Y=', 171, -9999, 99999), '');
    answer4.shortTextAnswer = "tomatoies";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion14()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 13;
    var weight = DecodeNumber('x7oG848u14g=', 175, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('x7oG848u14g=', 175, -1000, 1000),DecodeDecimal('9sJ5THRoDvE=', 175, -1000, 1000),DecodeDecimal('9sJ5THRoDvE=', 175, -1000, 1000));
    question.answers.length = 0;
    question.num = 14;
    question.isSingleAns = false;
    question.shortTextQuestion = "Which of the following is correct?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('x7oG848u14g=', 177, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('9sJ5THRoDvE=', 175, -9999, 99999), DecodeNumber('9sJ5THRoDvE=', 175, -9999, 99999), '');
    answer1.shortTextAnswer = "sheeps";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('K3VBYcEMHOg=', 179, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('6otbKsvHUH8=', 177, -9999, 99999), DecodeNumber('NFlXknj9Tcs=', 177, -9999, 99999), '');
    answer2.shortTextAnswer = "sheep";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('K3VBYcEMHOg=', 181, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('Ag191bL7Jqo=', 179, -9999, 99999), DecodeNumber('Ag191bL7Jqo=', 179, -9999, 99999), '');
    answer3.shortTextAnswer = "sheepes";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('4PUoOU6AEtY=', 183, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('c6Cz+PunEFM=', 181, -9999, 99999), DecodeNumber('c6Cz+PunEFM=', 181, -9999, 99999), '');
    answer4.shortTextAnswer = "sheepen";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion15()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 14;
    var weight = DecodeNumber('nHNVnt0O+Bw=', 185, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('nHNVnt0O+Bw=', 185, -1000, 1000),DecodeDecimal('9rgP4In3iKo=', 185, -1000, 1000),DecodeDecimal('9rgP4In3iKo=', 185, -1000, 1000));
    question.answers.length = 0;
    question.num = 15;
    question.isSingleAns = false;
    question.shortTextQuestion = "That is ___ dog.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('nHNVnt0O+Bw=', 187, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('9rgP4In3iKo=', 185, -9999, 99999), DecodeNumber('9rgP4In3iKo=', 185, -9999, 99999), '');
    answer1.shortTextAnswer = "them";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('qdzeLDuAlUA=', 189, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('Lbts8xYUzrg=', 187, -9999, 99999), DecodeNumber('9teQwt3kI30=', 187, -9999, 99999), '');
    answer2.shortTextAnswer = "their";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('qdzeLDuAlUA=', 191, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('f1Ghb6l5tAY=', 189, -9999, 99999), DecodeNumber('f1Ghb6l5tAY=', 189, -9999, 99999), '');
    answer3.shortTextAnswer = "they";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('K1ol4PVPwb0=', 193, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('g8kAGjaKV7E=', 191, -9999, 99999), DecodeNumber('g8kAGjaKV7E=', 191, -9999, 99999), '');
    answer4.shortTextAnswer = "theirs";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion16()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 15;
    var weight = DecodeNumber('J6uNQFAnRk0=', 195, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('J6uNQFAnRk0=', 195, -1000, 1000),DecodeDecimal('GnI8RKIXjM8=', 195, -1000, 1000),DecodeDecimal('GnI8RKIXjM8=', 195, -1000, 1000));
    question.answers.length = 0;
    question.num = 16;
    question.isSingleAns = false;
    question.shortTextQuestion = "This is not my phone. It?s ___";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('J6uNQFAnRk0=', 197, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('GnI8RKIXjM8=', 195, -9999, 99999), DecodeNumber('GnI8RKIXjM8=', 195, -9999, 99999), '');
    answer1.shortTextAnswer = "her";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Q428r0c+9SE=', 199, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('HMt2eFXDgZE=', 197, -9999, 99999), DecodeNumber('HMt2eFXDgZE=', 197, -9999, 99999), '');
    answer2.shortTextAnswer = "she";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('EDMOPHoGGgk=', 201, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('eAlzdCFXtic=', 199, -9999, 99999), DecodeNumber('eAlzdCFXtic=', 199, -9999, 99999), '');
    answer3.shortTextAnswer = "his";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('P6WP0KWXTtE=', 203, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('vRLtemdjvFY=', 201, -9999, 99999), DecodeNumber('jgLQDzuyQmU=', 201, -9999, 99999), '');
    answer4.shortTextAnswer = "hers";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion17()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 16;
    var weight = DecodeNumber('JwrhKhKLeII=', 205, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('JwrhKhKLeII=', 205, -1000, 1000),DecodeDecimal('ZS8DvQT27kc=', 205, -1000, 1000),DecodeDecimal('ZS8DvQT27kc=', 205, -1000, 1000));
    question.answers.length = 0;
    question.num = 17;
    question.isSingleAns = false;
    question.shortTextQuestion = "They took ___ seats.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('w8ht9EMOTSQ=', 207, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('K9rE7+vA2J4=', 205, -9999, 99999), DecodeNumber('ZS8DvQT27kc=', 205, -9999, 99999), '');
    answer1.shortTextAnswer = "their";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('w8ht9EMOTSQ=', 209, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('3hq9QTQVwzs=', 207, -9999, 99999), DecodeNumber('3hq9QTQVwzs=', 207, -9999, 99999), '');
    answer2.shortTextAnswer = "theirs";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('S995u5K0L74=', 211, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('tqIIKmyLUZo=', 209, -9999, 99999), DecodeNumber('tqIIKmyLUZo=', 209, -9999, 99999), '');
    answer3.shortTextAnswer = "they";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('a36yfRyPpIM=', 213, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('B4ywKfuxvJY=', 211, -9999, 99999), DecodeNumber('B4ywKfuxvJY=', 211, -9999, 99999), '');
    answer4.shortTextAnswer = "them";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion18()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 17;
    var weight = DecodeNumber('OF5MvEe5Nys=', 215, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('OF5MvEe5Nys=', 215, -1000, 1000),DecodeDecimal('hdvPGCcMtfU=', 215, -1000, 1000),DecodeDecimal('hdvPGCcMtfU=', 215, -1000, 1000));
    question.answers.length = 0;
    question.num = 18;
    question.isSingleAns = false;
    question.shortTextQuestion = "I forgot ___ umbrella at home.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('OF5MvEe5Nys=', 217, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('hdvPGCcMtfU=', 215, -9999, 99999), DecodeNumber('hdvPGCcMtfU=', 215, -9999, 99999), '');
    answer1.shortTextAnswer = "mine";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('uqGGx1DDbTw=', 219, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('byBccY997nI=', 217, -9999, 99999), DecodeNumber('byBccY997nI=', 217, -9999, 99999), '');
    answer2.shortTextAnswer = "me";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('MvabGfe094Q=', 221, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('QJV/bm/xR/I=', 219, -9999, 99999), DecodeNumber('QJV/bm/xR/I=', 219, -9999, 99999), '');
    answer3.shortTextAnswer = "I";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('ZgzdudfxqBw=', 223, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('06hAk3x876M=', 221, -9999, 99999), DecodeNumber('pw55ePLkyek=', 221, -9999, 99999), '');
    answer4.shortTextAnswer = "my";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion19()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 18;
    var weight = DecodeNumber('UMNBcOWv18Q=', 225, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('UMNBcOWv18Q=', 225, -1000, 1000),DecodeDecimal('Ev0H6XoVPho=', 225, -1000, 1000),DecodeDecimal('Ev0H6XoVPho=', 225, -1000, 1000));
    question.answers.length = 0;
    question.num = 19;
    question.isSingleAns = false;
    question.shortTextQuestion = "Is this ___ bag?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('hlXiLlseSFo=', 227, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('Jf93DrmbuBQ=', 225, -9999, 99999), DecodeNumber('Ev0H6XoVPho=', 225, -9999, 99999), '');
    answer1.shortTextAnswer = "Ann's";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('hlXiLlseSFo=', 229, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('6nilccIqbvk=', 227, -9999, 99999), DecodeNumber('6nilccIqbvk=', 227, -9999, 99999), '');
    answer2.shortTextAnswer = "Ann";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('t1WFTpXAO8o=', 231, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('JTnhYP3Rono=', 229, -9999, 99999), DecodeNumber('JTnhYP3Rono=', 229, -9999, 99999), '');
    answer3.shortTextAnswer = "Ann'";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('8iWBK+nCxoI=', 233, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('0eFvGlCmjk4=', 231, -9999, 99999), DecodeNumber('0eFvGlCmjk4=', 231, -9999, 99999), '');
    answer4.shortTextAnswer = "Anns";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion20()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 19;
    var weight = DecodeNumber('cXdqEXgLbws=', 235, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('cXdqEXgLbws=', 235, -1000, 1000),DecodeDecimal('/6V+uHmMP/4=', 235, -1000, 1000),DecodeDecimal('/6V+uHmMP/4=', 235, -1000, 1000));
    question.answers.length = 0;
    question.num = 20;
    question.isSingleAns = false;
    question.shortTextQuestion = "___ house is big.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('cXdqEXgLbws=', 237, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('/6V+uHmMP/4=', 235, -9999, 99999), DecodeNumber('/6V+uHmMP/4=', 235, -9999, 99999), '');
    answer1.shortTextAnswer = "My parents";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('T2htd9Bwz+o=', 239, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('DWQYkdh84UM=', 237, -9999, 99999), DecodeNumber('DWQYkdh84UM=', 237, -9999, 99999), '');
    answer2.shortTextAnswer = "My parents'";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('o3SbQw8Xl7k=', 241, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('1QYCGQvgKAE=', 239, -9999, 99999), DecodeNumber('1QYCGQvgKAE=', 239, -9999, 99999), '');
    answer3.shortTextAnswer = "My parent";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('c/5zk54FKfw=', 243, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('Vbz6o6EmfWI=', 241, -9999, 99999), DecodeNumber('kTdzYJ/zjPM=', 241, -9999, 99999), '');
    answer4.shortTextAnswer = "My parent's";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion21()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 20;
    var weight = DecodeNumber('NfHtYdWIS54=', 245, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('NfHtYdWIS54=', 245, -1000, 1000),DecodeDecimal('u4QBlwbNi9A=', 245, -1000, 1000),DecodeDecimal('u4QBlwbNi9A=', 245, -1000, 1000));
    question.answers.length = 0;
    question.num = 21;
    question.isSingleAns = false;
    question.shortTextQuestion = "These are the ___ books.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('0qQyFnAyW1E=', 247, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('4VxDdwC1YNk=', 245, -9999, 99999), DecodeNumber('u4QBlwbNi9A=', 245, -9999, 99999), '');
    answer1.shortTextAnswer = "children's";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('0qQyFnAyW1E=', 249, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('zIe6yic7A24=', 247, -9999, 99999), DecodeNumber('zIe6yic7A24=', 247, -9999, 99999), '');
    answer2.shortTextAnswer = "childrens";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('o/TguCOfbmQ=', 251, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('0HYTyqWI6E8=', 249, -9999, 99999), DecodeNumber('0HYTyqWI6E8=', 249, -9999, 99999), '');
    answer3.shortTextAnswer = "child";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('1VRhgH6DZrI=', 253, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('/6HqSDX/uwM=', 251, -9999, 99999), DecodeNumber('/6HqSDX/uwM=', 251, -9999, 99999), '');
    answer4.shortTextAnswer = "childrens'";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion22()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 21;
    var weight = DecodeNumber('Va+XVhPcASA=', 255, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Va+XVhPcASA=', 255, -1000, 1000),DecodeDecimal('8jlwbcHnTa0=', 255, -1000, 1000),DecodeDecimal('8jlwbcHnTa0=', 255, -1000, 1000));
    question.answers.length = 0;
    question.num = 22;
    question.isSingleAns = false;
    question.shortTextQuestion = "We go to school ___ the morning.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Va+XVhPcASA=', 257, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('8jlwbcHnTa0=', 255, -9999, 99999), DecodeNumber('8jlwbcHnTa0=', 255, -9999, 99999), '');
    answer1.shortTextAnswer = "on";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('5J67aQEqCgo=', 259, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('3pEEQZnCUUE=', 257, -9999, 99999), DecodeNumber('V4uyn/+4E04=', 257, -9999, 99999), '');
    answer2.shortTextAnswer = "in";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('5J67aQEqCgo=', 261, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('v9ewvo9Ur20=', 259, -9999, 99999), DecodeNumber('v9ewvo9Ur20=', 259, -9999, 99999), '');
    answer3.shortTextAnswer = "by";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('BMoyzAMdOrA=', 263, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('h0UGI6xbdn0=', 261, -9999, 99999), DecodeNumber('h0UGI6xbdn0=', 261, -9999, 99999), '');
    answer4.shortTextAnswer = "at";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion23()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 22;
    var weight = DecodeNumber('JGq5NWUjJGo=', 265, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('JGq5NWUjJGo=', 265, -1000, 1000),DecodeDecimal('BtMSNCWeV9U=', 265, -1000, 1000),DecodeDecimal('BtMSNCWeV9U=', 265, -1000, 1000));
    question.answers.length = 0;
    question.num = 23;
    question.isSingleAns = false;
    question.shortTextQuestion = "He was born ___ 1995.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('JGq5NWUjJGo=', 267, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('BtMSNCWeV9U=', 265, -9999, 99999), DecodeNumber('BtMSNCWeV9U=', 265, -9999, 99999), '');
    answer1.shortTextAnswer = "at";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('cIObg5suPE8=', 269, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('faotL+wfE18=', 267, -9999, 99999), DecodeNumber('faotL+wfE18=', 267, -9999, 99999), '');
    answer2.shortTextAnswer = "on";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('23U+xUTe1u8=', 271, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('pu5rrStiv+M=', 269, -9999, 99999), DecodeNumber('pu5rrStiv+M=', 269, -9999, 99999), '');
    answer3.shortTextAnswer = "by";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('qIkfL4+XKfA=', 273, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('IQwBBkmS61k=', 271, -9999, 99999), DecodeNumber('xbqg1prqWAU=', 271, -9999, 99999), '');
    answer4.shortTextAnswer = "in";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion24()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 23;
    var weight = DecodeNumber('DIJ1w1Ue/x0=', 275, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('DIJ1w1Ue/x0=', 275, -1000, 1000),DecodeDecimal('qYXlIg4K6i8=', 275, -1000, 1000),DecodeDecimal('qYXlIg4K6i8=', 275, -1000, 1000));
    question.answers.length = 0;
    question.num = 24;
    question.isSingleAns = false;
    question.shortTextQuestion = "The book is ___ the bag.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('v8lVqOS+jIo=', 277, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('8I50vYavLQQ=', 275, -9999, 99999), DecodeNumber('qYXlIg4K6i8=', 275, -9999, 99999), '');
    answer1.shortTextAnswer = "in";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('v8lVqOS+jIo=', 279, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('6otbKsvHUH8=', 277, -9999, 99999), DecodeNumber('6otbKsvHUH8=', 277, -9999, 99999), '');
    answer2.shortTextAnswer = "on";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('/GeAPho9HgM=', 281, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('91tKDwvmglU=', 279, -9999, 99999), DecodeNumber('91tKDwvmglU=', 279, -9999, 99999), '');
    answer3.shortTextAnswer = "over";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('1aGnGjo0JPs=', 283, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('rBFvbJkutzY=', 281, -9999, 99999), DecodeNumber('rBFvbJkutzY=', 281, -9999, 99999), '');
    answer4.shortTextAnswer = "under";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion25()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 24;
    var weight = DecodeNumber('jAu14k9e/YA=', 285, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('jAu14k9e/YA=', 285, -1000, 1000),DecodeDecimal('fKA6DQx/UbM=', 285, -1000, 1000),DecodeDecimal('fKA6DQx/UbM=', 285, -1000, 1000));
    question.answers.length = 0;
    question.num = 25;
    question.isSingleAns = false;
    question.shortTextQuestion = "He ___ like coffee.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('jAu14k9e/YA=', 287, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('fKA6DQx/UbM=', 285, -9999, 99999), DecodeNumber('fKA6DQx/UbM=', 285, -9999, 99999), '');
    answer1.shortTextAnswer = "don't";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('aLJrJdIICmw=', 289, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('yvG4gYU8kKc=', 287, -9999, 99999), DecodeNumber('Lbts8xYUzrg=', 287, -9999, 99999), '');
    answer2.shortTextAnswer = "doesn't";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('aLJrJdIICmw=', 291, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('FHOj10dqlBk=', 289, -9999, 99999), DecodeNumber('FHOj10dqlBk=', 289, -9999, 99999), '');
    answer3.shortTextAnswer = "didn't";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('ZrYZU0KGBi4=', 293, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('IXMvX5a0LRc=', 291, -9999, 99999), DecodeNumber('IXMvX5a0LRc=', 291, -9999, 99999), '');
    answer4.shortTextAnswer = "isn't";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion26()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 25;
    var weight = DecodeNumber('WH2CvnGNQ1k=', 295, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('WH2CvnGNQ1k=', 295, -1000, 1000),DecodeDecimal('yMueC1b6eUU=', 295, -1000, 1000),DecodeDecimal('yMueC1b6eUU=', 295, -1000, 1000));
    question.answers.length = 0;
    question.num = 26;
    question.isSingleAns = false;
    question.shortTextQuestion = "I ___ drink coffee in the morning. (80%)";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('WH2CvnGNQ1k=', 297, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('yMueC1b6eUU=', 295, -9999, 99999), DecodeNumber('yMueC1b6eUU=', 295, -9999, 99999), '');
    answer1.shortTextAnswer = "rarely";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Ch2Ho0h/IHQ=', 299, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('RZw4GrmwyMQ=', 297, -9999, 99999), DecodeNumber('VKol+Ex+LqY=', 297, -9999, 99999), '');
    answer2.shortTextAnswer = "usually";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Ch2Ho0h/IHQ=', 301, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('3u/MrsdQda4=', 299, -9999, 99999), DecodeNumber('3u/MrsdQda4=', 299, -9999, 99999), '');
    answer3.shortTextAnswer = "sometimes";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('RWDOLojxbag=', 303, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('vRLtemdjvFY=', 301, -9999, 99999), DecodeNumber('vRLtemdjvFY=', 301, -9999, 99999), '');
    answer4.shortTextAnswer = "never";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion27()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 26;
    var weight = DecodeNumber('Ab5mt2LVm50=', 305, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Ab5mt2LVm50=', 305, -1000, 1000),DecodeDecimal('K9rE7+vA2J4=', 305, -1000, 1000),DecodeDecimal('K9rE7+vA2J4=', 305, -1000, 1000));
    question.answers.length = 0;
    question.num = 27;
    question.isSingleAns = false;
    question.shortTextQuestion = "They ___ go on holiday in August. (90%)";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('jPV9P9h4Cgs=', 307, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('OSKQ+HLS8JU=', 305, -9999, 99999), DecodeNumber('K9rE7+vA2J4=', 305, -9999, 99999), '');
    answer1.shortTextAnswer = "usually";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('jPV9P9h4Cgs=', 309, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('S+1NOylXPFs=', 307, -9999, 99999), DecodeNumber('S+1NOylXPFs=', 307, -9999, 99999), '');
    answer2.shortTextAnswer = "never";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('MmBdqpxnrk8=', 311, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('FGHQDf+JbXg=', 309, -9999, 99999), DecodeNumber('FGHQDf+JbXg=', 309, -9999, 99999), '');
    answer3.shortTextAnswer = "always";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('7Ez1XRfKURM=', 313, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('P9iDE6rc29Q=', 311, -9999, 99999), DecodeNumber('P9iDE6rc29Q=', 311, -9999, 99999), '');
    answer4.shortTextAnswer = "rarely";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion28()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 27;
    var weight = DecodeNumber('crVA4x9INHc=', 315, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('crVA4x9INHc=', 315, -1000, 1000),DecodeDecimal('MYi2izCTOic=', 315, -1000, 1000),DecodeDecimal('MYi2izCTOic=', 315, -1000, 1000));
    question.answers.length = 0;
    question.num = 28;
    question.isSingleAns = false;
    question.shortTextQuestion = "She ___ reading a book now.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('HeEx5m+jMJ8=', 317, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('mJNvWjzOq3I=', 315, -9999, 99999), DecodeNumber('MYi2izCTOic=', 315, -9999, 99999), '');
    answer1.shortTextAnswer = "is";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('HeEx5m+jMJ8=', 319, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('Pv7vo/uEysc=', 317, -9999, 99999), DecodeNumber('Pv7vo/uEysc=', 317, -9999, 99999), '');
    answer2.shortTextAnswer = "are";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('/fHcZO1r054=', 321, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('e4dL6+9yqZk=', 319, -9999, 99999), DecodeNumber('e4dL6+9yqZk=', 319, -9999, 99999), '');
    answer3.shortTextAnswer = "be";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('8RxmtdaibpQ=', 323, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('06hAk3x876M=', 321, -9999, 99999), DecodeNumber('06hAk3x876M=', 321, -9999, 99999), '');
    answer4.shortTextAnswer = "am";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion29()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 28;
    var weight = DecodeNumber('YDlCcIkZGDc=', 325, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('YDlCcIkZGDc=', 325, -1000, 1000),DecodeDecimal('Jf93DrmbuBQ=', 325, -1000, 1000),DecodeDecimal('Jf93DrmbuBQ=', 325, -1000, 1000));
    question.answers.length = 0;
    question.num = 29;
    question.isSingleAns = false;
    question.shortTextQuestion = "I ___ working at the moment.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('7SdVv/FilRg=', 327, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('+vvY08rv2wU=', 325, -9999, 99999), DecodeNumber('Jf93DrmbuBQ=', 325, -9999, 99999), '');
    answer1.shortTextAnswer = "am";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('7SdVv/FilRg=', 329, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('W+B0CN02g+4=', 327, -9999, 99999), DecodeNumber('W+B0CN02g+4=', 327, -9999, 99999), '');
    answer2.shortTextAnswer = "is";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ZtyE7cAtVpY=', 331, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('Tkv8HNJuLh0=', 329, -9999, 99999), DecodeNumber('Tkv8HNJuLh0=', 329, -9999, 99999), '');
    answer3.shortTextAnswer = "be";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('KQsoz2oIn0w=', 333, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('yMSHNgwhkl8=', 331, -9999, 99999), DecodeNumber('yMSHNgwhkl8=', 331, -9999, 99999), '');
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
    var weight = DecodeNumber('Mq65GQC8v+c=', 335, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Mq65GQC8v+c=', 335, -1000, 1000),DecodeDecimal('EKzxk7ZlQpA=', 335, -1000, 1000),DecodeDecimal('EKzxk7ZlQpA=', 335, -1000, 1000));
    question.answers.length = 0;
    question.num = 30;
    question.isSingleAns = false;
    question.shortTextQuestion = "What ___ you doing?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Mq65GQC8v+c=', 337, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('EKzxk7ZlQpA=', 335, -9999, 99999), DecodeNumber('EKzxk7ZlQpA=', 335, -9999, 99999), '');
    answer1.shortTextAnswer = "is";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Zz19hGRWGtc=', 339, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('oATar93qQQA=', 337, -9999, 99999), DecodeNumber('kaW5UwsnvSg=', 337, -9999, 99999), '');
    answer2.shortTextAnswer = "are";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Zz19hGRWGtc=', 341, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('ietxk/9E0/Y=', 339, -9999, 99999), DecodeNumber('ietxk/9E0/Y=', 339, -9999, 99999), '');
    answer3.shortTextAnswer = "be";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('O+2ckCb1FV4=', 343, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('Vbz6o6EmfWI=', 341, -9999, 99999), DecodeNumber('Vbz6o6EmfWI=', 341, -9999, 99999), '');
    answer4.shortTextAnswer = "am";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion31()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 30;
    var weight = DecodeNumber('MB31m3jZesU=', 345, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('MB31m3jZesU=', 345, -1000, 1000),DecodeDecimal('4VxDdwC1YNk=', 345, -1000, 1000),DecodeDecimal('4VxDdwC1YNk=', 345, -1000, 1000));
    question.answers.length = 0;
    question.num = 31;
    question.isSingleAns = false;
    question.shortTextQuestion = "___ she coming with us?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('LgGGCeZL7JE=', 347, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('YWzzfwpoKvI=', 345, -9999, 99999), DecodeNumber('4VxDdwC1YNk=', 345, -9999, 99999), '');
    answer1.shortTextAnswer = "Is";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('LgGGCeZL7JE=', 349, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('6E1slg1zd1k=', 347, -9999, 99999), DecodeNumber('6E1slg1zd1k=', 347, -9999, 99999), '');
    answer2.shortTextAnswer = "Are";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Edb4FLq6cxo=', 351, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('rYev10WFLQo=', 349, -9999, 99999), DecodeNumber('rYev10WFLQo=', 349, -9999, 99999), '');
    answer3.shortTextAnswer = "Does";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('OAbViht6YAc=', 353, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('DxAv2RD4IH4=', 351, -9999, 99999), DecodeNumber('DxAv2RD4IH4=', 351, -9999, 99999), '');
    answer4.shortTextAnswer = "Am";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion32()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 31;
    var weight = DecodeNumber('9IUr4J2l0f0=', 355, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('9IUr4J2l0f0=', 355, -1000, 1000),DecodeDecimal('y9tAq65WmgM=', 355, -1000, 1000),DecodeDecimal('y9tAq65WmgM=', 355, -1000, 1000));
    question.answers.length = 0;
    question.num = 32;
    question.isSingleAns = false;
    question.shortTextQuestion = "I ___ know the answer.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('9IUr4J2l0f0=', 357, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('y9tAq65WmgM=', 355, -9999, 99999), DecodeNumber('y9tAq65WmgM=', 355, -9999, 99999), '');
    answer1.shortTextAnswer = "am knowing";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('bqYQYBa1yig=', 359, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('3pEEQZnCUUE=', 357, -9999, 99999), DecodeNumber('3pEEQZnCUUE=', 357, -9999, 99999), '');
    answer2.shortTextAnswer = "knows";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Skfaosoqh14=', 361, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('DPV69fNluTI=', 359, -9999, 99999), DecodeNumber('DPV69fNluTI=', 359, -9999, 99999), '');
    answer3.shortTextAnswer = "knowing";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('sPTcFx+djUA=', 363, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('KcCeuJEOprY=', 361, -9999, 99999), DecodeNumber('2UYN5rM3t4M=', 361, -9999, 99999), '');
    answer4.shortTextAnswer = "know";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion33()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 32;
    var weight = DecodeNumber('tVj/3pUJGuc=', 365, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('tVj/3pUJGuc=', 365, -1000, 1000),DecodeDecimal('XFVLcCcuOKE=', 365, -1000, 1000),DecodeDecimal('XFVLcCcuOKE=', 365, -1000, 1000));
    question.answers.length = 0;
    question.num = 33;
    question.isSingleAns = false;
    question.shortTextQuestion = "She ___ like chocolate.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('tVj/3pUJGuc=', 367, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('XFVLcCcuOKE=', 365, -9999, 99999), DecodeNumber('XFVLcCcuOKE=', 365, -9999, 99999), '');
    answer1.shortTextAnswer = "is liking";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('+VLdKGYLTBQ=', 369, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('gGYED03vU8o=', 367, -9999, 99999), DecodeNumber('z2tduar9Bog=', 367, -9999, 99999), '');
    answer2.shortTextAnswer = "likes";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('+VLdKGYLTBQ=', 371, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('X/ye+XzgcZQ=', 369, -9999, 99999), DecodeNumber('X/ye+XzgcZQ=', 369, -9999, 99999), '');
    answer3.shortTextAnswer = "liked";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('4eE4lUTQSoo=', 373, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('IQwBBkmS61k=', 371, -9999, 99999), DecodeNumber('IQwBBkmS61k=', 371, -9999, 99999), '');
    answer4.shortTextAnswer = "like";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion34()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 33;
    var weight = DecodeNumber('OD4ZVI6BvqE=', 375, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('OD4ZVI6BvqE=', 375, -1000, 1000),DecodeDecimal('8I50vYavLQQ=', 375, -1000, 1000),DecodeDecimal('8I50vYavLQQ=', 375, -1000, 1000));
    question.answers.length = 0;
    question.num = 34;
    question.isSingleAns = false;
    question.shortTextQuestion = "We ___ understand the lesson.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('OD4ZVI6BvqE=', 377, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('8I50vYavLQQ=', 375, -9999, 99999), DecodeNumber('8I50vYavLQQ=', 375, -9999, 99999), '');
    answer1.shortTextAnswer = "understands";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('qJdUmTbPDUs=', 379, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('Zyd2T99h+6A=', 377, -9999, 99999), DecodeNumber('Zyd2T99h+6A=', 377, -9999, 99999), '');
    answer2.shortTextAnswer = "are understanding";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('CoRZAsdzbgI=', 381, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('Yd3rJpdsF8U=', 379, -9999, 99999), DecodeNumber('Yd3rJpdsF8U=', 379, -9999, 99999), '');
    answer3.shortTextAnswer = "understood";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('5QrBXoSgmsY=', 383, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('p+TiepJXFls=', 381, -9999, 99999), DecodeNumber('jxG+Wi2jdTA=', 381, -9999, 99999), '');
    answer4.shortTextAnswer = "understand";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion35()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 34;
    var weight = DecodeNumber('dLNyhtwrnJQ=', 385, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('dLNyhtwrnJQ=', 385, -1000, 1000),DecodeDecimal('32pw5zU5ZT4=', 385, -1000, 1000),DecodeDecimal('32pw5zU5ZT4=', 385, -1000, 1000));
    question.answers.length = 0;
    question.num = 35;
    question.isSingleAns = false;
    question.shortTextQuestion = "I ___ at the party last night.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('HEtNwO6PR/U=', 387, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('rRtQkqNsHZY=', 385, -9999, 99999), DecodeNumber('32pw5zU5ZT4=', 385, -9999, 99999), '');
    answer1.shortTextAnswer = "was";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('1Wqhz2piK/I=', 585, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('GJ4shT0gkSM=', 583, -9999, 99999), DecodeNumber('GJ4shT0gkSM=', 583, -9999, 99999), '');
    answer2.shortTextAnswer = "were";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('y1GEtEBzfKg=', 587, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('aZjHPElGiB4=', 585, -9999, 99999), DecodeNumber('aZjHPElGiB4=', 585, -9999, 99999), '');
    answer3.shortTextAnswer = "be";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('8XoN+fvKBiE=', 589, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('4azndx2rPBs=', 587, -9999, 99999), DecodeNumber('4azndx2rPBs=', 587, -9999, 99999), '');
    answer4.shortTextAnswer = "am";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion36()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 35;
    var weight = DecodeNumber('ujD+T0ALMc4=', 591, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ujD+T0ALMc4=', 591, -1000, 1000),DecodeDecimal('u4IPP3WvEDI=', 591, -1000, 1000),DecodeDecimal('u4IPP3WvEDI=', 591, -1000, 1000));
    question.answers.length = 0;
    question.num = 36;
    question.isSingleAns = false;
    question.shortTextQuestion = "They ___ happy to see us.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('ujD+T0ALMc4=', 593, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('u4IPP3WvEDI=', 591, -9999, 99999), DecodeNumber('u4IPP3WvEDI=', 591, -9999, 99999), '');
    answer1.shortTextAnswer = "was";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('7kaFAnSe9ek=', 595, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('KtDsEhqreEo=', 593, -9999, 99999), DecodeNumber('Bl/nAhPSX4c=', 593, -9999, 99999), '');
    answer2.shortTextAnswer = "were";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('7kaFAnSe9ek=', 597, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('UT/vGihS+hc=', 595, -9999, 99999), DecodeNumber('UT/vGihS+hc=', 595, -9999, 99999), '');
    answer3.shortTextAnswer = "are";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('f2JF043u7x4=', 599, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('AwuQfvtoh5s=', 597, -9999, 99999), DecodeNumber('AwuQfvtoh5s=', 597, -9999, 99999), '');
    answer4.shortTextAnswer = "is";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion37()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 36;
    var weight = DecodeNumber('dZYzzIMkeJA=', 601, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('dZYzzIMkeJA=', 601, -1000, 1000),DecodeDecimal('4ewibdAfSGg=', 601, -1000, 1000),DecodeDecimal('4ewibdAfSGg=', 601, -1000, 1000));
    question.answers.length = 0;
    question.num = 37;
    question.isSingleAns = false;
    question.shortTextQuestion = "I ___ my room last weekend.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('dZYzzIMkeJA=', 603, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('4ewibdAfSGg=', 601, -9999, 99999), DecodeNumber('4ewibdAfSGg=', 601, -9999, 99999), '');
    answer1.shortTextAnswer = "clean";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('siHnaGXZfRg=', 605, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('cbFF0iMfE18=', 603, -9999, 99999), DecodeNumber('gX3eIo1R1UQ=', 603, -9999, 99999), '');
    answer2.shortTextAnswer = "cleaned";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('siHnaGXZfRg=', 607, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('A6zHmJv/ZpA=', 605, -9999, 99999), DecodeNumber('A6zHmJv/ZpA=', 605, -9999, 99999), '');
    answer3.shortTextAnswer = "cleaning";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('ap+nA7pjJ5k=', 609, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('2ZTcp9HUVPo=', 607, -9999, 99999), DecodeNumber('2ZTcp9HUVPo=', 607, -9999, 99999), '');
    answer4.shortTextAnswer = "cleans";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion38()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 37;
    var weight = DecodeNumber('rthOc+mdxtg=', 611, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('rthOc+mdxtg=', 611, -1000, 1000),DecodeDecimal('Q0+XVDovfis=', 611, -1000, 1000),DecodeDecimal('Q0+XVDovfis=', 611, -1000, 1000));
    question.answers.length = 0;
    question.num = 38;
    question.isSingleAns = false;
    question.shortTextQuestion = "She ___ a letter to her friend.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('rthOc+mdxtg=', 613, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('Q0+XVDovfis=', 611, -9999, 99999), DecodeNumber('Q0+XVDovfis=', 611, -9999, 99999), '');
    answer1.shortTextAnswer = "write";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('0ninbdCJJxo=', 615, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('bSx6N8sgWKk=', 613, -9999, 99999), DecodeNumber('bSx6N8sgWKk=', 613, -9999, 99999), '');
    answer2.shortTextAnswer = "writed";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('z/ClmonQJtc=', 617, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('yYpGKfIMExg=', 615, -9999, 99999), DecodeNumber('Xw+8v7/BWLw=', 615, -9999, 99999), '');
    answer3.shortTextAnswer = "wrote";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('z/ClmonQJtc=', 619, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('6HmedT9M06w=', 617, -9999, 99999), DecodeNumber('6HmedT9M06w=', 617, -9999, 99999), '');
    answer4.shortTextAnswer = "written";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion39()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 38;
    var weight = DecodeNumber('K9NsoC3YV7M=', 621, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('K9NsoC3YV7M=', 621, -1000, 1000),DecodeDecimal('gdd1jmemOrs=', 621, -1000, 1000),DecodeDecimal('gdd1jmemOrs=', 621, -1000, 1000));
    question.answers.length = 0;
    question.num = 39;
    question.isSingleAns = false;
    question.shortTextQuestion = "We ___ TV all night.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Lc1Ns5NbGiA=', 623, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('IFe8STMWpHY=', 621, -9999, 99999), DecodeNumber('gdd1jmemOrs=', 621, -9999, 99999), '');
    answer1.shortTextAnswer = "watched";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Lc1Ns5NbGiA=', 625, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('Zcww+erTVUQ=', 623, -9999, 99999), DecodeNumber('Zcww+erTVUQ=', 623, -9999, 99999), '');
    answer2.shortTextAnswer = "watches";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('QGWPhHhCbj8=', 627, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('aR40uvc4aso=', 625, -9999, 99999), DecodeNumber('aR40uvc4aso=', 625, -9999, 99999), '');
    answer3.shortTextAnswer = "watching";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('P9PyRXYbIzI=', 629, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('CvtfVSha3Rg=', 627, -9999, 99999), DecodeNumber('CvtfVSha3Rg=', 627, -9999, 99999), '');
    answer4.shortTextAnswer = "watch";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion40()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 39;
    var weight = DecodeNumber('iL9tScAphxU=', 631, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('iL9tScAphxU=', 631, -1000, 1000),DecodeDecimal('spOwB6wNDD0=', 631, -1000, 1000),DecodeDecimal('spOwB6wNDD0=', 631, -1000, 1000));
    question.answers.length = 0;
    question.num = 40;
    question.isSingleAns = false;
    question.shortTextQuestion = "They ___ the project last week.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('iL9tScAphxU=', 633, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('spOwB6wNDD0=', 631, -9999, 99999), DecodeNumber('spOwB6wNDD0=', 631, -9999, 99999), '');
    answer1.shortTextAnswer = "complete";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('+jtJaXqfHww=', 635, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('nUaP7BFjYAc=', 633, -9999, 99999), DecodeNumber('2Fns62DU2wY=', 633, -9999, 99999), '');
    answer2.shortTextAnswer = "completed";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('+jtJaXqfHww=', 637, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('mFVNSKZT0bI=', 635, -9999, 99999), DecodeNumber('mFVNSKZT0bI=', 635, -9999, 99999), '');
    answer3.shortTextAnswer = "completing";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('pKSwfUznIF8=', 639, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('vO6SH7rZfS8=', 637, -9999, 99999), DecodeNumber('vO6SH7rZfS8=', 637, -9999, 99999), '');
    answer4.shortTextAnswer = "completes";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion41()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 40;
    var weight = DecodeNumber('HIIHPq9TeR4=', 641, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('HIIHPq9TeR4=', 641, -1000, 1000),DecodeDecimal('VRW8EA9kFTI=', 641, -1000, 1000),DecodeDecimal('VRW8EA9kFTI=', 641, -1000, 1000));
    question.answers.length = 0;
    question.num = 41;
    question.isSingleAns = false;
    question.shortTextQuestion = "He ___ in the race.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('HIIHPq9TeR4=', 643, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('VRW8EA9kFTI=', 641, -9999, 99999), DecodeNumber('VRW8EA9kFTI=', 641, -9999, 99999), '');
    answer1.shortTextAnswer = "compete";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('DXoxwlLvMLY=', 645, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('8Ew1ZF0LoRE=', 643, -9999, 99999), DecodeNumber('0KdtJMgaaBI=', 643, -9999, 99999), '');
    answer2.shortTextAnswer = "competed";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('DXoxwlLvMLY=', 647, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('R5t1PytnxB4=', 645, -9999, 99999), DecodeNumber('R5t1PytnxB4=', 645, -9999, 99999), '');
    answer3.shortTextAnswer = "competes";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('05yrP8lnfQY=', 649, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('y5ufBJMPAAA=', 647, -9999, 99999), DecodeNumber('y5ufBJMPAAA=', 647, -9999, 99999), '');
    answer4.shortTextAnswer = "competing";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion42()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 41;
    var weight = DecodeNumber('psqquqd7sBY=', 651, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('psqquqd7sBY=', 651, -1000, 1000),DecodeDecimal('D+hjYBUDw8I=', 651, -1000, 1000),DecodeDecimal('D+hjYBUDw8I=', 651, -1000, 1000));
    question.answers.length = 0;
    question.num = 42;
    question.isSingleAns = false;
    question.shortTextQuestion = "The dog ___ the ball.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('psqquqd7sBY=', 653, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('D+hjYBUDw8I=', 651, -9999, 99999), DecodeNumber('D+hjYBUDw8I=', 651, -9999, 99999), '');
    answer1.shortTextAnswer = "catch";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('sS69ykZf3hA=', 655, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('RdK03IAQzkg=', 653, -9999, 99999), DecodeNumber('LmDlzG8ejXQ=', 653, -9999, 99999), '');
    answer2.shortTextAnswer = "caught";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('sS69ykZf3hA=', 657, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('d03WQ4L9HHI=', 655, -9999, 99999), DecodeNumber('d03WQ4L9HHI=', 655, -9999, 99999), '');
    answer3.shortTextAnswer = "catches";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('i5ZNv0supC4=', 659, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('Yo3Whp2tDMs=', 657, -9999, 99999), DecodeNumber('Yo3Whp2tDMs=', 657, -9999, 99999), '');
    answer4.shortTextAnswer = "catching";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion43()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 42;
    var weight = DecodeNumber('qRK5B4skYOs=', 661, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('qRK5B4skYOs=', 661, -1000, 1000),DecodeDecimal('+FKUnwaQ9jU=', 661, -1000, 1000),DecodeDecimal('+FKUnwaQ9jU=', 661, -1000, 1000));
    question.answers.length = 0;
    question.num = 43;
    question.isSingleAns = false;
    question.shortTextQuestion = "She ___ me at the station.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('qRK5B4skYOs=', 663, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('+FKUnwaQ9jU=', 661, -9999, 99999), DecodeNumber('+FKUnwaQ9jU=', 661, -9999, 99999), '');
    answer1.shortTextAnswer = "meet";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('DbGoxPaTxx0=', 665, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('wmMY1Z8g9uo=', 663, -9999, 99999), DecodeNumber('fjSh58VlHfE=', 663, -9999, 99999), '');
    answer2.shortTextAnswer = "met";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('DbGoxPaTxx0=', 667, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('b74JlozBPgw=', 665, -9999, 99999), DecodeNumber('b74JlozBPgw=', 665, -9999, 99999), '');
    answer3.shortTextAnswer = "meeting";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('3TID5iz3Er4=', 669, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('PCHgRaiiq9c=', 667, -9999, 99999), DecodeNumber('PCHgRaiiq9c=', 667, -9999, 99999), '');
    answer4.shortTextAnswer = "meets";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion44()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 43;
    var weight = DecodeNumber('jTee5LgYQtc=', 671, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('jTee5LgYQtc=', 671, -1000, 1000),DecodeDecimal('FRhlfEIkOWk=', 671, -1000, 1000),DecodeDecimal('FRhlfEIkOWk=', 671, -1000, 1000));
    question.answers.length = 0;
    question.num = 44;
    question.isSingleAns = false;
    question.shortTextQuestion = "We visited Rome ___ 2019.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('9r3TnlcFdvY=', 673, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('kjiW/BM2pv0=', 671, -9999, 99999), DecodeNumber('FRhlfEIkOWk=', 671, -9999, 99999), '');
    answer1.shortTextAnswer = "in";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('9r3TnlcFdvY=', 675, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('nffrZu+nFZE=', 673, -9999, 99999), DecodeNumber('nffrZu+nFZE=', 673, -9999, 99999), '');
    answer2.shortTextAnswer = "on";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('xKlkLEk+yrw=', 677, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('J8EZiRagJTg=', 675, -9999, 99999), DecodeNumber('J8EZiRagJTg=', 675, -9999, 99999), '');
    answer3.shortTextAnswer = "at";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Wi+TWgjHCpA=', 679, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('qK1hGPTIKEQ=', 677, -9999, 99999), DecodeNumber('qK1hGPTIKEQ=', 677, -9999, 99999), '');
    answer4.shortTextAnswer = "since";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion45()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 44;
    var weight = DecodeNumber('7VKBb405/fI=', 681, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('7VKBb405/fI=', 681, -1000, 1000),DecodeDecimal('Td4TI2jPmC4=', 681, -1000, 1000),DecodeDecimal('Td4TI2jPmC4=', 681, -1000, 1000));
    question.answers.length = 0;
    question.num = 45;
    question.isSingleAns = false;
    question.shortTextQuestion = "___ did you go to Spain?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('7VKBb405/fI=', 683, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('Td4TI2jPmC4=', 681, -9999, 99999), DecodeNumber('Td4TI2jPmC4=', 681, -9999, 99999), '');
    answer1.shortTextAnswer = "How";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('an2FzTX7U8E=', 685, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('NFnHFSlB2vY=', 683, -9999, 99999), DecodeNumber('NFnHFSlB2vY=', 683, -9999, 99999), '');
    answer2.shortTextAnswer = "Where";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('WdMIYDVp3Po=', 687, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('q6P5kpYk5/E=', 685, -9999, 99999), DecodeNumber('GVZxke0leTI=', 685, -9999, 99999), '');
    answer3.shortTextAnswer = "When";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('WdMIYDVp3Po=', 689, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('O++xcj9gwgM=', 687, -9999, 99999), DecodeNumber('O++xcj9gwgM=', 687, -9999, 99999), '');
    answer4.shortTextAnswer = "Why";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion46()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 45;
    var weight = DecodeNumber('1ITTMWL44og=', 691, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('1ITTMWL44og=', 691, -1000, 1000),DecodeDecimal('7sK0gqr0OR4=', 691, -1000, 1000),DecodeDecimal('7sK0gqr0OR4=', 691, -1000, 1000));
    question.answers.length = 0;
    question.num = 46;
    question.isSingleAns = false;
    question.shortTextQuestion = "He left ___ two hours ago.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('1ITTMWL44og=', 693, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('7sK0gqr0OR4=', 691, -9999, 99999), DecodeNumber('7sK0gqr0OR4=', 691, -9999, 99999), '');
    answer1.shortTextAnswer = "since";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('nsn2P1h7FUg=', 695, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('KtDsEhqreEo=', 693, -9999, 99999), DecodeNumber('KtDsEhqreEo=', 693, -9999, 99999), '');
    answer2.shortTextAnswer = "for";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('frPwol8PWBo=', 697, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('I12afjx1fBI=', 695, -9999, 99999), DecodeNumber('s0tNPKbw6m4=', 695, -9999, 99999), '');
    answer3.shortTextAnswer = "ago";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('frPwol8PWBo=', 699, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('YwSZvzfI4Xs=', 697, -9999, 99999), DecodeNumber('YwSZvzfI4Xs=', 697, -9999, 99999), '');
    answer4.shortTextAnswer = "before";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion47()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 46;
    var weight = DecodeNumber('hOvFGDC6fPo=', 701, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('hOvFGDC6fPo=', 701, -1000, 1000),DecodeDecimal('uQnFS7FlDZo=', 701, -1000, 1000),DecodeDecimal('uQnFS7FlDZo=', 701, -1000, 1000));
    question.answers.length = 0;
    question.num = 47;
    question.isSingleAns = false;
    question.shortTextQuestion = "They moved here ___ last year.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('hOvFGDC6fPo=', 703, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('uQnFS7FlDZo=', 701, -9999, 99999), DecodeNumber('uQnFS7FlDZo=', 701, -9999, 99999), '');
    answer1.shortTextAnswer = "since";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('iR82VNK1ZmU=', 705, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('cbFF0iMfE18=', 703, -9999, 99999), DecodeNumber('cbFF0iMfE18=', 703, -9999, 99999), '');
    answer2.shortTextAnswer = "for";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('/MczUYTcX8w=', 707, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('7CVFr3xQye4=', 705, -9999, 99999), DecodeNumber('7CVFr3xQye4=', 705, -9999, 99999), '');
    answer3.shortTextAnswer = "during";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('SZ/ZykfTqPU=', 709, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('JGP/9YsXjEY=', 707, -9999, 99999), DecodeNumber('/XGqhXzA6ak=', 707, -9999, 99999), '');
    answer4.shortTextAnswer = "?";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion48()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 47;
    var weight = DecodeNumber('iHEML2Q5X2Q=', 711, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('iHEML2Q5X2Q=', 711, -1000, 1000),DecodeDecimal('PBpEksxQyEE=', 711, -1000, 1000),DecodeDecimal('PBpEksxQyEE=', 711, -1000, 1000));
    question.answers.length = 0;
    question.num = 48;
    question.isSingleAns = false;
    question.shortTextQuestion = "They ___ playing football at 4 PM.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('iHEML2Q5X2Q=', 713, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('PBpEksxQyEE=', 711, -9999, 99999), DecodeNumber('PBpEksxQyEE=', 711, -9999, 99999), '');
    answer1.shortTextAnswer = "was";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('mIUZ6LJHImI=', 715, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('zjNCYkPyvn4=', 713, -9999, 99999), DecodeNumber('N6MoEW3JEb0=', 713, -9999, 99999), '');
    answer2.shortTextAnswer = "were";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('mIUZ6LJHImI=', 717, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('yYpGKfIMExg=', 715, -9999, 99999), DecodeNumber('yYpGKfIMExg=', 715, -9999, 99999), '');
    answer3.shortTextAnswer = "are";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('8+ywCSrkpDY=', 719, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('OTauUvQKmyY=', 717, -9999, 99999), DecodeNumber('OTauUvQKmyY=', 717, -9999, 99999), '');
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
    var weight = DecodeNumber('mn0JJi3y0Vo=', 721, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('mn0JJi3y0Vo=', 721, -1000, 1000),DecodeDecimal('IFe8STMWpHY=', 721, -1000, 1000),DecodeDecimal('IFe8STMWpHY=', 721, -1000, 1000));
    question.answers.length = 0;
    question.num = 49;
    question.isSingleAns = false;
    question.shortTextQuestion = "What ___ he doing yesterday at 5?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('sfYcTc6F9Fg=', 723, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('swo+8pJnc/Y=', 721, -9999, 99999), DecodeNumber('IFe8STMWpHY=', 721, -9999, 99999), '');
    answer1.shortTextAnswer = "was";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('sfYcTc6F9Fg=', 725, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('W776DEfYD/4=', 723, -9999, 99999), DecodeNumber('W776DEfYD/4=', 723, -9999, 99999), '');
    answer2.shortTextAnswer = "is";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('nRwjZCKsadg=', 727, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('nA7MYlXL5/I=', 725, -9999, 99999), DecodeNumber('nA7MYlXL5/I=', 725, -9999, 99999), '');
    answer3.shortTextAnswer = "were";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('92qPJPsZcpU=', 729, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('r2NKEHyIgpU=', 727, -9999, 99999), DecodeNumber('r2NKEHyIgpU=', 727, -9999, 99999), '');
    answer4.shortTextAnswer = "be";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion50()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 49;
    var weight = DecodeNumber('D6OvhPq0g18=', 731, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('D6OvhPq0g18=', 731, -1000, 1000),DecodeDecimal('uOYMcUBVGtA=', 731, -1000, 1000),DecodeDecimal('uOYMcUBVGtA=', 731, -1000, 1000));
    question.answers.length = 0;
    question.num = 50;
    question.isSingleAns = false;
    question.shortTextQuestion = "She ___ when the lights went out.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('D6OvhPq0g18=', 733, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('uOYMcUBVGtA=', 731, -9999, 99999), DecodeNumber('uOYMcUBVGtA=', 731, -9999, 99999), '');
    answer1.shortTextAnswer = "read";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('L0GwSdLZ9EM=', 735, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('ctrq0IK/dz8=', 733, -9999, 99999), DecodeNumber('nUaP7BFjYAc=', 733, -9999, 99999), '');
    answer2.shortTextAnswer = "was reading";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('L0GwSdLZ9EM=', 737, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('rcGPtz5vrDk=', 735, -9999, 99999), DecodeNumber('rcGPtz5vrDk=', 735, -9999, 99999), '');
    answer3.shortTextAnswer = "reads";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('lv8Lstj1jkY=', 739, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('HnZEXokV26w=', 737, -9999, 99999), DecodeNumber('HnZEXokV26w=', 737, -9999, 99999), '');
    answer4.shortTextAnswer = "reading";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion51()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 50;
    var weight = DecodeNumber('fsy8b7YqT3M=', 741, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('fsy8b7YqT3M=', 741, -1000, 1000),DecodeDecimal('JW6qsaTGDss=', 741, -1000, 1000),DecodeDecimal('JW6qsaTGDss=', 741, -1000, 1000));
    question.answers.length = 0;
    question.num = 51;
    question.isSingleAns = false;
    question.shortTextQuestion = "They ___ TV when the phone rang.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('fsy8b7YqT3M=', 743, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('JW6qsaTGDss=', 741, -9999, 99999), DecodeNumber('JW6qsaTGDss=', 741, -9999, 99999), '');
    answer1.shortTextAnswer = "watched";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('6OKZ/GC/1Wc=', 745, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('uz0sGJnGPuo=', 743, -9999, 99999), DecodeNumber('8Ew1ZF0LoRE=', 743, -9999, 99999), '');
    answer2.shortTextAnswer = "were watching";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('6OKZ/GC/1Wc=', 747, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('zsIckuNmKy8=', 745, -9999, 99999), DecodeNumber('zsIckuNmKy8=', 745, -9999, 99999), '');
    answer3.shortTextAnswer = "watching";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('HESs0kEYEag=', 749, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('4NNA+qaTi+E=', 747, -9999, 99999), DecodeNumber('4NNA+qaTi+E=', 747, -9999, 99999), '');
    answer4.shortTextAnswer = "watches";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion52()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 51;
    var weight = DecodeNumber('wzqYJHYUjWg=', 751, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('wzqYJHYUjWg=', 751, -1000, 1000),DecodeDecimal('rUYPzs0pAuI=', 751, -1000, 1000),DecodeDecimal('rUYPzs0pAuI=', 751, -1000, 1000));
    question.answers.length = 0;
    question.num = 52;
    question.isSingleAns = false;
    question.shortTextQuestion = "While she ___, the doorbell rang.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('QqLWLJEsZPE=', 753, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('VP1rLEuMmTg=', 751, -9999, 99999), DecodeNumber('rUYPzs0pAuI=', 751, -9999, 99999), '');
    answer1.shortTextAnswer = "was sleeping";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('QqLWLJEsZPE=', 755, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('RdK03IAQzkg=', 753, -9999, 99999), DecodeNumber('RdK03IAQzkg=', 753, -9999, 99999), '');
    answer2.shortTextAnswer = "slept";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('8/8RCCqcxw4=', 757, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('4u/OEGesbFM=', 755, -9999, 99999), DecodeNumber('4u/OEGesbFM=', 755, -9999, 99999), '');
    answer3.shortTextAnswer = "sleeps";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('TokC1D7Wjp0=', 759, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('t/8WsJ9LKRA=', 757, -9999, 99999), DecodeNumber('t/8WsJ9LKRA=', 757, -9999, 99999), '');
    answer4.shortTextAnswer = "sleep";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion53()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 52;
    var weight = DecodeNumber('Ye28mFh88bg=', 761, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Ye28mFh88bg=', 761, -1000, 1000),DecodeDecimal('rnVa3KPH73I=', 761, -1000, 1000),DecodeDecimal('rnVa3KPH73I=', 761, -1000, 1000));
    question.answers.length = 0;
    question.num = 53;
    question.isSingleAns = false;
    question.shortTextQuestion = "I ___ my homework when it started to rain.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Ye28mFh88bg=', 763, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('rnVa3KPH73I=', 761, -9999, 99999), DecodeNumber('rnVa3KPH73I=', 761, -9999, 99999), '');
    answer1.shortTextAnswer = "do";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('mxQIWCdkBo8=', 765, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('wmMY1Z8g9uo=', 763, -9999, 99999), DecodeNumber('wmMY1Z8g9uo=', 763, -9999, 99999), '');
    answer2.shortTextAnswer = "did";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('LmrQMf9uoV8=', 767, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('x+dWg5S5q3A=', 765, -9999, 99999), DecodeNumber('GEIZziDpUoc=', 765, -9999, 99999), '');
    answer3.shortTextAnswer = "was doing";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('LmrQMf9uoV8=', 769, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('4oZj79RfM2U=', 767, -9999, 99999), DecodeNumber('4oZj79RfM2U=', 767, -9999, 99999), '');
    answer4.shortTextAnswer = "doing";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion54()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 53;
    var weight = DecodeNumber('fdSLIKD4cUI=', 771, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('fdSLIKD4cUI=', 771, -1000, 1000),DecodeDecimal('kjiW/BM2pv0=', 771, -1000, 1000),DecodeDecimal('kjiW/BM2pv0=', 771, -1000, 1000));
    question.answers.length = 0;
    question.num = 54;
    question.isSingleAns = false;
    question.shortTextQuestion = "She ___ study medicine.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('fdSLIKD4cUI=', 773, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('kjiW/BM2pv0=', 771, -9999, 99999), DecodeNumber('kjiW/BM2pv0=', 771, -9999, 99999), '');
    answer1.shortTextAnswer = "will";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('MnsiYu1QWCQ=', 775, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('docHMUcWNbo=', 773, -9999, 99999), DecodeNumber('V3lVUz4JXWQ=', 773, -9999, 99999), '');
    answer2.shortTextAnswer = "is going to";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('MnsiYu1QWCQ=', 777, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('mUyDCCbpgfU=', 775, -9999, 99999), DecodeNumber('mUyDCCbpgfU=', 775, -9999, 99999), '');
    answer3.shortTextAnswer = "go";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Czpk9wgJXEQ=', 779, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('ch2YH245YnA=', 777, -9999, 99999), DecodeNumber('ch2YH245YnA=', 777, -9999, 99999), '');
    answer4.shortTextAnswer = "goes";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion55()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 54;
    var weight = DecodeNumber('x4RMh7imsow=', 781, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('x4RMh7imsow=', 781, -1000, 1000),DecodeDecimal('/21Ra82SmPE=', 781, -1000, 1000),DecodeDecimal('/21Ra82SmPE=', 781, -1000, 1000));
    question.answers.length = 0;
    question.num = 55;
    question.isSingleAns = false;
    question.shortTextQuestion = "They ___ have a party.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('zKKy1gJh050=', 783, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('TqjjcFLfXiw=', 781, -9999, 99999), DecodeNumber('/21Ra82SmPE=', 781, -9999, 99999), '');
    answer1.shortTextAnswer = "are going to";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('zKKy1gJh050=', 785, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('TDh5qkRJO8g=', 783, -9999, 99999), DecodeNumber('TDh5qkRJO8g=', 783, -9999, 99999), '');
    answer2.shortTextAnswer = "will";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('XdLw+aThUgM=', 787, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('q6P5kpYk5/E=', 785, -9999, 99999), DecodeNumber('q6P5kpYk5/E=', 785, -9999, 99999), '');
    answer3.shortTextAnswer = "be going";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('WcKEixxtEBc=', 789, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('0KbA3aoKNtI=', 787, -9999, 99999), DecodeNumber('0KbA3aoKNtI=', 787, -9999, 99999), '');
    answer4.shortTextAnswer = "going";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion56()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 55;
    var weight = DecodeNumber('VG2MuE4QEdk=', 791, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('VG2MuE4QEdk=', 791, -1000, 1000),DecodeDecimal('lvHHv65P9ZM=', 791, -1000, 1000),DecodeDecimal('lvHHv65P9ZM=', 791, -1000, 1000));
    question.answers.length = 0;
    question.num = 56;
    question.isSingleAns = false;
    question.shortTextQuestion = "___ she going to travel?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('K/Nxt1PeX7I=', 793, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('Mf/SvKqUroY=', 791, -9999, 99999), DecodeNumber('lvHHv65P9ZM=', 791, -9999, 99999), '');
    answer1.shortTextAnswer = "Is";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('K/Nxt1PeX7I=', 795, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('naCHl/aYK+A=', 793, -9999, 99999), DecodeNumber('naCHl/aYK+A=', 793, -9999, 99999), '');
    answer2.shortTextAnswer = "Are";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('3E9gAjlOZb4=', 797, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('I12afjx1fBI=', 795, -9999, 99999), DecodeNumber('I12afjx1fBI=', 795, -9999, 99999), '');
    answer3.shortTextAnswer = "Does";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('3xhRVIyzslI=', 799, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('UmvsvFC0SQE=', 797, -9999, 99999), DecodeNumber('UmvsvFC0SQE=', 797, -9999, 99999), '');
    answer4.shortTextAnswer = "Will";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion57()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 56;
    var weight = DecodeNumber('+61tC8hdXtI=', 801, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('+61tC8hdXtI=', 801, -1000, 1000),DecodeDecimal('KBqYUMdrHTc=', 801, -1000, 1000),DecodeDecimal('KBqYUMdrHTc=', 801, -1000, 1000));
    question.answers.length = 0;
    question.num = 57;
    question.isSingleAns = false;
    question.shortTextQuestion = "This time tomorrow I ___ flying to Rome.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('+61tC8hdXtI=', 803, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('KBqYUMdrHTc=', 801, -9999, 99999), DecodeNumber('KBqYUMdrHTc=', 801, -9999, 99999), '');
    answer1.shortTextAnswer = "will be";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Y3QTKeJGEzs=', 805, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('QwnJ92QYwuc=', 803, -9999, 99999), DecodeNumber('QwnJ92QYwuc=', 803, -9999, 99999), '');
    answer2.shortTextAnswer = "will fly";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ZsQF0OdhDKo=', 807, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('2th36I7ESlQ=', 805, -9999, 99999), DecodeNumber('kNmhUMRve9Q=', 805, -9999, 99999), '');
    answer3.shortTextAnswer = "will be flying";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('ZsQF0OdhDKo=', 809, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('JGP/9YsXjEY=', 807, -9999, 99999), DecodeNumber('JGP/9YsXjEY=', 807, -9999, 99999), '');
    answer4.shortTextAnswer = "fly";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion58()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 57;
    var weight = DecodeNumber('wgYSB5yPVTs=', 811, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('wgYSB5yPVTs=', 811, -1000, 1000),DecodeDecimal('IdNPq7Ut2Ec=', 811, -1000, 1000),DecodeDecimal('IdNPq7Ut2Ec=', 811, -1000, 1000));
    question.answers.length = 0;
    question.num = 58;
    question.isSingleAns = false;
    question.shortTextQuestion = "He ___ his project next week.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('bUJT1gW2pBQ=', 813, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('tcBiDBr04Ho=', 811, -9999, 99999), DecodeNumber('IdNPq7Ut2Ec=', 811, -9999, 99999), '');
    answer1.shortTextAnswer = "will finish";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('bUJT1gW2pBQ=', 815, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('zjNCYkPyvn4=', 813, -9999, 99999), DecodeNumber('zjNCYkPyvn4=', 813, -9999, 99999), '');
    answer2.shortTextAnswer = "will be finishing";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('fuuFCDMVG6c=', 817, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('hJdhBI4PVb0=', 815, -9999, 99999), DecodeNumber('hJdhBI4PVb0=', 815, -9999, 99999), '');
    answer3.shortTextAnswer = "finishes";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('kAW5hSMcohA=', 819, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('UMXFLfLZqyQ=', 817, -9999, 99999), DecodeNumber('UMXFLfLZqyQ=', 817, -9999, 99999), '');
    answer4.shortTextAnswer = "finishing";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion59()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 58;
    var weight = DecodeNumber('ggJDgVrrwG0=', 821, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ggJDgVrrwG0=', 821, -1000, 1000),DecodeDecimal('swo+8pJnc/Y=', 821, -1000, 1000),DecodeDecimal('swo+8pJnc/Y=', 821, -1000, 1000));
    question.answers.length = 0;
    question.num = 59;
    question.isSingleAns = false;
    question.shortTextQuestion = "We ___ have a barbecue on Saturday. (be going to)";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('ggJDgVrrwG0=', 823, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('swo+8pJnc/Y=', 821, -9999, 99999), DecodeNumber('swo+8pJnc/Y=', 821, -9999, 99999), '');
    answer1.shortTextAnswer = "will";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('JkaX6DrzKjE=', 825, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('g83JkwnxTcI=', 823, -9999, 99999), DecodeNumber('XmKiHjM3NEU=', 823, -9999, 99999), '');
    answer2.shortTextAnswer = "are going to";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('JkaX6DrzKjE=', 827, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('LtdmpCGelW0=', 825, -9999, 99999), DecodeNumber('LtdmpCGelW0=', 825, -9999, 99999), '');
    answer3.shortTextAnswer = "are having";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('efZ5rGUmVqU=', 829, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('uaNCpGf830s=', 827, -9999, 99999), DecodeNumber('uaNCpGf830s=', 827, -9999, 99999), '');
    answer4.shortTextAnswer = "going";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion60()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 59;
    var weight = DecodeNumber('k6f06N55Lyk=', 831, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('k6f06N55Lyk=', 831, -1000, 1000),DecodeDecimal('gvwH72jwl50=', 831, -1000, 1000),DecodeDecimal('gvwH72jwl50=', 831, -1000, 1000));
    question.answers.length = 0;
    question.num = 60;
    question.isSingleAns = false;
    question.shortTextQuestion = "We ___ call you tomorrow.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('k6f06N55Lyk=', 833, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('gvwH72jwl50=', 831, -9999, 99999), DecodeNumber('gvwH72jwl50=', 831, -9999, 99999), '');
    answer1.shortTextAnswer = "are";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('9gWnjz9/z/k=', 835, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('soD4dSDFirY=', 833, -9999, 99999), DecodeNumber('ctrq0IK/dz8=', 833, -9999, 99999), '');
    answer2.shortTextAnswer = "will";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('9gWnjz9/z/k=', 837, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('w79S+SN7mjs=', 835, -9999, 99999), DecodeNumber('w79S+SN7mjs=', 835, -9999, 99999), '');
    answer3.shortTextAnswer = "calls";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('/aO3etS4sPo=', 839, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('YJAmGX174zY=', 837, -9999, 99999), DecodeNumber('YJAmGX174zY=', 837, -9999, 99999), '');
    answer4.shortTextAnswer = "going to";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion61()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 60;
    var weight = DecodeNumber('5ngSKOPLhLU=', 841, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('5ngSKOPLhLU=', 841, -1000, 1000),DecodeDecimal('Qxa1reJ+6uA=', 841, -1000, 1000),DecodeDecimal('Qxa1reJ+6uA=', 841, -1000, 1000));
    question.answers.length = 0;
    question.num = 61;
    question.isSingleAns = false;
    question.shortTextQuestion = "We ___ visit Rome next summer. (will)";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('9TiTIm7uji8=', 843, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('xAVLT/q7cTo=', 841, -9999, 99999), DecodeNumber('Qxa1reJ+6uA=', 841, -9999, 99999), '');
    answer1.shortTextAnswer = "will";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('9TiTIm7uji8=', 845, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('uz0sGJnGPuo=', 843, -9999, 99999), DecodeNumber('uz0sGJnGPuo=', 843, -9999, 99999), '');
    answer2.shortTextAnswer = "are going to";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('3cEeo3kcC6E=', 847, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('7eDAStFjtRM=', 845, -9999, 99999), DecodeNumber('7eDAStFjtRM=', 845, -9999, 99999), '');
    answer3.shortTextAnswer = "are visiting";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('d2ydDETnK6U=', 849, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('kvh2IP0EJFo=', 847, -9999, 99999), DecodeNumber('kvh2IP0EJFo=', 847, -9999, 99999), '');
    answer4.shortTextAnswer = "visit";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion62()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 61;
    var weight = DecodeNumber('qfpz7YHPtao=', 851, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('qfpz7YHPtao=', 851, -1000, 1000),DecodeDecimal('VP1rLEuMmTg=', 851, -1000, 1000),DecodeDecimal('VP1rLEuMmTg=', 851, -1000, 1000));
    question.answers.length = 0;
    question.num = 62;
    question.isSingleAns = false;
    question.shortTextQuestion = "She ___ start a new job soon. (be going to)";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('qfpz7YHPtao=', 853, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('VP1rLEuMmTg=', 851, -9999, 99999), DecodeNumber('VP1rLEuMmTg=', 851, -9999, 99999), '');
    answer1.shortTextAnswer = "will";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('zj7zO1tnDew=', 855, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('6h+a7yBY8kA=', 853, -9999, 99999), DecodeNumber('HVnxsl9FlLY=', 853, -9999, 99999), '');
    answer2.shortTextAnswer = "is going to";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('zj7zO1tnDew=', 857, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('QD8S8eoJzns=', 855, -9999, 99999), DecodeNumber('QD8S8eoJzns=', 855, -9999, 99999), '');
    answer3.shortTextAnswer = "is starting";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('YdS6w6SMD9k=', 859, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('ds+iKhrfD3k=', 857, -9999, 99999), DecodeNumber('ds+iKhrfD3k=', 857, -9999, 99999), '');
    answer4.shortTextAnswer = "start";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion63()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 62;
    var weight = DecodeNumber('bCmlRdIXF04=', 861, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('bCmlRdIXF04=', 861, -1000, 1000),DecodeDecimal('DzBobxbTyag=', 861, -1000, 1000),DecodeDecimal('DzBobxbTyag=', 861, -1000, 1000));
    question.answers.length = 0;
    question.num = 63;
    question.isSingleAns = false;
    question.shortTextQuestion = "They ___ moving next month. (present continuous)";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('bCmlRdIXF04=', 863, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "will";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('/d7O3Jebbz8=', 865, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "are going to";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('SKv9yiOzO/k=', 867, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "are";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('9eeHxUCn2no=', 869, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "/";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion64()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 63;
    var weight = DecodeNumber('LTE0JFBClXc=', 871, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('LTE0JFBClXc=', 871, -1000, 1000),DecodeDecimal('uKYLp+Ls6SM=', 871, -1000, 1000),DecodeDecimal('uKYLp+Ls6SM=', 871, -1000, 1000));
    question.answers.length = 0;
    question.num = 64;
    question.isSingleAns = false;
    question.shortTextQuestion = "We ___ have dinner at 9. (present continuous)";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('LTE0JFBClXc=', 873, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('uKYLp+Ls6SM=', 871, -9999, 99999), DecodeNumber('uKYLp+Ls6SM=', 871, -9999, 99999), '');
    answer1.shortTextAnswer = "will";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('LbTj3SChAzk=', 875, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('Yu99ODWJId4=', 873, -9999, 99999), DecodeNumber('docHMUcWNbo=', 873, -9999, 99999), '');
    answer2.shortTextAnswer = "are";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('LbTj3SChAzk=', 877, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('OubxuX3NfAw=', 875, -9999, 99999), DecodeNumber('OubxuX3NfAw=', 875, -9999, 99999), '');
    answer3.shortTextAnswer = "are going to";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('NCECiAj5F9E=', 879, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('rs3zuy7yZYM=', 877, -9999, 99999), DecodeNumber('rs3zuy7yZYM=', 877, -9999, 99999), '');
    answer4.shortTextAnswer = "is";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion65()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 64;
    var weight = DecodeNumber('5k8GN77Wias=', 881, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('5k8GN77Wias=', 881, -1000, 1000),DecodeDecimal('TqjjcFLfXiw=', 881, -1000, 1000),DecodeDecimal('TqjjcFLfXiw=', 881, -1000, 1000));
    question.answers.length = 0;
    question.num = 65;
    question.isSingleAns = false;
    question.shortTextQuestion = "How much ___ do you want?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('5k8GN77Wias=', 883, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('TqjjcFLfXiw=', 881, -9999, 99999), DecodeNumber('TqjjcFLfXiw=', 881, -9999, 99999), '');
    answer1.shortTextAnswer = "apple";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('NYolEDmJmMw=', 885, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('yTzWV9US8jQ=', 883, -9999, 99999), DecodeNumber('TTCOGQYPvLg=', 883, -9999, 99999), '');
    answer2.shortTextAnswer = "water";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('NYolEDmJmMw=', 887, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('rIpTbt3+/vY=', 885, -9999, 99999), DecodeNumber('rIpTbt3+/vY=', 885, -9999, 99999), '');
    answer3.shortTextAnswer = "eggs";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('RagfiKwCrSs=', 889, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('y/76hkdRMOU=', 887, -9999, 99999), DecodeNumber('y/76hkdRMOU=', 887, -9999, 99999), '');
    answer4.shortTextAnswer = "cars";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion66()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 65;
    var weight = DecodeNumber('+WB7M3wj2bs=', 891, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('+WB7M3wj2bs=', 891, -1000, 1000),DecodeDecimal('Mf/SvKqUroY=', 891, -1000, 1000),DecodeDecimal('Mf/SvKqUroY=', 891, -1000, 1000));
    question.answers.length = 0;
    question.num = 66;
    question.isSingleAns = false;
    question.shortTextQuestion = "Can I have some ___, please?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('+WB7M3wj2bs=', 893, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('Mf/SvKqUroY=', 891, -9999, 99999), DecodeNumber('Mf/SvKqUroY=', 891, -9999, 99999), '');
    answer1.shortTextAnswer = "informations";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('bTUNKQ9O74Q=', 895, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('qN+7hyDnqzA=', 893, -9999, 99999), DecodeNumber('qN+7hyDnqzA=', 893, -9999, 99999), '');
    answer2.shortTextAnswer = "advices";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('bgE54gAZplQ=', 897, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('vM6Vq8w/gi8=', 895, -9999, 99999), DecodeNumber('6X/yD29Kjzw=', 895, -9999, 99999), '');
    answer3.shortTextAnswer = "water";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('bgE54gAZplQ=', 899, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('BQHpTQ0VzSc=', 897, -9999, 99999), DecodeNumber('BQHpTQ0VzSc=', 897, -9999, 99999), '');
    answer4.shortTextAnswer = "apples";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion67()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 66;
    var weight = DecodeNumber('FOd9f40GpxM=', 901, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('FOd9f40GpxM=', 901, -1000, 1000),DecodeDecimal('rqXIFsv58a4=', 901, -1000, 1000),DecodeDecimal('rqXIFsv58a4=', 901, -1000, 1000));
    question.answers.length = 0;
    question.num = 67;
    question.isSingleAns = false;
    question.shortTextQuestion = "She is a colleague of my ___.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('FOd9f40GpxM=', 903, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('rqXIFsv58a4=', 901, -9999, 99999), DecodeNumber('rqXIFsv58a4=', 901, -9999, 99999), '');
    answer1.shortTextAnswer = "father";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('VKVnPktXHiU=', 905, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('e9oK2xXMvD4=', 903, -9999, 99999), DecodeNumber('8GA41YV6aFE=', 903, -9999, 99999), '');
    answer2.shortTextAnswer = "father's";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('VKVnPktXHiU=', 907, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('2th36I7ESlQ=', 905, -9999, 99999), DecodeNumber('2th36I7ESlQ=', 905, -9999, 99999), '');
    answer3.shortTextAnswer = "fathers";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('MuT4c1R0Pjo=', 909, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('7Gpt9SaSKFE=', 907, -9999, 99999), DecodeNumber('7Gpt9SaSKFE=', 907, -9999, 99999), '');
    answer4.shortTextAnswer = "father'";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion68()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 67;
    var weight = DecodeNumber('lRfJHDnsyRA=', 911, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('lRfJHDnsyRA=', 911, -1000, 1000),DecodeDecimal('tcBiDBr04Ho=', 911, -1000, 1000),DecodeDecimal('tcBiDBr04Ho=', 911, -1000, 1000));
    question.answers.length = 0;
    question.num = 68;
    question.isSingleAns = false;
    question.shortTextQuestion = "That?s a picture of my ___ house.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('lRfJHDnsyRA=', 913, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('tcBiDBr04Ho=', 911, -9999, 99999), DecodeNumber('tcBiDBr04Ho=', 911, -9999, 99999), '');
    answer1.shortTextAnswer = "parents";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('g5L0E4H7uLM=', 915, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('lebVVJoFQhA=', 913, -9999, 99999), DecodeNumber('lebVVJoFQhA=', 913, -9999, 99999), '');
    answer2.shortTextAnswer = "parent";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('TwJ4gJND6r4=', 917, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('jmmoa0m/yT4=', 915, -9999, 99999), DecodeNumber('jmmoa0m/yT4=', 915, -9999, 99999), '');
    answer3.shortTextAnswer = "parents'";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('+QIs8M9Pr9E=', 919, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('9+FRrBSOyYo=', 917, -9999, 99999), DecodeNumber('TyW1OIB496U=', 917, -9999, 99999), '');
    answer4.shortTextAnswer = "parent's";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion69()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 68;
    var weight = DecodeNumber('vLSAKnIZbUo=', 921, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('vLSAKnIZbUo=', 921, -1000, 1000),DecodeDecimal('ld1yv6EVmTY=', 921, -1000, 1000),DecodeDecimal('ld1yv6EVmTY=', 921, -1000, 1000));
    question.answers.length = 0;
    question.num = 69;
    question.isSingleAns = false;
    question.shortTextQuestion = "It?s a book of my ___.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('vLSAKnIZbUo=', 923, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('ld1yv6EVmTY=', 921, -9999, 99999), DecodeNumber('ld1yv6EVmTY=', 921, -9999, 99999), '');
    answer1.shortTextAnswer = "friend";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('RvV9n7+iEJk=', 925, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('rq5ARl5MjFE=', 923, -9999, 99999), DecodeNumber('g83JkwnxTcI=', 923, -9999, 99999), '');
    answer2.shortTextAnswer = "friend's";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('RvV9n7+iEJk=', 927, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('W8pKdZVOsTQ=', 925, -9999, 99999), DecodeNumber('W8pKdZVOsTQ=', 925, -9999, 99999), '');
    answer3.shortTextAnswer = "friends";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('yoyiI4Iw8ag=', 929, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('rGfMHupFNMQ=', 927, -9999, 99999), DecodeNumber('rGfMHupFNMQ=', 927, -9999, 99999), '');
    answer4.shortTextAnswer = "friend'";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion70()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 69;
    var weight = DecodeNumber('Lslf6FDIPfY=', 931, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Lslf6FDIPfY=', 931, -1000, 1000),DecodeDecimal('d+NMkCxzVu8=', 931, -1000, 1000),DecodeDecimal('d+NMkCxzVu8=', 931, -1000, 1000));
    question.answers.length = 0;
    question.num = 70;
    question.isSingleAns = false;
    question.shortTextQuestion = "This is a photo of my ___ room.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Lslf6FDIPfY=', 933, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('d+NMkCxzVu8=', 931, -9999, 99999), DecodeNumber('d+NMkCxzVu8=', 931, -9999, 99999), '');
    answer1.shortTextAnswer = "sister";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('npeWelLobN4=', 935, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('gDz1vOTGx/4=', 933, -9999, 99999), DecodeNumber('soD4dSDFirY=', 933, -9999, 99999), '');
    answer2.shortTextAnswer = "sister's";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('npeWelLobN4=', 937, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('7hA9TvCBE8Y=', 935, -9999, 99999), DecodeNumber('7hA9TvCBE8Y=', 935, -9999, 99999), '');
    answer3.shortTextAnswer = "sisters";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('GcVveL0pkHc=', 939, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('cyG1zA4he1s=', 937, -9999, 99999), DecodeNumber('cyG1zA4he1s=', 937, -9999, 99999), '');
    answer4.shortTextAnswer = "sister'";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion71()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 70;
    var weight = DecodeNumber('UVd4rcd8eNY=', 941, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('UVd4rcd8eNY=', 941, -1000, 1000),DecodeDecimal('xAVLT/q7cTo=', 941, -1000, 1000),DecodeDecimal('xAVLT/q7cTo=', 941, -1000, 1000));
    question.answers.length = 0;
    question.num = 71;
    question.isSingleAns = false;
    question.shortTextQuestion = "There isn?t ___ bread left.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('UVd4rcd8eNY=', 943, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('xAVLT/q7cTo=', 941, -9999, 99999), DecodeNumber('xAVLT/q7cTo=', 941, -9999, 99999), '');
    answer1.shortTextAnswer = "some";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('SvO2yvu5PTc=', 945, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('BPLtqx1f0M4=', 943, -9999, 99999), DecodeNumber('BPLtqx1f0M4=', 943, -9999, 99999), '');
    answer2.shortTextAnswer = "many";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('zIS8JRWDm6E=', 947, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('Fla2LBgFyzY=', 945, -9999, 99999), DecodeNumber('OF2++TMxhzg=', 945, -9999, 99999), '');
    answer3.shortTextAnswer = "any";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('zIS8JRWDm6E=', 949, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('l1RTpXXXcq0=', 947, -9999, 99999), DecodeNumber('l1RTpXXXcq0=', 947, -9999, 99999), '');
    answer4.shortTextAnswer = "a";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion72()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 71;
    var weight = DecodeNumber('xj6LxGsAgp8=', 951, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('xj6LxGsAgp8=', 951, -1000, 1000),DecodeDecimal('OnBprUh9s2s=', 951, -1000, 1000),DecodeDecimal('OnBprUh9s2s=', 951, -1000, 1000));
    question.answers.length = 0;
    question.num = 72;
    question.isSingleAns = false;
    question.shortTextQuestion = "Can I have ___ water?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('xj6LxGsAgp8=', 953, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('OnBprUh9s2s=', 951, -9999, 99999), DecodeNumber('OnBprUh9s2s=', 951, -9999, 99999), '');
    answer1.shortTextAnswer = "any";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Fn/wi41fDps=', 955, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('6h+a7yBY8kA=', 953, -9999, 99999), DecodeNumber('6h+a7yBY8kA=', 953, -9999, 99999), '');
    answer2.shortTextAnswer = "many";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('DRSFNgUAMpU=', 957, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('++QqMjCk7+A=', 955, -9999, 99999), DecodeNumber('MawmJ4jBJ7c=', 955, -9999, 99999), '');
    answer3.shortTextAnswer = "some";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('DRSFNgUAMpU=', 959, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('P5jdfLABytQ=', 957, -9999, 99999), DecodeNumber('P5jdfLABytQ=', 957, -9999, 99999), '');
    answer4.shortTextAnswer = "a";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion73()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 72;
    var weight = DecodeNumber('iOcyi10hVDs=', 961, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('iOcyi10hVDs=', 961, -1000, 1000),DecodeDecimal('W7OxpSCZYdE=', 961, -1000, 1000),DecodeDecimal('W7OxpSCZYdE=', 961, -1000, 1000));
    question.answers.length = 0;
    question.num = 73;
    question.isSingleAns = false;
    question.shortTextQuestion = "He has ___ money.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Xk0SlHFmhxY=', 963, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('lxgP7WByVbA=', 961, -9999, 99999), DecodeNumber('W7OxpSCZYdE=', 961, -9999, 99999), '');
    answer1.shortTextAnswer = "a lot of";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Xk0SlHFmhxY=', 965, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('Yv8saA3Vds4=', 963, -9999, 99999), DecodeNumber('Yv8saA3Vds4=', 963, -9999, 99999), '');
    answer2.shortTextAnswer = "many";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('4K1QmmHe6vY=', 967, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('67BpiS4LOZc=', 965, -9999, 99999), DecodeNumber('67BpiS4LOZc=', 965, -9999, 99999), '');
    answer3.shortTextAnswer = "few";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('UZcAiXzFknw=', 969, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('T3TgDCShJEc=', 967, -9999, 99999), DecodeNumber('T3TgDCShJEc=', 967, -9999, 99999), '');
    answer4.shortTextAnswer = "lots";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion74()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 73;
    var weight = DecodeNumber('S7a9NYEja9E=', 971, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('S7a9NYEja9E=', 971, -1000, 1000),DecodeDecimal('MLMj3iqJ88I=', 971, -1000, 1000),DecodeDecimal('MLMj3iqJ88I=', 971, -1000, 1000));
    question.answers.length = 0;
    question.num = 74;
    question.isSingleAns = false;
    question.shortTextQuestion = "___ books are on the table.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('S7a9NYEja9E=', 973, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('MLMj3iqJ88I=', 971, -9999, 99999), DecodeNumber('MLMj3iqJ88I=', 971, -9999, 99999), '');
    answer1.shortTextAnswer = "Much";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ckANYGkHGhI=', 975, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('xvH25Y+qqO8=', 973, -9999, 99999), DecodeNumber('Yu99ODWJId4=', 973, -9999, 99999), '');
    answer2.shortTextAnswer = "A lot of";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ckANYGkHGhI=', 977, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('G138wvOeA+8=', 975, -9999, 99999), DecodeNumber('G138wvOeA+8=', 975, -9999, 99999), '');
    answer3.shortTextAnswer = "Little";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('ZHhg0Edh/zw=', 979, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('HfgQMdbM3B0=', 977, -9999, 99999), DecodeNumber('HfgQMdbM3B0=', 977, -9999, 99999), '');
    answer4.shortTextAnswer = "Some";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion75()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 74;
    var weight = DecodeNumber('r2DbFokzmks=', 981, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('r2DbFokzmks=', 981, -1000, 1000),DecodeDecimal('L+6H9nKJAOs=', 981, -1000, 1000),DecodeDecimal('L+6H9nKJAOs=', 981, -1000, 1000));
    question.answers.length = 0;
    question.num = 75;
    question.isSingleAns = false;
    question.shortTextQuestion = "We need ___ sugar for the recipe.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('r2DbFokzmks=', 983, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('L+6H9nKJAOs=', 981, -9999, 99999), DecodeNumber('L+6H9nKJAOs=', 981, -9999, 99999), '');
    answer1.shortTextAnswer = "a few";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('zoEkxgzVLAA=', 985, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('yTzWV9US8jQ=', 983, -9999, 99999), DecodeNumber('yTzWV9US8jQ=', 983, -9999, 99999), '');
    answer2.shortTextAnswer = "few";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('9K14yy42CDU=', 987, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('Vph6ZK4S3vE=', 985, -9999, 99999), DecodeNumber('fmm0VqVzGQM=', 985, -9999, 99999), '');
    answer3.shortTextAnswer = "a little";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('9K14yy42CDU=', 989, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('ss0tb1d8ST8=', 987, -9999, 99999), DecodeNumber('ss0tb1d8ST8=', 987, -9999, 99999), '');
    answer4.shortTextAnswer = "little";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion76()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 75;
    var weight = DecodeNumber('0mwtZSKJ8K8=', 991, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('0mwtZSKJ8K8=', 991, -1000, 1000),DecodeDecimal('hk1Jz1bLBXE=', 991, -1000, 1000),DecodeDecimal('hk1Jz1bLBXE=', 991, -1000, 1000));
    question.answers.length = 0;
    question.num = 76;
    question.isSingleAns = false;
    question.shortTextQuestion = "There are ___ cookies left.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('0mwtZSKJ8K8=', 993, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('hk1Jz1bLBXE=', 991, -9999, 99999), DecodeNumber('hk1Jz1bLBXE=', 991, -9999, 99999), '');
    answer1.shortTextAnswer = "some";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('GDnuTm/Ww0Q=', 995, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('rV/Z6BwT5Bo=', 993, -9999, 99999), DecodeNumber('qL1UeMa45xs=', 993, -9999, 99999), '');
    answer2.shortTextAnswer = "no";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('GDnuTm/Ww0Q=', 997, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('vM6Vq8w/gi8=', 995, -9999, 99999), DecodeNumber('vM6Vq8w/gi8=', 995, -9999, 99999), '');
    answer3.shortTextAnswer = "any";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('aTvk/EmbYAU=', 999, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('l7dw7w6DBWE=', 997, -9999, 99999), DecodeNumber('l7dw7w6DBWE=', 997, -9999, 99999), '');
    answer4.shortTextAnswer = "none";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion77()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 76;
    var weight = DecodeNumber('WDw7jwxhzyk=', 1001, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('WDw7jwxhzyk=', 1001, -1000, 1000),DecodeDecimal('VvgWRGQ2zvo=', 1001, -1000, 1000),DecodeDecimal('VvgWRGQ2zvo=', 1001, -1000, 1000));
    question.answers.length = 0;
    question.num = 77;
    question.isSingleAns = false;
    question.shortTextQuestion = "Do you have ___ questions?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('WDw7jwxhzyk=', 1003, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('VvgWRGQ2zvo=', 1001, -9999, 99999), DecodeNumber('VvgWRGQ2zvo=', 1001, -9999, 99999), '');
    answer1.shortTextAnswer = "some";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('llIR7FGzHN0=', 1005, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('EqpXDamnpTo=', 1003, -9999, 99999), DecodeNumber('e9oK2xXMvD4=', 1003, -9999, 99999), '');
    answer2.shortTextAnswer = "any";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('llIR7FGzHN0=', 1007, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('y3mP76GbkeU=', 1005, -9999, 99999), DecodeNumber('y3mP76GbkeU=', 1005, -9999, 99999), '');
    answer3.shortTextAnswer = "no";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('jmKSFvCq3kg=', 1009, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('LKBa/OrTZgs=', 1007, -9999, 99999), DecodeNumber('LKBa/OrTZgs=', 1007, -9999, 99999), '');
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
    var weight = DecodeNumber('kJjm7f6Y4yA=', 1011, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('kJjm7f6Y4yA=', 1011, -1000, 1000),DecodeDecimal('LVoMg/GmDSs=', 1011, -1000, 1000),DecodeDecimal('LVoMg/GmDSs=', 1011, -1000, 1000));
    question.answers.length = 0;
    question.num = 78;
    question.isSingleAns = false;
    question.shortTextQuestion = "She gave me ___ advice.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('C4ylzTDAAe0=', 1013, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('qc8Whq9ezAo=', 1011, -9999, 99999), DecodeNumber('LVoMg/GmDSs=', 1011, -9999, 99999), '');
    answer1.shortTextAnswer = "some";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('C4ylzTDAAe0=', 1015, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('AGb5bVcI+HY=', 1013, -9999, 99999), DecodeNumber('AGb5bVcI+HY=', 1013, -9999, 99999), '');
    answer2.shortTextAnswer = "no";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('oVbTIOFDZwA=', 1017, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('rzgCvQiInb4=', 1015, -9999, 99999), DecodeNumber('rzgCvQiInb4=', 1015, -9999, 99999), '');
    answer3.shortTextAnswer = "any";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('5VDw11k8vso=', 1019, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('9+FRrBSOyYo=', 1017, -9999, 99999), DecodeNumber('9+FRrBSOyYo=', 1017, -9999, 99999), '');
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
    var weight = DecodeNumber('REvkjJkV0Tw=', 1021, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('REvkjJkV0Tw=', 1021, -1000, 1000),DecodeDecimal('08LeYM7Sv+k=', 1021, -1000, 1000),DecodeDecimal('08LeYM7Sv+k=', 1021, -1000, 1000));
    question.answers.length = 0;
    question.num = 79;
    question.isSingleAns = false;
    question.shortTextQuestion = "She is ___ tall ___ her brother.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('p5rI/oUao+k=', 1023, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('VILhuElX+vk=', 1021, -9999, 99999), DecodeNumber('08LeYM7Sv+k=', 1021, -9999, 99999), '');
    answer1.shortTextAnswer = "as / as";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('p5rI/oUao+k=', 1025, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('rq5ARl5MjFE=', 1023, -9999, 99999), DecodeNumber('rq5ARl5MjFE=', 1023, -9999, 99999), '');
    answer2.shortTextAnswer = "so / as";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('fBgAvEmi5Fk=', 1027, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('vqpTFP2p9Jk=', 1025, -9999, 99999), DecodeNumber('vqpTFP2p9Jk=', 1025, -9999, 99999), '');
    answer3.shortTextAnswer = "more / than";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('jERmKEYS8Oc=', 1029, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('DJ8FjtYm8f0=', 1027, -9999, 99999), DecodeNumber('DJ8FjtYm8f0=', 1027, -9999, 99999), '');
    answer4.shortTextAnswer = "less / than";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion80()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 79;
    var weight = DecodeNumber('vafVxbhb5Ts=', 1031, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('vafVxbhb5Ts=', 1031, -1000, 1000),DecodeDecimal('LSRSH8gvna4=', 1031, -1000, 1000),DecodeDecimal('LSRSH8gvna4=', 1031, -1000, 1000));
    question.answers.length = 0;
    question.num = 80;
    question.isSingleAns = false;
    question.shortTextQuestion = "She sings ___ beautifully ___ her sister.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('lGbZZS+dbpw=', 1033, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('6QxtWPdWKns=', 1031, -9999, 99999), DecodeNumber('LSRSH8gvna4=', 1031, -9999, 99999), '');
    answer1.shortTextAnswer = "as / as";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('lGbZZS+dbpw=', 1035, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('gDz1vOTGx/4=', 1033, -9999, 99999), DecodeNumber('gDz1vOTGx/4=', 1033, -9999, 99999), '');
    answer2.shortTextAnswer = "more / than";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('TRwJYUZj+gU=', 1037, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('mnGAunw7jCk=', 1035, -9999, 99999), DecodeNumber('mnGAunw7jCk=', 1035, -9999, 99999), '');
    answer3.shortTextAnswer = "so / so";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Qd3kSYCuC3g=', 1039, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('V3lXerfGToo=', 1037, -9999, 99999), DecodeNumber('V3lXerfGToo=', 1037, -9999, 99999), '');
    answer4.shortTextAnswer = "less / than";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion81()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 80;
    var weight = DecodeNumber('pnVKeTUJVjA=', 1041, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('pnVKeTUJVjA=', 1041, -1000, 1000),DecodeDecimal('rJIT73UM+Dg=', 1041, -1000, 1000),DecodeDecimal('rJIT73UM+Dg=', 1041, -1000, 1000));
    question.answers.length = 0;
    question.num = 81;
    question.isSingleAns = false;
    question.shortTextQuestion = "She runs ___ faster than me.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('MPN2405UHXA=', 1043, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('L7yfwzcc0yI=', 1041, -9999, 99999), DecodeNumber('rJIT73UM+Dg=', 1041, -9999, 99999), '');
    answer1.shortTextAnswer = "more";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('MPN2405UHXA=', 1045, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('Bu2mYUjieg4=', 1043, -9999, 99999), DecodeNumber('Bu2mYUjieg4=', 1043, -9999, 99999), '');
    answer2.shortTextAnswer = "much";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('x5ktpGhALUQ=', 1047, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('Fla2LBgFyzY=', 1045, -9999, 99999), DecodeNumber('Fla2LBgFyzY=', 1045, -9999, 99999), '');
    answer3.shortTextAnswer = "so";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('7pxuCkNmwuQ=', 1049, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('qzpIoQVhXTw=', 1047, -9999, 99999), DecodeNumber('qzpIoQVhXTw=', 1047, -9999, 99999), '');
    answer4.shortTextAnswer = "most";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion82()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 81;
    var weight = DecodeNumber('UmltPDw/bys=', 1051, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('UmltPDw/bys=', 1051, -1000, 1000),DecodeDecimal('FPp90cd1Om0=', 1051, -1000, 1000),DecodeDecimal('FPp90cd1Om0=', 1051, -1000, 1000));
    question.answers.length = 0;
    question.num = 82;
    question.isSingleAns = false;
    question.shortTextQuestion = "He became ___ responsible over time.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('q9aDftEHFAg=', 1053, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('CZrUwX75G24=', 1051, -9999, 99999), DecodeNumber('FPp90cd1Om0=', 1051, -9999, 99999), '');
    answer1.shortTextAnswer = "more";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('q9aDftEHFAg=', 1055, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('zHjguQ+g4Ug=', 1053, -9999, 99999), DecodeNumber('zHjguQ+g4Ug=', 1053, -9999, 99999), '');
    answer2.shortTextAnswer = "most";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('FaMGrJ8CoGA=', 1057, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('++QqMjCk7+A=', 1055, -9999, 99999), DecodeNumber('++QqMjCk7+A=', 1055, -9999, 99999), '');
    answer3.shortTextAnswer = "as";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('9kQZwhbI8Is=', 1059, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('EFvz6zKPk/A=', 1057, -9999, 99999), DecodeNumber('EFvz6zKPk/A=', 1057, -9999, 99999), '');
    answer4.shortTextAnswer = "very";
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
    ClearFillTheGap(2,0);
    ClearFillTheGap(2,1);
    ClearFillTheGap(2,2);
    ClearFillTheGap(2,3);
    ClearFillTheGap(2,4);
    ClearFillTheGap(2,5);
    ClearFillTheGap(2,6);
    ClearFillTheGap(2,7);
    ClearFillTheGap(2,8);
    ClearFillTheGap(2,9);

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






