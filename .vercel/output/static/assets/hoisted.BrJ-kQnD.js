import"./hoisted.BV8mCAo3.js";document.addEventListener("DOMContentLoaded",()=>{if(sessionStorage.getItem("chalet_admin_auth")!=="authenticated"){window.location.href="/login";return}const T=document.getElementById("logoutBtn");T&&T.addEventListener("click",()=>{sessionStorage.removeItem("chalet_admin_auth"),sessionStorage.removeItem("chalet_admin_time"),window.location.href="/"});function A(t){const e=new Date(t,11,1).getDay();let a;e===6?a=0:(a=(6-e+7)%7,a===0&&e!==6&&(a=7));const n=new Date(t,11,1+a);if(n.getDay()!==6){const v=(6-n.getDay()+7)%7;n.setDate(n.getDate()+v)}return n}function k(t){return t.toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit"})}function N(t){const e=new Date(t,5,1).getDay();let a;e===6?a=0:(a=(6-e+7)%7,a===0&&e!==6&&(a=7));const n=new Date(t,5,1+a);if(n.getDay()!==6){const v=(6-n.getDay()+7)%7;n.setDate(n.getDate()+v)}return n}function O(t){const l=[];let e=A(t);const a=new Date(t+1,4,31);for(;e<=a;){const n=new Date(e);if(n.setDate(n.getDate()+6),n>a)break;l.push({start:new Date(e),end:new Date(n)}),e=new Date(e),e.setDate(e.getDate()+7)}return l}function P(t){const l=[];let e=N(t);const a=new Date(t,7,31);for(;e<=a;){const n=new Date(e);if(n.setDate(n.getDate()+6),n>a)break;l.push({start:new Date(e),end:new Date(n)}),e=new Date(e),e.setDate(e.getDate()+7)}return l}let p=2025,m=!0;const j=["Perso","Booking","Airbnb","Abritel","Leboncoin","Centrale de résa","Chalet Montagne"],M=["Disponible","Réservé","Hors Loc","Privatisé"],D=document.getElementById("tenantModal"),C=document.getElementById("closeTenantModal"),q=document.getElementById("cancelTenantForm"),B=document.getElementById("tenantForm");let b="",I="";async function _(t){b=t,I="";try{const a=await(await fetch(`/api/admin/calendar?year=${p}&season=${m?"hiver":"ete"}`)).json(),n=a.reservations?.[t];n?.plateforme&&(I=n.plateforme);const y=a.tenants[t]||{nom:"",prenom:"",nationalite:"",email:"",telephone:"",note:""};document.getElementById("tenantNom").value=y.nom||"",document.getElementById("tenantPrenom").value=y.prenom||"",document.getElementById("tenantNationalite").value=y.nationalite||"",document.getElementById("tenantEmail").value=y.email||"",document.getElementById("tenantTelephone").value=y.telephone||"",document.getElementById("tenantNote").value=y.note||"",D&&(D.style.display="flex")}catch(l){console.error("Erreur chargement locataire:",l),alert("Erreur lors du chargement des données du locataire.")}}function x(){D&&(D.style.display="none"),b="",I="",B&&B.reset()}C&&C.addEventListener("click",x),q&&q.addEventListener("click",x),D&&D.addEventListener("click",t=>{t.target.classList.contains("tenant-modal")&&x()}),B&&B.addEventListener("submit",async t=>{if(t.preventDefault(),!b)return;const l=document.getElementById("tenantNom").value,e=document.getElementById("tenantPrenom").value,a=document.getElementById("tenantNationalite").value,n=document.getElementById("tenantEmail").value,y=document.getElementById("tenantTelephone").value,v=document.getElementById("tenantNote").value,E={nom:l,prenom:e,nationalite:a,email:n,telephone:y,note:v};try{if(!(await fetch("/api/admin/calendar",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({year:p,season:m?"hiver":"ete",week_key:b,type:"tenant",data:E})})).ok)throw new Error("Erreur lors de la sauvegarde");const w=b.replace("_"," - "),o=p.toString().slice(-2),u=m?`Hiver ${o}/${(p+1).toString().slice(-2)}`:`Été ${o}`,c=(document.querySelector(`tr[data-week-key="${b}"]`)?.querySelector('select[data-field="plateforme"]')?.value||I||"").trim()||"Non renseigné";await fetch("/api/admin/contacts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({nom:`${l} ${e}`.trim(),email:n,telephone:y,periode:w,personnes:"12",statut:"confirme",source:c,nationalite:a,note:v,saison:u})}),x(),S(p,m)}catch($){console.error("Erreur:",$),alert("Erreur lors de l'enregistrement des données.")}});function F(){document.querySelectorAll(".btn-comment").forEach(t=>{t.addEventListener("click",l=>{const a=l.target.closest(".btn-comment").dataset.week;a&&_(a)})})}async function S(t,l){const e=document.getElementById("calendarBody"),a=document.getElementById("currentYear");if(!e||!a)return;let n,y;const v=l?"hiver":"ete";if(l){n=O(t);const o=t.toString().slice(-2),u=(t+1).toString().slice(-2);y=`Hiver ${o}/${u}`}else n=P(t),y=`Été ${t.toString().slice(-2)}`;a.textContent=y;let E={};try{E=(await(await fetch(`/api/admin/calendar?year=${t}&season=${v}`)).json()).reservations||{}}catch(o){console.error("Erreur chargement calendrier:",o)}let $=0;n.forEach(o=>{const u=`${k(o.start)}_${k(o.end)}`,r=E[u]||{tarif:""},s=parseFloat(r.tarif||"0")||0;$+=s}),e.innerHTML=n.map((o,u)=>{const r=`${k(o.start)}_${k(o.end)}`,s=E[r]||{tarif:"",plateforme:"",etat:""},c=(s.etat||"").trim();let d="",f="";return c==="Réservé"?(d="row-reserved",f="#fee2e2"):c==="Disponible"?(d="row-available",f="#dcfce7"):c==="Privatisé"&&(d="row-privatized",f="#fed7aa"),`
          <tr class="${d}" data-week-key="${r}"${f?` style="background-color: ${f};"`:""}>
            <td class="week-cell">
              ${k(o.start)} - ${k(o.end)}
            </td>
            <td>
              <input 
                type="text" 
                class="price-input" 
                data-week="${r}"
                data-field="tarif"
                value="${s.tarif||""}"
                placeholder="€"
                readonly
              />
            </td>
            <td>
              <select 
                class="calendar-select" 
                data-week="${r}"
                data-field="plateforme"
                disabled
              >
                <option value="">--</option>
                ${j.map(i=>`
                  <option value="${i}" ${s.plateforme===i?"selected":""}>${i}</option>
                `).join("")}
              </select>
            </td>
            <td>
              <select 
                class="calendar-select" 
                data-week="${r}"
                data-field="etat"
                disabled
              >
                <option value="">--</option>
                ${M.map(i=>`
                  <option value="${i}" ${s.etat===i?"selected":""}>${i}</option>
                `).join("")}
              </select>
            </td>
            <td class="action-cell">
              <div class="action-buttons">
                <button class="btn-edit" data-week="${r}" title="Modifier">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="12" cy="5" r="1"></circle>
                    <circle cx="12" cy="19" r="1"></circle>
                  </svg>
                </button>
                <button class="btn-comment" data-week="${r}" title="Fiche locataire">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </button>
                <button class="btn-save" data-week="${r}" title="Enregistrer" style="display: none;">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </button>
                <button class="btn-cancel" data-week="${r}" title="Annuler" style="display: none;">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
            </td>
          </tr>
        `}).join("")+`
        <tr class="total-row">
          <td class="week-cell" style="font-weight: 700; border-top: 2px solid var(--color-border);">Total</td>
          <td style="font-weight: 700; font-size: 1rem; border-top: 2px solid var(--color-border);">${$.toLocaleString("fr-FR")} €</td>
          <td style="border-top: 2px solid var(--color-border);"></td>
          <td style="border-top: 2px solid var(--color-border);"></td>
          <td class="action-cell" style="border-top: 2px solid var(--color-border);"></td>
        </tr>
      `,e.querySelectorAll("tr:not(.total-row)").forEach(o=>{const u=o.dataset.weekKey;if(!u)return;const s=((E[u]||{etat:""}).etat||"").trim(),c=o.querySelectorAll("td");let d="";s==="Réservé"?d="#fee2e2":s==="Disponible"?d="#dcfce7":s==="Privatisé"&&(d="#fed7aa"),d&&c.forEach(f=>{f.style.backgroundColor=d})});const w={};e.querySelectorAll(".btn-edit").forEach(o=>{o.addEventListener("click",u=>{const r=u.target.closest(".btn-edit"),s=r.dataset.week;if(!s)return;const c=r.closest("tr");if(!c)return;const d=c.querySelectorAll(".price-input, .calendar-select");w[s]={},d.forEach(g=>{const h=g.dataset.field;h&&(w[s][h]=g.value)}),d.forEach(g=>{g.classList.add("editing"),g.tagName==="INPUT"?g.readOnly=!1:g.disabled=!1}),r.style.display="none";const f=c.querySelector(".btn-save"),i=c.querySelector(".btn-cancel");f&&(f.style.display="inline-flex"),i&&(i.style.display="inline-flex")})}),e.querySelectorAll(".btn-save").forEach(o=>{o.addEventListener("click",async u=>{const r=u.target.closest(".btn-save"),s=r.dataset.week;if(!s)return;const c=r.closest("tr");if(!c)return;const d=c.querySelectorAll(".price-input, .calendar-select"),f={};d.forEach(i=>{const g=i.dataset.field;g&&(f[g]=i.value.trim())});try{if(!(await fetch("/api/admin/calendar",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({year:t,season:l?"hiver":"ete",week_key:s,type:"reservation",data:f})})).ok)throw new Error("Erreur sauvegarde");S(t,l)}catch(i){console.error("Erreur:",i),alert("Erreur lors de la sauvegarde.")}})}),e.querySelectorAll(".btn-cancel").forEach(o=>{o.addEventListener("click",u=>{const r=u.target.closest(".btn-cancel"),s=r.dataset.week;if(!s)return;const c=r.closest("tr");if(!c)return;const d=c.querySelectorAll(".price-input, .calendar-select");w[s]&&d.forEach(h=>{const L=h.dataset.field;L&&w[s][L]!==void 0&&(h.value=w[s][L])}),d.forEach(h=>{h.classList.remove("editing"),h.tagName==="INPUT"?h.readOnly=!0:h.disabled=!0});const f=c.querySelector(".btn-save"),i=c.querySelector(".btn-cancel"),g=c.querySelector(".btn-edit");f&&(f.style.display="none"),i&&(i.style.display="none"),g&&(g.style.display="inline-flex")})}),F()}document.getElementById("prevYear")?.addEventListener("click",()=>{m?m=!1:(m=!0,p--),S(p,m)}),document.getElementById("nextYear")?.addEventListener("click",()=>{m?(m=!1,p++):m=!0,S(p,m)}),S(p,m),fetch("/api/admin/init-db").catch(t=>console.error("Init DB error:",t))});
