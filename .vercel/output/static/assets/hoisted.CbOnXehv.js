import"./hoisted.BV8mCAo3.js";document.addEventListener("DOMContentLoaded",()=>{if(sessionStorage.getItem("chalet_admin_auth")!=="authenticated"){window.location.href="/login";return}const v=document.getElementById("logoutBtn");v&&v.addEventListener("click",()=>{sessionStorage.removeItem("chalet_admin_auth"),sessionStorage.removeItem("chalet_admin_time"),window.location.href="/"});function u(e){const t=document.querySelector(".stat-card:nth-child(1) .stat-value"),n=document.querySelector(".stat-card:nth-child(2) .stat-value");t&&(t.textContent=e.length.toString()),n&&(n.textContent=e.filter(r=>r.statut==="confirme").length.toString())}async function s(e){const t=document.getElementById("contactsTableBody");if(!t)return;let n=e;if(!n)try{const o=await fetch("/api/admin/contacts"),a=await o.json();if(!o.ok||!Array.isArray(a)){console.error("API contacts erreur:",a);const d=a&&typeof a.error=="string"?a.error:"Impossible de charger les contacts. Vérifiez la base de données (variables POSTGRES_* en local dans .env.local, sur Vercel dans Settings → Environment Variables).",l=` En local : lancez <code>npm run dev</code> puis ouvrez l'URL affichée dans le terminal (ex. http://127.0.0.1:4321 ou :4322). <a href="/">Accueil</a>`;t.innerHTML='<tr><td colspan="7" class="empty-state error-state">'+d.replace(/</g,"&lt;")+l+"</td></tr>",u([]);return}n=a}catch(o){console.error("Erreur chargement contacts:",o),t.innerHTML=`<tr><td colspan="7" class="empty-state error-state">Erreur de connexion au serveur. Réessayez. En local : lancez <code>npm run dev</code> puis ouvrez l'URL indiquée dans le terminal (ex. 4321 ou 4322). <a href="/">Revenir à l'accueil</a>.</td></tr>`,u([]);return}if(!Array.isArray(n)||n.length===0){t.innerHTML='<tr><td colspan="7" class="empty-state">Aucun contact pour le moment</td></tr>',u([]);return}const r=o=>encodeURIComponent(JSON.stringify(o));t.innerHTML=n.map(o=>`
        <tr>
          <td>${o.saison||"-"}</td>
          <td>${o.periode||"-"}</td>
          <td>${o.nom}</td>
          <td>${o.email}</td>
          <td>${o.telephone||"-"}</td>
          <td><span class="status-badge status-${o.statut||"nouveau"}">${(o.statut||"nouveau").replace("_"," ")}</span></td>
          <td>
            <button type="button" class="btn-small btn-primary btn-voir-contact" data-contact="${r(o)}">Voir</button>
          </td>
        </tr>
      `).join(""),t.querySelectorAll(".btn-voir-contact").forEach(o=>{o.addEventListener("click",()=>{const a=o.getAttribute("data-contact");if(a)try{const d=JSON.parse(decodeURIComponent(a));b(d)}catch(d){console.error(d)}})}),u(n)}let c=null;function b(e){const t=document.getElementById("contactModal"),n=document.getElementById("contactModalBody"),r=document.getElementById("contactModalFooter"),o=document.getElementById("contactModalTitle");if(!t||!n||!o)return;o.textContent=e.nom||"Détail du contact";const a=e.date?new Date(e.date).toLocaleString("fr-FR",{dateStyle:"medium",timeStyle:"short"}):"-";n.innerHTML=`
        <dl class="contact-detail-list">
          <dt>Date</dt><dd>${a}</dd>
          <dt>Saison</dt><dd>${e.saison||"-"}</dd>
          <dt>Nom</dt><dd>${e.nom||"-"}</dd>
          <dt>Email</dt><dd>${e.email?`<a href="mailto:${e.email}">${e.email}</a>`:"-"}</dd>
          <dt>Téléphone</dt><dd>${e.telephone?`<a href="tel:${e.telephone}">${e.telephone}</a>`:"-"}</dd>
          <dt>Période</dt><dd>${e.periode||"-"}</dd>
          <dt>Statut</dt><dd><span class="status-badge status-${e.statut||"nouveau"}">${(e.statut||"nouveau").replace("_"," ")}</span></dd>
          <dt>Source</dt><dd>${e.source||"-"}</dd>
          <dt>Nationalité</dt><dd>${e.nationalite||"-"}</dd>
          <dt>Notes locataire</dt><dd>${e.note?e.note.replace(/\n/g,"<br>"):"-"}</dd>
          <dt>Message</dt><dd>${e.message?e.message.replace(/\n/g,"<br>"):"-"}</dd>
        </dl>
      `,r&&(r.innerHTML=`
          <button type="button" class="btn-modal btn-modal-edit btn-edit-contact" title="Modifier le contact">Modifier le contact</button>
          <button type="button" class="btn-modal btn-modal-delete btn-delete-contact" title="Supprimer le contact">Supprimer ce contact</button>
        `,r.querySelector(".btn-edit-contact")?.addEventListener("click",()=>{S(e)}),r.querySelector(".btn-delete-contact")?.addEventListener("click",()=>{c=e,i(),k()})),t.setAttribute("aria-hidden","false"),t.classList.add("crm-modal-open");const d=document.getElementById("contactModalClose");d&&(d.onclick=function(l){l.preventDefault(),l.stopPropagation(),i()})}const C=["contact","confirme"];function S(e){const t=document.getElementById("contactModalBody"),n=document.getElementById("contactModalFooter"),r=document.getElementById("contactModalTitle");if(!t||!n||!r)return;r.textContent="Modifier le contact",t.innerHTML=`
        <form id="contactEditForm" class="contact-edit-form">
          <div class="form-group">
            <label for="edit-nom">Nom</label>
            <input type="text" id="edit-nom" value="${(e.nom||"").replace(/"/g,"&quot;")}" required />
          </div>
          <div class="form-group">
            <label for="edit-email">Email</label>
            <input type="email" id="edit-email" value="${(e.email||"").replace(/"/g,"&quot;")}" required />
          </div>
          <div class="form-group">
            <label for="edit-telephone">Téléphone</label>
            <input type="tel" id="edit-telephone" value="${(e.telephone||"").replace(/"/g,"&quot;")}" />
          </div>
          <div class="form-group">
            <label for="edit-saison">Saison</label>
            <input type="text" id="edit-saison" value="${(e.saison||"").replace(/"/g,"&quot;")}" placeholder="ex. Hiver 25/26, Été 26" />
          </div>
          <div class="form-group">
            <label for="edit-periode">Période</label>
            <input type="text" id="edit-periode" value="${(e.periode||"").replace(/"/g,"&quot;")}" />
          </div>
          <div class="form-group">
            <label for="edit-nationalite">Nationalité</label>
            <input type="text" id="edit-nationalite" value="${(e.nationalite||"").replace(/"/g,"&quot;")}" />
          </div>
          <div class="form-group">
            <label for="edit-statut">Statut</label>
            <select id="edit-statut">
              ${C.map(a=>`<option value="${a}" ${(e.statut||"")===a?"selected":""}>${a.replace("_"," ")}</option>`).join("")}
            </select>
          </div>
          <div class="form-group">
            <label for="edit-message">Message</label>
            <textarea id="edit-message">${(e.message||"").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</textarea>
          </div>
          <div class="form-group">
            <label for="edit-note">Notes locataire</label>
            <textarea id="edit-note">${(e.note||"").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</textarea>
          </div>
          <div class="contact-edit-form-actions">
            <button type="button" class="btn-edit-cancel">Annuler</button>
            <button type="submit" class="btn-save">Enregistrer</button>
          </div>
        </form>
      `,n.innerHTML="",document.getElementById("contactEditForm")?.addEventListener("submit",async a=>{a.preventDefault();const d={id:e.id,nom:document.getElementById("edit-nom").value.trim(),email:document.getElementById("edit-email").value.trim(),telephone:document.getElementById("edit-telephone").value.trim(),periode:document.getElementById("edit-periode").value.trim(),personnes:e.personnes||"",statut:document.getElementById("edit-statut").value,source:e.source||"",message:document.getElementById("edit-message").value.trim(),nationalite:document.getElementById("edit-nationalite").value.trim(),note:document.getElementById("edit-note").value.trim(),saison:document.getElementById("edit-saison").value.trim()};try{const l=await fetch("/api/admin/contacts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d)});if(l.ok)i(),s();else{const y=await l.json().catch(()=>({}));alert(y.error||"Erreur lors de l'enregistrement.")}}catch(l){console.error(l),alert("Erreur de connexion.")}}),t.querySelector(".btn-edit-cancel")?.addEventListener("click",()=>b(e))}function i(){const e=document.getElementById("contactModal");e&&(e.setAttribute("aria-hidden","true"),e.classList.remove("crm-modal-open"))}window.closeContactModal=i;function k(){const e=document.getElementById("confirmDeleteModal");e&&(e.setAttribute("aria-hidden","false"),e.classList.add("crm-modal-open"))}function m(){const e=document.getElementById("confirmDeleteModal");e&&(e.setAttribute("aria-hidden","true"),e.classList.remove("crm-modal-open")),c=null}async function w(){if(!(!c||!c.id))try{const e=await fetch("/api/admin/contacts",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:c.id})});if(e.ok)m(),s();else{const t=await e.json().catch(()=>({}));alert(t.error||"Erreur lors de la suppression.")}}catch(e){console.error(e),alert("Erreur de connexion.")}}const p=document.getElementById("contactModal"),h=document.getElementById("contactModalClose");h&&h.addEventListener("click",e=>{e.preventDefault(),e.stopPropagation(),i()});function E(e){const t=e.target;!t||!p?.classList.contains("crm-modal-open")||(t.id==="contactModalClose"||t.closest?.("#contactModalClose")||t.closest?.("[data-close-contact-modal]"))&&(e.preventDefault(),e.stopPropagation(),i())}document.addEventListener("mousedown",E,!0),document.addEventListener("click",E,!0),p&&p.addEventListener("click",e=>{const t=e.target,n=t?.nodeType===3?t.parentElement:t;n&&(n.classList?.contains("crm-modal-backdrop")||n.closest?.(".crm-modal-backdrop"))&&(e.preventDefault(),i())});const M=document.getElementById("confirmDeleteModalClose"),B=document.getElementById("confirmDeleteCancel"),I=document.getElementById("confirmDeleteBtn"),L=document.getElementById("confirmDeleteModal");M&&M.addEventListener("click",m),B&&B.addEventListener("click",m),I&&I.addEventListener("click",w),L&&L.querySelector(".crm-modal-backdrop")?.addEventListener("click",m);const f=document.getElementById("searchInput"),g=document.getElementById("statusFilter");async function $(){const e=f.value.toLowerCase(),t=g.value;try{const n=await fetch("/api/admin/contacts"),r=await n.json();if(!n.ok||!Array.isArray(r)){s([]);return}const a=r.filter(d=>{const l=d.nom.toLowerCase().includes(e)||d.email.toLowerCase().includes(e)||d.telephone&&d.telephone.includes(e),y=t===""||d.statut===t;return l&&y});s(a)}catch(n){console.error("Erreur filtrage:",n)}}f&&f.addEventListener("input",$),g&&g.addEventListener("change",$),s()});
