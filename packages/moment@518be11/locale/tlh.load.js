montageDefine("518be11","locale/tlh",{dependencies:["../moment"],factory:function(a,e,j){!function(t,r){"object"==typeof e&&"undefined"!=typeof j&&"function"==typeof a?r(a("../moment")):"function"==typeof define&&define.amd?define(["../moment"],r):r(t.moment)}(this,function(a){"use strict";function e(a){var e=a;return e=a.indexOf("jaj")!==-1?e.slice(0,-3)+"leS":a.indexOf("jar")!==-1?e.slice(0,-3)+"waQ":a.indexOf("DIS")!==-1?e.slice(0,-3)+"nem":e+" pIq"}function j(a){var e=a;return e=a.indexOf("jaj")!==-1?e.slice(0,-3)+"Hu’":a.indexOf("jar")!==-1?e.slice(0,-3)+"wen":a.indexOf("DIS")!==-1?e.slice(0,-3)+"ben":e+" ret"}function t(a,e,j,t){var n=r(a);switch(j){case"mm":return n+" tup";case"hh":return n+" rep";case"dd":return n+" jaj";case"MM":return n+" jar";case"yy":return n+" DIS"}}function r(a){var e=Math.floor(a%1e3/100),j=Math.floor(a%100/10),t=a%10,r="";return e>0&&(r+=n[e]+"vatlh"),j>0&&(r+=(""!==r?" ":"")+n[j]+"maH"),t>0&&(r+=(""!==r?" ":"")+n[t]),""===r?"pagh":r}var n="pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_"),o=a.defineLocale("tlh",{months:"tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"),monthsShort:"jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"),monthsParseExact:!0,weekdays:"lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),weekdaysShort:"lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),weekdaysMin:"lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[DaHjaj] LT",nextDay:"[wa’leS] LT",nextWeek:"LLL",lastDay:"[wa’Hu’] LT",lastWeek:"LLL",sameElse:"L"},relativeTime:{future:e,past:j,s:"puS lup",m:"wa’ tup",mm:t,h:"wa’ rep",hh:t,d:"wa’ jaj",dd:t,M:"wa’ jar",MM:t,y:"wa’ DIS",yy:t},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});return o})}});