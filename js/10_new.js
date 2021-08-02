$(function () {
// let size = parseInt($('div').css('fontSize'));
// alert(size)
// 能知道原本是多少size
// parseInt() 將字串轉換為以十進位表示的整數(例如6px變成16 這樣才能進行函數裡的加減)


    $('#shrink').click(function(){
        changeSize('small');
    });
    $('#enlarge').click(function(){
        changeSize('big');
    });

    function changeSize(size){
        let currentSize = parseInt($('div').css('fontSize'));

        if(size == 'small'){
            newsize = currentSize - 2;
        }else if(size == 'big'){        //-->除了small之外 還要else if big
            newsize = currentSize + 2;
        }
        $('div').css('fontSize',newsize);
    }
});