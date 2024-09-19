function myFunction() {
    var x = document.getElementById("myNav");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
  }
  let menu = document.querySelector('#bars');
  let navbar = document.querySelector('.navbar');

//   let popupContainer = document.querySelector('.sectionB .pop-up');
// //   let popupBox = popupContainer.querySelector('.popup')
//   let closeButton = popupContainer.querySelector('.bx-x');

//     document.querySelector('.btn').onclick = () => {
//         // console.log('Button clicked');
//         popupContainer.classList.toggle('active');
//     };

//     closeButton.onclick = () => {
//         // console.log('ClosedButton clicked');
//         popupContainer.classList.remove('active');
//     };
document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab-btn');
    const all_content = document.querySelectorAll('.tab_content');
    const foot = document.querySelector('.footer');

    tabs[0].classList.add('active');
    all_content[0].style.display = 'block';
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            tabs.forEach(tab => {
                tab.classList.remove('active')
            });
            tab.classList.add('active');
            all_content.forEach(content => {
                content.style.display = 'none'; 
            });
            all_content[index].style.display = 'block'; 
            if(index === 1){
                foot.classList.add('active');
            }else{
                foot.classList.remove('active');
            }
        })
    })
});



//   let popupContainer = document.querySelector('.pop-up');
//   let popupBox = popupContainer.querySelectorAll('.popup');
  
//   document.querySelectorAll('.food-box .food').forEach(food =>{
//       food.onclick = () =>{
//        popupContainer.style.display = 'flex';
//           let name = food.getAttribute('data-name');
//           popupBox.forEach(popup =>{
//               let target = popup.getAttribute('data-target');
//               if(name == target){
//                   popup.classList.add('active');
//               }
//           });
//       };
//   });
  
//   popupBox.forEach(close =>{
//       close.querySelector('.bx-x').onclick = () =>{
//           close.classList.remove('active');
//           popupContainer.style.display = 'none';
//       }
//   });

