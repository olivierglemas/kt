export class DetailsModel {
 
  backdrop_path: string;
  poster_path: string;
  overview: string;
  title: string;
  runtime: string;
  release_date: string;
  vote_count: number;
  vote_average: number;
  
  

  constructor(readonly isShell: boolean) { }
}
