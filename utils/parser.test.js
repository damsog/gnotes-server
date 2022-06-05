const parser = require('./parser');

StringTests = {
    "score=>8.2":{score:"8.2",others:[]},
    "score=>2|watched":{score:"2",others:["watched"]},
    "score=>2|watched|amazing":{score:"2",others:["watched","amazing"]},
    "score=>3.4|genres=>[action,comedy]":{genres:["action","comedy"],score:"3.4",others:[]},
    "genres=>[action,scify]|must-watch":{genres:["action","scify"],others:["must-watch"]},
    "genres=>[action,fantasy,adventure]|score=>9.2|liked|weird":{genres:["action","fantasy","adventure"],score:"9.2",others:["liked","weird"]},
};

for(const [stringTest,result] of Object.entries(StringTests)) {
    test(`optionsParser test : ${stringTest} `, () => {
        expect(parser.optionsParser(stringTest)).toStrictEqual(result);
    });
}