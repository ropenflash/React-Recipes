const HtmlWebpackPlugin=require("html-webpack-plugin")
const webpack=require("webpack")
const path=require("path")

require("dotenv").config()

module.exports={
    entry:["whatwg-fetch","./src/index.js"],
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
            },
             {
                
                test:/\.(png|jpeg)$/,
                exclude:/node_modules/,
                loader:'file-loader',
            }
            
            
            ]
    },
    
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html',
            inject:'body'
        }),
        
        new webpack.DefinePlugin({
            API_URL:JSON.stringify(process.env.API_URL)
        })
        ],
    
    devServer: {
  compress: true,
  public: '27adebdb87d747a089e96faabb0d57e0.vfs.cloud9.us-east-2.amazonaws.com' // That solved it
}
}