$(function(){
  // Btn
  const Btns = $('#stampArea a'), letterCont = $('#letterArea .inner div');
  Btns.click(function(e){
    e.preventDefault();
    Btns.removeClass('active');
    $(this).addClass('active');
    letterCont.hide();
    const tabTarget = $(this).attr('href');
    console.log(tabTarget)
     $(tabTarget).show();
  });
  Btns.eq(0).trigger('click');
});