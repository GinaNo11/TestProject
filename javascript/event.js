$(function( ) {
//   var btnshow =document.getElementsByClassName("theshow");
//  var listshow =document.getElementsByClassName("listcart");
    
         $(".theshowmenu").click(function () {
            $(".menuu").toggleClass("menuu-open");
            // $(this).toggleClass("open-btn");
         });
         $(".close-btn").click(function () {
          $(".menuu").toggleClass("menuu-open");
          // $(this).toggleClass("open-btn");
       });

   $("ul#father>li").hover(function(){
    $(this).find('ul#g').show(400);
    },function(){ $(this).find('ul#g').hide(400);
    });
    $("ul.son>li").hover(function(){
        $(this).find('ul#d').show(400);
        },function(){ $(this).find('ul#d').hide(400);
        });
      
        let btnshow = document.getElementsByClassName('theshow');
        //  let listshow =document.getElementsByClassName("listcart");
             for(var i=0 ;i<btnshow.length;i++){
              var button =btnshow[i];
              button.addEventListener( 'click', addContantBtn);
             }

          function addContantBtn(event){
            var button =event.target;
            var show =button.parentElement.parentElement;
            var title = show.getElementsByClassName('title')[0].innerText;
            var price = show.getElementsByClassName('price')[0].innerText;
            var imge = show.getElementsByClassName('product-img')[0].src;
              showContantBtn(imge,title,price);
       } 
          
          function showContantBtn( imge, title,price){
                let listshow =document.getElementsByClassName("listcart")[0];
                 let cart =document.createElement('ul');
                let ourshow =`<li style="list-style-type: none;"> <div class="products-center">
                <div class="product btnShow">
                    <div class="img-container btnShow" style="float: left;">
                        <img src=${imge} alt="product"  style="margin:0 auto;width:100px;height:100px">
                    </div>
                 <div class="title"> <h3  >${title}</h3></div>
                  <div class="price"><h4>${price}</h4> </div>
                 
                  <input type="submit" value="Remove" class="btn btn-outline-light theshow" onclick="deletitem(this)"> 
                
                   </div> </li>`;
                                //  listshow.insertAdjacentHtml("beforeend",ourshow);
                  cart.innerHTML = ourshow;
                  listshow.append(cart);
                  // appendChildren(listshow,cart);btnShow
                  // console.log(ourshow)
                  // appendChildren.show(cart);
             }
             
       
}); 
function deletitem( item){
   item.parentElement.remove();
  // alert("jjjjjkj");
}

 
 