import { LinkedList } from "./linkedlist.js";
import { hash } from "./helpers.js";

export function HashMap(capacity = 16, loadFactor = 0.75) {
  // Helper functions
  function init(capacity) {
    for (let i = 0; i < capacity; i++) {
      hashmap.push(LinkedList());
    }
  }

  function getBucketData(key, capacity) {
    const hashCode = hash(key, capacity);
    const bucket = hashmap[hashCode];
    const entry = bucket.findEntry(key);

    return { hashCode, bucket, entry };
  }

  // Init hashmap array
  let hashmap = [];
  init(capacity);

  // Aux methods
  const getHashmap = () => hashmap;
  const printHashmap = () => {
    const buckets = hashmap.map((bucket) => bucket.getList());
    console.dir(buckets, { depth: null, colors: true });
  };

  // Primary methods
  const set = (key, value) => {
    const { bucket, entry } = getBucketData(key, capacity);

    if (entry) {
      entry[key] = value;
    } else {
      bucket.prepend({ [key]: value });
    }
  };

  const get = (key) => {
    const { entry } = getBucketData(key, capacity);
    return entry ? entry[key] : null;
  };

  const has = (key) => {
    const { entry } = getBucketData(key, capacity);
    return entry ? true : false;
  };

  const remove = (key) => {
    const { hashCode, bucket } = getBucketData(key, capacity);

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

  const keys = () => {
    const entries = {};
    hashmap.forEach((bucket) => Object.assign(entries, bucket.getEntries()));
    return Object.keys(entries);
  };

  const values = () => {
    const entries = {};
    hashmap.forEach((bucket) => Object.assign(entries, bucket.getEntries()));
    return Object.values(entries);
  };

  const entries = () => {
    const entries = {};
    hashmap.forEach((bucket) => Object.assign(entries, bucket.getEntries()));
    return Object.entries(entries);
  };

  return {
    getHashmap,
    printHashmap,
    set,
    get,
    has,
    remove,
    length,
    clear,
    keys,
    values,
    entries,
  };
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

console.log("# Test keys");
console.log(test.keys());

console.log("# Test values");
console.log(test.values());

console.log("# Test entries");
console.log(test.entries());
/*
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

console.log("# Test keys");
console.log(test.keys());

console.log("# Test clear");
test.clear();
test.printHashmap();
*/
