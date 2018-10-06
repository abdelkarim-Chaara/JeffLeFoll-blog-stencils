import { Component, State, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';


@Component({
    tag: 'app-edit',
 styleUrl : 'app-edit.css',
})
export class AppEdit {
    
    @State()  apiRootUrl: string = 'https://polymer-101-workshop.cleverapps.io/api/blogpost/';

    autor : HTMLInputElement = null;
    title : HTMLInputElement = null;
    article : HTMLTextAreaElement = null;
    @Prop() match: MatchResults;
    @State() data :any[] = [] ;


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
          }).then(()=> { alert("Operation Succeded "); this.goback()}).catch((err) => {
            console.error('Could not load data', err) }) ;
      
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
location.replace("/");
} 

    render() {
        return (
           <div class="h-100 row align-items-center">
      <form onSubmit={this.handleSubmit}>
      <div class="form-group">

        <label htmlFor="username">Enter the author name</label>
        <input id="autor"  class="form-control" name="autor" type="text" ref={(autor: HTMLInputElement) => this.autor = autor } value={( this.data['autor'] )}  required />
        <br/>
        <label htmlFor="email">Enter your title</label>
        <input id="title"  class="form-control" name="title" type="text" ref={(title: HTMLInputElement) => this.title = title } value={(this.data['title']  ) }  required />
<br/>
        <label htmlFor="article">Enter your texte</label>
        <textarea id="article"  class="form-control" name="article"  ref={(article: HTMLTextAreaElement) => this.article = article } value={(this.data['article']  ) }     required/>
        <br/>
        <div class="row  align-items-center">
        <button class="btn btn-primary " >Envoyer</button>
        <button class="btn btn-secondary" onClick={() => this.goback()}>Cancel</button>
</div></div>
      </form>

           </div>
        );
    }


}