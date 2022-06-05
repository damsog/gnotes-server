const parser = require('./parser');
//===================================================================================================================================================
let method1 = "optionsParser";
let StringTests = {
    "score=>8.2":{score:"8.2",others:[]},
    "score=>2|watched":{score:"2",others:["watched"]},
    "score=>2|watched|amazing":{score:"2",others:["watched","amazing"]},
    "score=>3.4|genres=>[action,comedy]":{genres:["action","comedy"],score:"3.4",others:[]},
    "genres=>[action,scify]|must-watch":{genres:["action","scify"],others:["must-watch"]},
    "genres=>[action,fantasy,adventure]|score=>9.2|liked|weird":{genres:["action","fantasy","adventure"],score:"9.2",others:["liked","weird"]},
};

for(const [stringTest,result] of Object.entries(StringTests)) {
    test(`${method1} test : ${stringTest} should return ${JSON.stringify(result)} `, () => {
        expect(parser.optionsParser(stringTest)).toStrictEqual(result);
    });
}

//===================================================================================================================================================
let method2 = "getKeysTypes";
let keyTests = {
    '{"others":["watched"]}':{watched:"val"},
    '{"others":["watched","liked"]}':{watched:"val",liked:"val"},
    '{"score":"8.2"}':{score:"pair"},
    '{"score":"8.2","others":[]}':{score:"pair"},
    '{"genres":["action","comedy"]}':{genres:"list"},
    '{"genres":["action","comedy"],"others":["watched","liked"]}':{genres:"list",watched:"val",liked:"val"},
    '{"genres":["action","comedy"],"score":"8.2","others":["watched","liked"]}':{genres:"list",score:"pair",watched:"val",liked:"val"}
};

for(const [keyJson,result] of Object.entries(keyTests)) {
    test(`${method2} test : ${keyJson} should return ${JSON.stringify(result)}`, () => {
        expect(parser.getKeysTypes( JSON.parse(keyJson) )).toStrictEqual(result);
    });
}

//===================================================================================================================================================
let method3 = "updateOptionsJson";
let updateOptionsInputs = {
    '{"others":["watched"]}':{"genres": ["scify","drama"],"score": "8","others": ["acclaimed","watched"] },
    '{"others":["acclaimed"]}':{"genres": ["scify","drama"],"score": "8","others": ["acclaimed"] },
    '{"score":"5"}':{"genres": ["scify","drama"],"score": "5","others": ["acclaimed"] },
    '{"actors":"15"}':{"genres": ["scify","drama"],"score": "8","actors":"15","others": ["acclaimed"] },
    '{"acclaimed":"yes"}':{"genres": ["scify","drama"],"score": "8","acclaimed":"yes","others": [] },
    '{"genres":"violent"}':{"genres": ["scify","drama","violent"],"score": "8","others": ["acclaimed"] },
    '{"names":["cutter","el cortador"]}':{"genres": ["scify","drama"],"score": "8", "names":["cutter","el cortador"],"others": ["acclaimed"] },
    '{"score":["5","7.8"]}':{"genres": ["scify","drama"],"score": ["5","7.8","8"],"others": ["acclaimed"] },
    '{"genres":["slasher","gore"]}':{"genres": ["scify","drama","slasher","gore"],"score": "8","others": ["acclaimed"] }    
};

let existingFilters = {"genres": ["scify","drama"],"score": "8","others": ["acclaimed"] }

for(const [inJson,result] of Object.entries(updateOptionsInputs)) {
    test(`${method3} test : ${inJson} `, () => {
        expect(parser.updateOptionsJson( JSON.parse(inJson), existingFilters )).toStrictEqual(result);
    });
}

//===================================================================================================================================================
let method4 = "removeOptionsJson";
let removeOptionsJson = {
    '{"others":["controversial"]}':{"genres": ["scify","drama","slasher"],"score": "8","others": ["acclaimed"] },
    '{"others":["score"]}':{"genres": ["scify","drama","slasher"],"others": ["acclaimed","controversial"] },
    '{"others":["genres"]}':{"score": "8","others": ["acclaimed","controversial"] },
    '{"score":"8"}':{"genres": ["scify","drama","slasher"],"others": ["acclaimed","controversial"] },
    '{"genres":"scify"}':{"genres": ["drama","slasher"],"score": "8","others": ["acclaimed","controversial"] },
    '{"genres":["scify","slasher"]}':{"genres": "drama","score": "8","others": ["acclaimed","controversial"] }
};

let existingFilters2 = {"genres": ["scify","drama","slasher"],"score": "8","others": ["acclaimed","controversial"] }

for(const [inJson,result] of Object.entries(removeOptionsJson)) {
    test(`${method4} test : ${inJson} `, () => {
        expect(parser.removeOptionsJson( JSON.parse(inJson), existingFilters2 )).toStrictEqual(result);
    });
}