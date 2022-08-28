const exportBtn = document.getElementById("exportBtn");

       exportBtn.addEventListener("click",function(){
        var CV = document.getElementById('CV');
        var opt = {
            margin:       0,
            filename:     'FurkanEvinCV.pdf',
            image:        { type: 'jpeg', quality: 1. },
            html2canvas:  { scale: 3},
            jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
          };
          html2pdf().set(opt).from(CV).save();
          
});

// Dictionary
const dictionary=[
    {
        key:"personalDesc",
        english: "Hello! I am Furkan -- dolor sit amet consectetur adipisicing elit. Quas est aspernatur magni voluptates nisi in sint totam. Incidunt eveniet officia nisi repellat voluptate provident asperiores fugiat ad, consequuntur vero!",
        turkish: "Selam Ben Furkan  -- dolor sit amet consectetur adipisicing elit. Quas est aspernatur magni voluptates nisi in sint totam. Incidunt eveniet officia nisi repellat voluptate provident asperiores fugiat ad, consequuntur vero!",
    },
    {
        key:"edu",
        english: "EDUCATION",
        turkish: "EĞİTİM",
    },
    {
        key:"exp",
        english: "EXPERIENCES",
        turkish: "DENEYİMLER",
    },
    {
        key:"projects",
        english: "PROJECTS",
        turkish: "PROJELER",
    },
    {
        key:"skills",
        english: "SKILLS",
        turkish: "YETENEKLER",
    },
    {
        key:"languages",
        english: "LANGUAGES",
        turkish: "DİLLER",
    },
    {
        key:"lang-1",
        english: "English",
        turkish: "İngilizce",
    },
    {
        key:"lang-2",
        english: "Turkish",
        turkish: "Türkçe",
    },
    {
        key:"tr",
        english: "Native or Bilingual Profficiency",
        turkish: "Ana  Dil",
    },
    {
        key:"en",
        english: "Full Professional Profficiency",
        turkish: "Profesyonel",
    },
    {
        key:"edu-1",
        english: "Under Construct :)",
        turkish: "Yapım Aşamasında",
    },
    {
        key:"edu-2",
        english: "Software Engineering",
        turkish: "Yazılım Mühendisliği",
    },
    {
        key:"exp-1",
        english: "Something",
        turkish: "Bir şeyler",
    },
    {
        key:"exp-2",
        english: "React Developer",
        turkish: "React Developer",
    },
    {
        key:"exp-3",
        english: "Another One",
        turkish: "Başka Bir Tane",
    },
    {
        key:"exp-4",
        english: "Game Developer",
        turkish: "Game Developer",
    },
    {
        key:"project-1",
        english: "Something Incredible",
        turkish: "İlgi Çekiçi Bir Şey",
    },
    {
        key:"project-2",
        english: "How Long it took me to do this?",
        turkish: "Bunu yapmam ne kadar sürdü?",
    },
    {
        key:"project-3",
        english: "Pros of project",
        turkish: "Projenin artı yönleri",
    },
    {
        key:"date-1",
        english: "October 2022 -",
        turkish: "Ocak 2022 -",
    },
    {
        key:"date-2",
        english: "October 1999-2018 -",
        turkish: "Ocak 1999-2018 -",
    },
    {
        key:"info",
        english: "CV is under construct, its not the final form :)",
        turkish: "CV yapım aşamasındadır, son hali değildir :)",
    },
]
 
// Selecting Lang

const languageSelector = document.getElementById("language")

    languageSelector.addEventListener("change",function(olay){
    translate(olay.target.value)
}
);


//  Function

function translate(selectedLanguage){
    for(let i=0; i < dictionary.length; i++){
    const element = document.getElementById(dictionary[i].key);
    if(selectedLanguage === "english"){
        element.innerText = (dictionary[i].english)
    }
    if(selectedLanguage === "turkish"){
        element.innerText = (dictionary[i].turkish)
    }
    }
}
