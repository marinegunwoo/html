// 기존 유저를 저장하고 있는 배열
let users = ["김상협", "이용주"];

// 현재 접속한 유저를 입력받는다.
let currentUser = prompt("Username을 입력해 주세요!");

// 새로운 유저인지 확인한다.
let isnew = true;

//실습 1-1 : users 배열에 currentUser가 있는지 확인하고 있으면 isnew를 false로 변경한다.
/* ************************************************************************************ */
// 여기에 작성해 주세요.
for (users of users) {
    if (users==currentUser) {
        isnew=false;
    }
}
/* ************************************************************************************ */

//실습 1-2 :  isnew의 값에 따라 다른 팝업 메시지를 출력한다.
// ex) 신규 유저: "박성태님 처음 접속 하신 것을 환영합니다."
// ex) 기존 유저: "김상협님 다시 접속 하신 것을 환영합니다."
/* ************************************************************************************ */
// 여기에 작성해 주세요.
if(isnew==true){
    alert('${currentUser}님 처음 접속 하신 것을 환영합니다.');
}
else{
    alert('${currentUser}님 다시 접속 하신 것을 환영합니다.');
}
/* ************************************************************************************ */

//실습 1-3 : Q를 입력할 때까지 계속해서 prompt 메시지를 띄운다.
// ex) prompt 메시지: 무엇을 도와드릴까요? (press: Q to exit)
/* ************************************************************************************ */
// 여기에 작성해 주세요.
while(true){
    let commend = prompt('무엇을 도와드릴까요? (press: Q to exit)');
    if(commend=='Q'||commend=='q') break;
}
/* ************************************************************************************ */
