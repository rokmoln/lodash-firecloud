# lodash-firecloud [![Build Status][2]][1]

`lodash-firecloud` is a collection of [lodash](https://github/lodash/lodash) mixins.

For available functionality, see
* [src/mixins](src/mixins)
* [src/mixins-browser](src/mixins-browser)
* [src/mixins-node](src/mixins-node)

## Example

```javascript
// use as a lodash superset
import _ from 'lodash-firecloud';
```

```javascript
// mix in all functions
import _ from lodash;
import {
  mixins as firecloudMixins
} from 'lodash-firecloud';

_.mixin(firecloudMixins);
```

```javascript
// mix in only specific functions
import _ from lodash;
import promisify from 'lodash-firecloud/lib/mixins/promisify';

_.mixin({promisify});
```

## License

[Apache 2.0](LICENSE)


  [1]: https://travis-ci.com/rokmoln/lodash-firecloud
  [2]: https://travis-ci.com/rokmoln/lodash-firecloud.svg?branch=master
