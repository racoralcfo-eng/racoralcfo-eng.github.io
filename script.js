const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menu?.addEventListener('click', () => { nav.style.display = nav.style.display === 'flex' ? '' : 'flex'; nav.style.position='absolute'; nav.style.top='76px'; nav.style.right='20px'; nav.style.background='#fff'; nav.style.padding='18px'; nav.style.flexDirection='column'; nav.style.alignItems='stretch'; nav.style.boxShadow='0 15px 30px #071b3d22'; });
document.querySelectorAll('a[href*="calendly.com/racoral-cfo/"]').forEach(link => { link.href = 'https://calendly.com/racoral-cfo/30min'; });
document.querySelectorAll('.fine-print').forEach(el => { el.textContent = 'Representative client engagement. Details have been anonymized and select figures adjusted to protect client confidentiality. Prepared for management reporting and decision support; not audited or intended for external financial reporting.'; });
