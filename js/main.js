//main.js

/* content1 퀵메뉴 이미지 */
/*let quick1='';
for(let i=0; i<20; i++){
    if(i<10){
        quick1 += '<img src="images/quick01/quick01_0000${i}.png" />';
    }else{
        quick1 += '<img src="images/quick01/quick01_000${i}.png" />';
    }
}
document.querySelector("span.quick1").innerHTML = quick1;
*/

const quickSpan = document.querySelectorAll('.content1>ul>li>a>span');
for(let j=0; j<quickSpan.length; j++){//0,1,2,3
    let images=''
    for(let i=0; i<20; i++){
        if(1<10){
            images += '<img src="images/quick0${j+1}/quick0${j+1}_0000${i}.png" />';
        }else{
            images += '<img src="images/quick0${j+1}/quick0${j+1}_000${i}.png" />';
        }
    }
    quickSpan[j].innerHTML = images;
}

//for()문을 이용해서 <img>를 quick01_00000.png_00019.png 생성
//<span>안에 넣기

// 로그인 이미지
let appear="";
for(let k=0;k<57;k++){
    if(k<10){
        appear += '<img src="images/appear/appear_000${k}.png"/>';
    }else{
        appear +='<img src="images/appear/appear_000${k}.png"/>';
    }
}
document.querySelector("a.appear").innerHTML = appear;

//loop변수에 차곡차곡 저장
let loop="";
for(let h=0; h<82;h++){
    if(h<10){
        loop += '<img src="images/loop/loop_0000${h}.png"/>';
    }else{
        loop+='<img src=images/loop/loop_000${h}.png"/>';
    }
}
document.querySelector(".login>.loop");

/* 고객센터*/
//toggle()
//title="고객센터 열기" -> title="고객센터 닫기"

const topMenuDD = document.querySelectorAll('dl.topMenu>dd');

topMenuDD[4].addEventListener('click',e=>{
    e.currentTarget.classList.toggle("on");
    if(e.currentTarget.classList.contains("on")){
        e.currentTarget.children[0].setAttribute("title","고객센터 닫기");
    }else{
        e.currentTarget.children[0].setAttribute("tilte","고객센터 열기");
    }
})

/* 주메뉴 */
//.header_wrap.on
//nav.gnb>ul>li>ul.on

const headerWrap = document.querySelector('.header_wrap');
const mainList = document.querySelectorAll('.gnb>ul>li');//큰li
var subMenu = document.querySelectorAll('.gnb>ul>li>ul');

for (var i = 0; i < gnbMenu.length; i++) {
  gnbMenu[i].addEventListener('mouseover', () => {
    //고객센터에 on이 붙어있으면 고객센터의 on을 지운다
    
    if(topMenuDD[4].classList.contains('on')){
        topMenuDD[4].classList.remove("on");
    }
    //검색박스에 on 붙어있으면 검색박스의 on을 지운다
    if(srchOpen.classList.contains('on')){
        srchOpen.classList.remove("on");
        srchBox.classList.remove("on");
    }

    headerWrap.classList.add('on');
    subMenu.forEach(item=>{
        item.classList.add("on");
    })
  });//mouseover
gnbMenu[i].addEventListener('mouseout',()=>{
    headerWrap.classList.remove('on');
    subMenu.forEach(item=>{
        item.classList.remove("on");
})
  });//mouseout
};

gnbMenu[i].addEventListener('focus',(=>{

}))

document.querySelector("a.loop").innerHTML = loop;

/*로그인 애니메이션*/
//animation: ani 2.85s linear 0s 1;
//animation: ani 2.85s linear 0.05s 1;
//animation: ani 2.85s linear 0.10s 1;

//loop 0~81 이미지
//animation:ani 4.1s linear 2.85s infinite;
//animation:ani 4.1s linear 2.90s infinite;
//animation:ani 4.1s linear 2.95s infinite;
const delay = 0.05;
const appearImgs = document.querySelectorAll(".aapear>img");
const loopImgs = document.querySelectorAll(".loop>img");
for(let i=0; i<appearImgs.length; i++){
    appearImgs[i].style.animaition = 'ani 2.85s linear ${i*delay}s 1';
}
for(let j=0; j<loopImgs.length; j++){
    loopImgs[j].style.animaition = 'ani 4.1s linear ${2.85+(j*delay)}s infinite';
}

/*고객센터*/


/*toggle*/

/* 검색열기 닫기 */

const srchBox = document.querySelector("form.srch");
const srchOpen = document.querySelector(".srch_open");

srchOpen.addEventListener('click',e=>{
    e.preventDefault();
    e.currentTarget.toggle('on');

    if(e.currentTarget.classList.contains('on')){
        e.currentTarget.children[0].setAttribute('tilte','검색입력서식 닫기');
    }else{
        e.currentTarget.children[0].setAttribute('title','검색입력서식 열기');
    }
    });

    //배너
    let bnnNum = 0;
    let lastNum = document.querySelectorAll('.banner_frame>section').length -1;

    const btnNext = document.querySelector('.btn_next');
    const btnPrev = document.querySelector('.btn_prev');
    const bnnFrame = document.querySelector('.banner_frame');
    const bnnSection = document.querySelector('.banner_frame>section');//0~11번 섹션

    const arrowA = document.querySelectorAll('.banner_arrow>a');
    const rollingA = document.querySelectorAll('.banner_rolling a');
    const bnn_rollA = document.querySelectorAll('.banner_rolling li a');


    let bnnW = document.querySelector('body>section').offsetWidth;
    window.addEventListener('resize',()=>{
        bnnW = document.querySelector('body>section').offsetWidth;
    });

    let bnnNum = 0;
    let lastNum = bnnSection.length -1;

    let secwhite = bannerNumber => {
 if(bnnSection[bnnNum].classList.contains('white')){
            arrowA.forEach(item=>{
                item.classList.add('white');
            })
            rollingA.forEach(item=>{
                item.classList.add('white');
            })
        }else{
                arrowA.forEach(item=>{
                    item.classList.remove('white');
                })
                rollingA.forEach(item=>{
                    item.classList.remove('white');
                })
        }
        bnn_rollA.forEach(item=>{
            item.classList.remove('on');
        })
        
        btnPrev.addEventListener("click",e=>{
    e.preventDefault();
    if(bnnNum<0) bnnNum=lastNum;
    bnnFrame.style.left = '${-bnnNum * bnnW}px';

    bnn_rollA.forEach(item=>{
        item.classList.remove('on');
    });
    bnn_rollA[bnnNum].classList.add('on');
});
    }

    btnNext.addEventListener('click',e=>{
        e.preventDefault();
        bnnNum++;
        if(bnnNum>lastNum)bnnNum = 0;
        //bnnFrame.style.left = '${-bnnNum * 100}%' //0,-100%, -200% ... -1100%
        bnnFrame.style.left = '${-bnnNum * bnnW}px';
        secWhite(bnnNum);
    });

       

btnPrev.addEventListener("click",e=>{
    e.preventDefault();
    bnnNum--;
    if(bnnNum<0) bnnNum=lastNum;
    bnnFrame.style.left = '${-bnnNum * bnnW}px';
    secWhite(bnnNum);
    bnnFrame.style.left = `${-bnnNum * bnnW}px`;
    autoBnn = setTimeout(autoBanner,5000);
})

let autoBnn = setTimeout(autoBanner,5000);

//재생/멈춘 버튼
let flag = true;
const btnPlay = document.querySelector('a.btn_play');
btnPlay.addEventListener('click',e=>{
    e.preventDefault();
    if(flag){
        clearTimeout(autoBanner);
        btnPlay.classList.add('pause');
        flag = false;
    }else{
        autoBnn = setTimeout(autoBanner,5000);
        btnPlay.classList.remove('puase');
        flag = true;
    }
});

/* 롤링클릭 */
const bnnRollLists = document.querySelectorAll(".banner_rolling li");

for(let i=0;i<bnnRollLists.length;i++){
    bnnRollLists[i].addEventListener("click",e=>{
        clearTimeout(autoBnn);
        bnnFrame.style.left = `${-i * bnnW}px`;
        secWhite(i);
        });
};

//content1
//마우스 올렸을때 이미지에 애니메이션 적용
//마우스 뗏을때 이지 애니메이션 삭제

const content1Li = document.querySelectorAll(".content1 ul li");
for(let i=0;i<content1Li.length;i++){
    content1Li[i].addEventListener("mouseover",e=>{
        for(let k=0;k<20;k++){
            let imgLi = e.currentTarget.children[0].children[0].children;
            imgLi[k].style.animaition = 'ani ls linear ${dealy*k}s 1';
        }
    })
}

/* contentLi,forEach(item=>{
    item.addEventListener("mouseover",e=>{
        for(let k=0;k<20;k++){
            let imgLi = e.currentTarget.children[0].children[0].children;
            imgLi[k].style.animaition = 'ani ls linear ${dealy*k}s 1';
        }
    })
}
*/
for(let i=0;i<content1Li.length;i++){
    content1Li[i].addEventListener("mouseout",e=>{
        for(let k=0;k<20;k++){
            let imgLi = e.currentTarget.children[0].children[0].children;
            imgLi[k].style.animaition = "none";
        }
    })
}

    //next버튼을 눌렀을때
    //배너번호 1증가
    //배너번호가 마지막 배너번호보다 크면 배너번호가 다시 0으로 
    //배너프레임의 left값 변경해서 배너 움직이게 

    //prev버튼 눌렀을때

    //오토배너 작동 - setTimeout 사용, 재귀함수 사용

    /*스크롤이벤트*/
const Btntop = document.querySelector('.top');
top.addEventListener('click',e=>{
    e.preventDefault();
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});

//패밀리 사이트
const familySite = document.querySelector("dd.family_site");
familySite.addEventListener('click',e=>{
    e.preventDefault();
    e.currentTarget.classList.toggle("on");

    if(e.currentTarget.classList.contains("on");
    
    if(e.currentTarget.classList.contains("on")){
        e.currentTarget.children[0].setAttribute("title","닫기");
    }else{
        e.currentTarget.childern[0].setAttribute("title","열기");
    }
});

behavior:'smooth'

window.addEventListener('scorll',()=>{
    let scroll = document.querySelector('html').scrollTop;
    //도넛
    const doughnut_Left_L = document.querySelector(".doughnut_Left_L");
    const doughnut_Left_s = document.querySelector(".doughnut_Left_s");
    const combine_Left = documnet.querySelector(".combine_Left");

    combine_Left.style.top='${scroll*0.7}px';
    doughnut_Left_L_s.style.top = '${scroll*0.5}px';
    doughnut_Left_L.style.top = '${1310-scroll*0.8}px';
});

//top버튼
if(scroll<=0){
    

//content3
//li 하나 하나에 마우스오버 하면 모든 li에 지우고 마우스 오버한 li만 .on이 붙어라
const conten3Lists = document.querySelectorAll(".content3>div>div>ul>li")

var all = document.querySelectorAll('.content3_inner>div>ul>li');
all.forEach(item=>{
    item.addEventListener('mouseover',e=>{
        e.currentTarget.classList.add('on');
    });
    item.addEventListener('mouseout',e=>{
        e.currentTarget.classList.remove('on');
    });
});

//대분류
//li하나하나를 클릭했을때
//class 속성값을 가져와서 변수에 저장
//변수값이랑 정확하게 일치하는 케이스에서 해당 클래스이름에 해당되는 li만 보이게 설정한다.
//해당 클래스이름에 해당되는 li만 보이게 설정한다. - 각 클래스이름에 해당되는 li만 보이게 설정한다. -각 클래스 이름에 해당되는 li만 따로 모아서 저장해놓고
const group = document.querySelectorAll(".content3_inner > ul > li > a");

const all = document.querySelectorAll(".content3_inner > ul > li ");
const ent = document.querySelectorAll(".content3_inner > ul > li.ent ");
const shop = document.querySelectorAll(".content3_inner > ul > li.shop ");
const diner = document.querySelectorAll(".content3_inner > ul > li.diner ");
const box = document.querySelectorAll(".content3_inner > ul > li.box ");

for(let k=0;k<group.length;k++){
    group[k].addEventListener("click", e=>{
        e.preventDefault();

        group.forEach(item=>{
            item.classList.remove('on');
        });
        e.currentTarget.classList.add('on');

        let className= e.currentTarget.parentElement.getAttribute("class");

        all.forEach(item=>{
            item.style.display = "none"
        });

        switch(className){
            case"all":
            all.forEach(item=>{
                item.style.display = "block";
            });
            break;
            case "ent":
                ent.forEach(item=>{
                    item.style.display = "block";
                });
                break;
                case "shop":
                    shop.forEach(item=>{
                        item.style.display = "block";
                    });
                    break;
                    case"diner":
                    diner.forEach(item=>{
                        item.style.display = "block";
                    });
                    break;
                    case "box":
                        box.forEach(item=>{
                            item.style.display = "block";
                        });
                        break;
                        default:
                            break;
        }
    });
}

//top

//햄버거버튼 클릭
const body = document.querySelector("body");
const bg = document.querySelector("div.bg");

const mobBtn = document.querySelector(".mobBtn")
const mobBtn_Close = document.querySelector(".mobBtn_close")
const mob = document.querySelector(".mob")

mobBtn_Close.addEventListener('click',e=>{
    e.preventDefault();
    body.classList.add("on");
    bg.classList.add("on");
    mob.classList.add("on");
});

mobBtn_Close.addEventListener('click',e=>{
    e.preventDefault();
});
