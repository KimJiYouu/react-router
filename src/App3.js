import axios from "axios"
import { useEffect, useState } from "react"


function App() {
  
  /*
    npm install axios 설치
  */

  const [data, setData] = useState({});

  const handleClick = () => {
    //fetch의 반환 promise
    //axios의 반환 promise
    //결론 == 문법이 같음
    axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
    .then(response => setData(response.data)) /* fetch와는 다르게 json()과정을 거치지 않아도 됨 */
  }

  //이 데이터를 화면이 로드될 떄 axios로 select 태그의 옵션으로 처리
  //https://raw.githubusercontent.com/yopy0817/data_example/master/by.json

  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/by.json')
    .then(response => {
      const newList = response.data.map((val => <option key={val.key}>{val.value}</option>));
      return setList(newList);
    })
  },[])



  //async & await
  //1. async 안에서 await을 사용할 수 있음
  //2. function에 async를 붙이면 리턴이 프로미스가 됨
  //3. 리턴이 promise라면 await을 사용할 수 있고, then을 생략할 수 있음
  const handleClick2 = async () => {

    // axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
    //   .then(data =>{
    //     console.log(1)

    //     axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/by.json')
    //         .then(data => {
    //           console.log(3)

    //           axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hello.json')
    //             .then(data => {
    //               console.log(5)

    //             });
    //         })
    //   } );

    //   console.log(2);
    //   console.log(4);
    //   console.log(6);
    // 콘솔 출력 결과 246135

   //console.log(axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')); 리턴이 promise


    const result  = await axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json');
    console.log(result);

    const result2 = await axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hello.json');
    console.log(result2);

    const result3 = await axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/by.json');
    console.log(result3);


  }


  
  return (
    <div>
      <h3>엑시오스 사용하기</h3>
      <button onClick={handleClick}>데이터가져오기</button>
      <button onClick={handleClick2}>어싱크확인하기</button>
      <p>
        {data.userId} <br />
        {data.userPw} <br />
        {data.userName}
      </p>

      <h4>실습</h4>
      <select>
      {list}
      </select>
    </div>
  )
}
export default App