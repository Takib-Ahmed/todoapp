

window.onload = function () {
  main()
}
function main() {
  const input = document.getElementById('input');
  const todolist = document.getElementById('todolist');
  const save = document.getElementById('save');
  const event = new KeyboardEvent('keydown', {
    key: 'Enter',
    code: 'Enter',
    which: 13,
    keyCode: 13,
  });


  save.setAttribute('title', 'save')
  input.focus()
  input.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("save").click();
    }
  });
  save.addEventListener('click', function () {

    if (input.value) {

      //create li
      const li = document.createElement('li');
      
      //1.create button
      const saves = document.createElement('button')
      saves.innerHTML = '<img src=\'images/save.png\' width=\'50px\'  class=\'img3\'>';
saves.classList.toggle('saves')
      const delet = document.createElement("button");
      delet.innerHTML = "<img src=\'images/—Pngtree—delete icon_4490395.png\' width=\'50px\' class=\'bgcolor\''>";
      const edit = document.createElement("button");
      edit.innerHTML = "<img src=\'images/Untitled (6).png\' width=\'50px\' class=\'bgblack\' '>";
      const done = document.createElement("button");
      done.innerHTML = "<img src=\'images/line-angle-font-yellow-checkmark-3bee230b35040bd151a716d4a685ee45.png\' width=\'50px\'  class=\'bggreen\''>";
      const notdone = document.createElement("button");
      notdone.innerHTML = "<img src=\'images/pngegg (2).png\' width=\'20px\' '>";
      const editinput = document.createElement('input')
      const div = document.createElement('div')
      


      editinput.value = input.value;
      editinput.readOnly = true;
      editinput.classList.toggle("input")
      editinput.classList.toggle("noteditableinput")
      li.appendChild(editinput);
      li.appendChild(div);
      li.classList.toggle('li')


      // localStorage.setItem(li,`${editinput.value}`)
      // alerted = localStorage.getItem(li);

      // li.innerText=`${alerted}`
      // 2. Append buttons in li
      edit.addEventListener('click', function () {

        // li.contentEditable=true;
        editinput.readOnly = false;
        div.removeChild(edit);
        div.appendChild(saves);
        editinput.classList.remove("input");
        editinput.focus()


      })
      editinput.addEventListener("keypress", function (event) {

        if (event.key === "Enter") {
          event.preventDefault();
          saves.click();
        }
      });
      saves.addEventListener('click', function () {
        div.appendChild(edit);
        div.removeChild(saves);
        editinput.readOnly = true;
        editinput.classList.toggle("input")
      })
      div.appendChild(done)
      div.appendChild(delet);
      div.appendChild(edit);

      //append li in Unordered list
      todolist.appendChild(li)
      //clear input after save
      input.value = '';
      //setting title attribute
      const titleattr = document.createAttribute('title');
      titleattr.value = 'List Title';
      li.setAttributeNode(titleattr);
      done.setAttribute('title', 'done')
      delet.setAttribute('title', 'delete')
      edit.setAttribute('title', 'edit')
      saves.setAttribute('title', 'save')

     



      let completecounted = todolist.getElementsByClassName('back').length;
      let count = document.getElementById('todolist').childElementCount;

      document.getElementById('all').innerText = `All ${count}`;
      let uncompletedcount = (count) - (completecounted);
      document.getElementById('uncompletedcounted').innerText = `Uncompleted ${uncompletedcount}`;
      
      delet.addEventListener('click', function () {
        li.classList.toggle('fall');
      setTimeout(() => {
        todolist.removeChild(li);
      }, 300);
        


        let adcompletecount = todolist.getElementsByClassName('back').length;
        let adallcount = document.getElementById('todolist').childElementCount;

        let uncompletedcount = (adallcount) - (adcompletecount);

        document.getElementById('all').innerText = `All ${adallcount--}`;
        document.getElementById('uncompletedcounted').innerText = `Uncompleted ${uncompletedcount--}`;
        document.getElementById('completedcount').innerText = `Completed ${adcompletecount}`;

      })
      done.addEventListener('click', function () {

        let complete = done.parentElement.parentElement;
        complete.classList.toggle('back');
   
       let completecount = todolist.getElementsByClassName('back').length
        document.getElementById('completedcount').innerText = `Completed ${completecount}`;
        let count = document.getElementById('todolist').childElementCount;
        let rigth = (count) - (completecount);     
        editinput.readOnly = true;
        document.getElementById('uncompletedcounted').innerText = `Uncompleted ${rigth}`;
        delet.addEventListener('click', function () {
          todolist.removeChild(li);


          let adcompletecount = todolist.getElementsByClassName('back').length;
          let adallcount = document.getElementById('todolist').childElementCount;

          let uncompletedcount = (adallcount) - (adcompletecount);

          document.getElementById('all').innerText = `All ${adallcount}`;
          document.getElementById('uncompletedcounted').innerText = `Uncompleted ${uncompletedcount--}`;
          document.getElementById('completedcount').innerText = `Completed ${adcompletecount}`;
          

        })
      })


    }
  }

  )





  
  
  

}
const todolist = document.getElementById('todolist');

function showAllTask() {
  const allTasks = document.querySelectorAll('.li'); // Select all <li> elements within the element with id 'todolist'
  
  allTasks.forEach(task => {
      task.style.display = 'flex';
  });
}

function showCompleteTask() {
  const allTasks = document.querySelectorAll('.li');
  console.log()
  allTasks.forEach(task => {
      if (task.classList.contains('back')) {
          task.style.display = 'flex';
      } else {
          task.style.display = 'none';
      }
  });
}

function showUncompleteTask() {
  const allTasks = document.querySelectorAll('.li');
  allTasks.forEach(task => {
      if (task.classList.contains('back')) {
          task.style.display = 'none';
      } else {
          task.style.display = 'flex';
      }
  });
}
function sortask(selected) {
  console.log('Selected:', selected);
  switch (selected) {
      case 'All':
          showAllTask();
          break;
      case 'completed':
          showCompleteTask();
          break;
      case 'uncompleted':
          showUncompleteTask();
          break;
      default:
          console.log('Option not found');
  }
}


