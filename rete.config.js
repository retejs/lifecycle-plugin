export default {
    input: 'src/index.ts',
    name: 'LifecyclePlugin',
    babelPresets: [
        require('@babel/preset-typescript'),
    ],
    babelPlugins: [
        require('@babel/plugin-proposal-optional-chaining')
    ],
    extensions: ['.js', '.ts'],
}