#include "game.h"

// 游戏进行函数
void game(void)
{
    printf("--------game-------\n");
    char mine[ROWS][COLS] = {0}, printBoard[ROWS][COLS] = {0};
    initBoard(mine, ROWS, COLS, '0');
    initBoard(printBoard, ROWS, COLS, '*');
    //布雷
    setMine(mine,ROWS,COLS,COUNT);
    //打印游戏面板
    print(printBoard, ROWS, COLS);
    //排雷
    findMine(mine,printBoard,ROWS,COLS,COUNT);
}

// 初始化棋盘
void initBoard(char (*arr)[COLS], int row, int col, char setchar)
{
    for (int i = 0; i < row; i++)
    {
        for (int j = 0; j < col; j++)
            arr[i][j] = setchar;
    }
}

// 打印棋盘
void print(char (*arr)[COLS], int row, int col)
{
    for (int i = 0; i < row - 1; i++)
        printf("%d ", i);
    printf("\n");
    for (int i = 1; i < row - 1; i++)
    {
        printf("%d ", i);
        for (int j = 1; j < col - 1; j++)
            printf("%c ", arr[i][j]);
        printf("\n");
    }
}

//随机数布置雷
void setMine(char (*arr)[COLS],int row,int col,int count)
{
    while(count!=0)
    {
        int x=rand()%ROW+1,y=rand()%COL+1;
        if(arr[x][y]=='0')
        {
            arr[x][y]='1';
            count--;
        }
    }
}

//排雷
void findMine(char (*arr)[COLS],char (*printBoard)[COLS],int row,int col,int count)
{
    while(1)
    {
        printf("请排雷:\n");
        int x,y;
        scanf("%d %d",&x,&y);
        if(arr[x][y]=='1')
        {
            print(arr,COLS,ROWS);
            printf("很遗憾,踩雷了...\n");
            break;
        }
        else
        {
            int sum=0;
            for(int i=x-1;i<=x+1;i++)
            {
                for(int j=y-1;j<=y+1;j++)
                {
                    sum+=arr[i][j]-'0';
                }
                printBoard[x][y]=sum+'0';
                count--;
            }
            //print(arr,COLS,ROWS);
            print(printBoard,ROWS,COLS);
        }
        if(!count)
        {
            printf("恭喜胜利...\n");
            break;
        }
    }
}