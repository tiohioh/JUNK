//P215E6-6 シェイカーソート
#include <stdio.h>
#include <stdlib.h>
#include "print_array.h"

//関数型マクロ swap -> x と y を入れ替え
#define swap(type, x, y) do{type t = x;x = y;y = t;}while(0)

//P215#6-2を参考にシェイカーソート(バブルソートの走査を左右交互に行う方法を実装)
int co = 0;
void bubble(int a[], int n){
	const int num = n;
	for(int i = 0; i < n - 1;){
		int exchange = 0;
		if((i + n) % 2 == 0){
			//6-3のソート済みを無視するやつ
			//int min = i;
			//iが偶数(右から走査(小さい値を抽出))
			for(int j = n - 1;j > i;j--){
				print_array(a,num);
				co++;
				if(a[j - 1] > a[j]){
					swap(int,a[j - 1],a[j]);
					exchange++;
					//min = j - 1;
				}
			}
			//i = min;
			i++;
			//puts("odd---------------------------------------------");
		}else{
			//6-3のソート済みを無視するやつ
			//int max = n;
			//iが奇数(左から走査(大きい値を抽出))
			for(int j = i;j < n - 1;j++){
				print_array(a,num);
				co++;
				if(a[j] > a[j + 1]){
					swap(int,a[j],a[j + 1]);
					exchange++;
					//max = j + 1;
				}
			}
			//n = max;
			n--;
			//puts("even---------------------------------------------");
		}
		puts("---------------------------------------------");
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