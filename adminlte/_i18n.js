/* 中英切换 · 后台管理完整版 */
(function () {
  var MAP = {
    "Live preview": "在线预览",
    "Documentation": "文档",
    "Search": "搜索",
    "Call me whenever you can...": "随时给我打电话…",
    "4 Hours Ago": "4 小时前",
    "I got your message bro": "收到你的消息了",
    "The subject goes here": "主题写在这里",
    "See All Messages": "查看全部消息",
    "15 Notifications": "15 条通知",
    "4 new messages": "4 条新消息",
    "3 mins": "3 分钟前",
    "8 friend requests": "8 个好友请求",
    "12 hours": "12 小时前",
    "3 new reports": "3 份新报告",
    "2 days": "2 天前",
    "See All Notifications": "查看全部通知",
    "Light": "浅色",
    "Dark": "深色",
    "Auto": "自动",
    "Member since Nov. 2023": "2023 年 11 月加入",
    "Followers": "关注者",
    "Sales": "销量",
    "Friends": "好友",
    "Profile": "个人资料",
    "Sign out": "退出登录",
    "Filter menu": "筛选菜单",
    "No matching pages.": "没有匹配的页面。",
    "Dashboard": "仪表盘",
    "Dashboard v1": "仪表盘 v1",
    "Dashboard v2": "仪表盘 v2",
    "Dashboard v3": "仪表盘 v3",
    "Starter Page": "起始页",
    "Theme Generate": "主题生成",
    "Widgets": "小组件",
    "Small Box": "小卡片",
    "info Box": "信息框",
    "Cards": "卡片",
    "Social & Post": "社交与动态",
    "Layout Options": "布局选项",
    "Default Sidebar": "默认侧栏",
    "Fixed Sidebar": "固定侧栏",
    "Fixed Header": "固定顶栏",
    "Fixed Footer": "固定页脚",
    "Fixed Complete": "全部固定",
    "Layout": "布局",
    "+ Custom Area": "+ 自定义区域",
    "Sidebar Mini": "迷你侧栏",
    "+ Collapsed": "+ 收起",
    "+ Collapsed + No Hover": "+ 收起且无悬停",
    "+ Logo Switch": "+ Logo 切换",
    "Top Nav": "顶部导航",
    "+ No Sidebar": "+ 无侧栏",
    "Layout RTL": "从右到左布局",
    "UI Elements": "界面元素",
    "General": "通用",
    "Icons": "图标",
    "Timeline": "时间线",
    "Ribbons": "缎带",
    "Colors": "颜色",
    "Mailbox": "邮箱",
    "Inbox": "收件箱",
    "Read Message": "阅读邮件",
    "Compose": "写邮件",
    "Forms": "表单",
    "Elements": "元素",
    "Validation": "校验",
    "Wizard": "向导",
    "Advanced Elements": "高级元素",
    "Editors": "编辑器",
    "Tables": "表格",
    "Simple Tables": "简单表格",
    "Data Tables": "数据表格",
    "Charts": "图表",
    "PAGES": "页面",
    "Pages": "页面",
    "Settings": "设置",
    "Invoice": "发票",
    "Calendar": "日历",
    "Kanban": "看板",
    "Chat": "聊天",
    "File Manager": "文件管理",
    "Projects": "项目",
    "Gallery": "图库",
    "Search Results": "搜索结果",
    "Pricing": "价格",
    "FAQ": "常见问题",
    "Error": "错误页",
    "Maintenance": "维护中",
    "Users": "用户",
    "EXAMPLES": "示例",
    "Auth": "认证",
    "Version 1": "版本 1",
    "Login": "登录",
    "Register": "注册",
    "Forgot Password": "忘记密码",
    "Version 2": "版本 2",
    "Lockscreen": "锁屏",
    "MULTI LEVEL EXAMPLE": "多级菜单示例",
    "Level 1": "第一级",
    "Level 2": "第二级",
    "Level 3": "第三级",
    "LABELS": "标签",
    "Important": "重要",
    "Warning": "警告",
    "Informational": "提示",
    "View documentation": "查看文档",
    "Home": "首页",
    "New Orders": "新订单",
    "More info": "更多信息",
    "Bounce Rate": "跳出率",
    "User Registrations": "用户注册",
    "Unique Visitors": "独立访客",
    "Sales Value": "销售额",
    "Direct Chat": "私聊",
    "23 Jan 2:00 pm": "1月23日 14:00",
    "23 Jan 2:05 pm": "1月23日 14:05",
    "23 Jan 5:37 pm": "1月23日 17:37",
    "23 Jan 6:10 pm": "1月23日 18:10",
    "You better believe it!": "你最好相信。",
    "I would love to.": "我很乐意。",
    "How have you been? I was...": "最近怎么样？我…",
    "I will be waiting for...": "我会等…",
    "I'll call you back at...": "我稍后回你电话…",
    "Where is your new...": "你的新…在哪",
    "Can I take a look at...": "我能看看…",
    "Never mind I found...": "不用了，我找到了…",
    "Send": "发送",
    "Visitors": "访客",
    "Online": "在线",
    "Anything you want": "输入内容",
    "Copyright © 2014-2026": "© 2014-2026",
    "All rights reserved.": "保留所有权利。"
  };
  var PH = {
    "Search": "搜索…",
    "Search...": "搜索…",
    "Filter menu...": "筛选菜单…",
    "Type Message": "输入消息…",
    "Search for...": "搜索…"
  };
  var T_ZH = "后台管理 · 仪表盘";
  var T_EN = document.title;
  var KEY = "lang_adminlte";
  var nodes = [], phEls = [];

  function collect() {
    var skip = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1, TEXTAREA: 1, CODE: 1, OPTION: 1 };
    var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        var p = n.parentNode;
        if (!p || skip[p.tagName]) return NodeFilter.FILTER_REJECT;
        if (!n.nodeValue || !n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var n;
    while ((n = w.nextNode())) nodes.push(n);
    phEls = [].slice.call(document.querySelectorAll("[placeholder]"));
  }

  function apply(lang) {
    for (var i = 0; i < nodes.length; i++) {
      var n = nodes[i];
      if (n.__en === undefined) n.__en = n.nodeValue;
      var raw = n.__en, t = raw.trim(), zh = MAP[t];
      if (lang === "zh" && zh) {
        var a = raw.match(/^\s*/)[0], b = raw.match(/\s*$/)[0];
        n.nodeValue = a + zh + b;
      } else {
        n.nodeValue = raw;
      }
    }
    for (var k = 0; k < phEls.length; k++) {
      var el = phEls[k];
      if (el.__enPh === undefined) el.__enPh = el.getAttribute("placeholder");
      var zhp = PH[(el.__enPh || "").trim()];
      el.setAttribute("placeholder", (lang === "zh" && zhp) ? zhp : el.__enPh);
    }
    document.documentElement.lang = (lang === "zh") ? "zh-CN" : "en";
    document.title = (lang === "zh") ? T_ZH : T_EN;
    var bs = document.querySelectorAll(".lang-tool button");
    for (var j = 0; j < bs.length; j++) {
      bs[j].className = (bs[j].getAttribute("data-l") === lang) ? "on" : "";
    }
    try { localStorage.setItem(KEY, lang); } catch (e) {}
  }

  function boot() {
    collect();
    var box = document.createElement("div");
    box.className = "lang-tool";
    box.innerHTML = '<button type="button" data-l="zh">中文</button><button type="button" data-l="en">EN</button>';
    var css = document.createElement("style");
    css.textContent = ".lang-tool{position:fixed;right:16px;bottom:16px;z-index:99999;display:flex;" +
      "background:rgba(255,255,255,.96);border:1px solid #d9d9d9;border-radius:5px;overflow:hidden;" +
      "box-shadow:0 2px 10px rgba(0,0,0,.12);font-family:-apple-system,BlinkMacSystemFont,'PingFang SC','Microsoft YaHei',sans-serif}" +
      ".lang-tool button{border:0;background:transparent;padding:7px 12px;cursor:pointer;color:#666;" +
      "font-size:12px;font-family:inherit;line-height:1}" +
      ".lang-tool button+button{border-left:1px solid #e5e5e5}" +
      ".lang-tool button.on{background:#2b2b2b;color:#fff}";
    document.head.appendChild(css);
    document.body.appendChild(box);
    for (var i = 0; i < box.children.length; i++) {
      box.children[i].addEventListener("click", function () {
        apply(this.getAttribute("data-l"));
      });
    }
    var saved = "zh";
    try { saved = localStorage.getItem(KEY) || "zh"; } catch (e) {}
    apply(saved);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
