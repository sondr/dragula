var cache = {};
var start = '(?:^|\\s)';
var end = '(?:\\s|$)';

function lookupClass(className) {
  let cached = cache[className];
  if (cached) {
    cached.lastIndex = 0;
  } else {
    cache[className] = cached = new RegExp(start + className + end, 'g');
  }
  return cached;
}

export function add(el, className) {
  var current = el.className;
  if (!current.length) {
    el.className = className;
  } else if (!lookupClass(className).test(current)) {
    el.className += ' ' + className;
}
}

export function rm(el, className) {
    el.className = el.className.replace(lookupClass(className), ' ').trim();
}

// module.exports = {
//   add: addClass,
//   rm: rmClass
// };