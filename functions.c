

#include <stdio.h>
#include <emscripten.h>
#include <stdlib.h> 

// EMSCRIPTEN_KEEPALIVE
// float add(float x, float y) {
//   return x + y;
// }



EMSCRIPTEN_KEEPALIVE
void grayScale(unsigned char* data, int len) {
   for (int i = 0; i < len; i += 1) {
       data[i] = 1;
   }
}


EMSCRIPTEN_KEEPALIVE
float getSqr(float num) {
    return num * num;
}



//
//
// EMSCRIPTEN_KEEPALIVE
// void grayScale(unsigned char* data, int len) {
//    for (int i = 0; i < len - 4; i += 4) {
//        int r = data[i];
//        int g = data[i + 1];
//        int b = data[i + 2];
//        int a = data[i + 3];
//        data[i] = r;
//        data[i + 1] = r;
//        data[i + 2] = r;
//        data[i + 3] = a;
//    }
// }