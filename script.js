// --- "A Poem for My Mom" প্রতিযোগীদের চূড়ান্ত তালিকা ---
const participants = [
    { id: "9995862", name: "𝄟≛⃝𝐊𝐁𝐃🇧🇩ටි‏‏‏ꫀɭƒɪs꧊ꪱ̴", agency: "KING OF BANGLADESH", r1Mark: 0, r2Mark: 0 },
    { id: "2187245", name: "Liyana", agency: "Green House", r1Mark: 0, r2Mark: 0 },
    { id: "6131985", name: "jonaki", agency: "FAIRY TALE AGENCY", r1Mark: 0, r2Mark: 0 },
    { id: "3704785", name: "MUN", agency: "FAIRY TALE AGENCY", r1Mark: 0, r2Mark: 0 },
    { id: "693520", name: "Nuha", agency: "Supper power agency", r1Mark: 0, r2Mark: 0 },
    { id: "5769680", name: "Sp AlVi", agency: "Supper power agency", r1Mark: 0, r2Mark: 0 },
    { id: "6640335", name: "মিতু", agency: "Heaven touch", r1Mark: 0, r2Mark: 0 },
    { id: "9996451", name: "Ishrat", agency: "Heaven touch", r1Mark: 0, r2Mark: 0 },
    { id: "6226140", name: "NIDHI", agency: "Sopno Bilash", r1Mark: 0, r2Mark: 0 },
    { id: "5894380", name: "jerin", agency: "Three star", r1Mark: 0, r2Mark: 0 },
    { id: "5827322", name: "maya", agency: "Three star", r1Mark: 0, r2Mark: 0 },
    { id: "3319279", name: "বুড়ি", agency: "স্বপনের ভালোবাসা", r1Mark: 0, r2Mark: 0 },
    { id: "9997251", name: "Samiya", agency: "স্বপনের ভালোবাসা", r1Mark: 0, r2Mark: 0 },
    { id: "3731401", name: "Queen", agency: "স্বপনের ভালোবাসা", r1Mark: 0, r2Mark: 0 },
    { id: "4330966", name: "Niha", agency: "স্বপনের ভালোবাসা", r1Mark: 0, r2Mark: 0 },
    { id: "4856196", name: "Mithila", agency: "স্বপনের ভালোবাসা", r1Mark: 0, r2Mark: 0 },
    { id: "5062364", name: "Ariyan", agency: "স্বপনের ভালোবাসা", r1Mark: 0, r2Mark: 0 },
    { id: "6151924", name: "Orny", agency: "স্বপনের ভালোবাসা", r1Mark: 0, r2Mark: 0 },
    { id: "4827780", name: "RITU", agency: "AMADER GOLPO", r1Mark: 0, r2Mark: 0 },
    { id: "5193623", name: "sᴮMinhajul࿐", agency: "স্বপ্নবুনন", r1Mark: 0, r2Mark: 0 },
    { id: "8417208", name: "sᴮRukaiya࿐", agency: "স্বপ্নবুনন", r1Mark: 0, r2Mark: 0 },
    { id: "8490037", name: "sᴮAlpona࿐", agency: "স্বপ্নবুনন", r1Mark: 0, r2Mark: 0 },
    { id: "5338065", name: "sᴮIsrat࿐", agency: "স্বপ্নবুনন", r1Mark: 0, r2Mark: 0 },
    { id: "9991324", name: "R.K.Rocky", agency: "sunrise agency", r1Mark: 0, r2Mark: 0 },
    { id: "9997042", name: "ℛꌗ”°𝐉𝐨𝐲𝐚~𝐢𝐬𝐥𝐚𝐦", agency: "Rockstar", r1Mark: 0, r2Mark: 0 },
    { id: "2356605", name: "Neha Rahman", agency: "Rockstar", r1Mark: 0, r2Mark: 0 },
    { id: "4414072", name: "Onu", agency: "Rockstar", r1Mark: 0, r2Mark: 0 },
    { id: "4160130", name: "🆁🆀™👑Fᴀɪᴢᴀ👑", agency: "Royal Queen", r1Mark: 0, r2Mark: 0 },
    { id: "4496006", name: "🆁🆀™ 👑 🇲𝑨𝑯𝑨👑࿐", agency: "Royal Queen", r1Mark: 0, r2Mark: 0 },
    { id: "8845180", name: "🆁🆀™👑 Sadiya 👑࿐", agency: "Royal Queen", r1Mark: 0, r2Mark: 0 },
    { id: "9997081", name: "🆁🆀™👑 Sinthiya 👑࿐", agency: "Royal Queen", r1Mark: 0, r2Mark: 0 },
    { id: "2779028", name: "🆁🆀™👑P͒o͒𝑟𝚒t͒ᥲ̣rå👑࿐", agency: "Royal Queen", r1Mark: 0, r2Mark: 0 },
    { id: "9996582", name: "𝄟≛⃝𝐊𝐁𝐃🇧🇩Ashfi", agency: "KING OF BANGLADESH", r1Mark: 0, r2Mark: 0 },
    { id: "9220134", name: "𝄟≛⃝𝐊𝐁𝐃🇧🇩Lavoni❤️", agency: "KING OF BANGLADESH", r1Mark: 0, r2Mark: 0 },
    { id: "666687", name: "Bobe", agency: "FRIEND pLUS AGENCY", r1Mark: 0, r2Mark: 0 },
    { id: "8418968", name: "jabin", agency: "Smartness Agancy", r1Mark: 0, r2Mark: 0 },
    { id: "8219340", name: "Shanaj", agency: "Smartness Agancy", r1Mark: 0, r2Mark: 0 },
    { id: "8233164", name: "Rumi", agency: "Smartness Agancy", r1Mark: 0, r2Mark: 0 },
    { id: "5244057", name: "juma", agency: "Smartness Agancy", r1Mark: 0, r2Mark: 0 },
    { id: "9153768", name: "Mahi", agency: "Smartness Agancy", r1Mark: 0, r2Mark: 0 },
    { id: "9508870", name: "Maya p", agency: "Green House", r1Mark: 0, r2Mark: 0 },
    { id: "2119087", name: "♥️⃝≛⃝𝐒𝐇✓Prova", agency: "মায়াবী রোজ", r1Mark: 0, r2Mark: 0 },
    { id: "3026146", name: "♥️⃝≛⃝𝐒𝐇✓🇸 🇷 🇦 🇧 🇴 🇳❤️", agency: "মায়াবী রোজ", r1Mark: 0, r2Mark: 0 },
    { id: "8427144", name: "♥️⃝≛⃝𝐒𝐇✓ পরিণীতা", agency: "মায়াবী রোজ", r1Mark: 0, r2Mark: 0 },
    { id: "2879034", name: "♥️⃝≛⃝𝐒𝐇✓🇷ⓐ𝓷𝓘 ♥️♥️", agency: "মায়াবী রোজ", r1Mark: 0, r2Mark: 0 }
];

// বাকি ডাটা হ্যান্ডলিং ও সর্টিং লজিক
document.addEventListener('DOMContentLoaded', () => {
    // আপনি যদি ডেমো হিসেবে টেস্ট করতে চান তবে নিচের লাইনটি আনকমেন্ট করুন
    // generateRandomMarks(); 
    
    loadRound1();
    loadRound2();
    loadWinners();
});

function loadRound1() {
    const list = document.getElementById('list46');
    list.innerHTML = "";
    participants.forEach(p => {
        list.innerHTML += `<tr><td>${p.id}</td><td>${p.name}</td><td>${p.agency}</td><td><strong>${p.r1Mark}</strong></td></tr>`;
    });
}

function loadRound2() {
    const top15 = [...participants].sort((a, b) => b.r1Mark - a.r1Mark).slice(0, 15);
    const list = document.getElementById('list15');
    list.innerHTML = "";
    top15.forEach((p, index) => {
        list.innerHTML += `<tr><td>${index + 1}</td><td>${p.id}</td><td>${p.name}</td><td>${p.agency}</td><td style="color:var(--gold)"><strong>${p.r2Mark}</strong></td></tr>`;
    });
}

function loadWinners() {
    const winners = [...participants].sort((a, b) => b.r2Mark - a.r2Mark).slice(0, 5);
    const container = document.getElementById('winnerList');
    container.innerHTML = "";
    const icons = ["🥇", "🥈", "🥉", "🏅", "🎖️"];
    const prizes = [
        "80,000 coins + VIP7 x 6",
        "60,000 coins + VIP6 x 10",
        "40,000 coins + VIP6 x 5",
        "20,000 coins + VIP5 x 10",
        "10,000 coins + VIP5 x 7"
    ];

    winners.forEach((p, index) => {
        // যাদের মার্ক ০ তাদের উইনার লিস্টে দেখাবে না (ইভেন্ট শুরু হওয়ার আগে খালি দেখাবে)
        if(p.r2Mark > 0) {
            container.innerHTML += `
                <div class="winner-card">
                    <span class="rank-logo">${icons[index]}</span>
                    <h3 style="color:var(--gold)">TOP ${index + 1}</h3>
                    <p style="margin:10px 0;"><strong>${p.name}</strong></p>
                    <div class="prize">${prizes[index]}</div>
                </div>
            `;
        }
    });
}

// পেজ কন্ট্রোল
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    window.scrollTo({top:0, behavior:'smooth'});
}

function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('active');
}

// টেস্ট করার জন্য র্যান্ডম মার্ক জেনারেটর (ইভেন্টের সময় এটি দরকার নেই)
function generateRandomMarks() {
    participants.forEach(p => {
        p.r1Mark = Math.floor(Math.random() * 50) + 50;
        p.r2Mark = Math.floor(Math.random() * 50) + 50;
    });
}