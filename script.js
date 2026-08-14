const BOOKING_LINKS = {
  day: { transport: "", experience: "", evening: "" },
  "1n2d": { stay: "", transport: "", experience: "" },
  "2n3d": { stay: "", transport: "", experience: "" },
  "3n4d": { stay: "", transport: "", experience: "" }
};

const plans = {
  day: {
    number: "01", label: "DAY TRIP · EAST KYOTO", title: "동쪽 교토 핵심 예약",
    description: "오사카에서 출발해 기요미즈데라·기온·에이칸도를 잇는 하루. 숙소 대신 왕복 교통과 시간 지정 체험을 먼저 확인하세요.",
    route: "기요미즈데라 → 기온 → 에이칸도", priority: "체험 → 교통 → 식사", check: "마지막 열차 시간",
    image: "kyoto-temple-gate.png", imageLabel: "HIGASHIYAMA · 08:00",
    products: [
      { key:"transport", icon:"券", type:"TRANSPORT", title:"오사카 ↔ 교토 왕복 교통", copy:"출발역과 귀가 시간을 기준으로 개별 운임과 패스를 비교하세요.", meta:["포함 구간 확인","실물 교환 여부"], price:"판매처 실시간 가격", cta:"교통 옵션 비교" },
      { key:"experience", icon:"茶", type:"TIME-SLOT EXPERIENCE", title:"기온·히가시야마 다도 체험", copy:"기요미즈데라와 기온 사이에 넣기 쉬운 시간 지정 체험입니다.", meta:["무료 취소 기한","시작 15분 전 도착"], price:"시간별 잔여석 확인", cta:"체험 시간 확인" },
      { key:"evening", icon:"灯", type:"EVENING OPTION", title:"야간 단풍 또는 저녁 투어", copy:"귀가 열차와 종료 시간을 함께 확인한 뒤 마지막 일정으로 추가하세요.", meta:["종료 시간 확인","귀가 동선 점검"], price:"운영일·가격 확인", cta:"저녁 일정 비교" }
    ]
  },
  "1n2d": {
    number:"02", label:"1 NIGHT · EAST + WEST", title:"동쪽과 서쪽 예약 세트",
    description:"첫날 히가시야마의 저녁과 둘째 날 아라시야마의 아침을 묶는 구성. 숙소의 위치가 일정 완성도를 가장 크게 좌우합니다.",
    route:"히가시야마 → 가와라마치 → 아라시야마", priority:"숙소 → 체험 → 교통", check:"체크인·짐 보관",
    image:"kyoto-arashiyama.png", imageLabel:"ARASHIYAMA · 06:50",
    products:[
      { key:"stay", icon:"宿", type:"STAY", title:"가와라마치·기온 숙소 1박", copy:"첫날 저녁 산책과 둘째 날 서쪽 이동이 편한 지역을 우선 비교하세요.", meta:["무료 취소 여부","짐 보관 확인"], price:"1박 최저가 비교", cta:"숙소 가격 확인" },
      { key:"transport", icon:"鉄", type:"TRANSPORT", title:"아라시야마 이동 교통", copy:"JR·한큐·란덴 중 숙소 위치와 첫 방문지에 맞는 노선을 고르세요.", meta:["첫차 시간","패스 포함 구간"], price:"노선별 가격 확인", cta:"교통 옵션 비교" },
      { key:"experience", icon:"茶", type:"EXPERIENCE", title:"교토 다도·기모노 체험", copy:"첫날 오후 또는 둘째 날 점심 이후에 넣기 좋은 대표 체험입니다.", meta:["시간 지정","취소 기한 확인"], price:"날짜별 잔여석 확인", cta:"체험 예약 확인" }
    ]
  },
  "2n3d": {
    number:"03", label:"2 NIGHTS · BALANCED KYOTO", title:"교토 3개 권역 예약 세트",
    description:"히가시야마·아라시야마·북쪽 교토를 하루 한 권역씩. 같은 숙소에서 2박하면 짐 이동 없이 예약을 단순화할 수 있습니다.",
    route:"동쪽 교토 → 아라시야마 → 북쪽 교토", priority:"숙소 → 교통 → 체험", check:"연박 조건·노선 범위",
    image:"kyoto-tea.png", imageLabel:"NISHIJIN · 15:30",
    products:[
      { key:"stay", icon:"宿", type:"STAY", title:"교토 중심부 숙소 2박", copy:"가와라마치 또는 교토역에서 동일 객실 연박 가격을 비교하세요.", meta:["연박 총액","무료 취소 여부"], price:"2박 총액 비교", cta:"숙소 가격 확인" },
      { key:"transport", icon:"乗", type:"CITY TRANSPORT", title:"3일 교통 조합", copy:"하루 한 권역 기준으로 개별 결제와 교통 패스의 총액을 비교합니다.", meta:["JR 포함 여부","버스 혼잡 고려"], price:"패스·개별 운임 비교", cta:"교통권 비교" },
      { key:"experience", icon:"景", type:"DAY EXPERIENCE", title:"북쪽 교토·정원 체험", copy:"대중교통 환승이 많은 날은 소규모 투어나 차량 옵션도 비교하세요.", meta:["집합 장소","입장료 포함 여부"], price:"상품별 조건 확인", cta:"체험 옵션 비교" }
    ]
  },
  "3n4d": {
    number:"04", label:"3 NIGHTS · SLOW KYOTO", title:"교토 깊이 여행 예약 세트",
    description:"대표 권역 세 곳에 우지 또는 오하라를 더하는 일정. 숙소 3박을 먼저 확보하고 근교 이동과 체험을 차례로 조합하세요.",
    route:"히가시야마 → 아라시야마 → 북쪽 → 근교", priority:"숙소 → 근교 교통 → 체험", check:"3박 총액·근교 운행일",
    image:"kyoto-arashiyama.png", imageLabel:"UJI / OHARA · DAY 04",
    products:[
      { key:"stay", icon:"宿", type:"STAY", title:"교토 중심부 숙소 3박", copy:"세금과 조식 포함 여부까지 적용한 최종 결제 금액을 비교하세요.", meta:["최종 총액","객실 변경 조건"], price:"3박 총액 비교", cta:"숙소 가격 확인" },
      { key:"transport", icon:"郊", type:"DAY-TRIP TRANSPORT", title:"우지 또는 오하라 교통", copy:"선택한 근교에 따라 JR·게이한 또는 버스의 운행 시간표를 확인하세요.", meta:["왕복 소요 시간","막차·막차 버스"], price:"노선별 운임 확인", cta:"근교 교통 비교" },
      { key:"experience", icon:"茶", type:"LOCAL EXPERIENCE", title:"우지 차 체험·오하라 투어", copy:"마지막 날의 속도에 맞춰 시간 지정 체험 또는 가이드 투어를 고르세요.", meta:["운영 요일","이동 포함 여부"], price:"날짜별 상품 확인", cta:"근교 체험 비교" }
    ]
  }
};

const productImages = {
  stay: "kyoto-booking-stay.png",
  transport: "kyoto-booking-train.png",
  experience: "kyoto-tea.png",
  evening: "kyoto-booking-night.png"
};

let currentDuration = "day";
const completed = new Set();
const tabs = [...document.querySelectorAll(".duration-tab")];
const productList = document.querySelector("#product-list");
const toast = document.querySelector("#booking-toast");

function productCard(product) {
  const isDone = completed.has(`${currentDuration}:${product.key}`);
  return `<article class="product-card${isDone ? " completed" : ""}" data-product="${product.key}">
    <div class="product-thumb" style="background-image:url(&quot;${productImages[product.key]}&quot;)"><span>${product.icon}</span></div>
    <div class="product-copy"><small>${product.type}</small><h4>${product.title}</h4><p>${product.copy}</p><div class="product-meta">${product.meta.map(item => `<span>${item}</span>`).join("")}</div></div>
    <div class="product-action"><span>${product.price}</span><button class="booking-cta" type="button" data-key="${product.key}">${isDone ? "다시 확인" : product.cta}</button></div>
  </article>`;
}

function updateProgress() {
  const done = plans[currentDuration].products.filter(product => completed.has(`${currentDuration}:${product.key}`)).length;
  document.querySelector("#remaining-count").textContent = String(3 - done);
  document.querySelector("#progress-bar").style.width = `${(done / 3) * 100}%`;
}

function renderPlan(duration) {
  currentDuration = duration;
  const plan = plans[duration];
  document.querySelector("#plan-number").textContent = plan.number;
  document.querySelector("#plan-label").textContent = plan.label;
  document.querySelector("#plan-title").textContent = plan.title;
  document.querySelector("#plan-description").textContent = plan.description;
  document.querySelector("#plan-route").textContent = plan.route;
  document.querySelector("#plan-priority").textContent = plan.priority;
  document.querySelector("#plan-check").textContent = plan.check;
  document.querySelector("#plan-image-label").textContent = plan.imageLabel;
  document.querySelector("#plan-image").style.backgroundImage = `url("${plan.image}")`;
  productList.innerHTML = plan.products.map(productCard).join("");
  tabs.forEach(tab => {
    const active = tab.dataset.duration === duration;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-selected", String(active));
    tab.querySelector("b").textContent = active ? "선택됨" : "선택";
  });
  const saved = localStorage.getItem("autumnKyotoSavedPlan") === duration;
  const saveButton = document.querySelector("#save-plan");
  saveButton.classList.toggle("saved", saved);
  saveButton.innerHTML = saved ? "<span>♥</span> 저장된 일정" : "<span>♡</span> 이 일정 저장하기";
  updateProgress();
}

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => renderPlan(tab.dataset.duration));
  tab.addEventListener("keydown", event => {
    if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
    event.preventDefault();
    const next = event.key === "ArrowRight" ? (index + 1) % tabs.length : (index - 1 + tabs.length) % tabs.length;
    tabs[next].focus(); renderPlan(tabs[next].dataset.duration);
  });
});

productList.addEventListener("click", event => {
  const button = event.target.closest(".booking-cta");
  if (!button) return;
  const key = button.dataset.key;
  const link = BOOKING_LINKS[currentDuration][key];
  completed.add(`${currentDuration}:${key}`);
  if (link) window.open(link, "_blank", "noopener,noreferrer");
  else {
    toast.textContent = "제휴 예약 링크를 연결하면 판매처의 가격·조건 페이지로 이동합니다.";
    toast.classList.add("show");
    window.setTimeout(() => toast.classList.remove("show"), 2800);
  }
  renderPlan(currentDuration);
});

document.querySelector("#save-plan").addEventListener("click", () => {
  const alreadySaved = localStorage.getItem("autumnKyotoSavedPlan") === currentDuration;
  if (alreadySaved) localStorage.removeItem("autumnKyotoSavedPlan");
  else localStorage.setItem("autumnKyotoSavedPlan", currentDuration);
  renderPlan(currentDuration);
});

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#site-nav");
menuButton.addEventListener("click", () => {
  const open = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});
navigation.querySelectorAll("a").forEach(link => link.addEventListener("click", () => { navigation.classList.remove("open"); menuButton.setAttribute("aria-expanded", "false"); }));

document.querySelector("#year").textContent = new Date().getFullYear();
renderPlan("day");
