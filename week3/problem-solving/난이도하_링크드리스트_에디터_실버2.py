# 링크드리스트 - 에디터 (백준 실버2)
# 문제 링크: https://www.acmicpc.net/problem/1406
#시간 초과로 import sys를 이용하여 입력받는 속도를 높여서 통과
import sys

left = list(sys.stdin.readline().strip())
right = []

N = int(sys.stdin.readline())

for _ in range(N):
    command = sys.stdin.readline().strip()

    if command == 'B':
        if left:
            left.pop()

    elif command == 'L':
        if left:
            right.append(left.pop())

    elif command == 'D':
        if right:
            left.append(right.pop())

    else:
        c = command.split()
        left.append(c[1])

print(''.join(left) + ''.join(reversed(right)))

