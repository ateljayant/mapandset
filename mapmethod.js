                                  //Q.1 MAP METHOD:
    // You are given a string (STR) of length N, you have to print the count of all alphabet.(using maps)
    // Input:
    // abcadeecfb
    // Output:
    // a=2
    // b=2
    // c=2
    // d=1
    // e=2
    // f=1

    function printChar(s){
        var map=new Map();
        s.split('').forEach((ele)=>{
            if(map.has(ele)){
                map.set(ele,map.get(ele)+1)
            }
            else{
                map.set(ele,1)
            }
        });
        s.split('').forEach((i)=>{
            if(map.has(i) && map.get(i)!=0){
                console.log(i + "="+map.get(i)+' ');
                map.set(i,0)
            }
        })
     }
    var s="leetCode";
    printChar(s);