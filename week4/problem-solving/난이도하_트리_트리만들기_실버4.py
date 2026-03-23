# 트리 - 트리 만들기 (백준 실버4)
# 문제 링크: https://www.acmicpc.net/problem/14244

n, m = map(int, input().split()) #백준에서 가장 많이 사용하는 변수에 입력값 받는 구조 
result=[] #결과를 입력받고 출력할 빈 리스트 생성
result.extend([(0,1),(1,2)]) #리스트에 기본으로 넣어줄 3개의 정점
cur=3 #새로 생성될 노드의 번호를 받아줄 변수
parent=2 #마지막 n개의 수를 맞춰줄 때 사용할 변수

for _ in range(m-2):  #m개의 개수를 맞추기 위한 반복문 
    result.append((1,cur))
    cur+=1

for _ in range(n-m-1):  #n개의 개수를 맞추기 위한 반복문
    result.append((parent,cur))
    parent=cur
    cur+=1
for a, b in result: #조건에 맞게 출력하기 위한 출력문
    print(a, b)