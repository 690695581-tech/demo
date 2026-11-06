/* 中英切换 · 企业官网 */
(function () {
  var MAP = {
    "Menu": "菜单",
    "Services": "服务",
    "Portfolio": "作品",
    "About": "关于",
    "Team": "团队",
    "Contact": "联系",
    "Welcome To Our Studio!": "欢迎来到我们的工作室",
    "It's Nice To Meet You": "很高兴认识你",
    "Tell Me More": "了解更多",
    "Lorem ipsum dolor sit amet consectetur.": "专业、可靠、值得托付。",
    "E-Commerce": "电商",
    "Responsive Design": "响应式设计",
    "Web Security": "网站安全",
    "Threads": "针织",
    "Illustration": "插画",
    "Explore": "探索",
    "Graphic Design": "平面设计",
    "Finish": "完成",
    "Identity": "品牌识别",
    "Lines": "线条",
    "Branding": "品牌",
    "Southwest": "西南",
    "Website Design": "网站设计",
    "Window": "橱窗",
    "Photography": "摄影",
    "Our Humble Beginnings": "最初的起点",
    "March 2011": "2011 年 3 月",
    "An Agency is Born": "工作室成立",
    "December 2015": "2015 年 12 月",
    "Transition to Full Service": "转型全案服务",
    "July 2020": "2020 年 7 月",
    "Phase Two Expansion": "第二阶段扩张",
    "Be Part": "书写",
    "Of Our": "我们的",
    "Story!": "故事",
    "Our Amazing Team": "我们的团队",
    "Lead Designer": "设计主管",
    "Lead Marketer": "市场主管",
    "Lead Developer": "技术主管",
    "Contact Us": "联系我们",
    "A name is required.": "请填写姓名。",
    "An email is required.": "请填写邮箱。",
    "Email is not valid.": "邮箱格式不正确。",
    "A phone number is required.": "请填写电话。",
    "A message is required.": "请填写留言内容。",
    "Form submission successful!": "提交成功。",
    "Error sending message!": "提交失败，请稍后重试。",
    "Send Message": "发送消息",
    "Copyright © Your Website 2023": "© 2026 版权所有",
    "Privacy Policy": "隐私政策",
    "Terms of Use": "使用条款",
    "Project Name": "项目名称",
    "Client:": "客户：",
    "Category:": "分类："
  };
  var T_ZH = "企业官网 · 品牌展示";
  var T_EN = "Agency - Start Bootstrap Theme";
  var KEY = "lang_agency";
  var PH = {
    "Your Name *": "你的姓名 *",
    "Your Email *": "你的邮箱 *",
    "Your Phone *": "你的电话 *",
    "Your Message *": "留言内容 *"
  };
  var nodes = [], phEls = [], titleEn = document.title;

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
    document.title = (lang === "zh") ? T_ZH : titleEn;
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
      "box-shadow:0 2px 10px rgba(0,0,0,.1);font-family:-apple-system,BlinkMacSystemFont,'PingFang SC','Microsoft YaHei',sans-serif}" +
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
