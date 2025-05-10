const arry=[];

function showtask(){

let html='';

for (let i = 0; i < arry.length; i++) {

    let {task, dates}= arry[i];
    html+= `
    <div class="taskname"> ${task} </div>
    <div class="due-date">  ${dates} </div> 

    <button class="Delete-but button-main red-b delete-button">Delete</button>
    `;   
}

console.log(html);
document.querySelector('.taskshow').innerHTML= html;

document.querySelectorAll('.delete-button').forEach((db,i)=>{
    db.addEventListener('click', ()=>{
        arry.splice(i,1);
        showtask();
    });
});


}

document.querySelector('.jsbuttonadd').addEventListener('click',()=> {
    addtodo();
});

console.log(document.querySelectorAll('.delete-button'));


    
// });


function addtodo() {
    let task = document.querySelector('.task').value;
    const dates = document.querySelector('.dates').value;
    // const task=taskel.value;

    arry.push({
        // task: task,
        // date:date
        task,
        dates
    });

    console.log(arry);
    document.querySelector('.task').value='';
    document.querySelector('.dates').value='';

    showtask();


}