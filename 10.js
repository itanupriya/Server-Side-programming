function findAllIndexes(str, word) {
    let indexes = [];
    let index = str.indexOf(word);

    while (index !== -1) {
        indexes.push(index);
        index = str.indexOf(word, index + 1);
    }
    return indexes;
}

console.log(findAllIndexes("hello world hello", "hello"));