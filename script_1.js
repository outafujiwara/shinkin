const fixation = document.getElementById("fixation");
const stimulusArea = document.getElementById("stimulusArea");

const leftImage = document.getElementById("leftImage");
const rightImage = document.getElementById("rightImage");

const buttonsDiv = document.getElementById("buttons");
const progress =
document.getElementById("progress");



// old刺激
const groups = [
  {
    folder:"kao_1",
    old:"old_yuru3_entyuu.png",
    news:[
      "baiku_entyuu.png",
      "hagoita_sei6.png",
      "heri_daen.png",
      "hujisan_en.png",
      "hune_daen.png",
      "kuruma_en.png",
      "noto_hidari.png",
      "sensu_entyuu.png"
    ]
  },
  {
    folder:"kao_2",
    old:"old_yuru1_hidari.png",
    news:[
      "baiku_sei6.png",
      "hagoita_en.png",
      "hasami_maruplane.png",
      "heri_en.png",
      "hune_entyuu.png",
      "jyougi_en.png",
      "kagami_en.png",
      "man_en.png"
    ]
  },
    {
    folder:"kao_3",
    old:"old_yuru1_mizu.png",
    news:[
      "hagoita_sankaku.png",
      "hane_mizu.png",
      "hasami_sankaku.png",
      "hikouki_hato.png",
      "hujisan_mizu.png",
      "kagami_hana.png",
      "konpasu_sankaku.png",
      "torii_hana.png"
    ]
  },
  {
    folder:"kao_4",
    old:"old_yuru1_hana.png",
    news:[
      "hune_nami.png",
      "kagami_nami.png",
      "konpasu_hosi.png",
      "kuruma_mizu.png",
      "man_mizu.png",
      "noto_hato.png",
      "sanbonnaiki_hana.png",
      "sankakunaiki_sei6.png"
    ]
  },
  {
    folder:"kao_5",
    old:"old_yuru2_sankaku.png",
    news:[
      "hasami_mizu.png",
      "hikouki_mizu.png",
      "jyougi_mizu.png",
      "man_sankaku.png",
      "nami_sankaku.png",
      "noto_hana.png",
      "sankakunaiki_hosi.png",
      "torii_mizu.png"
    ]
  },
  {
    folder:"kao_6",
    old:"old_yuru1_hato.png",
    news:[
      "baiku_hosi.png",
      "hana_ati.png",
      "hane_hosi.png",
      "hikouki_hana.png",
      "kuruma_nami.png",
      "nami_hana.png",
      "noto_ati.png",
      "torii_haguruma.png"
    ]
  },
  {
    folder:"kao_7",
    old:"old_yuru1_hosi.png",
    news:[
      "hagoita_hosi.png",
      "hane_haguruma.png",
      "hasami_hana.png",
      "heri_hana.png",
      "jyogi_hosi.png",
      "kuruma_ati.png",
      "nami_hato.png",
      "sankakunaiki_hato.png"
    ]
  },
  {
    folder:"kao_8",
    old:"old_yuru2_nami.png",
    news:[
      "heri_hosi.png",
      "hikouki_ati.png",
      "hune_mizu.png",
      "konpas_nami.png",
      "man_hato.png",
      "noto_hosi.png",
      "sanbonnaiki_hato.png",
      "sensu_ati.png"
    ]
  },
  {
  folder:"nasi1",
  old:"old_kagami_entyuu.png",
  news:[
    "hane_en.png",
    "heri_sei6.png",
    "hune_hidari.png",
    "jyougi_maruplane.png",
    "man_entyuu.png",
    "nami_en.png",
    "sanbonnaiki_en.png",
    "sensu_maruplane.png"
  ]
},
{
  folder:"nasi2",
  old:"old_torii_en.png",
  news:[
    "baiku_en.png",
    "hana_mizu.png",
    "hasami_en.png",
    "hikouki_en.png",
    "hune_sei6.png",
    "jyougi_sei6.png",
    "kuruma_hidari.png",
    "sensu_en.png"
  ]
},
{
  folder:"nasi3",
  old:"old_hune_sankaku.png",
  news:[
    "baiku_mizu.png",
    "hana_hana.png",
    "hane_donatu.png",
    "hujisan_sankaku.png",
    "kagami_sankaku.png",
    "nami_hosi.png",
    "noto_sankaku.png",
    "sankakunaiki_nami.png"
  ]
},
{
  folder:"nasi4",
  old:"old_baiku_ati.png",
  news:[
    "heri_hato.png",
    "hikouki_hosi.png",
    "hujisan_hana.png",
    "jyougi_ati.png",
    "man_donatu.png",
    "man_hosi.png",
    "torii_hato.png",
    "torii_hosi.png"
  ]
},
{
  folder:"nasi5",
  old:"old_hikouki_nami.png",
  news:[
    "hagoita_ati.png",
    "hagoita_mizu.png",
    "hane_hana.png",
    "hujisan_ati.png",
    "konpasu_hato.png",
    "noto_mizu.png",
    "sensu_sankaku.png",
    "torii_nami.png"
  ]
},
{
  folder:"nasi6",
  old:"old_noto_nami.png",
  news:[
    "hana_nami.png",
    "hasami_hosi.png",
    "man_hana.png",
    "nami_nami.png",
    "sanbonnaiki_donatu.png",
    "sankakunaiki_hana.png",
    "snkakunaiki_ati.png",
    "torii_donatu.png"
  ]
},
{
  folder:"nasi7",
  old:"old_hana_donatu.png",
  news:[
    "hane_ati.png",
    "hasami_ati.png",
    "heri_haguruma.png",
    "huji_haguruma.png",
    "hune_ati.png",
    "nami_donatu.png",
    "sanbonnaiki_ati.png",
    "torii_ati.png"
  ]
},
{
  folder:"nasi8",
  old:"old_sankakunaiki_haguruma.png",
  news:[
    "hasami_nami.png",
    "heri_ati.png",
    "hikouki_haguruma.png",
    "hune_haguruma.png",
    "konpasu_ati.png",
    "kuruma_haguruma.png",
    "nami_haguruma.png",
    "noto_donatu.png"
  ]
}
];

const practiceGroup = {
  folder:"practice",
  old:"image98.png",
  news:[
    "image124.png",
    "image118.png",
    "image128.png",
    "image140.png",
    "image137.png",
    "image86.png",
    "image83.png",
    "image95.png"
  ]
};

let groupIndex = 0;

let isPractice = true;

let currentGroup = practiceGroup;

let oldImage = currentGroup.old;
let newImages = currentGroup.news;

let trialIndex = 0;

let participantID = "";

while (participantID === "") {

  participantID =
    prompt("被験者番号を入力してください");

}

let participantNum =
  parseInt(participantID.replace(/\D/g, ""));

if (isNaN(participantNum)) {
  participantNum = 1;
}

const shift =
  (participantNum - 1) % 8;


console.log("participantID =", participantID);
console.log("participantNum =", participantNum);
console.log("shift =", shift);

groups.forEach(group => {

  group.news =
    group.news.slice(shift)
      .concat(group.news.slice(0, shift));

});

//currentGroup = groups[groupIndex];
//oldImage = currentGroup.old;
//newImages = currentGroup.news;

console.log("kao_1 =", groups[0].news);

// 結果保存
let results = [];

function showTrial() {
   
  // 全試行終了
 if (trialIndex >= newImages.length) {


if (isPractice && trialIndex >= newImages.length) {

  alert("練習終了です。\n本番を開始します。");

  isPractice = false;

  groupIndex = 0;

  currentGroup = groups[0];

  oldImage = currentGroup.old;

  newImages = currentGroup.news;

  trialIndex = 0;

  results = [];

  showTrial();

  return;
}

 groupIndex++;

  if (groupIndex >= groups.length) {

    console.log(results);

    const csv =
        "group,trial,old,new,oldSide,score,adjustedScore\n" +
        results.map(r =>
            `${r.group},${r.trial},${r.old},${r.new},${r.oldSide},${r.score},${r.adjustedScore}`
        ).join("\n");

        const blob =
        new Blob([csv], {type:"text/csv"});

        const link =
        document.createElement("a");

        link.href =
        URL.createObjectURL(blob);

       link.download =
        participantID + ".csv";
        link.click();

    document.body.innerHTML = `
      <h1>終了</h1>
      <p>ご協力ありがとうございました。</p>
    `;

    return;
  }

  currentGroup = groups[groupIndex];

  oldImage = currentGroup.old;

  newImages = currentGroup.news;

  trialIndex = 0;

  
}
if (isPractice) {

  progress.innerText =
  `練習試行 ${trialIndex + 1}/${newImages.length}`;

} else {

  progress.innerText =
  `グループ ${groupIndex + 1}/${groups.length}
   試行 ${trialIndex + 1}/${newImages.length}`;

}

  fixation.style.display = "block";
  stimulusArea.style.display = "none";

  setTimeout(() => {

    fixation.style.display = "none";
    stimulusArea.style.display = "block";

    // 左右ランダム
    const oldLeft = (trialIndex % 2 === 0);

    if (oldLeft) {

      leftImage.src =
        "image_1/" + currentGroup.folder + "/" + oldImage;

        rightImage.src =
        "image_1/" + currentGroup.folder + "/" +
        newImages[trialIndex];

    } else {

      rightImage.src =
        "image_1/" + currentGroup.folder + "/" + oldImage;

        leftImage.src =
        "image_1/" + currentGroup.folder + "/" +
        newImages[trialIndex];

    }

    // 今の試行情報保存
    currentOldSide =
      oldLeft ? "left" : "right";

  }, 1000);
}

// 評価ボタン作成
const displayValues = [3, 2, 1, 0, 1, 2, 3];
const scoreValues = [-3, -2, -1, 0, 1, 2, 3];

for (let index = 0; index < displayValues.length; index++) {

  const btn = document.createElement("button");

  btn.innerText = displayValues[index];

  btn.onclick = () => {

    results.push({

        group: currentGroup.folder,

      trial: trialIndex + 1,

      old: oldImage,

      new: newImages[trialIndex],

      oldSide: currentOldSide,

      score: scoreValues[index],

      adjustedScore:
         currentOldSide === "left"
                  ? -scoreValues[index]
                : scoreValues[index]

    });

    trialIndex++;

    showTrial();

  };

  buttonsDiv.appendChild(btn);

}

let currentOldSide = "";

document
  .getElementById("startPractice")
  .onclick = () => {

    document
      .getElementById("instructionScreen")
      .style.display = "none";

    showTrial();

};