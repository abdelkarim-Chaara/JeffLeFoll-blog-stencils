import { Component, Prop, State } from '@stencil/core';
import { MatchResults } from '@stencil/router';
import { RouterHistory } from '@stencil/router';

@Component({
  tag: 'app-fetch-id',
  styleUrl: 'app-fetch-id.css',
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
      console.log("ID:==>"+this.match.params.name);
  
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

                   <p>Article : {this.data['article']}</p>
                  <h6>author : {this.data['autor']}</h6>

                  <p>date : {this.data['creationDate'] }</p>
                  <stencil-route-link url='../'>
                  <button onClick={() => this.close()} >
                    Back
                  </button>
                </stencil-route-link>
                    <hr/>
             
                 
           
            </div>
      );
  }
}
