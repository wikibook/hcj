// 커피 메뉴 데이터
const coffeeMenu = [
  {
    id: 1,
    name: "아메리카노",
    image: "images/menu1.jpg",
    description: "원두 고유의 풍미를 느낄 수 있는 깔끔하고 담백한 커피",
    price: "4,500원",
  },
  {
    id: 2,
    name: "카페 라떼",
    image: "images/menu2.jpg",
    description: "진한 농도의 에스프레소와 부드러운 스팀 밀크가 조화롭게 어우러진 음료",
    price: "5,000원",
  },
  {
    id: 3,
    name: "카푸치노",
    image: "images/menu3.jpg",
    description: "부드러운 우유 거품이 매력적인 에스프레소 음료",
    price: "5,000원",
  },
  {
    id: 4,
    name: "카페 모카",
    image: "images/menu4.jpg",
    description: "진한 초콜릿 시럽과 에스프레소, 스팀 밀크가 어우러져 달콤하고 깊은 맛을 자랑하는 음료",
    price: "5,500원",
  },
  {
    id: 5,
    name: "카라멜 마키아또",
    image: "images/menu5.jpg",
    description: "향긋한 바닐라 향과 카라멜 소스가 어우러진 달콤한 에스프레소 음료",
    price: "5,900원",
  }
];

// DOM 요소 가져오기
const menuItems = document.querySelectorAll(".menu-item");
const popup = document.querySelector(".popup");
const popupClose = document.querySelector(".popup-close");

// 버튼 클릭 시 팝업 활성화 및 콘텐츠 채우기
menuItems.forEach((item, index) => {
  item.querySelector(".menu-button").addEventListener("click", () => {
    const menu = coffeeMenu[index];
    popup.querySelector(".popup-title").textContent = menu.name;
    popup.querySelector(".popup-left img").src = menu.image;
    popup.querySelector(".popup-details").textContent = menu.description;
    popup.querySelector(".popup-price").textContent = menu.price;
    popup.style.display = "flex"; // 팝업 열기
  });
});

// 버튼 클릭 시 팝업 닫기
popupClose.addEventListener("click", () => {
  popup.style.display = "none";
});

// 주문 처리 이벤트
const orderForm = document.getElementById("orderForm");

orderForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const popupTitle = popup.querySelector(".popup-title").textContent;
  const temperature = e.target.elements["temperature"].value;
  const size = e.target.elements["size"].value;
  const takeout = e.target.elements["takeout"].checked ? "테이크아웃" : "매장 이용";

  alert(`[주문 완료]\n${popupTitle}\n${temperature}, ${size}, ${takeout}`);
});
