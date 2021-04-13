package ia.fullStackChallenge.movie.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class MoviesModel {
	private String Title;
	private String Year;
	private String imdbID;
	private String Type;
	private String Poster;
}