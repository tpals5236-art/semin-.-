# DP - 01타일 (백준 실버3)
# 문제 링크: https://www.acmicpc.net/problem/1904
n=int(input())

if n<=2:
    print(n)
else:
    dp=[0]*(n+1)
    dp[1]=1
    dp[2]=2

    for i in range(3,n+1):
        dp[i]=(dp[i-1]+dp[i-2])%15467
    print(dp[n])