import { Component, Prop, State } from '@stencil/core';
import { MatchResults, RouterHistory } from '@stencil/router';


@Component({
    tag: 'app-delete',
    styleUrl: '../../global/css/clean-blog.css',

})
export class AppDelete {
    @Prop() match: MatchResults;
    @State() data :any[] = [] ;
    @Prop() history: RouterHistory;

    @State() apiRootUrl: string = 'https://polymer-101-workshop.cleverapps.io/api/blogpost/';

    load() {

        
        fetch(`${this.apiRootUrl}${this.match.params.id}`,{
            method:'DELETE',headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }}).then(() => { 
                  alert(' Deleted !');
                  this.close(); 
                                     }).catch((error) => {
                alert(' Error ! please retry !! ');
                console.error(error);
              });
  
      }

 componentWillLoad() {

    if (this.match.params.id) {
        
        this.load();
      }
  
      console.log('Component is being rendered');  

 }  
 close() {

   this.history.goBack();
  }
    render() {
        return (
<stencil-route-link url='../'>
                  <button class="btn btn-secondary" onClick={() => this.close()} >
                    Back
                  </button>
                </stencil-route-link>        );
    }
}