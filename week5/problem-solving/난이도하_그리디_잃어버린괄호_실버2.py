# 그리디 - 잃어버린 괄호 (백준 실버2)
# 문제 링크: https://www.acmicpc.net/problem/1541

exstr=input()
parts=exstr.split('-')

result=sum(map(int,parts[0].split('+')))

for i in range(1,len(parts)):
    result-=sum(map(int, parts[i].split('+')))
print(result)