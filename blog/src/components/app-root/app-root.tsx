import { Component } from '@stencil/core';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {

  render() {
    return (
      <div>
        <header>
          <h1>Stencil App Starter</h1>
        </header>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/' component='app-home' exact={true} />
              <stencil-route url='/fetch/:name' component='app-fetch-id' exact={true}  />
              <stencil-route url='/fetch/delete/:id' component='app-delete' exact={true}  />
              <stencil-route url='/fetch/edit/:id' component='app-edit' exact={true}  />

               <stencil-route url='/fetch' component='app-fetch'  />
               <stencil-route url='/addArticle' component='app-add-article'   />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
