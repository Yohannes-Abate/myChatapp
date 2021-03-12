const subForm=document.getElementById('send-form');
const chatmgs=document.querySelector('.message_view');
const socket=io();
socket.on('message',message=>{
    console.log(message);
    displaymessage(message);
    chatmgs.scrollTop=chatmgs.scrollHeight;
});
// message event control
subForm.addEventListener('submit',e =>{
 e.preventDefault();
 // get message
 const msg =e.target.elements.message.value; // 'message' is the id of input button in index.html
 // emit message to server
 socket.emit('chatmsg',msg)
})
// 
function displaymessage(message) {
    const div =document.createElement('div');
    div.classList.add('message');
    div.innerHTML=`<p class="username">user name</p>
    <p class="textmessage">
       ${message}
    </p>`;
    document.querySelector('.message_view').appendChild(div);
}