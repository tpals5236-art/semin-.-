# 트리 - 트리의 부모 찾기 (백준 실버2)
# 문제 링크: https://www.acmicpc.net/problem/11725

N=int(input())
graph=[[] for _ in range(N+1)]
visited=[False]*(N+1)
parent=[0]*(N+1)


for _ in range(N-1):
    a,b=map(int,input().split())
    graph[a].append(b)
    graph[b].append(a)

stack=[1]
visited[1]=True

while stack:
    current=stack.pop()
    for neighbor in graph[current]:
       if not visited[neighbor]:
           
