import { LinkedList } from "./linkedlist.js";
import { hash, loadSampleHashmap } from "./helpers.js";

export function HashMap(capacity = 16, loadFactor = 0.75) {
  // Helper functions
  function init(capacity) {
    hashmap.splice(0);
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

  function grow() {
    capacity = capacity * 2;
    const entriesArr = entries();
    init(capacity);
    entriesArr.forEach((entry) => set(entry[0], entry[1]));
  }

  // Init hashmap array
  const hashmap = [];
  init(capacity);

  // Aux methods
  const getHashmap = () => hashmap.map((bucket) => bucket.print());
  const print = () => {
    return hashmap.map((bucket) => bucket.toString()).join("\n");
  };

  // Primary methods
  const set = (key, value) => {
    const { bucket, entry } = getBucketData(key, capacity);

    if (entry) {
      entry[key] = value;
    } else {
      bucket.prepend({ [key]: value });
    }

    if (length() > capacity * loadFactor) {
      grow();
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
    hashmap.forEach((bucket) => Object.assign(entries, bucket.entries()));
    return Object.keys(entries);
  };

  const values = () => {
    const entries = {};
    hashmap.forEach((bucket) => Object.assign(entries, bucket.entries()));
    return Object.values(entries);
  };

  const entries = () => {
    const entries = {};
    hashmap.forEach((bucket) => Object.assign(entries, bucket.entries()));
    return Object.entries(entries);
  };

  return {
    getHashmap,
    print,
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
