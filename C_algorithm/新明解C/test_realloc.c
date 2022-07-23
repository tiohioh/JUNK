//realloc test
#include <stdio.h>
#include <stdlib.h>
#include "print_array.h"

#define WIDTH 5
#define WIDTH2 10
#define BIAS 4

int main(void) {
	int *array_1;
	array_1 = (int*) malloc(sizeof(int) * WIDTH);
	for(char i = 0;i < WIDTH;i++){
		*(array_1 + i) = i + BIAS;
	}
	printf("array_1 : ");
	print_array(array_1,WIDTH);
	
	//アドレスが連番になるのを防ぐために適当な領域を確保
	malloc(sizeof(int) * WIDTH);
	
	int *array_2 = (int*) realloc(array_1,sizeof(int) * WIDTH2);
	
	puts("realloc");
	
	printf("array_1 : ");
	print_array(array_1,WIDTH);
	printf("array_2 : ");
	print_array(array_2,WIDTH2);
}