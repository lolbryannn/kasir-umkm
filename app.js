/*
  Kasir UMKM — free offline cashier app
  Template by Bryan (@lolbryannn). All data stays in this browser (localStorage).
*/
(function () {
  "use strict";

  const KEY = "kasir-umkm-v1";
  const $ = s => document.querySelector(s);
  const view = $("#view");

  /* ================= Text (Indonesian + English) ================= */
  const DICT = {
    id: {
      "nav.pos": "Kasir", "nav.history": "Riwayat", "nav.reports": "Laporan", "nav.products": "Produk", "nav.settings": "Atur",
      "search": "Cari produk…", "all": "Semua", "cart": "Keranjang", "cart.empty": "Keranjang kosong", "cart.emptySub": "Ketuk produk untuk menambahkan.",
      "subtotal": "Subtotal", "discount": "Diskon", "total": "Total", "pay": "Bayar", "clear": "Kosongkan", "addDiscount": "+ Diskon",
      "items": "{n} item", "stock": "Stok {n}", "out": "Habis", "outOfStock": "Stok {name} habis",
      "payTitle": "Pembayaran", "method": "Metode", "cash": "Tunai", "qris": "QRIS", "transfer": "Transfer",
      "cashReceived": "Uang diterima", "exact": "Uang pas", "change": "Kembalian", "short": "Kurang", "confirmPay": "Selesaikan transaksi",
      "note": "Catatan (opsional)", "paidOk": "Transaksi berhasil", "print": "Cetak struk", "wa": "Kirim WhatsApp", "newSale": "Transaksi baru",
      "discTitle": "Diskon", "discRp": "Rupiah", "discPct": "Persen", "apply": "Terapkan", "remove": "Hapus", "cancel": "Batal", "save": "Simpan", "close": "Tutup",
      "history": "Riwayat transaksi", "date": "Tanggal", "noSales": "Belum ada transaksi", "noSalesSub": "Transaksi di tanggal ini akan muncul di sini.",
      "dayTotal": "{n} transaksi · {total}", "void": "Batalkan transaksi", "voided": "Dibatalkan", "voidQ": "Batalkan transaksi {no}? Stok produk akan dikembalikan.", "voidOk": "Transaksi dibatalkan",
      "receipt": "Struk", "reports": "Laporan", "today": "Hari ini", "d7": "7 hari", "d30": "30 hari", "month": "Bulan ini",
      "revenue": "Omzet", "trx": "Transaksi", "avg": "Rata-rata", "profit": "Laba kotor", "profitHint": "harga − modal − diskon",
      "perDay": "Penjualan per hari", "perHour": "Penjualan per jam", "top": "Produk terlaris", "byMethod": "Metode pembayaran", "export": "Ekspor CSV", "sold": "{n} terjual",
      "products": "Produk", "addProduct": "Tambah produk", "editProduct": "Ubah produk", "name": "Nama produk", "category": "Kategori", "price": "Harga jual",
      "cost": "Modal (opsional)", "costHint": "Untuk menghitung laba kotor.", "emoji": "Ikon", "trackStock": "Hitung stok", "stockQty": "Jumlah stok",
      "lowStock": "Stok menipis", "deleteProduct": "Hapus produk", "deleteQ": "Hapus {name}? Riwayat transaksi tetap aman.", "saved": "Tersimpan", "deleted": "Dihapus",
      "noProducts": "Belum ada produk", "noProductsSub": "Tambahkan produk pertamamu untuk mulai berjualan.", "required": "Nama dan harga wajib diisi",
      "settings": "Pengaturan", "store": "Toko", "storeName": "Nama toko", "address": "Alamat", "phone": "No. HP / WhatsApp", "footer": "Catatan di bawah struk",
      "data": "Data", "dataHint": "Semua data tersimpan di browser ini saja. Rutin unduh cadangan supaya aman.",
      "backup": "Unduh cadangan", "restore": "Pulihkan dari file", "restoreQ": "Ganti semua data dengan isi file ini?", "restored": "Data dipulihkan", "badFile": "File tidak valid",
      "loadDemo": "Isi data contoh", "loadDemoQ": "Ganti semua data dengan data contoh?", "resetAll": "Hapus semua data", "resetQ": "Hapus SEMUA produk dan transaksi? Ini tidak bisa dibatalkan.",
      "demoNote": "Ini data contoh. Coba-coba dulu, lalu mulai dari nol.", "startFresh": "Mulai dari nol", "freshQ": "Hapus produk & transaksi contoh, lalu mulai dari nol?",
      "about": "Tentang", "aboutText": "Kasir UMKM — gratis, jalan offline. Template oleh @lolbryannn.", "install": "Tip: buka menu browser → \"Tambahkan ke layar utama\" supaya bisa dibuka seperti aplikasi.",
      "thanks": "Terima kasih!", "cashier": "Kasir", "no": "No", "paid": "Bayar", "unit": "pcs", "offline": "offline", "copied": "Disalin"
    },
    en: {
      "nav.pos": "Checkout", "nav.history": "History", "nav.reports": "Reports", "nav.products": "Products", "nav.settings": "Settings",
      "search": "Search products…", "all": "All", "cart": "Cart", "cart.empty": "Cart is empty", "cart.emptySub": "Tap a product to add it.",
      "subtotal": "Subtotal", "discount": "Discount", "total": "Total", "pay": "Pay", "clear": "Clear", "addDiscount": "+ Discount",
      "items": "{n} items", "stock": "Stock {n}", "out": "Sold out", "outOfStock": "{name} is out of stock",
      "payTitle": "Payment", "method": "Method", "cash": "Cash", "qris": "QRIS", "transfer": "Transfer",
      "cashReceived": "Cash received", "exact": "Exact", "change": "Change", "short": "Short", "confirmPay": "Complete sale",
      "note": "Note (optional)", "paidOk": "Sale completed", "print": "Print receipt", "wa": "Send via WhatsApp", "newSale": "New sale",
      "discTitle": "Discount", "discRp": "Amount", "discPct": "Percent", "apply": "Apply", "remove": "Remove", "cancel": "Cancel", "save": "Save", "close": "Close",
      "history": "Sales history", "date": "Date", "noSales": "No sales yet", "noSalesSub": "Sales on this date will show up here.",
      "dayTotal": "{n} sales · {total}", "void": "Void sale", "voided": "Voided", "voidQ": "Void sale {no}? Product stock will be restored.", "voidOk": "Sale voided",
      "receipt": "Receipt", "reports": "Reports", "today": "Today", "d7": "7 days", "d30": "30 days", "month": "This month",
      "revenue": "Revenue", "trx": "Sales", "avg": "Average", "profit": "Gross profit", "profitHint": "price − cost − discounts",
      "perDay": "Sales per day", "perHour": "Sales per hour", "top": "Best sellers", "byMethod": "Payment methods", "export": "Export CSV", "sold": "{n} sold",
      "products": "Products", "addProduct": "Add product", "editProduct": "Edit product", "name": "Product name", "category": "Category", "price": "Selling price",
      "cost": "Cost (optional)", "costHint": "Used to calculate gross profit.", "emoji": "Icon", "trackStock": "Track stock", "stockQty": "Stock quantity",
      "lowStock": "Low stock", "deleteProduct": "Delete product", "deleteQ": "Delete {name}? Past sales are kept.", "saved": "Saved", "deleted": "Deleted",
      "noProducts": "No products yet", "noProductsSub": "Add your first product to start selling.", "required": "Name and price are required",
      "settings": "Settings", "store": "Store", "storeName": "Store name", "address": "Address", "phone": "Phone / WhatsApp", "footer": "Receipt footer",
      "data": "Data", "dataHint": "All data is stored in this browser only. Download a backup regularly to keep it safe.",
      "backup": "Download backup", "restore": "Restore from file", "restoreQ": "Replace all data with this file?", "restored": "Data restored", "badFile": "Invalid file",
      "loadDemo": "Load sample data", "loadDemoQ": "Replace all data with sample data?", "resetAll": "Delete all data", "resetQ": "Delete ALL products and sales? This can't be undone.",
      "demoNote": "This is sample data. Try things out, then start fresh.", "startFresh": "Start fresh", "freshQ": "Remove the sample products and sales and start fresh?",
      "about": "About", "aboutText": "Kasir UMKM — free, works offline. Template by @lolbryannn.", "install": "Tip: open your browser menu → \"Add to Home screen\" to use it like an app.",
      "thanks": "Thank you!", "cashier": "Cashier", "no": "No", "paid": "Paid", "unit": "pcs", "offline": "offline", "copied": "Copied"
    }
  };

  /* ================= Helpers ================= */
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  const toInt = v => { const n = parseInt(String(v).replace(/[^\d]/g, ""), 10); return isNaN(n) ? 0 : n; };
  const nf = new Intl.NumberFormat("id-ID");
  const rp = n => "Rp " + nf.format(Math.round(n || 0));
  const pad = n => String(n).padStart(2, "0");
  const dayKey = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  const startOfDay = d => new Date(d.getFullYear(), d.getMonth(), d.getDate());
  const addDays = (d, n) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);
  const locale = () => (db.settings.lang === "en" ? "en-GB" : "id-ID");
  const fmtDate = (d, opts) => new Intl.DateTimeFormat(locale(), opts || { weekday: "long", day: "numeric", month: "long", year: "numeric" }).format(d);
  const fmtTime = d => new Intl.DateTimeFormat("id-ID", { hour: "2-digit", minute: "2-digit" }).format(d);
  function t(key, vars) {
    let s = (DICT[db.settings.lang] || DICT.id)[key];
    if (s == null) s = DICT.id[key] || key;
    if (vars) Object.keys(vars).forEach(k => { s = s.split("{" + k + "}").join(vars[k]); });
    return s;
  }

  /* ================= Data ================= */
  function demoData() {
    const P = (emoji, name, cat, price, cost, stock) => ({ id: uid(), emoji, name, cat, price, cost, stock });
    const products = [
      P("☕", "Kopi Susu Gula Aren", "Minuman", 18000, 8000, null),
      P("🧋", "Es Teh Manis", "Minuman", 5000, 1500, null),
      P("🍵", "Matcha Latte", "Minuman", 22000, 10000, null),
      P("🥤", "Jus Jeruk", "Minuman", 12000, 5000, null),
      P("🍜", "Indomie Goreng Telur", "Makanan", 12000, 6000, 40),
      P("🍛", "Nasi Goreng Spesial", "Makanan", 20000, 9000, null),
      P("🍞", "Roti Bakar Cokelat", "Makanan", 15000, 6000, 20),
      P("🍟", "Kentang Goreng", "Camilan", 15000, 6000, 3),
      P("🥟", "Dimsum (4 pcs)", "Camilan", 16000, 8000, 0),
      P("🍪", "Cookies", "Camilan", 8000, 3000, 25)
    ];
    // a week of believable sales so the reports have something to show
    let seed = 7;
    const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
    const sales = [];
    const today = startOfDay(new Date());
    let seq = 0;
    for (let d = 6; d >= 0; d--) {
      const n = 4 + Math.floor(rnd() * 6);
      for (let i = 0; i < n; i++) {
        const at = addDays(today, -d);
        at.setHours(8 + Math.floor(rnd() * 13), Math.floor(rnd() * 60));
        if (at > new Date()) continue;
        const lines = [];
        const count = 1 + Math.floor(rnd() * 3);
        for (let j = 0; j < count; j++) {
          const p = products[Math.floor(rnd() * 8)];
          const ex = lines.find(l => l.pid === p.id);
          if (ex) ex.qty++; else lines.push({ pid: p.id, name: p.name, price: p.price, cost: p.cost, qty: 1 + Math.floor(rnd() * 2) });
        }
        const subtotal = lines.reduce((s, l) => s + l.price * l.qty, 0);
        const method = ["cash", "cash", "qris", "transfer"][Math.floor(rnd() * 4)];
        const paid = method === "cash" ? Math.ceil(subtotal / 10000) * 10000 : subtotal;
        seq++;
        sales.push({ id: uid(), no: saleNo(at, seq), at: at.toISOString(), items: lines, subtotal, discount: 0, total: subtotal, method, paid, change: paid - subtotal, note: "" });
      }
    }
    sales.sort((a, b) => a.at.localeCompare(b.at));
    return {
      v: 1, seq,
      settings: { storeName: "Kedai Kopi Contoh", address: "Jl. Contoh No. 1, Kota", phone: "0812-0000-0000", footer: "Terima kasih, sampai jumpa lagi!", lang: "id", demo: true },
      products, sales
    };
  }
  function emptyData(settings) {
    return { v: 1, seq: 0, settings: Object.assign({ storeName: "Toko Saya", address: "", phone: "", footer: "Terima kasih!", lang: "id" }, settings || {}, { demo: false }), products: [], sales: [] };
  }
  function valid(d) {
    return d && typeof d === "object" && Array.isArray(d.products) && Array.isArray(d.sales) && d.settings && typeof d.settings === "object";
  }
  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) { const d = JSON.parse(raw); if (valid(d)) return d; }
    } catch (e) { /* storage blocked or corrupt */ }
    return demoData();
  }
  let storageOk = true;
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(db)); storageOk = true; }
    catch (e) { if (storageOk) toast("⚠ Data tidak bisa disimpan di browser ini / Can't save data in this browser"); storageOk = false; }
  }
  function saleNo(at, seq) {
    const d = new Date(at);
    return `${String(d.getFullYear()).slice(2)}${pad(d.getMonth() + 1)}${pad(d.getDate())}-${String(seq).padStart(4, "0")}`;
  }

  let db = load();
  save();

  /* ================= UI state ================= */
  const cart = new Map();          // productId -> qty
  let discount = { type: "rp", value: 0 };
  let posCat = "all", posQuery = "", cartOpen = false;
  let histDate = dayKey(new Date());
  let period = "d7";
  let prodQuery = "";

  /* ================= Toast / modal ================= */
  let toastTimer;
  function toast(msg) {
    const el = $("#toast");
    el.textContent = msg; el.classList.add("show");
    clearTimeout(toastTimer); toastTimer = setTimeout(() => el.classList.remove("show"), 2200);
  }
  const modalRoot = $("#modal-root"), modal = $("#modal");
  let modalHandlers = {}, lastFocus = null, onModalClose = null;
  function openModal(html, handlers, opts) {
    lastFocus = document.activeElement;
    modal.className = "modal" + (opts && opts.wide ? " wide" : "");
    modal.innerHTML = html;
    modalHandlers = handlers || {};
    onModalClose = (opts && opts.onClose) || null;
    modalRoot.hidden = false;
    document.body.style.overflow = "hidden";
    const focusEl = modal.querySelector("[autofocus]") || modal;
    setTimeout(() => focusEl.focus(), 30);
  }
  function closeModal() {
    if (modalRoot.hidden) return;
    modalRoot.hidden = true; modal.innerHTML = ""; modalHandlers = {};
    document.body.style.overflow = "";
    const cb = onModalClose; onModalClose = null;
    if (cb) cb();
    if (lastFocus && document.contains(lastFocus)) lastFocus.focus();
  }
  modalRoot.addEventListener("click", e => {
    if (e.target.closest("[data-close]")) return closeModal();
    const a = e.target.closest("[data-m]");
    if (a && modalHandlers[a.dataset.m]) modalHandlers[a.dataset.m](a, e);
  });
  modalRoot.addEventListener("input", e => { if (modalHandlers.input) modalHandlers.input(e.target, e); });
  modalRoot.addEventListener("change", e => { if (modalHandlers.change) modalHandlers.change(e.target, e); });
  modalRoot.addEventListener("submit", e => { e.preventDefault(); if (modalHandlers.submit) modalHandlers.submit(e.target, e); });
  document.addEventListener("keydown", e => {
    if (modalRoot.hidden) {
      if (e.key === "Escape" && cartOpen) { cartOpen = false; renderPosCart(); }
      return;
    }
    if (e.key === "Escape") closeModal();
    if (e.key === "Tab") { // keep focus inside the dialog
      const f = modal.querySelectorAll("button, [href], input, select, textarea");
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
  function confirmBox(message, okLabel, danger) {
    return new Promise(resolve => {
      let answered = false;
      openModal(`
        <div class="m-body"><p style="margin:0;font-size:16px">${esc(message)}</p></div>
        <div class="m-foot">
          <button class="btn" type="button" data-m="no">${esc(t("cancel"))}</button>
          <button class="btn ${danger ? "btn-danger" : "btn-primary"}" type="button" data-m="yes" autofocus>${esc(okLabel)}</button>
        </div>`, {
        yes: () => { answered = true; closeModal(); resolve(true); },
        no: () => { answered = true; closeModal(); resolve(false); }
      }, { onClose: () => { if (!answered) resolve(false); } });
    });
  }

  /* ================= Calculations ================= */
  const productById = id => db.products.find(p => p.id === id);
  function cartLines() {
    const lines = [];
    cart.forEach((qty, pid) => { const p = productById(pid); if (p) lines.push({ p, qty }); else cart.delete(pid); });
    return lines;
  }
  function cartTotals() {
    const lines = cartLines();
    const subtotal = lines.reduce((s, l) => s + l.p.price * l.qty, 0);
    let disc = discount.type === "pct" ? Math.round(subtotal * Math.min(discount.value, 100) / 100) : discount.value;
    disc = Math.max(0, Math.min(disc, subtotal));
    const count = lines.reduce((s, l) => s + l.qty, 0);
    return { lines, subtotal, discount: disc, total: subtotal - disc, count };
  }
  const activeSales = () => db.sales.filter(s => !s.voided);
  const saleProfit = s => s.items.reduce((a, l) => a + (l.price - (l.cost || 0)) * l.qty, 0) - (s.discount || 0);
  const hasCost = () => db.products.some(p => p.cost > 0) || db.sales.some(s => s.items.some(l => l.cost > 0));

  /* ================= Router ================= */
  const VIEWS = { kasir: renderPos, riwayat: renderHistory, laporan: renderReports, produk: renderProducts, atur: renderSettings };
  function current() { const h = location.hash.slice(1); return VIEWS[h] ? h : "kasir"; }
  function route() {
    const name = current();
    document.querySelectorAll(".nav a").forEach(a => {
      if (a.dataset.view === name) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    cartOpen = false;
    VIEWS[name]();
    window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", route);

  function chrome() {
    document.documentElement.lang = db.settings.lang;
    $("#store-name").textContent = db.settings.storeName || "Kasir UMKM";
    document.title = (db.settings.storeName ? db.settings.storeName + " · " : "") + "Kasir UMKM";
    document.querySelectorAll("[data-t]").forEach(el => { el.textContent = t(el.dataset.t); });
    document.querySelectorAll(".lang button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.lang === db.settings.lang)));
    tick();
  }
  function tick() {
    const now = new Date();
    $("#clock").textContent = fmtDate(now, { weekday: "short", day: "numeric", month: "short" }) + " · " + fmtTime(now);
  }
  setInterval(tick, 30000);
  document.querySelectorAll(".lang button").forEach(b => b.addEventListener("click", () => {
    db.settings.lang = b.dataset.lang; save(); chrome(); route();
  }));
  function netState() { $("#offline").hidden = navigator.onLine; }
  window.addEventListener("online", netState); window.addEventListener("offline", netState);

  /* ================= View: Checkout (POS) ================= */
  const ICON_SEARCH = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>';

  function demoBanner() {
    return db.settings.demo
      ? `<div class="demo-note"><span>🧪 ${esc(t("demoNote"))}</span><button class="btn btn-sm" type="button" data-a="fresh">${esc(t("startFresh"))}</button></div>`
      : "";
  }
  function renderPos() {
    const cats = [...new Set(db.products.map(p => p.cat).filter(Boolean))];
    if (posCat !== "all" && !cats.includes(posCat)) posCat = "all";
    view.innerHTML = `
      ${demoBanner()}
      <div class="pos">
        <section class="pos-main" aria-label="${esc(t("products"))}">
          <div class="pos-tools">
            <label class="search">${ICON_SEARCH}<span class="sr">${esc(t("search"))}</span>
              <input class="input" type="search" placeholder="${esc(t("search"))}" value="${esc(posQuery)}" data-i="pos-search" autocomplete="off"></label>
            <div class="chips" role="toolbar">
              <button class="chip" type="button" data-a="cat" data-cat="all" aria-pressed="${posCat === "all"}">${esc(t("all"))}</button>
              ${cats.map(c => `<button class="chip" type="button" data-a="cat" data-cat="${esc(c)}" aria-pressed="${posCat === c}">${esc(c)}</button>`).join("")}
            </div>
          </div>
          <div class="grid-products" id="grid"></div>
        </section>
        <div id="cart-wrap"></div>
      </div>`;
    renderPosGrid();
    renderPosCart();
  }
  function renderPosGrid() {
    const grid = $("#grid"); if (!grid) return;
    if (!db.products.length) {
      grid.outerHTML = `<div class="card empty" id="grid"><b>${esc(t("noProducts"))}</b>${esc(t("noProductsSub"))}<div style="margin-top:14px"><a class="btn btn-primary" href="#produk">${esc(t("addProduct"))}</a></div></div>`;
      return;
    }
    const q = posQuery.trim().toLowerCase();
    const list = db.products.filter(p => (posCat === "all" || p.cat === posCat) && (!q || (p.name + " " + (p.cat || "")).toLowerCase().includes(q)));
    grid.innerHTML = list.length ? list.map(p => {
      const inCart = cart.get(p.id) || 0;
      const tracked = p.stock != null;
      const left = tracked ? p.stock - inCart : Infinity;
      const stockBadge = !tracked ? "" : p.stock <= 0 ? `<span class="badge badge-danger p-stock">${esc(t("out"))}</span>`
        : p.stock <= 5 ? `<span class="badge badge-warn p-stock">${esc(t("stock", { n: p.stock }))}</span>` : "";
      return `<button class="p-card" type="button" data-a="add" data-id="${esc(p.id)}" ${left <= 0 && !inCart ? "disabled" : ""} aria-label="${esc(p.name)}, ${esc(rp(p.price))}">
        ${inCart ? `<span class="p-qty">${inCart}</span>` : ""}${stockBadge}
        <span class="p-emoji" aria-hidden="true">${esc(p.emoji || "📦")}</span>
        <span class="p-name">${esc(p.name)}</span>
        <span class="p-price num">${esc(rp(p.price))}</span>
      </button>`;
    }).join("") : `<div class="empty" style="grid-column:1/-1">—</div>`;
  }
  function renderPosCart() {
    const wrap = $("#cart-wrap"); if (!wrap) return;
    const T = cartTotals();
    const lines = T.lines.map(({ p, qty }) => `
      <div class="c-line">
        <div><div class="c-name">${esc(p.name)}</div><div class="c-sub num">${esc(rp(p.price))} × ${qty}</div></div>
        <div class="c-total num">${esc(rp(p.price * qty))}</div>
        <div></div>
        <div class="stepper"><button type="button" data-a="dec" data-id="${esc(p.id)}" aria-label="−">−</button><span class="num">${qty}</span><button type="button" data-a="inc" data-id="${esc(p.id)}" aria-label="+">+</button></div>
      </div>`).join("");
    wrap.innerHTML = `
      ${cartOpen ? `<div class="sheet-scrim" data-a="cart-close"></div>` : ""}
      <aside class="card cart${cartOpen ? " open" : ""}" aria-label="${esc(t("cart"))}">
        <div class="cart-head"><h2>${esc(t("cart"))} <span class="muted num" style="font-weight:500;font-size:14px">· ${esc(t("items", { n: T.count }))}</span></h2>
          <button class="x-btn cart-close" type="button" data-a="cart-close" aria-label="${esc(t("close"))}">✕</button></div>
        <div class="cart-items">${lines || `<div class="empty"><b>${esc(t("cart.empty"))}</b>${esc(t("cart.emptySub"))}</div>`}</div>
        <div class="cart-foot">
          <div class="sum-row"><span class="muted">${esc(t("subtotal"))}</span><span class="num">${esc(rp(T.subtotal))}</span></div>
          <div class="sum-row"><span class="muted">${esc(t("discount"))}${discount.type === "pct" && discount.value ? ` (${discount.value}%)` : ""}</span>
            ${T.discount ? `<button class="link-btn num" type="button" data-a="discount">− ${esc(rp(T.discount))}</button>` : `<button class="link-btn" type="button" data-a="discount" ${T.count ? "" : "disabled"}>${esc(t("addDiscount"))}</button>`}</div>
          <div class="sum-row total"><span>${esc(t("total"))}</span><span class="num">${esc(rp(T.total))}</span></div>
          <div class="cart-actions">
            <button class="btn" type="button" data-a="clear" ${T.count ? "" : "disabled"}>${esc(t("clear"))}</button>
            <button class="btn btn-primary btn-lg" type="button" data-a="pay" ${T.count ? "" : "disabled"}>${esc(t("pay"))} · <span class="num">${esc(rp(T.total))}</span></button>
          </div>
        </div>
      </aside>
      <button class="cart-bar" type="button" data-a="cart-open" ${T.count && !cartOpen ? "" : "hidden"}>
        <span>🛒 ${esc(t("items", { n: T.count }))}</span><span class="num">${esc(rp(T.total))} →</span>
      </button>`;
  }
  function addToCart(id, delta) {
    const p = productById(id); if (!p) return;
    const cur = cart.get(id) || 0;
    const next = cur + delta;
    if (delta > 0 && p.stock != null && next > p.stock) { toast(t("outOfStock", { name: p.name })); return; }
    if (next <= 0) cart.delete(id); else cart.set(id, next);
    if (!cart.size) discount = { type: "rp", value: 0 };
    renderPosGrid(); renderPosCart();
  }

  function openDiscount() {
    const T = cartTotals();
    let type = discount.type;
    const body = () => `
      <div class="m-head"><h2 id="modal-title">${esc(t("discTitle"))}</h2><button class="x-btn" type="button" data-close aria-label="${esc(t("close"))}">✕</button></div>
      <form class="m-body" id="disc-form">
        <div class="seg" style="grid-template-columns:1fr 1fr">
          <button type="button" data-m="type" data-type="rp" aria-pressed="${type === "rp"}">${esc(t("discRp"))} (Rp)</button>
          <button type="button" data-m="type" data-type="pct" aria-pressed="${type === "pct"}">${esc(t("discPct"))} (%)</button>
        </div>
        <input class="input cash-input num" id="disc-val" inputmode="numeric" autocomplete="off" value="${discount.value ? esc(type === "rp" ? nf.format(discount.value) : discount.value) : ""}" placeholder="0" autofocus aria-label="${esc(t("discount"))}">
        <p class="muted" style="margin:10px 0 0">${esc(t("subtotal"))}: <b class="num">${esc(rp(T.subtotal))}</b></p>
      </form>
      <div class="m-foot">
        <button class="btn btn-danger" type="button" data-m="remove">${esc(t("remove"))}</button>
        <button class="btn btn-primary" type="submit" form="disc-form">${esc(t("apply"))}</button>
      </div>`;
    const apply = () => {
      const v = toInt($("#disc-val").value);
      discount = { type, value: type === "pct" ? Math.min(v, 100) : Math.min(v, T.subtotal) };
      closeModal(); renderPosCart();
    };
    openModal(body(), {
      type: el => { type = el.dataset.type; modal.querySelectorAll("[data-m=type]").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.type === type))); $("#disc-val").value = ""; $("#disc-val").focus(); },
      remove: () => { discount = { type: "rp", value: 0 }; closeModal(); renderPosCart(); },
      input: el => { if (el.id === "disc-val" && type === "rp") { const v = toInt(el.value); el.value = v ? nf.format(v) : ""; } },
      submit: apply
    });
  }

  function quickAmounts(total) {
    const set = new Set();
    [5000, 10000, 20000, 50000, 100000].forEach(step => { const v = Math.ceil(total / step) * step; if (v > total) set.add(v); });
    [50000, 100000].forEach(v => { if (v > total) set.add(v); });
    return [...set].sort((a, b) => a - b).slice(0, 5);
  }
  function openPay() {
    const T = cartTotals(); if (!T.count) return;
    let method = "cash";
    const body = () => `
      <div class="m-head"><h2 id="modal-title">${esc(t("payTitle"))}</h2><button class="x-btn" type="button" data-close aria-label="${esc(t("close"))}">✕</button></div>
      <form class="m-body" id="pay-form">
        <div class="pay-total"><span class="label">${esc(t("total"))}</span><span class="big num">${esc(rp(T.total))}</span></div>
        <div class="label" style="margin-bottom:6px">${esc(t("method"))}</div>
        <div class="seg">
          ${["cash", "qris", "transfer"].map(m => `<button type="button" data-m="method" data-method="${m}" aria-pressed="${m === method}">${esc(t(m))}</button>`).join("")}
        </div>
        <div id="cash-box" ${method === "cash" ? "" : "hidden"}>
          <label class="label" for="cash">${esc(t("cashReceived"))}</label>
          <input class="input cash-input num" id="cash" inputmode="numeric" autocomplete="off" placeholder="0" autofocus style="margin-top:6px">
          <div class="quick">
            <button type="button" data-m="quick" data-v="${T.total}">${esc(t("exact"))}</button>
            ${quickAmounts(T.total).map(v => `<button type="button" data-m="quick" data-v="${v}" class="num">${esc(nf.format(v))}</button>`).join("")}
          </div>
          <div class="change" id="change"></div>
        </div>
        <div class="field" style="margin:16px 0 0"><label for="pay-note">${esc(t("note"))}</label><input class="input" id="pay-note" maxlength="120" autocomplete="off"></div>
      </form>
      <div class="m-foot"><button class="btn btn-primary btn-lg btn-block" type="submit" form="pay-form" id="pay-ok">${esc(t("confirmPay"))}</button></div>`;
    const update = () => {
      const ok = $("#pay-ok");
      if (method !== "cash") { ok.disabled = false; return; }
      const cash = toInt($("#cash").value);
      const ch = $("#change");
      if (!cash) { ch.className = "change"; ch.innerHTML = `<span>${esc(t("change"))}</span><span class="num">—</span>`; ok.disabled = true; return; }
      const diff = cash - T.total;
      ch.className = "change " + (diff >= 0 ? "ok" : "short");
      ch.innerHTML = `<span>${esc(diff >= 0 ? t("change") : t("short"))}</span><span class="num">${esc(rp(Math.abs(diff)))}</span>`;
      ok.disabled = diff < 0;
    };
    openModal(body(), {
      method: el => {
        method = el.dataset.method;
        modal.querySelectorAll("[data-m=method]").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.method === method)));
        $("#cash-box").hidden = method !== "cash";
        if (method === "cash") $("#cash").focus();
        update();
      },
      quick: el => { $("#cash").value = nf.format(toInt(el.dataset.v)); update(); },
      input: el => { if (el.id === "cash") { const v = toInt(el.value); el.value = v ? nf.format(v) : ""; update(); } },
      submit: () => {
        if ($("#pay-ok").disabled) return;
        const cash = method === "cash" ? toInt($("#cash").value) : T.total;
        completeSale(method, cash, $("#pay-note").value.trim());
      }
    });
    update();
  }
  function completeSale(method, paid, note) {
    const T = cartTotals();
    const now = new Date();
    db.seq = (db.seq || 0) + 1;
    const sale = {
      id: uid(), no: saleNo(now, db.seq), at: now.toISOString(),
      items: T.lines.map(({ p, qty }) => ({ pid: p.id, name: p.name, price: p.price, cost: p.cost || 0, qty })),
      subtotal: T.subtotal, discount: T.discount, total: T.total, method, paid, change: Math.max(0, paid - T.total), note
    };
    T.lines.forEach(({ p, qty }) => { if (p.stock != null) p.stock = Math.max(0, p.stock - qty); });
    db.sales.push(sale);
    save();
    cart.clear(); discount = { type: "rp", value: 0 }; cartOpen = false;
    closeModal();
    renderPos();
    showReceipt(sale, true);
  }

  /* ================= Receipts ================= */
  function receiptHTML(s) {
    const st = db.settings, d = new Date(s.at);
    return `<div class="receipt">
      <div class="c b big">${esc(st.storeName || "")}</div>
      ${st.address ? `<div class="c">${esc(st.address)}</div>` : ""}
      ${st.phone ? `<div class="c">${esc(st.phone)}</div>` : ""}
      <hr>
      <div class="r"><span>${esc(t("no"))}</span><span>${esc(s.no)}</span></div>
      <div class="r"><span>${esc(fmtDate(d, { day: "2-digit", month: "2-digit", year: "numeric" }))}</span><span>${esc(fmtTime(d))}</span></div>
      <hr>
      ${s.items.map(l => `<div>${esc(l.name)}</div><div class="r"><span>${l.qty} × ${esc(nf.format(l.price))}</span><span>${esc(nf.format(l.price * l.qty))}</span></div>`).join("")}
      <hr>
      <div class="r"><span>${esc(t("subtotal"))}</span><span>${esc(nf.format(s.subtotal))}</span></div>
      ${s.discount ? `<div class="r"><span>${esc(t("discount"))}</span><span>-${esc(nf.format(s.discount))}</span></div>` : ""}
      <div class="r b big"><span>${esc(t("total"))}</span><span>${esc(rp(s.total))}</span></div>
      <div class="r"><span>${esc(t(s.method))}</span><span>${esc(nf.format(s.paid))}</span></div>
      ${s.method === "cash" ? `<div class="r"><span>${esc(t("change"))}</span><span>${esc(nf.format(s.change))}</span></div>` : ""}
      ${s.note ? `<hr><div>${esc(s.note)}</div>` : ""}
      ${s.voided ? `<hr><div class="c b">*** ${esc(t("voided").toUpperCase())} ***</div>` : ""}
      <hr>
      <div class="c">${esc(st.footer || t("thanks"))}</div>
    </div>`;
  }
  function receiptText(s) {
    const st = db.settings, d = new Date(s.at);
    const L = [];
    L.push("*" + (st.storeName || "") + "*");
    if (st.address) L.push(st.address);
    L.push(`${t("no")}: ${s.no}`, `${fmtDate(d, { day: "2-digit", month: "2-digit", year: "numeric" })} ${fmtTime(d)}`, "------------------------");
    s.items.forEach(l => L.push(`${l.name}`, `  ${l.qty} x ${nf.format(l.price)} = ${nf.format(l.price * l.qty)}`));
    L.push("------------------------");
    if (s.discount) L.push(`${t("discount")}: -${nf.format(s.discount)}`);
    L.push(`*${t("total")}: ${rp(s.total)}*`, `${t(s.method)}: ${nf.format(s.paid)}`);
    if (s.method === "cash") L.push(`${t("change")}: ${nf.format(s.change)}`);
    L.push("", st.footer || t("thanks"));
    return L.join("\n");
  }
  function printReceipt(s) {
    $("#print-area").innerHTML = receiptHTML(s);
    window.print();
  }
  function showReceipt(s, justPaid) {
    openModal(`
      <div class="m-head"><h2 id="modal-title">${esc(justPaid ? t("paidOk") : t("receipt") + " " + s.no)}</h2><button class="x-btn" type="button" data-close aria-label="${esc(t("close"))}">✕</button></div>
      <div class="m-body">
        ${justPaid ? `<div class="success"><div class="tick">✓</div>${s.method === "cash" && s.change ? `<div class="muted">${esc(t("change"))}</div><div style="font-size:28px;font-weight:800" class="num">${esc(rp(s.change))}</div>` : ""}</div>` : ""}
        ${receiptHTML(s)}
      </div>
      <div class="m-foot">
        ${!justPaid && !s.voided ? `<button class="btn btn-danger" type="button" data-m="void" style="margin-right:auto">${esc(t("void"))}</button>` : ""}
        <button class="btn" type="button" data-m="print">${esc(t("print"))}</button>
        <button class="btn" type="button" data-m="wa">${esc(t("wa"))}</button>
        ${justPaid ? `<button class="btn btn-primary" type="button" data-close autofocus>${esc(t("newSale"))}</button>` : ""}
      </div>`, {
      print: () => printReceipt(s),
      wa: () => window.open("https://wa.me/?text=" + encodeURIComponent(receiptText(s)), "_blank", "noopener"),
      void: async () => {
        const yes = await confirmBox(t("voidQ", { no: s.no }), t("void"), true);
        if (!yes) return;
        s.voided = true;
        s.items.forEach(l => { const p = productById(l.pid); if (p && p.stock != null) p.stock += l.qty; });
        save(); toast(t("voidOk")); route();
      }
    });
  }

  /* ================= View: History ================= */
  function renderHistory() {
    const list = db.sales.filter(s => dayKey(new Date(s.at)) === histDate).sort((a, b) => b.at.localeCompare(a.at));
    const valid = list.filter(s => !s.voided);
    const sum = valid.reduce((a, s) => a + s.total, 0);
    const [y, m, d] = histDate.split("-").map(Number);
    view.innerHTML = `
      <div class="page-head"><h1>${esc(t("history"))}</h1>
        <label class="search" style="flex:0 1 220px;min-width:180px"><span class="sr">${esc(t("date"))}</span>
          <input class="input" type="date" value="${esc(histDate)}" max="${esc(dayKey(new Date()))}" data-i="hist-date" style="padding-left:12px"></label>
      </div>
      <div class="card">
        <div class="day-head"><span>${esc(fmtDate(new Date(y, m - 1, d)))}</span><span class="num">${esc(t("dayTotal", { n: valid.length, total: rp(sum) }))}</span></div>
        ${list.length ? `<div class="list">${list.map(s => `
          <button class="list-item" type="button" data-a="sale" data-id="${esc(s.id)}">
            <span><span class="li-title${s.voided ? " voided" : ""}"><span class="num">${esc(fmtTime(new Date(s.at)))}</span> · ${esc(s.items.map(l => l.name).slice(0, 2).join(", "))}${s.items.length > 2 ? " +" + (s.items.length - 2) : ""}</span>
              <span class="li-sub">#${esc(s.no)} · ${esc(t(s.method))}${s.voided ? ` · <span class="badge badge-danger">${esc(t("voided"))}</span>` : ""}</span></span>
            <span class="li-right num${s.voided ? " voided" : ""}">${esc(rp(s.total))}</span>
          </button>`).join("")}</div>`
        : `<div class="empty"><b>${esc(t("noSales"))}</b>${esc(t("noSalesSub"))}</div>`}
      </div>`;
  }

  /* ================= View: Reports ================= */
  function periodRange(p) {
    const today = startOfDay(new Date());
    if (p === "today") return [today, addDays(today, 1)];
    if (p === "d30") return [addDays(today, -29), addDays(today, 1)];
    if (p === "month") return [new Date(today.getFullYear(), today.getMonth(), 1), addDays(today, 1)];
    return [addDays(today, -6), addDays(today, 1)];
  }
  function salesIn(from, to) { return activeSales().filter(s => { const d = new Date(s.at); return d >= from && d < to; }); }
  function renderReports() {
    const [from, to] = periodRange(period);
    const list = salesIn(from, to);
    const revenue = list.reduce((a, s) => a + s.total, 0);
    const profit = list.reduce((a, s) => a + saleProfit(s), 0);
    const avg = list.length ? revenue / list.length : 0;

    // chart buckets
    let buckets = [];
    if (period === "today") {
      for (let h = 6; h <= 23; h++) buckets.push({ label: String(h), v: list.filter(s => new Date(s.at).getHours() === h).reduce((a, s) => a + s.total, 0) });
      const early = list.filter(s => new Date(s.at).getHours() < 6).reduce((a, s) => a + s.total, 0);
      if (early) buckets.unshift({ label: "<6", v: early });
    } else {
      for (let d = new Date(from); d < to; d = addDays(d, 1)) {
        const k = dayKey(d);
        buckets.push({ label: String(d.getDate()), v: list.filter(s => dayKey(new Date(s.at)) === k).reduce((a, s) => a + s.total, 0) });
      }
    }
    const max = Math.max(1, ...buckets.map(b => b.v));

    // best sellers
    const byProduct = new Map();
    list.forEach(s => s.items.forEach(l => {
      const k = l.pid || l.name;
      const cur = byProduct.get(k) || { name: l.name, qty: 0, rev: 0 };
      cur.qty += l.qty; cur.rev += l.price * l.qty; byProduct.set(k, cur);
    }));
    const top = [...byProduct.values()].sort((a, b) => b.qty - a.qty).slice(0, 6);
    const topMax = Math.max(1, ...top.map(x => x.qty));

    // methods
    const methods = ["cash", "qris", "transfer"].map(m => {
      const ss = list.filter(s => s.method === m);
      return { m, n: ss.length, v: ss.reduce((a, s) => a + s.total, 0) };
    });

    const periods = ["today", "d7", "d30", "month"];
    view.innerHTML = `
      ${demoBanner()}
      <div class="page-head"><h1>${esc(t("reports"))}</h1>
        <button class="btn btn-sm" type="button" data-a="export" ${list.length ? "" : "disabled"}>⬇ ${esc(t("export"))}</button></div>
      <div class="chips" style="margin-bottom:16px" role="toolbar">${periods.map(p => `<button class="chip" type="button" data-a="period" data-p="${p}" aria-pressed="${p === period}">${esc(t(p))}</button>`).join("")}</div>
      <div class="kpis">
        <div class="card kpi"><span class="label">${esc(t("revenue"))}</span><div class="v num">${esc(rp(revenue))}</div></div>
        <div class="card kpi"><span class="label">${esc(t("trx"))}</span><div class="v num">${list.length}</div></div>
        <div class="card kpi"><span class="label">${esc(t("avg"))}</span><div class="v num">${esc(rp(avg))}</div></div>
        <div class="card kpi"><span class="label">${esc(t("profit"))}</span><div class="v num">${hasCost() ? esc(rp(profit)) : "—"}</div><div class="s">${esc(t("profitHint"))}</div></div>
      </div>
      <div class="card pad" style="margin-bottom:16px">
        <h2 class="section-title">${esc(period === "today" ? t("perHour") : t("perDay"))}</h2>
        <div class="bars" role="img" aria-label="${esc(period === "today" ? t("perHour") : t("perDay"))}">
          ${buckets.map(b => `<div class="bar" title="${esc(b.label)}: ${esc(rp(b.v))}"><i class="${b.v ? "" : "zero"}" style="height:${Math.max(2, Math.round(b.v / max * 100))}%"></i><span>${esc(buckets.length > 16 && Number(b.label) % 3 !== 1 && period !== "today" ? "" : b.label)}</span></div>`).join("")}
        </div>
      </div>
      <div class="two">
        <div class="card pad">
          <h2 class="section-title">${esc(t("top"))}</h2>
          ${top.length ? `<div class="rank">${top.map((x, i) => `
            <div class="rank-row"><span class="n">${i + 1}</span>
              <div><div style="font-weight:600">${esc(x.name)}</div><div class="meter"><i style="width:${Math.round(x.qty / topMax * 100)}%"></i></div></div>
              <div style="text-align:right"><div class="num" style="font-weight:700">${esc(rp(x.rev))}</div><div class="li-sub num">${esc(t("sold", { n: x.qty }))}</div></div></div>`).join("")}</div>`
          : `<div class="empty">${esc(t("noSales"))}</div>`}
        </div>
        <div class="card pad">
          <h2 class="section-title">${esc(t("byMethod"))}</h2>
          <div class="rank">${methods.map(x => `
            <div class="rank-row" style="grid-template-columns:1fr auto"><div><div style="font-weight:600">${esc(t(x.m))}</div><div class="meter"><i style="width:${revenue ? Math.round(x.v / revenue * 100) : 0}%"></i></div></div>
              <div style="text-align:right"><div class="num" style="font-weight:700">${esc(rp(x.v))}</div><div class="li-sub num">${esc(t("dayTotal", { n: x.n, total: (revenue ? Math.round(x.v / revenue * 100) : 0) + "%" }))}</div></div></div>`).join("")}</div>
        </div>
      </div>`;
  }
  function exportCSV() {
    const [from, to] = periodRange(period);
    const list = salesIn(from, to);
    const q = v => `"${String(v == null ? "" : v).replace(/"/g, '""')}"`;
    const rows = [["no", "date", "time", "product", "qty", "price", "cost", "line_total", "discount", "sale_total", "method", "note"]];
    list.forEach(s => {
      const d = new Date(s.at);
      s.items.forEach((l, i) => rows.push([s.no, dayKey(d), fmtTime(d), l.name, l.qty, l.price, l.cost || 0, l.price * l.qty, i === 0 ? s.discount || 0 : 0, i === 0 ? s.total : "", s.method, i === 0 ? s.note || "" : ""]));
    });
    download(`penjualan-${dayKey(from)}_${dayKey(addDays(to, -1))}.csv`, "﻿" + rows.map(r => r.map(q).join(",")).join("\r\n"), "text/csv");
  }
  function download(name, text, type) {
    const blob = new Blob([text], { type: type + ";charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob); a.download = name;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  }

  /* ================= View: Products ================= */
  function renderProducts() {
    const q = prodQuery.trim().toLowerCase();
    const list = db.products.filter(p => !q || (p.name + " " + (p.cat || "")).toLowerCase().includes(q));
    view.innerHTML = `
      ${demoBanner()}
      <div class="page-head"><h1>${esc(t("products"))} <span class="muted num" style="font-weight:500;font-size:16px">(${db.products.length})</span></h1>
        <button class="btn btn-primary" type="button" data-a="prod-new">+ ${esc(t("addProduct"))}</button></div>
      <label class="search" style="display:block;margin-bottom:14px">${ICON_SEARCH}<span class="sr">${esc(t("search"))}</span>
        <input class="input" type="search" placeholder="${esc(t("search"))}" value="${esc(prodQuery)}" data-i="prod-search" autocomplete="off"></label>
      <div class="card">
        ${list.length ? `<div class="list">${list.map(p => {
          const stock = p.stock == null ? "" : p.stock <= 0 ? `<span class="badge badge-danger">${esc(t("out"))}</span>`
            : p.stock <= 5 ? `<span class="badge badge-warn">${esc(t("stock", { n: p.stock }))}</span>` : `<span class="badge">${esc(t("stock", { n: p.stock }))}</span>`;
          return `<button class="list-item" type="button" data-a="prod-edit" data-id="${esc(p.id)}">
            <span><span class="li-title"><span aria-hidden="true" style="font-size:20px">${esc(p.emoji || "📦")}</span>${esc(p.name)} ${stock}</span>
              <span class="li-sub">${esc(p.cat || "—")}${p.cost ? ` · ${esc(t("cost").split(" (")[0])} ${esc(rp(p.cost))}` : ""}</span></span>
            <span class="li-right num">${esc(rp(p.price))}</span></button>`;
        }).join("")}</div>`
        : `<div class="empty"><b>${esc(t("noProducts"))}</b>${esc(t("noProductsSub"))}</div>`}
      </div>`;
  }
  const EMOJIS = ["☕", "🧋", "🍵", "🥤", "🍜", "🍛", "🍚", "🍗", "🍞", "🍰", "🍟", "🍪", "🥟", "🍢", "🧁", "🍦", "🍳", "🥗", "🧺", "👕", "👟", "💄", "🧴", "📦", "🖨️", "✂️", "🔧", "📱"];
  function openProduct(p) {
    const isNew = !p;
    const d = p || { emoji: "📦", name: "", cat: "", price: 0, cost: 0, stock: null };
    let emoji = d.emoji || "📦";
    const cats = [...new Set(db.products.map(x => x.cat).filter(Boolean))];
    openModal(`
      <div class="m-head"><h2 id="modal-title">${esc(isNew ? t("addProduct") : t("editProduct"))}</h2><button class="x-btn" type="button" data-close aria-label="${esc(t("close"))}">✕</button></div>
      <form class="m-body" id="prod-form" autocomplete="off">
        <div class="field"><span class="label">${esc(t("emoji"))}</span>
          <div class="chips" id="emoji-row" style="flex-wrap:wrap">${EMOJIS.map(e => `<button class="chip" type="button" data-m="emoji" data-e="${e}" aria-pressed="${e === emoji}" style="font-size:18px;padding:0 10px">${e}</button>`).join("")}</div></div>
        <div class="field"><label for="f-name">${esc(t("name"))} *</label><input class="input" id="f-name" maxlength="60" value="${esc(d.name)}" required autofocus></div>
        <div class="field"><label for="f-cat">${esc(t("category"))}</label><input class="input" id="f-cat" maxlength="30" value="${esc(d.cat)}" list="cat-list"><datalist id="cat-list">${cats.map(c => `<option value="${esc(c)}">`).join("")}</datalist></div>
        <div class="row">
          <div class="field"><label for="f-price">${esc(t("price"))} *</label><input class="input num" id="f-price" inputmode="numeric" value="${d.price ? esc(nf.format(d.price)) : ""}" placeholder="0" data-money></div>
          <div class="field"><label for="f-cost">${esc(t("cost"))}</label><input class="input num" id="f-cost" inputmode="numeric" value="${d.cost ? esc(nf.format(d.cost)) : ""}" placeholder="0" data-money><span class="hint">${esc(t("costHint"))}</span></div>
        </div>
        <div class="field"><label style="display:flex;align-items:center;gap:10px;color:var(--text);font-size:15px"><input type="checkbox" id="f-track" ${d.stock != null ? "checked" : ""} style="width:20px;height:20px"> ${esc(t("trackStock"))}</label></div>
        <div class="field" id="stock-field" ${d.stock != null ? "" : "hidden"}><label for="f-stock">${esc(t("stockQty"))}</label><input class="input num" id="f-stock" inputmode="numeric" value="${d.stock != null ? esc(d.stock) : ""}" placeholder="0"></div>
      </form>
      <div class="m-foot">
        ${isNew ? "" : `<button class="btn btn-danger" type="button" data-m="delete" style="margin-right:auto">${esc(t("deleteProduct"))}</button>`}
        <button class="btn" type="button" data-close>${esc(t("cancel"))}</button>
        <button class="btn btn-primary" type="submit" form="prod-form">${esc(t("save"))}</button>
      </div>`, {
      emoji: el => { emoji = el.dataset.e; modal.querySelectorAll("[data-m=emoji]").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.e === emoji))); },
      input: el => { if (el.hasAttribute("data-money")) { const v = toInt(el.value); el.value = v ? nf.format(v) : ""; } },
      change: el => { if (el.id === "f-track") $("#stock-field").hidden = !el.checked; },
      delete: async () => {
        const yes = await confirmBox(t("deleteQ", { name: d.name }), t("deleteProduct"), true);
        if (!yes) return;
        db.products = db.products.filter(x => x.id !== p.id); cart.delete(p.id);
        save(); toast(t("deleted")); route();
      },
      submit: () => {
        const name = $("#f-name").value.trim(), price = toInt($("#f-price").value);
        if (!name || !price) { toast(t("required")); return; }
        const data = { emoji, name, cat: $("#f-cat").value.trim(), price, cost: toInt($("#f-cost").value), stock: $("#f-track").checked ? toInt($("#f-stock").value) : null };
        if (isNew) db.products.push(Object.assign({ id: uid() }, data)); else Object.assign(p, data);
        save(); closeModal(); toast(t("saved")); route();
      }
    });
  }

  /* ================= View: Settings ================= */
  function renderSettings() {
    const s = db.settings;
    view.innerHTML = `
      <div class="page-head"><h1>${esc(t("settings"))}</h1></div>
      <div class="settings">
        <form class="card pad" id="store-form" autocomplete="off">
          <h2>${esc(t("store"))}</h2>
          <div class="field"><label for="s-name">${esc(t("storeName"))}</label><input class="input" id="s-name" maxlength="40" value="${esc(s.storeName)}"></div>
          <div class="field"><label for="s-addr">${esc(t("address"))}</label><input class="input" id="s-addr" maxlength="80" value="${esc(s.address)}"></div>
          <div class="field"><label for="s-phone">${esc(t("phone"))}</label><input class="input" id="s-phone" maxlength="30" value="${esc(s.phone)}"></div>
          <div class="field"><label for="s-foot">${esc(t("footer"))}</label><input class="input" id="s-foot" maxlength="80" value="${esc(s.footer)}"></div>
          <button class="btn btn-primary" type="submit">${esc(t("save"))}</button>
        </form>
        <div class="card pad">
          <h2>${esc(t("data"))}</h2>
          <p class="muted" style="margin-top:-6px">${esc(t("dataHint"))}</p>
          <div class="btn-row">
            <button class="btn" type="button" data-a="backup">⬇ ${esc(t("backup"))}</button>
            <label class="btn" style="cursor:pointer">⬆ ${esc(t("restore"))}<input type="file" accept="application/json,.json" data-i="restore" hidden></label>
          </div>
          <div class="btn-row" style="margin-top:10px">
            <button class="btn" type="button" data-a="demo">${esc(t("loadDemo"))}</button>
            <button class="btn btn-danger" type="button" data-a="reset">${esc(t("resetAll"))}</button>
          </div>
        </div>
        <div class="card pad">
          <h2>${esc(t("about"))}</h2>
          <p class="muted" style="margin:0 0 8px">${esc(t("aboutText"))}</p>
          <p class="muted" style="margin:0">${esc(t("install"))}</p>
        </div>
      </div>`;
  }

  /* ================= Event delegation for views ================= */
  view.addEventListener("click", async e => {
    const a = e.target.closest("[data-a]"); if (!a) return;
    const act = a.dataset.a;
    if (act === "add") addToCart(a.dataset.id, 1);
    else if (act === "inc") addToCart(a.dataset.id, 1);
    else if (act === "dec") addToCart(a.dataset.id, -1);
    else if (act === "cat") { posCat = a.dataset.cat; view.querySelectorAll("[data-a=cat]").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.cat === posCat))); renderPosGrid(); }
    else if (act === "clear") { cart.clear(); discount = { type: "rp", value: 0 }; renderPosGrid(); renderPosCart(); }
    else if (act === "discount") openDiscount();
    else if (act === "pay") openPay();
    else if (act === "cart-open") { cartOpen = true; renderPosCart(); }
    else if (act === "cart-close") { cartOpen = false; renderPosCart(); }
    else if (act === "sale") { const s = db.sales.find(x => x.id === a.dataset.id); if (s) showReceipt(s, false); }
    else if (act === "period") { period = a.dataset.p; renderReports(); }
    else if (act === "export") exportCSV();
    else if (act === "prod-new") openProduct(null);
    else if (act === "prod-edit") openProduct(productById(a.dataset.id));
    else if (act === "backup") download(`kasir-backup-${dayKey(new Date())}.json`, JSON.stringify(db, null, 1), "application/json");
    else if (act === "demo") { if (await confirmBox(t("loadDemoQ"), t("loadDemo"))) { const lang = db.settings.lang; db = demoData(); db.settings.lang = lang; cart.clear(); save(); chrome(); route(); } }
    else if (act === "reset") { if (await confirmBox(t("resetQ"), t("resetAll"), true)) { db = emptyData({ lang: db.settings.lang }); cart.clear(); save(); chrome(); route(); } }
    else if (act === "fresh") {
      if (await confirmBox(t("freshQ"), t("startFresh"))) {
        const s = db.settings;
        db = emptyData({ lang: s.lang, storeName: "Toko Saya" });
        cart.clear(); save(); chrome(); location.hash = "#atur"; route();
      }
    }
  });
  view.addEventListener("input", e => {
    const i = e.target.dataset.i;
    if (i === "pos-search") { posQuery = e.target.value; renderPosGrid(); }
    else if (i === "prod-search") {
      prodQuery = e.target.value;
      const pos = e.target.selectionStart;
      renderProducts();
      const el = view.querySelector("[data-i=prod-search]"); el.focus(); try { el.setSelectionRange(pos, pos); } catch (x) { /* ignore */ }
    }
  });
  view.addEventListener("change", async e => {
    const i = e.target.dataset.i;
    if (i === "hist-date" && e.target.value) { histDate = e.target.value; renderHistory(); }
    else if (i === "restore" && e.target.files[0]) {
      const file = e.target.files[0]; e.target.value = "";
      try {
        const d = JSON.parse(await file.text());
        if (!valid(d)) throw new Error("invalid");
        if (await confirmBox(t("restoreQ"), t("restore"))) { db = d; cart.clear(); save(); chrome(); route(); toast(t("restored")); }
      } catch (x) { toast(t("badFile")); }
    }
  });
  view.addEventListener("submit", e => {
    if (e.target.id !== "store-form") return;
    e.preventDefault();
    Object.assign(db.settings, {
      storeName: $("#s-name").value.trim() || "Toko Saya", address: $("#s-addr").value.trim(),
      phone: $("#s-phone").value.trim(), footer: $("#s-foot").value.trim()
    });
    save(); chrome(); toast(t("saved"));
  });
  // "/" focuses product search on the checkout screen
  document.addEventListener("keydown", e => {
    if (e.key !== "/" || !modalRoot.hidden || /input|textarea|select/i.test(document.activeElement.tagName)) return;
    const s = view.querySelector("[data-i=pos-search], [data-i=prod-search]");
    if (s) { e.preventDefault(); s.focus(); }
  });

  /* ================= Start ================= */
  chrome(); netState(); route();
  if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost" || location.hostname === "127.0.0.1")) {
    window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
  }
})();
