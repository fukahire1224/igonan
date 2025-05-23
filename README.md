# 🎮 케인(KANE) - Streamer Portfolio Website

> **한국의 인기 스트리머 케인의 공식 포트폴리오 웹사이트**  
> HTML5, CSS3, JavaScript로 제작된 반응형 스트리머 브랜딩 사이트

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## 🎨 Preview

![Website Preview](assets/preview.png)

### ✨ 주요 특징

- **🎮 게이밍 테마 디자인** - 케인의 시그니처 보라색 컬러와 게이밍 감성
- **⚡ 동적 애니메이션** - GSAP를 활용한 매끄럽고 임팩트 있는 애니메이션
- **📱 완전 반응형** - 모든 디바이스에서 최적화된 스트리머 경험
- **🎯 인터랙티브 요소** - 팬들을 위한 특별한 인터랙션과 이스터에그
- **💫 커스텀 커서** - 데스크톱에서 케인만의 특별한 커서 효과
- **🔄 실시간 연동** - 치지직, 유튜브 등 플랫폼 연동 준비

## 🚀 라이브 데모

[🔗 케인 공식 포트폴리오 보기](https://kane-streamer.netlify.app)

## 📁 프로젝트 구조

```
kane-portfolio/
├── index.html              # 메인 HTML 파일
├── css/
│   └── styles.css          # 케인 브랜드 스타일시트
├── js/
│   └── main.js             # 인터랙션 및 애니메이션
├── assets/
│   ├── profile.jpg         # 케인 프로필 이미지
│   ├── project1.jpg        # 라이브 스트리밍 썸네일
│   ├── project2.jpg        # 게임 콘텐츠 썸네일
│   ├── project3.jpg        # 팬 메이드 게임 이미지
│   └── project4.jpg        # 커뮤니티 이벤트 이미지
└── README.md               # 프로젝트 문서
```

## 🛠️ 기술 스택

### Core Technologies
- **HTML5** - 시맨틱 마크업과 접근성
- **CSS3** - 모던 스타일링 (Grid, Flexbox, Custom Properties)
- **JavaScript (ES6+)** - 바닐라 JavaScript로 최적 성능

### Libraries & Frameworks
- **[GSAP](https://greensock.com/gsap/)** - 프리미엄 애니메이션 라이브러리
- **[AOS](https://michalsnik.github.io/aos/)** - 스크롤 기반 애니메이션
- **[Pretendard](https://github.com/orioncactus/pretendard)** - 한글 웹폰트

### Features
- 케인 브랜드 커스텀 컬러 팔레트
- 게이밍 감성의 UI/UX 디자인
- 스트리머 포트폴리오 최적화
- 모바일 우선 반응형 디자인

## 📥 설치 및 실행

### 1. 프로젝트 클론
```bash
git clone https://github.com/kane-official/portfolio.git
cd kane-portfolio
```

### 2. 로컬 서버 실행
```bash
# Python을 사용하는 경우
python -m http.server 8000

# Node.js를 사용하는 경우
npx live-server

# 또는 VS Code Live Server 확장 사용
```

### 3. 브라우저에서 확인
`http://localhost:8000`으로 접속

## 🎯 섹션별 설명

### 🏠 Home Section
- **스트리머 브랜딩**: 케인의 시그니처 보라색 컬러 적용
- **임팩트 애니메이션**: 순차적으로 등장하는 타이틀과 설명
- **게이밍 배경**: 부유하는 셰이프와 그라데이션 효과
- **브랜드 일관성**: KANE 로고와 일관된 시각적 아이덴티티

### 👤 About Section
- **스트리머 소개**: 케인의 방송 철학과 시청자와의 관계
- **회전하는 프로필**: 애니메이션이 적용된 원형 프로필 이미지
- **스킬 태그**: 라이브 스트리밍, 게임 방송, 커뮤니티 소통 등
- **핵심 가치**: 재미, 소통, 진정성, 꿈에 대한 케인의 가치관

### 🎮 Content Section
- **라이브 스트리밍**: 트위치에서의 실시간 방송
- **게임 콘텐츠**: 다양한 게임 플레이 영상
- **팬 메이드 게임**: 팬들이 제작한 '케인 춤추기 게임'
- **커뮤니티 이벤트**: 구독자들과 함께하는 특별 이벤트

### 📞 Contact Section
- **소셜 미디어**: 트위치, 유튜브, 인스타그램, 디스코드
- **비즈니스 연락처**: 협업 및 비즈니스 문의용 이메일
- **팬 메시지**: 케인에게 직접 메시지를 보낼 수 있는 폼

## 🎨 케인 브랜드 가이드

### 🎯 컬러 팔레트
```css
:root {
    --primary-color: #8b5cf6;       /* 케인 시그니처 보라색 */
    --secondary-color: #a78bfa;     /* 밝은 보라색 - 게이밍 감성 */
    --accent-color: #c084fc;        /* 연보라색 - 하이라이트 */
    --danger-color: #ff4757;        /* 빨간색 - 경고/중요 */
    --success-color: #2ed573;       /* 초록색 - 성공/확인 */
}
```

### 🎮 디자인 컨셉
- **게이밍 감성**: 보라색 네온 컬러와 글로우 효과
- **스트리머 브랜딩**: 케인의 개성이 담긴 컬러와 타이포그래피
- **인터랙티브**: 호버 효과와 클릭 피드백
- **모던**: 깔끔하고 트렌디한 레이아웃

## 🛠️ 커스터마이징 가이드

### 📝 콘텐츠 수정

#### 스트리머 정보 변경
```html
<!-- index.html에서 수정 -->
<span class="highlight">케인</span>
<p class="hero-subtitle">Streamer & Content Creator</p>
```

#### 소셜 미디어 링크 업데이트
```html
<!-- 트위치 링크 -->
<a href="https://twitch.tv/kane" class="social-link" target="_blank">

<!-- 유튜브 링크 -->
<a href="https://youtube.com/@kane" class="social-link" target="_blank">
```

#### 이메일 주소 변경
```javascript
// js/main.js에서 수정
function copyEmail() {
    const email = 'kane.business@gmail.com'; // 케인의 비즈니스 이메일
    // ...
}
```

### 🎨 브랜드 컬러 수정
```css
/* css/styles.css의 :root 섹션에서 변경 */
:root {
    --primary-color: #8b5cf6;    /* 메인 브랜드 컬러 */
    --secondary-color: #a78bfa;  /* 보조 컬러 */
    --accent-color: #c084fc;     /* 강조 컬러 */
}
```

### 🖼️ 이미지 교체

1. **프로필 이미지**: `assets/profile.jpg` - 케인의 공식 프로필
2. **콘텐츠 썸네일들**:
   - `project1.jpg` - 라이브 스트리밍 화면
   - `project2.jpg` - 게임 플레이 영상
   - `project3.jpg` - 팬 게임 스크린샷
   - `project4.jpg` - 커뮤니티 이벤트 사진

## 🚀 배포 가이드

### GitHub Pages
```bash
# 1. GitHub 레포지토리 생성
# 2. 코드 푸시
git add .
git commit -m "케인 포트폴리오 사이트 배포"
git push origin main

# 3. Settings > Pages에서 배포 설정
```

### Netlify
1. [Netlify](https://netlify.com)에 드래그 앤 드롭 배포
2. 도메인: `kane-streamer.netlify.app`
3. 커스텀 도메인 연결 가능

### Vercel
```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel

# 프로덕션 배포
vercel --prod
```

## 📱 반응형 브레이크포인트

```css
/* 태블릿 대형 */
@media (max-width: 1200px) { }

/* 태블릿/모바일 */  
@media (max-width: 768px) { }

/* 모바일 소형 */
@media (max-width: 480px) { }
```

## 🎮 케인의 콘텐츠

### 🔴 라이브 스트리밍
- **플랫폼**: 트위치 (Twitch)
- **장르**: 다양한 게임, 토크쇼, 리액션
- **스타일**: 시청자와의 실시간 소통 중심
- **특징**: 재미있는 입담과 자연스러운 매력

### 📺 유튜브 콘텐츠
- **하이라이트**: 방송 베스트 모먼트
- **게임 플레이**: 풀 게임 플레이스루
- **리액션**: 인기 영상 및 콘텐츠 리액션
- **브이로그**: 일상 공유 및 비하인드

### 🎯 커뮤니티
- **팬 게임**: 팬들이 제작한 '케인 춤추기 게임'
- **디스코드**: 팬들과의 소통 공간
- **이벤트**: 구독자 기념 특별 방송
- **굿즈**: 케인 공식 굿즈 및 한정판 아이템

## 🐛 트러블슈팅

### 일반적인 문제들

#### 1. 애니메이션 문제
- GSAP CDN 로딩 확인
- 브라우저 호환성 체크
- JavaScript 콘솔 오류 확인

#### 2. 이미지 로딩 문제
- 파일 경로 및 확장자 확인
- 이미지 파일 크기 최적화 (500KB 이하 권장)
- WebP 형식 사용 고려

#### 3. 모바일 반응형 문제
- viewport 메타 태그 확인
- 터치 이벤트 최적화
- 모바일 브라우저별 테스트

## 🔄 업데이트 로그

### v1.0.0 (2024-01-xx)
- ✨ 케인 브랜드 포트폴리오 사이트 초기 릴리즈
- 🎮 게이밍 테마 디자인 적용
- ⚡ GSAP 애니메이션 구현
- 📱 완전 반응형 디자인
- 🎯 스트리머 특화 UI/UX
- 💫 케인 시그니처 컬러 적용

## 🤝 기여하기

케인 포트폴리오 사이트 개선에 기여하고 싶으시다면:

1. Fork 프로젝트
2. Feature 브랜치 생성 (`git checkout -b feature/improvement`)
3. 변경사항 커밋 (`git commit -m 'Add some improvement'`)
4. 브랜치에 Push (`git push origin feature/improvement`)
5. Pull Request 생성

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 🙏 Special Thanks

- **케인**: 항상 재미있는 콘텐츠로 즐거움을 주는 스트리머
- **케인 팬 커뮤니티**: 사랑과 응원을 보내주는 모든 시청자분들
- **팬 게임 개발자들**: '케인 춤추기 게임'을 만들어주신 ppaka님
- **GSAP**: 놀라운 애니메이션 라이브러리
- **Pretendard**: 아름다운 한글 폰트

## 📞 연락처

- **비즈니스 문의**: kane.business@gmail.com
- **트위치**: [twitch.tv/kane](https://twitch.tv/kane)
- **유튜브**: [@kane](https://youtube.com/@kane)
- **인스타그램**: [@kane_official](https://instagram.com/kane_official)
- **디스코드**: 케인 공식 서버

---

⭐ 이 프로젝트가 마음에 드셨다면 스타를 눌러주세요!  
🎮 케인의 라이브 방송도 놓치지 마세요!  
❤️ 시청자 여러분의 사랑으로 만들어지는 채널입니다! 