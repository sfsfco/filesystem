const fs = require('fs');
// function read file

function readMyFile(array) {
    let element = [];
    for (let index = 0; index < array.length; index++) {
        element.push(new Promise(function (resolve, reject) {
            fs.readFile(array[index], 'utf8', function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });

        }));

    }

    return Promise.all(element);
}

readMyFile(['file1.txt', 'file2.txt', 'file3.txt']).then((data) => {
    console.log(data);
}); 
