import Api from './request'

class Youtube {
    private readonly API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY
    async getTrailer(movieName:string) {
        const response = (await Api.get(`?part=snippet&channelId=UCWOA1ZGywLbqmigxE4Qlvuw&maxResults=25&q=${movieName} trailer oficial&key=${this.API_KEY}`)).data
        return response.items[0].id.videoId
    }
}

export default new Youtube()