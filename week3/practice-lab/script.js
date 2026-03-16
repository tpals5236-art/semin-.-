const topics = [
  {
    id: "binary-search",
    label: "이분 탐색",
    summary: "정렬된 배열에서 탐색 범위를 절반씩 줄여 빠르게 대상을 찾는 방법입니다.",
    core: "정렬 여부, left/right 갱신, mid 계산, 종료 조건을 항상 같이 생각해야 합니다.",
    pitfall: "정렬되지 않은 데이터에 적용하거나, mid 갱신 후 left/right 이동을 잘못하는 경우가 많습니다.",
    question: "지금 찾는 문제는 선형 탐색 대신 범위를 반으로 줄일 수 있는가?"
  },
  {
    id: "divide-conquer",
    label: "분할 정복",
    summary: "문제를 작은 부분 문제로 나누고 각 결과를 합쳐 전체 해답을 만드는 전략입니다.",
    core: "base case, 분할 기준, 부분 문제 결과 결합 방식을 분명히 해야 합니다.",
    pitfall: "재귀 종료 조건을 놓쳐 무한 호출이 나거나, 결합 로직이 누락되기 쉽습니다.",
    question: "문제를 두 개 이상의 독립된 작은 문제로 나눴을 때 더 쉬워지는가?"
  },
  {
    id: "sorting",
    label: "퀵/병합 정렬",
    summary: "정렬 알고리즘은 데이터 재배열뿐 아니라 분할 정복의 대표 예제로 자주 등장합니다.",
    core: "퀵 정렬은 pivot, 병합 정렬은 merge 단계가 핵심입니다.",
    pitfall: "인덱스 범위를 잘못 다뤄 일부 구간이 정렬되지 않거나 pivot 위치가 꼬일 수 있습니다.",
    question: "현재 문제는 정렬 자체가 목표인가, 정렬 아이디어를 이용해 후속 계산을 빠르게 하는가?"
  },
  {
    id: "stack",
    label: "스택",
    summary: "가장 나중에 넣은 데이터를 먼저 꺼내는 LIFO 구조입니다.",
    core: "괄호 매칭, 직전 상태 복원, 단조 스택 같은 패턴이 자주 나옵니다.",
    pitfall: "비어 있는 스택에서 pop 하거나, push 대상과 pop 조건을 헷갈리기 쉽습니다.",
    question: "가장 최근 상태를 빠르게 꺼내야 하는가?"
  },
  {
    id: "queue",
    label: "큐",
    summary: "가장 먼저 들어온 데이터를 먼저 처리하는 FIFO 구조입니다.",
    core: "시뮬레이션, 작업 처리 순서, BFS와 연결해서 익히면 좋습니다.",
    pitfall: "리스트로 앞에서 pop 해서 비효율이 생기거나, 삽입/삭제 방향을 뒤바꾸는 경우가 많습니다.",
    question: "도착 순서 그대로 처리해야 하는가?"
  },
  {
    id: "priority-queue",
    label: "우선순위 큐",
    summary: "단순 도착 순서가 아니라 우선순위 기준으로 가장 중요한 원소를 먼저 꺼냅니다.",
    core: "heap 구조를 쓰면 삽입과 최소/최대 원소 추출을 효율적으로 처리할 수 있습니다.",
    pitfall: "파이썬 heapq는 최소 힙이라는 점을 놓치거나, 튜플 우선순위를 헷갈리기 쉽습니다.",
    question: "매번 가장 작은 값 또는 가장 큰 값을 빨리 꺼내야 하는가?"
  },
  {
    id: "linked-list",
    label: "연결 리스트",
    summary: "노드와 포인터 연결로 데이터를 이어 붙이는 구조이며, 삽입과 삭제의 흐름 이해가 중요합니다.",
    core: "head 처리, next 연결, 현재 노드와 이전 노드 추적이 기본입니다.",
    pitfall: "빈 리스트 예외 처리나 마지막 노드 연결을 빼먹어 구조가 끊어지기 쉽습니다.",
    question: "연속 메모리보다 연결 관계 자체가 더 중요한가?"
  },
  {
    id: "hash-table",
    label: "해시 테이블",
    summary: "키를 이용해 빠르게 값을 찾는 자료 구조로, 파이썬에서는 딕셔너리로 자주 사용합니다.",
    core: "빈도 계산, 존재 여부 확인, 빠른 조회가 핵심 패턴입니다.",
    pitfall: "키 충돌 개념을 놓치거나, 없는 키 접근 시 예외 처리를 잊기 쉽습니다.",
    question: "값을 순서보다 조회 속도 중심으로 다뤄야 하는가?"
  }
];

const problems = [
  {
    id: "bs-lower-bound",
    topic: "binary-search",
    title: "첫 등장 위치 찾기",
    level: "하",
    description: "중복된 정렬 배열이 주어질 때 target의 첫 등장 인덱스를 반환하세요. 없으면 -1입니다.",
    goal: "기본 이분 탐색을 변형해 조건을 만족하는 가장 왼쪽 인덱스를 찾습니다.",
    hint: "같은 값을 찾더라도 바로 종료하지 말고 왼쪽 구간을 더 확인해 보세요.",
    checkpoints: ["정렬 배열이라는 전제를 확인했는가", "answer를 따로 저장했는가", "left/right 갱신이 무한 루프를 만들지 않는가"],
    answerGuide: "풀이 설명이나 의사코드로 작성해도 괜찮습니다. 핵심은 정렬 배열, mid 비교, 왼쪽으로 더 탐색하는 이유입니다.",
    keywords: ["정렬", "mid", "left", "right", "왼쪽", "answer", "반복"],
    hints: ["정렬된 배열이라는 조건을 먼저 활용해야 합니다.", "target을 찾았다고 바로 끝내지 말고 더 왼쪽에도 같은 값이 있는지 보세요.", "정답 인덱스를 저장한 뒤 right를 mid - 1로 줄이면 첫 위치를 찾을 수 있습니다."]
  },
  {
    id: "bs-router",
    topic: "binary-search",
    title: "최소 간격 최대화",
    level: "상",
    description: "여러 좌표에 공유기를 설치할 때 공유기 간 최소 간격을 가능한 크게 만들고 싶습니다.",
    goal: "정답 자체를 이분 탐색하는 파라메트릭 서치를 연습합니다.",
    hint: "간격 X가 가능한지 판별하는 함수부터 만들면 구조가 선명해집니다.",
    checkpoints: ["판별 함수와 탐색 범위를 분리했는가", "가능하면 범위를 넓히고 불가능하면 줄이는가", "좌표 정렬을 먼저 했는가"],
    answerGuide: "정답을 직접 이분 탐색하는 이유와 가능 여부를 판별하는 함수 구조를 써보세요.",
    keywords: ["정렬", "간격", "판별", "가능", "이분 탐색", "공유기", "mid"],
    hints: ["좌표를 먼저 정렬해야 간격을 계산할 수 있습니다.", "간격 X가 가능하냐를 검사하는 함수로 문제를 바꿔 생각해 보세요.", "가능하면 더 큰 간격을 시도하고, 불가능하면 간격을 줄이는 식으로 탐색합니다."]
  },
  {
    id: "dc-max-subarray-piece",
    topic: "divide-conquer",
    title: "절반으로 나눈 구간 최대값",
    level: "하",
    description: "배열을 반으로 나누며 각 구간의 최댓값을 찾아 전체 최댓값을 계산하세요.",
    goal: "base case와 결과 결합의 흐름을 재귀로 익힙니다.",
    hint: "원소가 1개일 때 바로 반환하는 지점이 가장 중요합니다.",
    checkpoints: ["left == right일 때 종료하는가", "mid 계산이 올바른가", "왼쪽 결과와 오른쪽 결과를 비교하는가"],
    answerGuide: "base case, mid, 왼쪽 재귀, 오른쪽 재귀, 최종 비교 순서를 설명해 보세요.",
    keywords: ["base case", "left", "right", "mid", "재귀", "최댓값", "비교"],
    hints: ["원소가 하나 남았을 때 그 값이 바로 답입니다.", "현재 구간을 mid 기준으로 왼쪽과 오른쪽으로 나눠 보세요.", "두 재귀 호출 결과 중 큰 값을 반환하면 됩니다."]
  },
  {
    id: "dc-paper-count",
    topic: "divide-conquer",
    title: "색종이 분할 개수 세기",
    level: "중",
    description: "N x N 격자에서 모든 칸의 값이 같지 않으면 4등분하며 단색 종이 수를 세세요.",
    goal: "분할 조건과 재귀 순회를 익히는 대표 문제 패턴입니다.",
    hint: "현재 구간이 단색인지 먼저 검사한 뒤, 아니면 4개로 나눕니다.",
    checkpoints: ["현재 범위 검사 함수를 만들었는가", "4개 하위 영역 좌표를 정확히 계산했는가", "각 재귀 결과를 누적했는가"],
    answerGuide: "단색 검사 후 4등분하는 조건을 중심으로 재귀 흐름을 적어보세요.",
    keywords: ["단색", "검사", "4등분", "재귀", "누적", "영역"],
    hints: ["지금 보는 정사각형이 모두 같은 값인지 먼저 검사하세요.", "같지 않다면 반 크기로 줄여 4개 영역으로 나눕니다.", "각 영역의 결과를 모아서 총 개수를 세면 됩니다."]
  },
  {
    id: "sort-quick-pivot",
    topic: "sorting",
    title: "Pivot 이동 추적하기",
    level: "하",
    description: "퀵 정렬 partition 과정에서 pivot이 어떤 위치로 이동하는지 직접 출력해 보세요.",
    goal: "partition 함수의 swap 흐름과 반환 인덱스를 손으로 확인합니다.",
    hint: "i는 pivot보다 작거나 같은 원소들의 마지막 인덱스를 가리킵니다.",
    checkpoints: ["pivot을 마지막 원소로 잡았는가", "j 루프 범위를 high - 1까지 돌렸는가", "마지막에 pivot을 i+1로 옮겼는가"],
    answerGuide: "pivot, i, j가 각각 무엇을 의미하는지 쓰면 확인이 더 정확해집니다.",
    keywords: ["pivot", "i", "j", "swap", "partition", "high", "low"],
    hints: ["pivot은 보통 마지막 원소로 둡니다.", "j를 움직이며 pivot보다 작거나 같은 값을 만나면 i를 늘리고 swap 합니다.", "루프가 끝나면 pivot을 i+1 위치로 보내고 그 인덱스를 반환합니다."]
  },
  {
    id: "sort-kth",
    topic: "sorting",
    title: "k번째 수 빠르게 찾기",
    level: "상",
    description: "배열 전체를 완전히 정렬하지 않고 k번째로 작은 수를 찾는 방법을 설계해 보세요.",
    goal: "퀵 정렬 아이디어를 이용한 선택 알고리즘 관점을 익힙니다.",
    hint: "pivot 기준으로 왼쪽 크기를 보면 어느 구간을 계속 탐색할지 결정할 수 있습니다.",
    checkpoints: ["모든 구간을 정렬하지 않아도 되는 이유를 설명할 수 있는가", "pivot 왼쪽 원소 수를 기준으로 다음 구간을 정했는가", "평균 시간 복잡도를 말할 수 있는가"],
    answerGuide: "정렬 전체가 아니라 필요한 한쪽 구간만 남긴다는 점을 설명해 보세요.",
    keywords: ["pivot", "왼쪽", "오른쪽", "k번째", "선택", "평균", "정렬하지"],
    hints: ["pivot이 정해지면 그 위치는 최종 정렬 위치와 같습니다.", "k가 pivot 위치보다 작으면 왼쪽만, 크면 오른쪽만 보면 됩니다.", "전체 정렬 대신 필요한 한쪽만 재귀적으로 보면 됩니다."]
  },
  {
    id: "stack-parentheses",
    topic: "stack",
    title: "괄호 문자열 검사기",
    level: "하",
    description: "소괄호와 중괄호가 섞인 문자열이 올바른지 검사하세요.",
    goal: "스택의 push/pop과 짝 맞추기 로직을 연습합니다.",
    hint: "닫는 괄호를 만났을 때 바로 직전 여는 괄호와 맞는지 봐야 합니다.",
    checkpoints: ["문자마다 분기 처리를 했는가", "비어 있는 스택 예외를 확인했는가", "반복 후 스택이 비어 있는지도 검사했는가"],
    answerGuide: "push/pop이 언제 일어나고, False를 즉시 반환하는 조건이 무엇인지 적어보세요.",
    keywords: ["스택", "push", "pop", "닫는 괄호", "비어", "반복", "False"],
    hints: ["여는 괄호를 만나면 스택에 넣습니다.", "닫는 괄호를 만났는데 스택이 비어 있으면 바로 실패입니다.", "끝났을 때 스택이 비어 있어야 올바른 괄호 문자열입니다."]
  },
  {
    id: "stack-monotonic",
    topic: "stack",
    title: "오큰수 변형 문제",
    level: "중",
    description: "각 원소에 대해 오른쪽에서 처음으로 만나는 더 큰 수를 찾으세요.",
    goal: "단조 스택 패턴을 익히는 데 적합한 문제입니다.",
    hint: "현재 값이 스택 top보다 크면 답을 채울 수 있습니다.",
    checkpoints: ["인덱스를 스택에 넣었는가", "답 배열을 미리 준비했는가", "각 인덱스가 최대 한 번 push/pop 되는 이유를 이해하는가"],
    answerGuide: "왜 값이 아니라 인덱스를 저장하는지까지 쓰면 더 좋습니다.",
    keywords: ["인덱스", "스택", "top", "오큰수", "답 배열", "push", "pop"],
    hints: ["답을 채우려면 현재 값보다 작은 이전 원소들을 처리해야 합니다.", "값만 넣지 말고 인덱스를 넣어야 답 배열에 위치를 기록할 수 있습니다.", "한 인덱스는 한 번 들어가고 한 번 나오므로 효율적입니다."]
  },
  {
    id: "queue-printer",
    topic: "queue",
    title: "프린터 작업 순서",
    level: "하",
    description: "문서가 순서대로 들어오면 큐에서 하나씩 꺼내 처리 순서를 기록하세요.",
    goal: "기본 큐 동작과 deque 사용법을 익힙니다.",
    hint: "처리된 작업은 결과 리스트에 따로 쌓아 두면 됩니다.",
    checkpoints: ["deque를 사용했는가", "popleft와 append 방향을 구분했는가", "큐가 빌 때 종료하는가"],
    answerGuide: "입력, 처리, 결과 기록의 순서를 한 줄씩 설명해 보세요.",
    keywords: ["deque", "popleft", "append", "큐", "처리", "반복", "종료"],
    hints: ["리스트보다 deque가 큐 구현에 더 적합합니다.", "앞에서 꺼낼 때는 popleft를 사용합니다.", "꺼낸 작업을 processed 같은 결과 리스트에 넣으면 처리 순서를 저장할 수 있습니다."]
  },
  {
    id: "queue-bridge",
    topic: "queue",
    title: "다리 위 트럭 시뮬레이션",
    level: "중",
    description: "제한 길이와 하중이 있는 다리를 트럭들이 순서대로 건너는 시간을 계산하세요.",
    goal: "큐를 이용한 시간 기반 시뮬레이션 문제를 연습합니다.",
    hint: "다리 위 상태를 큐로 관리하고 매 시간 한 칸씩 이동한다고 생각해 보세요.",
    checkpoints: ["시간 증가와 상태 갱신 순서를 정했는가", "총 하중을 별도로 관리하는가", "빈 칸도 큐 요소로 표현할지 결정했는가"],
    answerGuide: "시간 시뮬레이션과 현재 다리 상태를 어떻게 표현할지 중심으로 적어보세요.",
    keywords: ["시간", "큐", "다리", "하중", "길이", "상태", "트럭"],
    hints: ["다리 위를 길이만큼의 큐로 생각해 보세요.", "매 시간 맨 앞 트럭은 빠지고, 조건이 되면 새 트럭이 들어옵니다.", "현재 다리 총 하중을 따로 관리하면 검사하기 쉽습니다."]
  },
  {
    id: "pq-er",
    topic: "priority-queue",
    title: "응급실 접수 시스템",
    level: "하",
    description: "환자 이름과 우선순위가 주어질 때 우선순위가 높은 순서대로 처리하세요.",
    goal: "heapq에 어떤 형태로 데이터를 넣어야 하는지 익힙니다.",
    hint: "파이썬 최소 힙을 최대 우선순위처럼 쓰려면 값을 변형할 수 있습니다.",
    checkpoints: ["heap에 push/pop 구조를 썼는가", "우선순위와 이름 순서를 튜플로 잘 넣었는가", "동일 우선순위 처리 기준을 정했는가"],
    answerGuide: "heapq가 최소 힙이라는 점과 튜플 정렬 방식을 함께 설명해 보세요.",
    keywords: ["heap", "heapq", "우선순위", "튜플", "push", "pop", "최소 힙"],
    hints: ["heapq는 기본적으로 가장 작은 값을 먼저 꺼냅니다.", "우선순위와 이름을 튜플로 넣으면 정렬 기준을 만들 수 있습니다.", "필요하면 우선순위를 음수로 바꿔 최대 힙처럼 사용할 수 있습니다."]
  },
  {
    id: "pq-median",
    topic: "priority-queue",
    title: "실시간 중앙값 유지",
    level: "상",
    description: "숫자가 하나씩 들어올 때마다 현재 중앙값을 빠르게 출력하세요.",
    goal: "최대 힙과 최소 힙을 함께 쓰는 고급 패턴을 연습합니다.",
    hint: "왼쪽은 최대 힙, 오른쪽은 최소 힙으로 균형을 맞추면 됩니다.",
    checkpoints: ["두 힙의 크기 균형 규칙을 세웠는가", "왼쪽 최대값 <= 오른쪽 최소값을 유지하는가", "매 입력마다 O(log n) 처리가 되는가"],
    answerGuide: "두 힙의 역할과 균형 조정 규칙을 먼저 설명하면 좋습니다.",
    keywords: ["최대 힙", "최소 힙", "중앙값", "균형", "왼쪽", "오른쪽", "log"],
    hints: ["작은 절반은 최대 힙, 큰 절반은 최소 힙에 둡니다.", "두 힙 크기 차이가 너무 커지면 재배치합니다.", "왼쪽 힙의 top이 현재 중앙값 후보가 됩니다."]
  },
  {
    id: "ll-editor",
    topic: "linked-list",
    title: "간단한 텍스트 편집기",
    level: "중",
    description: "커서 왼쪽과 오른쪽 이동, 문자 삽입과 삭제를 처리하는 편집기를 만들어 보세요.",
    goal: "연결 리스트 사고를 실제 편집 동작에 연결합니다.",
    hint: "직접 노드를 연결해도 좋고, 두 개의 스택으로 연결 리스트 동작을 흉내 내도 좋습니다.",
    checkpoints: ["삽입과 삭제가 커서 주변에서 어떻게 일어나는지 설명할 수 있는가", "빈 상태 예외를 처리했는가", "선택한 자료 구조의 장단점을 말할 수 있는가"],
    answerGuide: "커서 기준 왼쪽/오른쪽 데이터 구조를 어떻게 둘지 써보세요.",
    keywords: ["커서", "삽입", "삭제", "왼쪽", "오른쪽", "스택", "연결"],
    hints: ["커서를 기준으로 왼쪽과 오른쪽을 나눠 생각해 보세요.", "커서를 왼쪽으로 옮기면 왼쪽 자료를 오른쪽으로 보내는 식으로 구현할 수 있습니다.", "두 스택으로도 연결 리스트 느낌의 편집기를 만들 수 있습니다."]
  },
  {
    id: "ll-cycle",
    topic: "linked-list",
    title: "사이클 탐지",
    level: "상",
    description: "연결 리스트에 순환이 존재하는지 빠르게 판별하세요.",
    goal: "포인터 이동 패턴과 Floyd 알고리즘을 이해합니다.",
    hint: "한 포인터는 한 칸, 다른 포인터는 두 칸 이동시켜 보세요.",
    checkpoints: ["head가 비어 있을 때를 처리했는가", "fast와 slow의 이동 조건을 정확히 세웠는가", "언제 종료되는지 설명할 수 있는가"],
    answerGuide: "slow와 fast가 왜 만나는지까지 설명하면 이해가 더 탄탄해집니다.",
    keywords: ["slow", "fast", "한 칸", "두 칸", "순환", "만남", "종료"],
    hints: ["slow는 한 칸, fast는 두 칸 움직입니다.", "순환이 있으면 결국 fast와 slow가 같은 노드를 가리키게 됩니다.", "fast가 끝에 먼저 도달하면 순환이 없는 것입니다."]
  },
  {
    id: "hash-freq",
    topic: "hash-table",
    title: "가장 많이 나온 숫자 찾기",
    level: "하",
    description: "숫자 리스트에서 가장 많이 등장한 값을 찾고 횟수도 함께 반환하세요.",
    goal: "딕셔너리를 이용한 카운팅 패턴을 훈련합니다.",
    hint: "값을 순회하면서 등장 횟수를 누적하면 됩니다.",
    checkpoints: ["없는 키를 처음 만났을 때 초기화를 했는가", "최빈값 비교 기준을 정했는가", "시간 복잡도를 설명할 수 있는가"],
    answerGuide: "빈도 누적과 최댓값 갱신이 어떻게 연결되는지 써보세요.",
    keywords: ["딕셔너리", "빈도", "카운트", "최빈값", "순회", "갱신", "키"],
    hints: ["숫자를 하나씩 보면서 딕셔너리에 횟수를 저장합니다.", "없는 숫자가 나오면 1부터 시작합니다.", "마지막에 가장 큰 빈도를 가진 키를 찾으면 됩니다."]
  },
  {
    id: "hash-subarray-sum",
    topic: "hash-table",
    title: "부분합 빈도 누적",
    level: "상",
    description: "합이 k가 되는 부분 배열의 개수를 구해 보세요.",
    goal: "누적합과 해시 테이블을 함께 쓰는 강력한 패턴을 연습합니다.",
    hint: "현재 누적합에서 k를 뺀 값이 이전에 몇 번 나왔는지 세면 됩니다.",
    checkpoints: ["prefix sum을 한 번의 순회로 계산하는가", "빈도 딕셔너리를 함께 갱신하는가", "0으로 시작하는 경우를 초기값으로 처리했는가"],
    answerGuide: "prefix sum, count dict, sum-k 관계를 문장으로 풀어보세요.",
    keywords: ["prefix", "누적합", "딕셔너리", "k", "sum-k", "빈도", "초기값"],
    hints: ["현재 누적합을 sum이라 두고 생각해 보세요.", "sum - k가 예전에 몇 번 나왔는지 알면 현재 위치에서 끝나는 부분 배열 개수를 셀 수 있습니다.", "처음부터 시작하는 경우를 위해 누적합 0의 빈도를 1로 시작합니다."]
  }
];

const storageKey = "week3-practice-lab-completed";
const answerStorageKey = "week3-practice-lab-answers";
const hintStorageKey = "week3-practice-lab-hints";
const topicGrid = document.getElementById("topic-grid");
const problemList = document.getElementById("problem-list");
const topicFilter = document.getElementById("topic-filter");
const levelFilter = document.getElementById("level-filter");
const completedOnly = document.getElementById("completed-only");
const topicTemplate = document.getElementById("topic-card-template");
const problemTemplate = document.getElementById("problem-card-template");
const topicCount = document.getElementById("topic-count");
const problemCount = document.getElementById("problem-count");
const completedCount = document.getElementById("completed-count");

function getCompletedSet() {
  const saved = localStorage.getItem(storageKey);
  return new Set(saved ? JSON.parse(saved) : []);
}

function saveCompletedSet(set) {
  localStorage.setItem(storageKey, JSON.stringify([...set]));
}

function getSavedAnswers() {
  const saved = localStorage.getItem(answerStorageKey);
  return saved ? JSON.parse(saved) : {};
}

function saveAnswer(problemId, value) {
  const answers = getSavedAnswers();
  answers[problemId] = value;
  localStorage.setItem(answerStorageKey, JSON.stringify(answers));
}

function getHintProgress() {
  const saved = localStorage.getItem(hintStorageKey);
  return saved ? JSON.parse(saved) : {};
}

function saveHintProgress(problemId, count) {
  const progress = getHintProgress();
  progress[problemId] = count;
  localStorage.setItem(hintStorageKey, JSON.stringify(progress));
}

function evaluateAnswer(problem, rawAnswer) {
  const answer = rawAnswer.trim();
  if (!answer) {
    return {
      scoreText: "답안을 먼저 작성해 보세요.",
      summary: "아직 확인할 내용이 없습니다. 핵심 로직을 짧게라도 적고 다시 눌러보면 피드백을 받을 수 있어요.",
      details: ["문제 해결 순서를 3~5문장 정도로 적어보는 것부터 시작해 보세요."],
      empty: true
    };
  }

  const normalized = answer.toLowerCase();
  const matchedKeywords = problem.keywords.filter((keyword) => normalized.includes(keyword.toLowerCase()));
  const checkpointHits = problem.checkpoints.filter((checkpoint) => {
    const checkpointWords = checkpoint
      .replace(/[?.,()]/g, "")
      .split(" ")
      .filter((word) => word.length >= 2);
    return checkpointWords.some((word) => normalized.includes(word.toLowerCase()));
  });

  const keywordRatio = matchedKeywords.length / problem.keywords.length;
  const checkpointRatio = checkpointHits.length / problem.checkpoints.length;
  const lengthRatio = Math.min(answer.length / 180, 1);
  const score = Math.round((keywordRatio * 0.45 + checkpointRatio * 0.35 + lengthRatio * 0.2) * 100);

  let summary = "핵심 흐름이 잘 보입니다. 이제 경계 조건을 더 또렷하게 써 보면 더 좋아져요.";
  if (score < 45) {
    summary = "핵심 키워드가 아직 적게 들어가 있어요. 자료 구조 선택 이유와 처리 순서를 더 명확히 적어보면 좋습니다.";
  } else if (score < 75) {
    summary = "풀이 방향은 괜찮습니다. 종료 조건이나 예외 처리까지 써 주면 답안 완성도가 더 높아집니다.";
  }

  const missingKeywords = problem.keywords.filter((keyword) => !matchedKeywords.includes(keyword)).slice(0, 4);
  const details = [];

  if (matchedKeywords.length > 0) {
    details.push(`잘 짚은 키워드: ${matchedKeywords.join(", ")}`);
  }
  if (missingKeywords.length > 0) {
    details.push(`추가하면 좋은 키워드: ${missingKeywords.join(", ")}`);
  }
  if (checkpointHits.length < problem.checkpoints.length) {
    const missedCheckpoint = problem.checkpoints.find((checkpoint) => !checkpointHits.includes(checkpoint));
    details.push(`보강 추천 체크 포인트: ${missedCheckpoint}`);
  } else {
    details.push("체크 포인트를 전반적으로 잘 반영했습니다.");
  }

  return {
    scoreText: `자가 점검 점수 ${score} / 100`,
    summary,
    details,
    empty: false
  };
}

function renderTopics() {
  topicGrid.innerHTML = "";
  topics.forEach((topic) => {
    const card = topicTemplate.content.firstElementChild.cloneNode(true);
    card.querySelector(".topic-badge").textContent = topic.label;
    card.querySelector("h3").textContent = topic.label;
    card.querySelector(".topic-summary").textContent = topic.summary;
    card.querySelector(".topic-core").textContent = topic.core;
    card.querySelector(".topic-pitfall").textContent = topic.pitfall;
    card.querySelector(".topic-question").textContent = topic.question;
    topicGrid.appendChild(card);
  });
}

function renderTopicFilter() {
  topics.forEach((topic) => {
    const option = document.createElement("option");
    option.value = topic.id;
    option.textContent = topic.label;
    topicFilter.appendChild(option);
  });
}

function filteredProblems() {
  const completed = getCompletedSet();
  return problems.filter((problem) => {
    const topicMatch = topicFilter.value === "all" || problem.topic === topicFilter.value;
    const levelMatch = levelFilter.value === "all" || problem.level === levelFilter.value;
    const completedMatch = !completedOnly.checked || completed.has(problem.id);
    return topicMatch && levelMatch && completedMatch;
  });
}

function updateStats() {
  const completed = getCompletedSet();
  topicCount.textContent = topics.length;
  problemCount.textContent = problems.length;
  completedCount.textContent = completed.size;
}

function renderProblems() {
  const completed = getCompletedSet();
  const savedAnswers = getSavedAnswers();
  const hintProgress = getHintProgress();
  const list = filteredProblems();
  problemList.innerHTML = "";

  if (list.length === 0) {
    const empty = document.createElement("article");
    empty.className = "empty-state";
    empty.textContent = "선택한 조건에 맞는 문제가 없습니다. 필터를 바꿔서 다시 확인해 보세요.";
    problemList.appendChild(empty);
    return;
  }

  list.forEach((problem) => {
    const card = problemTemplate.content.firstElementChild.cloneNode(true);
    const topic = topics.find((item) => item.id === problem.topic);
    const checkbox = card.querySelector("input");
    const answerInput = card.querySelector(".answer-input");
    const answerGuide = card.querySelector(".answer-guide");
    const hintButton = card.querySelector(".hint-button");
    const hintStatus = card.querySelector(".hint-status");
    const hintList = card.querySelector(".hint-list");
    const checkAnswerButton = card.querySelector(".check-answer-button");
    const feedbackScore = card.querySelector(".feedback-score");
    const feedbackSummary = card.querySelector(".feedback-summary");
    const feedbackList = card.querySelector(".feedback-list");
    const checkpointList = card.querySelector(".problem-checkpoints");
    const difficulty = card.querySelector(".difficulty-pill");

    card.querySelector(".problem-topic").textContent = topic.label;
    card.querySelector("h3").textContent = problem.title;
    difficulty.textContent = `난이도 ${problem.level}`;
    difficulty.dataset.level = problem.level;
    card.querySelector(".problem-description").textContent = problem.description;
    card.querySelector(".problem-goal").textContent = problem.goal;
    card.querySelector(".problem-hint").textContent = problem.hint;
    answerGuide.textContent = problem.answerGuide;

    problem.checkpoints.forEach((checkpoint) => {
      const item = document.createElement("li");
      item.textContent = checkpoint;
      checkpointList.appendChild(item);
    });

    checkbox.checked = completed.has(problem.id);
    answerInput.value = savedAnswers[problem.id] || "";
    let revealedHints = Math.min(hintProgress[problem.id] || 0, problem.hints.length);

    const renderHints = () => {
      hintList.innerHTML = "";
      if (revealedHints === 0) {
        hintStatus.textContent = "아직 힌트를 열지 않았습니다.";
      } else if (revealedHints >= problem.hints.length) {
        hintStatus.textContent = `모든 힌트를 확인했습니다. (${revealedHints}/${problem.hints.length})`;
      } else {
        hintStatus.textContent = `${revealedHints}개의 힌트를 확인했습니다. (${revealedHints}/${problem.hints.length})`;
      }

      problem.hints.slice(0, revealedHints).forEach((hint, index) => {
        const item = document.createElement("li");
        item.textContent = `힌트 ${index + 1}: ${hint}`;
        hintList.appendChild(item);
      });

      hintButton.textContent = revealedHints >= problem.hints.length ? "힌트 모두 확인함" : "힌트 보기";
      hintButton.disabled = revealedHints >= problem.hints.length;
    };

    const renderFeedback = () => {
      const feedback = evaluateAnswer(problem, answerInput.value);
      feedbackScore.textContent = feedback.scoreText;
      feedbackSummary.textContent = feedback.summary;
      feedbackList.innerHTML = "";
      feedback.details.forEach((detail) => {
        const item = document.createElement("li");
        item.textContent = detail;
        feedbackList.appendChild(item);
      });
    };

    renderHints();
    renderFeedback();

    answerInput.addEventListener("input", () => {
      saveAnswer(problem.id, answerInput.value);
    });

    hintButton.addEventListener("click", () => {
      if (revealedHints < problem.hints.length) {
        revealedHints += 1;
        saveHintProgress(problem.id, revealedHints);
        renderHints();
      }
    });

    checkAnswerButton.addEventListener("click", renderFeedback);

    checkbox.addEventListener("change", () => {
      const nextCompleted = getCompletedSet();
      if (checkbox.checked) {
        nextCompleted.add(problem.id);
      } else {
        nextCompleted.delete(problem.id);
      }
      saveCompletedSet(nextCompleted);
      updateStats();
      if (completedOnly.checked) {
        renderProblems();
      }
    });

    problemList.appendChild(card);
  });
}

[topicFilter, levelFilter, completedOnly].forEach((element) => {
  element.addEventListener("change", renderProblems);
});

renderTopics();
renderTopicFilter();
updateStats();
renderProblems();
