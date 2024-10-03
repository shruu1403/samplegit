function num(a,b,c)
{
    if(a>b && a>c)
    {
        console.log("a is greatest")
        return a
    }
    else if(b>a || b>c)
    {
        console.log("b is greatest")
        return b
    }
    else{
        console.log("c is greatest")
        return c
    }
}
num(10,20,30)
