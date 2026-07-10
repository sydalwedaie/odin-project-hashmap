# The Odin Project - Hash Map

This is the solution to The Odin Project's [Hash Map](https://www.theodinproject.com/lessons/javascript-hashmap) challenge. The goal is to implement a basic hash map structure with a few rudimentary methods.

## Project structure

- The main logic is split between the `hashmap.js` and `linkedlist.js` modules.
- `helpers.js` contains helper functions used in both modules, as well as in the tests.
- The test suites for each module live in their respective directories: `/tests_hashmap` and `/tests_linkedlist`. Each method has its own `.test.js` file.

## My mental model of a hash map

A hash map is essentially an **array of linked lists** acting as _buckets_. Each value (or entry, in the context of hash maps) in the linked list could be a single _key_, or an object containing a _key-value pair_. The assignment asks to create the latter.

So the hash map would have this format:

```js
[
  { entry: { key1: value1 }, next: null },
  { entry: { key2: value2 }, next: {possible collisions ...} },
]
```

Initially, I thought I could drop the linked list factory function I created in the [previous project](https://github.com/sydalwedaie/odin-project-linked-lists). Soon I realized I should modify it to work with entries in the key-value format. I also could remove many methods not needed for a hashmap.

A key decision I had to make was the way to define an empty hash map. Initially, I had it set to an empty array. However, that proved to add way too much complexity in each method, as I had to deal with the possibility of having empty slots. So I decided to make it an array of `capacity` length empty linked lists: `[{}, {}, {}, …]`.

## Features of the hash map

A hash map is created by calling its factory function: `const hashmap = HashMap()`. It optionally accepts a _capacity_ and _load factor_ argument. The defaults are set to 16 and 0.75, respectively. This means there will be 16 buckets, with a maximum load factor of 12 entries. The hash map will expand to double its size if the number of entries exceeds 12.

**Note**: The number of entries differs from the number of buckets, since each node of the linked list is considered an entry.

## The hash function

I adapted the `hash` function provided by Odin to account for very large hashes overflowing the maximum safe integer limit of JavaScript. Hence, I pass along the capacity as well as the key to the function:

```js
function hash(key, capacity) {
  let hashCode = 0;

  const primeNumber = 31;
  for (let i = 0; i < key.length; i++) {
    hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % capacity;
  }

  return hashCode;
}
```

By taking the remainder of the hash divided by capacity, we can effectively get the index of the destination bucket straight away.

### Public methods

1. `set(key, value)` adds a new entry to the hash map. If the key already exists, this method overrides the existing entry with the new value.
2. `get(key)` returns the value assigned to the given key. If a key is not found, it returns `null`.
3. `has(key)` returns `true` or `false` based on whether or not the key is in the hash map.
4. `remove(key)` removes the entry with that key and returns `true`. If the key isn’t in the hash map, it returns `false`.
5. `length()` returns the number of stored **keys** in the hash map.
6. `clear()` removes all entries in the hash map.
7. `keys()` returns an **array** containing all the keys inside the hash map.
8. `values()` returns an **array** containing all the values.
9. `entries()` returns an **array** that contains each key, value pair. Example: [[firstKey, firstValue], [secondKey, secondValue]]

I also created some auxiliary methods to help with visualization and testing.

- `getHashmap()` returns the main array of linked lists. This method is used extensively in the test suites to examine the state of hash maps.
- `print()` returns a string representation of that array and acts as pure eye candy!

## Tools used

The project is built using vanilla JavaScript and the following tools:

- [Jest](https://jestjs.io/) testing library
- `babel/preset-env` to make Jest understand ESM.
- `jest/globals` to make ESLint understand Jest.

## How to run

- Clone the repo.
- Run `npm i` to install the dependencies.
- Run `npm test` to run the test suites.

## Learning outcomes

### Test Driven Development

Unlike the linked list project, I could not wrap my head around a proper TDD workflow (writing tests before the implementation). So I spammed the project with `console` logs to test each method as I progressed (these are in the `main.js` file).

After I had a working copy, I was still unclear what to test. With linked lists, I tested each method at least 3 times: once on an empty list, once on a single-node list, and once on a multi-node list. For some methods, I also tested on the first, middle, and last nodes to cover edge cases. But for a hash map, the possibilities are sort of endless. And the `expected` variable for each assertion could be an entire hash map, which I would need to manually write at least once. After consulting the community, I settled on testing a happy positive case and at least one negative case as prescribed in the project requirement.

I also discovered a limitation of `console` when trying to inspect nested objects. When doing `console.log(hashmap)`, the displayed result is limited to 2 levels, with deeper levels showing as `[object]`. Since a linked list could potentially have several nested links, I needed a way to visually see them. It turns out we can use `console.dir()` with an optional argument to disable the depth limit:

```js
console.dir(test.getHashmap(), { depth: null, colors: true });
```

This little line was invaluable in testing the project, especially since I didn’t start with a proper testing workflow.
