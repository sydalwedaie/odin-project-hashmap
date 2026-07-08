import { LinkedList } from "./linkedlist.js";
import { hash } from "./helpers.js";

export function HashMap(capacity = 16, loadFactor = 0.75) {
  const hashmap = [];

  const getHashmap = () => hashmap;

  const printHashmap = () => {
    const lists = hashmap.map((item) => item.getList());
    console.dir(lists, { depth: null, colors: true });
  };

  const set = (key, value) => {
    const hashCode = hash(key, capacity);
    const bucket = hashmap[hashCode];

    if (bucket === undefined) {
      const list = LinkedList();
      list.prepend({ [key]: value });
      hashmap[hashCode] = list;
      return;
    }

    const link = bucket.findLink(key);
    if (link) {
      link[key] = value;
    } else {
      bucket.prepend({ [key]: value });
    }
  };

  const get = (key) => {
    const hashCode = hash(key, capacity);
    const bucket = hashmap[hashCode];

    if (bucket === undefined) return null;
    const link = bucket.findLink(key);
    return link ? link[key] : null;
  };

  const has = (key) => {
    const hashCode = hash(key, capacity);
    const bucket = hashmap[hashCode];

    if (bucket === undefined) return false;
    const link = bucket.findLink(key);
    return link ? true : false;
  };

  const remove = (key) => {
    const hashCode = hash(key, capacity);
    const bucket = hashmap[hashCode];

    if (bucket === undefined) return null;
    const returnValue = bucket.removeNode(key);
    if (bucket.size() === 0) {
      hashmap.splice(hashCode, 1);
    }

    return returnValue;
  };

  return { getHashmap, printHashmap, set, get, has, remove };
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
