// JEE Mock Test - app.js
// This JavaScript provides the full logic for the JEE mock test UI.
// Include this file in an HTML page that contains the required elements:
// #palette, #questionText, #options, #timer, #subjectTabs, #prevBtn, #nextBtn, #markBtn, #clearBtn, #submitBtn

(function(window, document){
  'use strict';

  // === Questions (arrays) ===
  const chemistry = [
{q:"The molar mass of Na₂CO₃ is:", opts:["86 g/mol","106 g/mol","100 g/mol","96 g/mol"], ans:1},
{q:"The oxidation state of sulfur in H₂SO₄ is:", opts:["+2","+4","+6","−2"], ans:2},
{q:"Which of the following is a covalent compound?", opts:["NaCl","KBr","CH₄","MgO"], ans:2},
{q:"The pH of a neutral solution at 25 °C is:", opts:["0","7","14","1"], ans:1},
{q:"Which gas is liberated when zinc reacts with dilute HCl?", opts:["Oxygen","Hydrogen","Nitrogen","Carbon dioxide"], ans:1},
{q:"Avogadro’s number is approximately:", opts:["6.02×10^23","3.00×10^8","1.60×10^−19","9.8"], ans:0},
{q:"Which of the following is a strong acid?", opts:["H₂CO₃","CH₃COOH","HCl","NH₄OH"], ans:2},
{q:"The electron configuration of oxygen is:", opts:["1s²2s²2p⁴","1s²2s²2p⁶","1s²2s²2p³","1s²2s²2p⁵"], ans:0},
{q:"Which law states that equal volumes of gases at the same temperature and pressure contain equal numbers of molecules?", opts:["Boyle’s law","Avogadro’s law","Charles’ law","Dalton’s law"], ans:1},
{q:"The SI unit of molar mass is:", opts:["mol/L","g/mol","mol/g","L/mol"], ans:1},
{q:"Which of the following is an endothermic process?", opts:["Combustion of methane","Melting of ice","Condensation of steam","Neutralization"], ans:1},
{q:"The hybridization of carbon in CH₄ is:", opts:["sp","sp²","sp³","sp³d"], ans:2},
{q:"The common name of Ca(OH)₂ is:", opts:["Slaked lime","Quicklime","Lime stone","Gypsum"], ans:0},
{q:"Which element has the smallest atomic radius?", opts:["Li","Na","K","F"], ans:3},
{q:"The formula of potassium permanganate is:", opts:["KMnO₄","K₂MnO₄","K₂Mn₂O₇","KMn₂O₇"], ans:0},
{q:"Which among these is an allotrope of carbon?", opts:["Graphite","NaCl","SiO₂","CaCO₃"], ans:0},
{q:"The IUPAC name of CH₃CH₂OH is:", opts:["Methanol","Ethanol","Propanol","Butanol"], ans:1},
{q:"In the periodic table, ionization energy generally:", opts:["Increases down a group","Decreases down a group","Remains same","Randomly changes"], ans:1},
{q:"Which type of reaction is Zn + CuSO₄ → ZnSO₄ + Cu?", opts:["Combination","Decomposition","Displacement","Double displacement"], ans:2},
{q:"The number of neutrons in ₆¹⁴C is:", opts:["6","8","14","12"], ans:1},
{q:"The gas used in balloons because it is lighter than air is:", opts:["Hydrogen","Helium","Nitrogen","Oxygen"], ans:1},
{q:"Which of the following is not an alkali metal?", opts:["Li","Na","K","Mg"], ans:3},
{q:"The empirical formula of glucose (C₆H₁₂O₆) is:", opts:["CH₂O","C₆H₁₂O₆","C₂H₄O₂","C₃H₆O₃"], ans:0},
{q:"Which of the following has the highest electronegativity?", opts:["O","N","Cl","F"], ans:3},
{q:"Which is a noble gas?", opts:["He","N₂","CO₂","H₂"], ans:0}
];

  const physics = [
{q:"A body of mass 2 kg moves with velocity 3 m/s. Its kinetic energy is:", opts:["3 J","6 J","9 J","18 J"], ans:2},
{q:"The SI unit of force is:", opts:["Newton","Joule","Watt","Pascal"], ans:0},
{q:"A car accelerates from rest to 20 m/s in 5 s. The acceleration is:", opts:["4 m/s²","5 m/s²","2 m/s²","10 m/s²"], ans:0},
{q:"A sound wave of frequency 686 Hz travels at 343 m/s. Wavelength is:", opts:["2 m","0.5 m","1 m","5 m"], ans:1},
{q:"The time period of a mass–spring system is:", opts:["2π√(k/m)","2π√(m/k)","k/m","m/k"], ans:1},
{q:"Ohm’s law is given by:", opts:["I=V/R","V=IR","R=I/V","V=I/R"], ans:1},
{q:"A projectile is launched at u = 10 m/s and θ = 45°. Range is:", opts:["5 m","10 m","15 m","20 m"], ans:1},
{q:"The centripetal force for mass m, speed v, radius r is:", opts:["mv²r","mv/r","mv²/r","mvr"], ans:2},
{q:"Potential energy of a mass m at height h is:", opts:["mgh","1/2 mv²","mg/h","mh/g"], ans:0},
{q:"A resistor 6 Ω and 3 Ω are in series. Total resistance is:", opts:["2 Ω","3 Ω","6 Ω","9 Ω"], ans:3},
{q:"The SI unit of power is:", opts:["Joule","Watt","Newton","Pascal"], ans:1},
{q:"Light travels fastest in:", opts:["Water","Glass","Diamond","Air"], ans:3},
{q:"The speed of light in vacuum is approximately:", opts:["3×10^8 m/s","3×10^6 m/s","3×10^5 m/s","3×10^4 m/s"], ans:0},
{q:"Which quantity is a vector?", opts:["Speed","Distance","Displacement","Mass"], ans:2},
{q:"The work done when force F moves a body through displacement s in direction of force:", opts:["F/s","F s","F + s","F − s"], ans:1},
{q:"A wave has speed 20 m/s and wavelength 4 m. Frequency is:", opts:["5 Hz","4 Hz","8 Hz","10 Hz"], ans:0},
{q:"The momentum of a 2 kg body moving at 4 m/s is:", opts:["2","4","6","8"], ans:3},
{q:"Acceleration due to gravity on Earth’s surface is approximately:", opts:["9.8 m/s²","10.8 m/s²","8.9 m/s²","11.0 m/s²"], ans:0},
{q:"In uniform circular motion, velocity is:", opts:["Constant in magnitude and direction","Constant in magnitude but changing direction","Changing magnitude but constant direction","Constant in both"], ans:1},
{q:"A transformer works on the principle of:", opts:["Electrostatic induction","Electromagnetic induction","Heating effect","Chemical effect"], ans:1},
{q:"Which type of mirror is used in vehicle headlights?", opts:["Plane","Convex","Concave","Cylindrical"], ans:2},
{q:"A current of 2 A flows through a conductor for 3 s. Charge passed is:", opts:["1 C","3 C","6 C","9 C"], ans:2},
{q:"In series connection of capacitors, the total capacitance is:", opts:["Sum of capacitances","Less than smallest capacitor","Greater than largest capacitor","Equal to average"], ans:1},
{q:"The refractive index is given by:", opts:["n = v/c","n = c/v","n = c v","n = v − c"], ans:1},
{q:"A ray of light passes from air to glass. It:", opts:["Speeds up","Slows down","Stops","Changes frequency"], ans:1}
];

  const maths = [
{q:"The value of lim_{x→0} (sin 3x)/x is:", opts:["1","3","0","Infinity"], ans:1},
{q:"The derivative of sin²x is:", opts:["2 sin x cos x","cos²x","−sin²x","sin²x"], ans:0},
{q:"If a, b are roots of x² − 5x + 6 = 0, then 1/a + 1/b equals:", opts:["5","3","1","5/6"], ans:3},
{q:"The equation of the line through (1,2) perpendicular to 2x+3y−6=0 is:", opts:["3x−2y+1=0","2x+3y−8=0","3x+2y−7=0","2x−3y+4=0"], ans:0},
{q:"The determinant |2 3; 4 5| equals:", opts:["2","-2","-2","10"], ans:1},
{q:"If chord length =10 and distance from center =6, radius is:", opts:["5","6","8","7"], ans:2},
{q:"(x² −5x +6)/(x² −4) simplifies to:", opts:["(x−2)/(x−3)","(x+2)/(x−2)","(x+2)/(x−3)","(x−2)/(x+3)"], ans:1},
{q:"The derivative of e^{2x} cos x is:", opts:["e^{2x}(2 cos x − sin x)","e^{2x}(2 cos x + sin x)","e^{2x}(2 sin x + cos x)","e^{2x}(2 sin x − cos x)"], ans:0},
{q:"Solve: log_2 x + log_2 (x−2) = 3", opts:["4","5","6","8"], ans:1},
{q:"The sum of the infinite G.P. 5 + 2.5 + 1.25 + … is:", opts:["10","5","2.5","7.5"], ans:0},
{q:"If z = 3 + 4i, then |z| equals:", opts:["5","7","25","1"], ans:0},
{q:"The point of intersection of y = 2x + 3 and y = −x + 1 is:", opts:["(−2, −1)","(−1, 1)","(−1, 1)","(−2, −1)"], ans:0},
{q:"If f(x) = √(x+4), domain is:", opts:["x ≥ 4","x ≥ −4","x > −4","all real x"], ans:1},
{q:"The number of permutations of the letters of “BANANA” is:", opts:["60","120","360","720"], ans:0},
{q:"If mean of 5 numbers is 10, sum is:", opts:["2","15","50","100"], ans:2},
{q:"∫ 3x² dx is:", opts:["x³ + C","x³","x² + C","x⁴ + C"], ans:0},
{q:"d/dx (x ln x) is:", opts:["ln x + 1","ln x","1/x + x","x ln x"], ans:0},
{q:"Probability of getting head in one coin toss:", opts:["1","0","1/2","2"], ans:2},
{q:"Mean of 2,4,6,8 is:", opts:["5","4","6","10"], ans:0},
{q:"(x+y)² expands to:", opts:["x² + y²","x² + 2xy + y²","x² − 2xy + y²","x² − y²"], ans:1},
{q:"If |x − 3| = 5, possible values of x are:", opts:["−2, 8","2, 8","−2, −8","2, −8"], ans:0},
{q:"The slope of the line y = 3x − 7 is:", opts:["−7","3","1","0"], ans:1},
{q:"If A = π r², then dA/dr is:", opts:["2πr","πr","2r","π r²"], ans:0},
{q:"Solve: x² − 4x + 4 = 0", opts:["2","−2","4","0"], ans:0},
{q:"Value of sin 45° is:", opts:["√3/2","√2/2","1","0"], ans:1}
];

  // === Combine into flat array and subject indices ===
  const subjects = ['Physics','Chemistry','Maths'];
  const all = {Physics:physics,Chemistry:chemistry,Maths:maths};
  const flat = [];
  const subjectStart = {};
  subjects.forEach(s=>{ subjectStart[s]=flat.length; all[s].forEach(q=>flat.push(Object.assign({subject:s,user:null,marked:false},q))); });

  // === DOM references (will be resolved when DOM is ready) ===
  let palette, questionText, optionsEl, timerEl, subjectTabs;
  let prevBtn, nextBtn, markBtn, clearBtn, submitBtn;

  function initDOM(){
    palette = document.getElementById('palette');
    questionText = document.getElementById('questionText');
    optionsEl = document.getElementById('options');
    timerEl = document.getElementById('timer');
    subjectTabs = document.getElementById('subjectTabs');
    prevBtn = document.getElementById('prevBtn');
    nextBtn = document.getElementById('nextBtn');
    markBtn = document.getElementById('markBtn');
    clearBtn = document.getElementById('clearBtn');
    submitBtn = document.getElementById('submitBtn');
    if(!palette || !questionText || !optionsEl || !timerEl) {
      console.error('JEE Mock Test: Missing required DOM elements. Please include #palette, #questionText, #options, #timer in your HTML.');
      return false;
    }
    return true;
  }

  // === Build palette UI ===
  function buildPalette(){
    palette.innerHTML = '';
    flat.forEach((q, idx)=>{
      const d = document.createElement('div');
      d.className = 'qnum';
      d.textContent = idx+1;
      d.dataset.idx = idx;
      d.title = `${q.subject} — Q${ (idx - subjectStart[q.subject]) + 1 }`;
      d.addEventListener('click', ()=> goTo(idx) );
      palette.appendChild(d);
    });
    updatePalette();
  }

  // === Render question ===
  let current = 0;
  function render(){
    const q = flat[current];
    questionText.innerHTML = `<strong>Q${current+1} (${q.subject})</strong> — ${q.q}`;
    optionsEl.innerHTML = '';
    q.opts.forEach((opt, i)=>{
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'opt';
      btn.innerHTML = `<strong>${['A','B','C','D'][i]}.</strong> ${opt}`;
      if(q.user===i) btn.classList.add('selected');
      btn.addEventListener('click', ()=>{ q.user = i; updatePalette(); render(); });
      optionsEl.appendChild(btn);
    });
    updatePalette();
    // keep question visible on small screens
    questionText.scrollIntoView({behavior:'smooth', block:'center'});
  }

  function updatePalette(){
    if(!palette) return;
    const nodes = palette.querySelectorAll('.qnum');
    nodes.forEach((el, idx)=>{
      el.classList.toggle('ans', !!flat[idx].user);
      el.classList.toggle('marked', !!flat[idx].marked);
    });
  }

  // === Navigation helpers ===
  function goTo(i){ if(i<0||i>=flat.length) return; current = i; render(); }
  function next(){ if(current<flat.length-1) goTo(current+1); }
  function prev(){ if(current>0) goTo(current-1); }
  function mark(){ flat[current].marked = !flat[current].marked; updatePalette(); }
  function clearAns(){ flat[current].user = null; updatePalette(); render(); }

  // === Submit & scoring ===
  function submit(){
    if(!confirm('Submit test?')) return;
    let score=0, attempted=0, correct=0, scorable=0;
    flat.forEach(q=>{
      if(q.ans!==null && q.ans!==undefined) scorable++;
      if(q.user!==null && q.user!==undefined){
        attempted++;
        if(q.ans!==null && q.user===q.ans){ score+=4; correct++; }
        else if(q.ans!==null){ score-=1; }
      }
    });
    alert(`Score: ${score}\nCorrect: ${correct}\nAttempted: ${attempted}/${flat.length}\nScorable: ${scorable}/${flat.length}`);
  }

  // === Bind UI ===
  function bindUI(){
    if(subjectTabs) subjectTabs.addEventListener('click', (e)=>{ const b=e.target.closest('.subject-tab'); if(!b) return; const sub=b.dataset.sub; if(sub in subjectStart) goTo(subjectStart[sub]); });
    if(prevBtn) prevBtn.addEventListener('click', prev);
    if(nextBtn) nextBtn.addEventListener('click', next);
    if(markBtn) markBtn.addEventListener('click', mark);
    if(clearBtn) clearBtn.addEventListener('click', clearAns);
    if(submitBtn) submitBtn.addEventListener('click', submit);
  }

  // === Timer ===
  let total = 3*60*60;
  let timerInterval = null;
  function startTimer(){
    if(!timerEl) return;
    timerInterval = setInterval(()=>{
      if(total<=0){ clearInterval(timerInterval); alert('Time up! Auto-submitting.'); submit(); return; }
      total--;
      const h = Math.floor(total/3600), m = Math.floor((total%3600)/60), s = total%60;
      timerEl.textContent = `${h}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
    },1000);
  }

  // === Initialization ===
  function init(){
    if(!initDOM()) return;
    buildPalette();
    bindUI();
    // open Chemistry by default if present
    if(subjectStart['Chemistry']!==undefined) goTo(subjectStart['Chemistry']); else goTo(0);
    startTimer();
  }

  // Wait for DOM ready
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose for debugging if needed
  window._jeeMock = { flat, subjects, subjectStart, goTo, next, prev, submit };

})(window, document);
