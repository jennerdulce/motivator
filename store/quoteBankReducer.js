// State
const initialState =
{
  id: 0,
  quotes: [
    '“All our dreams can come true, if we have the courage to pursue them.” – Walt Disney',
    '“The secret of getting ahead is getting started.” – Mark Twain',
    '“Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.” – Mary Kay Ash',
    '“The best time to plant a tree was 20 years ago. The second best time is now.” – Chinese Proverb',
    '“It’s hard to beat a person who never gives up.” – Babe Ruth',
    '“Everything you can imagine is real.”― Pablo Picasso',
    '“When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.” ― Helen Keller',
    '“Do one thing every day that scares you.”― Eleanor Roosevelt',
    '“Happiness is not something ready made. It comes from your own actions.” ― Dalai Lama XIV',
    '“Whatever you are, be a good one.” ― Abraham Lincoln',
    '“The same boiling water that softens the potato hardens the egg. It’s what you’re made of. Not the circumstances.” – Unknown',
    '“If something is important enough, even if the odds are stacked against you, you should still do it.” – Elon Musk',
    '“Hold the vision, trust the process.” – Unknown',
    '“One day or day one. You decide.” – Unknown',
    '“No one is to blame for your future situation but yourself. If you want to be successful, then become “Successful.”― Jaymin Shah',
    '“Things may come to those who wait, but only the things left by those who hustle.”― Abraham Lincoln',
    '“We are what we repeatedly do. Excellence, then, is not an act, but a habit.” – Aristotle',
    '“Great things are done by a series of small things brought together” – Vincent Van Gogh',
    '“Very often, a change of self is needed more than a change of scene.’ – A.C. Benson',
    '“The hard days are what make you stronger.” – Aly Raisman',
    '“Don’t say you don’t have enough time. You have exactly the same number of hours per day that were given to Helen Keller, Pasteur, Michelangelo, Mother Teresa, Leonardo Da Vinci, Thomas Jefferson, and Albert Einstein.” – H. Jackson Brown Jr.',
    '“Hard work beats talent when talent doesn’t work hard.” – Tim Notke',
    '“Unsuccessful people make their decisions based on their current situations. Successful people make their decisions based on where they want to be.” – Benjamin Hardy',
    '“If you cannot do great things, do small things in a great way.” – Napoleon Hill',
    '“Don’t limit your challenges. Challenge your limits.” – Unknown',
    '“Whenever you find yourself doubting how far you can go, just remember how far you have come.” – Unknown',
    '“When written in Chinese the word “crisis” is composed of two characters – one represents danger and the other represents opportunity.” – John F Kennedy',
    '“In the middle of every difficulty lies opportunity.” – Albert Einstein',
    '“Start where you are. Use what you have. Do what you can.” – Arthur Ashe',
    '“Dreams don’t work unless you do.” – John C. Maxwell',
    '“Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do.” – Pele',
  ],
  favorites: [],
  currentQuote: ''
}

// Reducer
export default function reducer(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case 'GET_QUOTE':
      let randomQuote = state.quotes[Math.floor(Math.random() * state.quotes.length)];
      return { ...state, currentQuote: randomQuote }
    case 'ADD_TO_FAVORITES':
      let updateId = state.id + 1;
      let newQuote = {
        id: updateId,
        quote: payload
      }
      return { ...state, id: updateId, favorites: [...state.favorites, newQuote] }
    case 'DELETE_FROM_FAVORITES':
      let newList = state.favorites.filter(quote => payload !== quote.id)
      return { ...state, id: updateId, favorites: newList }
    default:
      return state
  }
}

// Action Creators
export const getQuote = () => {
  return {
    type: 'GET_QUOTE'
  }
}

export const addToFavorites = (payload) => {
  return {
    type: 'ADD_TO_FAVORITES',
    payload: payload
  }
}

export const deleteFromFavorites = (payload) => {
  return {
    type: 'DELETE_FROM_FAVORITES',
    payload: payload
  }
}