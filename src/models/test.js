let arr= [ 1, 2 ,3 ,4 ,5 ,1, 4, 5];
arr.forEach( docs => {
    console.log(docs)
    if( docs==4) return
})