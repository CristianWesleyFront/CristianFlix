/**
 * 
 */
/**
 * @author CristianCorreia
 *
 */
package ia.fullStackChallenge.movie.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ia.fullStackChallenge.movie.service.MovieService;
import reactor.core.publisher.Mono;


@RestController
@RequestMapping("movie")
public class MovieController {
	@Autowired
	private MovieService movieService;

	
	@RequestMapping(value = "/getMovies", method = RequestMethod.GET)
	public Mono<String> getMovies(@RequestParam(name = "s", required = true) String s, @RequestParam String page) {
		return movieService.getMovies(s, page);
	}
	
	@RequestMapping(value = "/getOneMovie", method = RequestMethod.GET)
	public Mono<String> getOneMovie(@RequestParam(name = "i", required = true) String i) {
		return movieService.getOneMovie(i);
	}
	
}