# 그래프, DFS, BFS - 점프왕 쩰리 (백준 실버4)
# 문제 링크: https://www.acmicpc.net/problem/16173

N=int(input())
board=[list(map(int,input().split())) for _ in range(N)]
visited=[[False]*N for _ in range(N)]

def dfs(r,c):
    if r==N-1 and c==N-1:
        return True
    if visited[r][c]:
        return False
    
    visited[r][c]=True
    jump=board[r][c]

    down_r=r+jump
    down_c=c
    right_c=c+jump
    right_r=r

    if down_r<N:
        if dfs(down_r,down_c):
            return True
        
    if right_c<N:
        if dfs(right_r,right_c):
            return True
    return False

if dfs(0,0):
    print('HaruHaru')

else:
    print('Hing')

    