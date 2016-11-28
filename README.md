Abbreviate the lastnames, except the last: 

```js
'George Raymond Richard Martin' => 'George R. R. Martin'
```

### Install

```sh
npm i abbreviate-lastnames
```

### Usage

Just import the module, and use their like a function

```js
import abbreviate from 'abbreviate-lastnames'

abbreviate('George Raymond Richard Martin')// => 'George R. R. Martin'
```

If you want set the numbers of lastnames to keep, pass a number in second argument

```js
// will keep the two lastnames
abbreviate('George Raymond Richard Martin', 2) ==> 'George R. Richard Martin'
```

#### Prepositions

In portuguese, or spañol languages, the names commonly have prepositions, like `de`, `dos`, or `el`. This module know that, and by default, keep these, without abbreviate it. E.g.

```js
abbreviate('Darlan Mendonça de Oliveira Almeida') ==> 'Darlan M. de O. Almeida'
```