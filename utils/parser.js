exports.optionsParser = (string_filters, allow_lists = true) => {
    let filters_json = {};
    let others_list = [];

    const filters_array = string_filters.split("|");
    
    for (const entry of filters_array) {
        let entry_array = entry.split("=>");

        // TODO: Check if Keyval is valid. Checks here if DB injection
 
        // Check if more than 2 values
        if (entry_array.length > 2) throw new Error("Filter not understood.");
        
        // Check if less than 2 values
        if (entry_array.length < 2){ others_list.push(entry_array[0]); continue };

        // If has exactly 2 elements
        // If the second element is an array
        if ( ( (entry_array[1].substring(0,1) === "[") && 
               (entry_array[1].substring(entry_array[1].length-1,entry_array[1].length) === "]" ) ) &&
               allow_lists ){

            data = entry_array[1].substring(1,entry_array[1].length-1).split(",");
        }else{
            data = entry_array[1];
        }

        filters_json[entry_array[0]] = data;
        
    }

    filters_json["others"] = others_list;

    return filters_json;
}

getKeysTypes = (json) => {
    let keysTypesJson = {};

    for (const [key, value] of Object.entries(json)) {
        if(key === 'others') continue;

        if(typeof value === 'string'){
            keysTypesJson[key] = 'pair';
            continue;
        }

        keysTypesJson[key] = 'list';
    }

    if("others" in json)
        for( const val of json["others"] ) keysTypesJson[val] = 'val';

    return keysTypesJson;
}

exports.updateOptionsJson = (i_json, s_json) => {
    let i_keys = getKeysTypes(i_json);
    let s_keys = getKeysTypes(s_json);
    let updatedJson = JSON.parse(JSON.stringify(s_json));

    // Iterates thrugh all the keys of the incomming object
    for( const [i_key,i_value] of Object.entries(i_keys) ){

        // If the key doesn't exist
        if(!(i_key in s_keys)){
            // Validates if its a single value
            console.log("new key");
            if(i_value==="val"){
                console.log("new key val");
                updatedJson["others"].push(i_key);
                continue;
            }
            // Otherwise just append it to the updated json            
            console.log("new key other");
            updatedJson[i_key] = i_json[i_key];
            continue;
        }

        // In case the key exists in any form.
        // Switch for all the posible forms the incomming and the current key could be
        switch (true){
            // Already exists as single value
            case (i_keys[i_key]==="val" && s_keys[i_key]==="val"):
                console.log("case 1");
                // Does nothing
                break;
            
            // In as single val but exists as a pair
            case (i_keys[i_key]==="val" && s_keys[i_key]==="pair"):
                console.log("case 2");
                // Error reducing from pair to single val
                throw new Error("Error. parameter saved as pair. delete first");

            // In as single val but exists as a list
            case (i_keys[i_key]==="val" && s_keys[i_key]==="list"):
                console.log("case 3");
                // Error reducing from list to single val
                throw new Error("Error. parameter saved as list. delete first");   
            
            // In as pair but exists as val
            case (i_keys[i_key]==="pair" && s_keys[i_key]==="val"):
                console.log("case 4");
                // Make it pair
                updatedJson["others"].splice(updatedJson["others"].indexOf(i_key), 1);
                updatedJson[i_key] = i_json[i_key];
                break;

            // In as pair but exists as pair
            case (i_keys[i_key]==="pair" && s_keys[i_key]==="pair"):
                console.log("case 5");
                // Direct Update
                updatedJson[i_key] = i_json[i_key];
                break;
            
            // In as pair but exists as list
            case (i_keys[i_key]==="pair" && s_keys[i_key]==="list"):
                console.log("case 6");
                // Add new
                updatedJson[i_key].push(i_json[i_key]);
                break;
            
            // In as list but exists as val
            case (i_keys[i_key]==="list" && s_keys[i_key]==="val"):
                console.log("case 7");
                // Make it list
                updatedJson["others"].splice(updatedJson["others"].indexOf(i_key), 1);
                updatedJson[i_key] = i_json[i_key];
                break;
            
            // In as list but exists as pair
            case (i_keys[i_key]==="list" && s_keys[i_key]==="pair"):
                console.log("case 8");
                // Make it list
                let new_list = i_json[i_key];
                new_list.push(s_json[i_key]);
                updatedJson[i_key] = new_list;
                break;
            
            // In as list but exists as list
            case (i_keys[i_key]==="list" && s_keys[i_key]==="list"):
                console.log("case 9");
                // Add new. Mix the lists
                for(const i_key_val of i_json[i_key]) updatedJson[i_key].push(i_key_val);

                updatedJson[i_key] = [... new Set(updatedJson[i_key])];
                break;
        }
    }

    return updatedJson;
}