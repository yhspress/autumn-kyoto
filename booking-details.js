/* Booking guidance shares the existing seller URLs without changing attribution. */
window.KyotoBooking = (() => {
  const en = document.documentElement.lang === "en";
  const t = (ko, english) => en ? english : ko;
  const escape = value => String(value).replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
  const facts = {
    stay: {
      location: t("교토 숙소 목록에서 가와라마치·기온 또는 교토역 주변을 지도에서 선택", "Use the Kyoto hotel map to choose Kawaramachi, Gion or Kyoto Station"),
      use: t("체크인·체크아웃 날짜와 인원 입력 → 객실 선택", "Enter check-in, check-out and guests, then choose a room"),
      includes: t("조식·세금·짐 보관은 객실별로 확인", "Check breakfast, taxes and luggage storage for each room"),
      check: t("총 숙박비, 체크인 시각, 취소 기한과 현지 결제 비용 확인", "Check the full stay total, check-in time, cancellation deadline and charges due locally"),
      destination: t("교토 숙소 검색으로 이동 · 지역과 날짜는 직접 선택", "Opens Kyoto hotel search · select your area and dates"),
      cta: t("교토 숙소·객실 확인", "View Kyoto hotels & rooms")
    },
    transport: {
      location: t("연결 주소의 기본 구간은 오사카 → 교토. 실제 출발·도착역 확인", "The linked search defaults to Osaka → Kyoto. Check the actual departure and arrival stations"),
      use: t("출발일·시간·인원 선택 → 열차와 좌석 선택. 돌아오는 편은 별도 확인", "Select date, time and passengers, then train and seat. Check the return journey separately"),
      includes: t("선택한 열차 구간 기준. 시내 버스·근교 이동·패스 포함을 가정하지 마세요", "Coverage is for the selected train route. Do not assume city buses, day trips or passes are included"),
      check: t("승차역, 좌석, 발권·수령 방식과 변경·환불 조건 확인", "Check boarding station, seat, ticket collection and change/refund terms"),
      destination: t("오사카 → 교토 열차 검색으로 이동 · 시내·근교 교통은 별도", "Opens Osaka → Kyoto train search · local and day-trip transport are separate"),
      cta: t("오사카→교토 열차 확인", "View Osaka → Kyoto trains")
    },
    experience: {
      location: t("교토 체험 목록에서 원하는 다도·기모노·투어의 실제 주소와 집합 장소 확인", "In the Kyoto activity list, check the address and meeting point of your tea, kimono or tour option"),
      use: t("원하는 상품 선택 → 날짜·시간·인원 지정 → 바우처와 도착 안내 확인", "Choose an activity, then date, time and guests; read voucher and arrival instructions"),
      includes: t("체험 내용, 가이드 언어, 입장료·식사·이동 포함 여부는 상품별 확인", "Check activity content, guide language, entry fees, meals and transport for each option"),
      check: t("소요 시간, 어린이 연령, 취소 기한과 예약 확정 방식 확인", "Check duration, child age rules, cancellation deadline and confirmation method"),
      destination: t("교토 체험 목록으로 이동 · 소개한 체험을 목록에서 선택", "Opens the Kyoto activity list · select the experience described here"),
      cta: t("교토 다도·체험 상품 찾기", "Find Kyoto tea & activity options")
    },
    evening: {
      location: t("교토 체험 목록에서 저녁 운영 상품의 집합·종료 장소 확인", "Check meeting and finish locations for an evening option in the Kyoto activity list"),
      use: t("저녁 운영일·시작 시각 확인 → 인원 선택 → 귀가 동선 점검", "Check evening dates and start time, select guests, then plan your return route"),
      includes: t("야간 특별관람 입장권·가이드·이동 포함 여부는 상품별 확인", "Check whether special night entry, a guide or transfers are included"),
      check: t("종료 시각, 막차, 취소 조건 확인. 특정 사찰 입장을 보장하지 않습니다", "Check finish time, last train and cancellation terms. Entry to a specific temple is not guaranteed"),
      destination: t("기존 상품 링크가 현재 교토 체험 목록으로 열립니다. 저녁 운영 상품을 선택하세요", "The existing product link currently opens the Kyoto activity list. Choose an option that operates in the evening"),
      cta: t("교토 저녁 체험 상품 찾기", "Find Kyoto evening activities")
    }
  };
  function card(product, duration, links, images, visited) {
    const f = facts[product.key];
    const clicked = visited.has(`${duration}:${product.key}`);
    const rows = [[t("위치·구간", "Location / route"),f.location],[t("이용 방법", "How to use"),f.use],[t("포함 사항", "Inclusions"),f.includes],[t("예약 전 확인", "Before booking"),f.check]];
    return `<article class="product-card${clicked ? " link-visited" : ""}" id="product-${product.key}" data-product="${product.key}">
      <div class="product-thumb" style="background-image:url(&quot;${escape(images[product.key])}&quot;)"><span>${escape(product.icon)}</span></div>
      <div class="product-copy"><small>${escape(product.type)}</small><h4>${escape(product.title)}</h4><p class="recommendation"><b>${t("추천 이유", "Why consider it")}</b> ${escape(product.copy)}</p>
        <dl class="booking-facts">${rows.map(([label,value])=>`<div><dt>${label}</dt><dd>${value}</dd></div>`).join("")}</dl>
      </div>
      <div class="product-action"><p class="seller-destination">${f.destination}</p><a class="booking-cta" data-key="${product.key}" href="${escape(links[duration][product.key])}" target="_blank" rel="sponsored noopener noreferrer">${f.cta}<span class="sr-only">${t(" · 새 탭", " · new tab")}</span></a><span class="seller-note">${t("Trip.com 제휴 링크 · 가격·재고는 판매처 확인", "Trip.com affiliate link · check live prices and availability there")}</span>${clicked ? `<span class="click-status">${t("이 페이지에서 링크 클릭함 · 예약 완료 아님", "Link clicked on this page · booking not confirmed")}</span>` : ""}</div>
    </article>`;
  }
  function choices(plan) {
    const target = document.querySelector("#booking-shortcuts");
    const labels = {stay:t("숙소가 필요해요", "I need a hotel"),transport:t("오사카에서 이동해요", "I'm arriving from Osaka"),experience:t("체험을 하고 싶어요", "I want an activity"),evening:t("저녁 일정을 더해요", "I'd like an evening option")};
    target.innerHTML = plan.products.map(p=>`<a href="#product-${p.key}">${labels[p.key]}</a>`).join("");
  }
  function local(key, links) {
    const container = document.querySelector("#place-modal-booking");
    const area = {kiyomizu:t("기요미즈데라·기온", "Kiyomizu-dera / Gion"),east:t("교토 동부", "East Kyoto"),ohara:t("오하라", "Ohara"),takao:t("다카오", "Takao"),west:t("아라시야마", "Arashiyama"),yamashina:t("야마시나", "Yamashina"),nishikyo:t("요시미네데라", "Yoshiminedera")}[key];
    container.innerHTML = `<h3>${t("이 추천을 여행에 넣으려면", "Add this recommendation to your trip")}</h3><p>${t(`${area} 방문 전, 숙소 지도 또는 체험 목록에서 해당 권역을 선택하세요. 사찰 입장권이나 이 장소를 방문하는 투어가 자동 선택되지는 않습니다.`, `Before visiting ${area}, choose that area on the hotel map or activity list. These links do not preselect temple entry or a tour visiting this place.`)}</p><div class="local-booking-links"><a class="booking-cta" href="${escape(links.stay)}" target="_blank" rel="sponsored noopener noreferrer">${t("교토 숙소·위치 확인", "View Kyoto hotels & locations")}</a><a class="booking-cta" href="${escape(links.experience)}" target="_blank" rel="sponsored noopener noreferrer">${t("교토 체험·투어 찾기", "Find Kyoto activities & tours")}</a></div><p class="seller-note">${t("Trip.com 제휴 링크 · 집합 장소, 포함 사항, 운영일과 취소 조건은 선택한 상품에서 확인", "Trip.com affiliate links · check meeting point, inclusions, dates and cancellation terms on the selected option")}</p>`;
  }
  document.addEventListener("keydown", event => {
    const modal = document.querySelector("#place-modal");
    if (!modal || modal.hidden || event.key !== "Tab") return;
    const items = [...modal.querySelectorAll('button:not([disabled]),a[href]')].filter(el=>el.getClientRects().length);
    const first = items[0], last = items[items.length-1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  });
  return {card, choices, local};
})();
