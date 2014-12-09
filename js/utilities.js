var extend, pluralize, signposts, store, uuid, _uuid,
  __slice = [].slice,
  __hasProp = {}.hasOwnProperty,
  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

signposts = [8, 12, 16, 20];

extend = function() {
  var key, obj, objects, result, _i, _len;
  objects = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  result = {};
  for (_i = 0, _len = objects.length; _i < _len; _i++) {
    obj = objects[_i];
    for (key in obj) {
      if (!__hasProp.call(obj, key)) continue;
      result[key] = obj[key];
    }
  }
  return result;
};

pluralize = function(count, word) {
  if (count === 1) {
    return word;
  } else {
    return word + 's';
  }
};

store = function(namespace, data) {
  if (data) {
    return localStorage.setItem(namespace, JSON.stringify(data));
  }
  data = localStorage.getItem(namespace);
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

_uuid = function(i, j) {
  var nbr;
  nbr = (function() {
    switch (i) {
      case 12:
        return 4;
      case 16:
        return j & 3 | 8;
      default:
        return j;
    }
  })();
  return nbr.toString(16);
};

uuid = function() {
  var i, random, _i;
  uuid = '';
  for (i = _i = 0; _i < 32; i = ++_i) {
    random = Math.random() * 16 | 0;
    if (__indexOf.call(signposts, i) >= 0) {
      uuid += '-';
    }
    uuid += _uuid(i, random);
  }
  return uuid;
};

module.exports = {
  extend: extend,
  pluralize: pluralize,
  store: store,
  uuid: uuid
};
