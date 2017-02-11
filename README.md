# forEachAsync
A forEach loop for asynchronous functions

###How to use:

forEachAsync ( objectLiteralOrArray, doOnIteration, doAfterLastIteration )
- objectLiteralOrArray
- doOnIteration (item, next )
  - item: the item you are currently iterating over
  - next (): call this to move to the next item
- doAfterLastIteration ()
