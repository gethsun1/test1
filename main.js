const list_items = document.querySelectorAll('.list-item')
const lists = document.querySelectorAll('.list')

let draggedItem = null;

for (let li = 0; li < list_items.length; li++){
    const item = list_items[li];

    item.addEventListener('dragstart', function(){
        draggedItem = item;
        console.log('dragstart')
        setTimeout(function(){
            item.style.display = 'none';
        }, 0)
        
    });

    item.addEventListener('dragend', function(){
        setTimeout(function(){
            draggedItem.style.display = 'block';
            draggedItem = null;
        }, 0)
        
    });

    for (let ls = 0;ls < lists.length; ls++){
        const list = lists[ls];

        list.addEventListener('dragover', function(e){
            e.preventDefault();
        });

        list.addEventListener('dragenter',function(e){
            e.preventDefault();
            this.style.backgroundColor = 'rgba(0,0,0,0.2)';
        });

        list.addEventListener('dragleave', function(e){
            this.style.backgroundColor = 'rgba(0,0,0,0.1)';

        });

        list.addEventListener('drop',function(e){
            console.log('drop');

            this.append(draggedItem);
            this.style.backgroundColor = 'rgba(0,0,0,0.1)';
        });
    }
}