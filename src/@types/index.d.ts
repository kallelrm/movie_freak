interface Genres {
  name: string;
}

interface ProductionCountries {
  name: string;
}

export interface Movie {
  id: number;
  genres: Genres[];
  production_countries: ProductionCountries[];
  release_date: string;
  original_title: string;
  backdrop_path: string;
  overview: string;
}

export interface Actor {
  name: string;
  cast_id: number;
  character: string;
  profile_path: string;
  gender: number;
}
