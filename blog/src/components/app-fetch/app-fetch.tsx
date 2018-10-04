import { Component, Prop ,State, Method} from '@stencil/core';

@Component({
  tag: 'app-fetch',
  styleUrl: 'app-fetch.css',

})
export class AppFetch {

  // Indicate that name should be a public property on the component
  @State() data :any[] ;
  @Prop()
   name: string='/fetch/';
   
  apiRootUrl: string = 'https://polymer-101-workshop.cleverapps.io/api/blogpost/';

  @Method()
  load () {
  
    fetch(`${this.apiRootUrl}`).then(rsp => {
      return   rsp.json();
  
    }).then(data => {
      this.data = data;
  
    }).catch((err) => {
      console.error('Could not load data', err);
    }); 
  }


  componentWillLoad() { 
    console.log('Component is being rendered');

    this.load();
  }
  componentDidLoad() {
    this.load();

    console.log('Component has been rendered');
  }

 
  componentDidUpdate() {
    this.load();

    console.log('Component did update');
  }


  render() {
    if(this.data && this.data.length>0) {

      return (
        
        <div>
          
              { 
 this.data.map((data) =>
 <div>
   <h3>Title : {data.title}</h3>

  <p >Article : {data.article}</p>
  <h6>author : {data.autor}</h6>

   <p>date : {data.creationDate}</p>
 <stencil-route-link url={this.name+data._id}>
 <button>
   More Details
 </button>
</stencil-route-link>
<stencil-route-link url={"fetch/edit/"+data._id}>
 <button>
   Edit 
 </button>
</stencil-route-link>
<stencil-route-link url={"fetch/delete/"+data._id}>
 <button>
   Delete 
 </button>
</stencil-route-link>

   <hr/>
 </div> )
              } 
              
        </div>
              )



    }
    else {
   
   return (" Nothing to render ");
   
    } 
   

    
  }
}