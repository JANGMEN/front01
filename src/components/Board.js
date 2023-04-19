import axios from 'axios';
import React, { useEffect } from 'react';

function App() {
    // postman으로는 가능
    // Access-Control-Allow-Origin => CORS 문제 => 같은 서버가 아니면 rest 자료를 받을 수 없다.
    // 함수 생성
    // async funtion selectList() {}
    const selectList = async() => {
        const url = `/web04/api/board/select.json?page=1`;
        const headers = {"Content-Type":"application/json"};
        const {data} = await axios.get(url, {headers});
        console.log(data);

    }

    // 화면이 로딩될 때
    useEffect( () => {
        selectList(); // 함수 호출하기
    }, [])
    return(
        <div>
            <h3>Board</h3>
            <p>조만간 게시판 연동이 이루어 질 예정입니다.</p>
        </div>
    );
}

export default App;