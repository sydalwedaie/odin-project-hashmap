import { LinkedList } from "./linkedlist.js";
import { hash } from "./helpers.js";

export function HashMap(capacity = 16, loadFactor = 0.75) {
  let hashmap = [];

  function init(capacity) {
    for (let i = 0; i < capacity; i++) {
      hashmap.push(LinkedList());
    }
  }

  init(capacity);

  const getHashmap = () => hashmap;

  const printHashmap = () => {
    const buckets = hashmap.map((bucket) => bucket.getList());
    console.dir(buckets, { depth: null, colors: true });
  };

  const set = (key, value) => {
    const hashCode = hash(key, capacity);
    const bucket = hashmap[hashCode];
    const entry = bucket.findEntry(key);

    if (entry) {
      entry[key] = value;
    } else {
      bucket.prepend({ [key]: value });
    }
  };

  const get = (key) => {
    const hashCode = hash(key, capacity);
    const bucket = hashmap[hashCode];
    const entry = bucket.findEntry(key);
    return entry ? entry[key] : null;
  };

  const has = (key) => {
    const hashCode = hash(key, capacity);
    const bucket = hashmap[hashCode];
    const entry = bucket.findEntry(key);
    return entry ? true : false;
  };

  const remove = (key) => {
    const hashCode = hash(key, capacity);
    const bucket = hashmap[hashCode];

    const returnValue = bucket.removeNode(key);
    if (bucket.size() === 0) {
      hashmap.splice(hashCode, 1);
    }

    return returnValue;
  };

  const length = () => {
    return hashmap.reduce((sum, curBucket) => sum + curBucket.size(), 0);
  };

  const clear = () => {
    hashmap.forEach((bucket) => bucket.clear());
  };

  return { getHashmap, printHashmap, set, get, has, remove, length, clear };
}

const test = HashMap();
test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

test.printHashmap();

console.log("# Test length");
console.log("should print 12: ", test.length());
test.length();

console.log("# Test get");
console.log("should print purple: ", test.get("grape"));
console.log("should print null: ", test.get("hello"));

console.log("# Test has");
console.log("should print true: ", test.has("grape"));
console.log("should print false: ", test.has("hello"));

console.log("# Test remove");
console.log(test.remove("apple"));
console.log("hashmap does not include the apple entry");
test.printHashmap();

console.log("# Test clear");
test.clear();
test.printHashmap();
