# 🏢 전국 오피스텔 시세 확인 서비스

전국 지역의 오피스텔 실거래가를 쉽고 빠르게 확인할 수 있는 웹 애플리케이션입니다.

## 🎯 소개

이 프로젝트는 국토교통부의 공공데이터 API를 활용하여 전국 17개 시도(서울, 경기, 부산, 대구, 인천, 광주, 대전, 울산, 강원, 세종, 충북, 충남, 전북, 전남, 경북, 경남, 제주)의 오피스텔 실거래 정보를 제공합니다.

사용자는 지역, 연도, 월을 선택하여 원하는 기간의 오피스텔 거래 내역을 확인할 수 있으며, 주소나 오피스텔명으로 검색도 가능합니다.

**배포 URL**: [https://opistel.vercel.app/](https://opistel.vercel.app/)

## ✨ 주요 기능

- 🗺️ **전국 지역 검색**: 17개 시도의 오피스텔 실거래 정보 조회
- 📅 **기간별 조회**: 연도 및 월을 선택하여 특정 기간의 거래 내역 확인
- 🔍 **검색 기능**: 주소, 지번, 오피스텔명으로 빠른 검색
- 📊 **상세 정보 제공**: 
  - 보증금 및 월세 정보
  - 전용면적(평수)
  - 거래일자
  - 건축년도
  - 이전 거래 정보
  - 거래기간
- 📱 **반응형 디자인**: 모바일, 태블릿, 데스크톱 모든 기기에서 최적화된 UI
- 🎨 **현대적인 UI**: Tailwind CSS를 활용한 깔끔하고 직관적인 인터페이스

## 🛠️ 기술 스택

### Frontend
- **React 18.2.0** - UI 라이브러리
- **TypeScript 4.9.3** - 타입 안정성
- **Vite 4.1.0** - 빌드 도구 및 개발 서버
- **React Router DOM 6.22.3** - 라우팅
- **Redux Toolkit 2.2.1** - 상태 관리
- **Axios 1.6.8** - HTTP 클라이언트

### Styling
- **Tailwind CSS 3.4.3** - 유틸리티 기반 CSS 프레임워크
- **Bootstrap 5.2.3** - 추가 UI 컴포넌트

### Analytics
- **React GA4 2.1.0** - Google Analytics 통합

### 배포
- **Vercel** - 호스팅 및 배포


## 📁 프로젝트 구조

```
opistel/
├── public/                 # 정적 파일
├── src/
│   ├── api/               # API 호출 함수
│   │   └── index.ts
│   ├── components/        # React 컴포넌트
│   │   ├── Footer.tsx
│   │   ├── LocationButton.tsx
│   │   ├── LocationCard.tsx
│   │   ├── Menu.tsx
│   │   ├── TodayTradeCard.tsx
│   │   └── ToTop.tsx
│   ├── routes/            # 페이지 컴포넌트
│   │   ├── Home.tsx
│   │   └── Auction.tsx
│   ├── store/             # Redux store 설정
│   │   ├── cartSlice.ts
│   │   ├── configureStore.ts
│   │   └── userSlice.ts
│   ├── types/             # TypeScript 타입 정의
│   │   └── types.ts
│   ├── App.tsx            # 메인 App 컴포넌트
│   ├── App.css
│   └── main.tsx           # 진입점
├── index.html
├── package.json
├── vite.config.ts         # Vite 설정
├── tailwind.config.js    # Tailwind CSS 설정
├── tsconfig.json         # TypeScript 설정
└── vercel.json           # Vercel 배포 설정
```

## 🔐 환경 변수 설정

프로젝트를 실행하기 위해 다음 환경 변수가 필요합니다:

| 변수명 | 설명 | 필수 여부 |
|--------|------|----------|
| `VITE_SERVICE_KEY` | 공공데이터포털 API 서비스 키 | ✅ 필수 |
| `VITE_GA_PROPERTYID` | Google Analytics 속성 ID | ⚠️ 선택 |


## 👤 작성자

**jaeyonging**

- GitHub: [@jaeyonging](https://github.com/jaeyonging)
- 배포 URL: [https://opistel.vercel.app/](https://opistel.vercel.app/)
