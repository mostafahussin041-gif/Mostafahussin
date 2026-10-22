// nav scroll + mobile menu
const nav=document.querySelector('.nav');
addEventListener('scroll',()=>nav.classList.toggle('solid',scrollY>40));
document.querySelector('.burger')?.addEventListener('click',()=>document.querySelector('.links').classList.toggle('open'));

// hero collage: img/hero/h01.jpg ... h19.jpg — columns scroll up / down alternately
const collage=document.getElementById('collage');
if(collage){
  const N=19,COLS=6,PER=5;
  const order=Array.from({length:N},(_,i)=>i+1);
  for(let c=0;c<COLS;c++){
    const col=document.createElement('div');col.className='ccol'+(c%2?' dn':'');
    const tr=document.createElement('div');tr.className='ctrack';
    tr.style.animationDuration=(58+c*7)+'s';
    const set=[];for(let k=0;k<PER;k++)set.push(order[(c*3+k*4)%N]);
    [...set,...set].forEach(n=>{const im=new Image();im.className='ctile';im.alt='';im.decoding='async';
      im.src='img/hero/h'+String(n).padStart(2,'0')+'.jpg';tr.appendChild(im)});
    col.appendChild(tr);collage.appendChild(col);
  }
}

// partner logos marquee: img/logos/<file>
const logos=[['Roya','roya.png','رؤية'],['Nutrify','nutrify.png','nutrify'],['Nawader El-Forsan','nawader.png','NAWADER'],['Infinity Bright','infinity.png','INFINITY BRIGHT'],['Bebright','bebright.png','bebright'],['Mawj','mawj.png','Mawj']];
const track=document.getElementById('track');
if(track){
  const html=logos.map(([n,f,t])=>`<div class="lg" title="${n}"><img src="img/logos/${f}" alt="${n}" onerror="this.replaceWith(document.createTextNode('${t}'))"></div>`).join('');
  track.innerHTML=html+html+html+html;
}

// scroll reveal
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// counters
document.querySelectorAll('[data-n]').forEach(el=>{
  const n=+el.dataset.n;
  new IntersectionObserver(([e],o)=>{if(!e.isIntersecting)return;o.disconnect();let c=0;const s=n/40;
    const t=setInterval(()=>{c+=s;if(c>=n){c=n;clearInterval(t)}el.textContent=Math.round(c)+(el.dataset.s||'')},35)},{threshold:.5}).observe(el);
});

// lightbox for project galleries
const gi=[...document.querySelectorAll('.gallery img')];
if(gi.length){
  const lb=document.createElement('div');lb.className='lb';
  lb.innerHTML='<button class="x">×</button><button class="p">‹</button><img alt=""><button class="n">›</button>';
  document.body.appendChild(lb);let cur=0;const im=lb.querySelector('img');
  const show=i=>{cur=(i+gi.length)%gi.length;im.src=gi[cur].src;lb.classList.add('on')};
  gi.forEach((g,i)=>g.addEventListener('click',()=>show(i)));
  lb.querySelector('.x').onclick=()=>lb.classList.remove('on');
  lb.querySelector('.p').onclick=e=>{e.stopPropagation();show(cur-1)};
  lb.querySelector('.n').onclick=e=>{e.stopPropagation();show(cur+1)};
  lb.onclick=e=>{if(e.target===lb)lb.classList.remove('on')};
  addEventListener('keydown',e=>{if(!lb.classList.contains('on'))return;if(e.key==='Escape')lb.classList.remove('on');if(e.key==='ArrowRight')show(cur+1);if(e.key==='ArrowLeft')show(cur-1)});
}
