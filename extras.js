/* extras.js — Arabic version (EN/AR), custom cursor, card→cover page transition */
(function(){
'use strict';
var doc=document, root=doc.documentElement;
var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Arabic font ---------- */
var f=doc.createElement('link');f.rel='stylesheet';
f.href='https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800&display=swap';
doc.head.appendChild(f);

/* ---------- 1) LANGUAGE ---------- */
var AR={
'Mostafa':'مصطفى','Mostafa Hussin':'مصطفى حسين','Mostafa Mohamed Hussin':'مصطفى محمد حسين',
'Home':'الرئيسية','Work':'أعمالي','About Me':'من أنا','Contact':'تواصل معي','Projects':'المشاريع','Pages':'الصفحات',
'Get In Touch':'تواصل معي',
'Hello, I\'m':'أهلاً، أنا','Hello':'مرحباً','Graphic Designer':'مصمم جرافيك',
'Campaigns, key visuals and social media designs that connect brands with their audiences.':'حملات وهويات بصرية وتصاميم سوشيال ميديا تربط البراندات بجمهورها.',
'View My Work':'شاهد أعمالي','Let\'s Talk':'لنتحدث',
'Brands I\'ve worked with':'براندات عملت معها',
'Years of Experience':'سنوات الخبرة','Brands':'براندات','Designs Delivered':'تصميم تم تسليمه','Adobe Tools':'برامج أدوبي',
'Years of':'سنوات','experience':'خبرة',
'Hi, I\'m Mostafa — I turn brand ideas into designs people notice.':'أهلاً، أنا مصطفى — أحوّل أفكار البراندات إلى تصاميم تلفت الانتباه.',
'Graphic Designer creating campaigns, key visuals and social media content for brands in education, healthy food and automotive protection, working with teams in Egypt and KSA.':'مصمم جرافيك أعمل على حملات وهويات بصرية ومحتوى سوشيال ميديا لبراندات في التعليم والأكل الصحي وحماية السيارات، مع فرق في مصر والسعودية.',
'Graphic Designer creating campaigns, key visuals and social media designs that connect brands with their audiences.':'مصمم جرافيك أصنع حملات وهويات بصرية وتصاميم سوشيال ميديا تربط البراندات بجمهورها.',
'Photoshop':'Photoshop','AI Tools':'أدوات الذكاء الاصطناعي','More About Me':'المزيد عني',
'Selected Work':'أعمال مختارة','Brands I\'ve created for':'براندات صممت لها',
'Every brand has its own world — from healthy food to car protection to online education.':'لكل براند عالمه الخاص — من الأكل الصحي إلى حماية السيارات والتعليم.',
'Roya':'رؤية','Nutrify':'نيوترفاي','Nawader El-Forsan':'نوادر الفرسان','Infinity Bright':'إنفينيتي برايت','Bebright':'بي برايت','Mawj':'موج',
'Training & Education':'التدريب والتعليم','Healthy Food':'أكل صحي','Home & Surface Protection':'حماية المنازل والأسطح','Automotive Protection':'حماية السيارات','Digital Marketing':'التسويق الرقمي','Advertising Agency':'وكالة إعلانات',
'Course ads, educational posts and event campaigns for a training & development center.':'إعلانات دورات ومنشورات تعليمية وحملات فعاليات لمركز تدريب وتطوير.',
'Fresh, vibrant social content for a healthy restaurant & meal-subscription brand.':'محتوى سوشيال ميديا منعش وحيوي لمطعم صحي وخدمة اشتراكات الوجبات.',
'3M thermal insulation & protection films — designs for buildings and interiors.':'أفلام 3M للعزل الحراري والحماية — تصاميم للمباني والأماكن الداخلية.',
'3M thermal insulation & protection films — designs for buildings, interiors and cars.':'أفلام 3M للعزل الحراري والحماية — تصاميم للمباني والأماكن الداخلية والسيارات.',
'PPF, ceramic coating & thermal film campaigns with a premium automotive look.':'حملات PPF والسيراميك والأفلام الحرارية بطابع سيارات فاخر.',
'Educational carousels and service posts for a digital marketing agency.':'منشورات تعليمية وتصاميم خدمات لوكالة تسويق رقمي.',
'Social media designs and website banners for an advertising agency.':'تصاميم سوشيال ميديا وبانرات مواقع لوكالة إعلانات.',
'Social Media Designs':'تصاميم السوشيال ميديا','Website Banners':'بانرات الموقع',
'I\'m Mostafa Mohamed Hussin':'أنا مصطفى محمد حسين',
'Graphic Designer with 2 years of experience delivering creative solutions across freelance projects and in-house teams. Passionate about building visually engaging campaigns, key visuals, and social media content that connect brands with their audiences.':'مصمم جرافيك بخبرة سنتين في تقديم حلول إبداعية عبر مشاريع حرة وفرق داخلية. شغوف ببناء حملات وهويات بصرية ومحتوى سوشيال ميديا جذاب يربط البراندات بجمهورها.',
'Experienced in working with educational institutions, a healthy food brand, and automotive protection companies, translating marketing objectives into strong visual identities and impactful digital experiences. Proficient in Photoshop, Illustrator, InDesign, AI-powered design tools, and Blender fundamentals.':'عملت مع مؤسسات تعليمية وبراند أكل صحي وشركات حماية سيارات، وأحوّل الأهداف التسويقية إلى هويات بصرية قوية وتجارب رقمية مؤثرة. أتقن Photoshop وIllustrator وInDesign وأدوات التصميم بالذكاء الاصطناعي وأساسيات Blender.',
'Education':'التعليم','Experience':'الخبرة','Software':'البرامج',
'September 2016 – May 2020':'سبتمبر 2016 – مايو 2020','Taiba Academy for Administrative Sciences':'أكاديمية طيبة للعلوم الإدارية','Major: Marketing & E-Commerce':'التخصص: التسويق والتجارة الإلكترونية',
'Blender (Fundamentals)':'Blender (أساسيات)',
'MID LEVEL GRAPHIC DESIGNER':'مصمم جرافيك (مستوى متوسط)','JUNIOR GRAPHIC DESIGNER':'مصمم جرافيك مبتدئ',
'Let\'s create something great':'لنصنع شيئاً رائعاً معاً',
'Have a project or an idea? Reach out on any of the channels below.':'عندك مشروع أو فكرة؟ تواصل معي عبر أي من القنوات التالية.',
'WhatsApp':'واتساب','Facebook':'فيسبوك','Instagram':'إنستجرام','Email':'البريد الإلكتروني',
'Chat Now':'ابدأ المحادثة','Visit Profile':'زيارة الصفحة','Follow Me':'تابعني','Send Email':'أرسل رسالة',
'💬 Start a WhatsApp conversation':'💬 ابدأ محادثة على واتساب',
'© 2026 Mostafa Mohamed Hussin — Graphic Designer. All rights reserved.':'© 2026 مصطفى محمد حسين — مصمم جرافيك. جميع الحقوق محفوظة.',
'← All Projects':'→ كل المشاريع','View project →':'عرض المشروع ←'
};
var CO={'Infinity Bright':1,'Nawader Elforsan':'نوادر الفرسان','Bebright':1,'Nutrify KSA':'نيوترفاي السعودية','Roaya Training & Development':'رؤية للتدريب والتطوير','Alrawda for Publishing':'الروضة للنشر'};
function tr(s){
  if(Object.prototype.hasOwnProperty.call(AR,s))return AR[s];
  var m;
  if((m=s.match(/^(\d+) designs$/)))return m[1]+' تصميم';
  if((m=s.match(/^(\d{4}) – Present$/)))return m[1]+' – الآن';
  if((m=s.match(/^(.+) — (KSA|Egypt) \((Remote|On-site)\)$/))&&CO[m[1]]!==undefined){
    var n=CO[m[1]]===1?AR[m[1]]:CO[m[1]];
    return n+' — '+(m[2]==='KSA'?'السعودية':'مصر')+' ('+(m[3]==='Remote'?'عن بُعد':'حضوري')+')';
  }
  if((m=s.match(/^← (.+)$/))&&AR[m[1]])return '→ '+AR[m[1]];
  if((m=s.match(/^(.+) →$/))&&AR[m[1]])return AR[m[1]]+' ←';
  return null;
}
var entries=[];
(function collect(){
  var w=doc.createTreeWalker(doc.body,NodeFilter.SHOW_TEXT,null),n;
  while((n=w.nextNode())){
    var p=n.parentNode&&n.parentNode.nodeName;
    if(p==='SCRIPT'||p==='STYLE')continue;
    var key=n.nodeValue.replace(/\s+/g,' ').trim();
    if(!key)continue;
    var t=tr(key);
    if(t!==null)entries.push({n:n,o:n.nodeValue,t:t});
  }
})();
var origTitle=doc.title;
function titleAR(){
  return origTitle.split(' — ').map(function(p){return AR[p]||p}).join(' — ');
}
var lang='en';
var btn=doc.createElement('button');btn.type='button';btn.className='lang';
function setLang(l,save){
  lang=l;
  entries.forEach(function(e){
    if(l==='ar'){
      var lead=e.o.match(/^\s*/)[0],trail=e.o.match(/\s*$/)[0];
      e.n.nodeValue=lead+e.t+trail;
    }else e.n.nodeValue=e.o;
  });
  root.lang=l;root.dir=l==='ar'?'rtl':'ltr';
  doc.title=l==='ar'?titleAR():origTitle;
  btn.textContent=l==='ar'?'EN':'عربي';
  btn.setAttribute('aria-label',l==='ar'?'Switch to English':'التبديل إلى العربية');
  if(label)label.textContent=l==='ar'?'عرض':'View';
  if(save){try{localStorage.setItem('lang',l)}catch(e){}}
}
btn.addEventListener('click',function(){setLang(lang==='ar'?'en':'ar',true)});
var ul=doc.querySelector('.nav .links');
if(ul){var li=doc.createElement('li');li.appendChild(btn);ul.appendChild(li)}

/* ---------- 2) CUSTOM CURSOR ---------- */
var label=null;
if(window.matchMedia&&matchMedia('(hover: hover) and (pointer: fine)').matches&&!reduce){
  root.classList.add('has-cur');
  var dot=doc.createElement('div');dot.className='cur-dot';
  var ring=doc.createElement('div');ring.className='cur-ring';
  label=doc.createElement('span');label.textContent='View';ring.appendChild(label);
  doc.body.appendChild(ring);doc.body.appendChild(dot);
  var tx=-100,ty=-100,rx=-100,ry=-100,shown=false;
  addEventListener('mousemove',function(e){
    tx=e.clientX;ty=e.clientY;
    if(!shown){shown=true;rx=tx;ry=ty;root.classList.add('cur-on')}
    dot.style.transform='translate('+tx+'px,'+ty+'px) translate(-50%,-50%)';
    var t=e.target.closest?e.target:null;
    var view=t&&t.closest('.brand,.gallery img,.at-photo img');
    var link=!view&&t&&t.closest('a,button,.skill,.c-card');
    ring.classList.toggle('view',!!view);root.classList.toggle('cur-view',!!view);
    ring.classList.toggle('link',!!link);
  },{passive:true});
  doc.addEventListener('mouseleave',function(){root.classList.remove('cur-on');shown=false});
  addEventListener('mousedown',function(){ring.classList.add('down')});
  addEventListener('mouseup',function(){ring.classList.remove('down')});
  (function loop(){
    rx+=(tx-rx)*.18;ry+=(ty-ry)*.18;
    ring.style.transform='translate('+rx+'px,'+ry+'px) translate(-50%,-50%)';
    requestAnimationFrame(loop);
  })();
}

/* ---------- 3) CARD → COVER TRANSITION ---------- */
var OV='linear-gradient(rgba(7,7,10,.62),rgba(7,7,10,.62))';
function leaving(card,href,key){
  var r=card.getBoundingClientRect();
  var x=doc.createElement('div');x.className='xfade';
  x.style.cssText='top:'+r.top+'px;left:'+r.left+'px;width:'+r.width+'px;height:'+r.height+'px;border-radius:18px;background-image:url(img/brands/'+key+'.jpg)';
  var o=doc.createElement('div');o.className='xo';x.appendChild(o);
  doc.body.appendChild(x);
  void x.offsetWidth;
  x.style.top='0px';x.style.left='0px';x.style.width='100vw';x.style.height='100vh';x.style.borderRadius='0px';
  o.style.opacity='1';
  setTimeout(function(){location.href=href+(href.indexOf('#')<0?'#x':'')},620);
}
doc.addEventListener('click',function(e){
  var a=e.target.closest&&e.target.closest('a.brand');
  if(!a||reduce||e.metaKey||e.ctrlKey||e.shiftKey||e.button!==0)return;
  var href=a.getAttribute('href');if(!href||!/\.html$/.test(href))return;
  e.preventDefault();
  leaving(a,href,href.replace('.html',''));
});
function arriving(){
  var cover=doc.querySelector('.cover');
  if(location.hash!=='#x'||!cover||reduce){root.classList.remove('xt');return}
  try{history.replaceState(null,'',location.pathname+location.search)}catch(e){}
  var key=cover.getAttribute('data-cover');
  var x=doc.createElement('div');x.className='xfade arriving';
  x.style.cssText='top:0;left:0;width:100vw;height:100vh;border-radius:0;background-image:url(img/brands/'+key+'.jpg);transition:none';
  var o=doc.createElement('div');o.className='xo';o.style.opacity='1';x.appendChild(o);
  root.appendChild(x);
  cover.classList.add('pre');
  var img=new Image();
  var go=function(){
    var r=cover.getBoundingClientRect();
    void x.offsetWidth;
    x.style.transition='';
    requestAnimationFrame(function(){
      x.style.top=r.top+'px';x.style.left=r.left+'px';x.style.width=r.width+'px';x.style.height=r.height+'px';
      root.classList.remove('xt');
      setTimeout(function(){
        cover.classList.remove('pre');
        x.style.opacity='0';
        setTimeout(function(){x.remove()},350);
      },640);
    });
  };
  img.onload=img.onerror=go;img.src='img/brands/'+key+'.jpg';
}
addEventListener('pageshow',function(e){
  if(e.persisted)doc.querySelectorAll('.xfade').forEach(function(n){n.remove()});
});
arriving();

/* ---------- init language ---------- */
var saved=null;
try{saved=localStorage.getItem('lang')}catch(e){}
var q=(location.search.match(/[?&]lang=(ar|en)/)||[])[1];
setLang(q||saved||'en',!!q);
})();
