/* member join */
var Butwm = document.getElementById('wm');
Butwm.addEventListener('click', onClickButwm);

function onClickButwm() {
  window.open('join.html', '_blank','width=500, height=700, status=no, menubar=no, toolbar=no, resizable=no');
}

/* typing */
var text = "4인 4색의 조합 + 베르크는 4명의 구성원이 삶의 방식을 긍정적으로 바꾸는 움직임 이라는 가치를 가지고 모였습니다.";
var i = 0; 

function typing() {
  if (i < text.length) {  
    document.getElementById("four").innerHTML += text[i];    
    i++;
    setTimeout(typing, 100);
  } 
} 

typing();

/* member picture */

var ParkEl = document.getElementById('park-name'),
    LeeEl = document.getElementById('lee-name'),
    SongEl = document.getElementById('song-name'),
    KimEl = document.getElementById('kim-name'),
    memberPicEl = document.getElementById('mainmember-pic');

/* console.log (document.getElementsByClassName('mainmember-pic')); */
ParkEl.addEventListener("mouseenter", onMouseEnterPark);
ParkEl.addEventListener("mouseout", onMouseOutPark);

function onMouseEnterPark() {
    memberPicEl.classList.remove("basic");
    memberPicEl.classList.add("park");
}
function onMouseOutPark() {
  memberPicEl.classList.remove("park");
  memberPicEl.classList.add("basic");
}

LeeEl.addEventListener("mouseenter", onMouseEnterLee);
LeeEl.addEventListener("mouseout", onMouseOutLee);

function onMouseEnterLee() {
    memberPicEl.classList.remove("basic");
    memberPicEl.classList.add("lee");
}
function onMouseOutLee() {
  memberPicEl.classList.remove("lee");
  memberPicEl.classList.add("basic");
}

SongEl.addEventListener("mouseenter", onMouseEnterSong);
SongEl.addEventListener("mouseout", onMouseOutSong);

function onMouseEnterSong() {
    memberPicEl.classList.remove("basic");
    memberPicEl.classList.add("song");
}
function onMouseOutSong() {
  memberPicEl.classList.remove("song");
  memberPicEl.classList.add("basic");
}

KimEl.addEventListener("mouseenter", onMouseEnterKim);
KimEl.addEventListener("mouseout", onMouseOutKim);

function onMouseEnterKim() {
    memberPicEl.classList.remove("basic");
    memberPicEl.classList.add("kim");
}
function onMouseOutKim() {
  memberPicEl.classList.remove("kim");
  memberPicEl.classList.add("basic");
}



 
/* shop coffee hover */
var maskEls = document.querySelectorAll('.mask'),
    coffeeItemEls = document.querySelectorAll('.coffee-item'),
    cNameEls = document.querySelectorAll('.c-name'),
    _cuId = 0;

coffeeItemEls = Array.prototype.slice.call(coffeeItemEls)
maskEls = Array.prototype.slice.call(maskEls)
cNameEls = Array.prototype.slice.call(cNameEls)

function onMouseEnterList(e) {
    e.preventDefault();
    var el = e.currentTarget, 
        index = coffeeItemEls.indexOf(el);
        _cuId = index;

    maskEls[_cuId].classList.remove("mask");
    maskEls[_cuId].classList.add("bigmask");
    cNameEls[_cuId].classList.add("c-name-effect");
}

function onMouseLeaveList() {
    maskEls[_cuId].classList.remove("bigmask");
    maskEls[_cuId].classList.add("mask");
    cNameEls[_cuId].classList.remove("c-name-effect");
}

/* shop goods hover */
var goodsMaskEls = document.querySelectorAll('.goods-mask'),
    goodsItemEls = document.querySelectorAll('.goods-item'),
    gNameEls = document.querySelectorAll('.g-name'),
    _exId = 0;

goodsMaskEls = Array.prototype.slice.call(goodsMaskEls)
goodsItemEls = Array.prototype.slice.call(goodsItemEls)
gNameEls = Array.prototype.slice.call(gNameEls)

function onMouseEnterGoodsList(e) {
    e.preventDefault();
    var el = e.currentTarget, 
        gindex = goodsItemEls.indexOf(el);
        _exId = gindex;

    goodsMaskEls[_exId].classList.remove("goods-mask");
    goodsMaskEls[_exId].classList.add("goods-bigmask");
    gNameEls[_exId].classList.add("g-name-effect");
}

function onMouseLeaveGoodsList() {
    goodsMaskEls[_exId].classList.remove("goods-bigmask");
    goodsMaskEls[_exId].classList.add("goods-mask");
    gNameEls[_exId].classList.remove("g-name-effect");
}


function addEvent() {
  for(var i = 0; i < coffeeItemEls.length; i++){
    coffeeItemEls[i].addEventListener("mouseenter", onMouseEnterList);
    coffeeItemEls[i].addEventListener("mouseleave", onMouseLeaveList);
  }
  for(var i = 0; i < goodsItemEls.length; i++){
    goodsItemEls[i].addEventListener("mouseenter", onMouseEnterGoodsList);
    goodsItemEls[i].addEventListener("mouseleave", onMouseLeaveGoodsList);
  }
}

function init() {
  addEvent();
}

init();

//console.log(coffeeItemEls);
//console.log(maskEls);

/* coffeeItemEls.classList.remove('mask');
coffeeItemEls.classList.add('bigmask'); */

//console.log(coffeeItemEls);

//console.log(maskEls);
/* function Mask (onMouseEnterMask) {
  var el = e.currentTarget, index = coffeeItemEls.indexOf(el);
  console.log(el);
  maskEls[i].classList.remove('mask');
  maskEls[i].classList.add('bigmask');
}  */
