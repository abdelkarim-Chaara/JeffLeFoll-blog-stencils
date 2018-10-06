import { Component, Prop, State } from '@stencil/core';
import { MatchResults } from '@stencil/router';
import { RouterHistory } from '@stencil/router';

@Component({
  tag: 'app-fetch-id',
  styleUrl: '../../global/css/clean-blog.css',
  shadow: true
})
export class AppFetchId {
  @Prop() match: MatchResults;
  @State() data :any[] = [] ;
  @Prop() history: RouterHistory;

  @State() apiRootUrl: string = 'https://polymer-101-workshop.cleverapps.io/api/blogpost/';
  
  load() {

        
      fetch(`${this.apiRootUrl}${this.match.params.name}`)
        .then((response: any) => {
          return response.json()
        }).then((data) => {
          this.data = data;
        });

    }
  
    componentWillLoad() { 
  
     if (this.match.params.name) {
        
        this.load();
      }
  
      console.log('Component is being rendered');  
    }

    close() {
      this.history.goBack();
    }
    
  render() {
      return (
        <div >
              
            
        
                   <h3>Title : {this.data['title']}</h3>

                   <p class="mb-0" > {this.data['article']}</p>
                  <footer  class="blockquote-footer" >Posted By : <b>{this.data['autor']}</b>  on <b>{this.data['creationDate'] } </b></footer >
                  <stencil-route-link url='../'>
                  <button class="btn btn-primary" onClick={() => this.close()} >
                    Back
                  </button>
                </stencil-route-link>
                    <hr/>
             
                 
           
            </div>
      );
  }
}
