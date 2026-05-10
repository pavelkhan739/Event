const participants = [
    { id: "9995862", name: "𝄟≛⃝𝐊𝐁𝐃🇧🇩ටි‏‏‏ꫀɭƒɪs꧊ꪱ̴", agency: "KING OF BANGLADESH", r1Mark: 19.6, r2Mark:20.5 },
    { id: "2187245", name: "Liyana", agency: "Green House", r1Mark: 21.4, r2Mark: 21.3 },
    { id: "6131985", name: "jonaki", agency: "FAIRY TALE AGENCY", r1Mark: 16.1, r2Mark: 0 },
    { id: "3704785", name: "MUN", agency: "FAIRY TALE AGENCY", r1Mark: 19.1, r2Mark: 17.7 },
    { id: "693520", name: "Nuha", agency: "Supper power agency", r1Mark: 17.6, r2Mark: 0 },
    { id: "5769680", name: "Sp AlVi", agency: "Supper power agency", r1Mark: 21.3, r2Mark: 21.4 },
    { id: "6640335", name: "মিতু", agency: "Heaven touch", r1Mark: 14.2, r2Mark: 0 },
    { id: "9996451", name: "Ishrat", agency: "Heaven touch", r1Mark: 17.7, r2Mark: 0 },
    { id: "6226140", name: "NIDHI", agency: "Sopno Bilash", r1Mark: 18.8, r2Mark: 17.7 },
    { id: "5894380", name: "jerin", agency: "Three star", r1Mark: 18.1, r2Mark: 18 },
    { id: "5827322", name: "maya", agency: "Three star", r1Mark: 17.2, r2Mark: 0 },
    { id: "3319279", name: "বুড়ি", agency: "স্বপনের ভালোবাসা", r1Mark: 21.7, r2Mark: 17 },
    { id: "9997251", name: "Samiya", agency: "স্বপনের ভালোবাসা", r1Mark: 0, r2Mark: 0 },
    { id: "3731401", name: "Queen", agency: "স্বপনের ভালোবাসা", r1Mark: 0, r2Mark: 0 },
    { id: "4330966", name: "Niha", agency: "স্বপনের ভালোবাসা", r1Mark: 16.00, r2Mark: 0 },
    { id: "4856196", name: "Mithila", agency: "স্বপনের ভালোবাসা", r1Mark: 17.7, r2Mark: 0 },
    { id: "5062364", name: "Ariyan", agency: "স্বপনের ভালোবাসা", r1Mark: 16.8, r2Mark: 0 },
    { id: "6151924", name: "Orny", agency: "স্বপনের ভালোবাসা", r1Mark: 17.5, r2Mark: 0 },
    { id: "4827780", name: "RITU", agency: "AMADER GOLPO", r1Mark: 21.7, r2Mark: 21.1 },
    { id: "5193623", name: "sᴮMinhajul࿐", agency: "স্বপ্নবুনন", r1Mark: 0, r2Mark: 0 },
    { id: "8417208", name: "sᴮRukaiya࿐", agency: "স্বপ্নবুনন", r1Mark: 17.5, r2Mark: 0 },
    { id: "8490037", name: "sᴮAlpona࿐", agency: "স্বপ্নবুনন", r1Mark: 16.9, r2Mark: 0 },
    { id: "5338065", name: "sᴮIsrat࿐", agency: "স্বপ্নবুনন", r1Mark: 17.7, r2Mark: 0 },
    { id: "9997250", name: "sᴮSadia࿐", agency: "স্বপ্নবুনন", r1Mark: 0, r2Mark: 0 },
    { id: "8276618", name: "sᴮRidoy࿐", agency: "স্বপ্নবুনন", r1Mark: 13.9, r2Mark: 0 },
    { id: "9991324", name: "R.K.Rocky", agency: "sunrise agency", r1Mark: 19.9, r2Mark: 20.4 },
    { id: "9997042", name: "ℛꌗ”°𝐉𝐨𝐲𝐚~𝐢𝐬𝐥𝐚𝐦", agency: "Rockstar", r1Mark: 17.8, r2Mark: 18.5 },
    { id: "2356605", name: "Neha Rahman", agency: "Rockstar", r1Mark: 16.8, r2Mark: 0 },
    { id: "4414072", name: "Onu", agency: "Rockstar", r1Mark: 0, r2Mark: 0 },
    { id: "4160130", name: "🆁🆀™👑Fᴀɪᴢᴀ👑", agency: "Royal Queen", r1Mark: 17.9, r2Mark: 17.4 },
    { id: "9996841", name: "🆁🆀™👑MAHI👑", agency: "Royal Queen", r1Mark: 15, r2Mark: 0 },
    { id: "4496006", name: "🆁🆀™ 👑 🇲𝑨𝑯𝑨👑࿐", agency: "Royal Queen", r1Mark: 13.3, r2Mark: 0 },
    { id: "8845180", name: "🆁🆀™👑 Sadiya 👑࿐", agency: "Royal Queen", r1Mark: 17.2, r2Mark: 0 },
    { id: "9997081", name: "🆁🆀™👑 Sinthiya 👑࿐", agency: "Royal Queen", r1Mark: 0, r2Mark: 0 },
    { id: "2779028", name: "🆁🆀™👑P͒o͒𝑟𝚒t͒ᥲ̣rå👑࿐", agency: "Royal Queen", r1Mark: 18.4, r2Mark: 20.1 },
    { id: "9996582", name: "𝄟≛⃝𝐊𝐁𝐃🇧🇩Ashfi", agency: "KING OF BANGLADESH", r1Mark: 21.2, r2Mark: 20.9 },
    { id: "9220134", name: "𝄟≛⃝𝐊𝐁𝐃🇧🇩Lavoni❤️", agency: "KING OF BANGLADESH", r1Mark: 16.4, r2Mark: 0 },
    { id: "666687", name: "Bobe", agency: "FRIEND pLUS AGENCY", r1Mark:16.3, r2Mark: 0 },
    { id: "8418968", name: "jabin", agency: "Smartness Agancy", r1Mark: 15.2, r2Mark: 0 },
    { id: "8219340", name: "Shanaj", agency: "Smartness Agancy", r1Mark: 14.6, r2Mark: 0 },
    { id: "8233164", name: "Rumi", agency: "Smartness Agancy", r1Mark: 16.2, r2Mark: 0 },
    { id: "5244057", name: "juma", agency: "Smartness Agancy", r1Mark: 17.4, r2Mark: 0 },
    { id: "9153768", name: "Mahi", agency: "Smartness Agancy", r1Mark: 18.7, r2Mark: 17.2 },
    { id: "9508870", name: "Maya p", agency: "Green House", r1Mark: 0, r2Mark: 0 },
    { id: "2119087", name: "♥️⃝≛⃝𝐒𝐇✓Prova", agency: "মায়াবী রোজ", r1Mark: 15.7, r2Mark: 0 },
    { id: "3026146", name: "♥️⃝≛⃝𝐒𝐇✓🇸 🇷 🇦 🇧 🇴 🇳❤️", agency: "মায়াবী রোজ", r1Mark: 18.8, r2Mark: 19.5 },
    { id: "8427144", name: "♥️⃝≛⃝𝐒𝐇✓ পরিণীতা", agency: "মায়াবী রোজ", r1Mark: 12, r2Mark: 0 },
    { id: "2879034", name: "♥️⃝≛⃝𝐒𝐇✓🇷ⓐ𝓷𝓘 ♥️♥️", agency: "মায়াবী রোজ", r1Mark: 0, r2Mark: 0 }
];

document.addEventListener('DOMContentLoaded', () => {
    loadRound1();
    loadRound2();
    loadWinners();
});

function toggleMenu() {
    const nav = document.getElementById('navLinks');
    const icon = document.querySelector('.menu-trigger i');
    nav.classList.toggle('active');
    if (nav.classList.contains('active')) {
        icon.classList.replace('fa-heart', 'fa-times');
    } else {
        icon.classList.replace('fa-times', 'fa-heart');
    }
}

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    document.getElementById('navLinks').classList.remove('active');
    document.querySelector('.menu-trigger i').classList.replace('fa-times', 'fa-heart');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

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
        list.innerHTML += `<tr><td>${index + 1}</td><td>${p.id}</td><td>${p.name}</td><td style="color:var(--gold)"><strong>${p.r2Mark}</strong></td></tr>`;
    });
}

function loadWinners() {
    const winners = [...participants].sort((a, b) => b.r2Mark - a.r2Mark).slice(0, 5);
    const container = document.getElementById('winnerList');
    container.innerHTML = "";
    const icons = ["🥇", "🥈", "🥉", "🏅", "🎖️"];
    const prizes = ["80,000 coins + VIP7", "60,000 coins + VIP6", "40,000 coins + VIP6", "20,000 coins + VIP5", "10,000 coins + VIP5"];

    winners.forEach((p, index) => {
        if (p.r2Mark > 0) {
            container.innerHTML += `
                <div class="winner-card">
                    <span style="font-size:3rem">${icons[index]}</span>
                    <h3>TOP ${index + 1}</h3>
                    <p style="margin:10px 0; font-weight:bold">${p.name}</p>
                    <div style="background:rgba(255,215,0,0.1); padding:10px; border-radius:10px; color:var(--gold)">${prizes[index]}</div>
                </div>
            `;
        }
    });
}