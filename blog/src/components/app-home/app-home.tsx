import { Component } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: '../../global/css/clean-blog.css',
  shadow: true
})
export class AppHome {

  render() {
    return (
      <div class="measure-lg">
      
        <h1 id="stencil-a-compiler-for-web-components">Stencil: A Compiler for Web Components</h1>
<p>Stencil is a compiler that generates Web Components (more specifically, Custom Elements). Stencil combines the best concepts of the most popular frameworks into a simple build-time tool.</p>
<p>Stencil takes features such as</p>
<ul>
<li>Virtual DOM</li>
<li>Async rendering (inspired by React Fiber)</li>
<li>Reactive data-binding</li>
<li>TypeScript</li>
<li>JSX</li>
</ul>
<p>and then generates standards-based Web Components with these features baked in.</p>
<p>Since Stencil generates standards-compliant web components, they can work with many popular frameworks right out of the box, and can be used without a framework because they are just web components. Stencil also enables a number of key capabilities on top of Web Components, in particular Server Side Rendering (SSR) without the need to run a headless browser, pre-rendering, and objects-as-properties (instead of just strings).</p>
<p>Compared to using Custom Elements directly, Stencil provides extra APIs that makes writing fast components simpler. APIs like Virtual DOM, JSX, and async rendering make fast, powerful components easy to create, while still maintaining 100% compatibility with Web Components.</p>
<p>The developer experience is also tuned, and comes with live reload and a small dev server baked in to the compiler.</p>
</div>
    );
  }
}
