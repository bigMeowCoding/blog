/*
 Navicat Premium Data Transfer

 Source Server         : mysql
 Source Server Type    : MySQL
 Source Server Version : 80019
 Source Host           : localhost:3306
 Source Schema         : react_blog

 Target Server Type    : MySQL
 Target Server Version : 80019
 File Encoding         : 65001

 Date: 07/02/2021 18:05:38
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for admin_user
-- ----------------------------
DROP TABLE IF EXISTS `admin_user`;
CREATE TABLE `admin_user` (
  `userName` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of admin_user
-- ----------------------------
BEGIN;
INSERT INTO `admin_user` VALUES ('zyj', '123', 1);
INSERT INTO `admin_user` VALUES ('jwf', '111', 2);
INSERT INTO `admin_user` VALUES ('1', '1', 3);
COMMIT;

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article` (
  `type_id` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `article_content` text NOT NULL,
  `introduce` text,
  `addTime` int DEFAULT NULL,
  `view_count` int NOT NULL DEFAULT '0',
  `id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ----------------------------
-- Records of article
-- ----------------------------
BEGIN;
INSERT INTO `article` VALUES (1, '中国第一个hello world', '## 4\n### 鼠标悬浮监听\nmouseover与mouseout比mouseenter和mouseleave这对要靠谱，mouseleave会在enter复发后立即触发，不知道是什么原因\n## 7日\n### useMemo使用场景\nuseMemo也有性能损耗，不能滥用，不然反而会造成性能浪费\n### webpack\n打包原理\n### promise all\nall其中一个promise失败就会立刻返回，很多时候我们不希望这样，需要包装一下，可以每个promise包裹一下then返回一下，失败函数中handle一下\n### 字符串里的正则\n字符串里的正则\\/都需要多加\\，字符串在json解析的时候\\/都是特殊字符，如果前边不加\\会解析出错\n### node path relative方法\n可以获取一个路径相对于另一个路径的相对路径方法\n relative(projectRoot, path)\n传一个绝对路径然后可以的出它相对于项目路径中的相对路径\n## 8日\n###  循环异步\n函数中for循环里的await也可以停住，for await of 主要可以用来遍历对象中的迭代属性有异步情况\nforEach里使用await几个promise是并行的https://codesandbox.io/s/pensive-hellman-hw68q?file=/src/index.js\n### async 面试题\n```\n// start();\nlet a = 0;\nlet test = async ()=> {\n    console.log(\'a\',a)\n    a = a + await 10;\n    console.log(a)\n}\ntest();\nconsole.log(++a\n)\n```\n## 22日\nreact 虚拟dom如果key值相同，数据变动会影响节点的变动\n## 23日\n### baseUrl\ntsconfig中baseUrl如果配置’.‘，js中的引用如果找不到就会按照这个路径去找\n## 24 日\n### next axios\nstatic 请求api path必须加上host 和协议，不然会报错\n## 25 日\n### keyof\n keyof 对interface没用，只有在type里边才能用\n### tsconfig path\ntsconfig的path只是使得idea可以识别但是编译的时候还是会出错，next最新版做了处理你可以不管，eggJs需要使用tsconfig-paths插件来处理\n## 26日\n### border-radius\nr', '平均主义进一步导致「课程设置没有灵活性无法自定义」，老师不但要照顾及格率还有一颗圣母心希望那些对专业没什么兴趣的人能好歹学到点东西，同时又真心欣赏且想要给予好学的尖子生资源，最后即便绞尽脑汁了也还是只能弄出个在差生里下限高在尖子生里上限低的课程安排两面不当人 —— 尖子生觉得课程要求太低不能激发自己的潜力喂不饱（常见于私下要求加难度或者去无学分旁听），摸鱼的觉得老师影响了我的快乐学习（常见于课堂上一布置作业下面就叫苦连天）该挂还是挂或者 60 分万岁。对比美国，学生的课程表可以自行安排，通常一个课会开多个班次照顾灵活性，学霸可以比别人多上任意节课，也可以跨专业选课或者减少课程增加实习或研究，而且难度自选只要你点过前置技能就行。', 1606060800, 0, 11);
INSERT INTO `article` VALUES (2, '学习算法好开心', '![image.png](https://upload-images.jianshu.io/upload_images/5657516-4c667511546a8941.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)\nVue是现在前端非常流行的一个前端框架了，了解它的实现原理现在基本已经快成为前端开发一个必备的基本功了，这篇文章将尝试写一个简单的Vue框架。\n##Vue数据监听架构\nVue主要架构分为三个部分`Compile`、`Observer`和`Watcher`结构图如下：\n![Vue数据监听架构](https://upload-images.jianshu.io/upload_images/5657516-9e44ff0c4807557f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)\nObserer负责监听Vue中的数据，Compile负责Vue中涉及dom节点的渲染，Compile和Observer通过Watcher关联，当Observer监听到数据变化会通过watcher使Compile更新页面，反之亦然。\n下边就一部分一部分拆解Vue数据监听架构。\n##Vue函数\n这里简单模拟Vue函数，el为Vue作用的dom节点钩子，data为Vue主要监听的数据，option为Vue中dom交互事件函数放置的地方。\n```\nclass Vue {\n    constructor(el, data, option) {\n        this.$el = el;\n        this.$data = data;\n        this.$option = option; // 绑定方法放在这里\n        if (this.$el) {\n            new Observer(this.$data)\n            new Compile(this.$el, this);\n        }\n    }\n}\n```\n## Compile\n### 构造函数\ncompile负责Vue数据在页面上的渲染，首先看构造函数：\n```\nconstructor(el, vm) {\n        this.vm = vm;\n        if (el && el.nodeType === 1) {\n            this.$el = el;\n        } else {\n            this.$el = document.querySelector(el);\n        }\n\n        const fragment = this.createFragment(this.$el);\n        this.compile(fragment);\n        this.$el.appendChild(fragment);\n    }\n\ncreateFragment(el) {\n        const fragment = document.createDocumentFragment();\n        while (el.firstChild) {\n            fragment.appendChild(el.firstChild);\n        }\n        return fragment;\n    }\n```\n都是比较简单的功能，首先在Vue构造函数中将el与vue实例通过构造函数传递进来，其他值得一说的就是为了减少dom结构变化造成的重排，使用了fragment，先将el子节点缓存在fragment中，然后compile后一次性插入el子节点中。\n### compile\n```\ncompile(fragment) {\n        fragment.childNodes.forEach((childNode) => {\n            if (childNode && childNode.nodeType === 1) {\n                this.compileElement(childNode)\n            } else {\n                this.compileText(childNode)\n            }\n            if (childNode && childNode.childNodes.length > 0) {\n                this.compile(childNode);\n            }\n        })\n    }\n```\n遍历子节点，发现如果是element节点进行子节点的递归调用，这里简单处理为子节点只有element与text类型节点。分别针对element与text节点做编译处理。\n#### 编译text与element类型子节点\n```\n compileElement(node) {\n        const attributes = Array.from(node.attributes);\n        attributes.forEach((attribute) => {\n            const {name, value} = attribute;\n            if (this.isDirective(name)) {\n                const [, directive] = name.split(\'-\');\n                const [directiveName, eventName] = directive.split(\':\');\n                CompileUtil[directiveName](node, value, this.vm, eventName);\n            }\n        })\n    }\n\n    compileText(node) {\n        if (node.textContent && node.textContent.includes(\'{{\')) {\n            CompileUtil[\'text\'](node, node.textContent, this.vm)\n        }\n    }\n\n    isDirective(name) {\n        if (typeof name !== \'string\') {\n            return false;\n        }\n        return name.startsWith(\'v-\');\n    }\n```\n##### 编译element节点\n编译element节点首先遍历节点属性，找出`v-`开头的属性，简单假定这些就是vue框架渲染节点的钩子属性。\n然后拆分钩子属性获取到expr（`获取data值的属性表达式`）,绑定的事件名称，然后开始渲染页面。\n渲染页面部分是个很独立的一块工作，所以这里封装了一个工具对象。\n##### 编译text节点\n```\n    compileText(node) {\n        if (node.textContent && node.textContent.includes(\'{{\')) {\n            CompileUtil[\'text\'](node, node.textContent, this.vm)\n        }\n    }\n```\n文本类型节点主要判断出是否是`{{template }}`类型的节点，然后将textConten传递给CompileUtil渲染到页面。\n##### CompileUtil\n###### 结构图\n![CompileUtil结构图](https://upload-images.jianshu.io/upload_images/5657516-eb5eaa6d8df12048.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)\n首先针对vue的几个常用指令`v-text、v-html、v-modal与v-on`对应了几个操作方法，update是对应渲染到页面方法的工具对象。\n首先从text方法来开始看：\n```\ntext(node, expr, vm) {\n        let value = null;\n        if (expr.includes(\'{{\')) {\n            value = expr.replace(/\\{\\{(.+?)\\}\\}/g, (...args) => {\n                new Watch(args[1], vm, (newValue) => {\n                    this.update.textUpdate(node, newValue);\n                });\n                return this.getValue(args[1], vm);\n            })\n        } else {\n            value = this.getValue(expr, vm);\n            new Watch(expr, vm, (newValue) => {\n                this.update.textUpdate(node, newValue);\n            });\n        }\n        this.update.textUpdate(node, value);\n    },\n```\n首先通过expr区分出是模版渲染还是v-text渲染，如果是模版渲染就用replace抽取出表达式，然后通过公用的`表达式获取值方法`拿到值渲染到页面。\nwatch类通过表达式关联vm中的对象变化，然后通过回调函数重新渲染页面。\ngetValue方法很简单,表达式通过‘.’拆分为数组，进行reduce操作，然后将vue实例中的data作为起始值。\n```\ngetValue(expr, vm) {\n        return expr.split(\'.\').reduce((data, attr) => {\n            return data[attr];\n        }, vm.$data)\n    },\n```\n## Watch与Dep\n### Dep\nDep类非常简单\n```\nclass Dep {\n    constructor() {\n        this.subs = [];\n    }\n\n    add(watcher) {\n        this.subs.push(watcher);\n    }\n\n    notify() {\n        this.subs.forEach((sub) => {\n            sub.update();\n        })\n    }\n\n}\n```\nDep对象中负责添加watcher，在需要的时候发起通知，让watcher更新页面\n### watch\n```\nclass Watch {\n    constructor(expr, vm, callBack) {\n        this.expr = expr;\n        this.vm = vm;\n        this.callBack = callBack;\n        this.oldValue = this.getOldValue();\n    }\n\n    update() {\n        const newValue = CompileUtil.getValue(this.expr, this.vm);\n        if (this.oldValue !== newValue) {\n            this.callBack(newValue);\n            this.oldValue = newValue;\n        }\n    }\n\n    getOldValue() {\n        Dep.target = this; // 用这种方式就不能Dep类与Watch类分在两个文件，webpack打包target值会丢掉\n        const oldValue = CompileUtil.getValue(this.expr, this.vm); // 获取data中的值，在get中添加Watch入Dep\n        Dep.target = null;\n        return oldValue;\n    }\n}\n\n```\nwatch类中在构造函数中传递expr vm 与跟新的回调函数，最重要的是getOldValue函数，在这里边在Dep类中添加了target属性，属性值存了Watch实例对象，这里的关键思想是在这里通过CompileUtil.getValue获取Vue中data值，并在Dep中上存了一个watch，获取data属性值的时候会调用这个属性的get方法，如果Dep对象上target有值，就在Dep对象上添加一个watch。\nupdate方法通过CompileUtils.getValue获取watch中表达式值如果新值不等于老值就调用callback跟新页面\n\n\n## Observer\nObserver类是核心对象，这里通过构造函数传递Vue需要监听的对象\n```\nclass Observer {\n    constructor(data) {\n        this.observe(data);\n    }\n\n    observe(data) {\n        if (data && typeof data === \'object\') {\n            for (const key of Object.keys(data)) {\n                this.defineReactive(data, key, data[key]);\n            }\n        }\n    }\n\n    defineReactive(data, key, value) {\n        this.observe(value);\n        const dep = new Dep();\n        Object.defineProperty(data, key, {\n            configurable: false,\n            enumerable: true,\n            get: () => {\n                Dep.target && dep.add(Dep.target)\n                return value;\n            },\n            set: (v) => {\n                this.observe(v);\n                if (v !== value) {\n                    value = v;\n                    dep.notify();\n                }\n            }\n        })\n    }\n}\n```\n在observe方法中遍历data对象，然后调用核心方法`defineReactive`，这里注意的是在方法中首先回调了observe方法，因为对象的属性值可能也是个对象，所以回调了一下observe方法进行深度监听，这里遍历对象的每个属性值，然后添加get 与set方法，get方法中与watch对象中的getOldValue进行联动，在set方法中因为新设置的值可能也是一个对象，所以也要回调一此observe方法，如果属性设置的值与老值不同就调用dep进行广播所有watch进行页面更新。\n这里set方法有个小技巧，set方法构成一个闭包，v关联了data的属性值所以每次更新值都可以和data中的属性值进行比较。\n### 测试\n下边简单测试一下功能\nhtml部分的代码\n```\n<input type=\"text\" id=\"input\">\n  <p v-text=\"text.value\">\n    </p>\n    {{text.value}}\n```\njs部分的代码\n```\nvar vue = new Vue(\n    \'#box\',\n    {\n        text: {\n            value: \'文本\'\n        },\n        html: \'<h1>html</h1>\',\n        inputValue: \'input\'\n    },\n    {\n        clickButton() {\n            alert(this.$data.text.value);\n        }\n    }\n)\n\nconst input = document.getElementById(\'input\');\ninput.addEventListener(\'input\', (e) => {\n    vue.$data.text.value = e.target.value;\n})\n为了测试效果给input绑定时间修改input值修改文本绑定的变量\n```\n#### 测试结果\n![初始效果](https://upload-images.jianshu.io/upload_images/5657516-cf643c29fe2c127f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)\n改变input值后效果\n![改变变量后值](https://upload-images.jianshu.io/upload_images/5657516-f8a6c78111a35f21.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)\n## v-html效果\nv-html比较简单，首先看CompileUtil部分代码：\n```\nhtml(node, expr, vm) {\n        const value = this.getValue(expr, vm);\n        this.update.htmlUpdate(node, value);\n        new Watch(expr, vm, (newValue) => {\n            this.update.htmlUpdate(node, newValue);\n        })\n    },\n...\n     htmlUpdate(node, value) {\n            node.innerHTML = value;\n        },\n...\n```\n思路很简单通过expr获取变量值然后渲染到页面,watch监听到变化后重新调用update\n### 测试\nhtml部分代码：\n```\n    <button id=\"changeHtmlBtn\">修改html</button>\n    <div v-html=\"html\">\n        html\n    </div>\n```\njs部分代码\n```\n\nconst htmlBtn = document.getElementById(\'changeHtmlBtn\');\nhtmlBtn.addEventListener(\'click\', (e) => {\n    vue.$data.html = \'<h2>changeHtml</h2>\'\n})\n```\n当点击button后修改div下的html\n![初始效果](https://upload-images.jianshu.io/upload_images/5657516-4573244825af9b8c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)\n\n![点击button后效果](https://upload-images.jianshu.io/upload_images/5657516-897528237a6a3fff.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)\n![修改后的html](https://upload-images.jianshu.io/upload_images/5657516-22c2833e5e294626.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)\n## v-modal\nv-modal就是我们常说的双向绑定\n一样我们先看CompileUtil部分代码\n```\n...\n  setValue(expr, vm, inputValue) {\n        expr.split(\'.\').reduce((data, currentValue, currentIndex, array) => {\n            if (currentIndex === array.length - 1) {\n                // 最后一个属性值赋值input输入的值\n                data[currentValue] = inputValue;\n            }\n            return data[currentValue];\n        }, vm.$data)\n    },\n...\nmodal(node, expr, vm) {\n        node.addEventListener(\'input\', (e) => {\n            const value = e.target.value;\n            this.setValue(expr, vm, value);\n        }, false);\n        new Watch(expr, vm, (newValue) => {\n            this.update.modalUpdate(node, newValue);\n        });\n        this.update.modalUpdate(node, this.getValue(expr, vm));\n    },\n update: {\n...\n               modalUpdate(node, value) {\n            node.value = value;\n        }\n...\n    }\n```\n其实也很简单给节点绑定一个input事件，事件回调函数给vue中的data赋值，watch监听框架中的变量变化后更新节点的value值，赋值操作封装一个setValue方法，setValue方法和getValue方法一样使用reduce方法，在最后一个属性赋值inputValue\n### 测试\nhtml代码\n    <input type=\"text\" v-modal = \'inputValue\'>\n    <div>{{inputValue}}</div>\ninputValue初始值赋值为input\n#### 效果\n![初始效果](https://upload-images.jianshu.io/upload_images/5657516-7205cd450ff5cbd4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)\ninput初始值赋值为input\n\n修改input输入框值后，页面动态发生变化\n![修改输入框值](https://upload-images.jianshu.io/upload_images/5657516-fa06d60b3f96bf31.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)\n\n## 结语\n这里只是简单模拟vue框架，有很多地方存在缺陷，大家有选择的阅读思考就好，感谢阅读。\n![image.png](https://upload-images.jianshu.io/upload_images/5657516-1ed2246d71cb9c14.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)\n', '平均主义进一步导致「课程设置没有灵活性无法自定义」，老师不但要照顾及格率还有一颗圣母心希望那些对专业没什么兴趣的人能好歹学到点东西，同时又真心欣赏且想要给予好学的尖子生资源，最后即便绞尽脑汁了也还是只能弄出个在差生里下限高在尖子生里上限低的课程安排两面不当人 —— 尖子生觉得课程要求太低不能激发自己的潜力喂不饱（常见于私下要求加难度或者去无学分旁听），摸鱼的觉得老师影响了我的快乐学习（常见于课堂上一布置作业下面就叫苦连天）该挂还是挂或者 60 分万岁。对比美国，学生的课程表可以自行安排，通常一个课会开多个班次照顾灵活性，学霸可以比别人多上任意节课，也可以跨专业选课或者减少课程增加实习或研究，而且难度自选只要你点过前置技能就行。', 1606060834, 0, 12);
COMMIT;

-- ----------------------------
-- Table structure for article_image
-- ----------------------------
DROP TABLE IF EXISTS `article_image`;
CREATE TABLE `article_image` (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` mediumtext NOT NULL,
  `type` varchar(0) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `articleId` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ----------------------------
-- Records of article_image
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for type
-- ----------------------------
DROP TABLE IF EXISTS `type`;
CREATE TABLE `type` (
  `typeName` varchar(255) NOT NULL,
  `orderNumber` int NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `icon` int DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ----------------------------
-- Records of type
-- ----------------------------
BEGIN;
INSERT INTO `type` VALUES ('首页', 0, 0, 1);
INSERT INTO `type` VALUES ('前端', 1, 1, 1);
INSERT INTO `type` VALUES ('计算机基础', 4, 2, 1);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
