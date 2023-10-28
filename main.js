let navLists = document.querySelector('.nav-lists');
let menuBtn = document.querySelector('.ri-menu-line');
let quote = document.querySelector('.quote');
let translationTxt =  document.querySelector('.translation');
let timeTxt = document.querySelector('.time-now');
menuBtn.addEventListener('click',()=>{
    navLists.classList.toggle('show');
    console.log(navLists.classList);
});
console.log(navLists.classList);
let randomNum = Math.floor(Math.random()*5);
let verses = {
    data : [{verse:'وَمَنْ يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ',translation:'And whoever puts all his trust in Allah. He will be enough for him'},{verse:'وَإِن تَعُدُّوا نِعْمَةَ اللَّهِ لَا تُحْصُوهَا ۗ إِنَّ اللَّهَ لَغَفُورٌ رَّحِيمٌ',translation:'And if you should count the favours of Allah, you would never be able to number them. Indeed, Allah is Forgiving and Merciful'},
    {verse:'لَا يُكَلِّفُ ٱللَّهُ نَفْسًا إِلَّا وُسْعَهَا لَهَا مَا كَسَبَتْ',translation:'Allah does not burden a soul beyond that it can bear'},{verse:'إِنَّ ٱلْفَضْلَ بِيَدِ ٱللَّهِ يُؤْتِيهِ مَن يَشَآءُ وَٱللَّهُ وَٰسِعٌ عَلِيمٌ',translation:'Behold, all bounty is in the hand of Allah ; He grants it unto whom He wills: for Allah is infinite, all-knowing'},{
        verse:'حَسْبُنَا ٱللَّهُ وَنِعْمَ ٱلْوَكِيلُ',translation:'Allah is sufficient for us'
    }
    ]
}
console.log(verses.data[randomNum].verse);
quote.innerHTML = verses.data[randomNum].verse;
translationTxt.innerHTML = verses.data[randomNum].translation;
const changeTime = ()=>{
    let newDate = new Date;
    let time = `${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`;
    timeTxt.innerHTML = time;
}
setInterval(changeTime,1000);