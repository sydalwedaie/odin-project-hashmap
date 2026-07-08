import { makeList, makeArray, stitchLists } from "./helpers.js";

export function Node(value, nextNode) {
  return {
    value: value || null,
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
  const prepend = (value) => {
    list = size() === 0 ? Node(value) : Node(value, list);
  };

  const size = () => {
    function traverse(list) {
      if (list.next === null) return 1;
      return 1 + traverse(list.next);
    }

    if (JSON.stringify(list) === "{}") return 0;
    return traverse(list);
  };

  const findLink = (key) => {
    if (size() === 0) return null;

    let currentNode = list;
    while (!(key in currentNode.value) && currentNode.next !== null) {
      currentNode = currentNode.next;
    }

    return key in currentNode.value ? currentNode.value : null;
  };

  const removeNode = (key) => {
    if (size() === 0) return false;

    // Found at first index
    if (key in list.value) {
      list = size() === 1 ? {} : list.next;
      return true;
    }

    // Traverse to find in rest
    let currentNode = list;
    while (currentNode.next !== null && !(key in currentNode.next.value)) {
      currentNode = currentNode.next;
    }

    if (currentNode.next !== null && key in currentNode.next.value) {
      currentNode.next = currentNode.next.next;
      return true;
    } else {
      return false;
    }
  };

  // May be needed?
  const at = (index) => {
    if (index > size() || index < 0) {
      return undefined;
    }

    let currentNode = list;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next || currentNode;
    }

    return currentNode.value;
  };

  const contains = (key) => {
    if (size() === 0) return false;

    let currentNode = list;
    while (!(key in currentNode.value) && currentNode.next !== null) {
      currentNode = currentNode.next;
    }

    return key in currentNode.value;
  };

  const findIndex = (value) => {
    if (size() === 0 || !contains(value)) return -1;

    let currentNode = list;
    let index = 0;
    while (currentNode.value !== value && currentNode.next !== null) {
      currentNode = currentNode.next;
      index++;
    }

    return index;
  };

  const toString = () => {
    function traverse(list) {
      let string = `( ${list.value} ) -> `;
      if (list.next === null) return (string += "null");
      return string + traverse(list.next);
    }

    if (size() === 0) return "";
    return traverse(list);
  };
  return {
    initSample,
    getList,
    clear,
    prepend,
    size,
    findLink,
    removeNode,
    at,
    contains,
    findIndex,
    toString,
  };
}
