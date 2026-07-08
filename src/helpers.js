import { Node } from "./linkedlist.js";

export function makeList(...values) {
  if (values.length === 0) return {};
  if (values.length === 1) return Node(values[0]);
  const nextNode = makeList(...values.slice(1));
  return Node(values[0], nextNode);
}

export function makeArray(list) {
  if (list.next === null) return [list.value];
  return [list.value, makeArray(list.next)].flat();
}

export function stitchLists(list1, list2) {
  let current = list1;
  while (true) {
    if (current.next === null) {
      current.next = list2;
      break;
    } else {
      current = current.next;
    }
  }
}

export function hash(key, capacity) {
  let hashCode = 0;

  const primeNumber = 31;
  for (let i = 0; i < key.length; i++) {
    hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % capacity;
  }

  return hashCode;
}
