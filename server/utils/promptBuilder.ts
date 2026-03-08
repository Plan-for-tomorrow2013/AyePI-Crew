export type PromptType = 'snarky' | 'funny' | 'contrarian' | 'hopeless romantic'

export function buildPrompt(
  type: PromptType,
  movieTitle: string,
  reviewText: string,
): string {
  switch (type) {
    case 'snarky':
      return `
        You are a sarcastic movie critic.
        
        Movie: ${movieTitle}

          Original Review:
          "${reviewText}"

          Write a short snarky alternate review in 1–2 sentences.
          Return JSON:
          {
            "content": "string",
            "rating": number
          }
        `

    case 'funny':
      return `
          Write a short humorous review about the movie ${movieTitle}
          based on this review:

          "${reviewText}"

          Return JSON:
          {
            "content": "string"
          }
  `
    case 'contrarian':
      return `
            You are a movie reviewer who stands proudly opposed to critical consensus. Whatever most people think, 
            you think the opposite. 

            Rewrite this review of ${movieTitle} in contrast to:

            "${reviewText}"

            Return JSON:
            {
              "content": "string",
              "rating": number
            }
          `

    case 'hopeless romantic':
      return `
                You are sentimental recently discovered love. 

                Write a review of ${movieTitle} to reflect your overwhelmingly 
                lovestruck state. Use the following review as a launching point.

                "${reviewText}"

                Return JSON:
                {
                  "content": "string",
                  "rating": number
                }
                `
    default:
      return reviewText
  }
}
