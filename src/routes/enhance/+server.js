import OpenAI from "openai";
import { OPENAI_API_KEY } from '$env/static/private';
import { redirect } from "@sveltejs/kit";

const openai = new OpenAI({
    apiKey: OPENAI_API_KEY,
});


export async function POST({ request }) {
        if (request.method === 'GET') {
            return redirect('/');
        }
        const data = await request.json();
        const tweet = data.tweet;
        const inclEmoji = data.inclEmoji;
        const inclHashtag = data.inclHashtag;
        let moods = [];
        data.mood.forEach(element => {
            if (element.value) {
                moods.push(element.value);
                return;
            }
            if (element.label) {
                moods.push(element.label);
            }
        });
        console.log(tweet, inclEmoji, inclHashtag, moods);

        const chatCompletion = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: 'system',
                    content: `you are a tweet enhancer. rephrase and modify certain words or phrases of the following text, to suit the moods ${moods} as much as possible, while maintaining the intention and creativity of the user's tweet. IMPORTANT: DONT CHANGE THE ENTIRE TWEET, ONLY CHANGE WHAT IS ABSOLUTELY NEEDED TO REFLECT THE MOOD. ${!(inclEmoji) ? "Dont" : ""} include emojis. ${!(inclHashtag) ? "Dont" : ""} include suitable hashtags.`
                },
                {
                    role: 'user',
                    content: tweet
                    
                }
            ]

        });
        return new Response(JSON.stringify({
            result: chatCompletion.choices[0]?.message?.content,
            'moods': moods,
            'inclEmoji': inclEmoji,
            'inclHashtag': inclHashtag,
            'tweet': tweet
        }));
    };