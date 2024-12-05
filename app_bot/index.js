import TelegramBot from "node-telegram-bot-api";

const token = "7412926022:AAHfzChDIO1aRaK3vQ0qHirUMj-MwVHrNxc";
const url = "https://api.telegram.org/bot" + token;

const bot = new TelegramBot(token, { polling: true });

bot.on("message", async (msg) => {
	const chatId = msg.chat.id;
	const text = msg.text;

	if (text === "/start") {
		await bot.sendMessage(chatId, "Welcome to my bot keybord button!", {
			reply_markup: {
				keyboard: [[{ text: "Option 1" }], [{ text: "Option 2" }]],
			},
		});
	}

	if (text === "/start") {
		await bot.sendMessage(chatId, "Welcome to my bot inline button!", {
			reply_markup: {
				inline_keyboard: [[{ text: "Option 1", web_app: { url } }]],
			},
		});
	}
});
