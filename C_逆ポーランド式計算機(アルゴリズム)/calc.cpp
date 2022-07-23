//encoded by utf-8
//拡張子はcppですが中身は純C言語です。15行目の配列が計算式の内容です。trueのとき数字を、falseのときに演算子を挿入します。数式を変更したらそのサイズを14行目のwidthに代入してください。
//アロー(=>)とドットが混在しているのは寝坊けてたためです。気にしない、気にしない,,,,
#include <stdio.h>

typedef struct fomula{
	char type;
	long int value;
} fomula;

void print(fomula fml,int width);

int main(void) {
	int max_length = 100;
	int width = 11;
	fomula fml[max_length] = {
		{true,32},
		{true,5},
		{false,'+'},
		{true,52},
		{true,4},
		{false,'+'},
		{true,9},
		{false,'*'},
		{true,81},
		{false,'+'},
		{false,'*'}
	};//等価式(32+5)+((52+4)*9+81)
	
	
	int flag = false;
	do{
		for(int i = width - 3;i >= 0;i--){
			if((fml + i)->type && (fml + i + 1)->type && !(fml + i + 2)->type && (fml + i + 2)->value){
				long int p1 = (fml + i)->value;
				long int p2 = (fml + i + 1)->value;
				char ope = (fml + i + 2)->value;
				(fml + i + 1)->type = false;
				(fml + i + 1)->value = 0;
				(fml + i + 2)->type = false;
				(fml + i + 2)->value = 0;
				long int ret ;
				switch(ope){
					case '%':
						ret = p1 % p2;
					break;
					case '&':
						ret = p1 & p2;
					break;
					case '*':
						ret = p1 * p2;
					break;
					case '+':
						ret = p1 + p2;
					break;
					case '-':
						ret = p1 - p2;
					break;
					case '/':
						ret = p1 / p2;
					break;
					case '|':
						ret = p1 | p2;
					break;
				}
				(fml + i)->value = ret;
			}
		}
		flag = false;
		int temp_width = width;
		for(int i = 0;i < width;i++){
			if(!(fml + i)->type && !(fml + i)->value){
				for(int j = i + 1;j < width;j++){
					if((fml + j)->type || (fml + j)->value){
						(fml + i)->type = (fml + j)->type;
						(fml + i)->value = (fml + j)->value;
						(fml + j)->type = false;
						(fml + j)->value = 0;
						temp_width = i + 1;
						flag = true;
						break;
					}
				}
			}
		}
		width = temp_width;
		
	}while(flag);
	

	for(int i = 0;i < width;i++){
		printf("%d %d\n",(fml + i)->type,fml[i].value);
	}
}