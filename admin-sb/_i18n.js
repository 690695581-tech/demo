/* 中英切换 · 后台管理基础版 */
(function () {
  var MAP = {
    "SB Admin": "后台管理",
    "Dashboard": "仪表盘",
    "Interface": "界面",
    "Components": "组件",
    "Custom Components:": "自定义组件",
    "Buttons": "按钮",
    "Cards": "卡片",
    "Utilities": "工具类",
    "Custom Utilities:": "自定义工具",
    "Colors": "颜色",
    "Borders": "边框",
    "Animations": "动画",
    "Other": "其他",
    "Addons": "扩展",
    "Pages": "页面",
    "Login Screens:": "登录页",
    "Login": "登录",
    "Register": "注册",
    "Forgot Password": "忘记密码",
    "Other Pages:": "其他页面",
    "404 Page": "404 页面",
    "Blank Page": "空白页",
    "Charts": "图表",
    "Tables": "表格",
    "SB Admin Pro": "SB Admin 专业版",
    "is packed with premium features, components, and more!": "包含更多高级功能与组件。",
    "Upgrade to Pro!": "升级专业版",
    "December 12, 2019": "2019 年 12 月 12 日",
    "A new monthly report is ready to download!": "新的月度报告已可下载。",
    "December 7, 2019": "2019 年 12 月 7 日",
    "December 2, 2019": "2019 年 12 月 2 日",
    "Show All Alerts": "查看全部通知",
    "Read More Messages": "查看更多消息",
    "Profile": "个人资料",
    "Settings": "设置",
    "Logout": "退出登录",
    "Generate Report": "生成报告",
    "Earnings (Monthly)": "月收入",
    "Earnings (Annual)": "年收入",
    "Tasks": "任务",
    "Pending Requests": "待处理请求",
    "Earnings Overview": "收入概览",
    "Dropdown Header:": "下拉菜单",
    "Action": "操作",
    "Another action": "另一个操作",
    "Something else here": "其他内容",
    "Revenue Sources": "收入来源",
    "Direct": "直接访问",
    "Social": "社交媒体",
    "Referral": "推荐",
    "Projects": "项目",
    "Server Migration": "服务器迁移",
    "Sales Tracking": "销售跟踪",
    "Customer Database": "客户数据库",
    "Payout Details": "付款详情",
    "Account Setup": "账户设置",
    "Complete!": "已完成",
    "Illustrations": "插画",
    "Add some quality, svg illustrations to your project courtesy of": "为你的项目添加优质 SVG 插画，来源："
  };
  var PH = {
    "Search for...": "搜索…",
    "Enter your name": "请输入姓名",
    "Enter your email": "请输入邮箱"
  };
  var T_ZH = "后台管理 · 仪表盘";
  var T_EN = document.title;
  var KEY = "lang_admin_sb";
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
