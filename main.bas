//ベーシック風コード

R3 = #50000000
R3 += `100000 << 2 //値を変更するピンを指定
R0 = 1

:start
wait 12M //カウント(1秒)
[R3]L = R0
R0 += 1 //R0の値を反転
R0 >> 1 //上に同じ
goto start

RET