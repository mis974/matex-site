(function(){
"use strict";
const $=(s,r=document)=>r.querySelector(s);

const history=[
["jp",1921,"Matoba Shokai founded by the founder, Jinjiro Matoba. Production of celluloid bicycle frame pumps started."],
["jp",1926,"Production system for frame pumps revised for exclusive export around the world."],
["jp",1937,"Sales of steel balls started."],
["jp",1948,'Company trademark registered as "Matex".'],
["jp",1950,"Company status upgraded to limited company."],
["jp",1955,"Plastic injection molding machines installed. Production and sales of commercial precision parts and household goods made of nylon resin started; all kinds of heatable and malleable resins handled from then until the present."],
["jp",1972,"R&D into planetary gear module systems started. From then on, various industrial patents acquired."],
["jp",1973,'Company renamed "Matex". Yao Plant opened.'],
["jp",1976,"Sales of planetary gear module systems started."],
["jp",1983,"Tokyo Office opened."],
["jp",1990,"Matex built an additional reinforced two-story warehouse with fireproof cabinets for molds, with a storage capacity of 1,000 molds, at the Yao factory site."],
["gr",1996,"Matex International, Inc. was established."],
["ph-c",1997,"First overseas factory established in Laguna, Philippines."],
["gr",2001,"80th anniversary of the company's founding."],
["ph-c",2004,"Philippines No. 3 Plant completed. Matex Planetary Drive International, Inc. was established."],
["cn",2005,"Wuxi Matex Precision Co., Ltd. started in Jiangsu Province as the No. 2 overseas production base."],
["ph-c",2010,"Matex Philippines expanded its production through addition of machineries."],
["ph-c",2017,"Matex Philippines 20th Anniversary."],
["ph-c",2018,"Matex Philippines acquired new warehouse and production site."],
["gr",2019,"Announced a precision reduction gear for robots jointly developed with Sumitomo Heavy Industries, Ltd."],
["jp",2020,"100th anniversary of the company's founding. Expanded Osaka 2nd Factory to the adjacent land."],
["sg",2025,"STAR MATEX PTE. LTD. was established in Singapore as the group's administrative headquarters."]];
$("#timeline").innerHTML=history.map(([c,y,t])=>`<div class="ev ${c}"><b>${y}</b><p>${t}</p></div>`).join("");

const values=[["Quality","Striving for excellence, the strength that attracts customers."],["Commitment","Committed to our customers, our goals and our vision."],["Integrity","Honesty and doing the right thing gain the respect of the people around us and our customers."],["Teamwork","Communication and collaboration that bind us and deliver the best results."],["Passion","Love of work as the energy to keep growing and innovating."],["Safety and Health","Safety above all. Everyone is responsible for their own safety and health and the people around us."]];
$("#values-grid").innerHTML=values.map(([t,d])=>`<article class="card val"><div><h4>${t}</h4><p>${d}</p></div></article>`).join("");

const caps=[
["Precision Plastic Injection",[["102","(as of 2025)","injection molding machines"],["30–450t","","clamping force range"]],["Machine brands: JSW, NISSEI, MULTIPLAS, VICTOR","Cosmetic, Function and Insert parts","Printer, Home appliances, Machinery, Automotive, Health equipment, ATM"]],
["Mold & Die Fabrication",[["30–140t","","mold size range"],["3 molds","(100t)","fabrication ability per month"]],["Handles almost all materials and components for dies","Mold fabrication, assembly, repair and maintenance","SolidWorks 2D/3D design and mold flow analysis"]],
["Assembly",[["Total solution","","from die making to assembly"],["24h","","mass-production system"]],["Printer Sub-assy","Planetary gear module assy","Pad printing and Screen printing"]],
["Quality Control",[["21°C to 25°C","","Measuring under stable temperature"],["2","","CNC 3D measuring machines"]],["New high-tech equipment for measuring precision plastic products","Spec measurement of plastic gear","Tensile test, Surface roughness measurement, Hardness measurement"]],
["Metal Clamp",[["10","","easy clamp fabrication equipment"],["4","","Available for 4 Different clamping thickness"]],["Manufacture of metal parts and assemblies","Reliable technique, domestically and internationally","Applicable for Injection molding, Press forming and Diecasting"]]];
$("#caps").innerHTML=caps.map(([t,k,l],n)=>`<article class="cap"><img src="images/${["caps-injection","caps-mold","caps-assembly","caps-qc","caps-clamp"][n]}.jpg" alt="${t}" loading="lazy"><div><h3>${t}</h3><div class="kpis">${k.map(([n,s,d])=>`<div><b>${n} <small>${s}</small></b><span>${d}</span></div>`).join("")}</div><ul>${l.map(x=>`<li>${x}</li>`).join("")}</ul></div></article>`).join("");


const machines=["Wire Cut Machine (Sodick APL200L)","Electric Discharge Machine (Sodick AQ35L)","Machining Center (Makino V33)","Machining Center (Makino V22)","Electric Discharge Machine (Mitsubishi EA12V)","Wire Cut Machine (Mitsubishi FA10S)","Precision Surface Grinder (Okuma & Howa STMZR)","Lathe Machine (Howa Strong 860)","Shizuoka NC Milling","Robo Drill Machine (Fanuc)","Surface Grinder (Okamoto PSG63DK)","Laser Welding"];
$("#machines").innerHTML=machines.map((m,i)=>`<figure><img src="images/machine-${i+1}.jpg" alt="${m}" loading="lazy"><figcaption>${m}</figcaption></figure>`).join("");

const inj=`JSW|J100ADS-110U|100|115|2295|1
JSW|J110AD-110H|110|97|2750|2
JSW|J110AD-110H|110|97|2753|2
JSW|J110AD-180H|110|176|2020|1
JSW|J110AD-180H|110|135|2650|2
JSW|J110AD-180H|110|176|2020|4
JSW|J110ELIII-180H|110|135|1920|1
JSW|J130ADS-110U|130 (1338kN)|115|225MPa|1
JSW|J130ADS-110U|130|115|225MPa|3
JSW|J130ADS-180U|130 (1338kN)|176|199MPa|1
JSW|J140AD-180H|140|176|2020|4
JSW|J180AD-180H|180|176|2020|1
JSW|J180ADS-180U|180|176|199MPa|1
JSW|J180ELIII-300H|180|226|2200|2
JSW|J220AD-460H|220|463|1800|1
JSW|J220ELIII-460H|220|463|1800|2
JSW|J280AD-460H|280|463|1800|5
JSW|J280ADS-460H|280|463|1805|1
JSW|J30ADS-30U|30|30|2274|3
JSW|J30ADS-30U|30|30|223MPa|5
JSW|J350AD-460H|350|463|1800|1
JSW|J35AD-30H|35|30|2270|6
JSW|J35ELIII-30H|35|30|1700|1
JSW|J50ADS-60U|50|62|2193|5
JSW|J50ADS-60U|50|62|215MPa|2
JSW|J50ADS-60U|50|62|215MPa|6
JSW|J50ADS-60U|50 (515kN)|62|215MPa|2
JSW|J55AD-30H|55|30|2274|1
JSW|J55AD-60H|55|62|2190|13
JSW|J55ELIII-60H|55|49|2000|2
JSW|J80ADS-110U|80|115|2295|2
JSW|J85AD-110H|85|115|2290|3
NISSEI|NEX180T-25E|180|201|1344|1
NISSEI|PS40E 5A|40|49|2070|2
NISSEI|PS60E 9A|60|69|2485|2
NISSEI|PS60E 9A|60|90|1905|2
NISSEI|FN1000 18A|80|147|2305|2
NISSEI|FN1000 18A|80|182|1840|1
NISSEI|FN2000 25A|110|254|1770|1
NISSEI|FN4000 50A|180|505|1610|1
NISSEI|FN5000 50A|220|505|1610|1
MULTIPLAS|V3-2R-85 ASR|120|113|2331|1
VICTOR|VR450PES|450|1343|2019|1`.split("\n").map(r=>r.split("|"));
const total=inj.reduce((s,r)=>s+ +r[5],0);

const simple=(rows)=>`<table><thead><tr><th>No.</th><th>Description</th><th>Qty</th></tr></thead><tbody>${rows.map((r,i)=>`<tr><td>${i+1}</td><td>${r[0]}</td><td>${r[1]}</td></tr>`).join("")}</tbody></table>`;
const qc=[["CNC Three Dimensional Measuring Machine (CMM)",2],["Toolmakers Microscope (TMS)",2],["Profile Projector",2],["Gear Tester (OSAKA GTR-4; GTR-4LS)",1],["Eco centric Inspection Tester",1],["Push Pull Gauge (PSH-2000N)",1],["Push Pull Test (10kq-100q) (AEF-10)",1],["Weight / Count Scale",1],["Digital Micrometer (0~25mm 11pcs.); (10~25mm-1pc); (25~50mm 4pcs.); (50~75mm 1 pcs.)",17],["Digital Outside Micrometer (PT-EDGE) (0~25mm)",1],["Inside Micrometer (0~30mm)",2],["Digital Blade MM (0~25mm)",1],["Dial Caliper (0~300mm)",1],["Dial Height Gauge (0~300mm)",3],["Digi Matic Caliper (0~150mm 5pcs.); (0~300mm 1 pc.)",6],["Digital Caliper (0~450mm)",1],["Digital Height Gauge (0~50mm 2pcs.); (0~350mm 1 pc.); (0~450mm 1 pcs.)",4],["Dial Gage (.001~10mm)",1],["Radius Gauge","3 SETS"],["Gauge Block Set","2 SETS"],["Ceramic Gauge Block Set","1 SET"],["Module For Master Gear M=1 (1pc.); 0.4 (2pcs.); 0.5 (1pc.); 0.6 (1pc.); 0.8 (1pc.)",6],["Pin Gauge (0.01 Tolerance (21 sets); 0.025 Tolerance (3 sets))","24 SETS"],["Lux Meter",1],["Feeler Gauge",2],["Image Dimension Measuring System",1],["Noise Test box",1],["Noise meter",1],["Density meter",1],["Push-pull gauge",1],["Hardness meter",1],["Surface Roughness meter",1],["Pin Gauge (3.95-3.99)",1],["OP measurement pin",1],["Universal testing machine (VEW 2308E)",1]];
const sec=(t,r)=>`<div><h3>${t}</h3>${simple(r)}</div>`;
const prod=`<div class="d-grid">
${sec("C. Mold & Die Fabrication",[["Machining Center (MAKINO V33 [1], MAKINO V22 [1])",2],["Wire Cut Machine (MITSUBISHI [1], SODICK [2])",3],["Electric Discharge Machine (MITSUBISHI [1], SODICK [1])",2],["Lathe Machine (HOWA STRONG 860)",1],["Mold Cleaning Machine (ULTRASONIC MACHINE)",2],["Standard Drilling Machine",1],["Welding Machine (ARGON WELDING MACHINE (1), ARGON TIG WELDING MACHINE (1))",2],["Cutting Machine (EJECTOR PIN CUTTER MACHINE)",1],["Bench Lathe Machine",1],["Forming Grinding Machine (OKAMOTO)",2],["Robo Drill Machine (FANUC)",1],["NC Milling (SHIZUOKA)",1],["Design Software Solid Works (2D and 3D)",3],["Mold Flow Analysis",1],["Digital Height Gauge 350 (Mitutoyo)",1],["Cylindrical Grinder (OKAMOTO [1])",1],["Laser Welding: 200W (Motic)",1]])}
<div>${sec("D. Printing Equipment",[["Nylon Blasting Bead Shot Machine (0S3-18)",1],["Screen Printing Machine (Winon)",4],["Tampo Printing Machine (Winon)",5],["Drying Machine (Winon)",1]])}<br>${sec("E. Easy Clamp Fabrication",[["Milling Machine (OKUMA & HOWA, MILLSTAR)",2],["Barrel Grinding Machine",1],["Drill Pointer",1],["Drilling Machine (YOSHIDA [1], KIRA [2])",3],["Press Machine (KING SHANG YUAN JAM)",2],["Cutting Machine (EVERISING S-250HA)",1]])}<br>${sec("F. Production Equipment",[["Hydraulic press (with load cell)",1],["Air press (with load cell)",2],["Grease pump",2]])}</div></div>`;
const tabs=[
["A. Injection Molding","<p class='sub-note' style='margin:0 0 10px'>JSW, NISSEI, MULTIPLAS and VICTOR machines | Year: 2025</p><div class='tbl'><table><thead><tr><th>Machine Maker</th><th>Machine Model</th><th>Clamping Force (ton)</th><th>Injection Capacity (cm³)</th><th>Max. Inj. Pressure (kg/cm²)</th><th>Qty</th></tr></thead><tbody>"+inj.map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td><td>${r[4]}</td><td>${r[5]}</td></tr>`).join("")+`</tbody><tfoot><tr><td colspan="5">TOTAL</td><td>${total}</td></tr></tfoot></table></div>`],
["B. Quality Control","<p class='sub-note' style='margin:0 0 10px'>Measuring and inspection equipment</p><div class='tbl'>"+simple(qc)+"</div>"],
["C–F. Production & Fabrication",prod]];
const tabBar=$("#tabs"),panel=$("#tab-panel");
tabBar.innerHTML=tabs.map((t,i)=>`<button role="tab" data-i="${i}" aria-selected="${i===0}">${t[0]}</button>`).join("");
const show=i=>{panel.innerHTML=tabs[i][1];tabBar.querySelectorAll("button").forEach((b,j)=>b.setAttribute("aria-selected",j===i))};
tabBar.addEventListener("click",e=>{const b=e.target.closest("button");if(b)show(+b.dataset.i)});
show(0);

const names=["Bandai Namco Philippines, Inc.","Mikuni Terminals Mechatronics Phils Corporation","Canon Business Machine Philippines Inc.","NCR Atleos Corp","Daiho (Phils.)","Nec Tokin Electronics Philippines Inc.","Denso Philippines Corporation","Nicera Philippines, Inc.","DIUP, Inc.","Philinak Industries, Inc.","Epson Precision Philippines Incorporated","Philippines TRC Inc.","Fujifilm Optics Philippines Inc.","Sanyo Denki Philippines Inc.","Fujitsu Die-tech Corporation of the Philippines","Shinsei Industries Philippines Inc.","Hitachi Cable Philippines Inc.","SIIX EMS Philippines Inc.","HKT Philippines Incorporated","Sohbi Kohgei (Phils.), Inc","Integrated Micro-Electronics, Inc.","Sumitronics Phils., Inc.","J-Cash Machine Philippines Inc.","Sun-Wa Technos (Philippines), Inc.","K & K Molding, Inc.","TaiHan Precision Technology (Phils.) Co., Inc.","Karumona Nagano Seiko, Inc.","Toshiba Consumer Products (Thailand) Co.,ltd","Katecs Industries Philippines, Inc.","Vacuum tech Philippines Inc. (Thermos)"];
$("#names").innerHTML=names.map(n=>`<li>${n}</li>`).join("");

const burger=$("#burger"),menu=$("#menu");
burger.addEventListener("click",()=>{const o=menu.classList.toggle("open");burger.setAttribute("aria-expanded",o)});
menu.addEventListener("click",e=>{if(e.target.tagName==="A"){menu.classList.remove("open");burger.setAttribute("aria-expanded","false")}});
const links=[...menu.querySelectorAll("a")];
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(l=>l.classList.toggle("on",l.getAttribute("href")==="#"+e.target.id))}),{rootMargin:"-40% 0px -55% 0px"});
links.forEach(l=>{const s=$(l.getAttribute("href"));if(s)io.observe(s)});
})();
