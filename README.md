# apicloud-tpl
使用ES2015+LESS开发apicloud应用模板
## 使用
1.假设有一个项目名为demo，首先创建一个与```apicloud```的```workspace```同级的目录如下：
```
workspace
	|
	|____demo
   dev
    |
    |____demo
```
2.下载本模板到dev/demo下，如：
```
workspace
	|
	|____demo
   dev
    |
    |____demo
    	  |
    	  |____build
    	  |
    	  |____src
    	  |
    	  |____static
    	  |
    	  |
    	 ... 
```
3.修改项目名称：
```JavaScript
// webpack.config.js
// 将demo替换为实际项目目录名称
var buildPath = '../../workspace/demo/'

// build/index.js
// 将demo替换为实际项目目录名称
const OUTPUT_PATH = '../../workspace/demo/html/'

```
```
// package.json
// 将demo替换为实际项目目录名称
"build:css": "lessc -x src/index.less ../../workspace/demo/index.css && node build/index.js",
```

4.执行```npm install```
5.执行```npm run build```就可以编译到实际项目中了

## 其他
1.src目录结构基本和项目目录保持一致
```
workspace
	|
	|____demo
		  |
		  |____css
		  |
		  |____icon
		  |
		  |____html
		  |     |
		  |     |____home
		  |
		 ...
		  |__config.xml
		  |
		  |__index.html
		  |
		  |__index.js
		  |
		  |__index.less

   dev
    |
    |____demo
    	  |
    	  |____build
    	  |
    	  |____src
	      |     |____html
		  |     |     |
		  |	    |     |____home
		  |		|
		  |     |__index.js
		  | 	|
		  |		|__index.less
    	  |
    	  |____static
    	  |
    	  |
    	 ... 
```
2.开发时一个页面一个文件夹
```
// dev
home
 |__index.js
 |__index.less
mine
 |__index.js
 |__index.less
```
```
// workspace
home
 |__index.js
 |__index.css
 |__index.html
mine
 |__index.js
 |__index.css
 |__index.html
```
