# AUTUMN KYOTO

당일치기, 1박 2일, 2박 3일, 3박 4일의 기간별 교토 가을 여행 일정을 소개하는 정적 웹사이트입니다.

## GitHub에 올리기

이 폴더 안의 파일 전체를 `autumn-kyoto` 저장소 최상위에 업로드하세요.

## Cloudflare 배포

Cloudflare에서 GitHub의 `autumn-kyoto` 저장소를 선택합니다. 프레임워크 프리셋은 `None`, 빌드 명령은 비워 두고, 배포 폴더는 `/`로 지정합니다.

배포가 완료되면 프로젝트의 Custom domains에서 `autumnkyoto.com`을 연결하세요.

## 예약 링크 연결

`script.js` 상단의 `BOOKING_LINKS`에 일정별 숙소·교통·체험 제휴 URL을 입력하면 각 예약 버튼이 판매처로 연결됩니다. 빈 값인 버튼은 현재 안내 메시지만 표시합니다.

현재 메인 사진은 `pexels-kiyomizudera-hero.png`입니다. 이후 교체할 때 같은 파일명으로 대체하면 됩니다.
