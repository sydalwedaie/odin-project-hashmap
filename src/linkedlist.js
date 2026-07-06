import { makeList, makeArray, stitchLists } from "./helpers.js";

export function Node(value, nextNode) {
  return {
    value: value || null,
    next: nextNode || null,
  };
}

export function LinkedList() {
  let list = {};

  // Auxillary methods
  const getList = () => list;
  const initSample = () => (list = makeList(1, 2, 3, 4));
  const clear = () => (list = {});

  // Required methods
  const append = (value) => {
    function traverse(value, list) {
      if (list.next === null) list.next = Node(value);
      else traverse(value, list.next);
    }

    if (size() === 0) {
      list = Node(value);
    } else {
      traverse(value, list);
    }
  };

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

  const head = () => {
    return size() === 0 ? undefined : list.value;
  };

  const tail = () => {
    function traverse(list) {
      if (list.next === null) return list.value;
      return traverse(list.next);
    }

    return size() === 0 ? undefined : traverse(list);
  };

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

  const pop = () => {
    const headNodeValue = head();
    if (headNodeValue) {
      // Handle single and multi-node at the same time
      list = list.next || {};
    }

    return headNodeValue;
  };

  const contains = (value) => {
    if (size() === 0) return false;

    let currentNode = list;
    while (currentNode.value !== value && currentNode.next !== null) {
      currentNode = currentNode.next;
    }

    return currentNode.value === value;
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

  // Extra Credit
  const insertAt0 = (index, ...values) => {
    if (index < 0 || index > size()) {
      throw new RangeError("Index out of bound.");
    } else if (size() === 0) {
      list = makeList(...values);
    } else {
      const array = makeArray(list);
      array.splice(index, 0, ...values);
      list = makeList(...array);
    }
  };

  const insertAt = (index, ...values) => {
    if (index < 0 || index > size()) {
      throw new RangeError("Index out of bound.");
    }

    const insertedList = makeList(...values);

    if (size() === 0) {
      list = insertedList;
      return;
    }

    if (index === 0) {
      stitchLists(insertedList, list);
      list = insertedList;
      return;
    }

    let current = list;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }

    const restOfList = current.next;
    current.next = null;

    stitchLists(list, insertedList);
    stitchLists(list, restOfList);
  };

  const removeAt = (index) => {
    if (size() === 0) {
      list = {};
    } else if (index < 0 || index > size()) {
      throw new RangeError("Index out of bound.");
    } else {
      const array = makeArray(list);
      array.splice(index, 1);
      list = makeList(...array);
    }
  };

  return {
    getList,
    initSample,
    clear,
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    findIndex,
    toString,
    insertAt,
    removeAt,
  };
}
