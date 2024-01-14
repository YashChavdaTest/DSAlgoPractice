const nemo = ['nemo']
const everyone =['dory','lory','jack','macl','ramesh','jignesh','mahesh','suresh','nemo']
const large = Array(50000).fill('nemo');

function findNemo(array){
    let t0= performance.now();
    for(let i=0;i<array.length;i++){
        if(array[i]==='nemo'){
            console.log('NEMO Found!!!!!')

        }
    }
    let t1= performance.now();
    console.log('Call to Find Nemo took '+ (t1-10) + ' milliseconds')
}

findNemo(large)  // O(n) --> Linear Time