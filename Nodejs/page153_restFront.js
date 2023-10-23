async function getUser(){
    try{
        const res = await axios.get('user') //page194 밑 2번 줄 
        const users = res.data; // page.195- 1번 줄
        const list = document.getElementById('list');
        list.innerHTML = '';
        Object.keys(users).map(function(key){
            const userDiv = document.createElement('div');
            // page.197 그림 4-9 이순신[수정][삭제]
            const span = document.createElement('span');
            span.textContent = users[key] //이순신, 안중근
            const edit = document.createElement('button');
            edit.textContent = '수정';
            edit.addEventListener('click',
            async ()=>{
                const name = prompt('수정 선택');
                if(!name){return alert('값을 입력하세요.')}
                try{
                    await axios.put('/user/'+key, {name}); //page.195 두번째 else if
                    getUser(); // 수정된 내용으로 다시 그리기
                }catch(err){console.log(err);}
                });
            const remove = document.createElement('button');
            edit.textContent = '삭제';
            edit.addEventListener('click',
            async ()=>{
                try{
                    await axios.delete('/user/'+key, {name}); //page.195 아래 두번째
                    getUser(); 
                }catch(err){console.log(err);}
            }); // async

            userDiv.appendChild(span); //이순신, 안중근
            userDiv.appendChild(edit); // 수정버튼
            userDiv.appendChild(remove); // 삭제버튼
            list.appendChild(userDiv);


        })
    }
    catch(e){
        console.log(e)
    }
}

window.onload = getUser

document.getElementById('form').addEventListener('submit',
 async (e)=>{
    e.preventDefault(); // html tag 의 기본이벤트를 막는다.
    const name = e.target.username.value;
    if(!name){return alert('값을 입력하세요.')}
    try{
        await axios.post('/user', {name}) // page.195
        getUser();//list ui control
    }
    catch(err){console.log(err);}
    e.target.username.value='';

 }
);