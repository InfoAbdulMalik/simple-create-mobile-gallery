var input= document.getElementById('upload-input');
input.onchange= function (){

    var container= document.getElementById('container');
    var file= this.files[0];
        // get your image url ;

    var url=URL.createObjectURL(file);
    var empty= document.getElementById('empty');
    empty.style.display='none';
    var button=document.createElement('button');
    button.className='btn-img';
    var img= document.createElement('img');
    img.id='img-part';
    img.style.width='100%'
    img.src=url;
    button.append(img);
    container.append(button);
    
    // create action-div deleteIcon and eyeIcon
    var action= document.createElement('div');
        action.id='action-div'
    var deleteBtn= document.createElement('button');
        deleteBtn.id='deleteBtnIcon'
    var deleteIcon= document.createElement('i');
        deleteIcon.className= "fa-solid fa-trash";

    // create viewBtn and append in action-div

    var eyeBtn=document.createElement('button');
    var eyeIcon=document.createElement('i');
    eyeIcon.className="fa-solid fa-eye";
    action.append(eyeBtn);
    eyeBtn.append(eyeIcon);  
    action.append(deleteBtn);
    deleteBtn.append(deleteIcon);
    button.append(action);   
    
    // deleteBtn to delete image
    
    deleteBtn.onclick=function (){
    
        button.remove()
    }
    // view your image 
    eyeBtn.onclick= function (){
        swal.fire({
            imageUrl:url,
            showConfirmButton: false,
        })
    }
}
