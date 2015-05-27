/**
 * @author Alejandro Perez Martin
 * @url http://linkedin.com/aleperez92
* */

var fs = require('fs');

/* Show error when missing parameters */
if (process.argv.length < 4) {
    console.log("Please give at least 4 parameters");
    console.log("node merge.js destination_file file_1 file_2 ... file_n")
    process.exit();
}

/* Destination file path */
var destinationFile = './' + process.argv[2];

/* Create destination file */
fs.writeFile(destinationFile, '', function (err) {
    if (err) {
        console.log("Couldn't create destination file");
        process.exit();
    }
});

for (var i = 3, len = process.argv.length; i < len; i++) {

    /* Read source file */
    fs.readFile('./' + process.argv[i], function (err, data) {

        if (err) {
            console.log("Couldn't read the source file");
            return;
        }
  		
        /* Append content from source file to destination file */
        fs.appendFile(destinationFile, data, function (err) {
            if (err) console.log("Couldn't append to destination file");
        });

    });
}
