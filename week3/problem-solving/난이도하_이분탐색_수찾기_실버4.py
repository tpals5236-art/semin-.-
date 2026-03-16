# 이분탐색 - 수 찾기 (백준 실버4)
# 문제 링크: https://www.acmicpc.net/problem/1920


def binary_search(arr, target): #핵심 이분탐색 코드 구조
    start=0
    end=len(arr)-1

    while start<=end:
        mid=(start+end)//2

        if arr[mid]==target:
            return 1
        elif arr[mid]<target:
            start=mid+1
        else:
            end=mid-1
    return  0
N=int(input()) #몇 개의 수를 입력받을지
A=list(map(int,input().split())) #리스트 형태로 입력받기 map split핵심
M=int(input())
targets=list(map(int,input().split()))

A.sort()

for i in targets:
    print(binary_search(A,i))