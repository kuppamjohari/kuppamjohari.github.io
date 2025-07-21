document.addEventListener('DOMContentLoaded', () => {
  const desktop = document.getElementById('desktop');
  const audio = {};
  let audioInitialized = false;

  // Audio setup
  

  // Resume File System (same as before)
  const fileSystem = {
    '/home/kuppam': {
      type: 'directory',
      children: {
        'Desktop': { type: 'directory', children: {} },
        'Documents': { type: 'directory', children: {} },
        'restricted': {
          type: 'directory',
          children: {
            'aboutme.txt': {
              type: 'file',
              content: `ABOUT KUPPAM JOHARI
========================

Passionate cybersecurity professional and ethical hacker with expertise in web application security and network defense. Dedicated to securing digital assets through penetration testing and vulnerability assessment.

🔗 Contact Information:
- Email: kuppamjohari@gmail.com
- Phone: +91 7989564301
- LinkedIn: @kuppamjohari
- GitHub: @kuppamjohari
- Website: kuppamjohari.github.io
- Handle: theflyingwolf

🌟 Specializations:
- Web Application & API Penetration Testing
- Vulnerability Assessment & Penetration Testing (VAPT)  
- Network Security Analysis
- Ethical Hacking & Red Team Operations
- Security Operations Center (SOC) Implementation

🎯 CTF Platforms:
- TryHackMe: Active participant
- HackTheBox: Regular contributor

Languages:
- English (Professional)
- Telugu (Native) 
- Hindi (Professional)`
            },
            'education.txt': {
              type: 'file',
              content: `EDUCATION
=========

🎓 MADANAPALLE INSTITUTE OF TECHNOLOGY & SCIENCE
   Bachelor of Technology in Computer Science Engineering (Cybersecurity)
   Duration: 2020 - 2024
   CGPA: 8.27/10.0
   
   Specialization Focus:
   - Cybersecurity Fundamentals
   - Network Security Protocols
   - Ethical Hacking Methodologies  
   - Digital Forensics
   - Cryptography and Information Security
   - Secure Software Development

   Academic Achievements:
   - Consistent academic performance with 8.27 CGPA
   - Active participation in cybersecurity research
   - Published research paper on automated hacking frameworks
   - Completed multiple industry-relevant projects`
            },
            'skills.txt': {
              type: 'file',
              content: `TECHNICAL SKILLS
================

🔐 CORE SECURITY SKILLS:
- Network Security
- Ethical Hacking  
- Web Application & API Penetration Testing
- Vulnerability Assessment & Penetration Testing (VAPT)
- Security Operations Center (SOC) Operations
- ISO 27001 & ISO 27002 Compliance

🛠️ SECURITY TOOLS:
- Wireshark (Network Protocol Analyzer)
- Burp Suite (Web Application Security)
- Nessus (Vulnerability Scanner)
- Metasploit Framework (Penetration Testing)
- x64dbg (Dynamic Analysis)
- IDA Pro (Reverse Engineering)
- Acunetix (Web Vulnerability Scanner)
- Suricate (Intrusion Detection)
- OWASP ZAP (Security Testing)
- Snort (Network Intrusion Detection)
- NMAP (Network Mapping & Port Scanning)

💻 PROGRAMMING & DEVELOPMENT:
Languages:
- Python (Security Automation & Scripting)
- Shell Scripting (BASH)
- HTML/CSS (Web Development)
- Assembly Language (Low-level Analysis)
- MySQL (Database Management)
- Android Development

☁️ CLOUD & PLATFORMS:
- Amazon Web Services (AWS)
- Microsoft Azure
- GitHub Version Control`
            },
            'experience.txt': {
              type: 'file',
              content: `PROFESSIONAL EXPERIENCE
=======================

💼 FREELANCE CYBERSECURITY CONSULTANT
   Status: Current (March 2024 - Present)
   
   Key Responsibilities:
   - Supporting startups and institutions to strengthen security posture
   - Conducting Vulnerability Assessment & Penetration Testing (VAPT)
   - Basic Security Operations Center (SOC) operations
   - Security compliance auditing and recommendations
   - Incident response and threat analysis
   - Security awareness training and consultation

💻 COMPUTER OPERATOR | BHASHYAM SCHOOL
   Duration: April 2020 - May 2021
   Location: Madanapalle, India
   
   Responsibilities:
   - Provided comprehensive technical support to staff and students
   - Maintained and monitored network operations
   - Troubleshooted hardware and software issues
   - Managed computer lab facilities and equipment`
            },
            'projects.txt': {
              type: 'file',
              content: `CYBERSECURITY PROJECTS
======================

🔬 SIMULATED CYBER ATTACK & DEFENSE LAB (SOC)
   Duration: November 2024 - February 2025
   Status: Ongoing
   
   Technologies Used:
   - SonicWall (Next-Generation Firewall)
   - Squid Proxy (Web Filtering & Monitoring)
   - SIEM Solutions for Log Analysis
   - Network Monitoring Tools

🤖 AUTOMATED WEB APPLICATION HACKING FRAMEWORK
   Duration: January 2024 - April 2024
   
   Key Features:
   - Automated reconnaissance and information gathering
   - Dynamic vulnerability scanning and assessment
   - Exploitation module with payload generation
   - Comprehensive reporting and documentation`
            },
            'certifications.txt': {
              type: 'file',
              content: `PROFESSIONAL CERTIFICATIONS
===========================

🏆 MICROSOFT CERTIFICATIONS:
✅ Microsoft Certified Educator (MCE)
✅ Microsoft Certified: Security, Compliance, and Identity Fundamentals  
✅ Microsoft 365 Certified: Fundamentals
✅ Microsoft Certified: Azure Fundamentals
✅ Microsoft Certified: Dynamics 365 Fundamentals (CRM)

🔐 CYBERSECURITY CERTIFICATIONS:
✅ Certified Network Security Practitioner (CNSP)
✅ EC-Council (CEH Trained v10) - Certified Ethical Hacker Training
✅ Advent of Cyber 2024 - TryHackMe

☁️ CLOUD & TECHNOLOGY:
✅ Wipro TalentNext (Cisco Cybersecurity)
✅ Wipro TalentNext (Cloud Computing - Foundation)
✅ APSSDC Virtual Internship (AWS - Cloud Computing [Online])

Total Certifications: 14+ Professional Certifications`
            },
            'contact.txt': {
              type: 'file',
              content: `CONTACT INFORMATION
===================

👤 KUPPAM JOHARI
   Cybersecurity Professional | Ethical Hacker | theflyingwolf

📧 EMAIL: kuppamjohari@gmail.com
📱 PHONE: +91 7989564301
🌐 ONLINE PRESENCE:
   LinkedIn: linkedin.com/in/kuppamjohari
   GitHub: github.com/kuppamjohari  
   Website: kuppamjohari.github.io`
            }
          }
        }
      }
    }
  };

  // App Data (same as before)
  const appData = {
    files: { 
      title: '📁 /home/kuppam/restricted', 
      content: `<div class="file-explorer-body">
        <div class="current-path">/home/kuppam/restricted</div>
        <div class="files-container"></div>
      </div>` 
    },
    terminal: { 
      title: '🖥️ Terminal - kuppam@kali:~', 
      content: `<div class="terminal-body">
        <div class="terminal-output"></div>
        <div class="terminal-input-line">
          <div class="terminal-prompt">
            <span class="user">kuppam@kali</span>:<span class="path">~</span>$ 
          </div>
          <input type="text" id="terminal-input" autocomplete="off" spellcheck="false" />
        </div>
      </div>` 
    },
    about: { 
      title: '👤 About Me - Kuppam Johari', 
      content: `<div class="about-container">
        <img src="assets/imgs/johari-k.jpg" class="profile-image" onerror="this.style.display='none'">
        <h2 class="profile-name">Kuppam Johari</h2>
        <p class="profile-description">
          Passionate cybersecurity professional and ethical hacker with expertise in web application security and network defense.
        </p>
      </div>` 
    },
    skills: {
      title: '⚡ Technical Skills',
      content: `<div class="content-section">
        <div class="skill-category">
          <h4>🔐 Core Security Skills</h4>
          <div class="skill-list">
            <span class="skill-tag">Network Security</span>
            <span class="skill-tag">Ethical Hacking</span>
            <span class="skill-tag">VAPT</span>
            <span class="skill-tag">Web App Pentesting</span>
          </div>
        </div>
        <div class="skill-category">
          <h4>🛠️ Security Tools</h4>
          <div class="skill-list">
            <span class="skill-tag">Burp Suite</span>
            <span class="skill-tag">Metasploit</span>
            <span class="skill-tag">Wireshark</span>
            <span class="skill-tag">Nessus</span>
          </div>
        </div>
      </div>`
    },
    projects: {
      title: '🔧 Cybersecurity Projects',
      content: `<div class="content-section">
        <div class="project-item">
          <div class="project-title">Simulated Cyber Attack & Defense Lab (SOC)</div>
          <div class="project-date">November 2024 - February 2025</div>
          <p>Comprehensive SOC environment using SonicWall, Squid Proxy</p>
        </div>
        <div class="project-item">
          <div class="project-title">Automated Web Application Hacking Framework</div>
          <div class="project-date">January 2024 - April 2024</div>
          <p>Intelligent framework automating vulnerability discovery</p>
        </div>
      </div>`
    }
  };

  const openWindows = {};
  let zIndexCounter = 10;
  let currentPath = '/home/kuppam';

  // Terminal Commands (same as before)
  const terminalCommands = {
    help: () => `Available commands:
ls          - List directory contents  
cd <dir>    - Change directory
cat <file>  - Display file contents
pwd         - Show current directory
whoami      - Display current user
clear       - Clear terminal
tree        - Show directory structure
skills      - Show technical skills
contact     - Display contact information
resume      - Show resume summary

Type any command followed by Enter. Use 'ls' to see available files.`,

    ls: (args) => {
      const path = args[0] || currentPath;
      const dir = getDirectoryAtPath(path);
      if (!dir || dir.type !== 'directory') {
        return `ls: cannot access '${path}': No such file or directory`;
      }
      
      let result = '';
      Object.keys(dir.children).forEach(name => {
        const item = dir.children[name];
        if (item.type === 'directory') {
          result += `📁 ${name}\n`;
        } else {
          result += `📄 ${name}\n`;
        }
      });
      return result || 'Directory is empty';
    },

    cd: (args) => {
      if (!args[0]) return `Current directory: ${currentPath}`;
      
      let newPath;
      if (args[0].startsWith('/')) {
        newPath = args[0];
      } else if (args[0] === '..') {
        const pathParts = currentPath.split('/').filter(p => p);
        pathParts.pop();
        newPath = '/' + pathParts.join('/');
        if (newPath === '/') newPath = '/home/kuppam';
      } else if (args[0] === 'restricted' && currentPath === '/home/kuppam') {
        newPath = '/home/kuppam/restricted';
      } else {
        newPath = currentPath + (currentPath.endsWith('/') ? '' : '/') + args[0];
      }

      const dir = getDirectoryAtPath(newPath);
      if (!dir || dir.type !== 'directory') {
        return `cd: no such file or directory: ${args[0]}`;
      }
      
      currentPath = newPath;
      updateTerminalPrompt();
      return `Changed to ${currentPath}`;
    },

    cat: (args) => {
      if (!args[0]) return 'cat: missing file operand';
      
      const filePath = args[0].startsWith('/') ? args[0] : `${currentPath}/${args[0]}`;
      const file = getFileAtPath(filePath);
      
      if (!file) {
        return `cat: ${args[0]}: No such file or directory`;
      }
      
      if (file.type !== 'file') {
        return `cat: ${args[0]}: Is a directory`;
      }
      
      return file.content;
    },

    pwd: () => currentPath,

    whoami: () => `kuppam
Current user: Kuppam Johari (theflyingwolf)
Role: Cybersecurity Professional & Ethical Hacker`,

    clear: () => 'CLEAR_TERMINAL',

    skills: () => `🔐 TECHNICAL SKILLS SUMMARY
============================

Core Security: Network Security, Ethical Hacking, VAPT, Web App Pentesting
Tools: Burp Suite, Metasploit, Wireshark, Nessus, NMAP, OWASP ZAP
Programming: Python, Shell/BASH, HTML/CSS, Assembly, MySQL  
Cloud: AWS, Azure, Cloud Security`,

    contact: () => `📞 CONTACT KUPPAM JOHARI
========================

📧 Email: kuppamjohari@gmail.com
📱 Phone: +91 7989564301  
💼 LinkedIn: linkedin.com/in/kuppamjohari
🐙 GitHub: github.com/kuppamjohari`,

    resume: () => `📄 RESUME SUMMARY - KUPPAM JOHARI
=================================

🎓 B.Tech CSE (Cybersecurity) | MITS | 2020-2024 | CGPA: 8.27
💼 Freelance Cybersecurity Consultant (2024-Present)
🔍 Discovered CVE-2025-4863 - Critical SQL Injection
📊 Published Research: "Automated Web Application Hacking Framework"`
  };

  // Helper functions
  function getDirectoryAtPath(path) {
    const parts = path.split('/').filter(p => p);
    let current = fileSystem['/home/kuppam'];
    
    for (let part of parts.slice(2)) {
      if (current.children && current.children[part]) {
        current = current.children[part];
      } else {
        return null;
      }
    }
    return current;
  }

  function getFileAtPath(path) {
    const parts = path.split('/').filter(p => p);
    let current = fileSystem['/home/kuppam'];
    
    for (let part of parts.slice(2)) {
      if (current.children && current.children[part]) {
        current = current.children[part];
      } else {
        return null;
      }
    }
    return current;
  }

  function updateTerminalPrompt() {
    const prompts = document.querySelectorAll('.terminal-prompt .path');
    const shortPath = currentPath.replace('/home/kuppam', '~');
    prompts.forEach(p => p.textContent = shortPath);
  }

  // 🔧 FIXED: Window creation with proper initialization timing
  function createWindow(appId, options = {}) {
    if (openWindows[appId] && !openWindows[appId].classList.contains('minimized')) {
      openWindows[appId].style.zIndex = ++zIndexCounter;
      return;
    }
    
    if (openWindows[appId] && openWindows[appId].classList.contains('minimized')) {
      openWindows[appId].classList.remove('minimized');
      openWindows[appId].style.zIndex = ++zIndexCounter;
      return;
    }
    
    if (audio.open) audio.open.triggerAttackRelease('C4', '8n');
    
    const data = appData[appId];
    const win = document.createElement('div');
    win.className = 'window';
    win.dataset.appId = appId;
    win.style.left = options.left || `${Math.random() * 30 + 10}vw`;
    win.style.top = options.top || `${Math.random() * 20 + 10}vh`;
    win.style.width = options.width || (appId === 'terminal' ? '700px' : '600px');
    win.style.height = options.height || (appId === 'terminal' ? '500px' : '450px');
    win.style.zIndex = ++zIndexCounter;

    win.innerHTML = `
      <div class="window-header">
        <span class="window-title">${data.title}</span>
        <div class="window-controls">
          <button class="min-btn"></button>
          <button class="max-btn"></button>
          <button class="close-btn"></button>
        </div>
      </div>
      <div class="window-body">${data.content}</div>
    `;
    
    desktop.appendChild(win);
    openWindows[appId] = win;
    
    const dockIcon = document.querySelector(`.dock-icon[data-app="${appId}"]`);
    if (dockIcon) dockIcon.classList.add('active');

    // Window controls
    win.querySelector('.close-btn').addEventListener('click', () => {
      if (audio.close) audio.close.triggerAttackRelease('C3', '8n');
      win.remove();
      delete openWindows[appId];
      if (dockIcon) dockIcon.classList.remove('active');
    });
    
    win.querySelector('.min-btn').addEventListener('click', () => {
      win.classList.add('minimized');
    });
    
    win.querySelector('.max-btn').addEventListener('click', () => {
      const isMaximized = win.classList.toggle('maximized');
      if (isMaximized) {
        win.dataset.oldStyles = JSON.stringify({
          left: win.style.left,
          top: win.style.top,
          width: win.style.width,
          height: win.style.height,
          transform: win.style.transform
        });
        win.style.left = '0';
        win.style.top = '0';
        win.style.width = '100%';
        win.style.height = 'calc(100vh - 32px)';
        win.style.transform = 'none';
      } else {
        const oldStyles = JSON.parse(win.dataset.oldStyles);
        Object.assign(win.style, oldStyles);
      }
    });

    win.addEventListener('mousedown', () => {
      if (audio.click) audio.click.triggerAttackRelease('C2', '8n', Tone.now(), 0.01);
      win.style.zIndex = ++zIndexCounter;
    });

    // 🔧 CRITICAL FIX: Use requestAnimationFrame to ensure DOM is ready
    requestAnimationFrame(() => {
      if (appId === 'terminal') initTerminal(win);
      if (appId === 'files') initFileExplorer(win);
    });

    makeWindowInteractive(win);
  }

  // Terminal initialization - Enhanced error handling
  function initTerminal(win) {
    const input = win.querySelector('#terminal-input');
    const output = win.querySelector('.terminal-output');
    
    // 🔧 SAFETY CHECK: Ensure elements exist
    if (!input || !output) {
      console.error('Terminal elements not found, retrying...');
      setTimeout(() => initTerminal(win), 100);
      return;
    }
    
    // Welcome message
    appendTerminalLine(output, `Welcome to Kali Linux Resume Showcase!
===========================================

👤 User: Kuppam Johari (theflyingwolf)
💼 Role: Cybersecurity Professional & Ethical Hacker  

Type 'help' for commands, 'ls' to see files, 'cd restricted' to explore resume.
`);

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const command = input.value.trim();
        if (command) {
          appendTerminalLine(output, `${getCurrentPrompt()}${command}`, 'command');
          const result = executeCommand(command);
          
          if (result === 'CLEAR_TERMINAL') {
            output.innerHTML = '';
          } else if (result === 'CLOSE_TERMINAL') {
            win.querySelector('.close-btn').click();
            return;
          } else {
            appendTerminalLine(output, result);
          }
        } else {
          appendTerminalLine(output, getCurrentPrompt(), 'command');
        }
        input.value = '';
        output.scrollTop = output.scrollHeight;
      }
    });

    // 🔧 FIX: Enhanced focus management
    setTimeout(() => {
      input.focus();
    }, 100);
    
    win.addEventListener('click', (e) => {
      // Only focus if clicking in terminal area, not on controls
      if (!e.target.closest('.window-controls')) {
        setTimeout(() => input.focus(), 10);
      }
    });
  }

  function getCurrentPrompt() {
    const shortPath = currentPath.replace('/home/kuppam', '~');
    return `kuppam@kali:${shortPath}$ `;
  }

  function appendTerminalLine(output, text, type = 'output') {
    const line = document.createElement('div');
    line.className = `terminal-line ${type}`;
    line.textContent = text;
    output.appendChild(line);
  }

  function executeCommand(commandLine) {
    const parts = commandLine.trim().split(/\s+/);
    const command = parts[0].toLowerCase();
    const args = parts.slice(1);

    if (terminalCommands[command]) {
      return terminalCommands[command](args);
    } else {
      if (audio.error) audio.error.triggerAttackRelease('A2', '8n');
      return `bash: ${command}: command not found

💡 Tip: Type 'help' to see available commands`;
    }
  }

  // File Explorer initialization
  function initFileExplorer(win) {
    const container = win.querySelector('.files-container');
    if (!container) return;
    
    function loadDirectory() {
      const dir = getDirectoryAtPath('/home/kuppam/restricted');
      if (!dir) return;
      
      container.innerHTML = '';
      
      Object.keys(dir.children).forEach(name => {
        const item = dir.children[name];
        const fileEl = document.createElement('div');
        fileEl.className = 'file-item';
        fileEl.innerHTML = `
          <span class="file-icon">${item.type === 'directory' ? '📁' : '📄'}</span>
          <span class="file-name">${name}</span>
        `;
        
        fileEl.addEventListener('click', () => {
          if (item.type === 'file') {
            const fileAppId = `file_${name.replace('.', '_')}`;
            const fileData = {
              title: `📄 ${name}`,
              content: `<div style="padding: 16px; font-family: 'Fira Code', monospace; white-space: pre-wrap; line-height: 1.4; font-size: 0.85rem;">${item.content}</div>`
            };
            
            if (!appData[fileAppId]) {
              appData[fileAppId] = fileData;
            }
            
            createWindow(fileAppId, { width: '600px', height: '500px' });
          }
        });
        
        container.appendChild(fileEl);
      });
    }
    
    loadDirectory();
  }

  // Make windows draggable and resizable
  function makeWindowInteractive(element) {
    interact(element).draggable({
      allowFrom: '.window-header',
      listeners: {
        start() {
          if (audio.click) audio.click.triggerAttackRelease('C3', '8n', Tone.now(), 0.01);
        },
        move(event) {
          if (element.classList.contains('maximized')) return;
          
          const x = (parseFloat(element.getAttribute('data-x')) || 0) + event.dx;
          const y = (parseFloat(element.getAttribute('data-y')) || 0) + event.dy;
          
          element.style.transform = `translate(${x}px, ${y}px)`;
          element.setAttribute('data-x', x);
          element.setAttribute('data-y', y);
        }
      }
    }).resizable({
      edges: { left: true, right: true, bottom: true, top: true },
      listeners: {
        move(event) {
          if (element.classList.contains('maximized')) return;
          
          let x = (parseFloat(element.getAttribute('data-x')) || 0);
          let y = (parseFloat(element.getAttribute('data-y')) || 0);
          
          element.style.width = event.rect.width + 'px';
          element.style.height = event.rect.height + 'px';
          
          x += event.deltaRect.left;
          y += event.deltaRect.top;
          
          element.style.transform = `translate(${x}px, ${y}px)`;
          element.setAttribute('data-x', x);
          element.setAttribute('data-y', y);
        }
      },
      modifiers: [
        interact.modifiers.restrictSize({
          min: { width: 320, height: 220 }
        })
      ]
    });
  }

  // Header functionality
  function initHeader() {
    const header = document.getElementById('kali-header');
    const dropdownMenus = document.getElementById('dropdown-menus');
    let activeMenu = null;

    function updateClock() {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit'
      });
      const dateString = now.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric'
      });
      document.getElementById('header-clock').textContent = `${dateString}, ${timeString}`;
    }
    
    updateClock();
    setInterval(updateClock, 1000);

    function showMenu(menuId, element) {
      hideAllMenus();
      const menu = document.getElementById(menuId + '-menu');
      if (menu) {
        menu.classList.add('show');
        element.classList.add('active');
        
        const rect = element.getBoundingClientRect();
        menu.style.left = rect.left + 'px';
        
        activeMenu = menu;
        if (audio.click) audio.click.triggerAttackRelease('C3', '8n', Tone.now(), 0.1);
      }
    }

    function hideAllMenus() {
      document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.classList.remove('show');
      });
      document.querySelectorAll('.header-menu-item, .header-user').forEach(item => {
        item.classList.remove('active');
      });
      activeMenu = null;
    }

    header.addEventListener('click', (e) => {
      const menuItem = e.target.closest('[data-menu]');
      if (menuItem) {
        const menuId = menuItem.dataset.menu;
        if (activeMenu && activeMenu.id === menuId + '-menu') {
          hideAllMenus();
        } else {
          showMenu(menuId, menuItem);
        }
      }
    });

    dropdownMenus.addEventListener('click', (e) => {
      const menuItem = e.target.closest('.menu-item');
      if (menuItem) {
        const appId = menuItem.dataset.app;
        if (appId) {
          createWindow(appId);
        }
        hideAllMenus();
        if (audio.click) audio.click.triggerAttackRelease('C2', '8n', Tone.now(), 0.1);
      }
    });

    document.addEventListener('click', (e) => {
      if (!header.contains(e.target) && !dropdownMenus.contains(e.target)) {
        hideAllMenus();
      }
    });
  }

  // Initialize desktop
  function initDesktop() {
    initHeader();
    
    const dock = document.getElementById('dock');
    const iconArea = document.getElementById('desktop-icons-container');
    
    const dockApps = [
      {
        id: 'terminal',
        title: 'Terminal',
        iconUrl: 'assets/imgs/terminal.png'
      },
      {
        id: 'files',
        title: 'File Manager',
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/716/716784.png'
      },
      {
        id: 'about',
        title: 'About Me',
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/1077/1077114.png'
      },
      {
        id: 'skills',
        title: 'Skills',
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/4727/4727424.png'
      },
      {
        url: 'https://linkedin.com/in/kuppamjohari',
        title: 'LinkedIn',
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/174/174857.png'
      }
    ];

    dockApps.forEach(app => {
      const el = document.createElement('div');
      el.className = 'dock-icon';
      el.title = app.title;
      
      const img = document.createElement('img');
      img.src = app.iconUrl;
      img.alt = app.title;
      img.className = 'dock-icon-img';
      img.onerror = function() {
        this.style.display = 'none';
        el.style.backgroundColor = 'var(--kali-accent)';
        el.innerHTML = `<span style="font-size:12px;color:white;font-weight:bold;">${app.title.charAt(0)}</span>`;
      };
      
      el.appendChild(img);
      
      if (app.id) el.dataset.app = app.id;
      if (app.url) el.dataset.url = app.url;
      dock.appendChild(el);
    });

    const shortcut = document.createElement('div');
    shortcut.className = 'desktop-icon';
    shortcut.dataset.app = 'files';
    shortcut.style.top = '20px';
    shortcut.style.left = '20px';
    shortcut.innerHTML = `
      <img src="https://cdn-icons-png.flaticon.com/512/716/716784.png" alt="Restricted">
      <span>Restricted</span>
    `;
    iconArea.appendChild(shortcut);

    dock.addEventListener('click', (e) => {
      const icon = e.target.closest('.dock-icon');
      if (!icon) return;
      
      if (icon.dataset.app) {
        createWindow(icon.dataset.app);
      } else if (icon.dataset.url) {
        window.open(icon.dataset.url, '_blank');
      }
    });

    shortcut.addEventListener('click', () => {
      if (audio.click) audio.click.triggerAttackRelease('C2', '8n', Tone.now(), 0.1);
      createWindow('files');
    });

    // 🔧 FIXED: Delayed auto-open with proper sequencing
    setTimeout(() => {
      createWindow('about', { left: '5%', top: '10%', width: '500px', height: '400px' });
      
      // Delay terminal creation to ensure proper initialization
      setTimeout(() => {
        createWindow('terminal', { left: '30%', top: '15%', width: '700px', height: '500px' });
      }, 200);
      
      setTimeout(() => {
        createWindow('files', { left: '55%', top: '20%', width: '600px', height: '450px' });
      }, 400);
    }, 1000);
  }

  // Audio initialization
  const startAudio = async () => {
    await Tone.start();
    setupAudio();
    document.body.removeEventListener('click', startAudio);
  };
  document.body.addEventListener('click', startAudio);

  initDesktop();
});
