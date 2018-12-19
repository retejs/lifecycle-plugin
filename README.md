Lifecycle
====
#### Rete.js plugin

```js

import LifecyclePlugin from 'rete-lifecycle-plugin';

editor.use(LifecyclePlugin);


class AddComponent extends Rete.Component {
    constructor(){
        super("Add");
    }

    created(node) { 
    }

    destroyed(node) { 
    }

    connected(connection) {
    }

    disconnected(connection) {
    }
}
```