# DP - 피보나치 수 2 (백준 브론즈 1)
# 문제 링크: https://www.acmicpc.net/problem/2748

N=int(input())

def fibonacci_N(N,memo=None):
   
    if memo is None:  #딕셔너리 형태의 저장
        memo={}  
    if N<=1:       #0이나 1일 때 바로 반환
        return N
    if N in memo:   #숫자 N을 받았을 때 N만큼 피보나치 수행
        return memo[N]
    memo[N]=fibonacci_N(N-1,memo)+fibonacci_N(N-2,memo)
    return memo[N]
print(fibonacci_N(N))  #최종 피보나치(N)출력









