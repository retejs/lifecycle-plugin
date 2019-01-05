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

    onconnect(io) { // input or output
        return false; // prevent connect
    }

    ondisconnect(connection) {
        return false; // prevent disconnect
    }

    connected(connection) {
    }

    disconnected(connection) {
    }
}
```