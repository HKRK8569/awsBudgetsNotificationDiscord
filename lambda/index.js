const sendAlert = async (message) => {
  const WEB_HOOK_URL = process.env.webHookUrl;
  await fetch(WEB_HOOK_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content: message,
    }),
  });
};

export const handler = async (event) => {
  //TODO:SNSからメッセージを受け取る
  await sendAlert("今月のコストが30ドルを超過しています");
};
