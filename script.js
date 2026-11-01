document.addEventListener('DOMContentLoaded', () => {
  const calendly = 'https://calendly.com/racoral-cfo/30min';
  document.querySelectorAll('.service-card a').forEach(link => { link.href = calendly; link.target = '_blank'; link.rel = 'noopener'; });

  const seal = document.querySelector('.gold-seal');
  if (seal) { seal.innerHTML = '<img src="assets/beyond-the-books-logo.jpg" alt="Beyond the Books logo">'; seal.style.transform = 'none'; }

  const ticker = document.querySelector('.marquee div');
  if (ticker) ticker.innerHTML = '🧾 BOOKKEEPING <span>✦</span> <strong class="inventory-symbol">🛍️</strong> RETAIL INVENTORY <span>✦</span> 📊 MONTHLY REPORTING <span>✦</span> 💵 CASH FLOW <span>✦</span> <strong class="payroll-symbol">$</strong> PAYROLL <span>✦</span> 🧾 BOOKKEEPING <span>✦</span> <strong class="inventory-symbol">🛍️</strong> RETAIL INVENTORY <span>✦</span> 📊 MONTHLY REPORTING <span>✦</span> 💵 CASH FLOW <span>✦</span> <strong class="payroll-symbol">$</strong> PAYROLL <span>✦</span>';
  const coverage = document.querySelector('.trust-row span:nth-child(2)');
  if (coverage) { coverage.innerHTML = '<b>US · UK · AU · CA</b> remote-ready'; coverage.style.textAlign = 'center'; }
  const accent = document.createElement('style'); accent.textContent = '.payroll-symbol,.inventory-symbol{color:#fff36a;font-weight:800}'; document.head.appendChild(accent);

  const about = document.querySelector('.about-strip');
  const credentials = document.querySelector('.credentials');
  if (about && credentials) about.insertAdjacentElement('afterend', credentials);

  if (credentials) {
    credentials.innerHTML = '<div class="section-intro"><p class="eyebrow"><span></span> Certified in the tools you use</p><h2>Confidence in every<br><em>close.</em></h2><p>Recognized training in the platforms that keep your books moving.</p></div><div class="credential-gallery"><div><img src="assets/bookkeeping-certification.png" alt="Intuit Bookkeeping Certification"><strong>Intuit Bookkeeping Certification</strong><span>Issued September 26, 2026</span></div><div><img src="assets/quickbooks-certification.png" alt="QuickBooks Certification Level 1"><strong>QuickBooks Certification Level 1</strong><span>Issued August 24, 2026</span></div><div><img src="assets/xero-certification.jpg" alt="Xero L1 Certified Associate"><strong>Xero L1 Certified Associate</strong><span>Completed August 24, 2026</span></div></div>';
    const style = document.createElement('style'); style.textContent = '.credential-gallery{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}.credential-gallery>div{background:#fff;border:1px solid #dfe3e7;padding:14px;box-shadow:0 10px 24px #071b3d0d}.credential-gallery img{display:block;width:100%;height:190px;object-fit:contain;background:#f7f3eb}.credential-gallery strong,.credential-gallery span{display:block}.credential-gallery strong{font:700 13px Montserrat;color:#071b3d;margin-top:12px}.credential-gallery span{font:10px Poppins;color:#6c7480;margin-top:4px}@media(max-width:850px){.credential-gallery{grid-template-columns:1fr}}'; document.head.appendChild(style);
  }

  const chart = document.querySelector('.annual-chart');
  if (chart) chart.innerHTML = '<div class="dashboard-kpis"><div><small>GROSS SALES</small><b>$2.34M</b><em>all stores combined</em></div><div><small>TOTAL NET SALES</small><b>$702K</b><em>after payouts</em></div><div><small>TOTAL PAYOUTS</small><b>$749K</b><em>staff, barber, consignor</em></div></div><div class="dashboard-grid"><div class="dash-panel trend-panel"><div class="dash-panel-head"><b>Monthly revenue trend</b><span>USD</span></div><svg viewBox="0 0 600 220" role="img" aria-label="Monthly revenue and operating cost trend"><g class="grid"><line x1="35" y1="30" x2="575" y2="30"/><line x1="35" y1="80" x2="575" y2="80"/><line x1="35" y1="130" x2="575" y2="130"/><line x1="35" y1="180" x2="575" y2="180"/></g><polyline class="revenue-line" points="35,165 84,160 133,151 182,133 231,126 280,139 329,105 378,35 427,151 476,103 525,72 575,53"/><polyline class="cost-line" points="35,177 84,170 133,166 182,153 231,146 280,137 329,126 378,94 427,112 476,96 525,84 575,76"/><g class="months"><text x="35" y="207">JAN</text><text x="133" y="207">MAR</text><text x="231" y="207">MAY</text><text x="329" y="207">JUL</text><text x="427" y="207">SEP</text><text x="525" y="207">NOV</text></g></svg><div class="dash-legend"><span><i class="legend-blue"></i>Revenue</span><span><i class="legend-gold"></i>Operating costs</span></div></div><div class="dash-panel mix-panel"><div class="dash-panel-head"><b>Business mix</b><span>annual</span></div><div class="mix-row"><span><i class="mix-service"></i>Retail net</span><b>$531.0K</b></div><div class="mix-row"><span><i class="mix-retail"></i>Barber net</span><b>$117.6K</b></div><div class="mix-row"><span><i class="mix-service"></i>Consignor net</span><b>$38.6K</b></div><div class="dash-insight">Retail and barber margins are shown separately to support pricing, inventory, and payout decisions.</div></div></div><div class="dashboard-detail"><div><small>RETAIL MARGIN</small><b>37.5%</b><span>illustrative</span></div><div><small>BARBER MARGIN</small><b>30.0%</b><span>illustrative</span></div><div><small>CHANNELS</small><b>4</b><span>Shopify, Vagaro, Ricochet, Square</span></div><div><small>PAYROLL + PAYOUTS</small><b>$749K</b><span>reviewed activity</span></div></div>';

  const nav = document.querySelector('.nav');
  const cta = document.querySelector('.nav-cta');
  if (nav && cta && !nav.querySelector('.credentials-link')) { const link = document.createElement('a'); link.className = 'credentials-link'; link.href = '#credentials'; link.textContent = 'Credentials'; nav.insertBefore(link, cta); }

  const metrics = document.querySelector('#proof .case-metrics');
  if (metrics) metrics.innerHTML = '<div><b>$2.34M</b><span>gross sales reviewed</span></div><div><b>$702K</b><span>total net sales</span></div><div><b>37% / 30%</b><span>retail / barber margins</span></div>';
  const kpis = document.querySelector('.dashboard-kpis');
  if (kpis) kpis.innerHTML = '<div><small>GROSS SALES</small><b>$2.34M</b><em>all stores combined</em></div><div><small>TOTAL NET SALES</small><b>$702K</b><em>after payouts and adjustments</em></div><div><small>TOTAL PAYOUTS</small><b>$749K</b><em>staff, barber, consignor</em></div>';
  const detail = document.querySelector('.dashboard-detail');
  if (detail) detail.innerHTML = '<div><small>RETAIL NET</small><b>$531.0K</b><span>37.5% illustrative margin</span></div><div><small>BARBER NET</small><b>$117.6K</b><span>30.0% illustrative margin</span></div><div><small>CONSIGNOR NET</small><b>$38.6K</b><span>retail partner activity</span></div><div><small>CHANNELS REVIEWED</small><b>4</b><span>Shopify, Vagaro, Ricochet, Square</span></div>';
});
