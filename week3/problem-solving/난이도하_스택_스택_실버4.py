# 스택 - 스택 (백준 실버 4)
# 문제 링크: https://www.acmicpc.net/problem/10828
#정답은 맞지만 시간초과 문제 발생

N=int(input())
stack=[]

for _ in range(N):
    cmd=input().split()

    if cmd[0]=='push':
        stack.append(int(cmd[1]))
    elif cmd[0]=='pop':
        if stack:
            print(stack.pop())
        else:
            print(-1)
    elif cmd[0]=='top':
        if stack:
            print(stack[-1])
        else:
            print(-1)
    elif cmd[0]=='size':
        print(len(stack))
    elif cmd[0]=='empty':
        if stack:
            print(0)
        else:
            print(1)
            
       
    
