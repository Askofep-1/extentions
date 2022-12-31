/**
 * Events are functions that take a function (lambda) as the last argument
 */
//% color="#000000"
namespace Funct {
    

    /**
     * Events can be made into statements that can be put in line with other events,
     * similar to loops or conditions.
     */
    //% block
    export function FunctionWithInput(handler: (input) => void) :(input) => void {
        return handler;
    }
    //% block
    export function Function(handler: () => void) :() => void {
        return handler;
    }
    //% block
    export function Return(val:any){
        ReturnVal = val;
    }

    //% block
    export function Run(input:any,args){
        input(args);
    }
    //% block
    export function Call(input:any,args){
        input;(args);
        return ReturnVal;
    }
    
}
