# forEachAsync
A forEach loop for applying asynchronous functions to items in iterable objects

###How to use:

forEachAsync ( objectLiteralOrArray, doOnIteration, doAfterLastIteration )
- objectLiteralOrArray: The object or array you are iterating over
- doOnIteration ( item, indexOrKey, next )
  - item: the item you want to apply your asynchronous function
  - indexOrKey: the current iteration index or key
  - next (): call this to move to the next item
- doAfterLastIteration ()
