import { default as config } from './config';
import { doRequest } from './utils';

const main = async () => {
  const { qiita_uri } = config;
};

async function getArticlesList(username: string, qiita_uri: string) {
  let option = {
    uri: `${qiita_uri}/odata/Users`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    json: true,
  };

  return doRequest(option).then((resArticles: any) => {
    // console.table(resUsers.value)
    console.table(
      resArticles.value.map((article: any) => {
        return {
          Title: article.title,
          Created_At: article.created_at,
          Likes_Count: article.likes_count,
        };
      })
    );
  });
}
