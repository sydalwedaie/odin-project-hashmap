import { HashMap } from "./hashmap.js";
import { loadSampleHashmap } from "./helpers.js";

const test = HashMap();
loadSampleHashmap(test);
// console.dir(test.getHashmap(), { depth: null });
// console.log(test.print());

// console.log('# Test set override')
// test.set("Carlos", "I am the old value.");
// test.set("Carlos", "I am the new value.");

// console.log('# Test set collision')
// test.set("Rama", "value for Rama");
// test.set("Sita", "value for Sita");
// console.dir(test.getHashmap(), { depth: null });

// console.log(test.print());
// console.dir(test.getHashmap(), { depth: null });

// console.log("# Test keys, values, entries");
// loadSampleHashmap(test);
// console.log(test.keys());
// console.log(test.values());
// console.log(test.entries());

// console.log("# Test length");
// console.log("should print 12: ", test.length());
// test.length();

// console.log("# Test get");
// loadSampleHashmap(test);
// console.log("should print purple: ", test.get("grape"));
// console.log("should print null: ", test.get("hello"));

// console.log("# Test has");
// console.log("should print true: ", test.has("grape"));
// console.log("should print false: ", test.has("hello"));

// console.log("# Test remove");
// loadSampleHashmap(test);
// console.log(test.remove("apple"));
// console.log("hashmap does not include the apple entry");
// console.dir(test.getHashmap(), { depth: null });

// console.log("# Test clear");
// test.clear();
// test.printHashmap();

// console.log("# Test grow");
// loadSampleHashmap(test);
// test.set("moon", "silver");
// console.dir(test.getHashmap(), { depth: null });
