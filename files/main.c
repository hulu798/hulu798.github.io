#include "game.h"

static void menu(void);
int main()
{
    SetConsoleOutputCP(65001);
    //设置随机数种子
    srand((unsigned int)time(NULL));
    int play = -1;
    do
    {
        menu();
        printf("Please choose:>");
        scanf("%d", &play);
        while (getchar() != '\n')
            ;
        switch (play)
        {
        case 1:
            game();
            break;
        case 0:
            printf("EXIT!\n");
            break;
        default:
            printf("ERROR!\n");
            break;
        }
    } while (play);
    system("pause");
    return 0;
}

void menu(void)
{
    printf("************************\n");
    printf("*********1. play********\n");
    printf("*********0. exit********\n");
    printf("************************\n");
}