//Centro dos métodos de requisição 
import Api from './request'


class Tmdb {
    private readonly API_KEY = process.env.REACT_APP_TMDB_API_KEY
    async getHomeMovies(){
         
            return [
                {
                    slug:'Netflix',
                    title:'Originais Netflix',
                    movies:(await Api.get(`/discover/tv?api_key=${this.API_KEY}&with_networks=213&language=pt-BR`)).data.results
                },
                
                {
                    slug:'Popular',
                    title:'Populares',
                    movies:(await Api.get(`/movie/popular?api_key=${this.API_KEY}&language=pt-BR`)).data.results
                },
                
                {
                    slug:'Em alta',
                    title:'Séries em alta',
                    movies:(await Api.get(`/tv/popular?api_key=${this.API_KEY}&language=pt-BR`)).data.results
                },
            ]
    }
    
    async getDetailsSerie(serieId: string){
        const detailsSerie = (await Api.get(`/tv/${serieId}?api_key=${this.API_KEY}&language=pt-BR`)).data
        return detailsSerie
    }

}
export default new Tmdb()