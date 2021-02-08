
const webpack = require('webpack');

const env = {};


module.exports = {
    /* eslint-disable no-param-reassign */
    webpack: config => {
    // Remove the 'ModuleScopePlugin' which keeps us from requiring outside the src/ dir
        config.resolve.plugins = [];

        // Define global vars from env vars (process.env has already been defined)
        config.plugins = config.plugins.concat([
            new webpack.DefinePlugin({
                'process.env': env,
            }),
        ]);
        return config;
    },
};
