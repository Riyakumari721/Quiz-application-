
    // ===== Question Bank =====
    // Each item: { q, options: [a,b,c,d], answer: index(0-3), explain, category }
    const BANK = [
      
     { q:"Which attribute is used to display an image in HTML?", options:["src","href","alt","link"], answer:0, explain:"source", category:"HTML" },
     {q: "What does HTTP stand for?", options: ["Hyper Text Transfer Protocol", "Hyper Tool Transfer Protocol", "Hyper Text Transmission Protocol", "High Text Transfer Protocol"], answer: 0},
  {q: "Which data structure uses FIFO?", options: ["Stack", "Queue", "Tree", "Graph"], answer: 1},
 {q: "Which of these is not a programming paradigm?", options: ["Object-Oriented", "Procedural", "Functional", "Hierarchical"], answer: 3},
 {q: "What is the full form of DNS?", options: ["Domain Name System", "Domain Network Service", "Direct Name Service", "Domain Number System"], answer: 0},
 {q: "Which tag is used for the largest heading in HTML?", options: ["<h1>", "<h6>", "<head>", "<header>"], answer: 0},
 {q: "Which company developed the Java programming language?", options: ["Sun Microsystems", "Microsoft", "Google", "Apple"], answer: 0},
  {q: "Which is the smallest unit of data in a computer?", options: ["Byte", "Bit", "Nibble", "Word"], answer: 1},
 {q: "What is the main function of ALU in CPU?", options: ["Store data", "Perform arithmetic and logic operations", "Control operations", "Input data"], answer: 1},
  {q: "Which of these is a backend programming language?", options: ["HTML", "CSS", "Python", "Bootstrap"], answer: 2},
  
  {q: "Which of these is a frontend framework?", options: ["React", "Django", "Flask", "Node.js"], answer: 0},
  {q: "What is a pointer in C language?", options: ["A variable that stores an address", "A variable that stores a value", "A function", "A type of array"], answer: 0},
 {q: "Which of the following is not an operating system?", options: ["Windows", "Linux", "Oracle", "MacOS"], answer: 2},
  {q: "Which is the correct way to start a Python program?", options: ["#start", "main()", "def main():", "print()"], answer: 2},
  {q: "Which of the following is a relational database?", options: ["MongoDB", "MySQL", "Cassandra", "Neo4j"], answer: 1},
      { q:"What does CSS stand for?", options:["Cascading Style Sheets","Computer Styling System","Creative Style Syntax","Coded Style Sheet"], answer:0, explain:"CSS = Cascading Style Sheets.", category:"Web" },
      { q:"Which method adds an element to the end of a JavaScript array?", options:["push()","add()","append()","insert()"], answer:0, explain:"array.push(item) appends to the end.", category:"JavaScript" },
      { q:"Which CSS property is used to change the background color?", options:["bgcolor","background-color","color-backgroung","background"], answer:1, explain:"background-color", category:"css" },
      { q:"Which function is used to display an alert box?", options:["alertBox()","showAlert()","msg()","alert()"], answer:3, explain:"alert()", category:"JavaScript" },
      { q:"Which property is used to change text color in CSS?", options:["text-style","font-color","color","text-color"], answer:2, explain:"CSS uses /* ... */ block comments.", category:"CSS" },
      { q:"Which keyword creates a constant in JavaScript?", options:["let","const","var","static"], answer:1, explain:"const declares a read-only binding.", category:"JavaScript" },
      { q:"Which operator is used to compare both value and type?", options:["==","!=","===","="], answer:2, explain:"===  is used to compare both value and type", category:"JavaScript" },
      { q:"What is the output of: Boolean(0) in JS?", options:["0","1","true","false"], answer:3, explain:"0 is falsy, so Boolean(0) is false.", category:"JavaScript" },
      { q:"Which property controls text size in CSS?", options:["font-weight","text-size","font-size","size"], answer:2, explain:"Use font-size to adjust text size.", category:"CSS" },
      { q:"Which HTTP status code means 'Not Found'?", options:["200","301","404","500"], answer:2, explain:"404 indicates the resource was not found.", category:"Web" },
      { q:"What does DOM stand for?", options:["Document Object Model","Data Object Module","Dynamic Output Mechanism","Document Oriented Map"], answer:0, explain:"DOM = Document Object Model.", category:"Web" },
      { q:"Which CSS layout uses rows and columns with areas?", options:["Flexbox","Floats","Grid","Positioning"], answer:2, explain:"CSS Grid supports 2D layouts.", category:"CSS" },
      { q:"Which array method returns a new array with elements that pass a test?", options:["map()","filter()","reduce()","find()"], answer:1, explain:"filter() selects items by predicate.", category:"JavaScript" },
      { q:"Which CSS property is used to change font style (like italic)?", options:["font-weight","font-style","font-family","text-decoration"], answer:1, explain:"This property specifically controls the slant of the text.", category:"CSS" },
      { q:"Which HTML attribute is used to provide alternative text for images?", options:["title","src","alt","aria"], answer:2, explain:"alt describes the image for accessibility.", category:"Web" },
      { q:"Which CSS unit scales with root font size?", options:["px","%","em","rem"], answer:3, explain:"rem is relative to the root font size.", category:"CSS" },
      { q:"Which keyword stops a loop in JS?", options:["stop","break","exit","halt"], answer:1, explain:"break exits loops/switch.", category:"JavaScript" },
        {q: "What does CPU stand for?", options: ["Central Process Unit", "Central Processing Unit", "Computer Personal Unit", "Central Power Unit"], answer: 1, explain:"Central Processing Unit"},
         {q: "What does RAM stand for?", options: ["Random Access Memory", "Read Access Memory", "Run Access Memory", "Read and Modify"], answer: 0, explain:"Random Access Memory"},
       {q:"What will typeof null return in JavaScript?", options:["null","undefined","object","boolean"], answer:2, explain:"you can not define", category:"JavaSceipt"},
     {q:"Which keyword is used to declare a variable in JavaScript (modern)?", options:["var","let","int","declare"], answer:1, explain:" declare variables with block-level scope.", category:"JavaSceipt"},
     {q:"Which method is used to display data in the browser console?", options:["console.print()","console.log()","print.console()","log.console()"], answer:1, explain:"you can not define", category:"JavaSceipt"},
      {q:"Which CSS positioning makes an element stay fixed on the screen even when scrolling?", options:["relative","absolute","fixed","sataic"], answer:2, explain:"fixed", category:"CSS"},

    ];

    // ===== Helpers =====
    const $ = s => document.querySelector(s);
    const $$ = s => Array.from(document.querySelectorAll(s));
    const shuffle = arr => arr.map(v=>[Math.random(),v]).sort((a,b)=>a[0]-b[0]).map(v=>v[1]);

    const ui = {
      start: $('#screenStart'), quiz: $('#screenQuiz'), end: $('#screenEnd'), review: $('#screenReview'),
      qText: $('#qText'), qCounter: $('#qCounter'), qCategory: $('#qCategory'), opts: $('#opts'), explain: $('#explain'),
      btnNext: $('#btnNext'), bar: $('#bar'), scoreTop: $('#scoreTop'), qTimer: $('#qTimer'),
      scoreFinal: $('#scoreFinal'), totalFinal: $('#totalFinal'), bestScore: $('#bestScore'), resultBadge: $('#resultBadge'),
      btnStart: $('#btnStart'), btnRestart: $('#btnRestart'), btnRestartTop: $('#btnRestartTop'), btnShare: $('#btnShare'), btnReview: $('#btnReview'), btnCloseReview: $('#btnCloseReview'),
      timerState: $('#timerState'), btnToggleTimer: $('#btnToggleTimer'), reviewList: $('#reviewList'),
    };

    const TOTAL = 10; // number of questions per game
    let questions = [];
    let idx = 0; // current question index
    let score = 0;
    let chosen = null; // chosen option index
    let allowAnswer = true;
    let enableTimer = false;
    let timer = null;
    let timeLeft = 15; // seconds per question
    const history = []; // store review data

    function init(){
      questions = shuffle(BANK).slice(0, TOTAL);
      idx = 0; score = 0; chosen = null; allowAnswer = true; history.length = 0;
      ui.scoreTop.textContent = score;
      ui.totalFinal.textContent = TOTAL;
      ui.bar.style.width = '0%';
      show(ui.start); hide(ui.quiz); hide(ui.end); hide(ui.review);
    }

    function show(el){ el.classList.remove('hidden'); }
    function hide(el){ el.classList.add('hidden'); }

    function startGame(){
      show(ui.quiz); hide(ui.start); hide(ui.end); hide(ui.review);
      renderQuestion();
    }

    function renderQuestion(){
      const q = questions[idx];
      ui.qText.textContent = q.q;
      ui.qCategory.textContent = q.category || 'General';
      ui.qCounter.textContent = `Question ${idx+1}/${TOTAL}`;
      ui.explain.classList.remove('show');
      ui.explain.textContent = '';
      ui.btnNext.disabled = true;
      allowAnswer = true; chosen = null;
      ui.opts.innerHTML = '';

      const letters = ['A','B','C','D'];
      q.options.forEach((text, i)=>{
        const btn = document.createElement('button');
        btn.className = 'opt';
        btn.setAttribute('role','button');
        btn.setAttribute('aria-pressed','false');
        btn.dataset.index = i;
        btn.innerHTML = `<div class="idx">${letters[i]||i+1}</div><div>${text}</div>`;
        btn.addEventListener('click', ()=>choose(i, btn));
        ui.opts.appendChild(btn);
      });

      // progress bar
      ui.bar.style.width = `${(idx)/TOTAL*100}%`;

      // timer
      stopTimer();
      if (enableTimer){ startTimer(15); } else { ui.qTimer.textContent = '—'; }
    }

    function choose(i, elBtn){
      if(!allowAnswer) return;
      allowAnswer = false;
      chosen = i;
      const q = questions[idx];
      const correct = q.answer;
      const optNodes = $$('#opts .opt');
      optNodes.forEach((node, k)=>{
        const state = (k===correct) ? 'correct' : (k===i ? 'wrong' : '');
        if(state) node.dataset.state = state;
        node.setAttribute('aria-pressed', k===i ? 'true' : 'false');
      });

      const isRight = i===correct;
      if(isRight) score++;
      ui.scoreTop.textContent = score;
      ui.explain.textContent = q.explain || '';
      if(q.explain) ui.explain.classList.add('show');
      ui.btnNext.disabled = false;
      stopTimer();

      history.push({
        q: q.q, options: q.options, answer: correct, picked: i, explain: q.explain, category: q.category
      });
    }

    function next(){
      if(idx < TOTAL-1){
        idx++;
        renderQuestion();
      } else {
        endGame();
      }
    }

    function endGame(){
      hide(ui.quiz); show(ui.end);
      ui.bar.style.width = '100%';
      ui.scoreFinal.textContent = score;
      ui.totalFinal.textContent = TOTAL;
      const pct = Math.round(score/TOTAL*100);
      ui.resultBadge.textContent = pct>=80 ? '🏆 Excellent' : pct>=50 ? '👍 Good' : '💪 Keep practicing';
      const best = Math.max(score, Number(localStorage.getItem('best_score')||0));
      localStorage.setItem('best_score', best);
      ui.bestScore.textContent = best;
      stopTimer();
    }

    function startTimer(seconds){
      timeLeft = seconds;
      ui.qTimer.textContent = `${timeLeft}s`;
      timer = setInterval(()=>{
        timeLeft--; ui.qTimer.textContent = `${timeLeft}s`;
        if(timeLeft<=0){
          clearInterval(timer); timer=null;
          // auto lock question, mark correct, proceed
          allowAnswer = false;
          const q = questions[idx];
          const correct = q.answer;
          const optNodes = $$('#opts .opt');
          optNodes.forEach((node, k)=>{ node.dataset.state = (k===correct)?'correct':''; });
          ui.explain.textContent = q.explain || 'Time\'s up!';
          ui.explain.classList.add('show');
          ui.btnNext.disabled = false;
          history.push({ q: q.q, options: q.options, answer: correct, picked: null, explain: q.explain, category: q.category });
        }
      },1000);
    }

    function stopTimer(){ if(timer){ clearInterval(timer); timer=null; } }

    function toggleTimer(){
      enableTimer = !enableTimer;
      ui.timerState.textContent = enableTimer ? 'On' : 'Off';
    }

    function share(){
      const text = `I scored ${score}/${TOTAL} in Quiz Quest!`;
      if(navigator.share){ navigator.share({ text }); }
      else{
        navigator.clipboard.writeText(text).then(()=>alert('Copied score to clipboard!'));
      }
    }

    function review(){
      ui.reviewList.innerHTML = '';
      history.forEach((h, i)=>{
        const box = document.createElement('div');
        box.className='bd';
        const letters=['A','B','C','D'];
        const picked = h.picked==null ? '—' : `${letters[h.picked]}: ${h.options[h.picked]}`;
        const correct = `${letters[h.answer]}: ${h.options[h.answer]}`;
        box.innerHTML = `
          <div style="font-weight:700;margin-bottom:6px">Q${i+1}. ${h.q}</div>
          <div class="meta">Category: ${h.category||'General'}</div>
          <div style="margin-top:6px">
            <div class="pill" style="margin-right:6px">You: ${picked}</div>
            <div class="pill">Correct: ${correct}</div>
          </div>
          ${h.explain?`<div class="explain show" style="margin-top:8px">${h.explain}</div>`:''}
          <hr style="border:none;border-top:1px solid rgba(255,255,255,.08);margin:14px 0" />
        `;
        ui.reviewList.appendChild(box);
      });
      hide(ui.end); show(ui.review);
    }

    // ===== Events =====
    ui.btnStart.addEventListener('click', startGame);
    ui.btnNext.addEventListener('click', next);
    ui.btnRestart.addEventListener('click', init);
    ui.btnRestartTop.addEventListener('click', init);
    ui.btnShare.addEventListener('click', share);
    ui.btnReview.addEventListener('click', review);
    ui.btnCloseReview.addEventListener('click', ()=>{ hide(ui.review); show(ui.end); });
    ui.btnToggleTimer.addEventListener('click', toggleTimer);

    // Keyboard shortcuts
    window.addEventListener('keydown', (e)=>{
      if(ui.quiz.classList.contains('hidden')) return;
      const num = parseInt(e.key,10);
      if(num>=1 && num<=4){ const btn = ui.opts.querySelectorAll('.opt')[num-1]; btn && btn.click(); }
      if(e.key==='n' || e.key==='N' || e.key==='Enter'){ if(!ui.btnNext.disabled) next(); }
    });

    // Boot
    (function(){
      const best = Number(localStorage.getItem('best_score')||0);
      ui.bestScore.textContent = best;
      init();
    })();
