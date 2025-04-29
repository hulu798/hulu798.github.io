#include <stdio.h>

#include <stdlib.h>

#include <time.h>

#include <windows.h>

// 定义游戏棋盘大小,便于后期拓展
#define ROW 9
#define COL 9
#define ROWS (ROW + 2)
#define COLS (COL + 2)
// 定义雷的数量
#define COUNT 10

// 游戏进行函数
void game(void);

// 初始化棋盘
void initBoard(char (*arr)[COLS], int row, int col, char setchar);

// 打印棋盘
void print(char (*arr)[COLS], int row, int col);

// 随机数布置雷
void setMine(char (*arr)[COLS], int row, int col, int count);

// 排雷
void findMine(char (*arr)[COLS], char (*printBoard)[COLS], int row, int col, int count);