$(()=>{
function refresh(todos){
    $('#taskrow').empty()
    todos.forEach(t => {
        $('#taskrow').append(
            `<tr>
            <td>${t.id}</td>
            <td>${t.title}</td>
            <td>${t.striked}</td>
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
            // let arr=[]
            // console.log(data)
            // for(let i=0;i<10;i++)
            // {
            //     arr[i]=data.title
            // }
            console.log(data)
            refresh(data)
        }
    )
    $('#task').val('')
})
})