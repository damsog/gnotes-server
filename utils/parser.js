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

exports.getKeysTypes = (json) => {
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
    let i_keys = this.getKeysTypes(i_json);
    let s_keys = this.getKeysTypes(s_json);
    let updatedJson = JSON.parse(JSON.stringify(s_json));

    // Iterates thrugh all the keys of the incomming object
    for( const [i_key,i_value] of Object.entries(i_keys) ){

        // If the key doesn't exist
        if(!(i_key in s_keys)){

            // Validates if its a single value
            if(i_value==="val"){
                if(!updatedJson["others"]) updatedJson["others"] = []
                updatedJson["others"].push(i_key);
                continue;
            }
            
            // Otherwise just append it to the updated json            
            updatedJson[i_key] = i_json[i_key];
            continue;
        }

        // In case the key exists in any form.
        // Switch for all the posible forms the incomming and the current key could be
        switch (true){
            // Already exists as single value
            case (i_keys[i_key]==="val" && s_keys[i_key]==="val"):
                // Does nothing
                break;
            
            // In as single val but exists as a pair
            case (i_keys[i_key]==="val" && s_keys[i_key]==="pair"):
                // Error reducing from pair to single val
                throw new Error("Error. parameter saved as pair. delete first");

            // In as single val but exists as a list
            case (i_keys[i_key]==="val" && s_keys[i_key]==="list"):
                // Error reducing from list to single val
                throw new Error("Error. parameter saved as list. delete first");   
            
            // In as pair but exists as val
            case (i_keys[i_key]==="pair" && s_keys[i_key]==="val"):
                // Make it pair
                updatedJson["others"].splice(updatedJson["others"].indexOf(i_key), 1);
                updatedJson[i_key] = i_json[i_key];
                break;

            // In as pair but exists as pair
            case (i_keys[i_key]==="pair" && s_keys[i_key]==="pair"):
                // Direct Update
                updatedJson[i_key] = i_json[i_key];
                break;
            
            // In as pair but exists as list
            case (i_keys[i_key]==="pair" && s_keys[i_key]==="list"):
                // Add new
                updatedJson[i_key].push(i_json[i_key]);
                break;
            
            // In as list but exists as val
            case (i_keys[i_key]==="list" && s_keys[i_key]==="val"):
                // Make it list
                updatedJson["others"].splice(updatedJson["others"].indexOf(i_key), 1);
                updatedJson[i_key] = i_json[i_key];
                break;
            
            // In as list but exists as pair
            case (i_keys[i_key]==="list" && s_keys[i_key]==="pair"):
                // Make it list
                let new_list = i_json[i_key];
                new_list.push(s_json[i_key]);
                updatedJson[i_key] = new_list;
                break;
            
            // In as list but exists as list
            case (i_keys[i_key]==="list" && s_keys[i_key]==="list"):
                // Add new. Mix the lists
                for(const i_key_val of i_json[i_key]) updatedJson[i_key].push(i_key_val);

                updatedJson[i_key] = [... new Set(updatedJson[i_key])];
                break;
        }
    }

    return updatedJson;
}

exports.removeOptionsJson = (i_json, s_json) => {
    let i_keys = this.getKeysTypes(i_json);
    let s_keys = this.getKeysTypes(s_json);
    let updatedJson = JSON.parse(JSON.stringify(s_json));

    // Iterates thrugh all the keys of the incomming object
    for( const [i_key,i_value] of Object.entries(i_keys) ){

        // If the key doesn't exist
        if(!(i_key in s_keys)) throw new Error("Error. parameter doesn't exist in the object");

        switch(true){
            // In as val but exists as val
            case (i_keys[i_key]==="val" && s_keys[i_key]==="val"):
                updatedJson["others"].splice(updatedJson["others"].indexOf( i_json[i_key] ), 1);
                break;

            // In as pair but exists as val
            case (i_keys[i_key]==="pair" && s_keys[i_key]==="val"):
                throw new Error("Error. parameter doesn't exist in the object");
            
            // In as pair but exists as pair
            case (i_keys[i_key]==="pair" && s_keys[i_key]==="pair"):
                delete updatedJson[i_key];
                break;

            // In as pair but exists as list
            case (i_keys[i_key]==="pair" && s_keys[i_key]==="list"):
                // If parameter doesn't exist in the object throw an error
                if(!( updatedJson[i_key].includes(i_json[i_key]) )) throw new Error("Error. parameter doesn't exist in the object");

                // If it does exist remove it from list
                updatedJson[i_key].splice(updatedJson[i_key].indexOf( i_json[i_key] ), 1);

                // If after removing the list just has 1 element reduce the key to type pair
                if(updatedJson[i_key].length < 2) updatedJson[i_key] = updatedJson[i_key][0];

                break;
            
            // In as list but exists as val
            case (i_keys[i_key]==="list" && s_keys[i_key]==="val"):
                throw new Error("Error. parameter doesn't exist in the object");
            
            // In as list but exists as pair
            case (i_keys[i_key]==="list" && s_keys[i_key]==="pair"):
                throw new Error("Error. parameter doesn't exist in the object");
            
            // In as list but exists as list
            case (i_keys[i_key]==="list" && s_keys[i_key]==="list"):
                // Iterates for the in list to remove
                for(const i_key_val of i_json[i_key]){
                    // If a term on the in list throw an error
                    if(!( updatedJson[i_key].includes(i_key_val) )) throw new Error("Error. parameter doesn't exist in the object");

                    // Removes the elements
                    updatedJson[i_key].splice(updatedJson[i_key].indexOf( i_key_val ), 1);
                }
                
                // If after removing the list just has 1 element reduce the key to type pair
                if(updatedJson[i_key].length < 2) updatedJson[i_key] = updatedJson[i_key][0];

                // If after removing the list is empty rmoves it completly
                if(updatedJson[i_key].length < 2) delete updatedJson[i_key];

                break;
            
            // Default its the in is type val. in which case just delete
            default:
                delete updatedJson[i_key];
                break;
        }
    }

    return updatedJson;
}