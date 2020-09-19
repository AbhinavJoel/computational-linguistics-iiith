window.getPosData = function(sentence) {
    const pos = require('../Libraries/index.js');
    const words = new pos.Lexer().lex(sentence);

    return (new pos.Tagger().tag(words))
}