// 동영상 강의에 나온 코드를 그대로 실습하세요
// TODO : DOM으로부터 필요한 엘리먼트를 불러오세요.

console.log('안녕')

// 아이디 인풋
let elInputUsername = document.querySelector('#username')
console.log(elInputUsername)

// 메시지들 가져오기 
let elSuccessMessage = document.querySelector('.success-message')
console.log(elSuccessMessage)

let elFailureMessage = document.querySelector('.failure-message')
console.log(elFailureMessage)

//hide display: none -> remove로 없애면 글자가 보임
// elFailureMessage.classList.remove('hide')
// elSuccessMessage.classList.remove('hide')

//아이디 입력창(elInputUsername)에 글자를 키보드로 입력할때
elInputUsername.onkeyup = function() {
      if(isMoreThan4Length(elInputUsername.value)) {
        // 성공 메시지가 떠야함 
    elSuccessMessage.classList.remove('hide')
    // 실패메시지는 없어져야함
    elFailureMessage.classList.add('hide')

      } 
        else {
    elSuccessMessage.classList.add('hide')
    elFailureMessage.classList.remove('hide')


      }
}


function isMoreThan4Length(value) {
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
  return value.length >= 4
}

// 비밀번호 인풋
let elInputPassword = document.querySelector("#password")
console.log(elInputPassword)
// 비밀번호 확인 인풋
let elInputRePassword = document.querySelector("#password-retype")
console.log(elInputRePassword)
//mismatch message
let mismatchMessage = document.querySelector(".mismatch-message")
console.log(mismatchMessage)

//비밀번호 확인창에 keyup 이벤트 핸들러 주기
elInputRePassword.onkeyup = function() {
  if(isMatch(elInputPassword.value,elInputRePassword.value )) {
    // 비밀번호랑 비밀번호 창이 같으면
    // console.log("같아")
    mismatchMessage.classList.add('hide')
  } else {
    // console.log("다른데!")
    mismatchMessage.classList.remove('hide')

  }
}
//비밀번호1 2가 일치하면 일치하다고 떠야함! 
// boolean 타입 리턴 
function isMatch (password1, password2) {
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
  return password1 === password2
}

