document.addEventListener('DOMContentLoaded', function(){
    let idCounter = 0;
    let button = document.createElement('button');
    let buttonText = document.createTextNode('Add Square');

    button.appendChild(buttonText);
    document.body.appendChild(button);


    idCounter++;
    

    
    button.addEventListener('click', function(e){
        //Code for the Boxes:
        let div = document.createElement('div');
        document.body.appendChild(div);
        div.className = 'divBoxes'
        
        //Code for the text inside the Boxes:
        let boxId = document.createElement('div')
        let boxText = document.createTextNode(`ID-${idCounter}`);
        div.id = idCounter++
        
        boxId.appendChild(boxText);
        div.appendChild(boxId)
        boxId.style.display = 'none';

        //I tried to hover: in CSS and it didn't work; Jake helped me out with the mouse functions:

        //function that mouseovers on div
        div.addEventListener('mouseover', function(){
            boxId.style.display = 'flex'
        })

        //function that mouseouts of div
        div.addEventListener('mouseout', function(){
            boxId.style.display = 'none'
        })

        //function to 'click' on divs to randomize color
        div.addEventListener('click', function(){
            let colorsArray = ['blue', 'red', 'green', 'pink', 'purple', 'crimson'];
            let randomColor =  Math.floor(Math.random() * colorsArray.length);
            div.style.backgroundColor = colorsArray[randomColor];
        })
            //function that removes next sibling and previous sibling if clicked.
            //I think this works???????????????????????????????????????????????????????????
          div.addEventListener('dblclick', function(){
              if(div.nextSibling) {
                  div.nextSibling.remove();
              } else {
                  alert('Nothing to remove!')
      
              } if (div.previousSibling) {
                  div.previousSibling.remove();
              } else {
                  alert('Nothing to remove!');
              }

          })  
    }
    );

});