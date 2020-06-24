const fs = require('fs');
const data = {'data': 'data'};
const result = {'result': 'result'};

const readFileNames = (dirname) => {
  return new Promise((resolve, reject) => {
    fs.readdir(dirname, function(err, filenames) {
      if (err) {
        reject(err);
        return;
      }
      resolve(filenames);
    });
  });
}

(() => {
    const folders = ['folder1', 'folder2', 'folder3'];
    folders.forEach(async (dirname) => {
      const filenames = await readFileNames(dirname);
      await Promise.all(filenames.map(file => {
        return new Promise(async (resolve, reject) => {
          try {
            const path = './' + dirname + '/' + file;
            let func = require(path);
            result['result'] = path;
            func(data, result);
            resolve();
          } catch (e) {
            reject(e);
          }
        });
      }))
    });
})();