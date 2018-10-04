import { Component, State, Prop } from '@stencil/core';
import { MatchResults, RouterHistory } from '@stencil/router';


@Component({
    tag: 'app-edit',
})
export class AppEdit {
    
    @State()  apiRootUrl: string = 'https://polymer-101-workshop.cleverapps.io/api/blogpost/';

    autor : HTMLInputElement = null;
    title : HTMLInputElement = null;
    article : HTMLInputElement = null;
    @Prop() match: MatchResults;
    @State() data :any[] = [] ;
    @Prop() history: RouterHistory;


handleSubmit ( event) {
        event.preventDefault();
    
        fetch(`${this.apiRootUrl}`,{
            method: 'PUT',
            body: JSON.stringify({
              _id: this.data['_id'],    
              title:  this.title.value,
              autor: this.autor.value,
              article: this.article.value,
              creationDate : this.data['creationDate']
            }),
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          });
            }
        
          



load() {

        
            fetch(`${this.apiRootUrl}${this.match.params.id}`)
              .then((response: any) => {
                return response.json()
              }).then((data) => {
                this.data = data;
              });
      
          }         

 componentWillLoad () {
    this.load();
        this.handleSubmit = this.handleSubmit.bind(this);
        
         }

         goback() {

            this.history.goBack();
           }  
    render() {
        return (
           <div>

      <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">Enter the author name</label>
        <input id="autor" name="autor" type="text" ref={(autor: HTMLInputElement) => this.autor = autor } value={( this.data['autor'] )}  required />
        <br/>
        <label htmlFor="email">Enter your title</label>
        <input id="title" name="title" type="text" ref={(title: HTMLInputElement) => this.title = title } value={(this.data['title']  ) }  required />
<br/>
        <label htmlFor="article">Enter your texte</label>
        <input id="article" name="article" type="text" ref={(article: HTMLInputElement) => this.article = article }  value={(this.data['article']  ) }  required/>
        <br/>
        <button>Send data!</button>
        <button onClick={() => this.goback()}>Cancel</button>

      </form>

           </div>
        );
    }


}