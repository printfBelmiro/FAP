(()=>{
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const body=document.body,toast=$('#toast');let tt;
const say=m=>{toast.textContent=m;toast.classList.add('on');clearTimeout(tt);tt=setTimeout(()=>toast.classList.remove('on'),3400)};
const ic=n=>`<svg class="i" aria-hidden="true"><use href="#${n}"/></svg>`;
const N=[['Módulos de Aprendizagem','i-book',3],['Biblioteca Digital','i-lib',4],['FALP','i-tr',0],['Aulas e Oficinas','i-cal',4],['Meu Progresso','i-chart',4],['Conquistas','i-cup',4],['Sobre a FAP','i-info',4]];
const U=[['Meu Perfil','i-user',2],['Configurações','i-set',2],['Sair','i-out',2]];
const off=([l,i,f])=>`<button type="button" class="nav" aria-disabled="true" title="${l}" data-l="${l}" data-f="${f}">${ic(i)}<span class="lab">${l}</span><span class="soon">não concluído</span></button>`;
$('#n1').innerHTML=`<a class="nav on" href="#inicio" aria-current="page" title="Início">${ic('i-home')}<span class="lab">Início</span></a>`+N.map(x=>x[2]?off(x):`<a class="nav" href="#falp" title="FALP">${ic(x[1])}<span class="lab">FALP</span></a>`).join('');
$('#n2').innerHTML=U.map(off).join('')+`<a class="nav" href="#entrar" title="Entrar">${ic('i-key')}<span class="lab">Entrar ou criar conta</span></a>`;
document.addEventListener('click',e=>{const b=e.target.closest('[aria-disabled=true]');if(b)say('Não concluído.');if(e.target.closest('aside a'))close()});
// módulos
const M=[['História da Computação e da Programação',1],['Introdução à Tecnologia da Informação',1],['Lógica e Pensamento Computacional',1],['Introdução à Programação',1],['Programação em C',3],['Desenvolvimento Web',2],['Bancos de Dados',2],['Redes de Computadores',2],['Sistemas Operacionais',2],['Engenharia de Software',2],['Cibersegurança',2],['Ciência da Computação Avançada',3]];
const LV=['','Introdutório','Intermediário','Avançado'];
$('#mods').innerHTML=M.map(([n,l],i)=>`<div class="px card m"><span class="rn" aria-hidden="true">${i+1}</span><h3>Módulo ${i+1}: ${n}</h3><span class="lv l${l}">${i==4?'Introdutório ao avançado':LV[l]}</span></div>`).join('');
// sidebar
const side=$('#side'),bg=$('#burger'),col=$('#col');
const open=()=>{body.classList.add('open');bg.setAttribute('aria-expanded','true');$('.nav',side).focus()};
function close(){if(!body.classList.contains('open'))return;body.classList.remove('open');bg.setAttribute('aria-expanded','false')}
bg.onclick=()=>body.classList.contains('open')?close():open();
$('#scrim').onclick=close;
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&body.classList.contains('open')){close();bg.focus()}});
try{if(localStorage.getItem('fap-min')==='1'){body.classList.add('min');col.setAttribute('aria-expanded','false')}}catch(e){}
col.onclick=()=>{const m=body.classList.toggle('min');col.setAttribute('aria-expanded',String(!m));col.title=m?'Expandir menu':'Recolher menu';try{localStorage.setItem('fap-min',m?'1':'0')}catch(e){}};
// partículas
if(!matchMedia('(prefers-reduced-motion:reduce)').matches)$$('.fx').forEach(c=>{for(let i=0;i<16;i++){const s=document.createElement('i');s.style.cssText=`left:${Math.random()*100}%;bottom:${Math.random()*45}%;animation-delay:${Math.random()*8}s;animation-duration:${6+Math.random()*6}s`;if(i%3==0)s.className='t';c.appendChild(s)}});
// rotas por hash
const route=()=>{const h=location.hash,l=h==='#entrar',f=h==='#falp';$('#v-login').hidden=!l;$('#v-home').hidden=l;$('#fv').hidden=!f;$$('#main>.hero,#main>.wrap:not(#fv),#main>footer').forEach(e=>e.hidden=f);$$('#n1 a.nav[href^="#"]').forEach(a=>{const on=a.getAttribute('href')===(f?'#falp':'#inicio');a.classList.toggle('on',on);on?a.setAttribute('aria-current','page'):a.removeAttribute('aria-current')});document.title=l?'Entrar — FAP':f?'FALP — FAP':'FAP — Ferramenta de Apoio à Programação';if(l||f)window.scrollTo(0,0)};
addEventListener('hashchange',route);route();
// login
$$('#fv [role=tab]').forEach(t=>t.onclick=()=>{$$('#fv [role=tab]').forEach(x=>x.setAttribute('aria-selected',String(x===t)));['a','d','h'].forEach(k=>$('#p-'+k).hidden=k!==t.dataset.p)});
const tab=k=>{$$('#fv [role=tab]').forEach(x=>x.setAttribute('aria-selected',String(x.dataset.p===k)));['a','d','h'].forEach(j=>$('#p-'+j).hidden=j!==k)};
const G={error:'erro',name:'nome',is:'é / está',not:'não',defined:'definido',undefined:'indefinido',null:'nulo',cannot:'não pode',can:'pode',only:'somente',read:'ler',reading:'lendo',property:'propriedade',properties:'propriedades',of:'de',type:'tipo',object:'objeto',list:'lista',index:'índice',out:'fora',range:'intervalo',division:'divisão',by:'por',zero:'zero',unexpected:'inesperado',token:'símbolo (token)',syntax:'sintaxe',invalid:'inválido',expected:'esperado',indented:'indentado',indentation:'indentação',block:'bloco',module:'módulo',no:'nenhum',named:'chamado',found:'encontrado',attribute:'atributo',has:'tem',key:'chave',value:'valor',argument:'argumento',function:'função',string:'texto (string)',integer:'inteiro',int:'inteiro',float:'número decimal',concatenate:'concatenar',assignment:'atribuição',constant:'constante',variable:'variável',unsupported:'não suportado',operand:'operando',maximum:'máximo',recursion:'recursão',depth:'profundidade',exceeded:'excedido',call:'chamada',stack:'pilha',size:'tamanho',file:'arquivo',directory:'diretório',such:'tal',or:'ou',and:'e',to:'para',in:'em',the:'o / a',from:'de',for:'para',end:'fim',input:'entrada',literal:'literal',base:'base',never:'nunca',closed:'fechado',was:'foi',must:'deve',use:'usar',line:'linha',traceback:'rastreamento (traceback)',most:'mais',recent:'recente',last:'último',uncaught:'não capturado',identifier:'identificador',dictionary:'dicionário',subscriptable:'indexável (aceita [ ])',iterable:'iterável',convert:'converter',takes:'recebe',given:'fornecido',positional:'posicional',required:'obrigatório',missing:'faltando',local:'local',before:'antes',assigned:'atribuído',referenced:'referenciado',are:'são',be:'ser',with:'com',on:'em',at:'em',that:'que',this:'este / esta',if:'se'};
const has=w=>Object.prototype.hasOwnProperty.call(G,w);
const E=[
['py',/NameError/,'Nome não definido','O Python encontrou um nome (variável ou função) que ele não conhece neste ponto do código.','Confira a grafia, se a variável foi criada antes desta linha e se o import foi feito.'],
['py',/unsupported operand|can only concatenate|must be str, not/,'Tipos que não combinam','Você tentou operar valores de tipos diferentes, como somar um número com um texto.','Converta antes de operar, por exemplo int("5") ou str(5).'],
['py',/IndexError/,'Posição fora da lista','Você pediu uma posição que não existe. Em uma lista com n itens, as posições vão de 0 até n-1.','Confira o tamanho com len(lista) antes de acessar a posição.'],
['py',/ZeroDivisionError|division by zero/,'Divisão por zero','A divisão por zero não existe, e o Python interrompe o programa.','Teste se o divisor é diferente de zero antes de dividir.'],
['py',/IndentationError|expected an indented block/,'Indentação incorreta','O Python usa o recuo das linhas para marcar blocos de código, e esse recuo está faltando ou inconsistente.','Use sempre o mesmo recuo (por exemplo, 4 espaços) dentro de if, for, while e def.'],
['py',/invalid syntax|was never closed|unterminated|expected \':\'/,'Erro de sintaxe','O Python não entendeu como o código foi escrito. É comum faltar os dois-pontos ou deixar parêntese ou aspas sem fechar.','Olhe a linha indicada e também a anterior, procurando símbolos sem fechar.'],
['py',/ModuleNotFoundError|No module named/,'Módulo não encontrado','O módulo que você tentou importar não está instalado ou o nome está errado.','Confira o nome no import. Se for uma biblioteca externa, instale com pip install nome.'],
['py',/AttributeError/,'Atributo inexistente','O objeto não tem o atributo ou método que você tentou usar.','Verifique o tipo do objeto e a grafia. Um valor None também causa este erro.'],
['py',/KeyError/,'Chave inexistente','Você buscou em um dicionário uma chave que ele não tem.','Teste com "chave in dicionario" ou use dicionario.get("chave").'],
['py',/invalid literal for int/,'Texto que não é número','Você tentou converter para inteiro um texto que não representa um número.','Valide a entrada antes de converter, por exemplo com texto.isdigit().'],
['py',/RecursionError|maximum recursion depth/,'Recursão sem fim','Uma função chamou a si mesma tantas vezes que passou do limite permitido.','Crie um caso base que pare as chamadas e faça cada chamada se aproximar dele.'],
['py',/FileNotFoundError|No such file or directory/,'Arquivo não encontrado','O arquivo ou a pasta não existe no caminho informado.','Confira o nome e a pasta de onde o programa está sendo executado.'],
['py',/NoneType/,'Valor None','Você usou um valor None como se fosse outra coisa. Isso costuma acontecer quando uma função não devolve nada.','Verifique se a função tem return no caminho que foi executado.'],
['js',/ReferenceError|is not defined/,'Nome não definido','O JavaScript encontrou um nome (variável ou função) que ele não conhece neste ponto do código.','Confira a grafia e se a variável foi declarada com let, const ou var antes de ser usada.'],
['js',/Cannot read propert(y|ies) of (undefined|null)/,'Propriedade de valor vazio','Você tentou ler uma propriedade de algo que é undefined ou null, ou seja, que ainda não existe.','Verifique se o objeto foi criado, ou se os dados já chegaram, antes de acessá-lo.'],
['js',/is not a function/,'Não é uma função','Você chamou, com parênteses, algo que não é uma função.','Confira o nome, a grafia e o tipo do valor que está sendo chamado.'],
['js',/Assignment to constant/,'Constante reatribuída','Uma variável declarada com const não pode receber outro valor.','Use let se o valor precisa mudar.'],
['js',/Maximum call stack/,'Recursão sem fim','Uma função chamou a si mesma tantas vezes que estourou o limite de chamadas.','Crie um caso base que pare as chamadas.'],
['js',/Unexpected (token|end of input|identifier)/,'Símbolo inesperado','O JavaScript achou um símbolo onde não esperava, ou o código acabou antes de fechar chaves ou parênteses.','Procure chave, parêntese, colchete ou vírgula faltando ou sobrando perto da linha indicada.']];
const esc=s=>s.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const hist=()=>{try{const h=JSON.parse(localStorage.getItem('falp-h'));return Array.isArray(h)?h:[]}catch(x){return[]}};
function rh(){const h=hist();$('#hl').innerHTML=h.length?h.map((x,i)=>`<div class="px res"><p class="note">${esc(new Date(x.d).toLocaleString('pt-BR'))} · ${esc(String(x.l))}</p><pre>${esc(String(x.t).slice(0,160))}</pre><button type="button" class="btn ghost" data-i="${i}">Abrir de novo</button></div>`).join(''):'<p class="empty">Nenhuma análise ainda. Elas aparecem aqui depois que você usar o botão Explicar.</p>'}
function explain(){
const txt=$('#fin').value.trim(),o=$('#out');
if(!txt){o.innerHTML='<p class="empty">Cole uma mensagem de erro ou um código para começar.</p>';return}
const lg=$('#fl').value,L={Python:'py',JavaScript:'js'}[lg];
const e=E.find(x=>(!L||x[0]===L)&&x[1].test(txt));
const ws=[...new Set(txt.replace(/(['"`]).*?\1/g,' ').replace(/([a-z])([A-Z])/g,'$1 $2').toLowerCase().match(/[a-z]{2,}/g)||[])];
const kn=ws.filter(has),un=ws.filter(w=>!has(w)).slice(0,12);
o.innerHTML=(e?`<div class="px res"><h3>${e[2]}</h3><p><b>Linguagem:</b> ${e[0]==='py'?'Python':'JavaScript'}</p><p>${e[3]}</p><p><b>Como resolver:</b> ${e[4]}</p></div>`:'<div class="px res"><h3>Erro não reconhecido</h3><p>Este texto não está na base inicial de erros da FAP. Veja a tradução palavra por palavra abaixo e procure a mensagem completa na documentação da linguagem.</p></div>')+(kn.length?`<div class="px res"><h3>Palavra por palavra</h3><ul>${kn.map(w=>`<li><b>${w}</b>: ${G[w]}</li>`).join('')}</ul>${un.length?`<p class="note">Sem tradução na base: ${un.join(', ')}</p>`:''}</div>`:'');
const h=hist();h.unshift({t:txt.slice(0,2000),l:lg,d:Date.now()});try{localStorage.setItem('falp-h',JSON.stringify(h.slice(0,30)))}catch(x){}rh()}
$('#exp').onclick=explain;
$('#fin').onkeydown=e=>{if(e.key==='Enter'&&(e.ctrlKey||e.metaKey)){e.preventDefault();explain()}};
$('#clr').onclick=()=>{const t=$('#fin');t.value='';$('#out').innerHTML='';t.focus()};
$('#hc').onclick=()=>{try{localStorage.removeItem('falp-h')}catch(x){}rh()};
$('#hl').onclick=e=>{const b=e.target.closest('button');if(!b)return;const x=hist()[+b.dataset.i];if(x){$('#fin').value=String(x.t);$('#fl').value=String(x.l);tab('a')}};
rh();
const modes={login:'Entrar',register:'Criar conta',recover:'Enviar link'};
const setMode=m=>{$$('.tabs [role=tab]').forEach(t=>t.setAttribute('aria-selected',String(t.dataset.m===m)));$$('#f [data-m]').forEach(d=>d.hidden=!d.dataset.m.split(' ').includes(m));$('#go').textContent=modes[m];$('#pw').autocomplete=m==='login'?'current-password':'new-password'};
$$('.tabs [role=tab]').forEach(t=>t.onclick=()=>setMode(t.dataset.m));
$('#eye').onclick=e=>{const p=$('#pw'),s=p.type==='password';p.type=s?'text':'password';e.currentTarget.textContent=s?'Ocultar':'Mostrar';e.currentTarget.setAttribute('aria-pressed',String(s))};
$('#f').onsubmit=e=>e.preventDefault();
})();
