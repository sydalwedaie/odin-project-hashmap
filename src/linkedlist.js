import { makeList, makeArray } from "./helpers.js";

export function Node(entry, nextNode) {
  return {
    entry: entry || null,
    next: nextNode || null,
  };
}

export function LinkedList() {
  let list = {};

  // Aux methods
  const initSample = () =>
    (list = makeList(
      { key1: "value1" },
      { key2: "value2" },
      { key3: "value3" },
      { key4: "value4" },
    ));
  const getList = () => list;
  const clear = () => (list = {});

  // Required methods
  const prepend = (entry) => {
    list = size() === 0 ? Node(entry) : Node(entry, list);
  };

  const size = () => {
    function traverse(list) {
      if (list.next === null) return 1;
      return 1 + traverse(list.next);
    }

    if (JSON.stringify(list) === "{}") return 0;
    return traverse(list);
  };

  const findEntry = (key) => {
    if (size() === 0) return null;

    let currentNode = list;
    while (!(key in currentNode.entry) && currentNode.next !== null) {
      currentNode = currentNode.next;
    }

    return key in currentNode.entry ? currentNode.entry : null;
  };

  const removeNode = (key) => {
    if (size() === 0) return false;

    // Found at first index
    if (key in list.entry) {
      list = size() === 1 ? {} : list.next;
      return true;
    }

    // Traverse to find in rest
    let currentNode = list;
    while (currentNode.next !== null && !(key in currentNode.next.entry)) {
      currentNode = currentNode.next;
    }

    if (currentNode.next !== null && key in currentNode.next.entry) {
      currentNode.next = currentNode.next.next;
      return true;
    } else {
      return false;
    }
  };

  const entries = () => {
    if (size() === 0) return {};

    const entries = {};
    let currentNode = list;
    do {
      const key = Object.keys(currentNode.entry)[0];
      const value = Object.values(currentNode.entry)[0];
      entries[key] = value;
      currentNode = currentNode.next;
    } while (currentNode !== null);

    return entries;
  };

  const toString = () => {
    function traverse(list) {
      const key = Object.keys(list.entry)[0];
      const value = Object.values(list.entry)[0];
      let string = `( ${key}: ${value} ) -> `;
      if (list.next === null) return (string += "null");
      return string + traverse(list.next);
    }

    if (size() === 0) return "-";
    return traverse(list);
  };

  return {
    initSample,
    getList,
    clear,
    prepend,
    size,
    findEntry,
    removeNode,
    entries,
    toString,
  };
}
