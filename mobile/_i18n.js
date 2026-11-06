/* 中英切换 · 移动端 */
(function () {
  var MAP = {
    "Add to Cart": "加入购物车", "Category": "分类", "Login": "登录",
    "Whishlist (0)": "收藏夹 (0)", "On Sale": "促销中", "Products": "商品",
    "Blog": "博客", "Coming Soon": "敬请期待", "by Samsung": "三星出品",
    "Newslatter": "订阅资讯", "Subscribe": "订阅", "Information": "信息",
    "About Us": "关于我们", "Delivery Information": "配送说明",
    "Privacy Policy": "隐私政策", "Terms & Conditions": "条款与条件",
    "Account": "账户", "My Account": "我的账户", "Order History": "订单记录",
    "Wish List": "收藏列表", "Newslatters": "订阅资讯",
    "\u00a9 Copyrights 2020. Desing By": "\u00a9 2020 版权所有。设计：",
    "Upcoming Mobiles": "即将上市", "Go somewhere": "跳转到…",
    "20,534 ratings": "20,534 条评价", "Delete": "删除",
    "Save for Later": "稍后再买", "Proceed to Buy": "去购买",
    "New Phones": "新机", "Top Sale": "热销", "Shopping Cart": "购物车",
    "Your order is eligible for FREE Delivery.": "你的订单可享受免费配送。",
    "Subtotal (2 item):": "小计（2 件）：", "Special Price": "特价",
    "All Brand": "全部品牌", "Apple": "苹果", "Samsung": "三星", "Redmi": "红米",
    "Latest Blogs": "最新博客",
    "20,534 ratings | 1000+ answered questions": "20,534 条评价 | 1000+ 个已解答问题",
    "Deal Price:": "成交价：", "Inclusive of all taxes": "含全部税费",
    "You Save:": "省下：", "10 Days": "10 天", "Daily Tuition": "每日一课",
    "Mobile Ready": "移动端适配", "Shop Now": "立即购买",
    "Featured Products": "精选商品", "View All": "查看全部",
    "Search": "搜索", "Home": "首页", "Contact": "联系"
  };
  var KEY = "lang_mobile";
  var nodes = [];

  function collect() {
    var skip = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1, TEXTAREA: 1, OPTION: 1 };
    var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        var p = n.parentNode;
        if (!p || skip[p.tagName]) return NodeFilter.FILTER_REJECT;
        if (!n.nodeValue || !n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var n; while ((n = w.nextNode())) nodes.push(n);
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
      css.textContent = ".lang-tool{position:fixed;right:12px;bottom:12px;z-index:99999;display:flex;" +
        "background:rgba(255,255,255,.96);border:1px solid #d9d9d9;border-radius:5px;overflow:hidden;" +
        "box-shadow:0 2px 10px rgba(0,0,0,.12);font-family:-apple-system,BlinkMacSystemFont,'PingFang SC','Microsoft YaHei',sans-serif}" +
        ".lang-tool button{border:0;background:transparent;padding:6px 10px;cursor:pointer;color:#666;" +
        "font-size:11px;font-family:inherit;line-height:1}" +
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
