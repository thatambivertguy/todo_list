$(()=>{
function refresh(todos){
    $('#taskrow').empty()
    todos.forEach(t => {
        $('#taskrow').append(
            `<tr>
            <td>${t}}</td>
            <td>false</td>
          </tr>`
        )
        
    });
}


$('#taskform').submit((e)=>{
    e.preventDefault()
    $.post(
        '/',
        {
            task: $('#task').val()
        },
        (data)=>{
            let arr=[]
            console.log(data)
            for(let i=0;i<10;i++)
            {
                arr[i]=data.title
            }``
            refresh(arr)
        }
    )
})
})