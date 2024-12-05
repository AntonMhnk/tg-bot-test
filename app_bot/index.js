import TelegramBot from "node-telegram-bot-api";
import "dotenv/config";

const token = process.env.TG_BOT_API_KEY;
const url = "https://tg-bot-test-antonmhnk.netlify.app/";
const photoPath = "./images/cat.jpg";

const bot = new TelegramBot(token, { polling: true });

bot.on("message", async (msg) => {
	const chatId = msg.chat.id;
	const text = msg.text;
	const firstName = msg.from.first_name;
	const lastName = msg.from.last_name;
	const username = msg.from.username;
	const id = msg.from.id;
	const is_bot = msg.from.is_bot;

	const caption = `Welcome to my bot: ${firstName} ${lastName}!\n\nUserName: ${username};\nid: ${id};\n_bot?:${is_bot}_`;

	// if (text === "/start") {
	// 	await bot.sendMessage(
	// 		chatId,
	// 		`Welcome to my bot: ${firstName} ${lastName}! UserName: ${username}; id: ${id}; bot?:${is_bot}`,
	// 		{
	// 			reply_markup: {
	// 				keyboard: [[{ text: "Option 1" }], [{ text: "Option 2" }]],
	// 			},
	// 		}
	// 	);
	// }

	if (text === "/start") {
		await bot.sendPhoto(chatId, photoPath, {
			caption: caption,
			reply_markup: {
				inline_keyboard: [[{ text: "Open game!", web_app: { url } }]],
			},
		});
	}
});
