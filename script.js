document.documentElement.classList.add('js');

// CONFIGURACIÓN CENTRAL: cambia aquí los datos del negocio al publicar.
const BUSINESS={name:'Advance Reparación de Línea Blanca',phone:'+525623456631',whatsapp:'525623456631',address:'Tecacalo, Coapa, Adolfo Ruíz Cortínez, Coyoacán, 04630, Ciudad de México, CDMX',mapsUrl:'https://maps.app.goo.gl/vaq3Du7iLG2pZV3fA',cloudinaryVideo:'VIDEO_LINEA_BLANCA_FONDO_1_aywjea',siteUrl:'https://example.com/'};
const wa=(message)=>`https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`;
const generalMessage='Hola, vi la página de Advance y quiero solicitar una revisión.';

const navItems=['Inicio','Servicios','Equipos','Trabajos','Marcas','Cobertura','Contacto'];
const services=[{name:'Diagnóstico',image:'diagnostico.webp'},{name:'Reparación',image:'reparacion.webp'},{name:'Mantenimiento',image:'mantenimiento.webp'}];
const appliances=[
 {name:'Lavadoras',subject:'una lavadora',image:'lavadora.webp',alt:'Lavadora de carga frontal atendida por Advance',copy:'Revisión de lavado, centrifugado, drenaje y componentes internos.'},
 {name:'Lavasecadoras',subject:'una lavasecadora',image:'lavasecadora.webp',alt:'Lavasecadora para servicio técnico',copy:'Diagnóstico de ciclos de lavado y secado en un mismo equipo.'},
 {name:'Centros de lavado',subject:'un centro de lavado',image:'centrolavado.webp',alt:'Centro de lavado atendido por Advance',copy:'Revisión integral de módulos de lavado y secado.'},
 {name:'Refrigeradores',subject:'un refrigerador',image:'refrigerador.webp',alt:'Refrigerador para servicio de reparación de línea blanca',copy:'Atención a fallas de enfriamiento, control y circulación de aire.'},
 {name:'Vitrinas refrigeradas',subject:'una vitrina refrigerada',image:'vitrinarefrigerada.webp',alt:'Vitrina refrigerada para servicio comercial',copy:'Diagnóstico para conservar la temperatura de operación.'},
 {name:'Mesas frías',subject:'una mesa fría',image:'mesafria.webp',alt:'Mesa fría para servicio de refrigeración comercial',copy:'Servicio para equipos de conservación usados en negocios.'},
 {name:'Cavas de vino',subject:'una cava de vino',image:'canvavino.webp',alt:'Cava de vino para revisión de temperatura',copy:'Revisión de control y enfriamiento para una temperatura estable.'},
 {name:'Hornos de microondas',subject:'un horno de microondas',image:'hornomicroondas.webp',alt:'Horno de microondas para servicio técnico',copy:'Diagnóstico de calentamiento, controles y funcionamiento general.'},
 {name:'Estufas',subject:'una estufa',image:'estufa.webp',alt:'Estufa para servicio de encendido y cocción',copy:'Revisión de encendido y componentes para una cocción adecuada.'}
];
const evidenceData=[
 ['Refrigeración','Servicio al sistema de refrigeración','Revisión del compresor, conexiones y circuito ante una falla de bajo enfriamiento.'],['Lavado','Reparación interna de lavadora','Desarme técnico para acceder a tina y componentes internos ante ruido o vibración.'],['Mantenimiento','Limpieza profunda de tina y canasta','Desmontaje para retirar residuos y acumulaciones generadas por el uso continuo.'],['Refrigeración','Revisión del sistema de enfriamiento','Acceso al compartimento interno para revisar circulación de aire y componentes.'],['Mantenimiento','Lavado técnico de tina','Limpieza profunda después del desmontaje para retirar residuos acumulados.'],['Lavado','Diagnóstico interno de lavadora Hisense','Revisión de conexiones y componentes internos ante una falla del ciclo.'],['Lavado','Revisión del conjunto de lavado y drenaje','Acceso al sistema interno para revisar tina, drenaje, mangueras y conexiones.'],['Secado','Reparación interna de secadora','Revisión del sistema de giro, ventilación y calentamiento.'],['Refrigeración','Servicio a fábrica de hielo','Revisión del sistema Auto IceMaker ante funcionamiento intermitente.'],['Cocción','Servicio a horno Mabe','Revisión del encendido y control de temperatura.'],['Comercial','Servicio a máquina de hielo Polar','Diagnóstico del sistema de enfriamiento y ciclo de producción.'],['Refrigeración','Reparación de cava de vino','Revisión del sistema de control y enfriamiento.'],['Refrigeración','Servicio al circuito de refrigeración','Intervención técnica para recuperar el desempeño de enfriamiento.'],['Cocción','Reparación del sistema de encendido','Revisión de conexiones y componentes internos de una estufa.'],['Refrigeración','Mantenimiento de refrigerador side-by-side','Limpieza y revisión general de compartimentos y circulación de aire.'],['Comercial','Reparación de vitrina refrigerada','Servicio al sistema de enfriamiento para recuperar temperatura de operación.'],['Mantenimiento','Mantenimiento de tambor y sello de puerta','Revisión y limpieza del tambor y empaque para prevenir filtraciones.'],['Secado','Servicio al sistema de secado','Revisión del tambor, ventilación y calentamiento.'],['Comercial','Servicio a vitrina refrigerada MIGSA','Revisión del sistema de refrigeración ante variaciones de temperatura.'],['Lavado','Reparación del sistema de transmisión','Desmontaje de tina para revisar eje y componentes mecánicos.'],['Mantenimiento','Mantenimiento profundo de tina','Eliminación de suciedad, detergente y acumulaciones ocultas.'],['Lavado','Reparación del sistema de accionamiento','Revisión del mecanismo de movimiento durante lavado y centrifugado.'],['Lavado','Servicio a lavasecadora LG Direct Drive','Revisión del sistema interno y verificación final del equipo.']
].map((x,i)=>({id:i+1,category:x[0],title:x[1],description:x[2],image:`evidencia-${i+1}.webp`}));

// TEMPORAL:
// Actualmente todas las marcas muestran MABE.webp.
// Sustituir únicamente `image` por el logo correspondiente cuando esté disponible.
const brands = [
  { name: 'Mabe', image: 'MABE.webp' },
  { name: 'Samsung', image: 'SAMSUNG.webp' },
  { name: 'LG', image: 'LG.webp' },
  { name: 'Whirlpool', image: 'WHIRLPOOL.webp' },
  { name: 'Hisense', image: 'HISENSE.webp' },
  { name: 'Electrolux', image: 'ELECTROLUX.webp' },
  { name: 'Frigidaire', image: 'FRIGIDAIRE.webp' },
  { name: 'General Electric / GE', image: 'GENERALELECTRIC.webp' },
  { name: 'Bosch', image: 'BOSCH.webp' },
  { name: 'Maytag', image: 'MAYTAG.webp' },
  { name: 'KitchenAid', image: 'KITCHENAID.webp' },
  { name: 'Koblenz', image: 'KOBLENZ.webp' },
  { name: 'Acros', image: 'ACROS.webp' },
  { name: 'Daewoo', image: 'DAEWOO.webp' },
  { name: 'Panasonic', image: 'PANASONIC.webp' },
  { name: 'Hamilton Beach', image: 'HAMILTONBEACH.webp' },
  { name: 'Oster', image: 'OSTER.webp' },
  { name: 'Black+Decker', image: 'BLACKDECKER.webp' },
  { name: 'Winia', image: 'WINIA.webp' },
  { name: 'Sub-Zero', image: 'SUBZERO.webp' },
  { name: 'Imbera', image: 'IMBERA.webp' },
  { name: 'Torrey', image: 'TORREY.webp' }
];
const faq=[['¿Qué equipos reparan?','Atendemos lavadoras, lavasecadoras, centros de lavado, refrigeradores, vitrinas refrigeradas, mesas frías, cavas, hornos de microondas y estufas.'],['¿Trabajan con todas las marcas?','Atendemos distintas marcas y modelos. Comparte la marca y el modelo de tu equipo para confirmar el servicio.'],['¿Realizan servicio a domicilio?','Contáctanos para compartir tu ubicación y confirmar disponibilidad en tu zona.'],['¿Reparan refrigeración comercial?','Sí, atendemos vitrinas, mesas frías, exhibidores, cavas y otros equipos comerciales.'],['¿Realizan mantenimiento preventivo?','Sí. Podemos revisar, limpiar y ajustar el equipo para conservar un funcionamiento adecuado.'],['¿Cómo solicito una revisión?','Escríbenos por WhatsApp o llama al 56 2345 6631 y cuéntanos qué falla presenta el equipo.'],['¿Puedo enviar fotos o video de la falla por WhatsApp?','Sí. Las imágenes pueden ayudar a entender el equipo y la falla antes de la revisión.'],['¿Dónde se encuentra Advance?','Estamos en Tecacalo, Coapa, Adolfo Ruíz Cortínez, Coyoacán, CDMX.']];

const applianceGrid=document.querySelector('#appliance-grid');
applianceGrid.innerHTML=appliances.map(a=>`<article class="appliance-card" data-reveal><img src="./imgs/${a.image}" alt="${a.alt}" width="500" height="500" loading="lazy"><h3>${a.name}</h3><p>${a.copy}</p><a href="${wa(`Hola, necesito información para reparar ${a.subject}.`)}" target="_blank" rel="noopener">Solicitar servicio <span>↗</span></a></article>`).join('');

document.querySelectorAll('.wa-general').forEach(a=>a.href=wa(generalMessage));
document.querySelectorAll('.wa-commercial').forEach(a=>a.href=wa('Hola, necesito información sobre servicio de refrigeración comercial.'));
document.querySelector('#year').textContent=new Date().getFullYear();

const header=document.querySelector('#header');
const menuButton=document.querySelector('.menu-toggle');const mobileMenu=document.querySelector('#mobile-menu');
addEventListener('scroll',()=>header.classList.toggle('scrolled',scrollY>20),{passive:true});
menuButton.addEventListener('click',()=>{const open=mobileMenu.classList.toggle('open');menuButton.setAttribute('aria-expanded',open);menuButton.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú')});
mobileMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mobileMenu.classList.remove('open');menuButton.setAttribute('aria-expanded','false')}));

const track=document.querySelector('#evidence-track');const filters=['Todos','Lavado','Refrigeración','Cocción','Secado','Comercial','Mantenimiento'];
const renderEvidence=(filter='Todos')=>{const items=filter==='Todos'?evidenceData:evidenceData.filter(x=>x.category===filter);track.innerHTML=items.map(x=>`<article class="evidence-card" tabindex="0" data-id="${x.id}"><img src="./imgs/${x.image}" alt="${x.title}" width="900" height="1200" loading="lazy"><div class="evidence-card__copy"><p class="eyebrow">${x.category}</p><h3>${x.title}</h3><p>${x.description}</p><button type="button">Ver trabajo ↗</button></div></article>`).join('');track.querySelectorAll('.evidence-card').forEach(card=>{const open=()=>openEvidence(Number(card.dataset.id));card.addEventListener('click',open);card.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open()}})})};
const filterRow=document.querySelector('.filter-row');filterRow.innerHTML=filters.map((f,i)=>`<button class="${i?'':'active'}" type="button" data-filter="${f}" aria-pressed="${i?'false':'true'}">${f}</button>`).join('');
filterRow.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;filterRow.querySelectorAll('button').forEach(x=>{x.classList.remove('active');x.setAttribute('aria-pressed','false')});b.classList.add('active');b.setAttribute('aria-pressed','true');renderEvidence(b.dataset.filter)});renderEvidence();
document.querySelector('#evidence-prev').addEventListener('click',()=>track.scrollBy({left:-track.clientWidth*.78,behavior:'smooth'}));document.querySelector('#evidence-next').addEventListener('click',()=>track.scrollBy({left:track.clientWidth*.78,behavior:'smooth'}));

const dialog=document.querySelector('#lightbox');function openEvidence(id){const x=evidenceData.find(y=>y.id===id);dialog.querySelector('img').src=`./imgs/${x.image}`;dialog.querySelector('img').alt=x.title;document.querySelector('#modal-category').textContent=x.category;document.querySelector('#modal-title').textContent=x.title;document.querySelector('#modal-description').textContent=x.description;document.querySelector('#modal-whatsapp').href=wa(`Hola, mi equipo presenta algo parecido a: ${x.title}. Quiero solicitar un diagnóstico.`);dialog.showModal()};dialog.querySelector('.lightbox__close').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});

const brandTrack=document.querySelector('.brand-track');const brandMarkup=[...brands,...brands].map(b=>`<div class="brand-card"><img src="./imgs/${b.image}" alt="Logotipo temporal para ${b.name}" width="180" height="80" loading="lazy"><span>${b.name}</span></div>`).join('');brandTrack.innerHTML=brandMarkup;
const faqList=document.querySelector('#faq-list');faqList.innerHTML=faq.map((x,i)=>`<article class="faq-item"><h3><button class="faq-question" type="button" aria-expanded="false" aria-controls="faq-${i}">${x[0]}<span aria-hidden="true">+</span></button></h3><div class="faq-answer" id="faq-${i}"><div><p>${x[1]}</p></div></div></article>`).join('');faqList.addEventListener('click',e=>{const b=e.target.closest('.faq-question');if(!b)return;const open=b.getAttribute('aria-expanded')==='true';faqList.querySelectorAll('.faq-question').forEach(x=>x.setAttribute('aria-expanded','false'));b.setAttribute('aria-expanded',String(!open))});

const observer=new IntersectionObserver(entries=>entries.forEach(x=>{if(x.isIntersecting){x.target.classList.add('visible');observer.unobserve(x.target)}}),{threshold:.12});document.querySelectorAll('[data-reveal]').forEach(x=>observer.observe(x));

// Sustituye el iframe por video nativo para mantener el centro real en cualquier pantalla.
const heroFrame=document.querySelector('.hero__video iframe');
if(heroFrame){const video=document.createElement('video');video.autoplay=true;video.muted=true;video.loop=true;video.playsInline=true;video.preload='metadata';video.setAttribute('aria-label','Advance, servicio técnico de línea blanca');const source=document.createElement('source');source.src='https://res.cloudinary.com/dbsjtpqpa/video/upload/q_auto,f_auto/VIDEO_LINEA_BLANCA_FONDO_1_aywjea.mp4';source.type='video/mp4';video.append(source);heroFrame.replaceWith(video);video.play().catch(()=>{});}

// Acordeón: manejador directo para que cada pregunta responda al clic y al teclado.
document.querySelectorAll('.faq-question').forEach(button=>button.addEventListener('click',event=>{event.stopPropagation();const wasOpen=button.getAttribute('aria-expanded')==='true';document.querySelectorAll('.faq-question').forEach(item=>item.setAttribute('aria-expanded','false'));button.setAttribute('aria-expanded',String(!wasOpen));}));
document.querySelectorAll('.faq-question').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.faq-item').forEach(item=>item.classList.remove('open'));button.closest('.faq-item').classList.toggle('open',button.getAttribute('aria-expanded')==='true');}));

// Detalle compacto de cada equipo; el enlace de WhatsApp conserva su acción propia.
document.querySelectorAll('.appliance-card').forEach((card,index)=>{card.tabIndex=0;card.setAttribute('aria-label',`Ver detalle de ${appliances[index].name}`);const show=()=>{const item=appliances[index];dialog.querySelector('img').src=`./imgs/${item.image}`;dialog.querySelector('img').alt=item.alt;document.querySelector('#modal-category').textContent='Equipo que reparamos';document.querySelector('#modal-title').textContent=item.name;document.querySelector('#modal-description').textContent=item.copy;document.querySelector('#modal-whatsapp').href=wa(`Hola, necesito información para reparar ${item.subject}.`);dialog.showModal();};card.addEventListener('click',event=>{if(!event.target.closest('a'))show()});card.addEventListener('keydown',event=>{if((event.key==='Enter'||event.key===' ')&&!event.target.closest('a')){event.preventDefault();show();}});});

// Imágenes editoriales transparentes solicitadas para cobertura, proceso y CTA.
const coverageImage=document.querySelector('.coverage__visual img');if(coverageImage){coverageImage.src='./imgs/icono-sucursal.webp';coverageImage.alt='Sucursal de Advance para servicio de línea blanca';coverageImage.classList.add('coverage__store');}
const processSection=document.querySelector('.process');if(processSection&&!processSection.querySelector('.process-figure')){const image=document.createElement('img');image.src='./imgs/tecnico.webp';image.alt='Técnico de Advance junto a una lavadora';image.className='process-figure';image.loading='lazy';image.width=512;image.height=512;processSection.append(image);}
const finalCta=document.querySelector('.final-cta');if(finalCta&&!finalCta.querySelector('.cta-figure')){const image=document.createElement('img');image.src='./imgs/nofunciona.webp';image.alt='Equipo de refrigeración que necesita servicio técnico';image.className='cta-figure';image.loading='lazy';image.width=512;image.height=512;finalCta.append(image);}

// Beneficios: iconos locales y nueva opción de visita a domicilio.
const benefitStrip=document.querySelector('.benefit-strip');if(benefitStrip){const items=benefitStrip.querySelectorAll('article');const setIcon=(item,src,alt)=>{if(!item)return;const old=item.querySelector('img,.drawn-icon');const icon=document.createElement('img');icon.src=src;icon.alt=alt;icon.width=120;icon.height=120;icon.loading='lazy';icon.className='benefit-icon';old?.replaceWith(icon);};setIcon(items[1],'./imgs/servicioprofesional.webp','Icono de servicio profesional');setIcon(items[3],'./imgs/hogarynegocio.webp','Icono de atención para hogar y negocio');if(!benefitStrip.querySelector('.benefit-home-visit')){const visit=document.createElement('article');visit.className='benefit-home-visit';visit.innerHTML='<img class="benefit-icon" src="./imgs/transporte.webp" alt="Icono de visita técnica a domicilio" width="120" height="120" loading="lazy"><div><strong>Visita a domicilio</strong><span>Agenda atención para tu equipo en tu domicilio.</span></div>';benefitStrip.append(visit);}}

// Mapa ligero y visible dentro de Cobertura.
const coverageSection=document.querySelector('.coverage');if(coverageSection&&!coverageSection.querySelector('.coverage-map')){const map=document.createElement('iframe');map.className='coverage-map';map.src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.520487681256!2d-99.1401516!3d19.303207999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce01c8efeaaebf%3A0x7e06903bb0726d2!2sAdvance%20Reparaci%C3%B3n%20de%20l%C3%ADnea%20blanca!5e0!3m2!1ses-419!2smx!4v1790693706074!5m2!1ses-419!2smx';map.title='Mapa de Advance Reparación de Línea Blanca en Coyoacán';map.loading='lazy';map.referrerPolicy='strict-origin-when-cross-origin';map.allowFullscreen=true;coverageSection.append(map);}
if(coverageSection&&!coverageSection.querySelector('.coverage-map-wrap')){const map=coverageSection.querySelector('.coverage-map');const visual=coverageSection.querySelector('.coverage__visual');if(map&&visual){const wrap=document.createElement('div');wrap.className='coverage-map-wrap';coverageSection.insertBefore(wrap,map);wrap.append(map,visual);}}
