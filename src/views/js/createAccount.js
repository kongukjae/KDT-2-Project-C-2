// ! tag 생성하는 모듈 불러옴
import tagMaker from "/src/models/tag/tagMaker.js";
import { sendCookie } from "../../../utils/Cookie/cookieManager.js";
// ! wrap, container 식별
// const wrap = document.getElementById("wrap");
// const container = document.getElementById("container");
// ! 유효성 검사 모듈 불러옴
import {validation, valTypeError} from "../../../utils/Account/regularExpress/accountValidation.js"
import {checkPW} from '../../../utils/Account/regularExpress/checkPWValidation.js'
import {checkIdDuplicationRequest} from "../../../utils/Account/regularExpress/idValidation.js"

const wrap = tagMaker("div", document.body, {
  id: "wrap",
});
const colorPaper = tagMaker("div", wrap, {
  id: "colorPaper",
});
const container = tagMaker("div", wrap, {
  id: "container",
});

const topMenu = tagMaker("div", container, {
  id: "top_header",
});

tagMaker("h1", topMenu, {
  className: "header",
  innerText: "계정 생성",
});

const account_information = tagMaker("div", container, {
  className: "account_information",
});

//* form 태그 생성 및 식별 & form 태그 안에 input 태그 생성

const form = tagMaker("form", account_information, {
  className: "createAccountForm",
  action: "checkCreateAccount",
  method: "POST",
});
// //! input 태그만 감싼 div 추가
const inputText = tagMaker("div", form, {
  id: "inputText",
});

const ID = tagMaker("input", inputText, {
  type: "text",
  name: "id",
  id: "uid",
  placeholder: "아이디",
  // required: "true",
});
const idDuplicationCheck = tagMaker("input", inputText, {
  type : "button",
  value : "중복 검사"
})

let idDuplicate = (await checkIdDuplicationRequest(ID.value))? true:false;
idDuplicationCheck.addEventListener("click", async() => {
  if(ID.value !== "") {
    if(! await checkIdDuplicationRequest(ID.value)) {
      // console.log(ID.value);
      alert("너 중복됐어");
      } else {
        alert("너 가입할 수 있어");
      }
  } else {
  alert("아이디 값을 입력해야 합니다.");
  // console.log(await checkIdDuplicationRequest(ID.value))
  }
})

const password = tagMaker("input", inputText, {
  type: "password",
  name: "password",
  id: "password",
  placeholder: "비밀번호",
  // required: "true",
});

const password_check = tagMaker("input", inputText, {
  type: "password",
  id: "password_check",
  placeholder: "비밀번호 확인",
  // required: "true",
});

tagMaker("input", inputText, {
  type: "text",
  name: "name",
  id: "name",
  placeholder: "이름",
  // required: "true",
});

tagMaker("input", inputText, {
  type: "email",
  name: "email",
  id: "email",
  placeholder: "이메일",
  // required: "true",
});

tagMaker("input", inputText, {
  type: "text",
  name: "phone_number",
  id: "phone_number",
  placeholder: "휴대전화번호",
  // required: "true",
});

tagMaker("input", inputText, {
  type: "text",
  name: "id_number",
  id: "id_number",
  placeholder: "주민등록번호",
  // required: "true",
});

//*

//* 개인정보수집동의, 마케팅광고수신 동의 체크박스 영역

const checkbox = tagMaker("div", form, {
  className: "checkbox",
});

const personalBox = tagMaker("div", checkbox, {
  className: "personal",
});

tagMaker("div", personalBox, {
  className: "personal_check_header",
});

tagMaker("div", personalBox.children[0], {
  className: "personal_header_title",
  innerText: "개인정보수집활용",
});

const personalCheckbox = tagMaker("div", personalBox.children[0], {
  className: "personal_checkbox",
});

const agreedCheck = tagMaker("input", personalCheckbox, {
  type: "checkbox",
  name: "person_info_agreement",
  id: "agreed_check",
});

tagMaker("label", personalCheckbox, {
  htmlFor: "agreed_check",
  innerText: "동의함",
});

// ? 안내문구 생성
let personalText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemominima rerum et neque quae, incidunt tempora minus quamsimilique libero odit nostrum architecto aperiam modilaudantium adipisci voluptatum est exercitationem. Lorem ipsumdolor sit amet consectetur adipisicing elit. Quas optiomaiores dolores omnis. Modi in placeat numquam fugiat, rationeperspiciatis sit ad voluptas maxime amet ducimus quidem!Nesciunt, nostrum voluptatibus. Lorem ipsum dolor sit ametconsectetur adipisicing elit. Quia illum illo voluptatem et,fugiat animi eveniet earum. Delectus sequi impedit hic eos utquisquam consectetur, deserunt ea eligendi? Deleniti, quasi!`;
tagMaker("div", personalBox, {
  className: "personal_information_text",
  innerText: personalText,
});

const marketingbox = tagMaker("div", checkbox, {
  className: "marketing",
});

tagMaker("div", marketingbox, {
  className: "marketing_check_header",
});

tagMaker("div", marketingbox.children[0], {
  className: "personal_header_title",
  innerText: "마케팅 광고 수신 동의",
});

const marketingCheckbox = tagMaker("div", marketingbox.children[0], {
  className: "marketing_checkbox",
});

const markettingCheckBox = tagMaker("input", marketingCheckbox, {
  type: "checkbox",
  name: "marketing_agreement",
  id: "marketing_agreed_check",
});

const hiddenInput = tagMaker("input", marketingCheckbox, {
  type: "hidden",
  name: "marketing_agreement",
  value: 0,
});

tagMaker("label", marketingCheckbox, {
  htmlFor: "marketing_agreed_check",
  innerText: "동의함",
});

let marketingText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemominima rerum et neque quae, incidunt tempora minus quamsimilique libero odit nostrum architecto aperiam modilaudantium adipisci voluptatum est exercitationem. Lorem ipsumdolor sit amet consectetur adipisicing elit. Quas optiomaiores dolores omnis. Modi in placeat numquam fugiat, rationeperspiciatis sit ad voluptas maxime amet ducimus quidem!Nesciunt, nostrum voluptatibus. Lorem ipsum dolor sit ametconsectetur adipisicing elit. Quia illum illo voluptatem et,fugiat animi eveniet earum. Delectus sequi impedit hic eos utquisquam consectetur, deserunt ea eligendi? Deleniti, quasi!`;

tagMaker("div", marketingbox, {
  className: "marketing_information_text",
  innerText: marketingText,
});

//*

//* 제출 버튼

const buttons = tagMaker("div", form, {
  className: "submitButton",
});

const previousButton = tagMaker("button", buttons, {
  className: "accountSubmit",
  type: "button",
  innerText: "돌아가기",
});

tagMaker("button", buttons, {
  className: "accountSubmit",
  type: "submit",
  innerText: "생성",
});

previousButton.addEventListener("click", (event) => {
  history.go(-1);
});

//*
// ! 비밀번호 확인 로직
checkPW(password_check, password)
// ! 회원가입 데이터 전송 로직
// 클라이언트 인풋 데이터 선 처리
form.addEventListener("submit", (event) => {
  event.preventDefault();
  // if (idDuplicate === false) {
  //   throw "아이디가 중복됐습니다."
  // }
  const accountObject = {
    id : form.id.value,
    password : form.password.value,
    name : form.name.value,
    email : form.email.value,
    phone_number : form.phone_number.value,
    id_number : form.id_number.value,
  }
  // ! 원래 위치야
  // const A = validation(accountObject, form);
  // valTypeError(A);
  if (markettingCheckBox.checked === true) {
    hiddenInput.disabled = true;
  } else if (markettingCheckBox.checked === false) {
    hiddenInput.disabled = false;
  }
  // console.log("잘 됨")
  // agreed data 조건 -> checked
  // console.log(agreed_check.checked)
  // console.log(marketing_agreed_check.checked)

  if (agreed_check.checked !== true) {
    alert("개인 정보 수집활용 동의는 필수 사항입니다");
    event.preventDefault();
  } else {
    // DB에 전송 할 데이터
    // console.log("개인정보 수집 성공 데이터 : " + agreed_check.value);
    agreed_check.value = 1;
    console.log("개인정보 수집 성공의 데이터:", agreed_check.value);
  }

  if (marketing_agreed_check.checked === true) {
    marketing_agreed_check.value = 1;
    // hiddenInput.disabled = true;
    // console.log(marketing_agreed_check.value);
  } else {
    // hiddenInput.disabled = false;
    // marketing_agreed_check.value = 0;
    // marketing_agreed_check.checked = true;
    // console.log("마케팅 수집 성공의 데이터:", form.marketing_agreed_check.value);
    // console.log("뭔가 잘못 되었습니다. (회원가입 -> 서브밋 이벤트)");
  }
  // console.log(marketingCheckbox)
  const A = validation(accountObject, form);
  valTypeError(A);
});


//! 쿠키 확인

sendCookie((data) => {
  console.log(data);
  console.log(data.login);
  if (data.login === "true") {
    alert("잘못된 접근입니다.");
    location.href = "/src/views/js/index.html";
    // history.go(-1);
  }
});
