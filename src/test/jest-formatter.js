const jestResults = require('../../hiddenTemp.json')
const fs = require('fs');

let formattedResults = {
    "stats": {
        "tests": jestResults["numTotalTests"],
        "passes": jestResults["numPassedTests"],
        "failures": jestResults["numFailedTests"]
    }
};

console.log(formattedResults)

// delete the temp file
try {
    fs.unlinkSync('./hiddenTemp.json');
} catch (error) {
    console.log(error);
}