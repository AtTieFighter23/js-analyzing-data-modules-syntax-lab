require('datejs');

/**
 * Combinearrays of usernames 
 * return an object with the merged users + merge date.
 * 
 * @param {...Array<string>} args 
 * @returns {Object} { users: string[], merge_date: string }
 */
function combineUsers(...args) {
    // Initialize the return object
    const combinedObject = {
        users: []
    };

    // Loop through each array and merge 
    for (const userArray of args) {
        if (Array.isArray(userArray)) {
            combinedObject.users.push(...userArray);
        }
    }

    // Add today's date in M/d/yyyy format
    combinedObject.merge_date = new Date().toString("M/d/yyyy");

    return combinedObject;
}

module.exports = { combineUsers };