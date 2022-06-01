const  optionsParser = (string_filters, allow_lists = true) => {
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

module.exports = optionsParser;