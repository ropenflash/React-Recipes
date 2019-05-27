const HtmlWebpackPlugin=require("html-webpack-plugin")
const path=require("path")


module.exports={
    entry:"./src/index.js",
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'./bundle.js'
        
    },
    module:{
        rules:[
            {
                
                test:/\.js$/,
                exclude:/node_modules/,
                loader:'babel-loader',
            }
            
            ]
    },
    
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html',
            inject:'body'
        })
        ],
    
    devServer: {
  compress: true,
  public: '27adebdb87d747a089e96faabb0d57e0.vfs.cloud9.us-east-2.amazonaws.com' // That solved it
}
}