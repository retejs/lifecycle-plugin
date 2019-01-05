function assignMethod(component, name) {
    if (typeof component[name] === 'function') return;

    if (typeof component[name] !== 'undefined')
        throw new Error(`Life cycle property ${name} is not a function`);

    component[name] = () => {}
}

function install(editor, params = {}) {
    editor.on('componentregister', component => {
        assignMethod(component, 'created');
        assignMethod(component, 'destroyed');
        assignMethod(component, 'onconnect');
        assignMethod(component, 'connected');
        assignMethod(component, 'ondisconnect');
        assignMethod(component, 'disconnected');
    });

    editor.on('nodecreated', node => editor.getComponent(node.name).created(node));
    editor.on('noderemoved', node => editor.getComponent(node.name).destroyed(node));

    editor.on('connectioncreate', ({ input, output }) => {
        if (editor.getComponent(input.node.name).onconnect(input) === false ||
            editor.getComponent(output.node.name).onconnect(output) === false)
            return false;
    });
    editor.on('connectioncreated', connection => {
        editor.getComponent(connection.input.node.name).connected(connection);
        editor.getComponent(connection.output.node.name).connected(connection);
    });
    editor.on('connectionremove', connection => {
        if (editor.getComponent(connection.input.node.name).ondisconnect(connection) === false ||
            editor.getComponent(connection.output.node.name).ondisconnect(connection))
            return false;
    });
    editor.on('connectionremoved', connection => {
        editor.getComponent(connection.input.node.name).disconnected(connection);
        editor.getComponent(connection.output.node.name).disconnected(connection);
    });
}

export default {
    name: 'lifecycle',
    install
}