import { Node } from "./linkedlist.js";

export function makeList(...entries) {
  if (entries.length === 0) return {};
  if (entries.length === 1) return Node(entries[0]);
  const nextNode = makeList(...entries.slice(1));
  return Node(entries[0], nextNode);
}

export function makeArray(list) {
  if (list.next === null) return [list.entry];
  return [list.entry, makeArray(list.next)].flat();
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

export function loadSampleHashmap(hashmap) {
  hashmap.clear();
  const entries = {
    apple: "red",
    banana: "yellow",
    carrot: "orange",
    dog: "brown",
    elephant: "gray",
    frog: "green",
    grape: "purple",
    hat: "black",
    "ice cream": "white",
    jacket: "blue",
    kite: "pink",
    lion: "golden",
  };

  for (let key in entries) {
    hashmap.set(key, entries[key]);
  }
}
