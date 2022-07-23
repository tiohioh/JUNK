//P217#6-3 バブルソート
#include <stdio.h>
#include <stdlib.h>
#include "print_array.h"

//関数型マクロ swap -> x と y を入れ替え

#define swap(type, x, y) do{type t = x;x = y;y = t;}while(0)

//自作プログラム(書籍でwhileを使ってるのが気に入らなかったので)
//diff P215#6-2 P217#6-3 -> 走査範囲を限定(確定した部分は実行しない) => exchangeを追加し一度も交換が実施されないときにその時点で終了する
int co = 0;
void bubble(int a[], int n){
	for(int i = 0; i < n - 1;i++){
		int min = i + 1;
		int exchange = 0;
		for(int j = n - 1;j > i;j--){
			print_array(a, n);
			co++;
			if(a[j - 1] > a[j]){
				swap(int,a[j - 1],a[j]);
				exchange++;
				min = j - 1;
			}
		}
		puts("---------------------------------------------");
		i = min;
		if(exchange == 0)
			return;
	}
}

int main(void){
	int nx;
	printf("単純交換ソート\n");
	int x[] = {1,3,2,5,8,6,0,7,4,9};
	int x_length = sizeof(x) / sizeof(int);
	print_array(x, x_length);
	bubble(x,x_length);
	printf("result : \n");
	print_array(x, x_length);
	printf("%d",co);
	return 0;
}