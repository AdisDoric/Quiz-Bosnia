function Question(text, options, answer) {
    this.text = text;
    this.options = options;
    this.answer = answer;
}

Question.prototype.isAnswerCorrect = function(option) {
    return this.answer === option;
}
