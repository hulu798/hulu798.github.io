��/ /   �p��yrHeN �h�b>\ 
 d o c u m e n t . a d d E v e n t L i s t e n e r ( ' D O M C o n t e n t L o a d e d ' ,   ( )   = >   {  
         / /   �p��yrHe 
         f u n c t i o n   c r e a t e F i r e w o r k s ( )   {  
                 c o n s t   c a n v a s   =   d o c u m e n t . c r e a t e E l e m e n t ( ' c a n v a s ' ) ;  
                 c a n v a s . s t y l e . p o s i t i o n   =   ' f i x e d ' ;  
                 c a n v a s . s t y l e . t o p   =   ' 0 ' ;  
                 c a n v a s . s t y l e . l e f t   =   ' 0 ' ;  
                 c a n v a s . s t y l e . p o i n t e r E v e n t s   =   ' n o n e ' ;  
                 c a n v a s . s t y l e . z I n d e x   =   ' 9 9 9 9 9 9 ' ;  
                 d o c u m e n t . b o d y . a p p e n d C h i l d ( c a n v a s ) ;  
  
                 c o n s t   c t x   =   c a n v a s . g e t C o n t e x t ( ' 2 d ' ) ;  
                 l e t   p a r t i c l e s   =   [ ] ;  
  
                 f u n c t i o n   r e s i z e C a n v a s ( )   {  
                         c a n v a s . w i d t h   =   w i n d o w . i n n e r W i d t h ;  
                         c a n v a s . h e i g h t   =   w i n d o w . i n n e r H e i g h t ;  
                 }  
  
                 w i n d o w . a d d E v e n t L i s t e n e r ( ' r e s i z e ' ,   r e s i z e C a n v a s ) ;  
                 r e s i z e C a n v a s ( ) ;  
  
                 c l a s s   P a r t i c l e   {  
                         c o n s t r u c t o r ( x ,   y )   {  
                                 t h i s . x   =   x ;  
                                 t h i s . y   =   y ;  
                                 t h i s . v e l o c i t y   =   {  
                                         x :   ( M a t h . r a n d o m ( )   -   0 . 5 )   *   8 ,  
                                         y :   ( M a t h . r a n d o m ( )   -   0 . 5 )   *   8  
                                 } ;  
                                 t h i s . a l p h a   =   1 ;  
                                 t h i s . c o l o r   =   ` h s l ( $ { M a t h . r a n d o m ( )   *   3 6 0 } ,   5 0 % ,   5 0 % ) ` ;  
                                 t h i s . s i z e   =   M a t h . r a n d o m ( )   *   2   +   1 ;  
                         }  
  
                         d r a w ( )   {  
                                 c t x . s a v e ( ) ;  
                                 c t x . g l o b a l A l p h a   =   t h i s . a l p h a ;  
                                 c t x . f i l l S t y l e   =   t h i s . c o l o r ;  
                                 c t x . b e g i n P a t h ( ) ;  
                                 c t x . a r c ( t h i s . x ,   t h i s . y ,   t h i s . s i z e ,   0 ,   M a t h . P I   *   2 ) ;  
                                 c t x . f i l l ( ) ;  
                                 c t x . r e s t o r e ( ) ;  
                         }  
  
                         u p d a t e ( )   {  
                                 t h i s . x   + =   t h i s . v e l o c i t y . x ;  
                                 t h i s . y   + =   t h i s . v e l o c i t y . y ;  
                                 t h i s . a l p h a   - =   0 . 0 1 ;  
                                 t h i s . v e l o c i t y . y   + =   0 . 1 ;  
                         }  
                 }  
  
                 f u n c t i o n   c r e a t e P a r t i c l e s ( x ,   y )   {  
                         f o r   ( l e t   i   =   0 ;   i   <   5 0 ;   i + + )   {  
                                 p a r t i c l e s . p u s h ( n e w   P a r t i c l e ( x ,   y ) ) ;  
                         }  
                 }  
  
                 f u n c t i o n   a n i m a t e ( )   {  
                         c t x . f i l l S t y l e   =   ' r g b a ( 0 ,   0 ,   0 ,   0 . 1 ) ' ;  
                         c t x . f i l l R e c t ( 0 ,   0 ,   c a n v a s . w i d t h ,   c a n v a s . h e i g h t ) ;  
  
                         p a r t i c l e s   =   p a r t i c l e s . f i l t e r ( p a r t i c l e   = >   {  
                                 i f   ( p a r t i c l e . a l p h a   < =   0 )   r e t u r n   f a l s e ;  
                                 p a r t i c l e . u p d a t e ( ) ;  
                                 p a r t i c l e . d r a w ( ) ;  
                                 r e t u r n   t r u e ;  
                         } ) ;  
  
                         r e q u e s t A n i m a t i o n F r a m e ( a n i m a t e ) ;  
                 }  
  
                 d o c u m e n t . a d d E v e n t L i s t e n e r ( ' c l i c k ' ,   ( e )   = >   {  
                         c r e a t e P a r t i c l e s ( e . c l i e n t X ,   e . c l i e n t Y ) ;  
                 } ) ;  
  
                 a n i m a t e ( ) ;  
         }  
  
         / /    �h�b>\yrHe 
         f u n c t i o n   c r e a t e M o u s e T r a i l ( )   {  
                 c o n s t   c a n v a s   =   d o c u m e n t . c r e a t e E l e m e n t ( ' c a n v a s ' ) ;  
                 c a n v a s . s t y l e . p o s i t i o n   =   ' f i x e d ' ;  
                 c a n v a s . s t y l e . t o p   =   ' 0 ' ;  
                 c a n v a s . s t y l e . l e f t   =   ' 0 ' ;  
                 c a n v a s . s t y l e . p o i n t e r E v e n t s   =   ' n o n e ' ;  
                 c a n v a s . s t y l e . z I n d e x   =   ' 9 9 9 9 9 8 ' ;  
                 d o c u m e n t . b o d y . a p p e n d C h i l d ( c a n v a s ) ;  
  
                 c o n s t   c t x   =   c a n v a s . g e t C o n t e x t ( ' 2 d ' ) ;  
                 l e t   p o i n t s   =   [ ] ;  
                 l e t   m o u s e   =   {   x :   0 ,   y :   0   } ;  
  
                 f u n c t i o n   r e s i z e C a n v a s ( )   {  
                         c a n v a s . w i d t h   =   w i n d o w . i n n e r W i d t h ;  
                         c a n v a s . h e i g h t   =   w i n d o w . i n n e r H e i g h t ;  
                 }  
  
                 w i n d o w . a d d E v e n t L i s t e n e r ( ' r e s i z e ' ,   r e s i z e C a n v a s ) ;  
                 r e s i z e C a n v a s ( ) ;  
  
                 c l a s s   P o i n t   {  
                         c o n s t r u c t o r ( x ,   y )   {  
                                 t h i s . x   =   x ;  
                                 t h i s . y   =   y ;  
                                 t h i s . a g e   =   0 ;  
                                 t h i s . m a x A g e   =   5 0 ;  
                                 t h i s . c o l o r   =   ` h s l ( $ { M a t h . r a n d o m ( )   *   3 6 0 } ,   7 0 % ,   5 0 % ) ` ;  
                         }  
  
                         u p d a t e ( )   {  
                                 t h i s . a g e + + ;  
                         }  
  
                         d r a w ( )   {  
                                 c o n s t   a l p h a   =   1   -   t h i s . a g e   /   t h i s . m a x A g e ;  
                                 c t x . f i l l S t y l e   =   t h i s . c o l o r . r e p l a c e ( ' ) ' ,   ` , $ { a l p h a } ) ` ) . r e p l a c e ( ' h s l ' ,   ' h s l a ' ) ;  
                                 c t x . b e g i n P a t h ( ) ;  
                                 c t x . a r c ( t h i s . x ,   t h i s . y ,   2 ,   0 ,   M a t h . P I   *   2 ) ;  
                                 c t x . f i l l ( ) ;  
                         }  
                 }  
  
                 d o c u m e n t . a d d E v e n t L i s t e n e r ( ' m o u s e m o v e ' ,   ( e )   = >   {  
                         m o u s e . x   =   e . c l i e n t X ;  
                         m o u s e . y   =   e . c l i e n t Y ;  
                         p o i n t s . p u s h ( n e w   P o i n t ( m o u s e . x ,   m o u s e . y ) ) ;  
                 } ) ;  
  
                 f u n c t i o n   a n i m a t e ( )   {  
                         c t x . c l e a r R e c t ( 0 ,   0 ,   c a n v a s . w i d t h ,   c a n v a s . h e i g h t ) ;  
  
                         p o i n t s   =   p o i n t s . f i l t e r ( p o i n t   = >   {  
                                 p o i n t . u p d a t e ( ) ;  
                                 p o i n t . d r a w ( ) ;  
                                 r e t u r n   p o i n t . a g e   <   p o i n t . m a x A g e ;  
                         } ) ;  
  
                         r e q u e s t A n i m a t i o n F r a m e ( a n i m a t e ) ;  
                 }  
  
                 a n i m a t e ( ) ;  
         }  
  
         / /   R�YSyrHe 
         c r e a t e F i r e w o r k s ( ) ;  
         c r e a t e M o u s e T r a i l ( ) ;  
 } ) ;  
 