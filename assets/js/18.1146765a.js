(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{307:function(e,t,a){"use strict";a.r(t);var n={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},s=a(7),o=Object(s.a)(n,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.slotKey}},[a("p",[a("em",[e._v("越来越多的人使用hexo来写博客，简洁又美观，是在是很符合我的喜好，前几天看了下如何搭建后，今天终于腾出了些时间来搭建一个hexo博客，今后便放弃使用wordpress了。搭建过程很简单，出于习惯还是记录一下。")])]),e._v(" "),a("h4",{attrs:{id:"首先安装nodejs和hexo："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#首先安装nodejs和hexo：","aria-hidden":"true"}},[e._v("#")]),e._v(" 首先安装nodejs和hexo：")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("\t#node安装命令\n\tbrew install node  #如果我没记错的话,最新版的node.js的包中已经集成了npm包管理工\n\t#具\n\t#使用以下命令验证是否安装成功\n\tnode -v\n\tnpm -v\n\tnpm install hexo -g  #安装hexo\n\thexo init <folder> #初始化hexo到指定目录\n\thexo gennerate #根据安装目录下文件生成静态网页\n\thexo server #运行hexo服务\n")])])]),a("p",[e._v("此时在http://localhost:4000已经能看到hexo的效果")]),e._v(" "),a("h4",{attrs:{id:"hexo的使用："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hexo的使用：","aria-hidden":"true"}},[e._v("#")]),e._v(" hexo的使用：")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('\thexo new "postName" #新建一个名为postName的文章\n\t此处及以上的内容会在首页显示\n\t\x3c!--more--\x3e\n    以下是在首页隐藏的部分\n    #修改主题\n    git clone git@github.com:yunlzheng/hexo-  themes.git themes/writing\n    #在./_config.yml，修改主题为writing\n    theme: writing\n    #查看本地效果\n    hexo g       #hexo generate简写\n    hexo s       #hexo server简写\n')])])]),a("h4",{attrs:{id:"部署hexo到github："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署hexo到github：","aria-hidden":"true"}},[e._v("#")]),e._v(" 部署hexo到github：")]),e._v(" "),a("p",[e._v("1.打开安装文件夹中的——config.yml文件")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("\t#修改博客信息后在文件末尾添加git信息如下\n\t# Deployment\n\t##Docs: https://hexo.io/docs/deployment.html\n\tdeploy:\n    \ttype: git  #这里填写git\n        repository: git@github.com:ZacharyWZH/  zacharywzh.github.io.git #远端仓库地址\n        branch: master\t  #部署到的分支\n")])])]),a("p",[e._v("2.部署到github的命令")]),e._v(" "),a("pre",[a("code",[e._v("hexo deploy\n")])]),e._v(" "),a("h4",{attrs:{id:"使用过程中遇到的问题和解决方法："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用过程中遇到的问题和解决方法：","aria-hidden":"true"}},[e._v("#")]),e._v(" 使用过程中遇到的问题和解决方法：")]),e._v(" "),a("h5",{attrs:{id:"_1-点击标签页跳转404："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-点击标签页跳转404：","aria-hidden":"true"}},[e._v("#")]),e._v(" 1.点击标签页跳转404：")]),e._v(" "),a("p",[e._v("解决方法：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('尝试重新生成页面 hexo new page tags\n\n然后在title，date下面加上type: "tags"\n\n如果不希望评论，还可以加上：comments: false\n\n\n')])])]),a("h5",{attrs:{id:"_2-升级hexo版本或更改目录重新安装后：error-deployer-not-found-git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-升级hexo版本或更改目录重新安装后：error-deployer-not-found-git","aria-hidden":"true"}},[e._v("#")]),e._v(" 2.升级hexo版本或更改目录重新安装后：ERROR Deployer not found: git")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("npm install hexo-deployer-git --save\n")])])])])},[],!1,null,null,null);o.options.__file="hexo搭建过程.md";t.default=o.exports}}]);