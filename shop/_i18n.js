/* 中英切换 · 电商站 */
(function () {
  var MAP = {
    "Solutions": "解决方案", "Marketing": "市场营销", "Analitycs": "数据分析",
    "Commerce": "电商", "Insights": "洞察", "Support": "支持", "Pricing": "定价",
    "Documentation": "文档", "Guides": "指南", "API Status": "API 状态",
    "Shop": "商店", "Home": "首页", "About us": "关于我们", "Contact us": "联系我们",
    "Wishlist": "收藏夹", "Account": "账户", "Cart": "购物车", "Search": "搜索",
    "All Categories": "全部分类", "Login": "登录", "Login/Register": "登录 / 注册",
    "Logout": "退出登录",
    "Sofa": "沙发", "Outdoor": "户外", "Terarce": "阳台", "Bed": "床",
    "office": "办公", "Office": "办公", "Mattress": "床垫", "Mattrass": "床垫",
    "Mattrass X": "床垫 X", "Living Room": "客厅", "Kitchen": "厨房",
    "Bedroom": "卧室", "Couple Sofa": "双人沙发", "Italian shape sofa": "意式沙发",
    "Guyer Chair": "Guyer 单椅", "Bed King Size": "特大号床",
    "Add to cart": "加入购物车", "add to cart": "加入购物车",
    "Shop Now": "立即购买", "Checkout": "结算", "Edit": "编辑",
    "best collection for": "精选系列", "home decoration": "家居装饰",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam": "为你的家挑选经得起时间的家具与装饰。",
    "Free Shipping": "免费配送", "Order over $200": "满 $200 起",
    "Money Rturns": "退款保障", "30 days money returs": "30 天无理由退款",
    "24/7 Support": "全天候支持", "Customer support": "客服支持",
    "shop by category": "按分类选购", "top new arrival": "新品上市",
    "recomended for you": "为你推荐", "Price": "价格", "Color": "颜色",
    "size": "尺寸", "Size: M": "尺寸：M", "Availability:": "库存：",
    "In Stock": "有货", "Categories": "分类", "Brands": "品牌", "Company": "公司",
    "Profile information": "个人资料", "Hello,": "你好，",
    "Manage account": "账户管理", "Manage addresses": "地址管理",
    "Change password": "修改密码", "My order history": "我的订单",
    "My returns": "我的退货", "My Cancellations": "我的取消",
    "My reviews": "我的评价", "Payment methods": "支付方式", "voucher": "优惠券",
    "My wishlist": "我的收藏", "Email address": "邮箱地址",
    "Personal Profile": "个人资料", "Shipping address": "收货地址",
    "Billing address": "账单地址", "Phone number": "电话号码", "Password": "密码",
    "Profile": "个人资料", "terms & conditions": "条款与条件",
    "Medan, North Sumatera": "棉兰 · 北苏门答腊",
    "\u00a9 TailCommerce - All Right Reserved": "\u00a9 TailCommerce · 保留所有权利",
    "Related Products": "相关商品", "Description": "商品描述",
    "Reviews": "评价", "Quantity": "数量", "Buy Now": "立即购买",
    "Total": "合计", "Subtotal": "小计", "Shipping": "运费",
    "Continue Shopping": "继续购物", "Order Summary": "订单摘要",
    "Place Order": "提交订单", "Register": "注册", "Remember me": "记住我",
    "Forgot password?": "忘记密码？", "Sign in": "登录", "Sign up": "注册"
  };
  var PH = {
    "search": "搜索…", "Search": "搜索…", "Search products…": "搜索商品…",
    "Email": "邮箱", "Password": "密码", "Name": "姓名"
  };
  var KEY = "lang_shop";
  var nodes = [], phEls = [];

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
    phEls = [].slice.call(document.querySelectorAll("[placeholder]"));
  }

  function apply(lang) {
    for (var i = 0; i < nodes.length; i++) {
      var n = nodes[i];
      if (n.__en === undefined) n.__en = n.nodeValue;
      var raw = n.__en;
      var key = raw.trim().replace(/\s+/g, " ");
      var zh = MAP[key];
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
