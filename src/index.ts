const main = async () => {
  console.log(getArticlesList);
};

async function getArticlesList() {
  return (
    await fetch('https://qiita.com/api/v2/items?query=user%3Anakawodayo')
  ).json();
}
