/* 中英切换 · 后台管理基础版（全站） */
(function () {
  var MAP = {
    "SB Admin": "后台管理", "Dashboard": "仪表盘", "Buttons": "按钮", "Cards": "卡片",
    "Blank Page": "空白页", "Charts": "图表", "Tables": "表格", "Interface": "界面",
    "Components": "组件", "Custom Components:": "自定义组件", "Utilities": "工具类",
    "Custom Utilities:": "自定义工具", "Colors": "颜色", "Borders": "边框",
    "Animations": "动画", "Other": "其他", "Addons": "扩展", "Pages": "页面",
    "Login Screens:": "登录页", "Login": "登录", "Register": "注册",
    "Forgot Password": "忘记密码", "Other Pages:": "其他页面", "404 Page": "404 页面",
    "Logout": "退出登录", "Profile": "个人资料", "Settings": "设置",
    "Ready to Leave?": "准备离开？",
    "Select \"Logout\" below if you are ready to end your current session.": "如果要结束当前会话，请点击下方的「退出登录」。",
    "Cancel": "取消", "Action": "操作", "Another action": "另一个操作",
    "Something else here": "其他内容", "Dropdown Header:": "下拉菜单",
    "Navbar": "导航栏", "Navbar Dropdown Example:": "导航栏下拉示例：",
    "December 12, 2019": "2019 年 12 月 12 日", "December 7, 2019": "2019 年 12 月 7 日",
    "December 2, 2019": "2019 年 12 月 2 日",
    "A new monthly report is ready to download!": "新的月度报告已可下载。",
    "Show All Alerts": "查看全部通知", "Read More Messages": "查看更多消息",
    "Create an Account!": "创建账户", "Already have an account? Login!": "已有账户？去登录",
    "Forgot Password?": "忘记密码？", "Welcome Back!": "欢迎回来",
    "Remember": "记住", "Me": "我", "Login with Google": "使用 Google 登录",
    "Login with Facebook": "使用 Facebook 登录", "Register with Google": "使用 Google 注册",
    "Register with Facebook": "使用 Facebook 注册", "Name": "姓名", "Email": "邮箱",
    "Password": "密码", "Repeat Password": "确认密码", "Forgot Your Password?": "忘记密码？",
    "Position": "职位", "Office": "办公地点", "Age": "年龄", "Start date": "入职日期",
    "Salary": "薪资", "DataTables Example": "数据表格示例",
    "Software Engineer": "软件工程师", "Regional Director": "区域总监", "Developer": "开发者",
    "Integration Specialist": "集成专员", "Sales Assistant": "销售助理",
    "Office Manager": "办公室主管", "Support Engineer": "支持工程师", "Accountant": "会计",
    "Javascript Developer": "JavaScript 开发", "Marketing Designer": "市场设计",
    "Systems Administrator": "系统管理员", "System Architect": "系统架构师",
    "Junior Technical Author": "初级技术文档", "Senior Javascript Developer": "高级 JavaScript 开发",
    "Support Lead": "支持主管", "Senior Marketing Designer": "高级市场设计",
    "Chief Financial Officer (CFO)": "首席财务官", "Personnel Lead": "人事主管",
    "Development Lead": "开发主管", "Chief Marketing Officer (CMO)": "首席营销官",
    "Pre-Sales Support": "售前支持", "Chief Executive Officer (CEO)": "首席执行官",
    "Chief Operating Officer (COO)": "首席运营官", "Regional Marketing": "区域市场",
    "Technical Author": "技术文档", "Team Leader": "团队负责人",
    "Post-Sales support": "售后支持", "Secretary": "秘书",
    "Financial Controller": "财务主管", "Director": "总监", "Data Coordinator": "数据协调",
    "Junior Javascript Developer": "初级 JavaScript 开发", "Customer Support": "客户支持",
    "San Francisco": "旧金山", "London": "伦敦", "New York": "纽约",
    "Edinburgh": "爱丁堡", "Tokyo": "东京", "Singapore": "新加坡", "Sidney": "悉尼",
    "Circle Buttons": "圆形按钮", "Brand Buttons": "品牌按钮",
    "Split Buttons with Icon": "带图标的分裂按钮",
    "Works with any button colors, just use the": "适用于任意按钮颜色，只需使用",
    "Also works with small and large button classes!": "同样适用于小型和大型按钮类。",
    "Split Button Primary": "分裂按钮 · 主色", "Split Button Success": "分裂按钮 · 成功",
    "Split Button Info": "分裂按钮 · 信息", "Split Button Warning": "分裂按钮 · 警告",
    "Split Button Danger": "分裂按钮 · 危险", "Split Button Secondary": "分裂按钮 · 次要",
    "Split Button Light": "分裂按钮 · 浅色", "Split Button Small": "分裂按钮 · 小",
    "Split Button Large": "分裂按钮 · 大",
    "Basic Card Example": "基础卡片示例", "Dropdown Card Example": "下拉卡片示例",
    "Collapsable Card Example": "可折叠卡片示例", "Click on the card header": "点击卡片标题",
    "Area Chart": "面积图", "Bar Chart": "柱状图", "Donut Chart": "环形图",
    "Animation Utilities": "动画工具", "Grow In Animation Utilty": "放大动画",
    "Fade In Animation Utilty": "淡入动画", "Dropdown Button Example:": "下拉按钮示例：",
    "Border Utilities": "边框工具", "Color Utilities": "颜色工具",
    "Custom Text Color Utilities": "自定义文字颜色", "Custom Font Size Utilities": "自定义字号",
    "Custom Background Gradient Utilities": "自定义背景渐变",
    "Custom Grayscale Background Utilities": "自定义灰度背景",
    "Other Utilities": "其他工具", "Overflow Hidden Utilty": "溢出隐藏",
    "Progress Small Utility": "小型进度条", "Normal Progress Bar": "常规进度条",
    "Small Progress Bar": "小型进度条", "Dropdown - No Arrow": "下拉 · 无箭头",
    "Rotation Utilities": "旋转工具", "Development Approach": "开发方式",
    "Illustrations": "插画",
    "Add some quality, svg illustrations to your project courtesy of": "为你的项目添加优质 SVG 插画，来源：",
    "Browse Illustrations on": "浏览插画：",
    "Copyright © Your Website 2020": "© 2020 版权所有",
    "Copyright © Your Website 2021": "© 2021 版权所有",
    "Page Not Found": "页面不存在",
    "It looks like you found a glitch in the matrix...": "看起来你发现了一个系统小故障…",
    "← Back to Dashboard": "← 返回仪表盘",
    "Bootstrap's default utility classes can be found on the official": "Bootstrap 默认工具类见官方",
    "Bootstrap Documentation": "Bootstrap 文档",
    "official Chart.js": "Chart.js 官方", "documentation": "文档",
    "official DataTables documentation": "DataTables 官方文档",
    "SB Admin Pro": "SB Admin 专业版",
    "is packed with premium features, components, and more!": "包含更多高级功能与组件。",
    "Upgrade to Pro!": "升级专业版", "Generate Report": "生成报告",
    "Earnings (Monthly)": "月收入", "Earnings (Annual)": "年收入",
    "Tasks": "任务", "Pending Requests": "待处理请求", "Earnings Overview": "收入概览",
    "Revenue Sources": "收入来源", "Direct": "直接访问", "Social": "社交媒体",
    "Referral": "推荐", "Projects": "项目", "Server Migration": "服务器迁移",
    "Sales Tracking": "销售跟踪", "Customer Database": "客户数据库",
    "Payout Details": "付款详情", "Account Setup": "账户设置", "Complete!": "已完成"
  };
  var PH = {
    "Search for...": "搜索…", "Enter your name": "请输入姓名",
    "Enter your email": "请输入邮箱", "Enter your password": "请输入密码",
    "Repeat your password": "请再次输入密码"
  };
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
    var n; while ((n = w.nextNode())) nodes.push(n);
    phEls = [].slice.call(document.querySelectorAll("[placeholder]"));
  }

  function apply(lang) {
    for (var i = 0; i < nodes.length; i++) {
      var n = nodes[i];
      if (n.__en === undefined) n.__en = n.nodeValue;
      var raw = n.__en, zh = MAP[raw.trim()];
      if (lang === "zh" && zh) {
        var a = raw.match(/^\s*/)[0], b = raw.match(/\s*$/)[0];
        n.nodeValue = a + zh + b;
      } else n.nodeValue = raw;
    }
    for (var k = 0; k < phEls.length; k++) {
      var el = phEls[k];
      if (el.__enPh === undefined) el.__enPh = el.getAttribute("placeholder");
      var zhp = PH[(el.__enPh || "").trim()];
      el.setAttribute("placeholder", (lang === "zh" && zhp) ? zhp : el.__enPh);
    }
    document.documentElement.lang = (lang === "zh") ? "zh-CN" : "en";
    var bs = document.querySelectorAll(".lang-tool button");
    for (var j = 0; j < bs.length; j++) {
      bs[j].className = (bs[j].getAttribute("data-l") === lang) ? "on" : "";
    }
    try { localStorage.setItem(KEY, lang); } catch (e) {}
  }

  function boot() {
    collect();
    if (!document.querySelector(".lang-tool")) {
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
    }
    var saved = "zh";
    try { saved = localStorage.getItem(KEY) || "zh"; } catch (e) {}
    apply(saved);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
