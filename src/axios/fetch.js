import axios from 'axios'

export function fetch(options) {
  return new Promise((resolve,reject) => {
    const instance = axios.create({  //axios实例
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 30*1000
    });
    instance(options).then(response=>{
      resolve(response);
    }).catch(error => {
      console.log('请求异常请详细查看报错信息：' + error);
      reject(error);
    });
  });
}