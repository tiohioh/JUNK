/*
s と target の文字列を後ろから comp_len だけ比較したとき一致しているかを返す
*/
bool strcmplast(const char* s, const char* target, unsigned int comp_len) {
  const size_t s_len = strlen(s);
  const size_t target_len = strlen(target);

  if (s_len < comp_len || target_len < comp_len) {//比較要素の方が長い時
    return false;
  }

  unsigned int ptr = 0;
  while(comp_len > ptr){
    if(s[s_len - 1 - ptr] != target[target_len - 1 - ptr])//後ろから比較して不一致だった時
      return false;
    ptr++;
  }
  return true;
}
