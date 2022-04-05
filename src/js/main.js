//-------------------
// 檔案
//-------------------
import css from "style.css";
import scss from "all.scss";
//---js---
import item from "object";


//-------------------
// 插件
//-------------------
// tailwind css
import tailwind from "tailwind.css";


//---js---
import axios from "axios";
// babel/polyfill 主要檔案
import "core-js/stable";
import "regenerator-runtime/runtime";



console.log(`dev`, PRODUCTION);
console.log("item傳入" , item);
console.log(`-------------------`);

let test = () => {
  return "test";
};
class rest {
  #a = 100;
}

// axios
axios
  .get("https://hexschool.github.io/ajaxHomework/data.json")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(response.err);
  });

async function asyncApiRes() {
  console.log("async: 1");
  let res1 = await axios.get(
    "https://hexschool.github.io/ajaxHomework/data.json"
  );
  console.log("async: 2");
  let res2 = await axios.get(
    "https://hexschool.github.io/ajaxHomework/data.json"
  );

  console.log("async: 3");
  console.log({ res1: res1.data, res2: res2.data });
  console.log("async: 4");
}
asyncApiRes();


let ary = ['立即激活','30天退款保證','技術和銷售支持','安全支付加密'];
// render
function renderList(id){
  const targetUl = document.querySelector(id);

  let color = "stroke-primary";
  if(id === 'list2') color = 'stroke-white';

  let str ="";
  ary.forEach(function(item){
    let template = `
    <li class="flex items-center mt-4">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-4 ${color}" fill="none" viewBox="0 0 24 24"
        stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
      ${item}
    </li>
    `
    str += template;
  })
  targetUl.innerHTML = str;
};
renderList('#list1');
renderList('#list2');
renderList('#list3');


const modal = document.querySelector('#modal');
const loginBtn = document.querySelector('#login');
const closeBtn = document.querySelector('#close');
const body = document.querySelector('body');

loginBtn.addEventListener('click', function(){
  modal.classList.remove("opacity-0" , "pointer-events-none");
  body.classList.add('overflow-y-hidden');
})
closeBtn.addEventListener('click', function(){
  modal.classList.add("opacity-0" , "pointer-events-none");
  body.classList.remove('overflow-y-hidden');
})
