/**
 * 
 */
/**
 * @author CristianCorreia
 *
 */
package ia.fullStackChallenge.movie.service;

import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import reactor.core.publisher.Mono;

@Service
public class MovieService {

	private final String API_OMDB_KEY = "9163174a";

	WebClient webClient = WebClient.create("http://www.omdbapi.com");

	public Mono<String> getMovies(String name, String page) {

		StringBuilder path = new StringBuilder();
		path.append("/?apikey=").append(API_OMDB_KEY).append("&s=").append(name).append("&page=").append(page);
		
		return webClient.get().uri(path.toString()).retrieve().bodyToMono(String.class);
	}

	public Mono<String> getOneMovie(String id) {
		
		StringBuilder path = new StringBuilder();
		path.append("/?apikey=").append(API_OMDB_KEY).append("&i=").append(id);
		
		return webClient.get().uri(path.toString()).retrieve().bodyToMono(String.class);
	}
}