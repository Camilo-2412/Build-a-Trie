function buildTrie(...words) {
  var res = {};

  var check = function (value, tree) {
    for (letter in tree) {
      if (value.startsWith(letter)) return letter;
    }
  };

  var has = function (key, tree) {
    return key in tree;
  };

  var insert = function (letter, tree) {
    if (Object.getOwnPropertyNames(res).length === 0) res[letter] = null;
    else {
      if (!has(letter, tree)) {
        if (check(letter, tree)) {
          var key = tree[check(letter, tree)];
          if (key === null) {
            var temp = {};
            temp[letter] = null;
            tree[check(letter, tree)] = temp;
          } else {
            insert(letter, key);
          }
        } else {
          tree[letter] = null;
        }
      }
    }
  };
  
  // Implement me! :)
  if (!words.length) return {};
  if (words.length === 1 && words.includes("")) return {};

  words.forEach((word) => {
    var value = "";
    for (let index = 0; index < word.length; index++) {
      value += word.charAt(index);
      insert(value, res);
    }
  });
  return res;
}

var resultado = buildTrie("true", "trust");
console.log(resultado);
