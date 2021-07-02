$(document).ready(function()
{
    $('#btnLoad3').click( function(){

        $('#listArea').empty();
        /* empty() 선택한 내용을 지움 */
        $('#listArea').load('ajax-listinfo.html li',function(htmlData){
            /* load받는다 ajax-listinfo.html의 li의 값을  */
            $('#listArea').listview('refresh');
            /* listview() 여러개의 항목을 열거할때 사용
            refresh 같은 형태로 다시함  */
        
        });
    });
});