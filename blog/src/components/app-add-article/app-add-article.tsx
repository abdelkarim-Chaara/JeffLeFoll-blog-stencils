import { Component, State,  } from '@stencil/core';


@Component({
    tag: 'app-add-article',
    styleUrl: '../../global/css/clean-blog.css',
  })
export class AppAddArticle {
  
@State()  apiRootUrl: string = 'https://polymer-101-workshop.cleverapps.io/api/blogpost/';

 autor : HTMLInputElement = null;
 title : HTMLInputElement = null;
 article : HTMLTextAreaElement = null;
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
  location.replace("/");
  }   
    render() {
        return (
          
<div class="container ">  



      <form onSubmit={this.handleSubmit}>

      <div class="form-group">
        <label htmlFor="author">Enter the author name</label>
        <input id="autor" class="form-control" placeholder="Karim" name="autor" type="text"  ref={(autor: HTMLInputElement) => this.autor = autor }  required />
        </div>
        <div class="form-group">

        <label htmlFor="title">Enter your title</label>
        <input id="title" class="form-control" placeholder="My Life Story" name="title" type="text" ref={(title: HTMLInputElement) => this.title = title }  required />
        </div>
        <div class="form-group">

        <label htmlFor="text">Enter your texte</label>
        <textarea id="article" class="form-control"  placeholder="its was a great time when..."  ref={(article: HTMLTextAreaElement) => this.article = article }  required></textarea>

        </div> 
        <div class="form-group">

         <button class="btn btn-primary ">Send data!</button>
        <button class="btn btn-dark " onClick={() => this.goback()}>Cancel</button>
        </div> 
      </form>
     
      </div> 
     
           
        );
    }
}