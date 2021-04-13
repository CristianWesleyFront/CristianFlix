package ia.fullStackChallenge.movie.model;

import java.util.List;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
class MovieRatings {
	private String Source;
	private String Value;
}

@Getter
@Setter
@NoArgsConstructor
public class MovieModel {
	private String Title;
	private String Year;
	private String Rated;
	private String Released;
	private String Runtime;
	private String Genre;
	private String Director;
	private String Writer;
	private String Actors;
	private String Plot;
	private String Language;
	private String Country;
	private String Awards;
	private String Poster;
	private List<MovieRatings> Ratings;
	private String Metascore;
	private String imdbRating;
	private String imdbVotes;
	private String imdbID;
	private String Type;
	private String DVD;
	private String BoxOffice;
	private String Production;
	private String Website;
	private String Response;
}