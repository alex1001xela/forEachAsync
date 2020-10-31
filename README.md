# forEachAsync
A forEach loop for applying asynchronous functions to items in iterable objects

### How to use:

forEachAsync ( objectLiteralOrArray, doOnIteration, doAfterLastIteration )
- objectLiteralOrArray: The object or array you are iterating over
- doOnIteration ( item, indexOrKey, next )
  - item: the item you want to apply your asynchronous function
  - indexOrKey: the current iteration index or key
  - next (): return this function to move to the next item [1]
- doAfterLastIteration ()

### Notes:

1. Tail Calls: Returning the next() function is important with ES6. In case you accidentally
iterate with a synchronous function over a big iterable, there is a chance
that your stack will overflow. That's why tail-calling next() could be important.<br>Read more here:<br>
http://stackoverflow.com/questions/23260390/node-js-tail-call-optimization-possible-or-not<br>http://2ality.com/2014/04/call-stack-size.html
