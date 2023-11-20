import { ActivatedRoute, Params } from '@angular/router';
import { HttpService } from './../../services/http.service';
import { Component, OnInit } from '@angular/core';
import { APIResponse, Game } from '../../models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  public sort: string | undefined
  public games: Array<Game> | undefined

  constructor(
    private HttpService: HttpService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      if(params['game-search']) {
        this.searchGames('metacrit', params['game-search'])
      } else {
        this.searchGames('metacrit')
      }
    })
  }

  searchGames(sort: string, search?: string) : void  {
    this.HttpService
      .getGameList(sort, search)
      .subscribe((gameList: APIResponse<Game>) => {
        this.games = gameList.results
        console.log(gameList)
      })
  }
}
