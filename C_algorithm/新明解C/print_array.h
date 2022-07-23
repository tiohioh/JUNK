//プリプロセッサ命令はここに記述する

//入力の配列を表示する
//void print_array(int a[],int al);
//配列はポインタで渡されるため受け取られた側では大きさはわからない
void print_array(int a[],int a_length){
	for(int i = 0;i < a_length;i++){
		printf("%4d ",a[i]);
	}
	puts("");
}