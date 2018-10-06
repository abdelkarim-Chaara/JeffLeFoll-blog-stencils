import { Component, Prop ,State, Method} from '@stencil/core';

@Component({
  tag: 'app-fetch',
  styleUrls: ['../../global/css/clean-blog.css','app-fetch.css'],

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

 
  trim(str: string) {
    if(str===null){
      return "Text null"
    } else {
      let r = Math.min(141, str.length);
      let point = str.length <= 140 ? "" : "...";
      return str.substring(0, r) + point;
    }

  }
  render() {
    if(this.data && this.data.length>0) {

      return (
        <div>
        
       
        <div class="row justify-content-md-center col-sm-9 ">
   

              { 
 this.data.map((data) =>
 
 <div>

   <div class="row">

   <h3>Title : {data.title}</h3>
   </div>
  <div class="row" id="article"  >

  <p class="article">Article : {this.trim(data.article)}</p>
  </div>
  <div class="row">

  <footer  class="blockquote-footer" >Posted By :  <b>{data.autor}</b>  on <b>{data.creationDate}</b> </footer >

</div>
<div class="row">

<div class="col-sm-4  ">
 <stencil-route-link url={this.name+data._id}>
 <button class="btn btn-block btn-info ">Details
 </button>
</stencil-route-link> 
</div>

<div class="col-sm-4 ">
<stencil-route-link   url={"fetch/edit/"+data._id}>
 <button class="btn  btn-block btn-success " >Edit 
 </button>
</stencil-route-link>
</div>

<div class="col-sm-4">
<stencil-route-link url={"fetch/delete/"+data._id}>
 <button class="btn  btn-block btn-danger" >Delete 
 </button>
</stencil-route-link>
</div>
</div>
<hr/>
</div>  ) 
              } 
           
           </div>  </div>  
      
               
                
              )



    }
    else {
   
   return (" Nothing to render ");
   
    } 
   

    
  }
}