// ─────────────────────────────────────────────
//  문제를 여기에 추가하세요 — 이 파일만 수정하면 됩니다 (mobile-study-quiz.html은 건드릴 필요 없음)
//
//  id      : 겹치지 않는 아무 값 (예: "b4", "m3" ...)
//  level   : "초급" / "중급" / "상급"  ← 탭이 이걸로 나뉩니다
//  image   : 이미지 파일 경로 (images/ 폴더에 넣고 경로 연결, 아직 없으면 null)
//  word    : 정답 (일본어)
//  reading : 읽는 법
//  meaning : 한국어 뜻
//  hints   : 힌트 배열, 최대 3개 (탭할 때마다 하나씩 공개)
//  batch   : (선택) 격주 세트 번호 — 가장 큰 숫자를 가진 문제들에 "NEW" 배지가 자동으로 붙음
// ─────────────────────────────────────────────

const PICTURE_QUESTIONS = [

  // ───── 초급 ─────
  { id: "b1", level: "초급", image: null, word: "たまご", reading: "tamago", meaning: "달걀",
    hints: ["3글자", "た로 시작해요", "아침에 자주 먹어요"] },
  { id: "b2", level: "초급", image: null, word: "でんしゃ", reading: "densha", meaning: "전철",
    hints: ["4글자", "で로 시작해요", "모란역에서 탈 수 있어요"] },
  { id: "b3", level: "초급", image: null, word: "さくら", reading: "sakura", meaning: "벚꽃",
    hints: ["3글자", "봄에 볼 수 있어요", "분홍색이에요"] },

  // ───── 중급 ─────
  { id: "m1", level: "중급", image: null, word: "かみなり", reading: "kaminari", meaning: "천둥",
    hints: ["4글자", "하늘에서 나요", "번쩍한 다음 들려요"] },
  { id: "m2", level: "중급", image: null, word: "まつり", reading: "matsuri", meaning: "축제",
    hints: ["3글자", "여름에 많이 해요", "유카타를 입고 가요"] },

  // ───── 상급 ─────
  { id: "a1", level: "상급", image: null, word: "木漏れ日", reading: "こもれび / komorebi", meaning: "나뭇잎 사이로 비치는 햇살",
    hints: ["한자 3자 + 히라가나", "숲에서 볼 수 있어요", "한국어로는 한 단어로 번역이 어려워요"] },
  { id: "a2", level: "상급", image: null, word: "居留守", reading: "いるす / irusu", meaning: "집에 있으면서 없는 척하기",
    hints: ["한자 3자", "초인종이 울릴 때", "숨는 게 아니라 그냥 조용히 있는 거예요"] },

];
