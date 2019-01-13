import fetchAPI from './../Utils/fetchAPI'


const Races = {
  getLatest: () => {
    return fetchAPI({
      url: `${process.env.END_POINT}/bet-easy-code-challenge/next-to-jump`,
    })
  }
}

export default Races;