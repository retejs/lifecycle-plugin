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


TypeScript

```ts
import { OnCreated, OnDestroyed, OnConnect, OnConnected, OnDisconnect, OnDisconnected } from 'rete-lifecycle-plugin';

class AddComponent extends Rete.Component implements OnCreated, ...
```