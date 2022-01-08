 const Times=async()=>{
     try{
       console.log("checking in from the timer!!")
        const resData= await fetch('https://api.nytimes.com/svc/topstories/v2/us.json?api-key=ALH55qxTz4oYfouvhFQ6TKWpoUcZOpvI')
           // console.log(resData)
           if(resData.ok){
            const fuck=resData.json()
            fuck.then((data)=>{
                const x=data.results
                displayResult(x)
            })
           }
       
        
     }catch(err){
         console.log(err)
     }

  }
  setTimeout( Times(), 1800000)
 

  const format=async(data)=>{
      const bessy=$("#news")
      const carder=`
        <div id="carder" class="card" >
                <div class="card-body">
                  <h5 class="card-title">${data.title}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">${data.item_type}</h6>
                  <p class="card-text">${data.abstract}</p>
                  <a href=${data.url} target="blank" class="card-link">Full Article</a>
                </div>
              </div>
        `
      bessy.append(carder)
  }
 const displayResult=async(data)=>{
for(let i=0;i<4;i++){
    format(data[i])
}
 }