$(document).ready(function()
{
    $('#btnLoad2').click( function(){
        $.getJSON('ajax-stuinfo.json',function(jsonData){
            /* JSON에 값을 갖고왓다  */
            var tagList ="";
            /* 태그리스트를 비운다 */
            $.each(jsonData.stuinfo, function(){
                /* jsonData의 stuinfo의 배열의 값을 갖고옴 */
                tagList += "<li>" +this.schoolyear +"</li>";
                /* 태그리스트에 li태그로 둘러싸인 stuinfo의 schoolyear의 값을 갖고옴 */

            });
            $('#listArea').empty();
            /* 비우기 */
            $('#listArea').append(tagList);
            /* appendㅇ로 tagList 를 추가함  */
            $('#listArea').listview('refresh');
            /* listview한다 refresh 그전의 형식대로  */
        });
    });
});
        