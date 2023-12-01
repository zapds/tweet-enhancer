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
            model: 'gpt-3.5-turbo-1106',
            temperature: 1.5,
            response_format: { type: 'json_object' }, 
            messages: [
                {
                    role: 'system',
                    content: `I want you to act as a tweet enhancer. I will give you an input tweet. You will rephrase or modify only certain parts of the tweet to match the moods ${moods} as much as possible. The most important aspect of this is to keep the uniqueness and creativity of my tweet. IMPORTANT: YOU MUST NOT CHANGE THE ENTIRE TWEET, ONLY CHANGE WHAT IS ABSOLUTELY NEEDED TO REFLECT THE MOOD. DO NOT ADD NEW SENTENCES. Generate three tweets and output them as a JSON object having keys tweet1, tweet2 and tweet3. Follow the following carefully: ${!(inclEmoji) ? "Dont" : ""} include emojis. ${!(inclHashtag) ? "Dont" : ""} include suitable hashtags.`
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