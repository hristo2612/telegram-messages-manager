const login = require('./login')
const { getChat, chatHistory, searchUsers } = require('./chat-history')

const run = async () => {
  const first_name = await login()
  console.log(first_name);
  const chat = await getChat()
  await chatHistory(chat)
}

run()