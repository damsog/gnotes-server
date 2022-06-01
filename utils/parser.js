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
    keysTypesJson = {};

    for (const [key, value] of Object.entries(json)) {
        if(key === 'others') continue;

        if(typeof value === 'string'){
            keysTypesJson[key] = 'pair';
            continue;
        }

        keysTypesJson[key] = 'list';
    }

    for( const val of json["others"]) keysTypesJson[val] = 'val';

    return keysTypesJson;
}

exports.updateOptionsJson = (i_json, s_json) => {
    i_keys = getKeysTypes(i_json);
    s_keys = getKeysTypes(s_json);
    updatedJson = Object.assign({}, s_json);

    for( const i_key of i_keys ){
        switch (true){
            case (i_keys[i_key]==="val" && s_keys[i_key]==="val"):
                // Does nothing
                break;

            case (i_keys[i_key]==="val" && s_keys[i_key]==="pair"):
                // Error reducing from pair to single val
                throw new Error("Error. parameter saved as pair. delete first");

            case (i_keys[i_key]==="val" && s_keys[i_key]==="list"):
                // Error reducing from list to single val
                throw new Error("Error. parameter saved as list. delete first");   

            case (i_keys[i_key]==="pair" && s_keys[i_key]==="val"):
                // Make ir pair
                updatedJson["others"].splice(updatedJson["others"].indexOf(i_key), 1);
                updatedJson[i_key] = i_json[i_key];
                break;

            case (i_keys[i_key]==="pair" && s_keys[i_key]==="pair"):
                // Direct Save
                updatedJson[i_key] = i_json[i_key];
                break;

            case (i_keys[i_key]==="pair" && s_keys[i_key]==="list"):
                // Add new
                updatedJson[i_key].push(i_json[i_key]);
                break;

            case (i_keys[i_key]==="list" && s_keys[i_key]==="val"):
                // Make it list
                updatedJson["others"].splice(updatedJson["others"].indexOf(i_key), 1);
                updatedJson[i_key] = i_json[i_key];
                break;

            case (i_keys[i_key]==="list" && s_keys[i_key]==="pair"):
                // Make it list
                let new_list = i_json[i_key];
                new_list.push(s_json[i_key]);
                updatedJson[i_key] = new_list;
                break;

            case (i_keys[i_key]==="list" && s_keys[i_key]==="list"):
                // Add new
                let combined_list = s_json[i_key];
                for(const i_key_val of i_json[i_key]) combined_list.push(i_key_val);

                updatedJson[i_key] = [... Set(combined_list)];
                break;
        }
    }

    return updatedJson;
}