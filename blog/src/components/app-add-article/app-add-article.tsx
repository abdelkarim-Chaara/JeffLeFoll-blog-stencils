import { Component, State, Prop } from '@stencil/core';
import { RouterHistory } from '@stencil/router';


@Component({
    tag: 'app-add-article',
   // styleUrl: 'app-add-article.css'
})
export class AppAddArticle {
  
@State()  apiRootUrl: string = 'https://polymer-101-workshop.cleverapps.io/api/blogpost/';

 autor : HTMLInputElement = null;
 title : HTMLInputElement = null;
 article : HTMLInputElement = null;
@Prop() history: RouterHistory;
handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    data.append( "json", JSON.stringify( data ) );

    fetch(`${this.apiRootUrl}`,{
      method: 'POST',
      body: JSON.stringify({  
        title:  this.title.value,
        autor: this.autor.value,
        article: this.article.value
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() =>{ alert('Data Submitted'); this.goback();} );
      }

 componentWillLoad () {
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
        <input id="autor" name="autor" type="text"  ref={(autor: HTMLInputElement) => this.autor = autor }  required />
        <br/>
        <label htmlFor="email">Enter your title</label>
        <input id="title" name="title" type="text" ref={(title: HTMLInputElement) => this.title = title }  required />
<br/>
        <label htmlFor="article">Enter your texte</label>
        <input id="article" name="article" type="text" ref={(article: HTMLInputElement) => this.article = article }  required/>
        <br/>
        <button>Send data!</button>
        <button onClick={() => this.goback()}>Cancel</button>

      </form>

           </div>
        );
    }
}