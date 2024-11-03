const muallaqat = [
    { title: "معلقة امرؤ القيس", content: "نص المعلقة..." },
    { title: "معلقة طرفة بن العبد", content: "نص المعلقة..." },
    { title: "معلقة لبيد بن ربيعة", content: "نص المعلقة..." },
    { title: "معلقة عنترة بن شداد", content: "نص المعلقة..." },
    { title: "معلقة عمرو بن كلثوم", content: "نص المعلقة..." },
    { title: "معلقة الحارث بن حلزة", content: "نص المعلقة..." },
    { title: "معلقة زهير بن أبي سلمى", content: "نص المعلقة..." },
    { title: "معلقة السموأل", content: "نص المعلقة..." },
    { title: "معلقة الخنساء", content: "نص المعلقة..." },
    { title: "معلقة الأعشى", content: "نص المعلقة..." },
];

// دالة لعرض المعلقات
function renderMuallaqat() {
    const muallaqatList = document.getElementById('muallaqat-list');
    muallaqat.forEach(muallaq => {
        const muallaqDiv = document.createElement('div');
        muallaqDiv.className = 'muallaq';
        muallaqDiv.innerHTML = `<h3>${muallaq.title}</h3><p>${muallaq.content}</p>`;
        muallaqatList.appendChild(muallaqDiv);
    });
}

// استدعاء الدالة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', renderMuallaqat);
