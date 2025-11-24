# Koon UI

모바일 웹에 최적화된 React 컴포넌트 라이브러리입니다. Radix UI 기반으로 접근성과 커스터마이징을 고려하여 제작되었습니다.

## Features

- 모바일 퍼스트 디자인
- Radix UI 기반 접근성 지원
- TypeScript 지원
- Tailwind CSS 스타일링
- 36+ 프리빌트 컴포넌트

## Installation

```bash
npm install koon-ui
```

```bash
yarn add koon-ui
```

```bash
pnpm add koon-ui
```

## Usage

```tsx
import { Button, BottomSheet, AlertDialog } from 'koon-ui';
import 'koon-ui/dist/style.css';

function App() {
  return (
    <Button variant="primary" size="lg">
      Click me
    </Button>
  );
}
```

## Components

### Core

- `Button` - 기본 버튼
- `IconButton` - 아이콘 버튼
- `TextInput` - 텍스트 입력
- `DateInput` - 날짜 입력
- `Checkbox` - 체크박스
- `RadioGroup` - 라디오 그룹
- `Switch` - 스위치
- `Badge` - 뱃지
- `Avatar` - 아바타
- `Skeleton` - 스켈레톤

### Navigation & Layout

- `AppBar` - 앱 상단 바
- `BottomNavigation` - 하단 네비게이션
- `ScreenDrawer` - 화면 드로어
- `Screen` - 화면 레이아웃
- `Tabs` / `ScrollableTabs` - 탭
- `Accordion` - 아코디언
- `Section` / `Paper` - 섹션, 페이퍼

### Interactive

- `AlertDialog` - 알림 다이얼로그
- `BottomSheet` - 바텀시트
- `PromoBottomSheet` - 프로모션 바텀시트
- `Carousel` - 캐러셀
- `DropdownMenu` - 드롭다운 메뉴
- `ListMenu` - 리스트 메뉴
- `SelectDialog` - 선택 다이얼로그

### Data Display

- `AspectRatio` - 비율 컨테이너
- `HorizontalScrollArea` - 가로 스크롤 영역
- `Separator` / `Indicator` - 구분선, 인디케이터
- `Meta` / `Alert` - 메타 정보, 알림
- `PromoBanner` - 프로모션 배너

## Development

```bash
# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 스토리북 실행
npm run storybook

# 린트
npm run lint
```

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Radix UI
- Storybook

## License

MIT
