import request from 'request';

// Requestを送信して、ResponseのBodyデータを返す。
export const doRequest = (option: any): Promise<any> => {
  // option = Object.assign({}, option, {
  // proxy: 'http://127.0.0.1:8888',
  //     strictSSL: false,
  // })
  return new Promise<any>((resolve, reject) => {
    request(option, (error: any, response: any, body: any) =>
      !error && response.statusCode === 200 ? resolve(body) : reject(body)
    );
  });
};
