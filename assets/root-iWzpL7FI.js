import"./paths-Dr2Vkqsd.js";/* empty css             */import{a as e,c as t,d as n,f as r,i,l as a,n as o,o as s,r as c,s as l,u}from"./access-B24lKLmi.js";var d=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Алиса">
  <defs>
    <filter id="alice-glow" x="-60%" y="-60%" width="220%" height="220%">
      <feGaussianBlur stdDeviation="7" />
    </filter>
    <radialGradient id="alice-fur" cx="50%" cy="38%" r="68%">
      <stop offset="0" stop-color="#2c313d" />
      <stop offset="1" stop-color="#141720" />
    </radialGradient>
  </defs>
  <path d="M42 98 C42 62 60 52 60 52 L52 16 L86 42 C95 39 105 39 114 42 L148 16 L140 52 C140 52 158 62 158 98 C158 140 132 168 100 168 C68 168 42 140 42 98 Z" fill="url(#alice-fur)" />
  <path d="M63 48 L59 27 L78 43 Z" fill="#0f1116" opacity="0.55" />
  <path d="M137 48 L141 27 L122 43 Z" fill="#0f1116" opacity="0.55" />
  <g filter="url(#alice-glow)" fill="#f2a93b" opacity="0.75">
    <ellipse cx="78" cy="98" rx="15" ry="10" />
    <ellipse cx="122" cy="98" rx="15" ry="10" />
  </g>
  <g class="eyes">
    <ellipse cx="78" cy="98" rx="12" ry="7.5" fill="#ffc861" />
    <ellipse cx="122" cy="98" rx="12" ry="7.5" fill="#ffc861" />
    <ellipse cx="78" cy="98" rx="2.2" ry="6.4" fill="#1a1206" />
    <ellipse cx="122" cy="98" rx="2.2" ry="6.4" fill="#1a1206" />
  </g>
  <path d="M95 120 L105 120 L100 127 Z" fill="#3d4352" />
  <g stroke="#3d4352" stroke-width="1.6" stroke-linecap="round" opacity="0.85">
    <path d="M88 125 L56 121" />
    <path d="M88 130 L58 135" />
    <path d="M112 125 L144 121" />
    <path d="M112 130 L142 135" />
  </g>
</svg>
`;function f(t){let r=new URLSearchParams(location.search),a=i(r.get(`returnTo`))??s,l=r.has(`denied`);(l||r.has(`screen`))&&history.replaceState(null,``,location.pathname);let u=document.createElement(`section`);u.className=`login`,u.innerHTML=`
    <figure class="portrait" aria-hidden="true">${d}</figure>
    <form class="login-form" novalidate>
      <p class="voice">${n.prompt}</p>
      <label class="field">
        <span class="sr-only">${n.loginLabel}</span>
        <input name="login" type="text" placeholder="${n.loginPlaceholder}" autocomplete="username"
          autocapitalize="none" autocorrect="off" spellcheck="false" required />
      </label>
      <label class="field">
        <span class="sr-only">${n.passwordLabel}</span>
        <input name="password" type="password" placeholder="${n.passwordPlaceholder}" autocomplete="current-password" required />
      </label>
      <button class="btn btn-primary" type="submit">${n.submit}</button>
      <p class="error" role="alert"></p>
    </form>`,t.append(u);let f=u.querySelector(`form`),m=u.querySelector(`input[name="login"]`),h=u.querySelector(`input[name="password"]`),g=u.querySelector(`button[type="submit"]`),_=u.querySelector(`.error`);if(!f||!m||!h||!g||!_)return;let v=0;f.addEventListener(`submit`,async t=>{t.preventDefault();let r=m.value.trim().toLowerCase(),i=h.value;if(!r){m.focus();return}if(!i){h.focus();return}g.disabled=!0,_.textContent=``;try{c(await o(r,i));let t=await e();if(t===204){p(u,a);return}t===403?(v+=1,_.textContent=n.errors[Math.min(v,n.errors.length)-1],h.value=``,h.focus(),f.classList.remove(`is-shaking`),f.offsetWidth,f.classList.add(`is-shaking`)):_.textContent=n.network}finally{g.disabled=!1}}),m.focus(),l||e().then(e=>{e===204&&u.isConnected&&p(u,a)})}function p(e,t){e.innerHTML=`
    <figure class="portrait" aria-hidden="true">${d}</figure>
    <p class="voice">${n.accepted}</p>
    <a class="btn btn-primary">${n.start}</a>`,e.querySelector(`a`).href=t,e.querySelector(`a`)?.focus()}var m=/Android|iPhone|iPad|iPod|Mobile|Windows Phone|webOS|BlackBerry|Opera Mini/i;function h(){let e=m.test(navigator.userAgent),t=(navigator.maxTouchPoints??0)>0,n=window.matchMedia(`(pointer: fine) and (hover: hover)`).matches;return!e&&!t&&n}function g(e){let n=typeof navigator.share==`function`,i=`https://t.me/share/url?url=${encodeURIComponent(u)}&text=${encodeURIComponent(r.telegramText)}`,o=`href="${i}" target="_blank" rel="noopener"`,s=document.createElement(`section`);s.className=`stub`,s.innerHTML=`
    <figure class="portrait" aria-hidden="true">${d}</figure>
    <p class="voice">${r.greeting}</p>
    <p class="line">${r.line}</p>
    <p class="address"><strong>${a}</strong></p>
    <p class="creds">
      <span>${r.loginLabel}: <strong>${l}</strong></span>
      <span>${r.passwordLabel}: <strong>${t}</strong></span>
    </p>
    <div class="actions">
      ${n?`<button class="btn btn-primary" type="button" data-share>${r.share}</button>`:`<a class="btn btn-primary" ${o}>${r.share}</a>`}
      <button class="btn" type="button" data-copy>${r.copy}</button>
    </div>
    ${n?`<a class="link-tiny" ${o}>${r.viaTelegram}</a>`:``}`,e.append(s),s.querySelector(`[data-share]`)?.addEventListener(`click`,async()=>{try{await navigator.share({title:r.shareTitle,text:r.shareText})}catch(e){e.name!==`AbortError`&&window.open(i,`_blank`,`noopener`)}});let c=s.querySelector(`[data-copy]`);c?.addEventListener(`click`,()=>{let e=()=>{c.textContent=r.copied,c.classList.add(`is-done`),window.setTimeout(()=>{c.textContent=r.copy,c.classList.remove(`is-done`)},2e3)};navigator.clipboard?.writeText?navigator.clipboard.writeText(r.shareText).then(e,()=>{_(r.shareText)&&e()}):_(r.shareText)&&e()})}function _(e){let t=document.createElement(`textarea`);t.value=e,t.setAttribute(`readonly`,``),t.style.position=`fixed`,t.style.opacity=`0`,document.body.append(t),t.select(),t.setSelectionRange(0,e.length);let n=!1;try{n=document.execCommand(`copy`)}catch{n=!1}return t.remove(),n}var v=document.getElementById(`app`);if(!v)throw Error(`Нет корневого элемента #app`);var y=new URLSearchParams(location.search).get(`screen`);y===`login`||y!==`stub`&&h()?f(v):g(v);