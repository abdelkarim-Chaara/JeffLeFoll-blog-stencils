import { Component } from '@stencil/core';


@Component({
    tag: 'app-header',
   styleUrl: '../../global/css/clean-blog.css',

})
export class AppHeader {
    
    render() {
        return (
<div>
            <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
              <div class="container">
                <a class="navbar-brand" href="/">Stencil Blog </a>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  Menu
                  <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                  <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                      <a class="nav-link" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/fetch">Articles</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/addArticle">Post New Article</a>
                    </li>
                   
                  </ul>
                </div>
              </div>
            </nav>
        
            <header class="masthead"  id="head" >
              <div class="overlay"></div>
              <div class="container">
                <div class="row">
                  <div class="col-lg-8 col-md-10 mx-auto">
                    <div class="site-heading">
                      <h1>Stencil Blog</h1>
                      <span class="subheading">A Demo </span>
                    </div>
                  </div>
                </div>
              </div>
            </header>
            </div>
            );
    }
}