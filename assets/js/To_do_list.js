$('ul').on("click","li",function(){
  $(this).toggleClass('done');
});
$("ul").on("click","span",function(event){
  $(this).parent().fadeOut(1000,function(){
    $(this).remove()
  });
  event.stopPropagation();
})
$('input').keypress(function(event){
  if(event.which===13){
    var sth=$(this).val();
    $(this).val('')
    $('ul').append('<li><span><i class="fas fa-trash-alt" style=" font-size:15px;"></i> </span>'+sth+'</li>')
    }
})
$('.fa-calendar-plus').click(function(){
  $('input').fadeToggle()
});
