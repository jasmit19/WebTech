function fetchData(callback){
    console.log("all argument:", process.argv);
    let a = argv [2];
    for (let i=1;i<11;i++){
        console.log(i*a);
    }
}
fetchData()

