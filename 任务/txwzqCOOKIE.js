module.exports = {
    "id": "txwzq",
    "name": "微证券",
    "keys": ["txwzqckVal","txzxgckVal","txwzqckVal2","txzxgckVal2","txwzqckVal3","txzxgckVal3","txwzqckVal4","txzxgckVal4","txwzqckVal5","txzxgckVal5","txwzqckVal6","txzxgckVal6","txwzqckVal7","txzxgckVal7","txwzqckVal8","txzxgckVal8","txwzqckVal9","txzxgckVal9","txwzqckVal10","txzxgckVal10","txwzqckVal11","txzxgckVal11","txwzqckVal12","txzxgckVal12","txwzqckVal13","txzxgckVal13","txwzqckVal14","txzxgckVal14","txwzqckVal15","txzxgckVal15"],
    "author": "@tom",
    "settings": [{
      "id": "txwzqSuffix",
      "name": "当前账号",
      "val": "1",
      "type": "number",
      "desc": "当前抓取ck记录的账号序号，如：1、2、3、4"
    }, {
      "id": "txwzqCount",
      "name": "账号个数",
      "val": "1",
      "type": "number",
      "desc": "指定任务最多跑几个账号，根据抓取的账号数据个数来设值"
    }, {
      "id": "txwzqXH",
      "name": "循环获取ck",
      "val": "0",
      "type": "number",
      "desc": "0关闭，1打开，默认关闭"
    }, {
      "id": "txwzqTXTX",
      "name": "txtx",
      "val": "0",
      "type": "number",
      "desc": "0关闭，1打开，默认关闭"
    }, {
      "id": "txwzqSC",
      "name": "sc",
      "val": "0",
      "type": "number",
      "desc": "0关闭，1打开，默认关闭"
    }, {
      "id": "txwzqnotifyttt",
      "name": "推送控制",
      "val": "1",
      "type": "number",
      "desc": "0关闭，1推送,默认12点以及23点推送"
    }, {
      "id": "txwzqnotifyInterval",
      "name": "通知控制",
      "val": "2",
      "type": "number",
      "desc": "0关闭，1为 所有通知，2为 12，23 点通知，3为 6，12，18，23 点通知"
    }, {
      "id": "txwzqMinutes",
      "name": "推送-通知 分钟控制",
      "val": "10",
      "type": "number",
      "desc": "推送以及通知控制在什么分钟段，可设置0-59,默认0到10"
    }],
      "repo": "https://raw.githubusercontent.com/xl2101200/-/main/txwzq.js",
    "icons": ["https://raw.githubusercontent.com/xl2101200/-/main/tom/tom.jpg", "https://raw.githubusercontent.com/xl2101200/-/main/tom/tom.jpg"],
    "script": "https://raw.githubusercontent.com/xl2101200/-/main/txwzq.js",
    "icon": "https://raw.githubusercontent.com/xl2101200/-/main/tom/tom.jpg",
    "favIcon": "mdi-star-outline",
    "favIconColor": "grey",
    "datas": [{
      "key": "txwzqckVal",
      "val": ""
    }, {
      "key": "txzxgckVal",
      "val": ""
    }, {
      "key": "txwzqckVal2",
      "val": ""
    }, {
      "key": "txzxgckVal2",
      "val": ""
    }
    //多账号自行复制以下注释内容
    //,{
     // "key": "txwzqckVal",
     // "val": ""
   // }, {
    //  "key": "txzxgckVal",
     // "val": ""
    //}
],
    "sessions": [],
    "isLoaded": true
  }
  
