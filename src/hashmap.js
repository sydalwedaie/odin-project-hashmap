import { LinkedList } from "./linkedlist.js";

export function HashMap(capacity = 16, loadFactor = 0.75) {
  // Helper functions
  function hash(key, capacity) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % capacity;
    }
    return hashCode;
  }

  function init(capacity) {
    // The hash map needs to be completely empty for the grow function to work properly
    hashmap.splice(0);
    for (let i = 0; i < capacity; i++) {
      hashmap.push(LinkedList());
    }
  }

  function getBucketData(key, capacity) {
    const hashCode = hash(key, capacity);
    if (hashCode < 0 || hashCode >= capacity) {
      throw new Error("Trying to access index out of bounds");
    }
    const bucket = hashmap[hashCode];
    const entry = bucket.findEntry(key);
    return { hashCode, bucket, entry };
  }

  function grow() {
    capacity = capacity * 2;
    const entriesArr = entries();
    init(capacity);
    entriesArr.forEach(([key, value]) => set(key, value));
  }

  // Init hashmap array
  const hashmap = [];
  init(capacity);

  // Aux methods
  const getHashmap = () => hashmap.map((bucket) => bucket.getList());
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
    const { bucket } = getBucketData(key, capacity);
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
