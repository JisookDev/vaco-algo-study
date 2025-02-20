/**
 * leetcode problem link: https://leetcode.com/problems/design-add-and-search-words-data-structure
 */

var WordDictionary = function () {
  this.trie = {};
};

/**
 * @param {string} word
 * @return {void}
 */

WordDictionary.prototype.addWord = function (word) {
  let root = this.trie;

  for (let i = 0; i < word.length; i++) {
    if (!root[word[i]]) root[word[i]] = {};
    root = root[word[i]];
  }
  root.isEnd = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */

WordDictionary.prototype.search = function (word) {
  return this.bfs(word, 0, this.trie);
};

WordDictionary.prototype.bfs = function (word, index, node) {
  if (index === word.length) return node.isEnd === true;

  if (word[index] === ".") {
    for (let key in node) {
      if (this.bfs(word, index + 1, node[key])) return true;
    }
  } else if (node[word[index]]) {
    return this.bfs(word, index + 1, node[word[index]]);
  }

  return false;
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
