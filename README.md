# forEachAsync
A forEach loop for applying asynchronous functions to items in iterable objects

###How to use:

forEachAsync ( objectLiteralOrArray, doOnIteration, doAfterLastIteration )
- objectLiteralOrArray
- doOnIteration ( item, indexOrKey, next )
  - item: the item you are currently iterating over
  - indexOrKey: the current iteration index or key
  - next (): call this to move to the next item
- doAfterLastIteration ()
