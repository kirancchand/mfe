const {merge}=require('webpack-merge');
const ModuleFederationPlugin =require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig=require('./webpack.common');
const packageJson=require('../package.json');
const devConfig={
    mode:'development',
    output:{
        publicPath:'http://localhost:3080/',
    },
    devServer:{
        port:3080,
        historyApiFallback:{
            index:'index.html'
        }
    },
    plugins:[
        new ModuleFederationPlugin({
            name:'container',
            remotes:{
                marketing:'marketing@http://localhost:3081/remoteEntry.js',
                auth:'auth@http://localhost:3082/remoteEntry.js',
                dashboard:'dashboard@http://localhost:3083/remoteEntry.js'
            },
            shared:packageJson.dependencies
            // ['react','react-dom'],
        }),
    ]
};

module.exports=merge(commonConfig,devConfig);