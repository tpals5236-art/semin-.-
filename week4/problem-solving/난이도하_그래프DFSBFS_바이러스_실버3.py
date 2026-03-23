# 그래프, DFS, BFS - 바이러스 (백준 실버3)
# 문제 링크: https://www.acmicpc.net/problem/2606

N=int(input())
M=int(input())

graph=[[]for _ in range(N+1)]
visited=[False]*(N+1)

for _ in range(M):
    a,b=map(int, input().split())

    graph[a].append(b)
    graph[b].append(a)
def dfs(v):
    visited[v]=True
    for neighbor in graph[v]:
        if not visited[neighbor]:
            dfs(neighbor)

dfs(1)

print(visited.count(True)-1)
